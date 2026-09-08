import React, { useState } from 'react';
import { PageBreadcrumb } from '../components/PageBreadcrumb';
import { Services } from '../components/Services';
import { FAQSection } from '../components/FAQSection';
import { CTA } from '../components/CTA';
import { useRouter } from '../context/RouterContext';
import { ServiceItem } from '../types';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  CheckCircle2,
  Code2,
  Globe,
  Gauge,
  Cpu,
  Mail,
  PhoneCall,
  Server,
  Database
} from 'lucide-react';

interface ServicesPageProps {
  onOpenQuoteModal: () => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectServiceForContact: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenQuoteModal,
  onSelectService,
  onSelectServiceForContact,
}) => {
  const { navigate } = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'nextjs' | 'react' | 'backend' | 'cms'>('nextjs');

  const capabilities = {
    nextjs: {
      title: 'Next.js 15 Full-Stack Web Applications',
      subtitle: 'Server-Side Rendering (SSR) & Dynamic Edge Caching',
      lcp: '0.4s LCP',
      score: '99',
      features: [
        'Sub-second first-byte latency via global CDN edge',
        'Built-in structured Schema.org microdata & automated OpenGraph',
        'TypeScript enterprise architecture with zero hydration mismatch',
        '100% full source code ownership with no platform lock-in',
      ],
      tag: 'Most Requested',
    },
    react: {
      title: 'Custom React 19 Frontend Engineering',
      subtitle: 'Component-Driven UI/UX & Dynamic Web Applications',
      lcp: '0.5s FCP',
      score: '98',
      features: [
        'Tailwind CSS design systems with dark/light themes',
        'Motion micro-interactions and high-FPS page transitions',
        'Optimistic state management & zero-lag form pipelines',
        'Accessible WCAG AA compliant user experiences',
      ],
      tag: 'Interactive Web',
    },
    backend: {
      title: 'Scalable Node.js & Cloud APIs',
      subtitle: 'Microservices, REST, GraphQL & Relational Databases',
      lcp: '< 25ms Latency',
      score: '100',
      features: [
        'PostgreSQL, Redis & MongoDB robust database architectures',
        'JWT / OAuth secure authentication with role-based access',
        'Horizontal auto-scaling on Google Cloud, AWS or Vercel',
        'Automated health checks, telemetry & error reporting',
      ],
      tag: 'Enterprise Backend',
    },
    cms: {
      title: 'Headless CMS & High-Volume E-Commerce',
      subtitle: 'Decoupled WordPress, Shopify Plus & Modern Content Hubs',
      lcp: 'Instant CDN',
      score: '98',
      features: [
        'Marketing team autonomy without sacrificing web performance',
        'Shopify Plus custom storefronts with instantaneous checkouts',
        'Decoupled architecture protecting backend data stores',
        'Global static asset distribution across 200+ edge locations',
      ],
      tag: 'Content & Sales',
    },
    all: {
      title: 'End-to-End Digital Engineering Suite',
      subtitle: 'Holistic Architecture from Discovery to 24/7 Hypercare',
      lcp: '0.4s Median',
      score: '99',
      features: [
        'Cross-functional senior development teams with direct access',
        'Pre-launch staging environments & automated CI/CD gating',
        'Global engineering centers in India (Delhi), Finland & Ireland',
        'Strict 24/7 client emergency SLAs with dedicated leads',
      ],
      tag: 'Complete Solution',
    },
  };

  const currentCap = capabilities[activeTab];

  const deliverables = [
    {
      title: 'Full Source Code & 100% IP Ownership',
      desc: 'All repositories, design components, and deployment pipelines transferred to your company with zero recurring licensing fees.',
      icon: ShieldCheck,
    },
    {
      title: 'Lighthouse 95+ Performance Guarantee',
      desc: 'Strict performance audits ensuring sub-second LCP, zero CLS, and instant page loads on real-world mobile networks.',
      icon: Zap,
    },
    {
      title: 'Production-Grade TypeScript & Security',
      desc: 'Enterprise coding standards with strict type checking, robust sanitization, and automated CI/CD staging gates.',
      icon: Code2,
    },
    {
      title: 'Built-in Technical SEO & Schema Markup',
      desc: 'Search engine ready architecture featuring semantic HTML5, JSON-LD microdata, sitemaps, and automated OpenGraph tags.',
      icon: Globe,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Header */}
      <PageBreadcrumb currentPage="services" subtitle="Engineering Capabilities & Full-Cycle Solutions" />

      {/* DEDICATED, HIGH-IMPACT SERVICES HUB HERO */}
      <section className="relative py-12 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-[#FAFBFD] border-b border-slate-200/80 overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2D2575]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D98E3A]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Specialized Services Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-7"
            >
              {/* Specialized Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEEDFA] border border-[#D1CDF4] text-xs font-bold text-[#2D2575] uppercase tracking-wider mb-4 shadow-2xs">
                <Globe className="w-3.5 h-3.5 text-[#D98E3A]" />
                <span>DrTechei Capabilities Hub • Web Development Services</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-extrabold text-[#111622] tracking-tight leading-[1.15]">
                Web Development Services Engineered for Scalability
              </h1>

              <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
                From sub-second Next.js 15 web applications to custom React UI frontends, headless CMS migrations, and high-concurrency Node.js APIs, we build digital infrastructure that drives measurable revenue.
              </p>

              {/* Global Delivery Hubs & Email */}
              <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-slate-600 font-medium">
                <span className="text-slate-400">Engineering Hubs:</span>
                <span className="flex items-center gap-1 font-semibold text-slate-700">
                  <span>🇮🇳</span> India (Delhi)
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1 font-semibold text-slate-700">
                  <span>🇫🇮</span> Finland
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1 font-semibold text-slate-700">
                  <span>🇮🇪</span> Ireland
                </span>
                <span className="text-slate-300">•</span>
                <a
                  href="mailto:wearedrtechie@gmail.com"
                  className="text-[#2D2575] hover:text-[#D98E3A] font-bold flex items-center gap-1 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D98E3A]" />
                  <span>wearedrtechie@gmail.com</span>
                </a>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-md shadow-[#D98E3A]/25 active:scale-95 transition-all cursor-pointer ring-1 ring-white/30"
                >
                  <Sparkles className="w-4 h-4 text-amber-100" />
                  <span>Calculate Project Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => navigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#2D2575] bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-all cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#D98E3A]" />
                  <span>Book 15-Min Discovery Call</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column: Interactive Capabilities Selector & Deliverables Matrix */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
                {/* Header Bar with Service Selector Tabs */}
                <div className="bg-[#FAFBFD] p-3 border-b border-slate-200">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
                    Select Architectural Capability:
                  </div>
                  <div className="grid grid-cols-4 gap-1">
                    {(['nextjs', 'react', 'backend', 'cms'] as const).map((key) => {
                      const labels = {
                        nextjs: 'Next.js',
                        react: 'React 19',
                        backend: 'Node APIs',
                        cms: 'Headless',
                      };
                      const isSelected = activeTab === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setActiveTab(key)}
                          className={`py-1.5 px-1 rounded-lg text-xs font-bold transition-all cursor-pointer text-center truncate ${
                            isSelected
                              ? 'bg-[#2D2575] text-white shadow-xs'
                              : 'bg-white text-slate-600 hover:text-[#111622] border border-slate-200/80'
                          }`}
                        >
                          {labels[key]}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Capability Detail Card */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#FDF7EF] text-[#A8631B] border border-[#F2BC7B]/60 mb-1.5">
                        {currentCap.tag}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-[#111622]">
                        {currentCap.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {currentCap.subtitle}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex flex-col items-center justify-center font-bold">
                        <span className="text-xs leading-none">{currentCap.score}</span>
                        <span className="text-[7px] uppercase tracking-wider">Score</span>
                      </div>
                    </div>
                  </div>

                  {/* Feature Checkpoints */}
                  <div className="space-y-2 py-2 border-y border-slate-100 my-3">
                    {currentCap.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D98E3A] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quick Card Footer */}
                  <div className="flex items-center justify-between text-xs pt-1">
                    <div className="flex items-center gap-1 text-[#2D2575] font-semibold">
                      <Gauge className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{currentCap.lcp}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        onSelectServiceForContact(currentCap.title);
                        navigate('contact');
                      }}
                      className="text-xs font-bold text-[#D98E3A] hover:text-[#B26E20] inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Get Proposal for This Stack</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Primary Full Services Catalog */}
      <Services
        onSelectService={onSelectService}
        onOpenQuoteWithService={(serviceName) => {
          onSelectServiceForContact(serviceName);
          navigate('contact');
        }}
      />

      {/* Engineering Deliverables Guarantee */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111622]">
              What Is Included In Every DrTechei Project
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              We never cut corners on architecture, code quality, or long-term maintainability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 hover:border-[#D98E3A]/40 transition-all hover:shadow-md group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EEEDFA] group-hover:bg-[#2D2575] text-[#2D2575] group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#111622] mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical FAQ on Services */}
      <FAQSection />

      {/* CTA */}
      <CTA
        onOpenQuoteModal={onOpenQuoteModal}
        onTalkToUs={() => navigate('contact')}
      />
    </div>
  );
};
