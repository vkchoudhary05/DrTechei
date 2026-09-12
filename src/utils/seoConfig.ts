export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogType: string;
  structuredData: Record<string, any>;
}

export const SEO_DATA: Record<string, PageSEO> = {
  home: {
    title: 'DrTechei | Executive Studio | Global Tech Partner | Software & Web Engineering (Europe, Australia, Canada, Pan-India)',
    description: 'DrTechei Executive Studio is your dedicated global tech partner for Full-Cycle Engineering & Strategic Solutions. We engineer high-performance Next.js 15 apps, React 19 frontends, custom APIs & headless CMS for ambitious businesses in Europe (UK, Ireland, Germany, Finland), Australia, Canada, and Pan-India.',
    keywords: 'Executive Studio, Full-Cycle Engineering & Strategic Solutions, executive tech studio, strategic engineering solutions, tech partner, technology partner, software development partner, dedicated tech partner, IT tech partner, web development partner, offshore tech partner, tech partner Europe, tech partner UK, tech partner Ireland, tech partner Germany, tech partner Australia, tech partner Sydney, tech partner Melbourne, tech partner Canada, tech partner Toronto, tech partner Vancouver, tech partner India, tech partner Delhi NCR, tech partner Bangalore Bengaluru, tech partner Mumbai, tech partner Hyderabad, tech partner Pune, tech partner Chennai, pan India IT partner, Next.js tech partner, custom software development',
    canonical: 'https://drtechei.com/',
    ogTitle: 'DrTechei Executive Studio | Full-Cycle Engineering & Strategic Solutions',
    ogDescription: 'Technology That Builds Your Business. Hire a dedicated tech partner delivering 99+ PageSpeed Next.js applications with 100% source code ownership.',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'DrTechei Global Tech Partner & Engineering Solutions',
      url: 'https://drtechei.com',
      logo: 'https://drtechei.com/logo.png',
      description: 'Dedicated technology partner providing Next.js web application development, custom software engineering, cloud architecture, and technical SEO across Europe, Australia, Canada, and all India.',
      priceRange: '$$$$',
      telephone: '+1-800-540-8324',
      email: 'hello@drtechei.com',
      areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Ireland' },
        { '@type': 'Country', name: 'Germany' },
        { '@type': 'Country', name: 'Finland' },
        { '@type': 'Country', name: 'Australia' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'United States' }
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Tech Partnership Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Dedicated Tech Partner Squad',
              description: 'Full-stack engineering teams tailored to European, Australian, Canadian, and Pan-Indian business workflows.'
            }
          }
        ]
      }
    }
  },

  services: {
    title: 'Full-Cycle Engineering & Strategic Solutions | Executive Studio | DrTechei Tech Partner',
    description: 'Explore Full-Cycle Engineering & Strategic Solutions from DrTechei Executive Studio: Next.js 15 web apps, React 19 UI, Headless CMS, Node.js APIs, and Core Web Vitals optimization across Europe, Australia, Canada, and All India.',
    keywords: 'Full-Cycle Engineering & Strategic Solutions, Executive Studio, tech partner services, web development partner, software development services, Next.js agency, React development company, headless CMS Shopify Plus WordPress, technical SEO partner, dedicated engineering team, Europe Australia Canada India software services',
    canonical: 'https://drtechei.com/#/services',
    ogTitle: 'Full-Cycle Engineering & Strategic Solutions | DrTechei Executive Studio',
    ogDescription: 'End-to-end engineering capabilities delivered by certified senior developers with guaranteed SLA and 100% intellectual property transfer.',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Software Engineering & Dedicated Tech Partnership',
      provider: {
        '@type': 'Organization',
        name: 'DrTechei IT Solutions'
      },
      areaServed: ['India', 'Europe', 'Australia', 'Canada', 'United States'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Engineering Solutions',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Next.js 15 Web Applications' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom React Frontend Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Headless CMS & E-Commerce Engineering' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Core Web Vitals & Technical SEO' } }
        ]
      }
    }
  },

  portfolio: {
    title: 'Case Studies & Delivered Work | Proven Tech Partner for Global Startups & Enterprises',
    description: 'Browse verified case studies and production websites delivered by DrTechei. See how our tech partnership drove 99+ PageSpeed scores, 3x conversion boosts, and sub-second load times for clients in Europe, Australia, Canada, and India.',
    keywords: 'tech partner portfolio, web development case studies, Next.js examples, high speed websites, digital engineering proof, client work, offshore tech partner results',
    canonical: 'https://drtechei.com/#/portfolio',
    ogTitle: 'Client Work & Production Portfolio | DrTechei Tech Partner',
    ogDescription: 'Live production case studies demonstrating sub-second load times, headless architectures, and enterprise security.',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'DrTechei Portfolio & Case Studies',
      description: 'Production web applications and headless platforms engineered by DrTechei for global brands.'
    }
  },

  technologies: {
    title: 'Modern Tech Stack | Next.js 15, React 19, Node.js & Cloud | DrTechei Tech Partner',
    description: 'Inspect the battle-tested engineering stack powered by DrTechei: Next.js 15 App Router, React 19, TypeScript, Node.js, Tailwind CSS, PostgreSQL, Redis, Sanity, Shopify Plus, and AWS/Vercel Edge.',
    keywords: 'tech partner stack, Next.js 15 development, React 19 developers, Node.js microservices, TypeScript agency, Shopify Plus partner, WordPress headless GraphQL, AWS edge computing',
    canonical: 'https://drtechei.com/#/technologies',
    ogTitle: 'Modern Technology Stack & Edge Architecture | DrTechei',
    ogDescription: 'Strict zero-bloat tech stack designed for sub-second speeds, flawless Core Web Vitals, and effortless scaling.',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Technology Stack & Architectural Standards',
      about: 'Modern Full-Stack Web Development, Next.js 15, React, Node.js'
    }
  },

  'why-us': {
    title: 'Why Choose DrTechei | Trusted Dedicated Tech Partner Across Europe, Australia, Canada & India',
    description: 'Why fast-moving companies choose DrTechei as their long-term tech partner: 100% source code ownership, guaranteed 95+ PageSpeed, senior-only engineers, time-zone aligned sprints, and zero recurring vendor lock-in.',
    keywords: 'why choose tech partner, best technology partner, offshore development advantages, reliable software agency, 100 code ownership, Europe Australia Canada India IT partner',
    canonical: 'https://drtechei.com/#/why-us',
    ogTitle: 'Why Choose DrTechei as Your Technology Partner',
    ogDescription: 'We build technology that builds your business. Transparent sprints, no junior handoffs, and guaranteed performance benchmarks.',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'Why Choose DrTechei as Your Technology Partner'
    }
  },

  process: {
    title: 'Our Engineering Process | Agile Sprints & Transparent Tech Partnership Roadmap',
    description: 'Learn how DrTechei collaborates with international and pan-Indian clients: Discovery & Architecture, Sprint Milestones, Automated CI/CD Testing, Core Web Vitals Audits, and Seamless Production Launch.',
    keywords: 'software development process, agile sprints tech partner, offshore workflow, milestone based development, code quality audits, web deployment checklist',
    canonical: 'https://drtechei.com/#/process',
    ogTitle: 'Agile Engineering Process & Delivery Methodology | DrTechei',
    ogDescription: 'Step-by-step milestone delivery with bi-weekly sprint demos, staging previews, and automated quality gates.',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How DrTechei Delivers High-Performance Web Applications',
      step: [
        { '@type': 'HowToStep', name: 'Discovery & System Architecture' },
        { '@type': 'HowToStep', name: 'Agile Development Sprints' },
        { '@type': 'HowToStep', name: 'Core Web Vitals & Security Hardening' },
        { '@type': 'HowToStep', name: 'Zero-Downtime Deployment & Handover' }
      ]
    }
  },

  about: {
    title: 'About DrTechei | Global Tech Partner with Delivery Hubs in Europe, Australia, Canada & Pan-India',
    description: 'Founded with a dual presence in India and Europe, DrTechei is an engineering-first technology partner serving ambitious startups, funded scaleups, and enterprises worldwide.',
    keywords: 'about DrTechei, global software development firm, tech partner team, tech company Delhi India, tech partner Europe UK Ireland Finland, tech partner Australia Sydney, tech partner Canada Toronto',
    canonical: 'https://drtechei.com/#/about',
    ogTitle: 'About DrTechei IT Solutions | Engineering-First Global Tech Partner',
    ogDescription: 'Meet the engineering leadership behind DrTechei. Dedicated to crafting software that scales effortlessly.',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'DrTechei IT Solutions',
      foundingLocation: 'India & Finland',
      slogan: 'Technology That Builds Your Business',
      sameAs: [
        'https://linkedin.com/company/drtechei',
        'https://github.com/drtechei'
      ]
    }
  },

  testimonials: {
    title: 'Client Reviews & Endorsements | 4.95/5 Rated Global Tech Partner | DrTechei',
    description: 'Read authentic client testimonials and verified reviews from CTOs, founders, and product directors who partnered with DrTechei across the UK, Europe, Australia, Canada, and Pan-India.',
    keywords: 'tech partner reviews, DrTechei client feedback, software agency ratings, verified customer testimonials, clutch ratings tech partner',
    canonical: 'https://drtechei.com/#/testimonials',
    ogTitle: 'Client Reviews & Ratings | 4.95/5 Star Rated Tech Partner',
    ogDescription: 'Read why 48+ international businesses trust DrTechei as their core technology engineering partner.',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'AggregateRating',
      ratingValue: '4.95',
      bestRating: '5',
      ratingCount: '48',
      reviewCount: '48'
    }
  },

  faq: {
    title: 'Tech Partner FAQs | Hiring Dedicated Developers, Timezones, IP Rights & Pricing',
    description: 'Frequently asked questions about hiring DrTechei as your technology partner: timezone overlap in Europe, Australia, Canada, contract agreements, 100% IP ownership, sprint billing, and maintenance.',
    keywords: 'tech partner FAQ, hire dedicated developers India, outsourcing software questions, timezone overlap Australia Europe Canada, software development pricing, code ownership',
    canonical: 'https://drtechei.com/#/faq',
    ogTitle: 'Frequently Asked Questions | DrTechei Technology Partner',
    ogDescription: 'Transparent answers on billing models, timezone alignments, technology stacks, and guarantees.',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does DrTechei handle timezone overlaps with clients in Europe, Australia, and Canada?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We maintain dedicated overlapping shifts for all global hubs. For Europe (UK, Ireland, Germany), our squads overlap 4-6 business hours daily. For Australia (Sydney, Melbourne), we begin early for morning syncs. For North America (Canada/USA), we provide late afternoon EST alignment.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you cover clients across all of India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes! DrTechei provides comprehensive Pan-India technical coverage including Delhi NCR, Bengaluru, Mumbai, Hyderabad, Pune, Chennai, Kolkata, Ahmedabad, and Tier 2 growth hubs.'
          }
        },
        {
          '@type': 'Question',
          name: 'Why should I choose DrTechei as my primary tech partner?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Unlike generic staffing agencies, DrTechei acts as a full-stack engineering co-creator. We guarantee 95+ Core Web Vitals, provide senior developers only, offer 100% intellectual property assignment, and deliver robust Next.js and cloud architectures.'
          }
        }
      ]
    }
  },

  contact: {
    title: 'Hire Your Dedicated Tech Partner | Free Architecture Review & Quotation | DrTechei',
    description: 'Ready to build or accelerate your web application? Connect with DrTechei senior architects. Get a free technical scoping session, architecture review, and transparent quote within 24 hours.',
    keywords: 'hire tech partner, hire dedicated developers, contact software agency, free architecture review, request project quote, tech partner Europe Australia Canada India, schedule technical consultation',
    canonical: 'https://drtechei.com/#/contact',
    ogTitle: 'Contact DrTechei | Hire Your Dedicated Tech Partner Today',
    ogDescription: 'Schedule a discovery call with our engineering leads. Fast 24-hour turnaround with detailed project estimates and roadmaps.',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Hire DrTechei Tech Partner',
      description: 'Contact DrTechei IT Solutions for software engineering, web development, and dedicated tech partnership.'
    }
  },

  'technology-partner-finland': {
    title: 'Technology Partner Finland | Dedicated Software Development & Tech Squads (Helsinki, Espoo)',
    description: 'Dedicated technology partner for Finnish companies in Helsinki, Espoo, and Tampere. Certified Next.js 15 architects, 100% GDPR compliance, full EET timezone alignment, and transparent Euro billing at 60% lower costs than domestic consultancies.',
    keywords: 'technology partner finland, software development partner finland, dedicated software team helsinki, hire nextjs developers espoo, offshore tech partner nordic, gdpr compliant web engineering, it consulting finland, tampere software agency, oulu software company',
    canonical: 'https://drtechei.com/technology-partner-finland',
    ogTitle: 'Technology Partner Finland | DrTechei IT Solutions',
    ogDescription: 'Nordic quality engineering with full EET timezone alignment, GDPR compliance, and 100% source code ownership.',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'DrTechei Technology Partner Finland',
      url: 'https://drtechei.com/technology-partner-finland',
      description: 'Senior dedicated Next.js, React, and cloud engineering squads for Finnish startups and enterprises.',
      telephone: '+1-800-540-8324',
      email: 'hello@drtechei.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Mannerheimintie 12 B, Kamppi',
        addressLocality: 'Helsinki',
        postalCode: '00100',
        addressCountry: 'FI'
      },
      areaServed: [
        { '@type': 'Country', name: 'Finland' },
        { '@type': 'City', name: 'Helsinki' },
        { '@type': 'City', name: 'Espoo' },
        { '@type': 'City', name: 'Tampere' },
        { '@type': 'City', name: 'Vantaa' },
        { '@type': 'City', name: 'Oulu' },
        { '@type': 'City', name: 'Turku' }
      ],
      priceRange: '€€',
      currenciesAccepted: 'EUR',
      paymentAccepted: 'SEPA, Bank Transfer, Credit Card',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Finland Tech Partnership Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Dedicated Next.js 15 & React Squads for Finland',
              description: 'Senior software engineering squads aligned with EET Helsinki business hours and EU GDPR data privacy regulations.'
            }
          }
        ]
      }
    }
  },

  'technology-partner-ireland': {
    title: 'Technology Partner Ireland | Dedicated Software Engineering & Startup Squads (Dublin, Cork)',
    description: 'Silicon Docks standard technology partner for Irish startups, scaleups, and enterprises in Dublin, Cork, and Galway. Fast squad deployment, GMT/IST alignment, and 100% IP code handover.',
    keywords: 'technology partner ireland, software development partner dublin, hire dedicated developers ireland, tech partner startups dublin, nextjs react development ireland, silicon docks tech partner, cork software development, galway tech agency',
    canonical: 'https://drtechei.com/technology-partner-ireland',
    ogTitle: 'Technology Partner Ireland | DrTechei IT Solutions',
    ogDescription: 'Scale your engineering capacity in Dublin without recruitment bottlenecks. Top 1% senior Next.js & React squads.',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'DrTechei Technology Partner Ireland',
      url: 'https://drtechei.com/technology-partner-ireland',
      description: 'Silicon Docks standard software engineering partner for Irish startups and enterprise scaleups.',
      telephone: '+1-800-540-8324',
      email: 'hello@drtechei.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Silicon Docks, 2 Grand Canal Square, Grand Canal Dock',
        addressLocality: 'Dublin',
        postalCode: 'D02 A342',
        addressCountry: 'IE'
      },
      areaServed: [
        { '@type': 'Country', name: 'Ireland' },
        { '@type': 'City', name: 'Dublin' },
        { '@type': 'City', name: 'Cork' },
        { '@type': 'City', name: 'Galway' },
        { '@type': 'City', name: 'Limerick' },
        { '@type': 'City', name: 'Waterford' }
      ],
      priceRange: '€€',
      currenciesAccepted: 'EUR, GBP',
      paymentAccepted: 'SEPA, Bank Transfer, Credit Card',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Ireland Tech Partnership Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Startup & Enterprise Squads for Ireland',
              description: 'Full-stack engineering teams synchronized with Dublin GMT/Irish Standard Time and compliant with Irish legal standards.'
            }
          }
        ]
      }
    }
  },

  'technology-partner-india': {
    title: 'Technology Partner India | Elite Senior Full-Stack Engineering & Offshore Hub (Delhi NCR, Bengaluru)',
    description: 'Premier technology partner in India for global startups and domestic enterprises. Dedicated Next.js 15 squads, top 1% senior talent, and 99+ Core Web Vitals guarantees across Delhi NCR, Bengaluru, and Mumbai.',
    keywords: 'technology partner india, software development partner india, hire dedicated development team india, offshore tech partner india, nextjs engineering partner india, top IT company india, delhi ncr tech agency, bangalore software partner, dehradun it company',
    canonical: 'https://drtechei.com/technology-partner-india',
    ogTitle: 'Technology Partner India | DrTechei IT Solutions',
    ogDescription: 'India’s top 1% senior engineering partner for global scale. Next.js 15, React 19, and cloud architectures.',
    ogType: 'website',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'DrTechei Technology Partner India',
      url: 'https://drtechei.com/technology-partner-india',
      description: 'Elite senior software engineering partner based in India serving global and domestic innovators.',
      telephone: '+1-800-540-8324',
      email: 'hello@drtechei.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Level 6, Vandhna Building, Tolstoy Marg, Connaught Place',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        postalCode: '110001',
        addressCountry: 'IN'
      },
      areaServed: [
        { '@type': 'Country', name: 'India' },
        { '@type': 'City', name: 'Delhi NCR' },
        { '@type': 'City', name: 'New Delhi' },
        { '@type': 'City', name: 'Dehradun' },
        { '@type': 'City', name: 'Mumbai' },
        { '@type': 'City', name: 'Bengaluru' },
        { '@type': 'City', name: 'Hyderabad' },
        { '@type': 'City', name: 'Chennai' },
        { '@type': 'City', name: 'Kolkata' },
        { '@type': 'City', name: 'Pune' },
        { '@type': 'City', name: 'Ahmedabad' }
      ],
      priceRange: '$$',
      currenciesAccepted: 'INR, USD, EUR',
      paymentAccepted: 'NEFT, IMPS, RTGS, Wire Transfer, Credit Card',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'India Tech Partnership Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Dedicated Full-Stack Next.js Squads',
              description: 'Senior full-stack developers delivering sub-second performance web applications with 100% source code ownership.'
            }
          }
        ]
      }
    }
  }
};
