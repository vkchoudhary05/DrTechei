import { PortfolioProject } from '../types';

export const portfolioData: PortfolioProject[] = [
  {
    id: 'project-1',
    title: 'Apex Global Financial Advisory',
    client: 'Apex Financial Corp',
    category: 'websites',
    industry: 'Financial & Corporate Consulting',
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    description: 'A high-authority corporate web platform with dynamic client portal, interactive ROI calculators, and enterprise lead capture.',
    longDescription: 'Apex Financial required a digital brand transformation to transition from legacy, slow-loading corporate brochures into a conversion-oriented client portal. DrTechei engineered a sub-second Next.js platform with custom financial calculators, compliant lead funnels, and enterprise encryption.',
    results: [
      { metric: '99/100', label: 'Lighthouse Performance Score' },
      { metric: '+210%', label: 'Qualified Advisory Inquiries' },
      { metric: '0.8s', label: 'Average Page Load Time' }
    ],
    challenge: 'The legacy website was suffering from slow TTFB (>3.5s), poor mobile layout shifts, and outdated security standards, hurting their high-net-worth client acquisition.',
    solution: 'Designed and deployed a responsive Next.js application with server-side rendering, integrated CRM synchronization, and strict WCAG AA accessibility compliance.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://apex-finance-example.drtechei.com',
    featured: true
  },
  {
    id: 'project-2',
    title: 'Lumina Luxury Living & E-Commerce',
    client: 'Lumina Home & Apparel',
    category: 'ecommerce',
    industry: 'Retail & Premium E-Commerce',
    technologies: ['Shopify Liquid', 'Headless React', 'Stripe', 'Tailwind CSS'],
    description: 'A bespoke multi-currency lifestyle storefront with lightning 1-click checkout, visual size guide, and real-time inventory synchronization.',
    longDescription: 'Lumina is an upscale lifestyle brand catering to international buyers. DrTechei overhauled their digital flagship with a custom headless checkout architecture, smart cross-sell product bundles, and frictionless Stripe & Apple Pay payment flows.',
    results: [
      { metric: '+78%', label: 'Mobile Conversion Rate' },
      { metric: '+34%', label: 'Average Order Value' },
      { metric: '-42%', label: 'Cart Abandonment Drop' }
    ],
    challenge: 'High drop-offs at checkout due to lack of localized currencies, clunky payment modals, and sluggish image loading on mobile devices.',
    solution: 'Engineered an ultra-fast headless React catalogue with dynamic CDN-cached image delivery, real-time inventory alerts, and one-tap checkout.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://lumina-store-example.drtechei.com',
    featured: true
  },
  {
    id: 'project-3',
    title: 'NovaCare Multi-Specialty Health Clinic',
    client: 'NovaCare Health Network',
    category: 'websites',
    industry: 'Healthcare & Telemedicine',
    technologies: ['React.js', 'Node.js', 'Express', 'Tailwind CSS', 'PostgreSQL'],
    description: 'Patient-first healthcare web portal with secure doctor booking, insurance verification, and HIPAA-compliant symptom intake.',
    longDescription: 'NovaCare wanted to reduce clinic call-center volume and streamline patient bookings. DrTechei built an accessible, trustworthy digital clinic hub featuring real-time doctor availability calendars, automated SMS reminders, and telemedicine portal links.',
    results: [
      { metric: '14,000+', label: 'Monthly Online Bookings' },
      { metric: '-60%', label: 'Reduction in Phone Wait Time' },
      { metric: '100%', label: 'HIPAA UX Compliance' }
    ],
    challenge: 'Patients were overwhelmed by complex multi-step forms and lacked clarity on real-time doctor scheduling.',
    solution: 'Designed an ultra-clean 3-step appointment wizard with instant physician matching and automated calendar sync.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://novacare-health-example.drtechei.com',
    featured: false
  },
  {
    id: 'project-4',
    title: 'Bistro Veloce & Craft Culinary Bar',
    client: 'Veloce Hospitality Group',
    category: 'cms',
    industry: 'Hospitality & Fine Dining',
    technologies: ['WordPress VIP', 'Tailwind CSS', 'OpenTable API', 'Cloudinary'],
    description: 'An atmospheric, sensory digital restaurant experience with interactive seasonal menus, wine pairings, and instant table reservations.',
    longDescription: 'For this Michelin-recognized dining establishment, DrTechei delivered a lavish yet fast digital menu platform that lets kitchen staff update seasonal dishes, daily specials, and private tasting events within seconds.',
    results: [
      { metric: '+125%', label: 'Online Table Reservations' },
      { metric: '0.6s', label: 'Menu Load Speed' },
      { metric: '94%', label: 'Mobile Visitor Satisfaction' }
    ],
    challenge: 'The restaurant was relying on static PDF menus that caused high mobile bounce rates and search engine blindness.',
    solution: 'Implemented an accessible semantic HTML5 digital menu with allergen filters, high-resolution optimized food photography, and direct OpenTable integration.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://bistro-veloce-example.drtechei.com',
    featured: false
  },
  {
    id: 'project-5',
    title: 'Stratum Legal Partners & Corporate Law',
    client: 'Stratum LLP',
    category: 'websites',
    industry: 'Legal & Professional Services',
    technologies: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'HubSpot CMS'],
    description: 'Authoritative attorney profile directory, legal publication library, and confidential consultation scheduling system.',
    longDescription: 'Stratum LLP required a modern website reflecting their multimillion-dollar corporate litigation pedigree. We built a sophisticated corporate portal with searchable attorney bios, case studies, legal insights, and secure contact gateways.',
    results: [
      { metric: '+85%', label: 'Corporate Client Retainers' },
      { metric: 'Top 3', label: 'Google Search Rankings in Practice Areas' },
      { metric: '100%', label: 'Mobile Responsive Score' }
    ],
    challenge: 'Competitors were dominating regional search queries while Stratum was invisible for high-intent business law terms.',
    solution: 'Crafted structured Schema.org legal service tags, optimized attorney index pages, and established a lightning-fast technical SEO foundation.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://stratum-legal-example.drtechei.com',
    featured: false
  },
  {
    id: 'project-6',
    title: 'Skyline Commercial Real Estate Hub',
    client: 'Skyline Properties Ltd',
    category: 'cms',
    industry: 'Commercial Real Estate',
    technologies: ['WordPress Custom', 'REST API', 'Tailwind CSS', 'Mapbox'],
    description: 'Interactive property portfolio showcasing prime commercial real estate with 3D floor plan viewers and leasing inquiry workflows.',
    longDescription: 'A premier property investment firm needed an intuitive CMS where leasing agents could publish 50+ property specs, video walkthroughs, and tenant specifications without technical assistance.',
    results: [
      { metric: '+140%', label: 'Commercial Leasing Inquiries' },
      { metric: '15 Mins', label: 'Staff Training Time' },
      { metric: '4.9★', label: 'Broker Feedback Rating' }
    ],
    challenge: 'Legacy system required 4 days and a developer ticket just to update lease vacancy statuses.',
    solution: 'Constructed custom WordPress Gutenberg blocks with automated image compression, PDF flyer generators, and interactive leasing status toggles.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://skyline-properties-example.drtechei.com',
    featured: true
  },
  {
    id: 'project-7',
    title: 'CloudPulse Telemetry & SaaS Analytics',
    client: 'CloudPulse Technologies',
    category: 'webapps',
    industry: 'B2B Software & Cloud DevOps',
    technologies: ['React 19', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    description: 'Real-time telemetry and API monitoring dashboard with custom chart visualizers, error threshold alerts, and team workspace management.',
    longDescription: 'An enterprise DevOps startup needed a sleek web application interface to visualize millions of server requests with latency heatmaps and automated anomaly alerts.',
    results: [
      { metric: '10k+', label: 'Active Developer Accounts' },
      { metric: '<100ms', label: 'Chart Render Latency' },
      { metric: '99.99%', label: 'Platform Availability' }
    ],
    challenge: 'Rendering dense telemetry data without freezing the browser thread or causing jank on standard laptops.',
    solution: 'Utilized virtualized data tables, web workers for metric aggregation, and atomic React component architecture.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://cloudpulse-example.drtechei.com',
    featured: true
  }
];
