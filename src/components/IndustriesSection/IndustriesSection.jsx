import {
    useMemo,
    useState,
} from 'react';

import { Link } from 'react-router-dom';

import healthcareLogo from '../../assets/logos/health-care.webp';
import governmentalLogo from '../../assets/logos/govermental.webp';
import infrastructureLogo from '../../assets/logos/infrastructure.webp';
import hospitalityLogo from '../../assets/logos/hospitality.webp';
import residentialLogo from '../../assets/logos/residential.webp';

import './IndustriesSection.css';

export default function IndustriesSection({ lang }) {
    const isArabic = lang === 'ar';

    const content = useMemo(() => {
        return isArabic
            ? {
                eyebrow: '02 / القطاعات التي نخدمها',
                cta: 'عرض المشاريع',
                industries: [
                    {
                        id: 'healthcare',
                        number: '01',
                        label: 'قطاع / 01',
                        category: 'الرعاية الصحية',
                        tag: 'الرعاية / الكفاءة',
                        title: 'حلول تدعم بيئات الرعاية الصحية.',
                        description:
                            'أنظمة ومنتجات متخصصة تدعم المستشفيات والعيادات والمرافق الطبية من خلال جودة التنفيذ والاعتمادية وسهولة التشغيل.',
                        image: healthcareLogo,
                    },
                    {
                        id: 'governmental',
                        number: '02',
                        label: 'قطاع / 02',
                        category: 'الجهات الحكومية والمؤسسية',
                        tag: 'المؤسسات / الاعتمادية',
                        title: 'حلول متكاملة للمشاريع الحكومية والمؤسسية.',
                        description:
                            'نقدم أنظمة ومنتجات مناسبة للمقار الحكومية والمؤسساتية بما يحقق الكفاءة التشغيلية والاعتمادية وتناسق التنفيذ.',
                        image: governmentalLogo,
                    },
                    {
                        id: 'infrastructure',
                        number: '03',
                        label: 'قطاع / 03',
                        category: 'البنية التحتية',
                        tag: 'البنية / الاستمرارية',
                        title: 'أنظمة تدعم مشاريع البنية التحتية.',
                        description:
                            'حلول عملية للمشاريع الحيوية والبنية التحتية مع تركيز على الأداء طويل المدى والمتطلبات التشغيلية للمواقع الكبرى.',
                        image: infrastructureLogo,
                    },
                    {
                        id: 'hospitality',
                        number: '04',
                        label: 'قطاع / 04',
                        category: 'الضيافة',
                        tag: 'الضيافة / التجربة',
                        title: 'مساحات أفضل وتجارب ضيافة أكثر جودة.',
                        description:
                            'حلول متناسقة للفنادق ومشاريع الضيافة تدعم جودة المساحات وتجربة المستخدم وكفاءة التشغيل اليومية.',
                        image: hospitalityLogo,
                    },
                    {
                        id: 'residential',
                        number: '05',
                        label: 'قطاع / 05',
                        category: 'السكني',
                        tag: 'السكن / الراحة',
                        title: 'حلول مناسبة للمشاريع السكنية الحديثة.',
                        description:
                            'أنظمة ومنتجات مختارة للمشاريع السكنية تدعم الراحة والسلامة وجودة الاستخدام اليومي على المدى الطويل.',
                        image: residentialLogo,
                    },
                ],
            }
            : {
                eyebrow: '02 / INDUSTRIES WE SERVE',
                cta: 'View projects',
                industries: [
                    {
                        id: 'healthcare',
                        number: '01',
                        label: 'INDUSTRY / 01',
                        category: 'Healthcare',
                        tag: 'HEALTH / CARE',
                        title: 'Systems designed for healthcare environments.',
                        description:
                            'Specialized systems and products that support hospitals, clinics, and medical facilities through dependable performance, quality execution, and ease of operation.',
                        image: healthcareLogo,
                    },
                    {
                        id: 'governmental',
                        number: '02',
                        label: 'INDUSTRY / 02',
                        category: 'Government & Institutional',
                        tag: 'PUBLIC / RELIABILITY',
                        title: 'Integrated solutions for public and institutional projects.',
                        description:
                            'We provide coordinated systems and products suited to government and institutional facilities, with a focus on operational reliability and disciplined delivery.',
                        image: governmentalLogo,
                    },
                    {
                        id: 'infrastructure',
                        number: '03',
                        label: 'INDUSTRY / 03',
                        category: 'Infrastructure',
                        tag: 'INFRA / CONTINUITY',
                        title: 'Built to support vital infrastructure projects.',
                        description:
                            'Practical solutions for major infrastructure environments, delivering durability, operational continuity, and performance aligned with critical project demands.',
                        image: infrastructureLogo,
                    },
                    {
                        id: 'hospitality',
                        number: '04',
                        label: 'INDUSTRY / 04',
                        category: 'Hospitality',
                        tag: 'HOSPITALITY / EXPERIENCE',
                        title: 'Better spaces for hospitality environments.',
                        description:
                            'Coordinated solutions for hotels and hospitality projects that improve guest experience, visual quality, and daily operational efficiency.',
                        image: hospitalityLogo,
                    },
                    {
                        id: 'residential',
                        number: '05',
                        label: 'INDUSTRY / 05',
                        category: 'Residential',
                        tag: 'RESIDENTIAL / COMFORT',
                        title: 'Reliable solutions for modern residential projects.',
                        description:
                            'Selected systems and products tailored for residential developments, supporting comfort, safety, and long-term usability in everyday living spaces.',
                        image: residentialLogo,
                    },
                ],
            };
    }, [isArabic]);

    const [activeIndex, setActiveIndex] = useState(0);

    const industries = content.industries;
    const activeIndustry = industries[activeIndex];
    const previewIndustry =
        industries[(activeIndex + 1) % industries.length];

    function goNext() {
        setActiveIndex((prev) => (prev + 1) % industries.length);
    }

    function goPrev() {
        setActiveIndex((prev) =>
            prev === 0 ? industries.length - 1 : prev - 1,
        );
    }

    return (
        <section className="industries-section">
            <div className="industries-shell">
                <div className="industries-heading" data-reveal>
                    <div className="industries-heading-meta">
                        <span>{content.eyebrow}</span>
                    </div>

                    <h2>
                        <span>{content.titleTop}</span>
                        <span>{content.titleBottom}</span>
                    </h2>
                </div>

                <div className="industries-layout" data-reveal>
                    <aside className="industries-sidebar">
                        <div className="industries-list">
                            {industries.map((industry, index) => (
                                <button
                                    key={industry.id}
                                    type="button"
                                    className={`industries-list-item ${index === activeIndex
                                        ? 'is-active'
                                        : ''
                                        }`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <span className="industries-list-number">
                                        {industry.number}
                                    </span>

                                    <span className="industries-list-name">
                                        {industry.category}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </aside>

                    <div className="industries-stage">
                        <div className="industries-cards-window">
                            <article className="industry-card industry-card-active">
                                <div className="industry-card-copy">
                                    <div className="industry-card-meta">
                                        <span>{activeIndustry.label}</span>
                                    </div>

                                    <h3>{activeIndustry.title}</h3>

                                    <p className="industry-card-description">
                                        {activeIndustry.description}
                                    </p>

                                    <Link
                                        to="/projects"
                                        className="industry-card-link"
                                    >
                                        <span>{content.cta}</span>
                                        <span aria-hidden="true"></span>
                                    </Link>
                                </div>

                                <div className="industry-card-visual">
                                    <div className="industry-card-grid" aria-hidden="true" />

                                    <div className="industry-card-logo-panel">
                                        <img
                                            src={activeIndustry.image}
                                            alt={activeIndustry.category}
                                        />
                                    </div>
                                </div>
                            </article>
                            <article className="industry-card industry-card-preview">
                                <button
                                    type="button"
                                    className="industry-card-preview-inner"
                                    onClick={goNext}
                                    aria-label={
                                        isArabic
                                            ? 'عرض القطاع التالي'
                                            : 'Show next industry'
                                    }
                                >
                                    <span className="industry-card-preview-meta">
                                        {previewIndustry.label}
                                    </span>

                                    <div className="industry-card-preview-logo">
                                        <img
                                            src={previewIndustry.image}
                                            alt=""
                                        />
                                    </div>
                                </button>
                            </article>
                        </div>

                        <div className="industries-stage-footer">
                            <div className="industries-progress">
                                <span
                                    style={{
                                        width: `${((activeIndex + 1) / industries.length) * 100}%`,
                                    }}
                                />
                            </div>

                            <div
                                className="industries-controls"
                                dir="ltr"
                            >
                                <button
                                    type="button"
                                    onClick={
                                        isArabic
                                            ? goNext
                                            : goPrev
                                    }
                                    aria-label={
                                        isArabic
                                            ? 'القطاع التالي'
                                            : 'Previous industry'
                                    }
                                >
                                    <span aria-hidden="true">
                                        ←
                                    </span>
                                </button>

                                <button
                                    type="button"
                                    onClick={
                                        isArabic
                                            ? goPrev
                                            : goNext
                                    }
                                    aria-label={
                                        isArabic
                                            ? 'القطاع السابق'
                                            : 'Next industry'
                                    }
                                >
                                    <span aria-hidden="true">
                                        →
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}