import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

import { useApp } from '../../context/AppContext';

import darkLogo from '../../assets/logos/etqaan-full.webp';
import lightLogo from '../../assets/logos/etqaan-full-light.webp';
import mark from '../../assets/logos/etqaan-mark.webp';

import './Footer.css';

const MAPS_URL =
    'https://maps.app.goo.gl/cwYqpKPRMKgJrv4T7';

export default function Footer() {
    const { lang, theme } = useApp();

    const isArabic =
        lang === 'ar';

    const content = isArabic
        ? {
            home: 'الرئيسية',
            products: 'المنتجات والحلول',
            projects: 'المشاريع',
            companies: 'شركاتنا',
            contact: 'اتصل بنا',
            about: 'من نحن',
            cta: 'ابدأ مشروعك',
            contactUs: 'تواصل معنا',
            location:
                'الرياض، المملكة العربية السعودية',
            company:
                'شركة الإتقان السعودية',
            descriptor:
                'حلول متكاملة في التقنية والأمن والحديديات المعمارية والأدوات الصحية والتصنيع والمقاولات.',
            foundation:
                'مجموعة واحدة. تكامل في التميز.',
            builtFor:
                'بُنيت للتنفيذ المنضبط',
            rights:
                '© 2026 شركة الإتقان السعودية للتجارة والمقاولات. جميع الحقوق محفوظة.',
            websiteBy:
                'تطوير الموقع: م. ماهر ضيا',
            openProducts:
                'فتح قائمة المنتجات والحلول',
            mapLabel:
                'فتح موقع الشركة على خرائط Google',
        }
        : {
            home: 'Home',
            products: 'Products',
            projects: 'Projects',
            companies: 'Companies',
            contact: 'Contact',
            about: 'About us',
            cta: 'Start your project',
            contactUs: 'Contact us',
            location:
                '📍 Riyadh, Saudi Arabia',
            company:
                'Saudi Etqaan Co.',
            descriptor:
                'Integrated expertise across technology, security, architectural hardware, sanitary solutions, manufacturing, and contracting.',
            foundation:
                'One group. Integrated excellence.',
            builtFor:
                'Built for coordinated delivery',
            rights:
                '© 2026 Saudi Etqaan Co. for Trading & Contracting. All rights reserved.',
            websiteBy:
                'Website by Eng. Maher Dia',
            openProducts:
                'Open Products and Solutions menu',
            mapLabel:
                'Open Saudi Etqaan location in Google Maps',
        };

    const footerLogo =
        theme === 'light'
            ? lightLogo
            : darkLogo;

    function openProductsMenu(event) {
        event.preventDefault();

        window.dispatchEvent(
            new CustomEvent(
                'open-products-menu',
            ),
        );
    }

    return (
        <footer className="site-footer">
            <div className="footer-shell">
                <div className="footer-top">
                    <Link
                        className="footer-brand"
                        to="/"
                        aria-label={
                            content.company
                        }
                    >
                        <img
                            src={footerLogo}
                            alt={content.company}
                        />
                    </Link>

                    <div className="footer-actions">
                        <Link
                            className="footer-cta"
                            to="/contact"
                        >
                            <span>
                                {content.cta}
                            </span>

                            <FiArrowUpRight
                                aria-hidden="true"
                            />
                        </Link>
                    </div>
                </div>

                <div className="footer-navigation-row">
                    <nav
                        className="footer-mega-nav"
                        aria-label="Footer"
                    >
                        <Link to="/">
                            {content.home}
                        </Link>

                        <a
                            href="/products/sanitary"
                            onClick={
                                openProductsMenu
                            }
                            aria-label={
                                content.openProducts
                            }
                        >
                            {
                                content.products
                            }
                        </a>

                        <Link to="/projects">
                            {content.projects}
                        </Link>

                        <Link to="/companies">
                            {content.companies}
                        </Link>

                        <Link to="/contact">
                            {content.contact}
                        </Link>

                        <Link to="/about">
                            {content.about}
                        </Link>
                    </nav>
                </div>

                <div className="footer-lower">
                    <div className="footer-foundation">
                        <p className="footer-foundation-kicker">
                            {content.company}
                        </p>

                        <p className="footer-foundation-copy">
                            {
                                content.descriptor
                            }
                        </p>

                        <div
                            className="footer-foundation-signals"
                            aria-hidden="true"
                        >
                            <span>
                                TECH / SECURITY
                            </span>

                            <span>
                                HARDWARE / SANITARY
                            </span>

                            <span>
                                MANUFACTURING /
                                CONTRACTING
                            </span>
                        </div>

                        <div className="footer-legal">
                            <p>
                                {content.rights}
                            </p>

                            <a href="mailto:maherdia2003@gmail.com">
                                {
                                    content.websiteBy
                                }
                            </a>
                        </div>
                    </div>

                    <address className="footer-contact-card">
                        <div className="footer-contact-main">
                            <span>
                                {
                                    content.contactUs
                                }
                            </span>

                            <a
                                href="mailto:info@saudietqaan.com.sa"
                                dir="ltr"
                            >
                                📧 info@saudietqaan.com.sa
                            </a>

                            <a
                                href={MAPS_URL}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={
                                    content.mapLabel
                                }
                            >
                                {
                                    content.location
                                }
                            </a>

                            <a
                                href="tel:8001240198"
                                dir="ltr"
                            >
                                📞 800 124 0198
                            </a>
                        </div>

                        <div className="footer-contact-accent">
                            <p>
                                {
                                    content.builtFor
                                }
                            </p>

                            <div>
                                <img
                                    src={mark}
                                    alt=""
                                    aria-hidden="true"
                                />

                                <span>
                                    {
                                        content.foundation
                                    }
                                </span>
                            </div>
                        </div>
                    </address>
                </div>
            </div>
        </footer>
    );
}