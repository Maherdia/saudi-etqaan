import {
    useEffect,
    useMemo,
    useState,
} from 'react';

import {
    FiArrowDown,
    FiArrowUpRight,
    FiBriefcase,
    FiMapPin,
    FiSearch,
    FiX,
} from 'react-icons/fi';

import {
    Link,
    useSearchParams,
} from 'react-router-dom';

import {
    useApp,
} from '../../context/AppContext';

import projects, {
    projectDivisions,
    projectSectors,
} from '../../data/projects';

import {
    getLocalizedPath,
} from '../../data/routes';

import './Projects.css';

const INITIAL_LIMIT = 20;
const LOAD_INCREMENT = 20;

function getLocalizedText(
    value,
    lang,
) {
    if (!value) {
        return '';
    }

    if (
        typeof value ===
        'string'
    ) {
        return value;
    }

    return (
        value[lang] ||
        value.en ||
        ''
    );
}

export default function Projects() {
    const {
        lang,
    } = useApp();

    const isArabic =
        lang === 'ar';

    const [searchParams] =
        useSearchParams();

    const requestedSearch =
        searchParams.get('search') ??
        '';

    const [
        division,
        setDivision,
    ] = useState('all');

    const [
        sector,
        setSector,
    ] = useState('all');

    const [
        search,
        setSearch,
    ] = useState(
        requestedSearch,
    );

    const [
        visibleCount,
        setVisibleCount,
    ] = useState(
        INITIAL_LIMIT,
    );

    useEffect(() => {
        const frame =
            window.requestAnimationFrame(
                () => {
                    setSearch(
                        requestedSearch,
                    );
                },
            );

        return () => {
            window.cancelAnimationFrame(
                frame,
            );
        };
    }, [
        requestedSearch,
    ]);

    useEffect(() => {
        const frame =
            window.requestAnimationFrame(
                () => {
                    setVisibleCount(
                        INITIAL_LIMIT,
                    );
                },
            );

        return () => {
            window.cancelAnimationFrame(
                frame,
            );
        };
    }, [
        division,
        sector,
        search,
    ]);

    const availableSectors =
        useMemo(() => {
            if (
                division ===
                'all'
            ) {
                return projectSectors;
            }

            const sectorIds =
                new Set(
                    projects
                        .filter(
                            project =>
                                project
                                    .division
                                    .id ===
                                division,
                        )
                        .map(
                            project =>
                                project
                                    .sector
                                    .id,
                        ),
                );

            return projectSectors.filter(
                item =>
                    item.id ===
                    'all' ||
                    sectorIds.has(
                        item.id,
                    ),
            );
        }, [
            division,
        ]);

    const filteredProjects =
        useMemo(() => {
            const query =
                search
                    .trim()
                    .toLocaleLowerCase(
                        isArabic
                            ? 'ar'
                            : 'en',
                    );

            return projects.filter(
                project => {
                    const matchesDivision =
                        division ===
                        'all' ||
                        project
                            .division
                            .id ===
                        division;

                    const matchesSector =
                        sector ===
                        'all' ||
                        project
                            .sector
                            .id ===
                        sector;

                    const searchableText =
                        [
                            getLocalizedText(
                                project.name,
                                lang,
                            ),

                            getLocalizedText(
                                project.city,
                                lang,
                            ),

                            getLocalizedText(
                                project.client,
                                lang,
                            ),

                            getLocalizedText(
                                project.consultant,
                                lang,
                            ),

                            getLocalizedText(
                                project.contractor,
                                lang,
                            ),

                            getLocalizedText(
                                project
                                    .division
                                    .title,
                                lang,
                            ),

                            getLocalizedText(
                                project
                                    .sector
                                    .title,
                                lang,
                            ),

                            getLocalizedText(
                                project.category,
                                lang,
                            ),

                            project.year ||
                            '',

                            project.brand ||
                            '',
                        ]
                            .join(' ')
                            .toLocaleLowerCase(
                                isArabic
                                    ? 'ar'
                                    : 'en',
                            );

                    const matchesSearch =
                        !query ||
                        searchableText.includes(
                            query,
                        );

                    return (
                        matchesDivision &&
                        matchesSector &&
                        matchesSearch
                    );
                },
            );
        }, [
            division,
            sector,
            search,
            lang,
            isArabic,
        ]);

    const visibleProjects =
        filteredProjects.slice(
            0,
            visibleCount,
        );

    const hasActiveFilters =
        division !== 'all' ||
        sector !== 'all' ||
        search.trim() !== '';

    function selectDivision(
        divisionId,
    ) {
        setDivision(
            divisionId,
        );

        setSector('all');
    }

    function clearFilters() {
        setDivision('all');
        setSector('all');
        setSearch('');
    }

    function formatIndex(
        index,
    ) {
        return String(
            index + 1,
        ).padStart(
            2,
            '0',
        );
    }

    return (
        <main className="projects-page">
            <section className="projects-hero">
                <div className="projects-shell projects-hero-layout">
                    <div className="projects-hero-copy">
                        <span className="projects-eyebrow">
                            {isArabic
                                ? 'مشاريع الإتقان السعودية'
                                : 'Saudi Etqaan Projects'}
                        </span>

                        <h1>
                            {isArabic
                                ? 'خبرة عملية عبر قطاعات ومشاريع متنوعة.'
                                : 'Built across sectors. Delivered through specialization.'}
                        </h1>

                        <p>
                            {isArabic
                                ? 'سجل متنوع من المشاريع التي تم توريدها ودعمها عبر قطاعات الإتقان السعودية المتخصصة، بما يشمل هاردوير والأنظمة الميكانيكية والكهربائية والتيار الخفيف والحلول الأمنية.'
                                : 'A documented portfolio of projects delivered and supported across Saudi Etqaan’s specialized door-hardware, MEP, low-current, and security divisions.'}
                        </p>
                    </div>
                </div>
            </section>

            <section
                className="projects-directory"
                id="project-directory"
            >
                <div className="projects-shell">
                    <header className="projects-directory-header">
                        <div>
                            <span className="projects-eyebrow">
                                {isArabic
                                    ? 'سجل المشاريع'
                                    : 'Project Directory'}
                            </span>

                            <h2>
                                {isArabic
                                    ? 'المشاريع الموثقة'
                                    : 'Documented work.'}
                            </h2>
                        </div>

                        <p>
                            {isArabic
                                ? 'اختر القسم أو القطاع، أو ابحث باسم المشروع أو العميل أو المدينة.'
                                : 'Filter by division or sector, or search by project, client, or location.'}
                        </p>
                    </header>

                    <div className="projects-filter-bar">
                        <label className="projects-filter-control">
                            <span>
                                {isArabic
                                    ? 'القسم'
                                    : 'Division'}
                            </span>

                            <select
                                value={
                                    division
                                }
                                onChange={
                                    event => {
                                        selectDivision(
                                            event
                                                .target
                                                .value,
                                        );
                                    }
                                }
                            >
                                {projectDivisions.map(
                                    item => (
                                        <option
                                            key={
                                                item.id
                                            }
                                            value={
                                                item.id
                                            }
                                        >
                                            {getLocalizedText(
                                                item.title,
                                                lang,
                                            )}
                                        </option>
                                    ),
                                )}
                            </select>
                        </label>

                        <label className="projects-filter-control">
                            <span>
                                {isArabic
                                    ? 'القطاع'
                                    : 'Sector'}
                            </span>

                            <select
                                value={
                                    sector
                                }
                                onChange={
                                    event => {
                                        setSector(
                                            event
                                                .target
                                                .value,
                                        );
                                    }
                                }
                            >
                                {availableSectors.map(
                                    item => (
                                        <option
                                            key={
                                                item.id
                                            }
                                            value={
                                                item.id
                                            }
                                        >
                                            {getLocalizedText(
                                                item.title,
                                                lang,
                                            )}
                                        </option>
                                    ),
                                )}
                            </select>
                        </label>

                        <label className="projects-search-control">
                            <span>
                                {isArabic
                                    ? 'البحث'
                                    : 'Search'}
                            </span>

                            <div>
                                <FiSearch
                                    aria-hidden="true"
                                />

                                <input
                                    type="search"
                                    value={
                                        search
                                    }
                                    onChange={
                                        event => {
                                            setSearch(
                                                event
                                                    .target
                                                    .value,
                                            );
                                        }
                                    }
                                    placeholder={
                                        isArabic
                                            ? 'اسم المشروع أو العميل أو المدينة'
                                            : 'Project, client, or location'
                                    }
                                />

                                {search && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSearch(
                                                '',
                                            );
                                        }}
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
                        </label>

                        {hasActiveFilters && (
                            <button
                                type="button"
                                className="projects-clear-filters"
                                onClick={
                                    clearFilters
                                }
                            >
                                {isArabic
                                    ? 'إعادة الضبط'
                                    : 'Reset'}
                            </button>
                        )}
                    </div>

                    <div className="projects-results-header">
                        <span>
                            {isArabic
                                ? 'النتائج'
                                : 'Results'}
                        </span>

                        <strong>
                            {
                                filteredProjects.length
                            }
                        </strong>
                    </div>

                    {visibleProjects.length >
                        0 ? (
                        <>
                            <div className="projects-list">
                                {visibleProjects.map(
                                    (
                                        project,
                                        index,
                                    ) => (
                                        <article
                                            className="project-row"
                                            key={
                                                project.slug
                                            }
                                        >
                                            <span className="project-row-number">
                                                {formatIndex(
                                                    index,
                                                )}
                                            </span>

                                            <div className="project-row-primary">
                                                <div className="project-row-labels">
                                                    <span className="project-row-division">
                                                        {getLocalizedText(
                                                            project
                                                                .division
                                                                .title,
                                                            lang,
                                                        )}
                                                    </span>

                                                    <span className="project-row-sector">
                                                        {getLocalizedText(
                                                            project
                                                                .sector
                                                                .title,
                                                            lang,
                                                        )}
                                                    </span>
                                                </div>

                                                <h3>
                                                    {getLocalizedText(
                                                        project.name,
                                                        lang,
                                                    )}
                                                </h3>
                                            </div>

                                            <div className="project-row-details">
                                                {project.client && (
                                                    <div className="project-row-detail">
                                                        <FiBriefcase
                                                            aria-hidden="true"
                                                        />

                                                        <div>
                                                            <small>
                                                                {isArabic
                                                                    ? 'العميل'
                                                                    : 'Client'}
                                                            </small>

                                                            <span>
                                                                {getLocalizedText(
                                                                    project.client,
                                                                    lang,
                                                                )}
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}

                                                {project.city && (
                                                    <div className="project-row-detail">
                                                        <FiMapPin
                                                            aria-hidden="true"
                                                        />

                                                        <div>
                                                            <small>
                                                                {isArabic
                                                                    ? 'الموقع'
                                                                    : 'Location'}
                                                            </small>

                                                            <span>
                                                                {getLocalizedText(
                                                                    project.city,
                                                                    lang,
                                                                )}
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="project-row-meta">
                                                {project.year && (
                                                    <span>
                                                        {
                                                            project.year
                                                        }
                                                    </span>
                                                )}

                                                {project.brand && (
                                                    <span>
                                                        {
                                                            project.brand
                                                        }
                                                    </span>
                                                )}
                                            </div>
                                        </article>
                                    ),
                                )}
                            </div>

                            {visibleCount <
                                filteredProjects.length && (
                                    <div className="projects-load-more">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setVisibleCount(
                                                    count =>
                                                        count +
                                                        LOAD_INCREMENT,
                                                );
                                            }}
                                        >
                                            <span>
                                                {isArabic
                                                    ? 'عرض المزيد'
                                                    : 'Load more projects'}
                                            </span>

                                            <FiArrowDown
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                )}
                        </>
                    ) : (
                        <div className="projects-empty">
                            <span>
                                00
                            </span>

                            <h3>
                                {isArabic
                                    ? 'لا توجد مشاريع مطابقة'
                                    : 'No matching projects.'}
                            </h3>

                            <p>
                                {isArabic
                                    ? 'غيّر القسم أو القطاع أو عبارة البحث.'
                                    : 'Change the division, sector, or search term.'}
                            </p>

                            <button
                                type="button"
                                onClick={
                                    clearFilters
                                }
                            >
                                {isArabic
                                    ? 'عرض جميع المشاريع'
                                    : 'View all projects'}
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <section className="projects-closing">
                <div className="projects-shell projects-closing-layout">
                    <div>
                        <span className="projects-eyebrow">
                            {isArabic
                                ? 'مشروعك القادم'
                                : 'Your Next Project'}
                        </span>

                        <h2>
                            {isArabic
                                ? 'ابدأ مع الفريق المتخصص.'
                                : 'Start with the right specialist team.'}
                        </h2>
                    </div>

                    <div className="projects-closing-action">
                        <p>
                            {isArabic
                                ? 'تواصل مع الفريق المناسب لمناقشة المنتجات والأنظمة والمتطلبات الفنية ونطاق المشروع.'
                                : 'Connect with the appropriate team to discuss products, systems, technical requirements, and project scope.'}
                        </p>

                        <Link to={getLocalizedPath('/contact', lang)}>
                            <span>
                                {isArabic
                                    ? 'ناقش مشروعك'
                                    : 'Discuss your project'}
                            </span>

                            <FiArrowUpRight
                                aria-hidden="true"
                            />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}