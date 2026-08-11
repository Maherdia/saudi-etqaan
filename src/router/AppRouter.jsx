import {
    lazy,
    Suspense,
} from 'react';

import {
    Route,
    Navigate,
    Routes,
} from 'react-router-dom';

import Seo from '../components/Seo/Seo';

import seo from '../data/seo';

const Home = lazy(
    () =>
        import(
            '../pages/Home/Home'
        ),
);

const Sanitary = lazy(
    () =>
        import(
            '../pages/Products/Sanitary/Sanitary'
        ),
);

const Hardware = lazy(
    () =>
        import(
            '../pages/Products/Hardware/Hardware'
        ),
);

const Technology = lazy(
    () =>
        import(
            '../pages/Products/Technology/Technology'
        ),
);

const Security = lazy(
    () =>
        import(
            '../pages/Products/Security/Security'
        ),
);

const Projects = lazy(
    () =>
        import(
            '../pages/Projects/Projects'
        ),
);

const Companies = lazy(
    () =>
        import(
            '../pages/Companies/Companies'
        ),
);

const About = lazy(
    () =>
        import(
            '../pages/About/About'
        ),
);

const Contact = lazy(
    () =>
        import(
            '../pages/Contact/Contact'
        ),
);

const Search = lazy(
    () =>
        import(
            '../pages/Search/Search'
        ),
);

const NotFound = lazy(
    () =>
        import(
            '../pages/NotFound/NotFound'
        ),
);

function RouteFallback() {
    return (
        <div
            role="status"
            aria-live="polite"
            aria-label="Loading page"
            style={{
                minHeight: '60vh',
            }}
        />
    );
}

function SeoPage({
    seoData,
    children,
}) {
    return (
        <>
            <Seo {...seoData} />

            <Suspense
                fallback={
                    <RouteFallback />
                }
            >
                {children}
            </Suspense>
        </>
    );
}

export default function AppRouter() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <SeoPage
                        seoData={
                            seo.home
                        }
                    >
                        <Home />
                    </SeoPage>
                }
            />

            <Route
                path="/products"
                element={
                    <Navigate
                        to="/products/sanitary"
                        replace
                    />
                }
            />

            <Route
                path="/products/sanitary"
                element={
                    <SeoPage
                        seoData={
                            seo.sanitary
                        }
                    >
                        <Sanitary />
                    </SeoPage>
                }
            />

            <Route
                path="/products/hardware"
                element={
                    <SeoPage
                        seoData={
                            seo.hardware
                        }
                    >
                        <Hardware />
                    </SeoPage>
                }
            />

            <Route
                path="/products/technology"
                element={
                    <SeoPage
                        seoData={
                            seo.technology
                        }
                    >
                        <Technology />
                    </SeoPage>
                }
            />

            <Route
                path="/products/security"
                element={
                    <SeoPage
                        seoData={
                            seo.security
                        }
                    >
                        <Security />
                    </SeoPage>
                }
            />

            <Route
                path="/projects"
                element={
                    <SeoPage
                        seoData={
                            seo.projects
                        }
                    >
                        <Projects />
                    </SeoPage>
                }
            />

            <Route
                path="/companies"
                element={
                    <SeoPage
                        seoData={
                            seo.companies
                        }
                    >
                        <Companies />
                    </SeoPage>
                }
            />

            <Route
                path="/about"
                element={
                    <SeoPage
                        seoData={
                            seo.about
                        }
                    >
                        <About />
                    </SeoPage>
                }
            />

            <Route
                path="/contact"
                element={
                    <SeoPage
                        seoData={
                            seo.contact
                        }
                    >
                        <Contact />
                    </SeoPage>
                }
            />

            <Route
                path="/search"
                element={
                    <SeoPage
                        seoData={
                            seo.search
                        }
                    >
                        <Search />
                    </SeoPage>
                }
            />

            <Route
                path="*"
                element={
                    <SeoPage
                        seoData={
                            seo.notFound
                        }
                    >
                        <NotFound />
                    </SeoPage>
                }
            />
        </Routes>
    );
}