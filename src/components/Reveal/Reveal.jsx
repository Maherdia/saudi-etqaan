import useReveal from '../../hooks/useReveal';

import './Reveal.css';

export default function Reveal({
    children,
    className = '',
    direction = 'up',
    delay = 0,
    as: Tag = 'div',
}) {
    const revealRef = useReveal();

    return (
        <Tag
            ref={revealRef}
            className={[
                'reveal',
                `reveal-${direction}`,
                className,
            ]
                .filter(Boolean)
                .join(' ')}
            style={{
                '--reveal-delay': `${delay}ms`,
            }}
        >
            {children}
        </Tag>
    );
}