import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Code2,
  CheckCircle2,
  Lock,
  Globe,
  Gauge,
  Layers,
  Database,
  Star,
  ExternalLink,
  Laptop
} from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewWork }) => {
  const [activeTab, setActiveTab] = useState<'nextjs' | 'react' | 'nodejs' | 'headless'>('nextjs');

  const architectures = {
    nextjs: {
      name: 'Next.js 15 App Router',
      category: 'Full-Stack Edge Framework',
      speed: '0.4s LCP',
      score: '99',
      features: ['Server-Side Rendering (SSR)', 'Dynamic Edge Caching', 'Automated SEO & Schema'],
      badge: 'Recommended for High Growth',
    },
    react: {
      name: 'Custom React 19 Frontend',
      category: 'Component-Driven UI/UX',
      speed: '0.5s FCP',
      score: '98',
      features: ['Tailwind CSS System', 'State Machine Architecture', 'Fluid Micro-Interactions'],
      badge: 'Interactive Web Apps',
    },
    nodejs: {
      name: 'Node.js & Microservices',
      category: 'Scalable Cloud Backend',
      speed: '< 25ms API Latency',
      score: '100',
      features: ['RESTful & GraphQL APIs', 'PostgreSQL / MongoDB Integration', 'High Concurrency'],
      badge: 'Enterprise Backend',
    },
    headless: {
      name: 'Headless CMS Solutions',
      category: 'Decoupled Content Architecture',
      speed: 'Instant CDN Delivery',
      score: '98',
      features: ['WordPress REST/GraphQL', 'Shopify Plus Storefronts', 'Marketing Team Autonomy'],
      badge: 'Content & E-Commerce',
    },
  };

  const currentArch = architectures[activeTab];

  return (
    <section className="relative overflow-hidden bg-[#FAFBFD] pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-12 sm:pb-16 border-b border-slate-200/80">
      {/* 1. HIGH-TECH ENGINEERING THEME BACKGROUND (Starts at absolute top of viewport) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Architectural Blueprint Grid starting at top: 0 */}
        <div 
          className="absolute inset-0 opacity-75"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 0%, rgba(45, 37, 117, 0.08) 0%, transparent 60%),
              radial-gradient(circle at 90% 20%, rgba(217, 142, 58, 0.10) 0%, transparent 45%),
              radial-gradient(circle at 10% 35%, rgba(45, 37, 117, 0.06) 0%, transparent 45%),
              linear-gradient(to right, rgba(45, 37, 117, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(45, 37, 117, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 100% 100%, 100% 100%, 48px 48px, 48px 48px',
          }}
        />

        {/* Ambient Radial Color Orbs */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[380px] sm:w-[840px] h-[280px] sm:h-[380px] bg-gradient-to-r from-[#2D2575]/10 via-[#D98E3A]/12 to-[#2D2575]/10 blur-3xl rounded-full" />
        <div className="absolute top-1/4 -right-24 w-80 h-80 bg-[#D98E3A]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#2D2575]/8 blur-3xl rounded-full" />

        {/* Decorative Technical Coordinates / Grid Watermarks */}
        <div className="hidden lg:flex items-center justify-between px-8 pt-4 text-[10px] font-mono tracking-widest text-slate-400/80 uppercase">
          <div className="flex items-center gap-2">
            {/* <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>DRTECHEI // ARCHITECTURE LABS // 2026</span> */}
          </div>
          <div className="flex items-center gap-4 text-slate-400/70">
            {/* <span>NODES: DEL-01 (DELHI) • HEL-02 (FINLAND) • DUB-03 (IRELAND)</span>
            <span>LATENCY: &lt; 25MS</span> */}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* LEFT COLUMN: Clear, High-Contrast Typography & Authority */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Live Operational Status Eyebrow */}
            <div className="inline-flex items-center gap-2 self-start px-3 sm:px-3.5 py-1.5 rounded-full bg-[#EEEDFA] border border-[#D1CDF4] text-[11px] sm:text-xs font-bold text-[#2D2575] uppercase tracking-wider mb-4 sm:mb-5 shadow-2xs">
              <span className="flex h-2 w-2 rounded-full bg-[#D98E3A] animate-pulse" />
              <span>DrTechei IT Solutions</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-semibold lowercase">custom web engineering</span>
            </div>

            {/* Stable, High-Impact Main Heading */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl font-extrabold text-[#111622] tracking-tight leading-[1.15]">
              High-Performance Web Development & Digital Engineering
            </h1>

            {/* Value Proposition Subtitle */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg 2xl:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              We engineer ultra-fast <strong className="font-semibold text-[#2D2575]">Next.js web applications</strong>, custom React frontends, scalable Node.js APIs, and headless CMS platforms. Guaranteed 95+ PageSpeed scores, sub-second load times, and 100% source code ownership.
            </p>

            {/* Global Hubs Strip */}
            <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-slate-500 font-medium">
              <span className="text-slate-400">Global Offices:</span>
              <span className="flex items-center gap-1 text-slate-700 font-semibold">
                <span>🇮🇳</span> India (Delhi)
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1 text-slate-700 font-semibold">
                <span>🇫🇮</span> Finland
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1 text-slate-700 font-semibold">
                <span>🇮🇪</span> Ireland
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
              <motion.button
                id="hero-primary-cta"
                type="button"
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.02 }}
                onClick={onStartProject}
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-lg shadow-[#D98E3A]/25 hover:shadow-[#D98E3A]/40 transition-all duration-200 cursor-pointer ring-1 ring-white/30"
              >
                <Sparkles className="w-4 h-4 text-amber-100" />
                <span>Get Free Project Estimate</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </motion.button>

              <motion.button
                id="hero-secondary-cta"
                type="button"
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.02 }}
                onClick={onViewWork}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#2D2575] bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#D98E3A]/50 shadow-2xs transition-all cursor-pointer"
              >
                <Code2 className="w-4 h-4 text-[#D98E3A]" />
                <span>Explore Client Work</span>
              </motion.button>
            </div>

            {/* Core Reassurances Strip */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2.5 gap-x-5 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Client Code Ownership</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>95+ PageSpeed Guaranteed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct Senior Engineers</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Luminous Interactive Architecture Preview with Motion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            {/* Ambient Glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#2D2575]/15 via-[#D98E3A]/20 to-indigo-500/10 rounded-3xl blur-xl opacity-70 pointer-events-none" />

            {/* Modern Showcase Browser Card - Fully Mobile Responsive */}
            <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-xl overflow-hidden w-full">
              
              {/* Browser Header Bar */}
              <div className="bg-[#FAFBFD] px-3 sm:px-4 py-2 sm:py-2.5 border-b border-slate-200/80 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>

                <div className="flex-1 min-w-0 mx-1 sm:mx-2 flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[10px] sm:text-[11px] text-slate-600 font-mono shadow-2xs">
                  <Lock className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span className="truncate font-semibold">preview.drtechei.com</span>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Live</span>
                </div>
              </div>

              {/* Performance Score Benchmark Banner */}
              <div className="p-3 sm:p-4 bg-gradient-to-r from-[#FAFBFD] to-[#EEEDFA]/50 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-500 text-white flex flex-col items-center justify-center font-extrabold shadow-sm shrink-0">
                    <span className="text-sm sm:text-base leading-none">{currentArch.score}</span>
                    <span className="text-[7px] sm:text-[8px] uppercase tracking-wider font-semibold opacity-90">Score</span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-[#111622] flex items-center gap-1">
                      <span>Lighthouse Performance</span>
                      <Gauge className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 truncate">
                      Core Web Vitals Pass • Speed Index {currentArch.speed}
                    </div>
                  </div>
                </div>

                <div className="self-start sm:self-auto shrink-0">
                  <span className="inline-block px-2 sm:px-2.5 py-1 rounded-md text-[9px] sm:text-[10px] font-bold bg-[#FAFBFD] text-[#2D2575] border border-[#D1CDF4]">
                    {currentArch.badge}
                  </span>
                </div>
              </div>

              {/* Interactive Architecture Tabs */}
              <div className="p-3 sm:p-4 bg-white">
                <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100/80 rounded-xl mb-3 sm:mb-4 text-center">
                  {(['nextjs', 'react', 'nodejs', 'headless'] as const).map((tabKey) => {
                    const isSelected = activeTab === tabKey;
                    const labels = {
                      nextjs: { short: 'Next.js', full: 'Next.js 15' },
                      react: { short: 'React', full: 'React 19' },
                      nodejs: { short: 'Node', full: 'Node API' },
                      headless: { short: 'CMS', full: 'Headless' },
                    };

                    return (
                      <button
                        key={tabKey}
                        type="button"
                        onClick={() => setActiveTab(tabKey)}
                        className={`py-1.5 px-0.5 sm:px-1 rounded-lg text-[10px] sm:text-xs font-bold transition-all cursor-pointer truncate ${
                          isSelected
                            ? 'bg-white text-[#2D2575] shadow-xs'
                            : 'text-slate-600 hover:text-[#111622]'
                        }`}
                      >
                        <span className="sm:hidden">{labels[tabKey].short}</span>
                        <span className="hidden sm:inline">{labels[tabKey].full}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Architecture Card with smooth transition */}
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="p-3 sm:p-4 rounded-xl bg-[#FAFBFD] border border-slate-200/80 space-y-2 sm:space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-[#111622] truncate">
                        {currentArch.name}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#D98E3A] font-semibold mt-0.5 truncate">
                        {currentArch.category}
                      </p>
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-700 bg-white px-2 py-0.5 sm:py-1 rounded border border-slate-200 shrink-0">
                      {currentArch.speed}
                    </span>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    {currentArch.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start sm:items-center gap-2 text-[11px] sm:text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D98E3A] shrink-0 mt-0.5 sm:mt-0" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Bottom Quick Metric Highlights */}
                <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 text-xs text-slate-500">
                  <div className="flex items-center gap-1 text-[#2D2575] font-semibold text-[10px] sm:text-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D98E3A] shrink-0" />
                    <span>Tested Production Architecture</span>
                  </div>

                  <button
                    type="button"
                    onClick={onStartProject}
                    className="text-[11px] sm:text-xs font-bold text-[#D98E3A] hover:text-[#B26E20] inline-flex items-center gap-1 cursor-pointer self-end xs:self-auto"
                  >
                    <span>Request Spec</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Trust Pill - Responsive layout */}
            <div className="mt-3 sm:mt-0 sm:absolute sm:-bottom-4 sm:-left-4 p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200 shadow-md flex items-center gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div className="text-left min-w-0">
                <div className="text-xs font-bold text-[#111622]">Sub-Second Delivery</div>
                <div className="text-[10px] text-slate-500 truncate">Global Edge CDN Latency &lt; 50ms</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
