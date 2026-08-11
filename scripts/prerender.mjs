import {
    mkdir,
    writeFile,
} from 'node:fs/promises';

import {
    dirname,
    join,
} from 'node:path';

import {
    fileURLToPath,
} from 'node:url';

import {
    chromium,
} from '@playwright/test';

import {
    preview,
} from 'vite';

import {
    NOT_FOUND_PATH,
    prerenderRoutes,
} from '../src/data/routes.js';

import {
    generateRouteAssets,
} from './generate-route-assets.mjs';

const currentFile =
    fileURLToPath(
        import.meta.url,
    );

const currentDirectory =
    dirname(currentFile);

const projectRoot =
    join(
        currentDirectory,
        '..',
    );

const distDirectory =
    join(
        projectRoot,
        'dist',
    );

const HOST =
    '127.0.0.1';

const PORT =
    4174;

const BASE_URL =
    `http://${HOST}:${PORT}`;

function getOutputPath(route) {
    if (route === '/') {
        return join(
            distDirectory,
            'index.html',
        );
    }

    const cleanRoute =
        route.replace(
            /^\/+|\/+$/g,
            '',
        );

    return join(
        distDirectory,
        cleanRoute,
        'index.html',
    );
}

async function preparePage(
    page,
    route,
) {
    await page.route(
        '**/*',
        async requestRoute => {
            const requestUrl =
                new URL(
                    requestRoute
                        .request()
                        .url(),
                );

            const isLocal =
                requestUrl.hostname ===
                HOST ||
                requestUrl.hostname ===
                'localhost';

            if (isLocal) {
                await requestRoute.continue();

                return;
            }

            await requestRoute.abort();
        },
    );

    const response =
        await page.goto(
            `${BASE_URL}${route}`,
            {
                waitUntil:
                    'domcontentloaded',

                timeout:
                    30000,
            },
        );

    if (
        !response ||
        !response.ok()
    ) {
        throw new Error(
            `Failed to load ${route}`,
        );
    }

    await page.waitForFunction(
        () => {
            const root =
                document.getElementById(
                    'root',
                );

            const main =
                document.querySelector(
                    'main',
                );

            return Boolean(
                root &&
                root.children.length >
                0 &&
                main,
            );
        },
        {
            timeout:
                15000,
        },
    );

    await page.waitForFunction(
        () => {
            const title =
                document.title.trim();

            const description =
                document.querySelector(
                    'meta[name="description"]',
                );

            const canonical =
                document.querySelector(
                    'link[rel="canonical"]',
                );

            return Boolean(
                title &&
                description?.getAttribute(
                    'content',
                ) &&
                canonical?.getAttribute(
                    'href',
                ),
            );
        },
        {
            timeout:
                10000,
        },
    );
}

async function prerenderRoute(
    browser,
    route,
) {
    const page =
        await browser.newPage();

    try {
        await preparePage(
            page,
            route,
        );

        const html =
            await page.content();

        const outputPath =
            getOutputPath(
                route,
            );

        await mkdir(
            dirname(
                outputPath,
            ),
            {
                recursive: true,
            },
        );

        await writeFile(
            outputPath,
            html,
            'utf8',
        );

        console.log(
            `✓ prerendered ${route}`,
        );
    } finally {
        await page.close();
    }
}

async function prerender404(
    browser,
) {
    const page =
        await browser.newPage();

    try {
        await preparePage(
            page,
            NOT_FOUND_PATH,
        );

        const html =
            await page.content();

        const outputPath =
            join(
                distDirectory,
                '404.html',
            );

        await writeFile(
            outputPath,
            html,
            'utf8',
        );

        console.log(
            '✓ prerendered custom 404',
        );
    } finally {
        await page.close();
    }
}

async function run() {
    let server = null;
    let browser = null;

    try {
        server =
            await preview({
                root:
                    projectRoot,

                preview: {
                    host:
                        HOST,

                    port:
                        PORT,

                    strictPort:
                        true,
                },
            });

        browser =
            await chromium.launch({
                headless:
                    true,
            });

        for (
            const route of
            prerenderRoutes
        ) {
            await prerenderRoute(
                browser,
                route,
            );
        }

        await prerender404(
            browser,
        );

        await generateRouteAssets({
            distDirectory,
        });

        console.log(
            `\n✓ Prerendered ${prerenderRoutes.length} public routes plus custom 404.`,
        );
    } finally {
        if (browser) {
            await browser.close();
        }

        if (server) {
            await new Promise(
                resolve => {
                    server.httpServer.close(
                        resolve,
                    );
                },
            );
        }
    }
}

run().catch(error => {
    console.error(
        '\nPrerender failed:',
        error,
    );

    process.exitCode = 1;
});