import {
    useEffect,
} from 'react';

const SCRIPT_ID =
    'saudi-etqaan-organization-schema';

const organizationSchema = {
    '@context':
        'https://schema.org',

    '@type': [
        'Organization',
        'LocalBusiness',
    ],

    '@id':
        'https://saudietqaan.com.sa/#organization',

    name:
        'Saudi Etqaan Co.',

    legalName:
        'Saudi Etqaan Co. for Trading & Contracting',

    url:
        'https://saudietqaan.com.sa/',

    logo: {
        '@type':
            'ImageObject',

        url:
            'https://saudietqaan.com.sa/etqaan-logo.webp',

        contentUrl:
            'https://saudietqaan.com.sa/etqaan-logo.webp',

        width:
            763,

        height:
            327,
    },

    image:
        'https://saudietqaan.com.sa/og-cover.webp',

    description:
        'Saudi Etqaan provides architectural hardware, security and low-current systems, sanitary solutions, smart technologies, and specialized project support across Saudi Arabia.',

    email:
        'info@saudietqaan.com.sa',

    telephone:
        '+966114733043',

    address: {
        '@type':
            'PostalAddress',

        streetAddress:
            '3492 Osayd Bin Thalaba, Al Rabwah District',

        addressLocality:
            'Riyadh',

        postalCode:
            '12815',

        addressCountry:
            'SA',
    },

    areaServed: {
        '@type':
            'Country',

        name:
            'Saudi Arabia',
    },

    contactPoint: [
        {
            '@type':
                'ContactPoint',

            telephone:
                '+966114733043',

            contactType:
                'customer service',

            areaServed:
                'SA',

            availableLanguage: [
                'English',
                'Arabic',
            ],
        },
        {
            '@type':
                'ContactPoint',

            telephone:
                '+966506209875',

            contactType:
                'sales',

            areaServed:
                'SA',

            availableLanguage: [
                'English',
                'Arabic',
            ],
        },
    ],
};

export default function OrganizationSchema() {
    useEffect(() => {
        let script =
            document.getElementById(
                SCRIPT_ID,
            );

        if (!script) {
            script =
                document.createElement(
                    'script',
                );

            script.id =
                SCRIPT_ID;

            script.type =
                'application/ld+json';

            document.head.appendChild(
                script,
            );
        }

        script.textContent =
            JSON.stringify(
                organizationSchema,
            );

        return () => {
            script?.remove();
        };
    }, []);

    return null;
}
