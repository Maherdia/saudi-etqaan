import { FiArrowUpRight } from 'react-icons/fi';

import { companies } from '../../data/content';
import { useApp } from '../../context/AppContext';

import silverCeilingLogo from '../../assets/ourcompanies/silver-ceiling-logo-gold.webp';
import sswLogo from '../../assets/ourcompanies/ssw-logo.webp';
import woodHouseLogo from '../../assets/ourcompanies/wood-house-logo.webp';

import './Companies.css';

export default function Companies() {
    const { lang } = useApp();

    const isArabic = lang === 'ar';

    const pageContent = isArabic
        ? {
            eyebrow: 'شركات المجموعة',

            title:
                'شركات متخصصة. مجموعة واحدة متكاملة.',

            description:
                'تضم مجموعة الإتقان السعودية ثلاث شركات متخصصة تعمل بهويات مستقلة، وتتشارك الخبرات والموارد لتحقيق تنفيذ أكثر تكاملاً وكفاءة.',

            explore:
                'استكشف شركاتنا',

            visitWebsite:
                'زيارة الموقع',

            companyLabel:
                'شركة متخصصة',

            closingEyebrow:
                'مجموعة واحدة',

            closingTitle:
                'خبرات مستقلة. تنفيذ منسق.',

            closingDescription:
                'تعمل كل شركة ضمن مجالها المتخصص، مع المساهمة بالخبرات الفنية والمعرفة والموارد والقدرات التنفيذية المشتركة داخل مجموعة الإتقان السعودية. ويساعد هذا التكامل على توفير نهج أكثر تنسيقاً في التصنيع والتوريد والمقاولات والتشطيبات وتنفيذ المشاريع، بما يمنح العملاء خبرات متخصصة ضمن مجموعة واحدة متكاملة.',
        }
        : {
            eyebrow:
                'OUR COMPANIES',

            title:
                'Specialized companies. One integrated group.',

            description:
                'Saudi Etqaan Group brings together three specialized companies with independent identities, shared expertise, and a coordinated approach to project delivery.',

            explore:
                'EXPLORE THE GROUP',

            visitWebsite:
                'Visit website',

            companyLabel:
                'Specialized company',

            closingEyebrow:
                'ONE GROUP',

            closingTitle:
                'Independent expertise. Coordinated delivery.',

            closingDescription:
                'Each company operates within its own specialist field while contributing shared knowledge, technical expertise, resources, and project capabilities across the wider Saudi Etqaan Group. Together, they support a more coordinated approach to manufacturing, supply, construction, finishing, and project delivery, allowing clients to benefit from focused expertise while working with one integrated group.',
        };

    const companySpecialties = {
        ssw: {
            en: [
                'Architectural steel',
                'Engineered doors',
                'Security products',
                'Fire-rated systems',
            ],

            ar: [
                'المنتجات الفولاذية المعمارية',
                'الأبواب الهندسية',
                'المنتجات الأمنية',
                'الأنظمة المقاومة للحريق',
            ],
        },

        wood: {
            en: [
                'Architectural woodwork',
                'Wooden doors',
                'Joinery',
                'Furniture',
                'Interior manufacturing',
            ],

            ar: [
                'الأعمال الخشبية المعمارية',
                'الأبواب الخشبية',
                'أعمال النجارة',
                'الأثاث',
                'التصنيع الداخلي',
            ],
        },

        silver: {
            en: [
                'General contracting',
                'Interior finishing',
                'Exterior finishing',
                'Landscaping',
                'Project maintenance',
            ],

            ar: [
                'المقاولات العامة',
                'التشطيبات الداخلية',
                'التشطيبات الخارجية',
                'تنسيق المواقع',
                'صيانة المشاريع',
            ],
        },
    };

    function getCompanyType(company) {
        const searchValue = [
            company.id,
            company.shortName,
            company.name?.en,
        ]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();

        if (
            searchValue.includes('nisreen') ||
            searchValue.includes('ssw')
        ) {
            return 'ssw';
        }

        if (searchValue.includes('wood')) {
            return 'wood';
        }

        return 'silver';
    }

    function getCompanyLogo(company) {
        const type = getCompanyType(company);

        if (type === 'ssw') {
            return sswLogo;
        }

        if (type === 'wood') {
            return woodHouseLogo;
        }

        return silverCeilingLogo;
    }

    function getCompanySpecialties(company) {
        const type = getCompanyType(company);

        return (
            companySpecialties[type][lang] ||
            companySpecialties[type].en
        );
    }

    return (
        <main className="companies-page">
            <section className="companies-hero">
                <div className="companies-container">
                    <span className="companies-eyebrow">
                        {pageContent.eyebrow}
                    </span>

                    <h1 className="companies-title">
                        {pageContent.title}
                    </h1>

                    <p className="companies-lead">
                        {pageContent.description}
                    </p>

                    <div
                        className="companies-hero-index"
                        aria-hidden="true"
                    >
                        <span>
                            {String(
                                companies.length,
                            ).padStart(2, '0')}
                        </span>

                        <span>
                            {isArabic
                                ? 'شركات متخصصة'
                                : 'SPECIALIZED COMPANIES'}
                        </span>
                    </div>
                </div>
            </section>

            <section className="companies-showcase">
                <div className="companies-container">
                    <div className="companies-showcase-header">
                        <span>
                            {pageContent.explore}
                        </span>

                        <p>
                            {String(
                                companies.length,
                            ).padStart(2, '0')}
                            {' / '}
                            {String(
                                companies.length,
                            ).padStart(2, '0')}
                        </p>
                    </div>

                    <div className="companies-accordion">
                        {companies.map(
                            (company, index) => {
                                const specialties =
                                    getCompanySpecialties(
                                        company,
                                    );

                                return (
                                    <article
                                        className="company-panel company-panel-active"
                                        key={company.id}
                                    >
                                        <div className="company-panel-trigger">
                                            <span className="company-panel-number">
                                                {String(
                                                    index + 1,
                                                ).padStart(
                                                    2,
                                                    '0',
                                                )}
                                            </span>

                                            <span className="company-panel-heading">
                                                <strong>
                                                    {
                                                        company
                                                            .name[
                                                        lang
                                                        ]
                                                    }
                                                </strong>

                                                {company.shortName && (
                                                    <small>
                                                        {
                                                            company.shortName
                                                        }
                                                    </small>
                                                )}
                                            </span>
                                        </div>

                                        <div className="company-panel-content">
                                            <div className="company-panel-copy">
                                                <span className="company-panel-label">
                                                    {
                                                        pageContent.companyLabel
                                                    }
                                                </span>

                                                <p>
                                                    {
                                                        company
                                                            .desc[
                                                        lang
                                                        ]
                                                    }
                                                </p>

                                                <ul>
                                                    {specialties.map(
                                                        specialty => (
                                                            <li
                                                                key={
                                                                    specialty
                                                                }
                                                            >
                                                                {
                                                                    specialty
                                                                }
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>

                                                {company.website && (
                                                    <a
                                                        className="company-panel-link"
                                                        href={
                                                            company.website
                                                        }
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        <span>
                                                            {
                                                                pageContent.visitWebsite
                                                            }
                                                        </span>

                                                        <FiArrowUpRight
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                )}
                                            </div>

                                            <div className="company-panel-visual">
                                                <img
                                                    className="company-panel-logo"
                                                    src={getCompanyLogo(
                                                        company,
                                                    )}
                                                    alt={
                                                        company
                                                            .name[
                                                        lang
                                                        ]
                                                    }
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                    </article>
                                );
                            },
                        )}
                    </div>
                </div>
            </section>

            <section className="companies-closing">
                <div className="companies-container">
                    <span className="companies-closing-eyebrow">
                        {
                            pageContent.closingEyebrow
                        }
                    </span>

                    <h2>
                        {pageContent.closingTitle}
                    </h2>

                    <p>
                        {
                            pageContent.closingDescription
                        }
                    </p>
                </div>
            </section>
        </main>
    );
}