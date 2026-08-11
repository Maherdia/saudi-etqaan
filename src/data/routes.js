export const SITE_URL =
    'https://saudietqaan.com.sa';

const baseRoutes = [
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
            en: {
                title: 'Saudi Etqaan',
                description: 'Saudi Etqaan provides architectural hardware, security and low-current systems, sanitary solutions, smart technologies, and specialized project support across Saudi Arabia.',
            },
            ar: {
                title: 'الإتقان السعودية | حلول متكاملة للمشاريع في المملكة العربية السعودية',
                description: 'تقدم شركة الإتقان السعودية حلول الهاردوير المعماري وأنظمة الأمن والتيار الخفيف والحلول الصحية والتقنيات الذكية ودعم المشاريع المتخصص في المملكة العربية السعودية.',
            },
        },
    },
    {
        id: 'products',
        path: '/products',
        redirectTo: '/products/sanitary',
    },
    {
        id: 'sanitary',
        path: '/products/sanitary',
        page: 'sanitary',
        prerender: true,
        sitemap: { changefreq: 'monthly', priority: '0.9' },
        seo: {
            en: {
                title: 'Sanitary Ware Solutions Saudi Arabia | Saudi Etqaan',
                description: 'Premium sanitary ware, faucets, shower systems, concealed solutions, commercial washroom systems, and bathroom products for projects across Saudi Arabia.',
            },
            ar: {
                title: 'حلول الأدوات الصحية في السعودية | الإتقان السعودية',
                description: 'حلول متكاملة للأدوات الصحية والخلاطات وأنظمة الاستحمام والأنظمة المخفية وتجهيزات دورات المياه التجارية ومنتجات الحمامات للمشاريع في المملكة العربية السعودية.',
            },
        },
    },
    {
        id: 'hardware',
        path: '/products/hardware',
        page: 'hardware',
        prerender: true,
        sitemap: { changefreq: 'monthly', priority: '0.9' },
        seo: {
            en: {
                title: 'Architectural Door Hardware Saudi Arabia | Saudi Etqaan',
                description: 'Architectural and security door hardware solutions in Saudi Arabia, including locks, hinges, door closers, panic hardware, access control, automatic doors, and project support.',
            },
            ar: {
                title: 'هاردوير الأبواب المعماري في السعودية | الإتقان السعودية',
                description: 'حلول هاردوير الأبواب المعمارية والأمنية في السعودية، تشمل الأقفال والمفصلات ومغلقات الأبواب ومخارج الطوارئ والتحكم بالدخول والأبواب الأوتوماتيكية ودعم المشاريع.',
            },
        },
    },
    {
        id: 'technology',
        path: '/products/technology',
        page: 'technology',
        prerender: true,
        sitemap: { changefreq: 'monthly', priority: '0.9' },
        seo: {
            en: {
                title: 'Fleet & Technology Solutions Saudi Arabia | Saudi Etqaan',
                description: 'Fleet tracking, telematics, IoT, smart mobility, control-center technologies, and connected operational solutions for organizations across Saudi Arabia.',
            },
            ar: {
                title: 'حلول الأساطيل والتقنية في السعودية | الإتقان السعودية',
                description: 'حلول تتبع الأساطيل والتليماتكس وإنترنت الأشياء والتنقل الذكي وتقنيات مراكز التحكم والحلول التشغيلية المتصلة للمنشآت في المملكة العربية السعودية.',
            },
        },
    },
    {
        id: 'security',
        path: '/products/security',
        page: 'security',
        prerender: true,
        sitemap: { changefreq: 'monthly', priority: '0.9' },
        seo: {
            en: {
                title: 'Security & Low Current Systems Saudi Arabia | Saudi Etqaan',
                description: 'Integrated security, low-current, MEP, CCTV, access control, communications, automation, and smart-building solutions across Saudi Arabia.',
            },
            ar: {
                title: 'أنظمة الأمن والتيار الخفيف في السعودية | الإتقان السعودية',
                description: 'حلول متكاملة للأمن والتيار الخفيف وكاميرات المراقبة والتحكم بالدخول والاتصالات والأتمتة وأنظمة المباني الذكية للمشاريع في المملكة العربية السعودية.',
            },
        },
    },
    {
        id: 'projects',
        path: '/projects',
        page: 'projects',
        prerender: true,
        sitemap: { changefreq: 'monthly', priority: '0.8' },
        seo: {
            en: {
                title: 'Projects & References | Saudi Etqaan',
                description: 'Explore Saudi Etqaan project references across government, commercial, hospitality, healthcare, industrial, education, infrastructure, and major Saudi developments.',
            },
            ar: {
                title: 'المشاريع والمراجع | الإتقان السعودية',
                description: 'استعرض مشاريع ومراجع الإتقان السعودية في القطاعات الحكومية والتجارية والضيافة والرعاية الصحية والصناعة والتعليم والبنية التحتية والمشاريع الكبرى في المملكة.',
            },
        },
    },
    {
        id: 'companies',
        path: '/companies',
        page: 'companies',
        prerender: true,
        sitemap: { changefreq: 'monthly', priority: '0.7' },
        seo: {
            en: {
                title: 'Saudi Etqaan Group Companies | Saudi Etqaan',
                description: 'Discover the specialist companies within the Saudi Etqaan group and their manufacturing, contracting, engineering, and project-delivery capabilities.',
            },
            ar: {
                title: 'شركات مجموعة الإتقان السعودية | الإتقان السعودية',
                description: 'تعرّف على الشركات المتخصصة ضمن مجموعة الإتقان السعودية وقدراتها في التصنيع والمقاولات والهندسة وتنفيذ وتسليم المشاريع.',
            },
        },
    },
    {
        id: 'about',
        path: '/about',
        page: 'about',
        prerender: true,
        sitemap: { changefreq: 'monthly', priority: '0.8' },
        seo: {
            en: {
                title: 'About Saudi Etqaan | Saudi Arabia',
                description: 'Learn about Saudi Etqaan, a Saudi trading and contracting company delivering architectural hardware, security systems, technology, sanitary solutions, and integrated project support.',
            },
            ar: {
                title: 'عن شركة الإتقان السعودية | المملكة العربية السعودية',
                description: 'تعرّف على شركة الإتقان السعودية، شركة سعودية للتجارة والمقاولات تقدم الهاردوير المعماري وأنظمة الأمن والتقنية والحلول الصحية ودعم المشاريع المتكامل.',
            },
        },
    },
    {
        id: 'contact',
        path: '/contact',
        page: 'contact',
        prerender: true,
        sitemap: { changefreq: 'yearly', priority: '0.7' },
        seo: {
            en: {
                title: 'Contact Saudi Etqaan | Riyadh, Saudi Arabia',
                description: 'Contact Saudi Etqaan in Riyadh for architectural hardware, security, technology, sanitary solutions, project inquiries, and technical support.',
            },
            ar: {
                title: 'اتصل بالإتقان السعودية | الرياض، المملكة العربية السعودية',
                description: 'تواصل مع شركة الإتقان السعودية في الرياض للاستفسار عن الهاردوير المعماري وأنظمة الأمن والتقنية والحلول الصحية ودعم المشاريع والخدمات الفنية.',
            },
        },
    },
    {
        id: 'search',
        path: '/search',
        page: 'search',
        prerender: false,
        seo: {
            en: {
                title: 'Search | Saudi Etqaan',
                description: 'Search Saudi Etqaan products, systems, divisions, and project capabilities.',
            },
            ar: {
                title: 'البحث | الإتقان السعودية',
                description: 'ابحث في منتجات وأنظمة وقطاعات وقدرات مشاريع شركة الإتقان السعودية.',
            },
        },
        noIndex: true,
    },
];

export function stripLocalePrefix(pathname = '/') {
    if (pathname === '/ar') {
        return '/';
    }

    if (pathname.startsWith('/ar/')) {
        return pathname.slice(3) || '/';
    }

    return pathname || '/';
}

export function getLanguageFromPath(pathname = '/') {
    return pathname === '/ar' || pathname.startsWith('/ar/')
        ? 'ar'
        : 'en';
}

export function getLocalizedPath(path, lang = 'en') {
    if (!path || typeof path !== 'string' || !path.startsWith('/')) {
        return path;
    }

    const suffixIndex = path.search(/[?#]/);
    const pathname = suffixIndex >= 0 ? path.slice(0, suffixIndex) : path;
    const suffix = suffixIndex >= 0 ? path.slice(suffixIndex) : '';
    const basePath = stripLocalePrefix(pathname);

    if (lang === 'ar') {
        const localizedPath = basePath === '/' ? '/ar' : `/ar${basePath}`;
        return `${localizedPath}${suffix}`;
    }

    return `${basePath}${suffix}`;
}

function createLocalizedRoute(route, locale) {
    const path = getLocalizedPath(route.path, locale);
    const englishPath = getLocalizedPath(route.path, 'en');
    const arabicPath = getLocalizedPath(route.path, 'ar');
    const localizedSeo = route.seo?.[locale];

    return {
        ...route,
        id: `${route.id}-${locale}`,
        baseId: route.id,
        locale,
        path,
        redirectTo: route.redirectTo
            ? getLocalizedPath(route.redirectTo, locale)
            : undefined,
        seo: localizedSeo
            ? {
                ...localizedSeo,
                path,
                locale,
                noIndex: Boolean(route.noIndex),
                alternates: {
                    en: englishPath,
                    ar: arabicPath,
                    xDefault: englishPath,
                },
            }
            : undefined,
    };
}

export const routeManifest = baseRoutes.flatMap(route => [
    createLocalizedRoute(route, 'en'),
    createLocalizedRoute(route, 'ar'),
]);

export const prerenderRoutes = routeManifest.filter(route => route.prerender);
export const sitemapRoutes = routeManifest.filter(route => route.sitemap);
export const clientRenderedRoutes = routeManifest.filter(
    route => !route.prerender && (route.page || route.redirectTo),
);

export const notFoundSeo = {
    en: {
        title: 'Page Not Found | Saudi Etqaan',
        description: 'The requested page could not be found.',
        path: '/404',
        locale: 'en',
        noIndex: true,
    },
    ar: {
        title: 'الصفحة غير موجودة | الإتقان السعودية',
        description: 'تعذر العثور على الصفحة المطلوبة.',
        path: '/ar/404',
        locale: 'ar',
        noIndex: true,
    },
};

export const NOT_FOUND_PATH = '/404';

export function getRouteById(id, locale = 'en') {
    return routeManifest.find(
        route => route.baseId === id && route.locale === locale,
    );
}
