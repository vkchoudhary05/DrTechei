import React from 'react';
import { PageBreadcrumb } from '../components/PageBreadcrumb';
import { FAQSection } from '../components/FAQSection';
import { CTA } from '../components/CTA';
import { useRouter } from '../context/RouterContext';
import { Sparkles, ArrowRight, HelpCircle, PhoneCall, Mail } from 'lucide-react';

interface FAQPageProps {
  onOpenQuoteModal: () => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onOpenQuoteModal }) => {
  const { navigate } = useRouter();

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Header */}
      <PageBreadcrumb currentPage="faq" subtitle="Technical Standards, Core Web Vitals & IP Guarantees" />

      {/* SEO Dedicated Hero */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-[#FAFBFD] border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEEDFA] border border-[#D1CDF4] text-xs font-bold text-[#2D2575] uppercase tracking-wider mb-5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
              <span>Knowledge Base & Technical Standards</span>
            </div>

            <h1 className="text-3xl sm:text-5xl 2xl:text-6xl font-extrabold text-[#111622] tracking-tight leading-tight">
              Frequently Asked Questions & Technical Specifications
            </h1>

            <p className="mt-5 text-base sm:text-xl text-slate-600 leading-relaxed">
              Find transparent answers regarding our Next.js 15 delivery frameworks, Lighthouse 95+ performance guarantees, 100% IP ownership, and post-launch maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Primary FAQ Accordion */}
      <FAQSection />

      {/* Custom Questions Reassurance Card */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="p-8 rounded-3xl bg-[#EEEDFA]/60 border border-[#D1CDF4] shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-[#2D2575]">
              Didn't Find The Answer You Were Looking For?
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto">
              Our technical architects are happy to review your custom requirements, API integrations, or existing repository.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+18005408324"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#2D2575] text-white hover:bg-[#201955] transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#D98E3A]" />
                <span>Call +1 (800) 540-TECH</span>
              </a>
              <button
                onClick={() => navigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-white text-[#2D2575] border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-[#D98E3A]" />
                <span>Submit Technical Query</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic CTA */}
      <CTA
        onOpenQuoteModal={onOpenQuoteModal}
        onTalkToUs={() => navigate('contact')}
      />
    </div>
  );
};
