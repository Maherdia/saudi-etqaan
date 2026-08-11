import { useEffect } from 'react';

import useReducedMotion from './useReducedMotion';

export default function useRevealOnScroll(rootRef) {
    const reducedMotion = useReducedMotion();

    useEffect(() => {
        const root = rootRef.current;

        if (!root) {
            return undefined;
        }

        const elements = Array.from(
            root.querySelectorAll('[data-reveal]'),
        );

        if (reducedMotion || !('IntersectionObserver' in window)) {
            elements.forEach((element) => {
                element.classList.add('is-visible');
            });

            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.16,
                rootMargin: '0px 0px -8% 0px',
            },
        );

        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, [reducedMotion, rootRef]);
}
