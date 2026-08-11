import {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  Link,
  useLocation,
} from 'react-router-dom';

import {
  FiMenu,
  FiX,
} from 'react-icons/fi';

import {
  useApp,
} from '../../context/AppContext';

import SideMenu from '../SideMenu/SideMenu';

import Logo from '../../assets/logos/etqaan-mark.webp';

import {
  getLocalizedPath,
} from '../../data/routes';

import './Navbar.css';

export default function Navbar() {
  const [
    menuOpen,
    setMenuOpen,
  ] = useState(false);

  const menuTriggerRef =
    useRef(null);

  const location =
    useLocation();

  const {
    lang,
    setLang,
    theme,
    toggleTheme,
  } = useApp();

  const isArabic =
    lang === 'ar';

  useEffect(() => {
    const frame =
      window.requestAnimationFrame(
        () => {
          setMenuOpen(
            false,
          );
        },
      );

    return () => {
      window.cancelAnimationFrame(
        frame,
      );
    };
  }, [
    location.pathname,
  ]);

  useEffect(() => {
    function handleOpenProductsMenu() {
      setMenuOpen(true);
    }

    window.addEventListener(
      'open-products-menu',
      handleOpenProductsMenu,
    );

    return () => {
      window.removeEventListener(
        'open-products-menu',
        handleOpenProductsMenu,
      );
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const menuTrigger =
      menuTriggerRef.current;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      'hidden';

    const frame =
      window.requestAnimationFrame(
        () => {
          const menu =
            document.querySelector(
              '.side-menu',
            );

          const firstFocusable =
            menu?.querySelector(
              [
                'button:not([disabled]):not([tabindex="-1"])',
                'a[href]:not([tabindex="-1"])',
                'input:not([disabled]):not([tabindex="-1"])',
                'select:not([disabled]):not([tabindex="-1"])',
                'textarea:not([disabled]):not([tabindex="-1"])',
              ].join(','),
            );

          firstFocusable?.focus();
        },
      );

    function getFocusableElements() {
      const menu =
        document.querySelector(
          '.side-menu',
        );

      if (!menu) {
        return [];
      }

      const menuElements = [
        ...menu.querySelectorAll(
          [
            'a[href]:not([tabindex="-1"])',
            'button:not([disabled]):not([tabindex="-1"])',
            'input:not([disabled]):not([tabindex="-1"])',
            'select:not([disabled]):not([tabindex="-1"])',
            'textarea:not([disabled]):not([tabindex="-1"])',
            '[tabindex]:not([tabindex="-1"])',
          ].join(','),
        ),
      ];

      if (menuTrigger) {
        menuElements.push(
          menuTrigger,
        );
      }

      return menuElements.filter(
        element => {
          const style =
            window.getComputedStyle(
              element,
            );

          return (
            style.display !==
            'none' &&
            style.visibility !==
            'hidden'
          );
        },
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

        setMenuOpen(
          false,
        );

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

        menuTrigger?.focus();

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

    document.addEventListener(
      'keydown',
      handleKeyDown,
    );

    return () => {
      window.cancelAnimationFrame(
        frame,
      );

      document.body.style.overflow =
        previousOverflow;

      document.removeEventListener(
        'keydown',
        handleKeyDown,
      );

      window.requestAnimationFrame(
        () => {
          menuTrigger?.focus();
        },
      );
    };
  }, [
    menuOpen,
  ]);

  const menuAriaLabel =
    menuOpen
      ? isArabic
        ? 'إغلاق القائمة'
        : 'Close menu'
      : isArabic
        ? 'فتح القائمة'
        : 'Open menu';

  const languageAriaLabel =
    isArabic
      ? 'التبديل إلى اللغة الإنجليزية'
      : 'Switch to Arabic';

  function toggleLanguage() {
    setLang(
      isArabic
        ? 'en'
        : 'ar',
    );
  }

  return (
    <>
      <header
        className={`site-header ${menuOpen
          ? 'site-header-menu-open'
          : ''
          }`}
      >
        <Link
          className="site-brand"
          to={getLocalizedPath('/', lang)}
          aria-label={
            isArabic
              ? 'الصفحة الرئيسية لشركة الإتقان السعودية'
              : 'Saudi Etqaan homepage'
          }
        >
          <img
            src={Logo}
            alt={
              isArabic
                ? 'شركة الإتقان السعودية'
                : 'Saudi Etqaan Co.'
            }
          />
        </Link>
      </header>

      <div
        className={`site-floating-controls ${menuOpen
          ? 'site-floating-controls-menu-open'
          : ''
          }`}
      >
        <button
          type="button"
          className="language-toggle"
          onClick={
            toggleLanguage
          }
          aria-label={
            languageAriaLabel
          }
        >
          {isArabic
            ? 'EN'
            : 'AR'}
        </button>

        <button
          ref={
            menuTriggerRef
          }
          type="button"
          className="site-menu-trigger"
          onClick={() => {
            setMenuOpen(
              current =>
                !current,
            );
          }}
          aria-label={
            menuAriaLabel
          }
          aria-expanded={
            menuOpen
          }
          aria-controls="site-side-menu"
        >
          {menuOpen ? (
            <FiX
              aria-hidden="true"
            />
          ) : (
            <FiMenu
              aria-hidden="true"
            />
          )}
        </button>
      </div>

      <SideMenu
        open={menuOpen}
        onClose={() => {
          setMenuOpen(
            false,
          );
        }}
        theme={theme}
        toggleTheme={
          toggleTheme
        }
      />
    </>
  );
}