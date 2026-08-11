import {
    useRef,
} from 'react';

import {
    Link,
} from 'react-router-dom';

import {
    useApp,
} from '../../context/AppContext';

import {
    companies,
    divisions,
} from '../../data/content';

import IndustriesSection from '../../components/IndustriesSection/IndustriesSection';

import darkLogo from '../../assets/logos/etqaan-full.webp';
import lightLogo from '../../assets/logos/etqaan-full-light.webp';

import HomeHero from '../../assets/logos/home-hero.webp';

import sanitaryImage from '../../assets/logos/sanitary.webp';
import hardwareImage from '../../assets/logos/door-hardware.webp';
import technologyImage from '../../assets/logos/tracking.webp';
import mepImage from '../../assets/logos/mep.webp';

import useRevealOnScroll from '../../hooks/useRevealOnScroll';

import {
    getLocalizedPath,
} from '../../data/routes';

import './Home.css';

const capabilityImages = {
    sanitary: sanitaryImage,
    hardware: hardwareImage,
    technology: technologyImage,
    tech: technologyImage,
    security: mepImage,
    mep: mepImage,
    'mep-security': mepImage,
};

export default function Home() {
    const pageRef =
        useRef(null);

    const {
        lang,
        theme,
    } = useApp();

    useRevealOnScroll(
        pageRef,
    );

    const isArabic =
        lang === 'ar';

    const aboutLogo =
        theme === 'light'
            ? lightLogo
            : darkLogo;

    const content =
        isArabic
            ? {
                combinedEyebrow:
                    '01 / من نحن',

                combinedIntro:
                    'تجمع الإتقان السعودية مجموعة متكاملة من الخبرات المتخصصة في الأدوات الصحية والحديديات المعمارية والتقنية والأنظمة الميكانيكية والكهربائية والأمنية. نعمل من خلال نهج موحد يربط بين التخطيط والتوريد والتركيب والتشغيل والدعم، بما يضمن وضوح المسؤوليات وتناسق التنفيذ في مختلف مراحل المشروع. وتمكننا خبراتنا المتنوعة من تقديم حلول عملية وموثوقة تلائم احتياجات المشاريع التجارية والسكنية والحكومية والضيافة والبنية التحتية في المملكة العربية السعودية.',

                aboutLink:
                    'اكتشف الإتقان السعودية',

                capabilitiesLabel:
                    'قدراتنا',

                capabilitiesTitleTop:
                    'خبرات متخصصة.',

                capabilitiesTitleBottom:
                    'تنفيذ متكامل.',

                capabilitiesIntro:
                    'أربعة قطاعات مترابطة تعمل ضمن معيار موحد من التخطيط والتوريد وحتى التنفيذ والدعم.',

                explore:
                    'استكشف',

                companiesEyebrow:
                    '03 / شركات المجموعة',

                companiesTitleTop:
                    'شركاتنا.',

                companiesIntro:
                    'قدرات تصنيع ومقاولات متخصصة توسّع نطاق المجموعة وتدعم تسليم المشاريع من مصدر واحد.',

                discover:
                    'اكتشف الشركة',

                groupLink:
                    'تعرف على جميع شركاتنا',
            }
            : {
                combinedEyebrow:
                    '01 / ABOUT US',

                combinedIntro:
                    'Saudi Etqaan brings together integrated expertise across sanitary ware, architectural hardware, technology, MEP, and security systems. We operate through a coordinated approach that connects planning, supply, installation, commissioning, and support, helping ensure clear responsibility and consistent execution throughout every stage of a project. Our diverse capabilities allow us to deliver practical, reliable solutions for commercial, residential, government, hospitality, and infrastructure projects across Saudi Arabia.',

                aboutLink:
                    'Discover Saudi Etqaan',

                capabilitiesLabel:
                    'Our capabilities',

                capabilitiesTitleTop:
                    'Specialized capability.',

                capabilitiesTitleBottom:
                    'Coordinated delivery.',

                capabilitiesIntro:
                    'Four connected divisions operating through one standard from planning and supply to installation and support.',

                explore:
                    'Explore',

                companiesEyebrow:
                    '03 / GROUP COMPANIES',

                companiesTitleTop:
                    'Our Companies.',

                companiesIntro:
                    'Specialist manufacturing and contracting capabilities extend the group and support complete project delivery from a single source.',

                discover:
                    'Discover company',

                groupLink:
                    'Meet all our companies',
            };

    return (
        <main
            ref={pageRef}
            className="home-page"
        >
            {/* =================================================
                HERO
                ================================================= */}

            <section className="home-hero">
                <img
                    className="home-hero-background"
                    src={HomeHero}
                    alt=""
                    aria-hidden="true"
                    fetchPriority="high"
                    decoding="async"
                />

                <div
                    className="home-hero-overlay"
                    aria-hidden="true"
                />

                <div className="home-hero-center">
                    <h1
                        className="home-hero-title"
                        dir={
                            isArabic
                                ? 'rtl'
                                : 'ltr'
                        }
                    >
                        {isArabic ? (
                            <>
                                <span className="home-hero-title-silver">
                                    شركة
                                </span>

                                <span className="home-hero-title-teal">
                                    الإتقان
                                </span>

                                <span className="home-hero-title-teal">
                                    السعودية
                                </span>
                            </>
                        ) : (
                            <>
                                <span className="home-hero-title-silver">
                                    Saudi
                                </span>

                                <span className="home-hero-title-teal">
                                    Etqaan
                                </span>

                                <span className="home-hero-title-teal">
                                    Co.
                                </span>
                            </>
                        )}
                    </h1>
                </div>
            </section>

            {/* =================================================
                ABOUT + CAPABILITIES
                ================================================= */}

            <section className="home-section home-about-capabilities">
                <div
                    className="home-about-introduction"
                    data-reveal
                >
                    <div className="home-about-introduction-heading">
                        <span className="home-about-eyebrow">
                            {
                                content.combinedEyebrow
                            }
                        </span>
                    </div>

                    <div className="home-about-introduction-body">
                        <div className="home-about-copy">
                            <div className="home-about-paragraphs">
                                <p>
                                    {
                                        content.combinedIntro
                                    }
                                </p>
                            </div>

                            <Link
                                className="home-about-link"
                                to={getLocalizedPath('/about', lang)}
                            >
                                <span>
                                    {
                                        content.aboutLink
                                    }
                                </span>

                                <span
                                    aria-hidden="true"
                                >
                                    ↗
                                </span>
                            </Link>
                        </div>

                        <div
                            className="home-about-logo"
                            aria-label={
                                isArabic
                                    ? 'شعار شركة الإتقان السعودية'
                                    : 'Saudi Etqaan logo'
                            }
                        >
                            <img
                                src={aboutLogo}
                                alt={
                                    isArabic
                                        ? 'شركة الإتقان السعودية'
                                        : 'Saudi Etqaan Co.'
                                }
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                </div>

                <div
                    className="home-section-heading"
                    data-reveal
                >
                    <div className="home-section-heading-meta">
                        <span>
                            {
                                content.capabilitiesLabel
                            }
                        </span>

                        <p>
                            {
                                content.capabilitiesIntro
                            }
                        </p>
                    </div>

                    <h2>
                        {
                            isArabic
                                ? 'حلول متخصصة عبر قطاعاتنا.'
                                : 'Specialist solutions across our divisions.'
                        }
                    </h2>
                </div>

                <div className="home-capability-grid">
                    {divisions.map(
                        (
                            division,
                            index,
                        ) => {
                            const image =
                                capabilityImages[
                                division.id
                                ];

                            return (
                                <Link
                                    key={
                                        division.id
                                    }
                                    className={`home-capability-card capability-${division.id}`}
                                    to={
                                        getLocalizedPath(division.path, lang)
                                    }
                                    data-reveal
                                    style={{
                                        '--reveal-delay':
                                            `${index * 90}ms`,
                                    }}
                                >
                                    <div className="home-capability-card-top">
                                        <span>
                                            {String(
                                                index +
                                                1,
                                            ).padStart(
                                                2,
                                                '0',
                                            )}
                                        </span>

                                        <span
                                            aria-hidden="true"
                                        >
                                            ↗
                                        </span>
                                    </div>

                                    <div className="home-capability-card-body">
                                        <div className="home-capability-card-copy">
                                            <h3
                                                role="heading"
                                                aria-level="2"
                                            >
                                                {
                                                    division
                                                        .title[
                                                    lang
                                                    ]
                                                }
                                            </h3>

                                            <p>
                                                {
                                                    division
                                                        .text[
                                                    lang
                                                    ]
                                                }
                                            </p>
                                        </div>

                                        {image && (
                                            <div className="home-capability-card-image">
                                                <img
                                                    src={
                                                        image
                                                    }
                                                    alt=""
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                            </div>
                                        )}
                                    </div>

                                    <div className="home-capability-card-footer">
                                        <span>
                                            {
                                                content.explore
                                            }
                                        </span>

                                        <div
                                            aria-hidden="true"
                                        >
                                            <i />
                                            <i />
                                            <i />
                                        </div>
                                    </div>
                                </Link>
                            );
                        },
                    )}
                </div>
            </section>

            {/* =================================================
                INDUSTRIES
                ================================================= */}

            <IndustriesSection
                lang={lang}
            />

            {/* =================================================
                GROUP COMPANIES
                ================================================= */}

            <section className="home-section home-companies">
                <div
                    className="home-section-heading"
                    data-reveal
                >
                    <div className="home-section-heading-meta">
                        <span>
                            {
                                content.companiesEyebrow
                            }
                        </span>

                        <p>
                            {
                                content.companiesIntro
                            }
                        </p>
                    </div>

                    <h2>
                        {
                            content.companiesTitleTop
                        }
                    </h2>
                </div>

                <div className="home-company-list">
                    {companies.map(
                        (
                            company,
                            index,
                        ) => (
                            <article
                                key={
                                    company.id
                                }
                                className="home-company-row"
                                data-reveal
                                style={{
                                    '--reveal-delay':
                                        `${index * 90}ms`,
                                }}
                            >
                                <span className="home-company-index">
                                    {String(
                                        index + 1,
                                    ).padStart(
                                        2,
                                        '0',
                                    )}
                                </span>

                                <div className="home-company-name">
                                    <span>
                                        {
                                            company.shortName
                                        }
                                    </span>

                                    <h3>
                                        {
                                            company.name[
                                            lang
                                            ]
                                        }
                                    </h3>
                                </div>

                                <p>
                                    {
                                        company.desc[
                                        lang
                                        ]
                                    }
                                </p>

                                <Link to={getLocalizedPath('/companies', lang)}>
                                    <span>
                                        {
                                            content.discover
                                        }
                                    </span>

                                    <span
                                        aria-hidden="true"
                                    >
                                        ↗
                                    </span>
                                </Link>
                            </article>
                        ),
                    )}
                </div>

                <Link
                    className="home-companies-link"
                    to={getLocalizedPath('/companies', lang)}
                >
                    <span>
                        {
                            content.groupLink
                        }
                    </span>

                    <span
                        aria-hidden="true"
                    >
                        ↗
                    </span>
                </Link>
            </section>
        </main>
    );
}