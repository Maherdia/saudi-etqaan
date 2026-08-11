import { getLocalizedValue } from '../../../utils/localization';

import ClientsSlider from '../../ClientsSlider/ClientsSlider';
import LogoFrame from '../../LogoFrame/LogoFrame';

import './ProductTrust.css';

/* =========================================================
   LOCALIZATION
   ========================================================= */

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

function ProductTrustHeading({
    eyebrow,
    title,
    description,
}) {
    return (
        <div className="product-section-heading product-trust-heading">
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
   BRAND MARQUEE HELPERS
   ========================================================= */

function createMarqueeBaseRow(
    items,
    minimumItems = 9,
) {
    if (!items.length) {
        return [];
    }

    const repeatCount =
        Math.max(
            1,
            Math.ceil(
                minimumItems /
                items.length,
            ),
        );

    return Array.from(
        {
            length: repeatCount,
        },
        () => items,
    ).flat();
}

function createBrandRows(
    brands,
) {
    if (!brands.length) {
        return [];
    }

    if (
        brands.length <= 4
    ) {
        return [
            brands,
        ];
    }

    const middleIndex =
        Math.ceil(
            brands.length / 2,
        );

    return [
        brands.slice(
            0,
            middleIndex,
        ),

        brands.slice(
            middleIndex,
        ),
    ].filter(
        row =>
            row.length > 0,
    );
}

/* =========================================================
   BRAND MARQUEE
   ========================================================= */

function BrandMarquee({
    brands,
    lang,
    reverse = false,
    rowIndex = 0,
}) {
    const baseRow =
        createMarqueeBaseRow(
            brands,
        );

    const repeatedRow = [
        ...baseRow,
        ...baseRow,
    ];

    return (
        <div
            dir="ltr"
            className={
                `brand-marquee-row ${reverse
                    ? 'brand-marquee-row-reverse'
                    : ''
                }`
            }
        >
            <div className="brand-marquee-track">
                {repeatedRow.map(
                    (
                        brand,
                        index,
                    ) => {
                        const brandName =
                            getLocalizedValue(
                                brand.name ||
                                brand.title,
                                lang,
                            ) ||
                            `Brand ${index + 1
                            }`;

                        const brandKey =
                            getLocalizedValue(
                                brand.name ||
                                brand.title,
                                'en',
                            ) ||
                            `brand-${index}`;

                        return (
                            <div
                                className="brand-marquee-item"
                                key={
                                    `${brandKey}-${rowIndex}-${index}`
                                }
                                aria-hidden={
                                    index >=
                                    baseRow.length
                                }
                            >
                                {brand.logo ? (
                                    <LogoFrame
                                        src={
                                            brand.logo
                                        }
                                        alt={
                                            `${brandName} logo`
                                        }
                                        surface={
                                            brand.surface ??
                                            'auto'
                                        }
                                        className="logo-frame-marquee"
                                    />
                                ) : (
                                    <span>
                                        {
                                            brandName
                                        }
                                    </span>
                                )}
                            </div>
                        );
                    },
                )}
            </div>
        </div>
    );
}

/* =========================================================
   PRODUCT TRUST
   ========================================================= */

export default function ProductTrust({
    division,
    lang = 'en',
}) {
    const isArabic =
        lang === 'ar';

    const partners =
        division.partners ?? [];

    const brands =
        division.brands ?? [];

    const certifications =
        division.certifications ?? [];

    const brandRows =
        createBrandRows(
            brands,
        );

    const partnersTitle =
        getSectionContent(
            division,
            'partnersSection',
            'title',
            lang,
            isArabic
                ? 'شركاء يدعمون جودة حلولنا'
                : 'Partners supporting the quality of our solutions',
        );

    const partnersDescription =
        getSectionContent(
            division,
            'partnersSection',
            'description',
            lang,
        );

    const brandsTitle =
        getSectionContent(
            division,
            'brandsSection',
            'title',
            lang,
            isArabic
                ? 'علامات موثوقة ضمن محفظة منتجاتنا'
                : 'Trusted brands across our product portfolio',
        );

    const brandsDescription =
        getSectionContent(
            division,
            'brandsSection',
            'description',
            lang,
        );

    const certificatesTitle =
        getSectionContent(
            division,
            'certificatesSection',
            'title',
            lang,
            isArabic
                ? 'الشهادات والاعتمادات'
                : 'Certificates and accreditations',
        );

    const certificatesDescription =
        getSectionContent(
            division,
            'certificatesSection',
            'description',
            lang,
        );

    return (
        <>
            {/* =================================================
                PARTNERS
                ================================================= */}

            {partners.length >
                0 && (
                    <section className="product-division-section product-partners-section">
                        <div className="product-division-container">
                            <ProductTrustHeading
                                eyebrow={
                                    isArabic
                                        ? 'شركاؤنا'
                                        : 'OUR PARTNERS'
                                }
                                title={
                                    partnersTitle
                                }
                                description={
                                    partnersDescription
                                }
                            />

                            <div className="partner-logo-grid">
                                {partners.map(
                                    (
                                        partner,
                                        index,
                                    ) => {
                                        const partnerLabel =
                                            partner.name ||
                                            partner.title;

                                        const partnerName =
                                            getLocalizedValue(
                                                partnerLabel,
                                                lang,
                                            );

                                        const partnerKey =
                                            getLocalizedValue(
                                                partnerLabel,
                                                'en',
                                            ) ||
                                            index;

                                        const content =
                                            partner.logo ? (
                                                <LogoFrame
                                                    src={
                                                        partner.logo
                                                    }
                                                    alt={
                                                        `${partnerName} logo`
                                                    }
                                                    surface={
                                                        partner.surface ??
                                                        'auto'
                                                    }
                                                />
                                            ) : (
                                                <span>
                                                    {
                                                        partnerName
                                                    }
                                                </span>
                                            );

                                        if (
                                            partner.website
                                        ) {
                                            return (
                                                <a
                                                    href={
                                                        partner.website
                                                    }
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="partner-logo-link"
                                                    aria-label={
                                                        `${partnerName} website`
                                                    }
                                                    key={
                                                        `${partnerKey}-${index}`
                                                    }
                                                >
                                                    {
                                                        content
                                                    }
                                                </a>
                                            );
                                        }

                                        return (
                                            <div
                                                className="partner-logo-link partner-logo-link-static"
                                                key={
                                                    `${partnerKey}-${index}`
                                                }
                                            >
                                                {
                                                    content
                                                }
                                            </div>
                                        );
                                    },
                                )}
                            </div>
                        </div>
                    </section>
                )}

            {/* =================================================
                BRANDS
                ================================================= */}

            {brands.length >
                0 && (
                    <section className="product-division-section product-brands-section product-division-section-alt">
                        <div className="product-division-container">
                            <ProductTrustHeading
                                eyebrow={
                                    isArabic
                                        ? 'علاماتنا'
                                        : 'OUR BRANDS'
                                }
                                title={
                                    brandsTitle
                                }
                                description={
                                    brandsDescription
                                }
                            />
                        </div>

                        <div className="brand-marquee-shell">
                            {brandRows.map(
                                (
                                    row,
                                    rowIndex,
                                ) => (
                                    <BrandMarquee
                                        key={
                                            `brand-row-${rowIndex}`
                                        }
                                        brands={
                                            row
                                        }
                                        lang={
                                            lang
                                        }
                                        rowIndex={
                                            rowIndex
                                        }
                                        reverse={
                                            rowIndex ===
                                            1
                                        }
                                    />
                                ),
                            )}
                        </div>
                    </section>
                )}

            {/* =================================================
                CERTIFICATES
                ================================================= */}

            {certifications.length >
                0 && (
                    <section className="product-division-section product-certificates-section">
                        <div className="product-division-container">
                            <ProductTrustHeading
                                eyebrow={
                                    isArabic
                                        ? 'الشهادات'
                                        : 'CERTIFICATES'
                                }
                                title={
                                    certificatesTitle
                                }
                                description={
                                    certificatesDescription
                                }
                            />

                            <div className="certification-grid">
                                {certifications.map(
                                    (
                                        certification,
                                        index,
                                    ) => (
                                        <article
                                            className="certification-card"
                                            key={
                                                getLocalizedValue(
                                                    certification.name,
                                                    'en',
                                                ) ||
                                                index
                                            }
                                        >
                                            <div className="certification-logo-area">
                                                {certification.logo ? (
                                                    <LogoFrame
                                                        src={
                                                            certification.logo
                                                        }
                                                        alt={
                                                            getLocalizedValue(
                                                                certification.name,
                                                                lang,
                                                            )
                                                        }
                                                        surface={
                                                            certification.surface ??
                                                            'light'
                                                        }
                                                        className="logo-frame-certificate"
                                                    />
                                                ) : (
                                                    <span className="certification-fallback">
                                                        {getLocalizedValue(
                                                            certification.name,
                                                            lang,
                                                        )}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="certification-card-footer">
                                                <span>
                                                    {getLocalizedValue(
                                                        certification.shortName ||
                                                        certification.name,
                                                        lang,
                                                    )}
                                                </span>
                                            </div>
                                        </article>
                                    ),
                                )}
                            </div>
                        </div>
                    </section>
                )}

            {/* =================================================
                CLIENTS
                ================================================= */}

            {division.clients?.length >
                0 && (
                    <ClientsSlider
                        clients={
                            division.clients
                        }
                        lang={
                            lang
                        }
                        content={
                            division.clientsSection
                        }
                    />
                )}
        </>
    );
}