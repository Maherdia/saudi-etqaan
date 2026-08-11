import {
    Link,
} from 'react-router-dom';

import {
    FiArrowLeft,
    FiArrowRight,
    FiHome,
} from 'react-icons/fi';

import {
    useApp,
} from '../../context/AppContext';

import './NotFound.css';

export default function NotFound() {
    const {
        lang,
    } = useApp();

    const isArabic =
        lang === 'ar';

    const content =
        isArabic
            ? {
                title:
                    'الصفحة غير موجودة',
                description:
                    'الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها.',
                home:
                    'العودة إلى الرئيسية',
                products:
                    'استعرض المنتجات',
            }
            : {
                title:
                    'Page not found',
                description:
                    'The page you are looking for does not exist or may have been moved.',
                home:
                    'Back to Home',
                products:
                    'Explore Products',
            };

    return (
        <main className="not-found-page">
            <div className="not-found-container">
                <span className="not-found-code">
                    404
                </span>

                <h1>
                    {content.title}
                </h1>

                <p>
                    {
                        content.description
                    }
                </p>

                <div className="not-found-actions">
                    <Link
                        to="/"
                        className="not-found-primary"
                    >
                        <FiHome
                            aria-hidden="true"
                        />

                        <span>
                            {content.home}
                        </span>
                    </Link>

                    <Link
                        to="/products/hardware"
                        className="not-found-secondary"
                    >
                        {isArabic ? (
                            <FiArrowRight
                                aria-hidden="true"
                            />
                        ) : (
                            <FiArrowLeft
                                aria-hidden="true"
                            />
                        )}

                        <span>
                            {content.products}
                        </span>
                    </Link>
                </div>
            </div>
        </main>
    );
}