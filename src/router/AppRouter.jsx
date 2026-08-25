import {
    lazy,
    Suspense,
} from 'react';

import {
    Navigate,
    Route,
    Routes,
    useLocation,
} from 'react-router-dom';

import Seo from '../components/Seo/Seo';

/*
 * Home is intentionally loaded eagerly.
 *
 * It is the primary landing page and should never pass through
 * a lazy-route fallback during the initial render. This prevents
 * the footer from briefly appearing before Home finishes loading.
 */
import Home from '../pages/Home/Home';

import {
    getLanguageFromPath,
    notFoundSeo,
    routeManifest,
} from '../data/routes';

/* =========================================================
   LAZY ROUTES

   Keep secondary routes code-split.
   ========================================================= */

const pageComponents = {
    home: Home,

    sanitary:
        lazy(
            () =>
                import(
                    '../pages/Products/Sanitary/Sanitary'
                ),
        ),

    hardware:
        lazy(
            () =>
                import(
                    '../pages/Products/Hardware/Hardware'
                ),
        ),

    technology:
        lazy(
            () =>
                import(
                    '../pages/Products/Technology/Technology'
                ),
        ),

    security:
        lazy(
            () =>
                import(
                    '../pages/Products/Security/Security'
                ),
        ),

    projects:
        lazy(
            () =>
                import(
                    '../pages/Projects/Projects'
                ),
        ),

    companies:
        lazy(
            () =>
                import(
                    '../pages/Companies/Companies'
                ),
        ),

    about:
        lazy(
            () =>
                import(
                    '../pages/About/About'
                ),
        ),

    contact:
        lazy(
            () =>
                import(
                    '../pages/Contact/Contact'
                ),
        ),

    search:
        lazy(
            () =>
                import(
                    '../pages/Search/Search'
                ),
        ),

    notFound:
        lazy(
            () =>
                import(
                    '../pages/NotFound/NotFound'
                ),
        ),
};

/* =========================================================
   ROUTE FALLBACK

   Secondary lazy routes use a full-viewport fallback so the
   footer can never jump into the visible viewport while a route
   chunk is loading.
   ========================================================= */

function RouteFallback() {
    return (
        <div
            role="status"
            aria-live="polite"
            aria-label="Loading page"
            style={{
                position:
                    'relative',

                width:
                    '100%',

                minHeight:
                    '100svh',

                background:
                    'var(--bg)',
            }}
        />
    );
}

/* =========================================================
   SEO PAGE WRAPPER
   ========================================================= */

function SeoPage({
    seoData,
    children,
}) {
    return (
        <>
            <Seo
                {...seoData}
            />

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

/* =========================================================
   ROUTE ELEMENT
   ========================================================= */

function createRouteElement(
    route,
) {
    if (route.redirectTo) {
        return (
            <Navigate
                to={
                    route.redirectTo
                }
                replace
            />
        );
    }

    const Page =
        pageComponents[
        route.page
        ];

    if (!Page) {
        return null;
    }

    return (
        <SeoPage
            seoData={
                route.seo
            }
        >
            <Page />
        </SeoPage>
    );
}

/* =========================================================
   NOT FOUND
   ========================================================= */

function NotFoundRoute() {
    const location =
        useLocation();

    const locale =
        getLanguageFromPath(
            location.pathname,
        );

    const NotFound =
        pageComponents
            .notFound;

    return (
        <SeoPage
            seoData={
                notFoundSeo[
                locale
                ]
            }
        >
            <NotFound />
        </SeoPage>
    );
}

/* =========================================================
   ROUTER
   ========================================================= */

export default function AppRouter() {
    return (
        <Routes>
            {
                routeManifest.map(
                    route => (
                        <Route
                            key={
                                route.id
                            }
                            path={
                                route.path
                            }
                            element={
                                createRouteElement(
                                    route,
                                )
                            }
                        />
                    ),
                )
            }

            <Route
                path="*"
                element={
                    <NotFoundRoute />
                }
            />
        </Routes>
    );
}