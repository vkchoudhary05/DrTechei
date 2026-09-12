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
  | 'contact'
  | 'technology-partner-finland'
  | 'technology-partner-ireland'
  | 'technology-partner-india';

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
    description: 'Connect with our senior technical architects. Get a comprehensive project blueprint and transparent proposal within 24 business hours. Call +919690941439.',
    keywords: 'Contact DrTechei, Hire Web Developers, Get Project Quote, Discovery Consultation, Web Agency Contact',
    canonicalPath: '/contact',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: 'home' },
      { name: 'Contact', path: 'contact' },
    ],
  },
  'technology-partner-finland': {
    title: 'Technology Partner Finland | Dedicated Software Development & Tech Squads',
    description: 'DrTechei is a dedicated technology partner for Finnish companies in Helsinki, Espoo, and Tampere. Certified Next.js 15 architects, 100% GDPR compliance, and full EET timezone alignment.',
    keywords: 'technology partner finland, software development partner finland, hire dedicated developers finland, nextjs development helsinki, offshore tech partner nordic, gdpr compliant engineering',
    canonicalPath: '/technology-partner-finland',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: 'home' },
      { name: 'Technology Partner Finland', path: 'technology-partner-finland' },
    ],
  },
  'technology-partner-ireland': {
    title: 'Technology Partner Ireland | Dedicated Software Engineering & Startup Squads',
    description: 'Silicon Docks standard technology partner for Irish startups and enterprises in Dublin, Cork, and Galway. Fast squad deployment, GMT/IST alignment, and 100% IP code handover.',
    keywords: 'technology partner ireland, software development partner dublin, hire dedicated developers ireland, tech partner startups ireland, nextjs react development ireland, silicon docks tech partner',
    canonicalPath: '/technology-partner-ireland',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: 'home' },
      { name: 'Technology Partner Ireland', path: 'technology-partner-ireland' },
    ],
  },
  'technology-partner-india': {
    title: 'Technology Partner India | Elite Senior Full-Stack Engineering & Offshore Hub',
    description: 'Premier technology partner in India for global startups and domestic enterprises. Dedicated Next.js 15 squads, top 1% senior talent, and 99+ Core Web Vitals guarantees.',
    keywords: 'technology partner india, software development partner india, hire dedicated development team india, offshore tech partner india, nextjs engineering partner india, top IT company india',
    canonicalPath: '/technology-partner-india',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: 'home' },
      { name: 'Technology Partner India', path: 'technology-partner-india' },
    ],
  },
};
