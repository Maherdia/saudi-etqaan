import { getLocalizedValue } from '../../utils/localization';

import './ClientsSlider.css';

const defaultContent = {
    title: {
        en: 'Organizations that trust our solutions',
        ar: 'مؤسسات تثق بحلولنا',
    },

    description: {
        en:
            'We support organizations across multiple sectors through dependable technology, operational expertise, and solutions designed around their requirements.',

        ar:
            'ندعم مؤسسات من قطاعات متعددة من خلال التقنية الموثوقة والخبرة التشغيلية والحلول المصممة وفقاً لمتطلباتهم.',
    },
};

export default function ClientsSlider({
    clients,
    lang = 'en',
    content = defaultContent,
}) {
    if (!clients?.length) {
        return null;
    }

    const isArabic = lang === 'ar';

    const duplicatedClients = [
        ...clients,
        ...clients,
    ];

    const title =
        getLocalizedValue(
            content?.title,
            lang,
        ) ||
        getLocalizedValue(
            defaultContent.title,
            lang,
        );

    const description =
        getLocalizedValue(
            content?.description,
            lang,
        ) ||
        getLocalizedValue(
            defaultContent.description,
            lang,
        );

    return (
        <section className="clients-slider-section">
            <div className="clients-slider-container">
                <div className="clients-slider-heading">
                    <span>
                        {isArabic
                            ? 'عملاؤنا'
                            : 'OUR CLIENTS'}
                    </span>

                    <h2>{title}</h2>

                    {description && (
                        <p>{description}</p>
                    )}
                </div>
            </div>

            <div className="clients-slider-marquee">
                <div className="clients-slider-fade clients-slider-fade-start" />

                <div className="clients-slider-track">
                    {duplicatedClients.map(
                        (client, index) => {
                            const isDuplicate =
                                index >=
                                clients.length;

                            const clientName =
                                getLocalizedValue(
                                    client.name,
                                    lang,
                                );

                            return (
                                <article
                                    className="clients-slider-item"
                                    key={`${getLocalizedValue(
                                        client.name,
                                        'en',
                                    )}-${index}`}
                                    aria-hidden={
                                        isDuplicate
                                    }
                                >
                                    <div className="clients-slider-logo-stage">
                                        <img
                                            src={
                                                client.logo
                                            }
                                            alt={
                                                isDuplicate
                                                    ? ''
                                                    : clientName
                                            }
                                            loading="lazy"
                                        />
                                    </div>

                                    <p>
                                        {clientName}
                                    </p>
                                </article>
                            );
                        },
                    )}
                </div>

                <div className="clients-slider-fade clients-slider-fade-end" />
            </div>
        </section>
    );
}