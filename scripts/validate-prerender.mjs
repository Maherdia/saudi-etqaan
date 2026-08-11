import {
    readFile,
} from 'node:fs/promises';

import {
    join,
} from 'node:path';

const routes = [
    '/',
    '/about',
    '/products/hardware',
    '/products/security',
    '/products/sanitary',
    '/products/technology',
    '/projects',
    '/companies',
    '/contact',
];

function getFilePath(route) {
    if (route === '/') {
        return join(
            'dist',
            'index.html',
        );
    }

    return join(
        'dist',
        route.replace(
            /^\/|\/$/g,
            '',
        ),
        'index.html',
    );
}

for (const route of routes) {
    const filePath =
        getFilePath(route);

    const html =
        await readFile(
            filePath,
            'utf8',
        );

    const checks = {
        title:
            /<title>[^<]+<\/title>/i.test(
                html,
            ),

        description:
            /<meta[^>]+name=["']description["'][^>]+content=["'][^"']+["']/i.test(
                html,
            ),

        canonical:
            /<link[^>]+rel=["']canonical["'][^>]+href=["'][^"']+["']/i.test(
                html,
            ),

        main:
            /<main[\s>]/i.test(
                html,
            ),
    };

    const failed =
        Object.entries(checks)
            .filter(
                ([, value]) =>
                    !value,
            )
            .map(
                ([name]) =>
                    name,
            );

    if (failed.length) {
        throw new Error(
            `${route} failed prerender validation: ${failed.join(', ')}`,
        );
    }

    console.log(
        `✓ validated ${route}`,
    );
}

console.log(
    `\n✓ Validated ${routes.length} prerendered routes.`,
);