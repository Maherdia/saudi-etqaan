import { productDivisions } from './products';

export const divisions = productDivisions.map((division) => ({
    id: division.id,
    path: division.path,
    title: division.title,
    text: division.description,
    categories: division.categories.map((category) => category.title),
}));
export const companies = [
    {
        id: 'nisreen-factory',

        name: {
            en: 'Nisreen Factory',
            ar: 'مصنع نسرين',
        },

        shortName: 'SSW',

        desc: {
            en:
                'Special and Safety Works specializes in architectural steel products, engineered doors, protection systems, and specialized security manufacturing.',

            ar:
                'تتخصص SSW في المنتجات الفولاذية المعمارية، والأبواب الهندسية، وأنظمة الحماية، والتصنيع الأمني المتخصص.',
        },

        website: 'https://nisreenfactory.com',
    },

    {
        id: 'wood-house',

        name: {
            en: 'Wood House Factory',
            ar: 'مصنع دار الخشب',
        },

        shortName: 'Wood House',

        desc: {
            en:
                'Custom architectural woodwork, wooden doors, joinery, furniture, and premium interior manufacturing for residential and commercial projects.',

            ar:
                'أعمال خشبية معمارية مخصصة، وأبواب خشبية، ونجارة، وأثاث، وتصنيع داخلي فاخر للمشاريع السكنية والتجارية.',
        },

        website: 'https://whfactories.com/',
    },

    {
        id: 'silver-ceiling',

        name: {
            en: 'Silver Ceiling',
            ar: 'السقف الفضي',
        },

        shortName: 'Silver Ceiling',

        desc: {
            en:
                'General contracting, construction, interior and exterior finishing, landscaping, hardscape works and project maintenance.',

            ar:
                'مقاولات عامة وإنشاءات وتشطيبات داخلية وخارجية وأعمال تنسيق المواقع والهاردسكيب وصيانة المشاريع.',
        },


        website: 'https://REPLACE-WITH-SILVER-CEILING-WEBSITE.com',
    },
];

export const projects = [
    {
        id: 'pif-tower',

        name: 'PIF Tower',

        title: {
            en: 'PIF Tower',
            ar: 'برج صندوق الاستثمارات العامة',
        },

        division: 'technology',

        divisionLabel: {
            en: 'Etqaan Technology',
            ar: 'الإتقان للتقنية',
        },

        city: 'Riyadh',

        cityLabel: {
            en: 'Riyadh',
            ar: 'الرياض',
        },

        client: 'Saudi BinLaden Group',

        scope: 'MEP and technology infrastructure',

        scopeLabel: {
            en: 'MEP and technology infrastructure',
            ar: 'البنية التحتية التقنية وأعمال الميكانيكا والكهرباء',
        },

        featured: true,
    },

    {
        id: 'solitaire-shopping-mall',

        name: 'Solitaire Shopping Mall',

        title: {
            en: 'Solitaire Shopping Mall',
            ar: 'سوليتير شوبينغ مول',
        },

        division: 'technology',

        divisionLabel: {
            en: 'Etqaan Technology',
            ar: 'الإتقان للتقنية',
        },

        city: 'Riyadh',

        cityLabel: {
            en: 'Riyadh',
            ar: 'الرياض',
        },

        client: 'Bin Dayel Contracting',

        scope: 'MEP systems',

        scopeLabel: {
            en: 'MEP systems',
            ar: 'أنظمة الميكانيكا والكهرباء والسباكة',
        },

        featured: true,
    },

    {
        id: 'rimal-center',

        name: 'Rimal Center',

        title: {
            en: 'Rimal Center',
            ar: 'مركز الرمال',
        },

        division: 'technology',

        divisionLabel: {
            en: 'Etqaan Technology',
            ar: 'الإتقان للتقنية',
        },

        city: 'Riyadh',

        cityLabel: {
            en: 'Riyadh',
            ar: 'الرياض',
        },

        client: 'Rimal Mall Management',

        scope: 'MEP systems',

        scopeLabel: {
            en: 'MEP systems',
            ar: 'أنظمة الميكانيكا والكهرباء والسباكة',
        },

        featured: true,
    },

    {
        id: 'muzdalifah-phase-two',

        name: 'Muzdalifah Phase II',

        title: {
            en: 'Muzdalifah Phase II',
            ar: 'مزدلفة المرحلة الثانية',
        },

        division: 'security',

        divisionLabel: {
            en: 'Etqaan MEP & SEC.',
            ar: 'الإتقان للأمن و التيار الخفيف',
        },

        city: 'Makkah',

        cityLabel: {
            en: 'Makkah',
            ar: 'مكة المكرمة',
        },

        client:
            'Al Fouzan Trading and General Construction',

        scope: 'Surveillance and audiovisual systems',

        scopeLabel: {
            en: 'Surveillance and audiovisual systems',
            ar: 'أنظمة المراقبة والأنظمة السمعية والبصرية',
        },

        featured: true,
    },

    {
        id: 'correction-facility',

        name: 'Correction Facility',

        title: {
            en: 'Correction Facility',
            ar: 'مشروع المنشآت الإصلاحية',
        },

        division: 'security',

        divisionLabel: {
            en: 'Etqaan MEP & SEC.',
            ar: 'الإتقان للأمن و التيار الخفيف',
        },

        city: 'Multiple Cities',

        cityLabel: {
            en: 'Jeddah, Dammam and Riyadh',
            ar: 'جدة والدمام والرياض',
        },

        client: 'Saudi BinLaden Group',

        scope: 'Integrated security systems',

        scopeLabel: {
            en: 'Integrated security systems',
            ar: 'أنظمة أمنية متكاملة',
        },

        featured: false,
    },

    {
        id: 'time-access-terminal',

        name: 'Time and Access Terminal Project',

        title: {
            en: 'Time and Access Terminal Project',
            ar: 'مشروع أنظمة الوقت والتحكم بالدخول',
        },

        division: 'security',

        divisionLabel: {
            en: 'Etqaan MEP & SEC.',
            ar: 'الإتقان للأمن و التيار الخفيف',
        },

        city: 'Jubail',

        cityLabel: {
            en: 'Jubail',
            ar: 'الجبيل',
        },

        client:
            'Saudi International Petrochemical Company',

        scope: 'Time attendance and access control',

        scopeLabel: {
            en: 'Time attendance and access control',
            ar: 'أنظمة الحضور والتحكم بالدخول',
        },

        featured: false,
    },
];