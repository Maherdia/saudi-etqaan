import {
    useApp,
} from '../../context/AppContext';

import ProductIntro from './ProductIntro/ProductIntro';
import ProductContent from './ProductContent/ProductContent';
import ProductTrust from './ProductTrust/ProductTrust';

import {
    ProductMediaProvider,
} from './ProductMedia/ProductMedia';

import './ProductDivisionPage.css';

export default function ProductDivisionPage({
    division,
    photos = {},
}) {
    const {
        lang,
    } = useApp();

    return (
        <ProductMediaProvider
            lang={lang}
        >
            <main
                className={`product-division-page product-division-page-${division.id}`}
            >
                <ProductIntro
                    division={division}
                    photos={photos}
                    lang={lang}
                />

                <ProductContent
                    key={division.id}
                    division={division}
                    photos={photos}
                    lang={lang}
                />

                <ProductTrust
                    division={division}
                    lang={lang}
                />
            </main>
        </ProductMediaProvider>
    );
}