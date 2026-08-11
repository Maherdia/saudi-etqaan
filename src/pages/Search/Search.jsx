import {
    useMemo,
    useState,
} from 'react';

import {
    FiArrowUpRight,
    FiSearch,
    FiX,
} from 'react-icons/fi';

import {
    Link,
} from 'react-router-dom';

import {
    useApp,
} from '../../context/AppContext';

import {
    createSiteSearchItems,
    searchSiteItems,
} from '../../data/siteSearch';

import {
    getLocalizedPath,
} from '../../data/routes';

import './Search.css';

export default function Search() {
    const {
        lang,
        t,
    } = useApp();

    const isArabic =
        lang === 'ar';

    const [
        query,
        setQuery,
    ] = useState('');

    const searchItems =
        useMemo(
            () =>
                createSiteSearchItems({
                    lang,
                    pageLabels: {
                        home: t.home,
                        products: t.products,
                        projects: t.projects,
                        companies: t.companies,
                        about: t.about,
                        contact: t.contact,
                    },
                }),
            [
                lang,
                t,
            ],
        );

    const results =
        useMemo(
            () =>
                searchSiteItems(
                    searchItems,
                    query,
                    60,
                ),
            [
                searchItems,
                query,
            ],
        );

    const hasQuery =
        query.trim().length > 0;

    function clearSearch() {
        setQuery('');
    }

    return (
        <main className="search-page">
            <section className="search-hero">
                <div className="search-container">
                    <span className="search-eyebrow">
                        {isArabic
                            ? 'البحث في الموقع'
                            : 'SITE SEARCH'}
                    </span>

                    <h1>
                        {isArabic
                            ? 'اعثر على ما تحتاجه في الإتقان السعودية.'
                            : 'Find what you need across Saudi Etqaan.'}
                    </h1>

                    <p>
                        {isArabic
                            ? 'ابحث في قطاعات المنتجات والحلول والمشاريع والشركات والعلامات التجارية.'
                            : 'Search product divisions, solutions, capabilities, projects, companies, partners and brands.'}
                    </p>

                    <div className="search-field-wrap">
                        <FiSearch
                            aria-hidden="true"
                        />

                        <input
                            autoFocus
                            type="search"
                            value={query}
                            onChange={event => {
                                setQuery(
                                    event.target.value,
                                );
                            }}
                            placeholder={
                                isArabic
                                    ? 'ابحث عن منتج أو مشروع أو شركة...'
                                    : 'Search for a product, project, company...'
                            }
                            aria-label={
                                isArabic
                                    ? 'البحث في الموقع'
                                    : 'Search the site'
                            }
                            autoComplete="off"
                        />

                        {hasQuery && (
                            <button
                                type="button"
                                className="search-clear"
                                onClick={
                                    clearSearch
                                }
                                aria-label={
                                    isArabic
                                        ? 'مسح البحث'
                                        : 'Clear search'
                                }
                            >
                                <FiX
                                    aria-hidden="true"
                                />
                            </button>
                        )}
                    </div>
                </div>
            </section>

            <section className="search-results-section">
                <div className="search-container">
                    <div className="search-results-heading">
                        <span>
                            {hasQuery
                                ? isArabic
                                    ? 'نتائج البحث'
                                    : 'Search results'
                                : isArabic
                                    ? 'ابدأ بالكتابة للبحث'
                                    : 'Start typing to search'}
                        </span>

                        {hasQuery && (
                            <strong>
                                {
                                    results.length
                                }
                            </strong>
                        )}
                    </div>

                    {hasQuery &&
                    results.length > 0 ? (
                        <div className="search-results-grid">
                            {results.map(
                                result => (
                                    <Link
                                        className="search-result-card"
                                        key={
                                            result.id
                                        }
                                        to={
                                            getLocalizedPath(result.path, lang)
                                        }
                                    >
                                        <div className="search-result-card-top">
                                            <span>
                                                {
                                                    result.type
                                                }
                                            </span>

                                            <FiArrowUpRight
                                                aria-hidden="true"
                                            />
                                        </div>

                                        <h2>
                                            {
                                                result.title
                                            }
                                        </h2>

                                        {result.group && (
                                            <p>
                                                {
                                                    result.group
                                                }
                                            </p>
                                        )}
                                    </Link>
                                ),
                            )}
                        </div>
                    ) : hasQuery ? (
                        <div className="search-empty-state">
                            <FiSearch
                                aria-hidden="true"
                            />

                            <h2>
                                {isArabic
                                    ? 'لا توجد نتائج مطابقة'
                                    : 'No matching results'}
                            </h2>

                            <p>
                                {isArabic
                                    ? 'جرّب كلمة أقصر أو اسم منتج أو مشروع مختلف.'
                                    : 'Try a shorter term, another product name, or a different project.'}
                            </p>
                        </div>
                    ) : (
                        <div className="search-suggestions">
                            <span>
                                {isArabic
                                    ? 'جرّب مثلاً'
                                    : 'Try searching for'}
                            </span>

                            <div>
                                {[
                                    isArabic
                                        ? 'مغلقات الأبواب'
                                        : 'Door Closers',
                                    'CCTV',
                                    'TESA',
                                    isArabic
                                        ? 'الرياض'
                                        : 'Riyadh',
                                ].map(
                                    suggestion => (
                                        <button
                                            type="button"
                                            key={
                                                suggestion
                                            }
                                            onClick={() => {
                                                setQuery(
                                                    suggestion,
                                                );
                                            }}
                                        >
                                            {
                                                suggestion
                                            }
                                        </button>
                                    ),
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
