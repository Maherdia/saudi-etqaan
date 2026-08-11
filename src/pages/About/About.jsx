import { useEffect, useRef } from 'react';

import { useApp } from '../../context/AppContext';

import './About.css';

export default function About() {
    const { lang } = useApp();
    const sectionsRef = useRef([]);

    const content = {
        en: {
            kicker: 'About Saudi Etqaan',

            title:
                'A world of total solutions.',

            introduction:
                'Saudi Etqaan is a Saudi trading and contracting company specializing in architectural hardware, security systems, low-current solutions, sanitary products, and integrated building technologies.',

            sections: [
                {
                    number: '01',
                    label: 'Our Direction',
                    title: 'Vision',
                    text:
                        'To become a trusted first-choice partner for specialized building solutions across Saudi Arabia, recognized for dependable products, technical expertise, and responsive project support. We aim to connect clients, consultants, contractors, and international manufacturers through a coordinated approach that improves decision-making and project outcomes. Our vision is built on lasting relationships, professional service, and a clear understanding of each project’s technical and operational requirements. As we continue to grow, we remain focused on delivering solutions that strengthen quality, safety, reliability, efficiency, and long-term performance.',
                },
                {
                    number: '02',
                    label: 'Our Purpose',
                    title: 'Mission',
                    text:
                        'To provide reliable products and integrated systems that contribute to safer, more efficient, and better-performing facilities. We support project teams throughout product selection, technical coordination, specification review, supply, delivery, and implementation support. Every solution is evaluated according to its intended application, operating environment, design requirements, and long-term value. Our mission is to simplify complex project requirements through specialization, consistency, clear communication, and professional support while delivering practical solutions that meet both immediate needs and future expectations.',
                },
                {
                    number: '03',
                    label: 'How We Work',
                    title: 'Values',
                    text:
                        'Quality, reliability, specialization, safety, and customer commitment guide every aspect of our work. We value clear communication, responsible coordination, attention to technical detail, and accountability throughout every stage of delivery. We believe successful partnerships are built through trust, transparency, dependable service, and a shared commitment to project success. Every project is handled with respect for the client’s requirements, careful consideration of its technical objectives, and a long-term approach focused on consistency, continuous support, and lasting professional relationships.',
                },
            ],
        },

        ar: {
            kicker: 'عن الإتقان السعودية',

            title:
                'عالم من الحلول المتكاملة.',

            introduction:
                'الإتقان السعودية شركة سعودية متخصصة في التجارة والمقاولات، وتعمل في مجالات هاردوير المعمارية والأنظمة الأمنية وحلول التيار المنخفض والمنتجات الصحية وتقنيات المباني المتكاملة.',

            sections: [
                {
                    number: '01',
                    label: 'توجهنا',
                    title: 'الرؤية',
                    text:
                        'أن نصبح شريكاً موثوقاً والخيار الأول للحلول المتخصصة في قطاع المباني داخل المملكة العربية السعودية، وأن نتميز بالمنتجات الموثوقة والخبرة الفنية والدعم الفعّال للمشاريع. نسعى إلى ربط العملاء والاستشاريين والمقاولين والمصنعين العالميين ضمن منهج متكامل يعزز جودة القرارات ونتائج المشاريع. وتقوم رؤيتنا على بناء علاقات طويلة الأمد وتقديم خدمة مهنية وفهم دقيق للمتطلبات الفنية والتشغيلية لكل مشروع. ومع استمرارنا في النمو، نحافظ على تركيزنا في تقديم حلول تدعم الجودة والسلامة والموثوقية والكفاءة والأداء المستدام.',
                },
                {
                    number: '02',
                    label: 'هدفنا',
                    title: 'الرسالة',
                    text:
                        'تقديم المنتجات الموثوقة والأنظمة المتكاملة التي تساهم في إنشاء مرافق أكثر أماناً وكفاءة وأداءً. ندعم فرق المشاريع خلال مراحل اختيار المنتجات والتنسيق الفني ومراجعة المواصفات والتوريد والتسليم ودعم التنفيذ. ويتم تقييم كل حل وفقاً لطبيعة الاستخدام وبيئة التشغيل ومتطلبات التصميم والقيمة طويلة المدى. وتتمثل رسالتنا في تبسيط متطلبات المشاريع المعقدة من خلال التخصص والاستمرارية والتواصل الواضح والدعم المهني، مع تقديم حلول عملية تلبي الاحتياجات الحالية والتوقعات المستقبلية.',
                },
                {
                    number: '03',
                    label: 'منهج عملنا',
                    title: 'القيم',
                    text:
                        'الجودة والموثوقية والتخصص والسلامة والالتزام تجاه العملاء هي المبادئ التي توجه جميع أعمالنا. نحرص على التواصل الواضح والتنسيق المسؤول والاهتمام بالتفاصيل الفنية وتحمل المسؤولية في جميع مراحل التنفيذ. ونؤمن بأن الشراكات الناجحة تُبنى على الثقة والشفافية والخدمة الموثوقة والالتزام المشترك بنجاح المشروع. ويتم التعامل مع كل مشروع باحترام لمتطلبات العميل والدراسة الدقيقة لأهدافه الفنية ومنهج طويل الأمد يركز على الاستمرارية والدعم المتواصل وبناء علاقات مهنية مستدامة.',
                },
            ],
        },
    };

    const page =
        content[lang] || content.en;

    useEffect(() => {
        const sections =
            sectionsRef.current.filter(
                Boolean,
            );

        if (
            window.matchMedia(
                '(prefers-reduced-motion: reduce)',
            ).matches
        ) {
            sections.forEach(section => {
                section.classList.add(
                    'about-section-visible',
                );
            });

            return undefined;
        }

        const observer =
            new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (
                            entry.isIntersecting
                        ) {
                            entry.target.classList.add(
                                'about-section-visible',
                            );

                            observer.unobserve(
                                entry.target,
                            );
                        }
                    });
                },
                {
                    threshold: 0.18,
                },
            );

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, [lang]);

    return (
        <main className="about-page">
            <section className="about-hero">
                <div className="about-container">
                    <span className="about-kicker">
                        {page.kicker}
                    </span>

                    <h1 className="about-title">
                        {page.title}
                    </h1>

                    <p className="about-introduction">
                        {page.introduction}
                    </p>
                </div>
            </section>

            <section className="about-sections">
                {page.sections.map(
                    (section, index) => (
                        <article
                            className="about-section"
                            key={section.title}
                            ref={element => {
                                sectionsRef.current[
                                    index
                                ] = element;
                            }}
                        >
                            <div className="about-container about-section-layout">
                                <div className="about-section-heading">
                                    <span className="about-number">
                                        {
                                            section.number
                                        }
                                    </span>

                                    <span className="about-label">
                                        {
                                            section.label
                                        }
                                    </span>

                                    <h2>
                                        {
                                            section.title
                                        }
                                    </h2>
                                </div>

                                <div className="about-section-copy">
                                    <p>
                                        {
                                            section.text
                                        }
                                    </p>
                                </div>
                            </div>
                        </article>
                    ),
                )}
            </section>
        </main>
    );
}