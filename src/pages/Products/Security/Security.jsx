import ProductDivisionPage from '../../../components/ProductDivisionPage/ProductDivisionPage';
import security from '../../../data/products/security';

import securityOverview from '../../../assets/security/photos/security-cctv-surveillance.webp';
import securityIntegratedEntrance from '../../../assets/security/photos/security-camra-acesscontrol.webp';
import securityAccessControl from '../../../assets/security/photos/security-access-control.webp';
import securityControlRoom from '../../../assets/security/photos/security-control-room.webp';
import securityFinishedProject from '../../../assets/security/photos/security-finished-project.webp';

import './Security.css';

const securityPhotos = {
    overview: securityOverview,

    solutions: [
        securityIntegratedEntrance,
        securityAccessControl,
        securityControlRoom,
        securityFinishedProject,
    ],
};

export default function Security() {
    return (
        <ProductDivisionPage
            division={security}
            photos={securityPhotos}
        />
    );
}