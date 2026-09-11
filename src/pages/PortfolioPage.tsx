import React, { useState } from 'react';
import { PageBreadcrumb } from '../components/PageBreadcrumb';
import { Portfolio } from '../components/Portfolio';
import { CaseStudyResults } from '../components/CaseStudyResults';
import { CTA } from '../components/CTA';
import { useRouter } from '../context/RouterContext';
import { PortfolioProject } from '../types';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  Award,
  TrendingUp,
  Cpu,
  CheckCircle,
  ExternalLink,
  Zap,
  Gauge,
  ShieldCheck,
  Building2,
  Mail
} from 'lucide-react';

interface PortfolioPageProps {
  onOpenQuoteModal: () => void;
  onSelectProject: (project: PortfolioProject) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onOpenQuoteModal,
  onSelectProject,
}) => {
  const { navigate } = useRouter();
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  const featuredSpotlights = [
    {
      client: 'Apex Health Telemedicine',
      badge: 'Next.js 15 Full-Stack',
      industry: 'Healthcare SaaS',
      speedBefore: '3.9s LCP',
      speedAfter: '0.4s LCP',
      scoreBefore: '42',
      scoreAfter: '99',
      conversionLift: '+65% Conversion Rate',
      summary: 'Re-architected monolithic SPA into high-performance Next.js 15 App Router with zero-latency Edge caching and HIPAA compliance.',
    },
    {
      client: 'FinScale Enterprise Asset Hub',
      badge: 'React 19 & TypeScript',
      industry: 'FinTech Platform',
      speedBefore: '4.8s LCP',
      speedAfter: '0.5s LCP',
      scoreBefore: '38',
      scoreAfter: '98',
      conversionLift: '+120% Daily Active Users',
      summary: 'Engineered real-time financial charting dashboard with sub-second calculations, optimistic UI updates, and zero layout shift.',
    },
    {
      client: 'Velvet & Oak Headless Storefront',
      badge: 'Headless Shopify + Next.js',
      industry: 'Luxury E-Commerce',
      speedBefore: '5.2s LCP',
      speedAfter: '0.35s LCP',
      scoreBefore: '31',
      scoreAfter: '100',
      conversionLift: '+84% Mobile Checkout Rate',
      summary: 'Decoupled monolithic Shopify theme into custom headless Next.js frontend with instantaneous catalog searches and Apple Pay one-click checkout.',
    },
  ];

  const currentCase = featuredSpotlights[activeCaseIndex];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Header */}
      <PageBreadcrumb currentPage="portfolio" subtitle="Case Studies, Performance Audits & Live Client Builds" />

      {/* DEDICATED, SPECIALIZED PORTFOLIO & CASE STUDIES HERO */}
      <section className="relative py-12 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-[#FAFBFD] border-b border-slate-200/80 overflow-hidden">
        {/* Subtle Background Lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D98E3A]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#2D2575]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Proof & Metrics Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-7"
            >
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEEDFA] border border-[#D1CDF4] text-xs font-bold text-[#2D2575] uppercase tracking-wider mb-4 shadow-2xs">
                <Award className="w-3.5 h-3.5 text-[#D98E3A]" />
                <span>Verified Client Case Studies & Production Proof</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-extrabold text-[#111622] tracking-tight leading-[1.15]">
                Proven Engineering Results: Case Studies & Live Deployments
              </h1>

              <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Explore real-world client platforms engineered by DrTechei. We specialize in cutting load times from over 4 seconds down to under 0.5s, lifting conversion rates, and scaling to millions of requests with zero downtime.
              </p>

              {/* Global Engineering Hubs & Direct Inquiry */}
              <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-slate-600 font-medium">
                <span className="text-slate-400">Offices:</span>
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
                  href="mailto:hello@drtechei.com"
                  className="text-[#2D2575] hover:text-[#D98E3A] font-bold flex items-center gap-1 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D98E3A]" />
                  <span>hello@drtechei.com</span>
                </a>
              </div>

              {/* Verified Metrics Strip */}
              <div className="mt-6 pt-5 border-t border-slate-200/80 grid grid-cols-3 gap-3 sm:gap-6">
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#2D2575] flex items-center gap-1">
                    <span>+180%</span>
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                    Avg. Speed Acceleration
                  </div>
                </div>

                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-emerald-600 flex items-center gap-1">
                    <span>+65%</span>
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                    Conversion Rate Growth
                  </div>
                </div>

                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#D98E3A] flex items-center gap-1">
                    <span>100%</span>
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                    Client Code & IP Rights
                  </div>
                </div>
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
                  <span>Start Similar Project</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => navigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#2D2575] bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-all cursor-pointer"
                >
                  <span>Schedule Architectural Review</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column: Interactive Featured Case Study Spotlight Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
                {/* Spotlight Switcher Bar */}
                <div className="bg-[#FAFBFD] p-3 border-b border-slate-200">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
                    Featured Client Benchmarks:
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    {featuredSpotlights.map((item, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveCaseIndex(idx)}
                        className={`py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all cursor-pointer text-center truncate ${
                          activeCaseIndex === idx
                            ? 'bg-[#2D2575] text-white shadow-xs'
                            : 'bg-white text-slate-600 hover:text-[#111622] border border-slate-200/80'
                        }`}
                      >
                        {item.client.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Spotlight Content with Motion */}
                <motion.div
                  key={activeCaseIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 sm:p-5 space-y-4"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#FDF7EF] text-[#A8631B] border border-[#F2BC7B]/60 mb-1">
                        {currentCase.badge}
                      </span>
                      <h3 className="text-base font-bold text-[#111622]">
                        {currentCase.client}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {currentCase.industry}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-200">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{currentCase.conversionLift}</span>
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {currentCase.summary}
                  </p>

                  {/* Before vs After Visual Comparison Dial */}
                  <div className="p-3 rounded-xl bg-[#FAFBFD] border border-slate-200/80 grid grid-cols-2 gap-3 text-center">
                    <div className="p-2.5 rounded-lg bg-rose-50/70 border border-rose-100">
                      <div className="text-[10px] uppercase font-bold text-rose-600">Before DrTechei</div>
                      <div className="text-base font-extrabold text-rose-700 mt-0.5">{currentCase.speedBefore}</div>
                      <div className="text-[10px] text-rose-600">Lighthouse: {currentCase.scoreBefore} / 100</div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
                      <div className="text-[10px] uppercase font-bold text-emerald-600">After DrTechei</div>
                      <div className="text-base font-extrabold text-emerald-700 mt-0.5">{currentCase.speedAfter}</div>
                      <div className="text-[10px] text-emerald-700 font-bold">Lighthouse: {currentCase.scoreAfter} / 100 (Pass)</div>
                    </div>
                  </div>

                  <div className="pt-1 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium text-[11px]">
                      Live in Production
                    </span>

                    <button
                      type="button"
                      onClick={onOpenQuoteModal}
                      className="text-xs font-bold text-[#D98E3A] hover:text-[#B26E20] inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Request Case Study Breakdown</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Interactive Portfolio Showcase */}
      <Portfolio onSelectProject={onSelectProject} />

      {/* Before vs After Performance Benchmarks */}
      <CaseStudyResults />

      {/* Strategic Call to Action */}
      <CTA
        onOpenQuoteModal={onOpenQuoteModal}
        onTalkToUs={() => navigate('contact')}
      />
    </div>
  );
};
