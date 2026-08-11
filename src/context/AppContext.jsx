import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

const AppContext =
    createContext(null);

const translations = {
    en: {
        home: 'Home',
        products:
            'Products & Solutions',
        projects: 'Projects',
        companies:
            'Our Companies',
        about: 'About',
        contact: 'Contact',
        search: 'Search',
        enter:
            'Enter Experience',
        skip: 'Skip intro',
        tagline:
            'One Group. Integrated Excellence.',
    },

    ar: {
        home: 'الرئيسية',
        products:
            'المنتجات والحلول',
        projects: 'المشاريع',
        companies: 'شركاتنا',
        about: 'من نحن',
        contact: 'اتصل بنا',
        search: 'بحث',
        enter: 'دخول الموقع',
        skip: 'تخطي المقدمة',
        tagline:
            'مجموعة واحدة. تكامل في التميز.',
    },
};

function getStoredLanguage() {
    try {
        const storedLanguage =
            localStorage.getItem(
                'etqaan-lang',
            );

        return storedLanguage ===
            'ar'
            ? 'ar'
            : 'en';
    } catch {
        return 'en';
    }
}

function getStoredTheme() {
    try {
        const storedTheme =
            localStorage.getItem(
                'etqaan-theme',
            );

        return storedTheme ===
            'light'
            ? 'light'
            : 'dark';
    } catch {
        return 'dark';
    }
}

function getIntroState() {
    try {
        return (
            sessionStorage.getItem(
                'etqaan-intro-v3',
            ) !== 'seen'
        );
    } catch {
        return true;
    }
}

export function AppProvider({
    children,
}) {
    const [
        lang,
        setLang,
    ] = useState(
        getStoredLanguage,
    );

    const [
        theme,
        setTheme,
    ] = useState(
        getStoredTheme,
    );

    const [
        intro,
        setIntro,
    ] = useState(
        getIntroState,
    );

    useEffect(() => {
        document.documentElement.lang =
            lang;

        document.documentElement.dir =
            lang === 'ar'
                ? 'rtl'
                : 'ltr';

        try {
            localStorage.setItem(
                'etqaan-lang',
                lang,
            );
        } catch {
            // Language still works for the current session.
        }
    }, [lang]);

    useEffect(() => {
        document.documentElement.dataset.theme =
            theme;

        document.documentElement.style.colorScheme =
            theme;

        try {
            localStorage.setItem(
                'etqaan-theme',
                theme,
            );
        } catch {
            // Theme still works for the current session.
        }
    }, [theme]);

    function closeIntro() {
        try {
            sessionStorage.setItem(
                'etqaan-intro-v3',
                'seen',
            );
        } catch {
            // Intro can still close when storage is unavailable.
        }

        setIntro(false);
    }

    function toggleTheme() {
        setTheme(
            currentTheme =>
                currentTheme ===
                    'dark'
                    ? 'light'
                    : 'dark',
        );
    }

    const value =
        useMemo(
            () => ({
                lang,
                setLang,
                theme,
                setTheme,
                toggleTheme,
                intro,
                closeIntro,
                t:
                    translations[
                    lang
                    ],
            }),
            [
                lang,
                theme,
                intro,
            ],
        );

    return (
        <AppContext.Provider
            value={value}
        >
            {children}
        </AppContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
    const context =
        useContext(
            AppContext,
        );

    if (!context) {
        throw new Error(
            'useApp must be used inside the AppProvider.',
        );
    }

    return context;
}