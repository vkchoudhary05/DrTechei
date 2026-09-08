import React from 'react';
import {
  Cpu,
  Zap,
  Shield,
  Layers,
  Sparkles,
  Globe,
  Award,
  CheckCircle2,
  Lock,
  Flame,
  ArrowUpRight
} from 'lucide-react';

interface ContinuousSliderProps {
  onLearnMore?: () => void;
}

export const ContinuousSlider: React.FC<ContinuousSliderProps> = ({ onLearnMore }) => {
  // Track 1: Modern Tech Stack & Edge Infrastructure
  const techItems = [
    { name: 'Next.js 15 App Router', tag: 'Full-Stack SSR', color: 'text-[#2D2575] bg-[#EEEDFA] border-[#D1CDF4]' },
    { name: 'React 19', tag: 'Concurrent Mode', color: 'text-sky-700 bg-sky-50 border-sky-200' },
    { name: 'TypeScript 5.8', tag: 'Strict Type Safety', color: 'text-blue-700 bg-blue-50 border-blue-200' },
    { name: 'Tailwind CSS v4', tag: 'Zero-Runtime CSS', color: 'text-cyan-700 bg-cyan-50 border-cyan-200' },
    { name: 'PostgreSQL & Supabase', tag: 'Enterprise DB', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
    { name: 'Node.js & Express', tag: 'High-Throughput API', color: 'text-green-700 bg-green-50 border-green-200' },
    { name: 'Vercel & Cloudflare Edge', tag: '<50ms Latency', color: 'text-amber-800 bg-[#FDF7EF] border-[#F2BC7B]' },
    { name: 'Headless WordPress / Strapi', tag: 'Decoupled CMS', color: 'text-purple-700 bg-purple-50 border-purple-200' },
    { name: 'AWS CloudFront & S3', tag: 'Global CDN', color: 'text-orange-700 bg-orange-50 border-orange-200' },
    { name: 'Redis Cache', tag: 'Microsecond I/O', color: 'text-rose-700 bg-rose-50 border-rose-200' },
  ];

  // Track 2: Core Guarantees & Strategic Advantages
  const guaranteeItems = [
    { title: '99+ Lighthouse Score', desc: 'Mobile & Desktop Guaranteed', icon: Zap, highlight: 'Speed' },
    { title: 'Sub-Second LCP', desc: '< 0.8s Largest Contentful Paint', icon: Flame, highlight: 'Performance' },
    { title: '100% IP & Repo Ownership', desc: 'Full code transfer on Day 1', icon: Shield, highlight: 'Ownership' },
    { title: 'Global Engineering Hubs', desc: '🇮🇳 India (Delhi) • 🇫🇮 Finland • 🇮🇪 Ireland', icon: Globe, highlight: 'Global Hubs' },
    { title: 'Senior Engineers Only', desc: 'Zero junior handoffs', icon: Award, highlight: 'Excellence' },
    { title: 'Mutual NDA Protected', desc: 'Enterprise security standards', icon: Lock, highlight: 'Confidential' },
    { title: '30-Day Hypercare', desc: 'Post-launch warranty included', icon: CheckCircle2, highlight: 'Support' },
    { title: 'Zero Vendor Lock-in', desc: 'Clean, open-source stack', icon: Sparkles, highlight: 'Freedom' },
  ];

  // Duplicate arrays to create continuous infinite loops without visible seams
  const duplicatedTech = [...techItems, ...techItems, ...techItems];
  const duplicatedGuarantees = [...guaranteeItems, ...guaranteeItems, ...guaranteeItems];

  return (
    <div className="relative py-8 sm:py-10 bg-gradient-to-b from-[#FAFBFD] via-white to-slate-50 border-y border-slate-200/80 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-72 h-32 bg-[#2D2575]/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-32 bg-[#D98E3A]/5 rounded-full blur-2xl pointer-events-none" />

      {/* Header Tag */}
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 mb-4 sm:mb-6 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#2D2575]">
            Continuously Deployed Edge Stack & Guarantees
          </span>
        </div>
        <span className="text-[11px] text-slate-400 hidden sm:inline">
          Hover to pause inspection
        </span>
      </div>

      {/* Edge Gradient Masks for Seamless Dissolve */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Technologies Marquee (Scrolling Left Continuously) */}
        <div className="animate-marquee-left flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
          {duplicatedTech.map((item, idx) => (
            <div
              key={`tech-${idx}`}
              className="flex items-center gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#D98E3A]/60 hover:shadow-xs transition-all shrink-0 cursor-default"
            >
              <Cpu className="w-3.5 h-3.5 text-[#D98E3A]" />
              <span className="text-xs sm:text-sm font-bold text-[#111622] whitespace-nowrap">
                {item.name}
              </span>
              <span
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border whitespace-nowrap ${item.color}`}
              >
                {item.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2: Guarantees & Pillars Marquee (Scrolling Right Continuously) */}
        <div className="animate-marquee-right flex items-center gap-3 sm:gap-4">
          {duplicatedGuarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`guarantee-${idx}`}
                className="flex items-center gap-3 px-4 py-2 sm:py-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-[#2D2575]/50 hover:shadow-xs transition-all shrink-0 cursor-default"
              >
                <div className="w-6 h-6 rounded-lg bg-[#EEEDFA] text-[#2D2575] flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5 text-[#D98E3A]" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-sm font-bold text-[#111622] whitespace-nowrap">
                      {item.title}
                    </span>
                    <span className="text-[9px] font-bold text-[#2D2575] bg-[#EEEDFA] px-1.5 py-0.2 rounded border border-[#D1CDF4]">
                      {item.highlight}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 whitespace-nowrap">
                    {item.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
