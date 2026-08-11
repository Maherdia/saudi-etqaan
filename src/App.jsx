import {
  useLayoutEffect,
} from 'react';

import {
  useLocation,
} from 'react-router-dom';

import AppRouter from './router/AppRouter';

import {
  AppProvider,
} from './context/AppContext';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToHash from './components/ScrollToHash/ScrollToHash';
import OrganizationSchema from './components/Seo/OrganizationSchema';

import etqaanMark from './assets/logos/etqaan-mark.webp';

function AppContent() {
  const {
    pathname,
    hash,
  } = useLocation();

  const showDecorativeMark =
    pathname !== '/' &&
    pathname !== '/ar';


  useLayoutEffect(() => {
    if (hash) {
      return;
    }

    const html =
      document.documentElement;

    const previousScrollBehavior =
      html.style.scrollBehavior;

    html.style.scrollBehavior =
      'auto';

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });

    html.scrollTop = 0;
    document.body.scrollTop = 0;

    html.style.scrollBehavior =
      previousScrollBehavior;
  }, [
    pathname,
    hash,
  ]);

  return (
    <>
      <OrganizationSchema />

      <ScrollToHash />

      <Navbar />

      {showDecorativeMark && (
        <div
          className="global-page-mark"
          aria-hidden="true"
        >
          <img
            src={etqaanMark}
            alt=""
          />
        </div>
      )}

      <AppRouter />

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}