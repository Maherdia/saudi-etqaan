import ProductDivisionPage from '../../../components/ProductDivisionPage/ProductDivisionPage';

import hardware from '../../../data/products/hardware';

/* =========================================================
   HARDWARE PHOTOS
   ========================================================= */

import hardwareOverview from '../../../assets/hardware/photos/hardware-complete-set.webp';

import hardwareDoorSet from '../../../assets/hardware/photos/doorset-ondoor.webp';
import hardwareAccessControl from '../../../assets/hardware/photos/door-access-control.webp';
import hardwareAutomaticDoor from '../../../assets/hardware/photos/automatic-door-system.webp';
import hardwareFinishedProject from '../../../assets/hardware/photos/hardware-finished-project.webp';

import './Hardware.css';

const hardwarePhotos = {
    overview: hardwareOverview,

    solutions: [
        hardwareDoorSet,
        hardwareAccessControl,
        hardwareAutomaticDoor,
        hardwareFinishedProject,
    ],
};

export default function Hardware() {
    return (
        <ProductDivisionPage
            division={hardware}
            photos={hardwarePhotos}
        />
    );
}