export const SITE_URL =
    'https://saudietqaan.com.sa';

export const routeManifest = [
    {
        id: 'home',
        path: '/',
        page: 'home',
        prerender: true,
        sitemap: {
            changefreq: 'monthly',
            priority: '1.0',
        },
        seo: {
            title:
                'Saudi Etqaan',

            description:
                'Saudi Etqaan provides architectural hardware, security and low-current systems, sanitary solutions, smart technologies, and specialized project support across Saudi Arabia.',

            path: '/',
        },
    },

    {
        id: 'products',
        path: '/products',
        redirectTo:
            '/products/sanitary',
    },

    {
        id: 'sanitary',
        path:
            '/products/sanitary',
        page: 'sanitary',
        prerender: true,
        sitemap: {
            changefreq: 'monthly',
            priority: '0.9',
        },
        seo: {
            title:
                'Sanitary Ware Solutions Saudi Arabia | Saudi Etqaan',

            description:
                'Premium sanitary ware, faucets, shower systems, concealed solutions, commercial washroom systems, and bathroom products for projects across Saudi Arabia.',

            path:
                '/products/sanitary',
        },
    },

    {
        id: 'hardware',
        path:
            '/products/hardware',
        page: 'hardware',
        prerender: true,
        sitemap: {
            changefreq: 'monthly',
            priority: '0.9',
        },
        seo: {
            title:
                'Architectural Door Hardware Saudi Arabia | Saudi Etqaan',

            description:
                'Architectural and security door hardware solutions in Saudi Arabia, including locks, hinges, door closers, panic hardware, access control, automatic doors, and project support.',

            path:
                '/products/hardware',
        },
    },

    {
        id: 'technology',
        path:
            '/products/technology',
        page: 'technology',
        prerender: true,
        sitemap: {
            changefreq: 'monthly',
            priority: '0.9',
        },
        seo: {
            title:
                'Fleet & Technology Solutions Saudi Arabia | Saudi Etqaan',

            description:
                'Fleet tracking, telematics, IoT, smart mobility, control-center technologies, and connected operational solutions for organizations across Saudi Arabia.',

            path:
                '/products/technology',
        },
    },

    {
        id: 'security',
        path:
            '/products/security',
        page: 'security',
        prerender: true,
        sitemap: {
            changefreq: 'monthly',
            priority: '0.9',
        },
        seo: {
            title:
                'Security & Low Current Systems Saudi Arabia | Saudi Etqaan',

            description:
                'Integrated security, low-current, MEP, CCTV, access control, communications, automation, and smart-building solutions across Saudi Arabia.',

            path:
                '/products/security',
        },
    },

    {
        id: 'projects',
        path: '/projects',
        page: 'projects',
        prerender: true,
        sitemap: {
            changefreq: 'monthly',
            priority: '0.8',
        },
        seo: {
            title:
                'Projects & References | Saudi Etqaan',

            description:
                'Explore Saudi Etqaan project references across government, commercial, hospitality, healthcare, industrial, education, infrastructure, and major Saudi developments.',

            path:
                '/projects',
        },
    },

    {
        id: 'companies',
        path: '/companies',
        page: 'companies',
        prerender: true,
        sitemap: {
            changefreq: 'monthly',
            priority: '0.7',
        },
        seo: {
            title:
                'Saudi Etqaan Group Companies | Saudi Etqaan',

            description:
                'Discover the specialist companies within the Saudi Etqaan group and their manufacturing, contracting, engineering, and project-delivery capabilities.',

            path:
                '/companies',
        },
    },

    {
        id: 'about',
        path: '/about',
        page: 'about',
        prerender: true,
        sitemap: {
            changefreq: 'monthly',
            priority: '0.8',
        },
        seo: {
            title:
                'About Saudi Etqaan | Saudi Arabia',

            description:
                'Learn about Saudi Etqaan, a Saudi trading and contracting company delivering architectural hardware, security systems, technology, sanitary solutions, and integrated project support.',

            path:
                '/about',
        },
    },

    {
        id: 'contact',
        path: '/contact',
        page: 'contact',
        prerender: true,
        sitemap: {
            changefreq: 'yearly',
            priority: '0.7',
        },
        seo: {
            title:
                'Contact Saudi Etqaan | Riyadh, Saudi Arabia',

            description:
                'Contact Saudi Etqaan in Riyadh for architectural hardware, security, technology, sanitary solutions, project inquiries, and technical support.',

            path:
                '/contact',
        },
    },

    {
        id: 'search',
        path: '/search',
        page: 'search',
        prerender: false,
        seo: {
            title:
                'Search | Saudi Etqaan',

            description:
                'Search Saudi Etqaan products, systems, divisions, and project capabilities.',

            path:
                '/search',

            noIndex: true,
        },
    },

    {
        id: 'notFound',
        path: '*',
        page: 'notFound',
        prerender: false,
        seo: {
            title:
                'Page Not Found | Saudi Etqaan',

            description:
                'The requested page could not be found.',

            path:
                '/404',

            noIndex: true,
        },
    },
];

export const prerenderRoutes =
    routeManifest
        .filter(
            route =>
                route.prerender,
        )
        .map(
            route =>
                route.path,
        );

export const sitemapRoutes =
    routeManifest.filter(
        route =>
            route.sitemap,
    );

export const clientRenderedRoutes =
    routeManifest.filter(
        route =>
            route.path !== '*' &&
            !route.prerender &&
            (
                route.page ||
                route.redirectTo
            ),
    );

export const NOT_FOUND_PATH =
    '/404';

export function getRouteById(id) {
    return routeManifest.find(
        route =>
            route.id === id,
    );
}