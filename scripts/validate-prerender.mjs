import {
    readFile,
} from 'node:fs/promises';

import {
    join,
} from 'node:path';

import {
    prerenderRoutes,
    SITE_URL,
} from '../src/data/routes.js';

/* =========================================================
   FILE PATH
   ========================================================= */

function getFilePath(path) {
    if (path === '/') {
        return join(
            'dist',
            'index.html',
        );
    }

    return join(
        'dist',
        path.replace(
            /^\/+|\/+$/g,
            '',
        ),
        'index.html',
    );
}

/* =========================================================
   HTML HELPERS
   ========================================================= */

function decodeHtml(
    value = '',
) {
    return value
        .replace(
            /&amp;/g,
            '&',
        )
        .replace(
            /&quot;/g,
            '"',
        )
        .replace(
            /&#39;|&apos;/g,
            "'",
        )
        .replace(
            /&lt;/g,
            '<',
        )
        .replace(
            /&gt;/g,
            '>',
        );
}

function getAttribute(
    tag,
    name,
) {
    const match =
        tag.match(
            new RegExp(
                `${name}=["']([^"']*)["']`,
                'i',
            ),
        );

    return match
        ? decodeHtml(
            match[1],
        )
        : '';
}

function findMeta(
    html,
    key,
    value,
) {
    const tags =
        html.match(
            /<meta\b[^>]*>/gi,
        ) ?? [];

    return (
        tags.find(
            tag =>
                getAttribute(
                    tag,
                    key,
                ) === value,
        ) ?? ''
    );
}

function findLink(
    html,
    rel,
    hreflang,
) {
    const tags =
        html.match(
            /<link\b[^>]*>/gi,
        ) ?? [];

    return (
        tags.find(
            tag => {
                if (
                    getAttribute(
                        tag,
                        'rel',
                    ) !== rel
                ) {
                    return false;
                }

                if (!hreflang) {
                    return !getAttribute(
                        tag,
                        'hreflang',
                    );
                }

                return (
                    getAttribute(
                        tag,
                        'hreflang',
                    ) ===
                    hreflang
                );
            },
        ) ?? ''
    );
}

function absoluteUrl(
    path,
) {
    return path === '/'
        ? SITE_URL
        : `${SITE_URL}${path}`;
}

/* =========================================================
   DEVELOPMENT URL CHECK

   Production prerendered HTML must never contain references
   to Vite's temporary localhost prerender server.
   ========================================================= */

function containsLocalDevelopmentUrl(
    html,
) {
    return (
        /https?:\/\/(?:127\.0\.0\.1|localhost)(?::\d+)?\//i
            .test(
                html,
            )
    );
}

/* =========================================================
   VALIDATE ROUTES
   ========================================================= */

for (
    const route
    of prerenderRoutes
) {
    const html =
        await readFile(
            getFilePath(
                route.path,
            ),
            'utf8',
        );

    const titleMatch =
        html.match(
            /<title>([\s\S]*?)<\/title>/i,
        );

    const title =
        decodeHtml(
            titleMatch
                ?.[1]
                ?.trim() ?? '',
        );

    const description =
        getAttribute(
            findMeta(
                html,
                'name',
                'description',
            ),
            'content',
        );

    const robots =
        getAttribute(
            findMeta(
                html,
                'name',
                'robots',
            ),
            'content',
        );

    const ogUrl =
        getAttribute(
            findMeta(
                html,
                'property',
                'og:url',
            ),
            'content',
        );

    const canonical =
        getAttribute(
            findLink(
                html,
                'canonical',
            ),
            'href',
        );

    const hreflangEn =
        getAttribute(
            findLink(
                html,
                'alternate',
                'en',
            ),
            'href',
        );

    const hreflangAr =
        getAttribute(
            findLink(
                html,
                'alternate',
                'ar',
            ),
            'href',
        );

    const hreflangDefault =
        getAttribute(
            findLink(
                html,
                'alternate',
                'x-default',
            ),
            'href',
        );

    const htmlTag =
        html.match(
            /<html\b[^>]*>/i,
        )?.[0] ?? '';

    const expectedCanonical =
        absoluteUrl(
            route.path,
        );

    const expectedEn =
        absoluteUrl(
            route
                .seo
                .alternates
                .en,
        );

    const expectedAr =
        absoluteUrl(
            route
                .seo
                .alternates
                .ar,
        );

    const expectedDefault =
        absoluteUrl(
            route
                .seo
                .alternates
                .xDefault,
        );

    const checks = {
        title:
            title ===
            route.seo.title,

        description:
            description ===
            route.seo.description,

        canonical:
            canonical ===
            expectedCanonical,

        ogUrl:
            ogUrl ===
            expectedCanonical,

        robots:
            robots ===
            'index, follow',

        hreflangEn:
            hreflangEn ===
            expectedEn,

        hreflangAr:
            hreflangAr ===
            expectedAr,

        hreflangDefault:
            hreflangDefault ===
            expectedDefault,

        htmlLang:
            getAttribute(
                htmlTag,
                'lang',
            ) ===
            route.locale,

        htmlDir:
            getAttribute(
                htmlTag,
                'dir',
            ) ===
            (
                route.locale === 'ar'
                    ? 'rtl'
                    : 'ltr'
            ),

        main:
            /<main[\s>]/i
                .test(
                    html,
                ),

        noLocalDevelopmentUrls:
            !containsLocalDevelopmentUrl(
                html,
            ),
    };

    const failed =
        Object.entries(
            checks,
        )
            .filter(
                (
                    [
                        ,
                        value,
                    ],
                ) =>
                    !value,
            )
            .map(
                (
                    [
                        name,
                    ],
                ) =>
                    name,
            );

    if (
        failed.length
    ) {
        throw new Error(
            `${route.path} failed prerender validation: ${failed.join(', ')}`,
        );
    }

    console.log(
        `✓ validated ${route.path}`,
    );
}

console.log(
    `\n✓ Validated ${prerenderRoutes.length} prerendered localized routes with exact metadata and production-safe asset URLs.`,
);