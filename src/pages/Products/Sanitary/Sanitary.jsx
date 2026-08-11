import ProductDivisionPage from '../../../components/ProductDivisionPage/ProductDivisionPage';

import sanitary from '../../../data/products/sanitary';

/* =========================================================
   SANITARY PHOTOS
   ========================================================= */

import sanitaryOverview from '../../../assets/sanitary/photos/sanitary-complete-set.webp';

import sanitaryBathroom from '../../../assets/sanitary/photos/sanitary-bathroom.webp';
import sanitaryCommercial from '../../../assets/sanitary/photos/faucets.webp';
import sanitaryFaucets from '../../../assets/sanitary/photos/shower.webp';

import sanitaryFinishedProject from '../../../assets/sanitary/photos/sanitary-finished-project.webp';

import sanitaryConcealedSystems from '../../../assets/sanitary/photos/sanitary-concealed-systems.webp';

import sanitaryBathroomAccessories from '../../../assets/sanitary/photos/sanitary-bathroom-accessories.webp';

import sanitaryCommercialPublicWashrooms from '../../../assets/sanitary/photos/sanitary-commercial-public-washrooms.webp';

import sanitaryAccessibleBathrooms from '../../../assets/sanitary/photos/sanitary-accessible-bathroom-solutions.webp';

import sanitaryKitchenSinks from '../../../assets/sanitary/photos/sanitary-kitchen-sinks.webp';

import sanitaryDrainageSmartWater from '../../../assets/sanitary/photos/sanitary-drainage-smart-water-systems.webp';

import './Sanitary.css';

const sanitaryPhotos = {
    overview: sanitaryOverview,

    solutions: [
        sanitaryBathroom,
        sanitaryCommercial,
        sanitaryFaucets,
        sanitaryFinishedProject,
        sanitaryConcealedSystems,
        sanitaryBathroomAccessories,
        sanitaryCommercialPublicWashrooms,
        sanitaryAccessibleBathrooms,
        sanitaryKitchenSinks,
        sanitaryDrainageSmartWater,
    ],
};

export default function Sanitary() {
    return (
        <ProductDivisionPage
            division={sanitary}
            photos={sanitaryPhotos}
        />
    );
}