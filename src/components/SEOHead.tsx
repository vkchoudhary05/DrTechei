import React, { useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { PAGE_SEO_DATA, PageRoute } from '../types/router';

const SITE_URL = 'https://drtechei.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/Dr1.png`;

export const SEOHead: React.FC = () => {
  const { currentPage } = useRouter();

  useEffect(() => {
    const seo = PAGE_SEO_DATA[currentPage] || PAGE_SEO_DATA.home;
    const canonicalUrl = `${SITE_URL}${seo.canonicalPath === '/' ? '' : seo.canonicalPath}`;

    // 1. Update Document Title
    document.title = seo.title;

    // Helper to safely set or update meta tag
    const setMetaTag = (attribute: string, attrValue: string, content: string) => {
      let meta = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 2. Primary SEO Tags
    setMetaTag('name', 'description', seo.description);
    setMetaTag('name', 'keywords', seo.keywords);
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('name', 'author', 'DrTechei IT Solutions - Global Tech Partner');

    // 3. Open Graph Tags
    setMetaTag('property', 'og:title', seo.title);
    setMetaTag('property', 'og:description', seo.description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', seo.ogType || 'website');
    setMetaTag('property', 'og:site_name', 'DrTechei IT Solutions | Global Tech Partner');
    setMetaTag('property', 'og:image', DEFAULT_OG_IMAGE);

    // 4. Twitter Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', seo.title);
    setMetaTag('name', 'twitter:description', seo.description);
    setMetaTag('name', 'twitter:image', DEFAULT_OG_IMAGE);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 6. Route-specific JSON-LD. This keeps visible page context, canonical URLs,
    // and breadcrumb markup aligned for crawlers and social previews.
    let scriptTag = document.getElementById('dynamic-page-jsonld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'dynamic-page-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    const breadcrumbs = seo.breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${PAGE_SEO_DATA[crumb.path as PageRoute].canonicalPath === '/' ? '' : PAGE_SEO_DATA[crumb.path as PageRoute].canonicalPath}`,
    }));
    scriptTag.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': currentPage === 'contact' ? 'ContactPage' : currentPage === 'about' ? 'AboutPage' : 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: seo.title,
          description: seo.description,
          isPartOf: { '@id': `${SITE_URL}/#website` },
          about: { '@id': `${SITE_URL}/#organization` },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${canonicalUrl}#breadcrumb`,
          itemListElement: breadcrumbs,
        },
      ],
    });

    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return null; // Headless component
};
