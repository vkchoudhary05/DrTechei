import React from 'react';
import { ArrowRight, Sparkles, MessageSquare, PhoneCall } from 'lucide-react';

interface CTAProps {
  onOpenQuoteModal: () => void;
  onTalkToUs: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenQuoteModal, onTalkToUs }) => {
  return (
    <section className="py-20 md:py-24 bg-[#111622] relative overflow-hidden">
      {/* Dynamic Gradient Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#2D2575]/40 via-[#D98E3A]/25 to-[#2D2575]/40 blur-3xl rounded-full" />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#2D2575]/30 blur-2xl rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#D98E3A]/20 blur-2xl rounded-full" />
      </div>

      <div className="relative max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 text-center text-white">
        {/* Floating badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2D2575]/60 border border-[#D98E3A]/40 text-[#F2BC7B] text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
          <span>Start Your Digital Transformation Today</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Have a Project in Mind?
        </h2>

        {/* Supporting text */}
        <p className="mt-5 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Let's turn your idea into a fast, modern and professional digital experience that elevates your brand and accelerates business growth.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-xl shadow-[#D98E3A]/30 active:scale-[0.98] transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-100" />
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>

          <button
            onClick={onTalkToUs}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#171E2B]/90 hover:bg-[#1E2638] border border-[#2B3548] hover:border-[#D98E3A]/50 transition-all active:scale-[0.98] cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-[#F2BC7B]" />
            <span>Talk to Us</span>
          </button>
        </div>

        {/* Micro reassurance */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span>✓ Free 30-Minute Consultation</span>
          <span>•</span>
          <span>✓ Comprehensive Architectural Scope</span>
          <span>•</span>
          <span>✓ 24-Hour Proposal Turnaround</span>
        </div>
      </div>
    </section>
  );
};
