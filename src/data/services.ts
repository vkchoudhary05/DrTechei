import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-dev',
    slug: 'website-development',
    title: 'Website Development',
    tagline: 'Custom, responsive websites built for conversion and long-term brand authority.',
    description: 'We engineer tailor-made digital storefronts and web platforms designed to captivate your audience, deliver flawless responsiveness, and drive measurable business growth.',
    features: [
      'Business & corporate websites with enterprise credibility',
      'High-converting bespoke landing pages',
      'Custom web applications tailored to your workflow',
      'Mobile-first architecture ensuring seamless cross-device fidelity',
      'Fast loading speeds with modern Core Web Vitals compliance'
    ],
    technologies: ['TypeScript', 'Tailwind CSS', 'Vite', 'React', 'HTML5/CSS3'],
    iconName: 'Globe',
    deliverables: [
      'Custom UI design & responsive prototype',
      'Clean, modular, accessible source code',
      'Analytics & lead tracking integration',
      'Cross-browser and multi-device QA testing'
    ],
    highlight: 'Core Business Foundation'
  },
  {
    id: 'nextjs-dev',
    slug: 'nextjs-development',
    title: 'Next.js Development',
    tagline: 'Blazing-fast modern web applications powered by Next.js 15 & Server Components.',
    description: 'Leverage the pinnacle of React development. We construct enterprise-grade Next.js applications featuring Server-Side Rendering (SSR), Static Generation (SSG), and sub-second page transitions.',
    features: [
      'High-performance SSR & Static Site Generation',
      'Superior SEO-friendly architecture out of the box',
      'Zero-layout shift and optimized Core Web Vitals',
      'Scalable Edge API routes and server actions',
      'Seamless headless CMS and external API orchestrations'
    ],
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Server Actions', 'Vercel / Cloud Run'],
    iconName: 'Zap',
    deliverables: [
      'Production-ready Next.js codebase',
      'Automated CI/CD deployment pipeline',
      'Lighthouse score 95+ optimization',
      'Comprehensive code documentation'
    ],
    highlight: 'Maximum Speed & SEO'
  },
  {
    id: 'react-dev',
    slug: 'reactjs-development',
    title: 'React.js Development',
    tagline: 'Dynamic, highly interactive single-page and multi-view web applications.',
    description: 'Create responsive, intuitive user interfaces that keep visitors engaged. Our component-driven React development guarantees clean architecture, high reusability, and butter-smooth transitions.',
    features: [
      'Interactive, stateful web application development',
      'Reusable, atomic component design systems',
      'Framer Motion micro-interactions and smooth page transitions',
      'Robust client-side state management (Zustand, Redux, Context)',
      'Optimized virtual DOM rendering and bundle size hygiene'
    ],
    technologies: ['React.js', 'TypeScript', 'Motion', 'Tailwind CSS', 'shadcn/ui'],
    iconName: 'Atom',
    deliverables: [
      'Full interactive React component library',
      'State management architecture',
      'Fluid animations and keyboard navigation',
      'End-to-end user journey mapping'
    ],
    highlight: 'Fluid Interactive UX'
  },
  {
    id: 'nodejs-dev',
    slug: 'nodejs-development',
    title: 'Node.js Development',
    tagline: 'Secure, scalable backends, resilient REST APIs, and seamless database architectures.',
    description: 'Power your frontend with mission-critical server environments. We engineer hardened Node.js/Express APIs, microservices, secure authentication systems, and cloud databases.',
    features: [
      'Resilient RESTful & GraphQL API design',
      'Scalable backend architectures and cloud microservices',
      'Relational & NoSQL database integrations (PostgreSQL, MongoDB)',
      'OAuth2, JWT, and enterprise role-based access control (RBAC)',
      'Third-party webhook integrations (Stripe, Twilio, CRMs)'
    ],
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker'],
    iconName: 'Server',
    deliverables: [
      'Swagger / OpenAPI specification documentation',
      'Hardened database schemas with automated migrations',
      'Security audit and rate-limiting safeguards',
      'Scalable containerized deployment configurations'
    ],
    highlight: 'Enterprise Scalability'
  },
  {
    id: 'ecommerce-dev',
    slug: 'ecommerce-development',
    title: 'E-Commerce Development',
    tagline: 'Conversion-optimized storefronts engineered to maximize sales and average order value.',
    description: 'Transform casual browsers into loyal customers. We architect high-converting e-commerce experiences on Shopify, WooCommerce, or custom headless checkouts with friction-free payments.',
    features: [
      'Custom Shopify theme development & app setups',
      'WooCommerce stores tailored for complex product catalogues',
      'Custom headless e-commerce checkouts for maximum speed',
      'Multi-currency payment gateways (Stripe, PayPal, Apple Pay)',
      'Automated inventory synchronization, shipping, and tax compliance'
    ],
    technologies: ['Shopify Liquid', 'WooCommerce', 'Stripe', 'PayPal', 'Next.js Commerce'],
    iconName: 'ShoppingBag',
    deliverables: [
      'Fully operational online storefront with payment processing',
      'Cart abandonment recovery mechanisms',
      'Mobile checkout optimization with 1-click pay',
      'Product catalog seeding and automated tax setup'
    ],
    highlight: 'Conversion-Focused'
  },
  {
    id: 'cms-dev',
    slug: 'cms-development',
    title: 'CMS Development',
    tagline: 'Empowering your marketing team with effortless, flexible content management.',
    description: 'Take full control of your content without calling a developer for every paragraph change. We craft bespoke CMS implementations across WordPress, Shopify, Wix, Squarespace, and HubSpot.',
    features: [
      'Custom WordPress theme & plugin development (no bloated page builders)',
      'HubSpot CMS setup tailored for inbound lead generation',
      'Shopify & Wix customized for high-end boutique branding',
      'Squarespace refinement for sleek creative portfolios',
      'Intuitive visual editing with locked-down typography styles'
    ],
    technologies: ['WordPress', 'Shopify', 'Wix', 'Squarespace', 'HubSpot CMS', 'PHP'],
    iconName: 'Layers',
    deliverables: [
      'Customized admin dashboard tailored to your workflow',
      'Pre-built modular page blocks for marketing teams',
      'Security hardening against spam and automated attacks',
      'Video walk-through & team training documentation'
    ],
    highlight: 'Easy Content Control'
  },
  {
    id: 'uiux-design',
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    tagline: 'Modern, research-backed interfaces that balance visual elegance with revenue focus.',
    description: 'Great software starts with empathetic design. We produce high-fidelity Figma prototypes, design systems, and responsive wireframes that guide users effortlessly from curiosity to checkout.',
    features: [
      'Modern, uncluttered interfaces inspired by world-class SaaS leaders',
      'Mobile-first responsive layouts with thumb-friendly navigation',
      'Conversion-focused layouts engineered through UX heuristics',
      'Complete atomic design systems with tokens, typography, and states',
      'Accessibility adherence passing WCAG AA standards'
    ],
    technologies: ['Figma', 'Design Systems', 'Prototyping', 'WCAG AA', 'Design Tokens'],
    iconName: 'Palette',
    deliverables: [
      'Complete interactive Figma design file with developer specs',
      'Modular design tokens for colors, typography, and spacing',
      'Component state matrix (hover, focus, active, loading)',
      'Usability testing reports and conversion checkpoints'
    ],
    highlight: 'User-Centric Excellence'
  },
  {
    id: 'seo-optimization',
    slug: 'seo-website-optimization',
    title: 'SEO & Website Optimization',
    tagline: 'Dominate search rankings and deliver instant page loads that Google loves.',
    description: 'Build organic visibility that compounds over time. We conduct in-depth technical audits, implement structured JSON-LD schemas, and eliminate performance bottlenecks to claim top SERP positions.',
    features: [
      'Rigorous technical SEO audits and code health fixes',
      'On-page content optimization and keyword hierarchy alignment',
      'Core Web Vitals acceleration (LCP < 1.2s, CLS < 0.05, INP < 150ms)',
      'Advanced Schema.org structured data (Organization, Services, FAQ)',
      'Dynamic XML sitemaps, robots.txt, and canonical URL mapping'
    ],
    technologies: ['Google Search Console', 'Schema.org', 'Lighthouse', 'PageSpeed Insights', 'Ahrefs'],
    iconName: 'TrendingUp',
    deliverables: [
      'Comprehensive baseline SEO & technical audit report',
      'Core Web Vitals green badge remediation',
      'Structured JSON-LD schema injection',
      'Search Console indexing and ranking baseline verification'
    ],
    highlight: 'Compounding Traffic'
  }
];
