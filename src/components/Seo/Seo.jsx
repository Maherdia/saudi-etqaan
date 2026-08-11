import {
    useEffect,
} from 'react';

import {
    SITE_URL,
} from '../../data/routes';

const DEFAULT_IMAGE = `${SITE_URL}/og-cover.webp`;
const DEFAULT_IMAGE_ALT = 'Saudi Etqaan Co. — integrated architectural hardware, security, sanitary, and technology solutions in Saudi Arabia';

function ensureMetaTag({ name, property, content }) {
    const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
    let element = document.head.querySelector(selector);

    if (!element) {
        element = document.createElement('meta');
        if (name) element.setAttribute('name', name);
        if (property) element.setAttribute('property', property);
        document.head.appendChild(element);
    }

    element.setAttribute('content', content);
}

function ensureLink({ rel, href, hreflang }) {
    const selector = hreflang
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]:not([hreflang])`;
    let element = document.head.querySelector(selector);

    if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        if (hreflang) element.setAttribute('hreflang', hreflang);
        document.head.appendChild(element);
    }

    element.setAttribute('href', href);
}

function absoluteUrl(path) {
    if (path === '/') return SITE_URL;
    return `${SITE_URL}${path.replace(/\/+$/, '')}`;
}

function removeAlternateLinks() {
    document.head
        .querySelectorAll('link[rel="alternate"][hreflang]')
        .forEach(element => element.remove());
}

export default function Seo({
    title,
    description,
    path = '/',
    locale = 'en',
    alternates,
    image = DEFAULT_IMAGE,
    imageAlt = DEFAULT_IMAGE_ALT,
    type = 'website',
    noIndex = false,
}) {
    useEffect(() => {
        const canonicalUrl = absoluteUrl(path);
        document.title = title;

        ensureLink({ rel: 'canonical', href: canonicalUrl });

        if (alternates) {
            ensureLink({ rel: 'alternate', hreflang: 'en', href: absoluteUrl(alternates.en) });
            ensureLink({ rel: 'alternate', hreflang: 'ar', href: absoluteUrl(alternates.ar) });
            ensureLink({ rel: 'alternate', hreflang: 'x-default', href: absoluteUrl(alternates.xDefault) });
        } else {
            removeAlternateLinks();
        }

        ensureMetaTag({ name: 'description', content: description });
        ensureMetaTag({ name: 'robots', content: noIndex ? 'noindex, nofollow' : 'index, follow' });
        ensureMetaTag({ property: 'og:type', content: type });
        ensureMetaTag({ property: 'og:title', content: title });
        ensureMetaTag({ property: 'og:description', content: description });
        ensureMetaTag({ property: 'og:url', content: canonicalUrl });
        ensureMetaTag({ property: 'og:locale', content: locale === 'ar' ? 'ar_SA' : 'en_SA' });
        ensureMetaTag({ property: 'og:locale:alternate', content: locale === 'ar' ? 'en_SA' : 'ar_SA' });
        ensureMetaTag({ property: 'og:image', content: image });
        ensureMetaTag({ property: 'og:image:secure_url', content: image });
        ensureMetaTag({ property: 'og:image:type', content: 'image/webp' });
        ensureMetaTag({ property: 'og:image:width', content: '1200' });
        ensureMetaTag({ property: 'og:image:height', content: '630' });
        ensureMetaTag({ property: 'og:image:alt', content: imageAlt });
        ensureMetaTag({ property: 'og:site_name', content: 'Saudi Etqaan Co.' });
        ensureMetaTag({ name: 'twitter:card', content: 'summary_large_image' });
        ensureMetaTag({ name: 'twitter:title', content: title });
        ensureMetaTag({ name: 'twitter:description', content: description });
        ensureMetaTag({ name: 'twitter:image', content: image });
        ensureMetaTag({ name: 'twitter:image:alt', content: imageAlt });
    }, [title, description, path, locale, alternates, image, imageAlt, type, noIndex]);

    return null;
}
