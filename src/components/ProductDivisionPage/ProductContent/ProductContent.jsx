import {
    useEffect,
    useMemo,
    useState,
} from 'react';

import {
    useLocation,
} from 'react-router-dom';

import {
    ProductPhoto,
} from '../ProductMedia/ProductMedia';

import './ProductContent.css';

/* =========================================================
   LOCALIZATION
   ========================================================= */

function getLocalizedValue(
    value,
    lang,
) {
    if (
        value &&
        typeof value === 'object' &&
        !Array.isArray(value)
    ) {
        return (
            value[lang] ??
            value.en ??
            ''
        );
    }

    return value ?? '';
}

function getSectionContent(
    division,
    sectionName,
    propertyName,
    lang,
    fallback = '',
) {
    return (
        getLocalizedValue(
            division?.[sectionName]?.[
            propertyName
            ],
            lang,
        ) || fallback
    );
}

/* =========================================================
   SECTION HEADING
   ========================================================= */

function ProductContentHeading({
    eyebrow,
    title,
    description,
}) {
    return (
        <div className="product-section-heading product-content-heading">
            {eyebrow && (
                <span>
                    {eyebrow}
                </span>
            )}

            {title && (
                <h2>
                    {title}
                </h2>
            )}

            {description && (
                <p>
                    {description}
                </p>
            )}
        </div>
    );
}

/* =========================================================
   PRODUCT CONTENT
   ========================================================= */

export default function ProductContent({
    division,
    photos = {},
    lang = 'en',
}) {
    const isArabic =
        lang === 'ar';

    const solutionCategories =
        useMemo(
            () =>
                division.categories ??
                [],
            [
                division.categories,
            ],
        );

    const solutionPhotos =
        photos.solutions ?? [];

    const [
        activeSolutionIndex,
        setActiveSolutionIndex,
    ] = useState(0);

    const location =
        useLocation();

    useEffect(() => {
        const requestedSlug =
            decodeURIComponent(
                location.hash.replace(
                    /^#/,
                    '',
                ),
            );

        if (!requestedSlug) {
            return undefined;
        }

        const requestedIndex =
            solutionCategories.findIndex(
                category =>
                    category.slug ===
                    requestedSlug,
            );

        if (requestedIndex < 0) {
            return undefined;
        }

        const frame =
            window.requestAnimationFrame(
                () => {
                    setActiveSolutionIndex(
                        requestedIndex,
                    );
                },
            );

        return () => {
            window.cancelAnimationFrame(
                frame,
            );
        };
    }, [
        location.hash,
        solutionCategories,
    ]);

    const safeSolutionIndex =
        solutionCategories.length > 0
            ? activeSolutionIndex %
            solutionCategories.length
            : 0;

    const activeSolution =
        solutionCategories[
        safeSolutionIndex
        ] ?? null;

    const activeSolutionImage =
        solutionPhotos[
        safeSolutionIndex
        ] ?? null;

    useEffect(() => {
        const requestedSlug =
            decodeURIComponent(
                location.hash.replace(
                    /^#/,
                    '',
                ),
            );

        if (
            !requestedSlug ||
            activeSolution?.slug !==
            requestedSlug
        ) {
            return undefined;
        }

        const frame =
            window.requestAnimationFrame(
                () => {
                    document
                        .getElementById(
                            requestedSlug,
                        )
                        ?.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center',
                        });
                },
            );

        return () => {
            window.cancelAnimationFrame(
                frame,
            );
        };
    }, [
        activeSolution,
        location.hash,
    ]);

    const nextSolution =
        solutionCategories.length > 0
            ? solutionCategories[
            (
                safeSolutionIndex +
                1
            ) %
            solutionCategories.length
            ]
            : null;

    const nextSolutionIndex =
        solutionCategories.length > 0
            ? (
                safeSolutionIndex +
                1
            ) %
            solutionCategories.length
            : 0;

    function showPreviousSolution() {
        if (
            solutionCategories.length <
            2
        ) {
            return;
        }

        setActiveSolutionIndex(
            current =>
                (
                    current -
                    1 +
                    solutionCategories.length
                ) %
                solutionCategories.length,
        );
    }

    function showNextSolution() {
        if (
            solutionCategories.length <
            2
        ) {
            return;
        }

        setActiveSolutionIndex(
            current =>
                (
                    current + 1
                ) %
                solutionCategories.length,
        );
    }

    const whatWeDoTitle =
        getSectionContent(
            division,
            'whatWeDoSection',
            'title',
            lang,
            isArabic
                ? 'خدمات مصممة وفق متطلبات المشاريع'
                : 'Services designed around project requirements',
        );

    const whatWeDoDescription =
        getSectionContent(
            division,
            'whatWeDoSection',
            'description',
            lang,
        );

    const solutionsTitle =
        getSectionContent(
            division,
            'solutionsSection',
            'title',
            lang,
        );

    const solutionsDescription =
        getSectionContent(
            division,
            'solutionsSection',
            'description',
            lang,
        );

    return (
        <>
            {/* =================================================
                WHAT WE DO
                ================================================= */}

            {division.services?.length >
                0 && (
                    <section className="product-division-section product-division-section-alt product-services-section">
                        <div className="product-division-container">
                            <ProductContentHeading
                                eyebrow={
                                    isArabic
                                        ? 'ماذا نقدم'
                                        : 'WHAT WE DO'
                                }
                                title={
                                    whatWeDoTitle
                                }
                                description={
                                    whatWeDoDescription
                                }
                            />

                            <div className="product-service-grid">
                                {division.services.map(
                                    (
                                        service,
                                        index,
                                    ) => (
                                        <article
                                            className="product-service-card"
                                            key={
                                                getLocalizedValue(
                                                    service.title,
                                                    'en',
                                                ) ||
                                                index
                                            }
                                        >
                                            <small>
                                                {String(
                                                    index +
                                                    1,
                                                ).padStart(
                                                    2,
                                                    '0',
                                                )}
                                            </small>

                                            <div className="product-service-card-copy">
                                                <h3>
                                                    {getLocalizedValue(
                                                        service.title,
                                                        lang,
                                                    )}
                                                </h3>

                                                {service.description && (
                                                    <p>
                                                        {getLocalizedValue(
                                                            service.description,
                                                            lang,
                                                        )}
                                                    </p>
                                                )}
                                            </div>
                                        </article>
                                    ),
                                )}
                            </div>
                        </div>
                    </section>
                )}

            {/* =================================================
                OUR SOLUTIONS
                ================================================= */}

            {solutionCategories.length >
                0 &&
                activeSolution && (
                    <section className="product-division-section product-solutions-section">
                        <div className="product-division-container">
                            <ProductContentHeading
                                eyebrow={
                                    isArabic
                                        ? 'حلولنا'
                                        : 'OUR SOLUTIONS'
                                }
                                title={
                                    solutionsTitle
                                }
                                description={
                                    solutionsDescription
                                }
                            />

                            <div
                                className={
                                    `product-solutions-stage ${solutionCategories.length ===
                                        1
                                        ? 'product-solutions-stage-single'
                                        : ''
                                    }`
                                }
                            >
                                <article
                                    className={
                                        `product-solution-feature-card ${activeSolutionImage
                                            ? ''
                                            : 'product-solution-feature-card-no-media'
                                        }`
                                    }
                                    id={
                                        activeSolution.slug
                                    }
                                    key={
                                        `${activeSolution.slug}-${safeSolutionIndex}`
                                    }
                                >
                                    <div className="product-solution-feature-copy">
                                        <div className="product-solution-feature-meta">
                                            <span>
                                                {isArabic
                                                    ? `الحل / ${String(
                                                        safeSolutionIndex +
                                                        1,
                                                    ).padStart(
                                                        2,
                                                        '0',
                                                    )}`
                                                    : `SOLUTION / ${String(
                                                        safeSolutionIndex +
                                                        1,
                                                    ).padStart(
                                                        2,
                                                        '0',
                                                    )}`}
                                            </span>

                                            <span>
                                                {isArabic
                                                    ? 'حل متكامل'
                                                    : 'INTEGRATED SOLUTION'}
                                            </span>
                                        </div>

                                        <h3>
                                            {getLocalizedValue(
                                                activeSolution.title,
                                                lang,
                                            )}
                                        </h3>

                                        {activeSolution.description && (
                                            <div className="product-solution-feature-description">
                                                <p>
                                                    {getLocalizedValue(
                                                        activeSolution.description,
                                                        lang,
                                                    )}
                                                </p>

                                                {activeSolution.secondaryDescription && (
                                                    <p>
                                                        {getLocalizedValue(
                                                            activeSolution.secondaryDescription,
                                                            lang,
                                                        )}
                                                    </p>
                                                )}
                                            </div>
                                        )}

                                        {activeSolution.products?.length >
                                            0 && (
                                                <div className="product-solution-feature-capabilities">
                                                    <span className="product-solution-feature-capabilities-label">
                                                        {getLocalizedValue(
                                                            activeSolution.productsTitle,
                                                            lang,
                                                        ) ||
                                                            (isArabic
                                                                ? 'القدرات'
                                                                : 'CAPABILITIES')}
                                                    </span>

                                                    <ul>
                                                        {activeSolution.products.map(
                                                            (
                                                                item,
                                                                itemIndex,
                                                            ) => (
                                                                <li
                                                                    key={
                                                                        `${getLocalizedValue(
                                                                            item,
                                                                            'en',
                                                                        )}-${itemIndex}`
                                                                    }
                                                                >
                                                                    {getLocalizedValue(
                                                                        item,
                                                                        lang,
                                                                    )}
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                </div>
                                            )}
                                    </div>

                                    {activeSolutionImage && (
                                        <ProductPhoto
                                            src={
                                                activeSolutionImage
                                            }
                                            title={
                                                getLocalizedValue(
                                                    activeSolution.title,
                                                    lang,
                                                )
                                            }
                                            index={
                                                safeSolutionIndex +
                                                1
                                            }
                                            variant="solution"
                                            alt=""
                                            showOverlay
                                        />
                                    )}
                                </article>

                                {solutionCategories.length >
                                    1 &&
                                    nextSolution && (
                                        <button
                                            type="button"
                                            className="product-solution-preview-card"
                                            onClick={
                                                showNextSolution
                                            }
                                            aria-label={
                                                isArabic
                                                    ? 'عرض الحل التالي'
                                                    : 'Show next solution'
                                            }
                                        >
                                            <span className="product-solution-preview-index">
                                                {isArabic
                                                    ? `الحل / ${String(
                                                        nextSolutionIndex +
                                                        1,
                                                    ).padStart(
                                                        2,
                                                        '0',
                                                    )}`
                                                    : `SOLUTION / ${String(
                                                        nextSolutionIndex +
                                                        1,
                                                    ).padStart(
                                                        2,
                                                        '0',
                                                    )}`}
                                            </span>

                                            <span className="product-solution-preview-title">
                                                {getLocalizedValue(
                                                    nextSolution.title,
                                                    lang,
                                                )}
                                            </span>

                                            <span className="product-solution-preview-action">
                                                {isArabic
                                                    ? 'عرض الحل'
                                                    : 'VIEW SOLUTION'}
                                            </span>
                                        </button>
                                    )}
                            </div>

                            {solutionCategories.length >
                                1 && (
                                    <div className="product-solutions-navigation">
                                        <div className="product-solutions-progress">
                                            <span
                                                style={{
                                                    width:
                                                        `${(
                                                            (
                                                                safeSolutionIndex +
                                                                1
                                                            ) /
                                                            solutionCategories.length
                                                        ) *
                                                        100
                                                        }%`,
                                                }}
                                            />
                                        </div>

                                        <div className="product-solutions-arrows">
                                            <button
                                                type="button"
                                                onClick={
                                                    showPreviousSolution
                                                }
                                                aria-label={
                                                    isArabic
                                                        ? 'الحل السابق'
                                                        : 'Previous solution'
                                                }
                                            >
                                                <span aria-hidden="true">
                                                    {isArabic
                                                        ? '→'
                                                        : '←'}
                                                </span>
                                            </button>

                                            <button
                                                type="button"
                                                onClick={
                                                    showNextSolution
                                                }
                                                aria-label={
                                                    isArabic
                                                        ? 'الحل التالي'
                                                        : 'Next solution'
                                                }
                                            >
                                                <span aria-hidden="true">
                                                    {isArabic
                                                        ? '←'
                                                        : '→'}
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                )}
                        </div>
                    </section>
                )}
        </>
    );
}