import {
    routeManifest,
} from './routes';

const seo =
    Object.fromEntries(
        routeManifest
            .filter(
                route =>
                    route.seo,
            )
            .map(
                route => [
                    route.id,
                    route.seo,
                ],
            ),
    );

export default seo;