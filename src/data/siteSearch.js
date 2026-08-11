import { companies } from './content';
import projects from './projects';
import { productDivisions } from './products';

export function getLocalizedValue(
    value,
    lang = 'en',
) {
    if (!value) {
        return '';
    }

    if (typeof value === 'string') {
        return value;
    }

    if (
        typeof value === 'object' &&
        !Array.isArray(value)
    ) {
        return (
            value[lang] ??
            value.en ??
            ''
        );
    }

    return String(value);
}

export function normalizeSearchText(
    value = '',
) {
    return String(value)
        .normalize('NFKD')
        .replace(/[\u064B-\u065F\u0670]/g, '')
        .replace(/ـ/g, '')
        .replace(/[أإآٱ]/g, 'ا')
        .replace(/ى/g, 'ي')
        .replace(/ؤ/g, 'و')
        .replace(/ئ/g, 'ي')
        .toLocaleLowerCase()
        .replace(/[^\p{L}\p{N}]+/gu, ' ')
        .trim();
}

function localizedPair(value) {
    return [
        getLocalizedValue(value, 'en'),
        getLocalizedValue(value, 'ar'),
    ].filter(Boolean);
}

function getProductNavigation() {
    return productDivisions.map(
        division => ({
            id: division.id,
            path: division.path,
            title: division.title,
            products: (
                division.categories ?? []
            ).map(category => ({
                slug: category.slug,
                label: category.title,
            })),
        }),
    );
}

export const productNavigation =
    getProductNavigation();

function makeItem({
    id,
    path,
    title,
    titleAlt = '',
    type,
    typeAlt = '',
    keywords = [],
    group = '',
}) {
    const searchableText =
        normalizeSearchText(
            [
                title,
                titleAlt,
                type,
                typeAlt,
                group,
                ...keywords,
            ]
                .filter(Boolean)
                .join(' '),
        );

    return {
        id,
        path,
        title,
        type,
        group,
        searchableText,
    };
}

function createPageItems({
    lang,
    pageLabels = {},
}) {
    const isArabic = lang === 'ar';

    const definitions = [
        ['home', '/', pageLabels.home],
        ['products', '/products', pageLabels.products],
        ['projects', '/projects', pageLabels.projects],
        ['companies', '/companies', pageLabels.companies],
        ['about', '/about', pageLabels.about],
        ['contact', '/contact', pageLabels.contact],
    ];

    return definitions
        .filter(([, , title]) => title)
        .map(([id, path, title]) =>
            makeItem({
                id: `page-${id}`,
                path,
                title,
                type: isArabic
                    ? 'صفحة'
                    : 'Page',
                keywords: [id],
            }),
        );
}

function createProductItems(lang) {
    const isArabic = lang === 'ar';
    const items = [];

    productDivisions.forEach(
        division => {
            const divisionTitle =
                getLocalizedValue(
                    division.title,
                    lang,
                );

            const divisionAlt =
                getLocalizedValue(
                    division.title,
                    lang === 'ar'
                        ? 'en'
                        : 'ar',
                );

            items.push(
                makeItem({
                    id:
                        `division-${division.id}`,
                    path: division.path,
                    title: divisionTitle,
                    titleAlt:
                        divisionAlt,
                    type: isArabic
                        ? 'قسم منتجات'
                        : 'Product division',
                    keywords: [
                        ...localizedPair(
                            division.kicker,
                        ),
                        ...localizedPair(
                            division.description,
                        ),
                    ],
                }),
            );

            (
                division.categories ?? []
            ).forEach(category => {
                const categoryTitle =
                    getLocalizedValue(
                        category.title,
                        lang,
                    );

                const categoryAlt =
                    getLocalizedValue(
                        category.title,
                        lang === 'ar'
                            ? 'en'
                            : 'ar',
                    );

                const categoryPath =
                    `${division.path}#${category.slug}`;

                const categoryKeywords = [
                    ...localizedPair(
                        category.description,
                    ),
                    ...localizedPair(
                        category.secondaryDescription,
                    ),
                    ...(category.products ?? [])
                        .flatMap(
                            localizedPair,
                        ),
                ];

                items.push(
                    makeItem({
                        id:
                            `solution-${division.id}-${category.slug}`,
                        path:
                            categoryPath,
                        title:
                            categoryTitle,
                        titleAlt:
                            categoryAlt,
                        type: isArabic
                            ? 'حل ومنتجات'
                            : 'Solution & products',
                        group:
                            divisionTitle,
                        keywords:
                            categoryKeywords,
                    }),
                );

                (
                    category.products ?? []
                ).forEach(
                    (product, index) => {
                        const productTitle =
                            getLocalizedValue(
                                product,
                                lang,
                            );

                        if (!productTitle) {
                            return;
                        }

                        const productAlt =
                            getLocalizedValue(
                                product,
                                lang === 'ar'
                                    ? 'en'
                                    : 'ar',
                            );

                        items.push(
                            makeItem({
                                id:
                                    `capability-${division.id}-${category.slug}-${index}`,
                                path:
                                    categoryPath,
                                title:
                                    productTitle,
                                titleAlt:
                                    productAlt,
                                type: isArabic
                                    ? 'منتج / قدرة'
                                    : 'Product / capability',
                                group:
                                    `${divisionTitle} · ${categoryTitle}`,
                                keywords: [
                                    categoryTitle,
                                    categoryAlt,
                                    divisionTitle,
                                    divisionAlt,
                                ],
                            }),
                        );
                    },
                );
            });

            (
                division.partners ?? []
            ).forEach(
                (partner, index) => {
                    const partnerName =
                        getLocalizedValue(
                            partner.name,
                            lang,
                        );

                    if (!partnerName) {
                        return;
                    }

                    items.push(
                        makeItem({
                            id:
                                `partner-${division.id}-${index}`,
                            path:
                                division.path,
                            title:
                                partnerName,
                            titleAlt:
                                getLocalizedValue(
                                    partner.name,
                                    lang === 'ar'
                                        ? 'en'
                                        : 'ar',
                                ),
                            type: isArabic
                                ? 'شريك / علامة'
                                : 'Partner / brand',
                            group:
                                divisionTitle,
                        }),
                    );
                },
            );

            (
                division.brands ?? []
            ).forEach(
                (brand, index) => {
                    const brandName =
                        Array.isArray(brand)
                            ? brand[0]
                            : getLocalizedValue(
                                brand.name ?? brand,
                                lang,
                            );

                    if (!brandName) {
                        return;
                    }

                    items.push(
                        makeItem({
                            id:
                                `brand-${division.id}-${index}`,
                            path:
                                division.path,
                            title:
                                brandName,
                            type: isArabic
                                ? 'علامة تجارية'
                                : 'Brand',
                            group:
                                divisionTitle,
                        }),
                    );
                },
            );
        },
    );

    return items;
}

function createProjectItems(lang) {
    const isArabic = lang === 'ar';

    return projects.map(
        (project, index) => {
            const title =
                getLocalizedValue(
                    project.name,
                    lang,
                );

            const altTitle =
                getLocalizedValue(
                    project.name,
                    lang === 'ar'
                        ? 'en'
                        : 'ar',
                );

            return makeItem({
                id:
                    `project-${project.slug ?? index}`,
                path:
                    `/projects?search=${encodeURIComponent(
                        getLocalizedValue(
                            project.name,
                            'en',
                        ),
                    )}#project-directory`,
                title,
                titleAlt:
                    altTitle,
                type: isArabic
                    ? 'مشروع'
                    : 'Project',
                group:
                    getLocalizedValue(
                        project.division?.title,
                        lang,
                    ),
                keywords: [
                    ...localizedPair(
                        project.city,
                    ),
                    ...localizedPair(
                        project.client,
                    ),
                    ...localizedPair(
                        project.consultant,
                    ),
                    ...localizedPair(
                        project.contractor,
                    ),
                    ...localizedPair(
                        project.category,
                    ),
                    ...localizedPair(
                        project.sector?.title,
                    ),
                    project.year ?? '',
                    project.brand ?? '',
                ],
            });
        },
    );
}

function createCompanyItems(lang) {
    const isArabic = lang === 'ar';

    return companies.map(
        company =>
            makeItem({
                id:
                    `company-${company.id}`,
                path:
                    '/companies',
                title:
                    getLocalizedValue(
                        company.name,
                        lang,
                    ),
                titleAlt:
                    getLocalizedValue(
                        company.name,
                        lang === 'ar'
                            ? 'en'
                            : 'ar',
                    ),
                type: isArabic
                    ? 'شركة'
                    : 'Company',
                keywords: [
                    company.shortName ?? '',
                    ...localizedPair(
                        company.desc,
                    ),
                ],
            }),
    );
}

export function createSiteSearchItems({
    lang = 'en',
    pageLabels = {},
} = {}) {
    return [
        ...createPageItems({
            lang,
            pageLabels,
        }),
        ...createProductItems(
            lang,
        ),
        ...createProjectItems(
            lang,
        ),
        ...createCompanyItems(
            lang,
        ),
    ];
}

export function searchSiteItems(
    items,
    query,
    limit = 30,
) {
    const normalizedQuery =
        normalizeSearchText(
            query,
        );

    if (!normalizedQuery) {
        return [];
    }

    const queryTerms =
        normalizedQuery
            .split(' ')
            .filter(Boolean);

    return items
        .map(item => {
            const normalizedTitle =
                normalizeSearchText(
                    item.title,
                );

            const matchesAllTerms =
                queryTerms.every(
                    term =>
                        item.searchableText.includes(
                            term,
                        ),
                );

            if (!matchesAllTerms) {
                return null;
            }

            let score = 1;

            if (
                normalizedTitle ===
                normalizedQuery
            ) {
                score += 100;
            } else if (
                normalizedTitle.startsWith(
                    normalizedQuery,
                )
            ) {
                score += 50;
            } else if (
                normalizedTitle.includes(
                    normalizedQuery,
                )
            ) {
                score += 25;
            }

            return {
                ...item,
                score,
            };
        })
        .filter(Boolean)
        .sort(
            (a, b) =>
                b.score - a.score ||
                a.title.localeCompare(
                    b.title,
                ),
        )
        .slice(0, limit);
}
