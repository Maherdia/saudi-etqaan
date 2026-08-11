import { projectSectors } from './projects';

const industryCopy = {
    healthcare: {
        headline: {
            en: 'Reliable spaces for better care.',
            ar: 'مساحات موثوقة لرعاية أفضل.',
        },

        description: {
            en:
                'Secure, coordinated systems that support patient care, staff efficiency, and reliable healthcare operations.',

            ar:
                'أنظمة آمنة ومتكاملة تدعم رعاية المرضى وكفاءة الفرق واستمرارية تشغيل المنشآت الصحية.',
        },

        signal: 'CARE / SAFETY',
    },

    education: {
        headline: {
            en: 'Smart spaces for learning.',
            ar: 'مساحات ذكية للتعلم.',
        },

        description: {
            en:
                'Connected systems that improve safety, communication, comfort, and daily operations across learning environments.',

            ar:
                'أنظمة مترابطة تعزز السلامة والتواصل والراحة وكفاءة التشغيل داخل البيئات التعليمية.',
        },

        signal: 'LEARN / CONNECT',
    },

    government: {
        headline: {
            en: 'Secure systems for public services.',
            ar: 'أنظمة آمنة للخدمات العامة.',
        },

        description: {
            en:
                'Reliable infrastructure that supports secure public services, efficient operations, and long-term institutional performance.',

            ar:
                'بنية تحتية موثوقة تدعم الخدمات العامة الآمنة وكفاءة التشغيل والأداء المؤسسي طويل المدى.',
        },

        signal: 'PUBLIC / SECURE',
    },

    infrastructure: {
        headline: {
            en: 'Built to support growth.',
            ar: 'مصممة لدعم النمو.',
        },

        description: {
            en:
                'Integrated systems designed to support complex projects, dependable performance, and future operational growth.',

            ar:
                'أنظمة متكاملة تدعم المشاريع المعقدة والأداء الموثوق والنمو التشغيلي المستقبلي.',
        },

        signal: 'SCALE / RELIABLE',
    },

    commercial: {
        headline: {
            en: 'Better spaces for business.',
            ar: 'مساحات أفضل للأعمال.',
        },

        description: {
            en:
                'Efficient building systems that improve workplace performance, customer experience, and daily business operations.',

            ar:
                'أنظمة مبانٍ فعالة تعزز أداء بيئات العمل وتجربة العملاء وكفاءة العمليات اليومية.',
        },

        signal: 'BUSINESS / EFFICIENCY',
    },

    hospitality: {
        headline: {
            en: 'Better guest experiences.',
            ar: 'تجارب أفضل للضيوف.',
        },

        description: {
            en:
                'Smart, reliable systems that improve guest comfort, service quality, security, and facility performance.',

            ar:
                'أنظمة ذكية وموثوقة تعزز راحة الضيوف وجودة الخدمة والأمان وكفاءة المنشأة.',
        },

        signal: 'GUEST / COMFORT',
    },

    residential: {
        headline: {
            en: 'Comfort and security at home.',
            ar: 'راحة وأمان في المنزل.',
        },

        description: {
            en:
                'Integrated solutions that improve comfort, security, connectivity, and everyday living across modern communities.',

            ar:
                'حلول متكاملة تعزز الراحة والأمان والاتصال وجودة الحياة اليومية في المجتمعات الحديثة.',
        },

        signal: 'HOME / SECURITY',
    },

    religious: {
        headline: {
            en: 'Reliable spaces for every visitor.',
            ar: 'مساحات موثوقة لكل زائر.',
        },

        description: {
            en:
                'Discreet, reliable systems that support safety, visitor flow, communication, and respectful facility operations.',

            ar:
                'أنظمة موثوقة وغير متداخلة تدعم السلامة وحركة الزوار والتواصل وتشغيل المنشآت باحترام.',
        },

        signal: 'SAFETY / FLOW',
    },

    industrial: {
        headline: {
            en: 'Built for demanding operations.',
            ar: 'مصممة للعمليات الصناعية المتطلبة.',
        },

        description: {
            en:
                'Reliable systems that support safety, operational continuity, efficient production, and long-term industrial performance.',

            ar:
                'أنظمة موثوقة تدعم السلامة واستمرارية التشغيل وكفاءة الإنتاج والأداء الصناعي طويل المدى.',
        },

        signal: 'INDUSTRY / PERFORMANCE',
    },
};

const fallbackIndustryCopy = {
    headline: {
        en: 'Integrated solutions for this sector.',
        ar: 'حلول متكاملة لهذا القطاع.',
    },

    description: {
        en:
            'Reliable systems designed around the operational requirements of this sector.',

        ar:
            'أنظمة موثوقة مصممة وفق المتطلبات التشغيلية لهذا القطاع.',
    },

    signal: 'ETQAAN / SOLUTIONS',
};

export const industries = projectSectors
    .filter(sector => sector.id !== 'all')
    .map((sector, index) => {
        const copy =
            industryCopy[sector.id] ??
            fallbackIndustryCopy;

        return {
            ...sector,

            index: index + 1,

            headline:
                copy.headline ??
                fallbackIndustryCopy.headline,

            description:
                copy.description ??
                fallbackIndustryCopy.description,

            signal:
                copy.signal ??
                fallbackIndustryCopy.signal,
        };
    });

export default industries;