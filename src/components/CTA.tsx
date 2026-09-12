import React from 'react';
import { ArrowRight, Sparkles, PhoneCall, CheckCircle2 } from 'lucide-react';

interface CTAProps {
  onOpenQuoteModal: () => void;
  onTalkToUs: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenQuoteModal, onTalkToUs }) => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#111622] via-[#1A1842] to-[#2D2575] text-white relative overflow-hidden border-t border-b border-[#2D2575]/60">
      {/* Background Dot Matrix Texture (Matches Project Signature Style) */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#F2BC7B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Ambient Radial Glow Lighting Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-gradient-to-tr from-[#2D2575]/45 via-[#6366F1]/20 to-[#D98E3A]/20 rounded-full blur-3xl" />
        <div className="absolute -top-16 -left-16 w-80 h-80 bg-[#2D2575]/35 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-[#D98E3A]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 text-center">
        {/* Floating eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-[#F2BC7B] text-xs font-semibold tracking-wide mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
          <span>Start Your Digital Transformation Today</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Have a Project in{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] via-[#F2BC7B] to-[#D98E3A]">
            Mind?
          </span>
        </h2>

        {/* Supporting text */}
        <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal">
          Let's turn your idea into a fast, modern and professional digital experience that elevates your brand and accelerates business growth.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E59B48] hover:to-[#C67E2C] shadow-xl shadow-[#D98E3A]/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-100" />
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>

          <button
            type="button"
            onClick={onTalkToUs}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-[#F2BC7B]" />
            <span>Talk to Us</span>
          </button>
        </div>

        {/* Micro reassurances */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2.5 gap-x-6 text-xs text-slate-200 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Free 30-Minute Consultation</span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D98E3A] shrink-0" />
            <span>Comprehensive Architectural Scope</span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-indigo-300 shrink-0" />
            <span>24-Hour Proposal Turnaround</span>
          </div>
        </div>
      </div>
    </section>
  );
};

