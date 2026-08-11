import {
    writeFile,
} from 'node:fs/promises';

import {
    join,
} from 'node:path';

import {
    clientRenderedRoutes,
    SITE_URL,
    sitemapRoutes,
} from '../src/data/routes.js';

function escapeXml(value) {
    return value
        .replace(
            /&/g,
            '&amp;',
        )
        .replace(
            /</g,
            '&lt;',
        )
        .replace(
            />/g,
            '&gt;',
        )
        .replace(
            /"/g,
            '&quot;',
        )
        .replace(
            /'/g,
            '&apos;',
        );
}

function createSitemap() {
    const urls =
        sitemapRoutes
            .map(route => {
                const url =
                    route.path === '/'
                        ? `${SITE_URL}/`
                        : `${SITE_URL}${route.path}`;

                return `    <url>
        <loc>${escapeXml(url)}</loc>
        <changefreq>${route.sitemap.changefreq}</changefreq>
        <priority>${route.sitemap.priority}</priority>
    </url>`;
            })
            .join('\n\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function pathToRewritePattern(
    path,
) {
    return path
        .replace(
            /^\/+|\/+$/g,
            '',
        )
        .replace(
            /[.*+?^${}()|[\]\\]/g,
            '\\$&',
        );
}

function createPrerenderRules() {
    return sitemapRoutes
        .filter(
            route =>
                route.path !== '/',
        )
        .map(route => {
            const cleanPath =
                pathToRewritePattern(
                    route.path,
                );

            const target =
                `${route.path}/index.html`
                    .replace(
                        /\/+/g,
                        '/',
                    );

            return `    RewriteRule ^${cleanPath}/?$ ${target} [L]`;
        })
        .join('\n');
}

function createClientRules() {
    return clientRenderedRoutes
        .map(route => {
            const cleanPath =
                pathToRewritePattern(
                    route.path,
                );

            return `    RewriteRule ^${cleanPath}/?$ /index.html [L]`;
        })
        .join('\n');
}

function createHtaccess() {
    const prerenderRules =
        createPrerenderRules();

    const clientRules =
        createClientRules();

    return `Options -Indexes

DirectoryIndex index.html

ErrorDocument 404 /404.html

<IfModule mod_rewrite.c>
    RewriteEngine On

    # ---------------------------------------------------------
    # Canonical prerendered application routes
    # ---------------------------------------------------------

${prerenderRules}

    # ---------------------------------------------------------
    # Client-rendered application routes
    # ---------------------------------------------------------

${clientRules}

    # ---------------------------------------------------------
    # Real files and generated assets
    # ---------------------------------------------------------

    RewriteCond %{REQUEST_FILENAME} -f [OR]
    RewriteCond %{REQUEST_FILENAME} -d
    RewriteRule ^ - [L]

    # Anything else is a genuine 404.
</IfModule>

<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE text/javascript
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/json
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE image/svg+xml
</IfModule>

<IfModule mod_expires.c>
    ExpiresActive On

    ExpiresByType text/html "access plus 0 seconds"

    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType text/javascript "access plus 1 year"

    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"

    ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

<IfModule mod_headers.c>
    <FilesMatch "\\.(css|js|webp|png|jpg|jpeg|gif|svg|woff2)$">
        Header set Cache-Control "public, max-age=31536000, immutable"
    </FilesMatch>

    <FilesMatch "\\.(html)$">
        Header set Cache-Control "no-cache, no-store, must-revalidate"
    </FilesMatch>

    Header always set X-Content-Type-Options "nosniff"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
`;
}

export async function generateRouteAssets({
    distDirectory,
}) {
    await Promise.all([
        writeFile(
            join(
                distDirectory,
                'sitemap.xml',
            ),
            createSitemap(),
            'utf8',
        ),

        writeFile(
            join(
                distDirectory,
                '.htaccess',
            ),
            createHtaccess(),
            'utf8',
        ),
    ]);

    console.log(
        '✓ generated sitemap.xml',
    );

    console.log(
        '✓ generated .htaccess',
    );
}