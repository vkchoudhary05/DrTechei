export type PageRoute =
  | 'home'
  | 'services'
  | 'portfolio'
  | 'technologies'
  | 'why-us'
  | 'process'
  | 'about'
  | 'testimonials'
  | 'faq'
  | 'contact';

export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  ogType?: 'website' | 'article';
  schemaType?: string;
  breadcrumbs: Array<{ name: string; path: PageRoute }>;
}

export const PAGE_SEO_DATA: Record<PageRoute, PageSEO> = {
  home: {
    title: 'DrTechei IT Solutions | Custom Next.js, React & Node.js Web Development Agency',
    description: 'DrTechei IT Solutions engineers high-performance Next.js 15 web applications, custom React frontends, Node.js APIs, Headless CMS, and Core Web Vitals SEO for ambitious businesses.',
    keywords: 'DrTechei IT Solutions, Web Development Agency, Next.js 15, React.js Development, Node.js Backend, Headless CMS, WordPress Development, Technical SEO, Core Web Vitals',
    canonicalPath: '/',
    ogType: 'website',
    breadcrumbs: [{ name: 'Home', path: 'home' }],
  },
  services: {
    title: 'Web Development Services & Digital Solutions | DrTechei IT Solutions',
    description: 'Explore full-cycle web development services: Next.js 15 apps, custom React UI, Node.js API engineering, Headless WordPress/Shopify, and sub-second SEO optimization.',
    keywords: 'Web Development Services, Next.js Services, React Development, Headless CMS, Node.js API, Technical SEO Audit, Enterprise Web Architecture',
    canonicalPath: '/services',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: 'home' },
      { name: 'Services', path: 'services' },
    ],
  },
  portfolio: {
    title: 'Case Studies & Featured Client Projects | DrTechei IT Solutions',
    description: 'Discover proven results and live client builds. See how DrTechei engineered high-converting web apps with +180% PageSpeed acceleration and +65% lead conversion.',
    keywords: 'Web Development Case Studies, Next.js Portfolio, React Web Apps, Client Projects, Performance Benchmarks, DrTechei Work',
    canonicalPath: '/portfolio',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: 'home' },
      { name: 'Portfolio', path: 'portfolio' },
    ],
  },
  technologies: {
    title: 'Modern Precision Tech Stack (Next.js, React, Node.js) | DrTechei IT Solutions',
    description: 'Our battle-tested technology ecosystem: Next.js 15, React 19, TypeScript, Node.js, GraphQL, Headless CMS, Tailwind CSS, PostgreSQL, and AWS/Vercel cloud edge.',
    keywords: 'Technology Stack, Next.js 15, React 19, TypeScript, Node.js, GraphQL, PostgreSQL, Tailwind CSS, Headless CMS, Cloud Architecture',
    canonicalPath: '/technologies',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: 'home' },
      { name: 'Technologies', path: 'technologies' },
    ],
  },
  'why-us': {
    title: 'Why Choose DrTechei | Senior Engineering & Diagnostic Precision',
    description: 'Why leading brands partner with DrTechei: 100% client source code IP ownership, direct senior engineer collaboration, sub-second performance guarantees, and zero vendor lock-in.',
    keywords: 'Why Choose DrTechei, Agency vs Freelancer, Enterprise Web Partner, Senior Engineers, Code Ownership, Performance Guarantees',
    canonicalPath: '/why-us',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: 'home' },
      { name: 'Why Us', path: 'why-us' },
    ],
  },
  process: {
    title: 'Our 6-Step Agile Engineering Process | DrTechei IT Solutions',
    description: 'A transparent, milestone-driven delivery process: Discovery, Strategy & Spec, Interactive UX, TypeScript Engineering, Rigorous Testing, and Production Launch with Hypercare.',
    keywords: 'Web Development Process, Agile Sprints, Software Delivery Lifecycle, QA Testing, Production Deployment, DrTechei Methodology',
    canonicalPath: '/process',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: 'home' },
      { name: 'Process', path: 'process' },
    ],
  },
  about: {
    title: 'About DrTechei | Senior Engineers, Ethics & Digital Mastery',
    description: 'Learn about DrTechei IT Solutions: our mission, diagnostic engineering philosophy, leadership standards, and client-first commitment to building durable digital assets.',
    keywords: 'About DrTechei, IT Solutions Company, Software Engineering Team, Tech Ethics, Digital Transformation Partners',
    canonicalPath: '/about',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: 'home' },
      { name: 'About Us', path: 'about' },
    ],
  },
  testimonials: {
    title: 'Client Reviews & Verified Founder Endorsements | DrTechei IT Solutions',
    description: 'Read real testimonials and ratings from founders, CTOs, and marketing directors whose digital platforms and business conversion rates were accelerated by DrTechei.',
    keywords: 'Client Testimonials, Customer Reviews, DrTechei Ratings, Web Development Reviews, Founder Endorsements',
    canonicalPath: '/testimonials',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: 'home' },
      { name: 'Testimonials', path: 'testimonials' },
    ],
  },
  faq: {
    title: 'Technical FAQ & Engineering Standards | DrTechei IT Solutions',
    description: 'Clear answers to technical questions about Next.js 15 architectures, PageSpeed 99+ guarantees, intellectual property ownership, Headless CMS, SLAs, and project pricing.',
    keywords: 'Technical FAQ, Web Development FAQ, Next.js Questions, Code Ownership, PageSpeed Guarantee, Project Timelines',
    canonicalPath: '/faq',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: 'home' },
      { name: 'FAQ', path: 'faq' },
    ],
  },
  contact: {
    title: 'Contact DrTechei | Book Free Technical Discovery Call & Estimate',
    description: 'Connect with our senior technical architects. Get a comprehensive project blueprint and transparent proposal within 24 business hours. Call +1 (800) 540-TECH.',
    keywords: 'Contact DrTechei, Hire Web Developers, Get Project Quote, Discovery Consultation, Web Agency Contact',
    canonicalPath: '/contact',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: 'home' },
      { name: 'Contact', path: 'contact' },
    ],
  },
};
