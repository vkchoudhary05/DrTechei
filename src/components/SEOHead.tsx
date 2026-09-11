import React, { useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { SEO_DATA, PageSEO } from '../utils/seoConfig';

export const SEOHead: React.FC = () => {
  const { currentPage } = useRouter();

  useEffect(() => {
    const seo: PageSEO = SEO_DATA[currentPage] || SEO_DATA.home;

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
    setMetaTag('property', 'og:title', seo.ogTitle);
    setMetaTag('property', 'og:description', seo.ogDescription);
    setMetaTag('property', 'og:url', seo.canonical);
    setMetaTag('property', 'og:type', seo.ogType);
    setMetaTag('property', 'og:site_name', 'DrTechei IT Solutions | Global Tech Partner');
    setMetaTag('property', 'og:image', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80');

    // 4. Twitter Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', seo.ogTitle);
    setMetaTag('name', 'twitter:description', seo.ogDescription);
    setMetaTag('name', 'twitter:image', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80');

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', seo.canonical);

    // 6. Dynamic JSON-LD Structured Data
    let scriptTag = document.getElementById('dynamic-page-jsonld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'dynamic-page-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(seo.structuredData);

    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return null; // Headless component
};
