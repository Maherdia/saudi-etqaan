import apellLogo from '../../assets/sanitary/APELL.webp';
import asiLogo from '../../assets/sanitary/ASI.webp';
import axorLogo from '../../assets/sanitary/axor.webp';
import benkiserLogo from '../../assets/sanitary/benkiser.webp';
import delabieLogo from '../../assets/sanitary/delabie.webp';
import duravitLogo from '../../assets/sanitary/Duravit.webp';
import fitzroyLogo from '../../assets/sanitary/Fitzroy_Of_London.webp';
import geberitLogo from '../../assets/sanitary/geberit.svg';
import hansgroheLogo from '../../assets/sanitary/Hansgrohe.svg';
import kwcLogo from '../../assets/sanitary/KWC.webp';
import sancoLogo from '../../assets/sanitary/sanco.webp';

import hardware from './hardware';

/* =========================================================
   SANITARY WARE DIVISION

   Sanitary Ware keeps its own:
   - Hero
   - Overview
   - Services
   - Solutions
   - Partners

   Shared with Door Hardware:
   - Certificates
   - Clients
   ========================================================= */

const sanitary = {
    id: 'sanitary',

    path: '/products/sanitary',

    categoryLayout: 'editorial',

    /* =====================================================
       HERO
       ===================================================== */

    title: {
        en: 'Etqaan Sanitary Ware',
        ar: 'الإتقان للأدوات الصحية',
    },

    kicker: {
        en:
            'Premium Bathroom & Sanitary Solutions',

        ar:
            'حلول حمامات وأدوات صحية فاخرة',
    },

    description: {
        en:
            'Saudi Etqaan supplies and distributes premium bathroom and sanitary solutions for residential, commercial, hospitality, and public projects.',

        ar:
            'تورد وتوزع الإتقان السعودية حلولاً فاخرة للحمامات والأدوات الصحية للمشاريع السكنية والتجارية والضيافة والمشاريع العامة.',
    },

    /* =====================================================
       OVERVIEW
       ===================================================== */

    overview: {
        title: {
            en:
                'Complete bathroom solutions combining design, durability, and performance',

            ar:
                'حلول حمامات متكاملة تجمع التصميم والمتانة والأداء',
        },

        paragraphs: [
            {
                en:
                    'Saudi Etqaan focuses on high-quality sanitary products that combine modern design, durability, functionality, and reliable performance.',

                ar:
                    'تركز الإتقان السعودية على منتجات صحية عالية الجودة تجمع بين التصميم الحديث والمتانة والوظائف العملية والأداء الموثوق.',
            },

            {
                en:
                    'The company serves residential, commercial, hospitality, and public projects with bathroom solutions selected around project requirements and international standards.',

                ar:
                    'تخدم الشركة المشاريع السكنية والتجارية والضيافة والمشاريع العامة بحلول حمامات يتم اختيارها وفق متطلبات المشروع والمعايير الدولية.',
            },

            {
                en:
                    'Its portfolio includes mixers, showers, washbasins, sanitary ware, concealed systems, accessories, drainage solutions, kitchen sinks, and smart water-management products from internationally recognized brands.',

                ar:
                    'تشمل محفظتها الخلاطات والدشات والمغاسل والأدوات الصحية والأنظمة المخفية والإكسسوارات وحلول التصريف وأحواض المطابخ ومنتجات إدارة المياه الذكية من علامات دولية معروفة.',
            },
        ],
    },

    /* =====================================================
       WHAT WE DO
       ===================================================== */

    whatWeDoSection: {
        title: {
            en:
                'Project support for complete bathroom solutions',

            ar:
                'دعم المشاريع بحلول حمامات متكاملة',
        },

        description: {
            en:
                'Product selection, technical coordination, bathroom-package development, brand coordination, and long-term project support.',

            ar:
                'اختيار المنتجات والتنسيق الفني وتطوير حزم الحمامات وتنسيق العلامات التجارية ودعم المشاريع طويل المدى.',
        },
    },

    services: [
        {
            title: {
                en: 'Product selection',
                ar: 'اختيار المنتجات',
            },

            description: {
                en:
                    'Selection of sanitary products according to project type, design intent, performance, durability, and functional requirements.',

                ar:
                    'اختيار المنتجات الصحية وفق نوع المشروع والتوجه التصميمي ومتطلبات الأداء والمتانة والاستخدام.',
            },
        },

        {
            title: {
                en:
                    'Project-specific solutions',

                ar:
                    'حلول مخصصة للمشاريع',
            },

            description: {
                en:
                    'Tailored sanitary and bathroom solutions for residential, commercial, hospitality, and public-sector applications.',

                ar:
                    'حلول صحية وحلول حمامات مخصصة للتطبيقات السكنية والتجارية والضيافة والقطاع العام.',
            },
        },

        {
            title: {
                en: 'Brand coordination',
                ar: 'تنسيق العلامات التجارية',
            },

            description: {
                en:
                    'Coordination of products from internationally recognized sanitary, bathroom, drainage, kitchen-sink, and accessibility brands.',

                ar:
                    'تنسيق منتجات علامات دولية معروفة في الأدوات الصحية والحمامات والتصريف وأحواض المطابخ وحلول سهولة الوصول.',
            },
        },

        {
            title: {
                en:
                    'Bathroom-package coordination',

                ar:
                    'تنسيق حزم الحمامات',
            },

            description: {
                en:
                    'Coordination of mixers, sanitary fixtures, washbasins, showers, concealed systems, accessories, and related products as complete bathroom packages.',

                ar:
                    'تنسيق الخلاطات والتجهيزات الصحية والمغاسل والدشات والأنظمة المخفية والإكسسوارات والمنتجات المرتبطة ضمن حزم حمامات متكاملة.',
            },
        },

        {
            title: {
                en:
                    'Architect and designer support',

                ar:
                    'دعم المعماريين والمصممين',
            },

            description: {
                en:
                    'Support for architects, designers, contractors, and developers in selecting coordinated products that suit project design and usage requirements.',

                ar:
                    'دعم المعماريين والمصممين والمقاولين والمطورين في اختيار منتجات متناسقة تلائم تصميم المشروع ومتطلبات الاستخدام.',
            },
        },

        {
            title: {
                en:
                    'Long-term project support',

                ar:
                    'دعم المشاريع طويل المدى',
            },

            description: {
                en:
                    'A project-focused approach built around professional service, product quality, long-term relationships, and value throughout delivery.',

                ar:
                    'منهج موجه للمشاريع يعتمد على الخدمة المهنية وجودة المنتجات والعلاقات طويلة المدى وتحقيق القيمة خلال التنفيذ.',
            },
        },
    ],

    /* =====================================================
       OUR SOLUTIONS
       ===================================================== */

    solutionsSection: {
        title: {
            en:
                'Bathroom and sanitary solutions for every application',

            ar:
                'حلول الحمامات والأدوات الصحية لمختلف التطبيقات',
        },

        description: {
            en:
                'A coordinated portfolio of sanitary fixtures, mixers, showers, washbasins, concealed systems, accessories, kitchen sinks, drainage, and smart-water products.',

            ar:
                'محفظة متكاملة من التجهيزات الصحية والخلاطات والدشات والمغاسل والأنظمة المخفية والإكسسوارات وأحواض المطابخ والتصريف ومنتجات المياه الذكية.',
        },
    },

    categories: [
        {
            slug: 'sanitary-ware',

            title: {
                en: 'Sanitary Ware',
                ar: 'الأدوات الصحية',
            },

            description: {
                en:
                    'Premium sanitary fixtures for residential, commercial, hospitality, and public bathroom applications.',

                ar:
                    'تجهيزات صحية فاخرة لتطبيقات الحمامات السكنية والتجارية والضيافة والمشاريع العامة.',
            },

            productsTitle: {
                en: 'Products',
                ar: 'المنتجات',
            },

            products: [
                {
                    en: 'Toilets',
                    ar: 'مراحيض',
                },

                {
                    en: 'Wall-hung toilets',
                    ar: 'مراحيض معلقة',
                },

                {
                    en: 'Urinals',
                    ar: 'مباول',
                },

                {
                    en: 'Bidets',
                    ar: 'بيديهات',
                },

                {
                    en:
                        'Designer sanitary fixtures',

                    ar:
                        'تجهيزات صحية بتصاميم معمارية',
                },

                {
                    en:
                        'Public washroom sanitary products',

                    ar:
                        'منتجات صحية لدورات المياه العامة',
                },
            ],
        },

        {
            slug: 'mixers-faucets',

            title: {
                en: 'Mixers & Faucets',
                ar: 'الخلاطات والحنفيات',
            },

            description: {
                en:
                    'Mixer and faucet collections combining modern design, dependable performance, water control, and coordinated finishes.',

                ar:
                    'مجموعات خلاطات وحنفيات تجمع التصميم الحديث والأداء الموثوق والتحكم بالمياه والتشطيبات المتناسقة.',
            },

            productsTitle: {
                en: 'Products',
                ar: 'المنتجات',
            },

            products: [
                {
                    en: 'Washbasin mixers',
                    ar: 'خلاطات مغاسل',
                },

                {
                    en: 'Bath mixers',
                    ar: 'خلاطات أحواض استحمام',
                },

                {
                    en: 'Shower mixers',
                    ar: 'خلاطات دش',
                },

                {
                    en: 'Kitchen mixers',
                    ar: 'خلاطات مطابخ',
                },

                {
                    en: 'Touch-free faucets',
                    ar: 'حنفيات بدون لمس',
                },

                {
                    en: 'Self-closing faucets',
                    ar: 'حنفيات ذاتية الإغلاق',
                },
            ],
        },

        {
            slug: 'showers',

            title: {
                en: 'Showers',
                ar: 'الدشات',
            },

            description: {
                en:
                    'Shower systems for luxury residential, hospitality, commercial, and coordinated bathroom projects.',

                ar:
                    'أنظمة دش للمشاريع السكنية الفاخرة والضيافة والمشاريع التجارية وحلول الحمامات المتكاملة.',
            },

            productsTitle: {
                en: 'Products',
                ar: 'المنتجات',
            },

            products: [
                {
                    en: 'Overhead showers',
                    ar: 'دشات علوية',
                },

                {
                    en: 'Hand showers',
                    ar: 'دشات يدوية',
                },

                {
                    en: 'Shower rails',
                    ar: 'قضبان دش',
                },

                {
                    en: 'Shower sets',
                    ar: 'مجموعات دش',
                },

                {
                    en:
                        'Thermostatic shower controls',

                    ar:
                        'أدوات تحكم حرارية للدش',
                },

                {
                    en:
                        'Multi-outlet shower systems',

                    ar:
                        'أنظمة دش متعددة المخارج',
                },
            ],
        },

        {
            slug: 'washbasins',

            title: {
                en:
                    'Washbasins & Bathroom Furniture',

                ar:
                    'المغاسل وأثاث الحمامات',
            },

            description: {
                en:
                    'Washbasins and coordinated bathroom furniture for modern, luxury, commercial, and hospitality interiors.',

                ar:
                    'مغاسل وأثاث حمامات متناسق للتصاميم الداخلية الحديثة والفاخرة والتجارية ومشاريع الضيافة.',
            },

            productsTitle: {
                en: 'Products',
                ar: 'المنتجات',
            },

            products: [
                {
                    en: 'Countertop washbasins',
                    ar: 'مغاسل فوق السطح',
                },

                {
                    en:
                        'Wall-mounted washbasins',

                    ar:
                        'مغاسل مثبتة على الجدار',
                },

                {
                    en: 'Double washbasins',
                    ar: 'مغاسل مزدوجة',
                },

                {
                    en: 'Washbasin cabinets',
                    ar: 'خزائن مغاسل',
                },

                {
                    en: 'Bathroom furniture',
                    ar: 'أثاث حمامات',
                },

                {
                    en: 'Bathroom mirrors',
                    ar: 'مرايا حمامات',
                },
            ],
        },

        {
            slug: 'concealed-systems',

            title: {
                en: 'Concealed Systems',
                ar: 'الأنظمة المخفية',
            },

            description: {
                en:
                    'Concealed sanitary installation systems designed to support clean bathroom finishes and coordinated construction.',

                ar:
                    'أنظمة تركيب صحية مخفية تدعم تشطيبات الحمامات النظيفة وتنسيق أعمال التنفيذ.',
            },

            productsTitle: {
                en: 'Products',
                ar: 'المنتجات',
            },

            products: [
                {
                    en: 'Concealed cisterns',
                    ar: 'صناديق طرد مخفية',
                },

                {
                    en: 'Installation frames',
                    ar: 'هياكل تركيب',
                },

                {
                    en: 'Flush plates',
                    ar: 'لوحات طرد',
                },

                {
                    en:
                        'Wall-hung toilet frames',

                    ar:
                        'هياكل مراحيض معلقة',
                },

                {
                    en:
                        'Concealed plumbing systems',

                    ar:
                        'أنظمة سباكة مخفية',
                },
            ],
        },

        {
            slug: 'bathroom-accessories',

            title: {
                en: 'Bathroom Accessories',
                ar: 'إكسسوارات الحمامات',
            },

            description: {
                en:
                    'Bathroom accessories for private, commercial, public, hospitality, and accessible washroom applications.',

                ar:
                    'إكسسوارات حمامات للتطبيقات الخاصة والتجارية والعامة والضيافة ودورات المياه المهيأة لسهولة الوصول.',
            },

            productsTitle: {
                en: 'Products',
                ar: 'المنتجات',
            },

            products: [
                {
                    en:
                        'Towel rails and holders',

                    ar:
                        'قضبان وحوامل المناشف',
                },

                {
                    en:
                        'Soap dishes and dispensers',

                    ar:
                        'حوامل وموزعات الصابون',
                },

                {
                    en:
                        'Toilet-paper dispensers',

                    ar:
                        'موزعات ورق الحمام',
                },

                {
                    en: 'Grab bars',
                    ar: 'قضبان مساعدة',
                },

                {
                    en: 'Coat hooks',
                    ar: 'علاقات ملابس',
                },

                {
                    en:
                        'Commercial washroom accessories',

                    ar:
                        'إكسسوارات دورات المياه التجارية',
                },
            ],
        },

        {
            slug:
                'commercial-public-washrooms',

            title: {
                en:
                    'Commercial & Public Washrooms',

                ar:
                    'دورات المياه التجارية والعامة',
            },

            description: {
                en:
                    'Products for public and commercial washrooms, including touch-free, self-closing, durable, and high-traffic sanitary solutions.',

                ar:
                    'منتجات لدورات المياه العامة والتجارية تشمل حلولاً بدون لمس وذاتية الإغلاق ومتينة ومناسبة للاستخدام الكثيف.',
            },

            productsTitle: {
                en: 'Products',
                ar: 'المنتجات',
            },

            products: [
                {
                    en: 'Touch-free faucets',
                    ar: 'حنفيات بدون لمس',
                },

                {
                    en:
                        'Self-closing faucets',

                    ar:
                        'حنفيات ذاتية الإغلاق',
                },

                {
                    en:
                        'Public washroom controls',

                    ar:
                        'أدوات تحكم لدورات المياه العامة',
                },

                {
                    en:
                        'Paper-towel dispensers',

                    ar:
                        'موزعات مناشف ورقية',
                },

                {
                    en: 'Soap dispensers',
                    ar: 'موزعات صابون',
                },

                {
                    en: 'Waste receptacles',
                    ar: 'حاويات نفايات',
                },
            ],
        },

        {
            slug: 'accessible-bathrooms',

            title: {
                en:
                    'Accessible Bathroom Solutions',

                ar:
                    'حلول الحمامات المهيأة لسهولة الوصول',
            },

            description: {
                en:
                    'Accessible bathroom and washroom products combining functionality, compliance, durability, and coordinated design.',

                ar:
                    'منتجات حمامات ودورات مياه مهيأة لسهولة الوصول تجمع بين الوظيفة والامتثال والمتانة والتصميم المتناسق.',
            },

            productsTitle: {
                en: 'Products',
                ar: 'المنتجات',
            },

            products: [
                {
                    en:
                        'Accessible washbasins',

                    ar:
                        'مغاسل مهيأة لسهولة الوصول',
                },

                {
                    en: 'Support rails',
                    ar: 'قضبان دعم',
                },

                {
                    en: 'Grab bars',
                    ar: 'مقابض مساعدة',
                },

                {
                    en:
                        'Accessible toilet accessories',

                    ar:
                        'إكسسوارات مراحيض مهيأة',
                },

                {
                    en:
                        'Accessible shower accessories',

                    ar:
                        'إكسسوارات دش مهيأة',
                },

                {
                    en:
                        'Commercial accessibility products',

                    ar:
                        'منتجات وصول للتطبيقات التجارية',
                },
            ],
        },

        {
            slug: 'kitchen-sinks',

            title: {
                en: 'Kitchen Sinks',
                ar: 'أحواض المطابخ',
            },

            description: {
                en:
                    'Stainless-steel kitchen sinks in multiple installation configurations for residential and project kitchens.',

                ar:
                    'أحواض مطابخ من الفولاذ المقاوم للصدأ بخيارات تركيب متعددة للمطابخ السكنية ومطابخ المشاريع.',
            },

            productsTitle: {
                en: 'Products',
                ar: 'المنتجات',
            },

            products: [
                {
                    en: 'Drop-in sinks',
                    ar: 'أحواض تركيب علوي',
                },

                {
                    en: 'Undermount sinks',
                    ar: 'أحواض تركيب سفلي',
                },

                {
                    en: 'Flush-mounted sinks',
                    ar: 'أحواض مدمجة بمستوى السطح',
                },

                {
                    en: 'Single-bowl sinks',
                    ar: 'أحواض بحوض واحد',
                },

                {
                    en: 'Double-bowl sinks',
                    ar: 'أحواض مزدوجة',
                },

                {
                    en:
                        'Stainless-steel kitchen sinks',

                    ar:
                        'أحواض مطابخ من الفولاذ المقاوم للصدأ',
                },
            ],
        },

        {
            slug: 'drainage-smart-water',

            title: {
                en:
                    'Drainage & Smart Water',

                ar:
                    'التصريف والمياه الذكية',
            },

            description: {
                en:
                    'Drainage and smart water-management products included within the company’s complete bathroom-solutions portfolio.',

                ar:
                    'منتجات تصريف وإدارة مياه ذكية ضمن محفظة الشركة لحلول الحمامات المتكاملة.',
            },

            productsTitle: {
                en: 'Products',
                ar: 'المنتجات',
            },

            products: [
                {
                    en:
                        'Bathroom drainage solutions',

                    ar:
                        'حلول تصريف الحمامات',
                },

                {
                    en: 'Drainage channels',
                    ar: 'قنوات تصريف',
                },

                {
                    en: 'Floor drains',
                    ar: 'مصارف أرضية',
                },

                {
                    en: 'Smart water controls',
                    ar: 'أدوات تحكم ذكية بالمياه',
                },

                {
                    en: 'Water-saving products',
                    ar: 'منتجات توفير المياه',
                },

                {
                    en:
                        'Electronic water-management products',

                    ar:
                        'منتجات إلكترونية لإدارة المياه',
                },
            ],
        },
    ],

    /* =====================================================
       TECHNICAL DATA
       ===================================================== */

    technicalData: {
        title: {
            en:
                'Apell Kitchen Sink Technical Data',

            ar:
                'البيانات الفنية لأحواض مطابخ Apell',
        },

        note: {
            en:
                'Technical information for selected stainless-steel kitchen-sink products.',

            ar:
                'معلومات فنية لمنتجات مختارة من أحواض المطابخ المصنوعة من الفولاذ المقاوم للصدأ.',
        },

        groups: [
            {
                title: {
                    en:
                        'Material & Performance',

                    ar:
                        'المواد والأداء',
                },

                rows: [
                    {
                        label: {
                            en: 'Material',
                            ar: 'المادة',
                        },

                        value: {
                            en:
                                'AISI 304 18/10 stainless steel',

                            ar:
                                'فولاذ مقاوم للصدأ AISI 304 18/10',
                        },
                    },

                    {
                        label: {
                            en:
                                'Surface properties',

                            ar:
                                'خصائص السطح',
                        },

                        value: {
                            en:
                                'Designed to resist rust, scratches, and stains',

                            ar:
                                'مصمم لمقاومة الصدأ والخدوش والبقع',
                        },
                    },

                    {
                        label: {
                            en:
                                'Noise reduction',

                            ar:
                                'تقليل الضوضاء',
                        },

                        value: {
                            en:
                                'Selected models include foam pads below the bowls',

                            ar:
                                'تتضمن بعض الطرازات وسائد رغوية أسفل الأحواض',
                        },
                    },

                    {
                        label: {
                            en: 'Hygiene',
                            ar: 'النظافة',
                        },

                        value: {
                            en:
                                'Smooth surface designed for easy cleaning',

                            ar:
                                'سطح أملس مصمم لسهولة التنظيف',
                        },
                    },
                ],
            },

            {
                title: {
                    en:
                        'Installation Options',

                    ar:
                        'خيارات التركيب',
                },

                rows: [
                    {
                        label: {
                            en: 'Drop-in',
                            ar: 'تركيب علوي',
                        },

                        value: {
                            en: 'Available',
                            ar: 'متاح',
                        },
                    },

                    {
                        label: {
                            en: 'Undermount',
                            ar: 'تركيب سفلي',
                        },

                        value: {
                            en: 'Available',
                            ar: 'متاح',
                        },
                    },

                    {
                        label: {
                            en: 'Flush-mounted',
                            ar: 'تركيب بمستوى السطح',
                        },

                        value: {
                            en: 'Available',
                            ar: 'متاح',
                        },
                    },
                ],
            },
        ],
    },

    /* =====================================================
       PARTNERS
       ===================================================== */

    partnersSection: {
        title: {
            en:
                'International bathroom and sanitary brands',

            ar:
                'علامات دولية للحمامات والأدوات الصحية',
        },

        description: {
            en:
                'International manufacturers supporting our sanitary, bathroom, kitchen-sink, accessibility, and commercial-washroom solutions.',

            ar:
                'مصنعون دوليون يدعمون حلول الأدوات الصحية والحمامات وأحواض المطابخ وسهولة الوصول ودورات المياه التجارية.',
        },
    },

    partners: [
        {
            name: {
                en: 'Hansgrohe',
                ar: 'هانزغروهي',
            },

            logo: hansgroheLogo,

            surface: 'light',

            website:
                'https://www.hansgrohe.com/',
        },

        {
            name: {
                en: 'AXOR',
                ar: 'أكسور',
            },

            logo: axorLogo,

            surface: 'light',

            website:
                'https://www.axor-design.com/',
        },

        {
            name: {
                en: 'Duravit',
                ar: 'دورافيت',
            },

            logo: duravitLogo,

            surface: 'light',

            website:
                'https://www.duravit.com/en-en/',
        },

        {
            name: {
                en: 'KWC',
                ar: 'كي دبليو سي',
            },

            logo: kwcLogo,

            surface: 'light',

            website:
                'https://www.kwc.com/',
        },

        {
            name: {
                en: 'Geberit',
                ar: 'جِبريت',
            },

            logo: geberitLogo,

            surface: 'light',

            website:
                'https://www.geberit.com/',
        },

        {
            name: {
                en: 'Apell',
                ar: 'أبيل',
            },

            logo: apellLogo,

            surface: 'light',

            website:
                'https://www.apell.it/',
        },

        {
            name: {
                en: 'ASI Group',
                ar: 'مجموعة ASI',
            },

            logo: asiLogo,

            surface: 'light',

            website:
                'https://www.americanspecialties.com/',
        },

        {
            name: {
                en: 'Fitzroy of London',
                ar: 'فيتزروي أوف لندن',
            },

            logo: fitzroyLogo,

            surface: 'light',

            website:
                'https://www.fitzroyoflondon.com/',
        },

        {
            name: {
                en: 'Benkiser',
                ar: 'بنكايزر',
            },

            logo: benkiserLogo,

            surface: 'light',

            website:
                'https://www.benkiser.de/',
        },

        {
            name: {
                en: 'Sanco',
                ar: 'سانكو',
            },

            logo: sancoLogo,

            surface: 'light',

            website:
                'https://www.sanco.gr/',
        },

        {
            name: {
                en: 'DELABIE',
                ar: 'ديلابي',
            },

            logo: delabieLogo,

            surface: 'light',

            website:
                'https://www.delabie.com/',
        },
    ],

    /* =====================================================
       CERTIFICATES
       ===================================================== */

    certificatesSection: {
        title: {
            en:
                'Certificates, standards, and product compliance',

            ar:
                'الشهادات والمعايير ومطابقة المنتجات',
        },

        description: {
            en:
                'Approved company certificates and recognized compliance credentials supporting our project delivery.',

            ar:
                'شهادات الشركة المعتمدة واعتمادات المطابقة المعترف بها والتي تدعم تنفيذ مشاريعنا.',
        },
    },

    certifications:
        hardware.certifications,

    /* =====================================================
       CLIENTS
       ===================================================== */

    clientsSection: {
        title: {
            en:
                'Organizations that trust Etqaan Sanitary Ware',

            ar:
                'جهات تثق بحلول الإتقان للأدوات الصحية',
        },

        description: {
            en:
                'Government entities, developers, universities, healthcare providers, industrial organizations, and major project clients represented in our approved references.',

            ar:
                'جهات حكومية ومطورون وجامعات ومقدمو خدمات صحية ومؤسسات صناعية وعملاء مشاريع رئيسيون ضمن مراجعنا المعتمدة.',
        },
    },

    clients:
        hardware.clients,
};

export default sanitary;