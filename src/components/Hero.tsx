import React, { useState } from 'react';
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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFBFD] via-white to-[#FAFBFD] pt-6 sm:pt-10 pb-16 sm:pb-24 border-b border-slate-200/80">
      {/* Subtle Background Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#2D2575]/5 via-[#D98E3A]/8 to-[#2D2575]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* LEFT COLUMN: Clear, High-Contrast Typography & Authority */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Live Operational Status Eyebrow */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#EEEDFA] border border-[#D1CDF4] text-xs font-bold text-[#2D2575] uppercase tracking-wider mb-5 shadow-2xs">
              <span className="flex h-2 w-2 rounded-full bg-[#D98E3A] animate-pulse" />
              <span>DrTechei IT Solutions</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-semibold lowercase">custom web engineering</span>
            </div>

            {/* Stable, High-Impact Main Heading */}
            <h1 className="text-3xl sm:text-5xl 2xl:text-6xl font-extrabold text-[#111622] tracking-tight leading-[1.15]">
              High-Performance Web Development & Digital Engineering
            </h1>

            {/* Consistent, Easy-to-Read Value Proposition Subtitle */}
            <p className="mt-5 text-base sm:text-lg 2xl:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              We engineer ultra-fast <strong className="font-semibold text-[#2D2575]">Next.js web applications</strong>, custom React frontends, scalable Node.js APIs, and headless CMS platforms. Guaranteed 95+ PageSpeed scores, sub-second load times, and 100% source code ownership.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                id="hero-primary-cta"
                type="button"
                onClick={onStartProject}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-lg shadow-[#D98E3A]/25 hover:shadow-[#D98E3A]/40 transition-all duration-200 active:scale-95 cursor-pointer ring-1 ring-white/30"
              >
                <Sparkles className="w-4 h-4 text-amber-100" />
                <span>Get Free Project Estimate</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>

              <button
                id="hero-secondary-cta"
                type="button"
                onClick={onViewWork}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#2D2575] bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#D98E3A]/50 shadow-2xs transition-all active:scale-95 cursor-pointer"
              >
                <Code2 className="w-4 h-4 text-[#D98E3A]" />
                <span>Explore Client Work</span>
              </button>
            </div>

            {/* Core Reassurances Strip */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-600 font-medium">
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
          </div>

          {/* RIGHT COLUMN: Clean, Luminous Interactive Architecture Preview */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Background Glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#2D2575]/15 via-[#D98E3A]/20 to-indigo-500/10 rounded-3xl blur-xl opacity-70 pointer-events-none" />

            {/* Modern Showcase Browser Card */}
            <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-xl overflow-hidden">
              
              {/* Browser Header Bar */}
              <div className="bg-[#FAFBFD] px-4 py-3 border-b border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] text-slate-500 font-mono shadow-2xs">
                  <Lock className="w-3 h-3 text-emerald-600" />
                  <span>https://drtechei.com/diagnostics</span>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Live</span>
                </div>
              </div>

              {/* Performance Score Benchmark Banner */}
              <div className="p-4 sm:p-5 bg-gradient-to-r from-[#FAFBFD] to-[#EEEDFA]/50 border-b border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex flex-col items-center justify-center font-extrabold shadow-sm">
                    <span className="text-base leading-none">{currentArch.score}</span>
                    <span className="text-[8px] uppercase tracking-wider font-semibold opacity-90">Score</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111622] flex items-center gap-1">
                      <span>Lighthouse Performance</span>
                      <Gauge className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Core Web Vitals Pass • Speed Index {currentArch.speed}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold bg-[#FAFBFD] text-[#2D2575] border border-[#D1CDF4]">
                    {currentArch.badge}
                  </span>
                </div>
              </div>

              {/* Interactive Architecture Tabs */}
              <div className="p-4 bg-white">
                <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-100/80 rounded-xl mb-4 text-center">
                  {(['nextjs', 'react', 'nodejs', 'headless'] as const).map((tabKey) => {
                    const isSelected = activeTab === tabKey;
                    const labels = {
                      nextjs: 'Next.js 15',
                      react: 'React 19',
                      nodejs: 'Node API',
                      headless: 'Headless',
                    };

                    return (
                      <button
                        key={tabKey}
                        type="button"
                        onClick={() => setActiveTab(tabKey)}
                        className={`py-1.5 px-1 rounded-lg text-xs font-bold transition-all cursor-pointer truncate ${
                          isSelected
                            ? 'bg-white text-[#2D2575] shadow-xs'
                            : 'text-slate-600 hover:text-[#111622]'
                        }`}
                      >
                        {labels[tabKey]}
                      </button>
                    );
                  })}
                </div>

                {/* Selected Architecture Card */}
                <div className="p-4 rounded-xl bg-[#FAFBFD] border border-slate-200/80 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-[#111622]">
                        {currentArch.name}
                      </h4>
                      <p className="text-xs text-[#D98E3A] font-semibold mt-0.5">
                        {currentArch.category}
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-700 bg-white px-2 py-1 rounded border border-slate-200">
                      {currentArch.speed}
                    </span>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    {currentArch.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D98E3A] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Quick Metric Highlights */}
                <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1 text-[#2D2575] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D98E3A]" />
                    <span>Tested Production Architecture</span>
                  </div>

                  <button
                    type="button"
                    onClick={onStartProject}
                    className="text-xs font-bold text-[#D98E3A] hover:text-[#B26E20] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request Spec</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Trust Pill */}
            <div className="hidden sm:flex absolute -bottom-4 -left-4 p-3 rounded-xl bg-white border border-slate-200 shadow-md items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Zap className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-[#111622]">Sub-Second Delivery</div>
                <div className="text-[10px] text-slate-500">Global Edge CDN Latency &lt; 50ms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
