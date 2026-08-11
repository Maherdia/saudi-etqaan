import {
    test,
    expect,
} from '@playwright/test';

import {
    prerenderRoutes,
    SITE_URL,
} from '../src/data/routes.js';

const publicRoutes = prerenderRoutes;

test.describe('public routes', () => {
    for (const route of publicRoutes) {
        test(`${route.path} renders with its SEO title`, async ({
            page,
        }) => {
            await page.goto(route.path);

            await expect(
                page.locator('body'),
            ).toBeVisible();

            await expect(page).toHaveTitle(
                route.seo.title,
            );
        });
    }
});

test('localized routes expose canonical and hreflang metadata', async ({ page }) => {
    const arabicAbout = publicRoutes.find(
        route => route.baseId === 'about' && route.locale === 'ar',
    );

    await page.goto(arabicAbout.path);

    await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        'href',
        `${SITE_URL}${arabicAbout.path}`,
    );
    await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute(
        'href',
        `${SITE_URL}/about`,
    );
    await expect(page.locator('link[rel="alternate"][hreflang="ar"]')).toHaveAttribute(
        'href',
        `${SITE_URL}/ar/about`,
    );
});

test('language toggle switches the document to Arabic RTL', async ({
    page,
}) => {
    await page.goto('/');

    const html = page.locator('html');

    await expect(html).toHaveAttribute(
        'dir',
        'ltr',
    );

    await expect(html).toHaveAttribute(
        'lang',
        'en',
    );

    const languageToggle = page.locator(
        '.language-toggle',
    );

    await expect(
        languageToggle,
    ).toBeVisible();

    await expect(
        languageToggle,
    ).toHaveAccessibleName(
        /switch to arabic/i,
    );

    await languageToggle.click();

    await expect(page).toHaveURL(/\/ar$/);

    await expect(html).toHaveAttribute(
        'dir',
        'rtl',
    );

    await expect(html).toHaveAttribute(
        'lang',
        'ar',
    );

    await expect(
        languageToggle,
    ).toHaveText('EN');
});

test('side menu opens, traps navigation in the UI, and closes with Escape', async ({
    page,
}) => {
    await page.goto('/');

    const menuTrigger = page.locator(
        '.site-menu-trigger',
    );

    await expect(
        menuTrigger,
    ).toBeVisible();

    await expect(
        menuTrigger,
    ).toHaveAttribute(
        'aria-expanded',
        'false',
    );

    await menuTrigger.click();

    await expect(
        menuTrigger,
    ).toHaveAttribute(
        'aria-expanded',
        'true',
    );

    await expect(
        menuTrigger,
    ).toHaveAccessibleName(
        /close menu/i,
    );

    const sideMenu = page.locator(
        '.side-menu',
    );

    await expect(
        sideMenu,
    ).toBeVisible();

    await expect(sideMenu).toHaveAttribute('role', 'region');
    await expect(sideMenu).not.toHaveAttribute('role', 'dialog');

    await expect
        .poll(async () => {
            return page.evaluate(() => {
                return (
                    document.body.style
                        .overflow === 'hidden'
                );
            });
        })
        .toBe(true);

    await expect
        .poll(async () => {
            return page.evaluate(() => {
                const activeElement =
                    document.activeElement;

                const menu =
                    document.querySelector(
                        '.side-menu',
                    );

                return Boolean(
                    menu &&
                        activeElement &&
                        menu.contains(
                            activeElement,
                        ),
                );
            });
        })
        .toBe(true);

    await page.keyboard.press('Escape');

    await expect(
        menuTrigger,
    ).toHaveAttribute(
        'aria-expanded',
        'false',
    );

    await expect(
        sideMenu,
    ).not.toBeVisible();

    await expect
        .poll(async () => {
            return page.evaluate(() => {
                return (
                    document.body.style
                        .overflow !== 'hidden'
                );
            });
        })
        .toBe(true);

    await expect
        .poll(async () => {
            return page.evaluate(() => {
                return (
                    document.activeElement ===
                    document.querySelector(
                        '.site-menu-trigger',
                    )
                );
            });
        })
        .toBe(true);
});

test('site search returns navigable results', async ({
    page,
}) => {
    await page.goto('/search');

    const searchPage = page.locator(
        '.search-page',
    );

    await expect(
        searchPage,
    ).toBeVisible();

    const searchInput =
        searchPage.locator(
            '.search-field-wrap input[type="search"]',
        );

    await expect(
        searchInput,
    ).toHaveCount(1);

    await expect(
        searchInput,
    ).toBeVisible();

    await expect(
        searchInput,
    ).toHaveAccessibleName(
        /search the site/i,
    );

    await searchInput.fill(
        'hardware',
    );

    await expect(
        searchInput,
    ).toHaveValue(
        'hardware',
    );

    const resultCards =
        searchPage.locator(
            '.search-result-card',
        );

    await expect(
        resultCards.first(),
    ).toBeVisible();

    await expect
        .poll(async () => {
            return await resultCards.count();
        })
        .toBeGreaterThan(0);

    const firstResult =
        resultCards.first();

    const href =
        await firstResult.getAttribute(
            'href',
        );

    expect(href).toBeTruthy();

    expect(
        href.startsWith('/'),
    ).toBe(true);

    expect(
        href.startsWith(
            'javascript:',
        ),
    ).toBe(false);

    const currentUrl =
        page.url();

    await firstResult.click();

    await expect
        .poll(() => page.url())
        .not.toBe(currentUrl);

    await expect(
        page.locator('body'),
    ).toBeVisible();
});

test('unknown route renders the custom 404 page', async ({
    page,
}) => {
    await page.goto(
        '/this-route-does-not-exist',
    );

    await expect(
        page.locator('body'),
    ).toContainText(
        /page not found|404/i,
    );
});

test('contact page exposes valid email and phone links', async ({
    page,
}) => {
    await page.goto('/contact');

    const emailLink = page.locator(
        'a[href^="mailto:"]',
    );

    const phoneLink = page.locator(
        'a[href^="tel:"]',
    );

    await expect(
        emailLink.first(),
    ).toBeVisible();

    await expect(
        phoneLink.first(),
    ).toBeVisible();

    const emailHref =
        await emailLink
            .first()
            .getAttribute('href');

    const phoneHref =
        await phoneLink
            .first()
            .getAttribute('href');

    expect(emailHref).toMatch(
        /^mailto:.+@.+\..+/,
    );

    expect(phoneHref).toMatch(
        /^tel:\+?[0-9()\-\s]+$/,
    );
});

test.describe('mobile carousel controls', () => {
    test('home Industries We Serve controls are visible and change the active card', async ({
        page,
    }) => {
        await page.setViewportSize({
            width: 390,
            height: 844,
        });

        await page.goto('/');

        const industriesSection =
            page.locator(
                '.industries-section',
            );

        await expect(
            industriesSection,
        ).toBeVisible();

        const controls =
            page.locator(
                '.industries-controls',
            );

        await expect(
            controls,
        ).toBeVisible();

        const buttons =
            controls.locator('button');

        await expect(
            buttons,
        ).toHaveCount(2);

        await expect(
            buttons.first(),
        ).toBeVisible();

        await expect(
            buttons.last(),
        ).toBeVisible();

        const activeCard =
            page.locator(
                '.industry-card-active',
            );

        const before =
            await activeCard
                .innerText();

        await buttons.last().click();

        await expect
            .poll(async () => {
                return await activeCard.innerText();
            })
            .not.toBe(before);
    });

    test('product solution controls are visible and rotate solutions', async ({
        page,
    }) => {
        await page.setViewportSize({
            width: 390,
            height: 844,
        });

        await page.goto(
            '/products/hardware',
        );

        const controls =
            page.locator(
                '.product-solutions-arrows',
            );

        await expect(
            controls,
        ).toBeVisible();

        const buttons =
            controls.locator('button');

        await expect(
            buttons,
        ).toHaveCount(2);

        await expect(
            buttons.first(),
        ).toBeVisible();

        await expect(
            buttons.last(),
        ).toBeVisible();

        const activeTitle =
            page.locator(
                '.product-solution-feature-copy h3',
            );

        const before =
            await activeTitle.innerText();

        await buttons.last().click();

        await expect
            .poll(async () => {
                return await activeTitle.innerText();
            })
            .not.toBe(before);
    });
});