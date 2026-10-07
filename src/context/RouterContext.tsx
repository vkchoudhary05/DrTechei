import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { PageRoute, PAGE_SEO_DATA } from '../types/router';
import { initGoogleAnalytics, trackPageView } from '../utils/analytics';

interface RouterContextType {
  currentPage: PageRoute;
  navigate: (page: PageRoute | string, options?: { scrollToTop?: boolean; targetId?: string }) => void;
  isNavigating: boolean;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

function normalizePath(rawPath: string): PageRoute {
  // Check hash first (e.g. #services)
  if (rawPath.startsWith('#')) {
    const cleanHash = rawPath.replace('#', '').toLowerCase();
    if (cleanHash in PAGE_SEO_DATA) {
      return cleanHash as PageRoute;
    }
  }

  // Check pathname (e.g. /services, /services/, /portfolio)
  let cleanPath = rawPath
    .split('?')[0]
    .split('#')[0]
    .toLowerCase()
    .trim();

  // Strip leading and trailing slashes
  cleanPath = cleanPath.replace(/^\/+/, '').replace(/\/+$/, '');

  if (cleanPath === '' || cleanPath === 'home' || cleanPath === 'index.html' || cleanPath === 'index') {
    return 'home';
  }
  if (cleanPath in PAGE_SEO_DATA) {
    return cleanPath as PageRoute;
  }

  return 'home';
}

function getPathForRoute(route: PageRoute): string {
  return PAGE_SEO_DATA[route]?.canonicalPath || '/';
}

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        return normalizePath(hash);
      }
      return normalizePath(window.location.pathname);
    }
    return 'home';
  });

  const [isNavigating, setIsNavigating] = useState(false);

  // Sync document head and dynamic structured data for the active page
  useEffect(() => {
    const seo = PAGE_SEO_DATA[currentPage] || PAGE_SEO_DATA.home;

    // SEO metadata is centrally managed by SEOHead so titles, canonical URLs,
    // social previews and structured data cannot overwrite one another.
    // Google Analytics 4 pageview tracking remains route-aware here.
    trackPageView(currentPage, seo.title);
  }, [currentPage]);

  // Initialize GA4 on application mount
  useEffect(() => {
    initGoogleAnalytics();
  }, []);

  // Handle browser back/forward history navigation
  useEffect(() => {
    const handlePopState = () => {
      const newPage = window.location.hash
        ? normalizePath(window.location.hash)
        : normalizePath(window.location.pathname);
      setCurrentPage(newPage);
      window.scrollTo(0, 0);
      if (typeof document !== 'undefined') {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback(
    (page: PageRoute | string, options?: { scrollToTop?: boolean; targetId?: string }) => {
      setIsNavigating(true);
      const targetRoute = normalizePath(page);
      setCurrentPage(targetRoute);

      // Update URL in browser without full reload
      const newPath = getPathForRoute(targetRoute);
      if (window.location.pathname !== newPath) {
        window.history.pushState(null, '', newPath);
      }

      // Scroll to top or specified target
      if (options?.targetId) {
        setTimeout(() => {
          const el = document.getElementById(options.targetId!);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else if (options?.scrollToTop !== false) {
        window.scrollTo(0, 0);
        if (typeof document !== 'undefined') {
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }
      }

      setTimeout(() => {
        setIsNavigating(false);
      }, 150);
    },
    []
  );

  return (
    <RouterContext.Provider value={{ currentPage, navigate, isNavigating }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
