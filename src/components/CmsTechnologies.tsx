import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Layers,
  Sparkles,
  ArrowRight,
  ShoppingBag,
  Zap,
  CheckCircle2,
  Globe,
  Cpu,
  ShieldCheck,
  ExternalLink,
  Code2
} from 'lucide-react';
import { technologiesData } from '../data/technologies';
import { TechnologyItem } from '../types';

interface CmsTechnologiesProps {
  onOpenQuoteModal?: (prefilledContext?: string) => void;
  onSelectCms?: (cmsName: string) => void;
}

type CmsFilterGroup = 'all' | 'headless' | 'ecommerce' | 'enterprise' | 'rapid';

interface CmsPlatformDetail {
  tech: TechnologyItem;
  badge: string;
  speedMetric: string;
  recommendedFor: string;
  typeGroup: CmsFilterGroup[];
  architecture: string;
}

export const CmsTechnologies: React.FC<CmsTechnologiesProps> = ({
  onOpenQuoteModal,
  onSelectCms,
}) => {
  const [activeFilter, setActiveFilter] = useState<CmsFilterGroup>('all');
  const sectionRef = useRef<HTMLElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const userInteractionTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Trigger auto-scroll only when user arrives at this section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Automatic scroll when in view, pausing on user touch
  useEffect(() => {
    if (!isInView || isUserInteracting) return;

    const interval = setInterval(() => {
      const el = mobileScrollRef.current;
      if (!el) return;

      const cardStep = 296; // 280px + 16px gap
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 25) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: cardStep, behavior: 'smooth' });
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [isInView, isUserInteracting]);

  const handleTouchStart = () => {
    setIsUserInteracting(true);
    if (userInteractionTimerRef.current) {
      clearTimeout(userInteractionTimerRef.current);
    }
  };

  const handleTouchEnd = () => {
    if (userInteractionTimerRef.current) {
      clearTimeout(userInteractionTimerRef.current);
    }
    userInteractionTimerRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 3500);
  };

  // Filter all CMS category items from technologiesData
  const cmsList: TechnologyItem[] = technologiesData.filter(
    (item) => item.category === 'cms'
  );

  // Enriched details for each CMS platform
  const cmsDetails: Record<string, {
    badge: string;
    speedMetric: string;
    recommendedFor: string;
    typeGroup: CmsFilterGroup[];
    architecture: string;
  }> = {
    'WordPress (Headless & Classic)': {
      badge: 'WPGraphQL + Next.js',
      speedMetric: '0.4s LCP Headless',
      recommendedFor: 'Publishing, High-Traffic Blogs & Enterprise Portals',
      typeGroup: ['headless', 'enterprise'],
      architecture: 'Decoupled WPGraphQL API with Next.js 15 ISR frontend'
    },
    'Shopify & Shopify Plus': {
      badge: 'Storefront GraphQL',
      speedMetric: '99.99% Uptime',
      recommendedFor: 'High-Volume DTC, Multi-Currency & Flash Sales',
      typeGroup: ['ecommerce', 'headless'],
      architecture: 'Shopify Plus Storefront API with Hydrogen / Next.js'
    },
    'Sanity.io': {
      badge: 'Real-Time Composable',
      speedMetric: 'Sub-30ms Query SLA',
      recommendedFor: 'Omnichannel Publishing & Live Collaboration',
      typeGroup: ['headless', 'enterprise'],
      architecture: 'GROQ / GraphQL with live content visual editing'
    },
    'Strapi': {
      badge: 'Open-Source Node.js',
      speedMetric: '100% Self-Hosted',
      recommendedFor: 'Custom Data Models, Private Clouds & Mobile Apps',
      typeGroup: ['headless'],
      architecture: 'Custom REST & GraphQL controllers on PostgreSQL'
    },
    'Webflow': {
      badge: 'Visual-First Hybrid',
      speedMetric: '99+ PageSpeed',
      recommendedFor: 'Marketing Teams, Agencies & Rapid Launch',
      typeGroup: ['rapid'],
      architecture: 'Semantic HTML/CSS export or native Webflow hosting'
    },
    'Contentful': {
      badge: 'Global Composable',
      speedMetric: 'Global Multi-Region',
      recommendedFor: 'Fortune 500 Enterprises & Global Localizations',
      typeGroup: ['headless', 'enterprise'],
      architecture: 'Composable content orchestration across multiple regions'
    },
    'WooCommerce': {
      badge: 'Custom Commerce',
      speedMetric: 'Zero Rev-Share',
      recommendedFor: 'Bespoke Catalogs, Subscriptions & Memberships',
      typeGroup: ['ecommerce'],
      architecture: 'High-performance Redis caching with optimized checkout'
    },
    'Payload CMS': {
      badge: 'Next.js & TypeScript Native',
      speedMetric: 'Zero Serverless Cold Starts',
      recommendedFor: 'Full-Stack Next.js Monorepos & Developer Teams',
      typeGroup: ['headless'],
      architecture: 'Direct database integration within Next.js App Router'
    },
    'Ghost CMS': {
      badge: 'Sub-Second Publishing',
      speedMetric: '0.28s TTFB',
      recommendedFor: 'Modern Journalism, Newsletters & Creators',
      typeGroup: ['headless', 'rapid'],
      architecture: 'Lean Node.js engine with integrated Stripe subscriptions'
    },
    'Drupal': {
      badge: 'Decoupled JSON:API',
      speedMetric: 'High Security Standard',
      recommendedFor: 'Government, Universities & Complex Taxonomies',
      typeGroup: ['enterprise'],
      architecture: 'Decoupled JSON:API with granular RBAC permissions'
    },
    'Magento / Adobe Commerce': {
      badge: 'Enterprise B2B',
      speedMetric: 'ERP & SAP Linked',
      recommendedFor: 'Multi-Store B2B, Heavy Wholesale & Complex Pricing',
      typeGroup: ['ecommerce', 'enterprise'],
      architecture: 'Adobe Commerce Cloud with headless PWA Studio'
    },
    'Wix Studio': {
      badge: 'Visual Modern CMS',
      speedMetric: 'Fast Turnaround',
      recommendedFor: 'Creative Studios & Fast-Moving Marketing Pages',
      typeGroup: ['rapid'],
      architecture: 'Cloud-managed visual workflows with custom JS hooks'
    },
    'Squarespace': {
      badge: 'Curated Design System',
      speedMetric: 'Turnkey Launch',
      recommendedFor: 'Design Agencies, Boutiques & Hospitality',
      typeGroup: ['rapid'],
      architecture: 'Managed hosting with custom CSS & Developer Platform'
    },
    'HubSpot CMS': {
      badge: 'CRM Inbound Engine',
      speedMetric: 'Automated Lead Sync',
      recommendedFor: 'B2B Sales Funnels & Lead Generation Engines',
      typeGroup: ['enterprise', 'rapid'],
      architecture: 'HubL templates with automatic HubSpot CRM contact sync'
    }
  };

  const platforms: CmsPlatformDetail[] = cmsList.map((item) => {
    const detail = cmsDetails[item.name] || {
      badge: 'Modern CMS',
      speedMetric: '99+ PageSpeed',
      recommendedFor: item.popularFor,
      typeGroup: ['headless'] as CmsFilterGroup[],
      architecture: item.description,
    };
    return {
      tech: item,
      ...detail,
    };
  });

  const filteredPlatforms = activeFilter === 'all'
    ? platforms
    : platforms.filter((p) => p.typeGroup.includes(activeFilter));

  const filterTabs: { key: CmsFilterGroup; label: string; count: number }[] = [
    { key: 'all', label: 'All CMS Platforms', count: platforms.length },
    { key: 'headless', label: 'Headless & Decoupled', count: platforms.filter((p) => p.typeGroup.includes('headless')).length },
    { key: 'ecommerce', label: 'E-Commerce Storefronts', count: platforms.filter((p) => p.typeGroup.includes('ecommerce')).length },
    { key: 'enterprise', label: 'Enterprise Platforms', count: platforms.filter((p) => p.typeGroup.includes('enterprise')).length },
    { key: 'rapid', label: 'Rapid Launch & Visual', count: platforms.filter((p) => p.typeGroup.includes('rapid')).length },
  ];

  return (
    <section
      ref={sectionRef}
      id="cms-platforms"
      className="py-16 sm:py-20 bg-gradient-to-b from-white via-[#FAFBFD] to-white border-b border-slate-200/90 text-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF1E6] text-[#A8631B] border border-[#F2BC7B]/50 mb-3.5">
              <Layers className="w-3.5 h-3.5 text-[#D98E3A]" />
              <span>Full CMS &amp; Commerce Arsenal</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111622] tracking-tight">
              All CMS &amp; E-Commerce Platforms Engineered for Speed
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Whether you need a decoupled headless WordPress with Next.js, a high-volume Shopify Plus store, an omnichannel Sanity CMS, or a visual Webflow launch, our engineers deliver zero-bloat, secure implementations.
            </p>
          </div>

          {/* Key Metric Highlights */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-center">
              <div className="text-xs text-slate-500 font-medium">Platforms Supported</div>
              <div className="text-xl font-mono font-black text-[#2D2575]">14+ Ecosystems</div>
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-center">
              <div className="text-xs text-slate-500 font-medium">Headless LCP</div>
              <div className="text-xl font-mono font-black text-emerald-600">&lt; 0.45s Edge</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200 mb-6 self-start">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveFilter(tab.key)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeFilter === tab.key
                  ? 'bg-[#2D2575] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#2D2575] hover:bg-white/60'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                  activeFilter === tab.key
                    ? 'bg-[#D98E3A] text-white font-bold'
                    : 'bg-slate-200/80 text-slate-600'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile Interaction Status Note (No Buttons) */}
        <div className="md:hidden flex items-center justify-between text-[11px] text-slate-500 mb-2 px-1">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-semibold text-[#2D2575]">
              {isUserInteracting ? 'Manual Swipe Active' : 'Automatic Scroll'}
            </span>
            <span className="text-slate-400">• Left to Right</span>
          </div>
          <span className="text-[10px] text-slate-400">Swipe freely</span>
        </div>

        {/* 1. MOBILE AUTO + USER HORIZONTAL SCROLL (LEFT TO RIGHT, NO BUTTONS, NOT ENDLESS) */}
        <div className="block md:hidden relative -mx-4 sm:-mx-6 overflow-hidden py-1 mb-4">
          <div
            ref={mobileScrollRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleTouchStart}
            onMouseUp={handleTouchEnd}
            className="flex gap-4 overflow-x-auto pb-4 pt-1 px-4 scroll-smooth snap-x snap-mandatory select-none scrollbar-none"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {filteredPlatforms.map((platform) => (
              <div
                key={`mob-${platform.tech.name}`}
                className="w-[280px] shrink-0 snap-start group relative flex flex-col justify-between p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#2D2575]/40 text-left"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-2.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-white font-mono font-black text-xs shadow-2xs bg-gradient-to-br ${
                        platform.tech.badgeColor || 'from-[#2D2575] to-[#D98E3A]'
                      }`}
                    >
                      {platform.tech.name.substring(0, 2).toUpperCase()}
                    </div>

                    <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      {platform.speedMetric}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#111622] leading-snug truncate">
                    {platform.tech.name}
                  </h3>

                  <div className="mt-1 inline-block text-[10px] font-semibold text-[#A8631B] bg-[#FAF1E6] px-2 py-0.5 rounded-md border border-[#F2BC7B]/40">
                    {platform.badge}
                  </div>

                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {platform.tech.description}
                  </p>

                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-start gap-1 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700 shrink-0">Best for:</span>
                    <span className="text-slate-600 truncate">{platform.recommendedFor}</span>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => {
                      if (onOpenQuoteModal) {
                        onOpenQuoteModal(`CMS Platform: ${platform.tech.name}`);
                      } else if (onSelectCms) {
                        onSelectCms(platform.tech.name);
                      }
                    }}
                    className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl text-xs font-bold text-[#2D2575] bg-[#EEEDFA]/70 hover:bg-[#2D2575] hover:text-white transition-all cursor-pointer"
                  >
                    <span>Request Spec</span>
                    <ArrowRight className="w-3 h-3 text-[#D98E3A]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. DESKTOP & TABLET GRID LAYOUT */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 text-left">
          {filteredPlatforms.map(({ tech, badge, speedMetric, recommendedFor }) => (
            <div
              key={`desk-${tech.name}`}
              className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-[#2D2575]/40 hover:shadow-lg hover:shadow-[#2D2575]/5 transition-all duration-300 text-left"
            >
              <div>
                {/* Card Header: Platform Symbol + Speed Metric Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-mono font-black text-sm shadow-2xs bg-gradient-to-br ${
                      tech.badgeColor || 'from-[#2D2575] to-[#D98E3A]'
                    }`}
                  >
                    {tech.name.substring(0, 2).toUpperCase()}
                  </div>

                  <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    {speedMetric}
                  </span>
                </div>

                {/* Title & Architecture Tag */}
                <h3 className="text-base font-bold text-[#111622] group-hover:text-[#2D2575] transition-colors leading-snug">
                  {tech.name}
                </h3>

                <div className="mt-1 inline-block text-[11px] font-semibold text-[#A8631B] bg-[#FAF1E6] px-2 py-0.5 rounded-md border border-[#F2BC7B]/40">
                  {badge}
                </div>

                {/* Description */}
                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                  {tech.description}
                </p>

                {/* Recommended For */}
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-start gap-1.5 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700 shrink-0">Best for:</span>
                  <span className="text-slate-600 font-medium">{recommendedFor}</span>
                </div>
              </div>

              {/* Card Action Button */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenQuoteModal) {
                      onOpenQuoteModal(`CMS Platform: ${tech.name}`);
                    } else if (onSelectCms) {
                      onSelectCms(tech.name);
                    }
                  }}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-[#2D2575] bg-[#EEEDFA]/70 hover:bg-[#2D2575] hover:text-white transition-all cursor-pointer group/btn"
                >
                  <span>Request {tech.name.split(' ')[0]} Spec</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Headless CMS vs Traditional Monolith Comparison Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#111622] to-[#1E2538] text-white border border-slate-800 shadow-xl text-left">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#2D2575] text-[#F2BC7B] text-xs font-bold font-mono mb-2">
                <Zap className="w-3.5 h-3.5 text-[#D98E3A]" />
                <span>The Decoupled Headless Advantage</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">
                Decouple Content from Frontend: 10x Speed, 0 Plugin Vulnerabilities
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl font-normal">
                Traditional monolith CMS architectures suffer from heavy server rendering, bulky database plugins, and security patching nightmares. By decoupling your CMS into a Next.js 15 edge frontend with static ISR caching, your marketing editors keep their familiar dashboard while visitors experience instant sub-400ms page loads.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 99+ Core Web Vitals Pass
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Zero WordPress PHP Execution at Runtime
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Infinite Scalability Under Flash Traffic
                </span>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <button
                type="button"
                onClick={() => onOpenQuoteModal && onOpenQuoteModal('Headless CMS Migration')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#D98E3A] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#D98E3A] shadow-md shadow-[#D98E3A]/20 transition-all cursor-pointer"
              >
                <span>Migrate to Headless CMS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-[11px] text-slate-400 text-center font-mono">
                Free Architecture Audit &amp; Cost Analysis
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
