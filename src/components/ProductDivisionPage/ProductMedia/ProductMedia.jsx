import {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';

import './ProductMedia.css';

const ProductMediaContext =
    createContext(null);

export function ProductMediaProvider({
    children,
    lang = 'en',
}) {
    const isArabic =
        lang === 'ar';

    const [
        expandedPhoto,
        setExpandedPhoto,
    ] = useState(null);

    const previousFocusRef =
        useRef(null);

    function openPhoto(
        src,
        title = '',
    ) {
        if (!src) {
            return;
        }

        previousFocusRef.current =
            document.activeElement;

        setExpandedPhoto({
            src,
            title,
        });
    }

    function closePhoto() {
        setExpandedPhoto(null);
    }

    useEffect(() => {
        if (!expandedPhoto) {
            return undefined;
        }

        const previousOverflow =
            document.body.style.overflow;

        document.body.style.overflow =
            'hidden';

        return () => {
            document.body.style.overflow =
                previousOverflow;

            const previousFocus =
                previousFocusRef.current;

            if (
                previousFocus &&
                typeof previousFocus.focus ===
                'function'
            ) {
                window.requestAnimationFrame(
                    () => {
                        previousFocus.focus();
                    },
                );
            }
        };
    }, [expandedPhoto]);

    return (
        <ProductMediaContext.Provider
            value={{
                openPhoto,
                closePhoto,
                isArabic,
            }}
        >
            {children}

            {expandedPhoto && (
                <ProductLightbox
                    photo={
                        expandedPhoto
                    }
                    onClose={
                        closePhoto
                    }
                    isArabic={
                        isArabic
                    }
                />
            )}
        </ProductMediaContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProductMedia() {
    const context =
        useContext(
            ProductMediaContext,
        );

    if (!context) {
        throw new Error(
            'useProductMedia must be used inside ProductMediaProvider.',
        );
    }

    return context;
}

export function ProductPhoto({
    src,
    title = '',
    index,
    variant = 'solution',
    alt = '',
    showOverlay = true,
    className = '',
}) {
    const {
        openPhoto,
        isArabic,
    } = useProductMedia();

    if (!src) {
        return null;
    }

    const paddedIndex =
        index !== undefined &&
            index !== null
            ? String(
                index,
            ).padStart(
                2,
                '0',
            )
            : null;

    const mediaClass =
        variant === 'overview'
            ? 'product-overview-media'
            : 'product-solution-feature-media';

    const accessibleLabel =
        isArabic
            ? title
                ? `عرض الصورة بالحجم الكامل: ${title}`
                : 'عرض الصورة بالحجم الكامل'
            : title
                ? `View full-size image: ${title}`
                : 'View full-size image';

    return (
        <button
            type="button"
            className={
                `${mediaClass} product-photo-trigger ${className}`.trim()
            }
            onClick={() =>
                openPhoto(
                    src,
                    title,
                )
            }
            aria-label={
                accessibleLabel
            }
        >
            <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
            />

            {variant ===
                'solution' &&
                showOverlay && (
                    <div
                        className="product-solution-feature-media-overlay"
                        aria-hidden="true"
                    />
                )}

            {paddedIndex && (
                <span
                    className="product-photo-index"
                    aria-hidden="true"
                >
                    {
                        paddedIndex
                    }
                </span>
            )}

            <span
                className="product-photo-expand-icon"
                aria-hidden="true"
            >
                ↗
            </span>
        </button>
    );
}

export function ProductLightbox({
    photo,
    onClose,
    isArabic = false,
}) {
    const dialogRef =
        useRef(null);

    const closeButtonRef =
        useRef(null);

    useEffect(() => {
        const dialog =
            dialogRef.current;

        if (!dialog) {
            return undefined;
        }

        closeButtonRef.current?.focus();

        function getFocusableElements() {
            return [
                ...dialog.querySelectorAll(
                    [
                        'a[href]',
                        'button:not([disabled])',
                        'input:not([disabled])',
                        'select:not([disabled])',
                        'textarea:not([disabled])',
                        '[tabindex]:not([tabindex="-1"])',
                    ].join(','),
                ),
            ].filter(
                element =>
                    !element.hasAttribute(
                        'hidden',
                    ),
            );
        }

        function handleKeyDown(
            event,
        ) {
            if (
                event.key ===
                'Escape'
            ) {
                event.preventDefault();
                onClose();

                return;
            }

            if (
                event.key !==
                'Tab'
            ) {
                return;
            }

            const focusableElements =
                getFocusableElements();

            if (
                focusableElements.length ===
                0
            ) {
                event.preventDefault();

                dialog.focus();

                return;
            }

            const firstElement =
                focusableElements[0];

            const lastElement =
                focusableElements[
                focusableElements.length -
                1
                ];

            if (
                event.shiftKey &&
                document.activeElement ===
                firstElement
            ) {
                event.preventDefault();

                lastElement.focus();

                return;
            }

            if (
                !event.shiftKey &&
                document.activeElement ===
                lastElement
            ) {
                event.preventDefault();

                firstElement.focus();
            }
        }

        dialog.addEventListener(
            'keydown',
            handleKeyDown,
        );

        return () => {
            dialog.removeEventListener(
                'keydown',
                handleKeyDown,
            );
        };
    }, [onClose]);

    if (!photo?.src) {
        return null;
    }

    return (
        <div
            ref={dialogRef}
            className="product-photo-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={
                photo.title ||
                (isArabic
                    ? 'عرض الصورة'
                    : 'Image preview')
            }
            tabIndex={-1}
            onClick={
                onClose
            }
        >
            <button
                ref={
                    closeButtonRef
                }
                type="button"
                className="product-photo-lightbox-close"
                onClick={
                    onClose
                }
                aria-label={
                    isArabic
                        ? 'إغلاق الصورة'
                        : 'Close image'
                }
            >
                ×
            </button>

            <div
                className="product-photo-lightbox-content"
                onClick={
                    event =>
                        event.stopPropagation()
                }
            >
                <img
                    src={
                        photo.src
                    }
                    alt={
                        photo.title ||
                        ''
                    }
                />

                {photo.title && (
                    <p>
                        {
                            photo.title
                        }
                    </p>
                )}
            </div>
        </div>
    );
}