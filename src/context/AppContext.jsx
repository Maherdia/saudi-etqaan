import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

import {
    useLocation,
    useNavigate,
} from 'react-router-dom';

import {
    getLanguageFromPath,
    getLocalizedPath,
} from '../data/routes';

const AppContext = createContext(null);

const translations = {
    en: {
        home: 'Home',
        products: 'Products & Solutions',
        projects: 'Projects',
        companies: 'Our Companies',
        about: 'About',
        contact: 'Contact',
        search: 'Search',
        enter: 'Enter Experience',
        skip: 'Skip intro',
        tagline: 'One Group. Integrated Excellence.',
    },
    ar: {
        home: 'الرئيسية',
        products: 'المنتجات والحلول',
        projects: 'المشاريع',
        companies: 'شركاتنا',
        about: 'من نحن',
        contact: 'اتصل بنا',
        search: 'بحث',
        enter: 'دخول الموقع',
        skip: 'تخطي المقدمة',
        tagline: 'مجموعة واحدة. تكامل في التميز.',
    },
};

function getStoredTheme() {
    try {
        return localStorage.getItem('etqaan-theme') === 'light'
            ? 'light'
            : 'dark';
    } catch {
        return 'dark';
    }
}

function getIntroState() {
    try {
        return sessionStorage.getItem('etqaan-intro-v3') !== 'seen';
    } catch {
        return true;
    }
}

export function AppProvider({ children }) {
    const location = useLocation();
    const navigate = useNavigate();

    const lang =
        getLanguageFromPath(
            location.pathname,
        );
    const [theme, setTheme] = useState(getStoredTheme);
    const [intro, setIntro] = useState(getIntroState);

    useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        try {
            localStorage.setItem('etqaan-lang', lang);
        } catch {
            // Language still works for the current session.
        }
    }, [lang]);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        document.documentElement.style.colorScheme = theme;

        try {
            localStorage.setItem('etqaan-theme', theme);
        } catch {
            // Theme still works for the current session.
        }
    }, [theme]);

    const setLang = useCallback(
        nextLanguage => {
            const nextLang = nextLanguage === 'ar' ? 'ar' : 'en';
            const nextPath = getLocalizedPath(location.pathname, nextLang);
            navigate(`${nextPath}${location.search}${location.hash}`);
        },
        [
            location.pathname,
            location.search,
            location.hash,
            navigate,
        ],
    );

    const closeIntro = useCallback(() => {
        try {
            sessionStorage.setItem('etqaan-intro-v3', 'seen');
        } catch {
            // Intro can still close when storage is unavailable.
        }

        setIntro(false);
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme(currentTheme => currentTheme === 'dark' ? 'light' : 'dark');
    }, []);

    const value = useMemo(
        () => ({
            lang,
            setLang,
            theme,
            setTheme,
            toggleTheme,
            intro,
            closeIntro,
            t: translations[lang],
        }),
        [lang, setLang, theme, toggleTheme, intro, closeIntro],
    );

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('useApp must be used inside the AppProvider.');
    }

    return context;
}
