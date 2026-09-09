import { TechnologyItem } from '../types';

export const technologiesData: TechnologyItem[] = [
  // Frontend
  {
    name: 'Next.js',
    category: 'frontend',
    description: 'The premier React framework for production grade SSR & Static sites.',
    popularFor: 'High SEO, Sub-second Speeds',
    iconType: 'nextjs',
    badgeColor: 'from-slate-900 to-slate-800'
  },
  {
    name: 'React.js',
    category: 'frontend',
    description: 'Component-driven UI library powering dynamic user interfaces.',
    popularFor: 'Rich Interactive Web Apps',
    iconType: 'react',
    badgeColor: 'from-cyan-600 to-blue-600'
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    description: 'Strongly typed JavaScript preventing runtime bugs at enterprise scale.',
    popularFor: 'Bulletproof Code Quality',
    iconType: 'typescript',
    badgeColor: 'from-blue-700 to-blue-500'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    description: 'Modern asynchronous web standard powering fluid web logic.',
    popularFor: 'Universal Web Standards',
    iconType: 'javascript',
    badgeColor: 'from-amber-500 to-yellow-400'
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    description: 'Utility-first CSS framework enabling bespoke, responsive designs.',
    popularFor: 'Modern Precision Layouts',
    iconType: 'tailwind',
    badgeColor: 'from-sky-500 to-cyan-500'
  },
  {
    name: 'HTML5',
    category: 'frontend',
    description: 'Accessible, semantic markup ensuring web standards compliance.',
    popularFor: 'Semantic Structure & SEO',
    iconType: 'html5',
    badgeColor: 'from-orange-600 to-amber-600'
  },
  {
    name: 'CSS3 / Modern CSS',
    category: 'frontend',
    description: 'Advanced responsive design, grid layouts, and hardware animations.',
    popularFor: 'Responsive Fluid Design',
    iconType: 'css3',
    badgeColor: 'from-blue-600 to-indigo-600'
  },

  // Backend
  {
    name: 'Node.js',
    category: 'backend',
    description: 'High-throughput asynchronous runtime for scalable business servers.',
    popularFor: 'High Concurrency & Speed',
    iconType: 'nodejs',
    badgeColor: 'from-emerald-600 to-green-600'
  },
  {
    name: 'Express.js',
    category: 'backend',
    description: 'Battle-tested, minimalist web framework for Node.js REST APIs.',
    popularFor: 'Microservices & Endpoints',
    iconType: 'express',
    badgeColor: 'from-slate-700 to-slate-900'
  },
  {
    name: 'REST APIs',
    category: 'backend',
    description: 'Secure, standardized endpoints with clear contracts and swagger docs.',
    popularFor: 'Interoperable Integrations',
    iconType: 'api',
    badgeColor: 'from-indigo-600 to-blue-700'
  },

  // CMS & E-Commerce Platforms (Complete Suite)
  {
    name: 'WordPress (Headless & Classic)',
    category: 'cms',
    description: 'Custom Gutenberg, REST API, and Headless WPGraphQL paired with Next.js.',
    popularFor: 'Publishing, Corporate & Headless Blogs',
    iconType: 'wordpress',
    badgeColor: 'from-blue-800 to-sky-700'
  },
  {
    name: 'Shopify & Shopify Plus',
    category: 'cms',
    description: 'Custom Liquid themes, Storefront GraphQL API, and headless e-commerce builds.',
    popularFor: 'High-Volume E-Commerce & DTC Brands',
    iconType: 'shopify',
    badgeColor: 'from-emerald-600 to-teal-700'
  },
  {
    name: 'Sanity.io',
    category: 'cms',
    description: 'Real-time composable headless CMS with structured content and live previews.',
    popularFor: 'Modern Headless Next.js Applications',
    iconType: 'sanity',
    badgeColor: 'from-rose-600 to-red-600'
  },
  {
    name: 'Strapi',
    category: 'cms',
    description: 'Open-source Node.js headless CMS with customizable REST & GraphQL endpoints.',
    popularFor: 'Self-Hosted APIs & Mobile Apps',
    iconType: 'strapi',
    badgeColor: 'from-indigo-600 to-purple-700'
  },
  {
    name: 'Webflow',
    category: 'cms',
    description: 'Visual-first development with clean semantic code export and rapid client workflows.',
    popularFor: 'Design-Driven Marketing Websites',
    iconType: 'webflow',
    badgeColor: 'from-blue-600 to-cyan-600'
  },
  {
    name: 'Contentful',
    category: 'cms',
    description: 'Enterprise composable content platform powering omnichannel digital experiences.',
    popularFor: 'Multi-Region Enterprise Architectures',
    iconType: 'contentful',
    badgeColor: 'from-blue-600 to-indigo-700'
  },
  {
    name: 'WooCommerce',
    category: 'cms',
    description: 'Flexible open-source commerce platform built on WordPress with custom checkouts.',
    popularFor: 'Scalable Product Catalogs & Subscriptions',
    iconType: 'woocommerce',
    badgeColor: 'from-purple-700 to-violet-800'
  },
  {
    name: 'Payload CMS',
    category: 'cms',
    description: 'Next.js & TypeScript native headless CMS with zero config database migrations.',
    popularFor: 'Full-Stack Next.js 15 Monorepos',
    iconType: 'payload',
    badgeColor: 'from-slate-900 to-zinc-800'
  },
  {
    name: 'Ghost CMS',
    category: 'cms',
    description: 'Ultra-fast Node.js publication platform with built-in newsletters and memberships.',
    popularFor: 'Sub-second Media & Journalism Portals',
    iconType: 'ghost',
    badgeColor: 'from-slate-800 to-blue-900'
  },
  {
    name: 'Drupal',
    category: 'cms',
    description: 'Enterprise content management with granular taxonomy and decoupled JSON:API.',
    popularFor: 'Government, Higher Ed & Complex Portals',
    iconType: 'drupal',
    badgeColor: 'from-sky-700 to-blue-800'
  },
  {
    name: 'Magento / Adobe Commerce',
    category: 'cms',
    description: 'Heavyweight enterprise B2B and B2C commerce platform with deep ERP integrations.',
    popularFor: 'Multi-Store B2B & Complex Wholesale',
    iconType: 'magento',
    badgeColor: 'from-orange-600 to-amber-700'
  },
  {
    name: 'Wix Studio',
    category: 'cms',
    description: 'Modern flexible CMS for rapid deployment and visual business sites.',
    popularFor: 'Rapid Launch & Creative Brands',
    iconType: 'wix',
    badgeColor: 'from-amber-600 to-orange-600'
  },
  {
    name: 'Squarespace',
    category: 'cms',
    description: 'Polished design-first CMS platform ideal for boutiques and agencies.',
    popularFor: 'Design Portfolios & Studios',
    iconType: 'squarespace',
    badgeColor: 'from-slate-800 to-slate-900'
  },
  {
    name: 'HubSpot CMS',
    category: 'cms',
    description: 'Inbound marketing power with CRM-connected web templates.',
    popularFor: 'Lead Generation & B2B Funnels',
    iconType: 'hubspot',
    badgeColor: 'from-orange-600 to-red-600'
  },

  // Database
  {
    name: 'PostgreSQL',
    category: 'database',
    description: 'Advanced open-source relational database with ACID compliance.',
    popularFor: 'Enterprise Data Integrity',
    iconType: 'postgresql',
    badgeColor: 'from-blue-700 to-indigo-800'
  },
  {
    name: 'MongoDB',
    category: 'database',
    description: 'Document-oriented NoSQL database optimized for agile data structures.',
    popularFor: 'Dynamic Web App Data',
    iconType: 'mongodb',
    badgeColor: 'from-green-600 to-emerald-700'
  },
  {
    name: 'MySQL',
    category: 'database',
    description: 'Time-proven relational database trusted by top web infrastructure.',
    popularFor: 'Reliable Structured Storage',
    iconType: 'mysql',
    badgeColor: 'from-sky-700 to-blue-800'
  },

  // Tools & Integrations
  {
    name: 'Git',
    category: 'tools',
    description: 'Distributed version control ensuring disciplined development tracking.',
    popularFor: 'Version History & Team Agility',
    iconType: 'git',
    badgeColor: 'from-red-600 to-orange-600'
  },
  {
    name: 'GitHub',
    category: 'tools',
    description: 'Collaborative code repository hosting and automated CI/CD workflows.',
    popularFor: 'DevOps & Continuous Deployment',
    iconType: 'github',
    badgeColor: 'from-slate-800 to-slate-900'
  },
  {
    name: 'Stripe',
    category: 'tools',
    description: 'Global payment infrastructure for recurring billing and checkouts.',
    popularFor: 'Secure Global Payments',
    iconType: 'stripe',
    badgeColor: 'from-indigo-600 to-purple-600'
  },
  {
    name: 'PayPal',
    category: 'tools',
    description: 'Universally trusted payment gateway boosting customer checkout trust.',
    popularFor: 'Global Consumer Payments',
    iconType: 'paypal',
    badgeColor: 'from-blue-800 to-sky-600'
  },
  {
    name: 'Cloudinary',
    category: 'tools',
    description: 'Automated cloud media management, WebP transformation, and CDN delivery.',
    popularFor: 'Instant Image Optimization',
    iconType: 'cloudinary',
    badgeColor: 'from-blue-600 to-cyan-600'
  }
];
