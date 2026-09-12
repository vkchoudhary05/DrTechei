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

  // Check pathname (e.g. /services, /portfolio)
  const cleanPath = rawPath.replace(/^\//, '').split('?')[0].split('#')[0].toLowerCase();
  if (cleanPath === '' || cleanPath === 'home') {
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

    // 1. Title
    document.title = seo.title;

    // 2. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', seo.description);

    // 3. Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && seo.keywords) {
      metaKeywords.setAttribute('content', seo.keywords);
    }

    // 4. Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    const fullCanonicalUrl = `https://drtechei.com${seo.canonicalPath === '/' ? '' : seo.canonicalPath}`;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullCanonicalUrl);

    // 5. Open Graph Meta Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seo.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', seo.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', fullCanonicalUrl);

    // 6. Twitter Meta Tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', seo.title);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', seo.description);

    // 7. Dynamic JSON-LD Breadcrumb Schema per page
    const existingBreadcrumbScript = document.getElementById('page-breadcrumb-schema');
    if (existingBreadcrumbScript) {
      existingBreadcrumbScript.remove();
    }

    const breadcrumbs = seo.breadcrumbs || [{ name: 'Home', path: 'home' }];
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'name': crumb.name,
        'item': `https://drtechei.com${getPathForRoute(crumb.path)}`,
      })),
    };

    const script = document.createElement('script');
    script.id = 'page-breadcrumb-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    // 8. Google Analytics 4 Pageview Tracking
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
