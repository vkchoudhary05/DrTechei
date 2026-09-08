import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeBannerProps {
  onOpenQuote: () => void;
}

export const HomeBanner: React.FC<HomeBannerProps> = ({ onOpenQuote }) => {
  return (
    <aside
      aria-label="Strategic Announcement"
      className="relative z-30 w-full bg-gradient-to-r from-[#111622] via-[#2D2575] to-[#111622] text-white py-2.5 px-3 sm:px-6 border-b border-[#2B3548] overflow-hidden"
    >
      {/* Subtle ambient moving glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D98E3A]/15 to-transparent pointer-events-none"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: 'linear',
        }}
      />

      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        {/* Left: Strategic Priority Alert */}
        <div className="flex items-center gap-2.5 text-center sm:text-left flex-wrap justify-center sm:justify-start">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D98E3A]/25 border border-[#D98E3A]/50 text-[#F2BC7B] font-bold text-[11px] uppercase tracking-wider">
            <Zap className="w-3 h-3 text-[#F2BC7B] animate-pulse" />
            <span>2026 Enterprise Intake</span>
          </span>

          <span className="text-slate-200 font-medium">
            Accelerate your business with{' '}
            <strong className="text-white font-semibold">
              Next.js 15 Architectures, Headless Commerce & 99+ Core Web Vitals
            </strong>
          </span>
        </div>

        {/* Right: Quick Action Pill */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden md:flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% IP Code Ownership</span>
          </div>

          <button
            onClick={onOpenQuote}
            className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#F2BC7B] hover:text-white font-bold text-[11px] uppercase tracking-wider transition-all duration-200 active:scale-95 cursor-pointer shadow-2xs"
          >
            <Sparkles className="w-3 h-3 text-[#D98E3A]" />
            <span>Calculate Scope</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
