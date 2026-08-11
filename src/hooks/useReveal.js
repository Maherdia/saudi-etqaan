import {
    useEffect,
    useRef,
} from 'react';

export default function useReveal(options = {}) {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(
                            'is-visible',
                        );

                        observer.unobserve(
                            entry.target,
                        );
                    }
                });
            },
            {
                threshold:
                    options.threshold ?? 0.12,

                rootMargin:
                    options.rootMargin ??
                    '0px 0px -70px 0px',
            },
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [
        options.threshold,
        options.rootMargin,
    ]);

    return elementRef;
}