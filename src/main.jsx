import {
    StrictMode,
} from 'react';

import {
    createRoot,
} from 'react-dom/client';

import {
    BrowserRouter,
} from 'react-router-dom';

import App from './App.jsx';

import siteConfig from './data/siteConfig';

import './index.css';

function getInitialTheme() {
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

const initialTheme =
    getInitialTheme();

document.documentElement.dataset.theme =
    initialTheme;

document.documentElement.style.colorScheme =
    initialTheme;

document.documentElement.style.setProperty(
    '--brand-primary',
    siteConfig.branding.primary,
);

document.documentElement.style.setProperty(
    '--brand-dark',
    siteConfig.branding.dark,
);

document.documentElement.style.setProperty(
    '--brand-light',
    siteConfig.branding.light,
);

createRoot(
    document.getElementById(
        'root',
    ),
).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
);