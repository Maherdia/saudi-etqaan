import ProductDivisionPage from '../../../components/ProductDivisionPage/ProductDivisionPage';

import technology from '../../../data/products/technology';

/* =========================================================
   TECHNOLOGY PHOTOS
   ========================================================= */

import technologyOverview from '../../../assets/tech/photos/technology-overview.webp';

import technologyIot from '../../../assets/tech/photos/technology-iot-devices.webp';

import technologyControlRoom from '../../../assets/tech/photos/technology-control-center.webp';

import technologyFinishedProject from '../../../assets/tech/photos/technology-finished-project.webp';

import technologyFleetInnovation from '../../../assets/tech/photos/technology-tracking-screen.webp';

import './Technology.css';

const technologyPhotos = {
    overview: technologyOverview,

    solutions: [
        technologyIot,
        technologyControlRoom,
        technologyFinishedProject,
        technologyFleetInnovation,
    ],
};

export default function Technology() {
    return (
        <ProductDivisionPage
            division={technology}
            photos={technologyPhotos}
        />
    );
}