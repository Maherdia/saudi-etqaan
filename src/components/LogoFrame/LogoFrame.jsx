import './LogoFrame.css';

export default function LogoFrame({
    src,
    alt,
    surface = 'auto',
    className = '',
}) {
    if (!src) {
        return null;
    }

    return (
        <div
            className={[
                'logo-frame',
                `logo-frame-${surface}`,
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            <img
                src={src}
                alt={alt}
                loading="lazy"
            />
        </div>
    );
}