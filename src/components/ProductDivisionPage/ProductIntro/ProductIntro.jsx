import {
    ProductPhoto,
} from '../ProductMedia/ProductMedia';

import './ProductIntro.css';

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

/* =========================================================
   SECTION HEADING
   ========================================================= */

function IntroSectionHeading({
    eyebrow,
    title,
}) {
    return (
        <div className="product-section-heading product-intro-heading">
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
        </div>
    );
}

/* =========================================================
   PRODUCT INTRO
   ========================================================= */

export default function ProductIntro({
    division,
    photos = {},
    lang = 'en',
}) {
    const isArabic =
        lang === 'ar';

    const overviewPhoto =
        photos.overview ?? null;

    return (
        <>
            {/* =================================================
                HERO
                ================================================= */}

            <section className="product-division-hero">
                <div className="product-division-container">
                    {division.kicker && (
                        <p className="product-division-eyebrow">
                            {getLocalizedValue(
                                division.kicker,
                                lang,
                            )}
                        </p>
                    )}

                    <h1 className="page-title">
                        {getLocalizedValue(
                            division.title,
                            lang,
                        )}
                    </h1>

                    {division.description && (
                        <p className="page-lead">
                            {getLocalizedValue(
                                division.description,
                                lang,
                            )}
                        </p>
                    )}
                </div>
            </section>

            {/* =================================================
                OVERVIEW
                ================================================= */}

            {division.overview && (
                <section className="product-division-section product-overview-section">
                    <div
                        className={
                            `product-division-container product-overview-layout ${overviewPhoto
                                ? ''
                                : 'product-overview-layout-no-media'
                            }`
                        }
                    >
                        {overviewPhoto && (
                            <ProductPhoto
                                src={
                                    overviewPhoto
                                }
                                title={
                                    getLocalizedValue(
                                        division
                                            .overview
                                            .title,
                                        lang,
                                    )
                                }
                                index={1}
                                variant="overview"
                                alt=""
                                showOverlay={
                                    false
                                }
                            />
                        )}

                        <div className="product-overview-content">
                            <IntroSectionHeading
                                eyebrow={
                                    isArabic
                                        ? 'نظرة عامة'
                                        : 'OVERVIEW'
                                }
                                title={
                                    getLocalizedValue(
                                        division
                                            .overview
                                            .title,
                                        lang,
                                    )
                                }
                            />

                            <div className="product-overview-copy">
                                {division.overview.paragraphs?.map(
                                    (
                                        paragraph,
                                        index,
                                    ) => (
                                        <p
                                            key={
                                                index
                                            }
                                        >
                                            {getLocalizedValue(
                                                paragraph,
                                                lang,
                                            )}
                                        </p>
                                    ),
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}