import {
  useEffect,
  useState,
} from 'react';

import {
  NavLink,
  useLocation,
} from 'react-router-dom';

import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiMoon,
  FiSearch,
  FiSun,
  FiX,
} from 'react-icons/fi';

import {
  useApp,
} from '../../context/AppContext';

import {
  createSiteSearchItems,
  productNavigation,
  searchSiteItems,
} from '../../data/siteSearch';

import './SideMenu.css';

const productDivisions = productNavigation;

export default function SideMenu({
  open,
  onClose,
  theme,
  toggleTheme,
}) {
  const {
    lang,
    t,
  } = useApp();

  const location =
    useLocation();

  const isArabic =
    lang === 'ar';

  const [
    productsOpen,
    setProductsOpen,
  ] = useState(false);

  const [
    searchQuery,
    setSearchQuery,
  ] = useState('');

  const isProductsRoute =
    location.pathname.startsWith(
      '/products',
    );

  const primaryLinks = [
    {
      path: '/',
      label: t.home,
      end: true,
    },
  ];

  const middleLinks = [
    {
      path:
        '/projects',
      label:
        t.projects,
    },

    {
      path:
        '/companies',
      label:
        t.companies,
    },
  ];

  const finalLinks = [
    {
      path: '/about',
      label: t.about,
    },

    {
      path:
        '/contact',
      label:
        t.contact,
    },
  ];

  useEffect(() => {
    function handleOpenProductsMenu() {
      setProductsOpen(
        true,
      );
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
    if (open) {
      return undefined;
    }

    const frame =
      window.requestAnimationFrame(
        () => {
          setProductsOpen(
            false,
          );

          setSearchQuery(
            '',
          );
        },
      );

    return () => {
      window.cancelAnimationFrame(
        frame,
      );
    };
  }, [open]);

  useEffect(() => {
    const frame =
      window.requestAnimationFrame(
        () => {
          setProductsOpen(
            false,
          );

          setSearchQuery(
            '',
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

  const normalizedSearchQuery =
    searchQuery.trim();

  const searchItems =
    createSiteSearchItems({
      lang,
      pageLabels: {
        home: t.home,
        products: t.products,
        projects: t.projects,
        companies: t.companies,
        about: t.about,
        contact: t.contact,
      },
    });

  const searchResults =
    searchSiteItems(
      searchItems,
      searchQuery,
      12,
    );

  function openProductsPanel() {
    setSearchQuery('');
    setProductsOpen(true);
  }

  function closeProductsPanel() {
    setProductsOpen(false);
  }

  function handleSearchChange(
    event,
  ) {
    setSearchQuery(
      event.target.value,
    );

    setProductsOpen(false);
  }

  function clearSearch() {
    setSearchQuery('');
  }

  function renderNavigationLink(
    link,
  ) {
    return (
      <NavLink
        key={link.path}
        to={link.path}
        end={link.end}
        onClick={
          onClose
        }
        tabIndex={
          open
            ? 0
            : -1
        }
      >
        <span className="side-menu-label">
          {
            link.label
          }
        </span>

        <FiArrowUpRight
          className="side-menu-arrow"
          aria-hidden="true"
        />
      </NavLink>
    );
  }

  return (
    <div
      className={[
        'side-menu',

        open
          ? 'side-menu-open'
          : '',

        productsOpen
          ? 'side-menu-products-visible'
          : '',

        normalizedSearchQuery
          ? 'side-menu-searching'
          : '',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden={!open}
    >
      <button
        type="button"
        className="side-menu-backdrop"
        onClick={
          onClose
        }
        aria-label={
          isArabic
            ? 'إغلاق القائمة'
            : 'Close menu'
        }
        tabIndex={
          open
            ? 0
            : -1
        }
      />

      <aside className="side-menu-panel">
        <header className="side-menu-header">
          <p>
            {isArabic
              ? 'شركة الإتقان السعودية'
              : 'Saudi Etqaan Co.'}
          </p>
        </header>

        <nav
          className="side-menu-navigation"
          aria-label={
            isArabic
              ? 'التنقل الرئيسي'
              : 'Main navigation'
          }
        >
          <div className="side-menu-group">
            {primaryLinks.map(
              renderNavigationLink,
            )}
          </div>

          <div className="side-menu-group">
            <button
              type="button"
              className={[
                'side-menu-products-trigger',

                isProductsRoute
                  ? 'active'
                  : '',
              ]
                .filter(
                  Boolean,
                )
                .join(
                  ' ',
                )}
              onClick={
                openProductsPanel
              }
              aria-expanded={
                productsOpen
              }
              aria-controls="side-menu-products-panel"
              tabIndex={
                open
                  ? 0
                  : -1
              }
            >
              <span className="side-menu-label">
                {
                  t.products
                }
              </span>

              {isArabic ? (
                <FiArrowLeft
                  className="side-menu-direction-arrow"
                  aria-hidden="true"
                />
              ) : (
                <FiArrowRight
                  className="side-menu-direction-arrow"
                  aria-hidden="true"
                />
              )}
            </button>

            {middleLinks.map(
              renderNavigationLink,
            )}
          </div>

          <div className="side-menu-group">
            {finalLinks.map(
              renderNavigationLink,
            )}
          </div>
        </nav>

        <div className="side-menu-tools">
          <div className="side-menu-search-box">
            <FiSearch
              aria-hidden="true"
            />

            <input
              type="search"
              value={
                searchQuery
              }
              onChange={
                handleSearchChange
              }
              placeholder={
                isArabic
                  ? 'ابحث في الموقع'
                  : 'Search the site'
              }
              aria-label={
                isArabic
                  ? 'ابحث في الموقع'
                  : 'Search the site'
              }
              autoComplete="off"
              tabIndex={
                open
                  ? 0
                  : -1
              }
            />

            {searchQuery && (
              <button
                type="button"
                className="side-menu-search-clear"
                onClick={
                  clearSearch
                }
                aria-label={
                  isArabic
                    ? 'مسح البحث'
                    : 'Clear search'
                }
                tabIndex={
                  open
                    ? 0
                    : -1
                }
              >
                <FiX
                  aria-hidden="true"
                />
              </button>
            )}
          </div>

          <button
            type="button"
            className="side-menu-theme-switch"
            onClick={
              toggleTheme
            }
            aria-label={
              theme ===
                'light'
                ? isArabic
                  ? 'التبديل إلى الوضع الداكن'
                  : 'Switch to dark theme'
                : isArabic
                  ? 'التبديل إلى الوضع الفاتح'
                  : 'Switch to light theme'
            }
            tabIndex={
              open
                ? 0
                : -1
            }
          >
            {theme ===
              'light' ? (
              <FiMoon
                aria-hidden="true"
              />
            ) : (
              <FiSun
                aria-hidden="true"
              />
            )}

            <span>
              {theme ===
                'light'
                ? isArabic
                  ? 'الوضع الداكن'
                  : 'Dark mode'
                : isArabic
                  ? 'الوضع الفاتح'
                  : 'Light mode'}
            </span>
          </button>
        </div>

        {normalizedSearchQuery && (
          <div className="side-menu-search-results">
            <div className="side-menu-search-results-header">
              <span>
                {isArabic
                  ? 'نتائج البحث'
                  : 'Search results'}
              </span>

              <strong>
                {
                  searchResults.length
                }
              </strong>
            </div>

            {searchResults.length >
              0 ? (
              <div className="side-menu-search-results-list">
                {searchResults.map(
                  result => (
                    <NavLink
                      key={
                        result.id
                      }
                      to={
                        result.path
                      }
                      onClick={
                        onClose
                      }
                      tabIndex={
                        open
                          ? 0
                          : -1
                      }
                    >
                      <div>
                        <span>
                          {
                            result.type
                          }
                        </span>

                        <strong>
                          {
                            result.title
                          }
                        </strong>
                      </div>

                      <FiArrowUpRight
                        aria-hidden="true"
                      />
                    </NavLink>
                  ),
                )}
              </div>
            ) : (
              <p className="side-menu-search-empty">
                {isArabic
                  ? 'لا توجد نتائج مطابقة.'
                  : 'No matching results found.'}
              </p>
            )}
          </div>
        )}
      </aside>

      <aside
        id="side-menu-products-panel"
        className="side-menu-products-panel"
        aria-hidden={
          !productsOpen
        }
      >
        <header className="side-menu-products-header">
          <button
            type="button"
            className="side-menu-products-back"
            onClick={
              closeProductsPanel
            }
            tabIndex={
              open &&
                productsOpen
                ? 0
                : -1
            }
          >
            {isArabic ? (
              <FiArrowRight
                aria-hidden="true"
              />
            ) : (
              <FiArrowLeft
                aria-hidden="true"
              />
            )}

            <span>
              {isArabic
                ? 'العودة'
                : 'Back'}
            </span>
          </button>
        </header>

        <nav
          className="side-menu-products-navigation"
          aria-label={
            isArabic
              ? 'قطاعات المنتجات والحلول'
              : 'Products and solutions'
          }
        >
          {productDivisions.map(
            divisionItem => (
              <section
                className="side-menu-product-division"
                key={
                  divisionItem.id
                }
              >
                <NavLink
                  className="side-menu-product-division-title"
                  to={
                    divisionItem.path
                  }
                  onClick={
                    onClose
                  }
                  tabIndex={
                    open &&
                      productsOpen
                      ? 0
                      : -1
                  }
                >
                  <span>
                    {
                      divisionItem
                        .title[
                      lang
                      ]
                    }
                  </span>

                  {isArabic ? (
                    <FiArrowLeft
                      aria-hidden="true"
                    />
                  ) : (
                    <FiArrowRight
                      aria-hidden="true"
                    />
                  )}
                </NavLink>

                <div className="side-menu-product-list">
                  {divisionItem.products.map(
                    product => (
                      <NavLink
                        key={
                          product.slug
                        }
                        to={`${divisionItem.path}#${product.slug}`}
                        onClick={
                          onClose
                        }
                        tabIndex={
                          open &&
                            productsOpen
                            ? 0
                            : -1
                        }
                      >
                        {
                          product
                            .label[
                          lang
                          ]
                        }
                      </NavLink>
                    ),
                  )}
                </div>
              </section>
            ),
          )}
        </nav>
      </aside>
    </div>
  );
}