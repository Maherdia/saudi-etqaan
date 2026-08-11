import {
    lazy,
    Suspense,
} from 'react';

import {
    Navigate,
    Route,
    Routes,
} from 'react-router-dom';

import Seo from '../components/Seo/Seo';

import {
    routeManifest,
} from '../data/routes';

const pageComponents = {
    home:
        lazy(
            () =>
                import(
                    '../pages/Home/Home'
                ),
        ),

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

export default function AppRouter() {
    return (
        <Routes>
            {routeManifest.map(
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
            )}
        </Routes>
    );
}