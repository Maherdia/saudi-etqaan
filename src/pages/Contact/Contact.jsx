import {
    FiArrowUpRight,
    FiMail,
    FiMapPin,
    FiPhone,
} from 'react-icons/fi';

import siteConfig from '../../data/siteConfig';
import { useApp } from '../../context/AppContext';

import './Contact.css';

/* =========================================================
   MAIN CONTACT DETAILS
   ========================================================= */

const MAIN_PHONE_DISPLAY =
    '800 124 0198';

const MAIN_PHONE_HREF =
    'tel:8001240198';

const MAIN_EMAIL =
    'info@saudietqaan.com.sa';

/* =========================================================
   MAPS
   ========================================================= */

const OFFICE_MAP_EMBED_URL =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7250.428778406265!2d46.73768814843279!3d24.68515586943502!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03f16f8f37af%3A0x563a1003c0928c5!2sSaudi%20Etqaan%20Co.!5e0!3m2!1sen!2ssa!4v1785659446771!5m2!1sen!2ssa';

/* =========================================================
   CONTACT PAGE
   ========================================================= */

export default function Contact() {
    const {
        lang,
    } = useApp();

    const isArabic =
        lang === 'ar';

    const content = isArabic
        ? {
            heroEyebrow:
                'تواصل معنا',

            heroTitle:
                'ابدأ المحادثة معنا.',

            heroDescription:
                'تواصل مع فريق الإتقان السعودية عبر رقم الاتصال الموحد أو البريد الإلكتروني.',

            directoryEyebrow:
                'معلومات التواصل',

            directoryTitle:
                'تواصل مباشرة مع الإتقان السعودية.',

            mainOffice:
                'المكتب الرئيسي',

            mainContact:
                'التواصل الرئيسي',

            contactDescription:
                'تواصل معنا للاستفسارات العامة وطلبات المشاريع والمعلومات المتعلقة بخدمات وحلول الإتقان السعودية.',

            phone:
                'رقم التواصل',

            email:
                'البريد الإلكتروني',

            callUs:
                'اتصل بنا',

            officeSectionEyebrow:
                'موقع المكتب',

            officeSectionTitle:
                'مكتب الإتقان السعودية في الرياض.',

            officeSectionDescription:
                'مكتبنا الرئيسي لخدمة العملاء والاستشاريين والمقاولين والشركاء في مختلف مناطق المملكة.',

            office:
                'مكتب الرياض',

            officeDescription:
                'المكتب الرئيسي لشركة الإتقان السعودية في الرياض.',

            directions:
                'فتح الموقع في خرائط Google',

            officeMapTitle:
                'موقع مكتب شركة الإتقان السعودية',
        }
        : {
            heroEyebrow:
                'CONTACT US',

            heroTitle:
                'Start a conversation with us.',

            heroDescription:
                'Contact Saudi Etqaan through our main phone number or email address.',

            directoryEyebrow:
                'CONTACT INFORMATION',

            directoryTitle:
                'Direct access to Saudi Etqaan.',

            mainOffice:
                'Main Office',

            mainContact:
                'Main Contact',

            contactDescription:
                'Contact us for general inquiries, project requests, and information about Saudi Etqaan services and solutions.',

            phone:
                'Contact Number',

            email:
                'Email Address',

            callUs:
                'Call Us',

            officeSectionEyebrow:
                'OFFICE LOCATION',

            officeSectionTitle:
                'Saudi Etqaan office in Riyadh.',

            officeSectionDescription:
                'Our main office supports clients, consultants, contractors, and partners across Saudi Arabia.',

            office:
                'Riyadh Office',

            officeDescription:
                'Saudi Etqaan’s main office in Riyadh.',

            directions:
                'Open in Google Maps',

            officeMapTitle:
                'Saudi Etqaan office location',
        };

    return (
        <main className="contact-page">
            {/* =================================================
                CONTACT HERO
                ================================================= */}

            <section className="contact-hero">
                <div className="contact-container">
                    <span className="contact-eyebrow">
                        {content.heroEyebrow}
                    </span>

                    <h1 className="contact-title">
                        {content.heroTitle}
                    </h1>

                    <p className="contact-introduction">
                        {content.heroDescription}
                    </p>
                </div>
            </section>

            {/* =================================================
                MAIN PHONE AND EMAIL
                ================================================= */}

            <section className="contact-directory">
                <div className="contact-container">
                    <div className="contact-section-heading">
                        <span>
                            {content.directoryEyebrow}
                        </span>

                        <h2>
                            {content.directoryTitle}
                        </h2>
                    </div>

                    <article className="contact-feature-card">
                        <div className="contact-feature-heading">
                            <span className="contact-feature-number">
                                01
                            </span>

                            <div>
                                <small>
                                    {content.mainOffice}
                                </small>

                                <h3>
                                    {content.mainContact}
                                </h3>
                            </div>
                        </div>

                        <div className="contact-feature-copy">
                            <p>
                                {content.contactDescription}
                            </p>
                        </div>

                        <div className="contact-feature-details">
                            <div className="contact-feature-detail">
                                <FiPhone aria-hidden="true" />

                                <div>
                                    <span>
                                        {content.phone}
                                    </span>

                                    <a
                                        href={MAIN_PHONE_HREF}
                                        dir="ltr"
                                    >
                                        {MAIN_PHONE_DISPLAY}
                                    </a>
                                </div>
                            </div>

                            <div className="contact-feature-detail">
                                <FiMail aria-hidden="true" />

                                <div>
                                    <span>
                                        {content.email}
                                    </span>

                                    <a
                                        href={`mailto:${MAIN_EMAIL}`}
                                        dir="ltr"
                                    >
                                        {MAIN_EMAIL}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-feature-actions">
                            <a
                                className="contact-feature-primary"
                                href={MAIN_PHONE_HREF}
                            >
                                <FiPhone aria-hidden="true" />

                                <span>
                                    {content.callUs}
                                </span>
                            </a>
                        </div>
                    </article>
                </div>
            </section>

            {/* =================================================
                OFFICE LOCATION
                ================================================= */}

            <section className="contact-location contact-office-location">
                <div className="contact-container">
                    <div className="contact-location-heading">
                        <span className="contact-location-eyebrow">
                            {content.officeSectionEyebrow}
                        </span>

                        <h2>
                            {content.officeSectionTitle}
                        </h2>

                        <p>
                            {content.officeSectionDescription}
                        </p>
                    </div>

                    <article className="contact-location-card">
                        <div className="contact-location-card-copy">
                            <span className="contact-location-number">
                                01
                            </span>

                            <div>
                                <small>
                                    {content.office}
                                </small>

                                <h3>
                                    {content.office}
                                </h3>

                                <p>
                                    {content.officeDescription}
                                </p>

                                <div className="contact-location-address">
                                    <FiMapPin aria-hidden="true" />

                                    <strong>
                                        {siteConfig.contact.addressLines.join(
                                            ', ',
                                        )}
                                    </strong>
                                </div>

                                <a
                                    className="contact-directions-link"
                                    href={siteConfig.contact.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>
                                        {content.directions}
                                    </span>

                                    <FiArrowUpRight
                                        aria-hidden="true"
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="contact-map-frame">
                            <iframe
                                src={OFFICE_MAP_EMBED_URL}
                                title={content.officeMapTitle}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="strict-origin-when-cross-origin"
                            />
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
}