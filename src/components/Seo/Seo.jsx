import {
    useEffect,
} from 'react';

const SITE_URL =
    'https://saudietqaan.com.sa';

const DEFAULT_IMAGE =
    `${SITE_URL}/og-cover.webp`;

const DEFAULT_IMAGE_ALT =
    'Saudi Etqaan Co. — integrated architectural hardware, security, sanitary, and technology solutions in Saudi Arabia';

function ensureMetaTag({
    name,
    property,
    content,
}) {
    const selector =
        name
            ? `meta[name="${name}"]`
            : `meta[property="${property}"]`;

    let element =
        document.head.querySelector(
            selector,
        );

    if (!element) {
        element =
            document.createElement(
                'meta',
            );

        if (name) {
            element.setAttribute(
                'name',
                name,
            );
        }

        if (property) {
            element.setAttribute(
                'property',
                property,
            );
        }

        document.head.appendChild(
            element,
        );
    }

    element.setAttribute(
        'content',
        content,
    );
}

function ensureCanonical(url) {
    let canonical =
        document.head.querySelector(
            'link[rel="canonical"]',
        );

    if (!canonical) {
        canonical =
            document.createElement(
                'link',
            );

        canonical.setAttribute(
            'rel',
            'canonical',
        );

        document.head.appendChild(
            canonical,
        );
    }

    canonical.setAttribute(
        'href',
        url,
    );
}

export default function Seo({
    title,
    description,
    path = '/',
    image = DEFAULT_IMAGE,
    imageAlt = DEFAULT_IMAGE_ALT,
    type = 'website',
    noIndex = false,
}) {
    useEffect(() => {
        const normalizedPath =
            path === '/'
                ? '/'
                : path.replace(
                    /\/+$/,
                    '',
                );

        const canonicalUrl =
            normalizedPath === '/'
                ? SITE_URL
                : `${SITE_URL}${normalizedPath}`;

        document.title =
            title;

        ensureCanonical(
            canonicalUrl,
        );

        ensureMetaTag({
            name: 'description',
            content: description,
        });

        ensureMetaTag({
            name: 'robots',
            content:
                noIndex
                    ? 'noindex, nofollow'
                    : 'index, follow',
        });

        ensureMetaTag({
            property: 'og:type',
            content: type,
        });

        ensureMetaTag({
            property: 'og:title',
            content: title,
        });

        ensureMetaTag({
            property: 'og:description',
            content: description,
        });

        ensureMetaTag({
            property: 'og:url',
            content: canonicalUrl,
        });

        ensureMetaTag({
            property: 'og:image',
            content: image,
        });

        ensureMetaTag({
            property: 'og:image:secure_url',
            content: image,
        });

        ensureMetaTag({
            property: 'og:image:type',
            content: 'image/webp',
        });

        ensureMetaTag({
            property: 'og:image:width',
            content: '1200',
        });

        ensureMetaTag({
            property: 'og:image:height',
            content: '630',
        });

        ensureMetaTag({
            property: 'og:image:alt',
            content: imageAlt,
        });

        ensureMetaTag({
            property: 'og:site_name',
            content: 'Saudi Etqaan Co.',
        });

        ensureMetaTag({
            name: 'twitter:card',
            content:
                'summary_large_image',
        });

        ensureMetaTag({
            name: 'twitter:title',
            content: title,
        });

        ensureMetaTag({
            name: 'twitter:description',
            content: description,
        });

        ensureMetaTag({
            name: 'twitter:image',
            content: image,
        });

        ensureMetaTag({
            name: 'twitter:image:alt',
            content: imageAlt,
        });
    }, [
        title,
        description,
        path,
        image,
        imageAlt,
        type,
        noIndex,
    ]);

    return null;
}
