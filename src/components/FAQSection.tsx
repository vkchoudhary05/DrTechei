import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, Sparkles, ArrowRight, Zap, Code, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Why does DrTechei prioritize Next.js 15 and React for modern business websites?',
      answer:
        'Next.js 15 provides Server-Side Rendering (SSR), Incremental Static Regeneration (ISR), and modern React Server Components. This architecture delivers near-instant Time to First Byte (TTFB), flawless indexability for search engine crawlers, and superior Core Web Vitals compared to legacy monolithic CMS or client-only SPA frameworks.',
      badge: 'Architecture',
    },
    {
      question: 'How does DrTechei guarantee 90+ to 100 Google Lighthouse and PageSpeed scores?',
      answer:
        'Every website engineered by DrTechei undergoes strict asset optimization: next-gen WebP/AVIF image formats, zero render-blocking CSS/JS, semantic HTML5 structure, intelligent prefetching, and clean code splitting. We test across emulated 4G mobile devices to guarantee pristine performance in real-world conditions.',
      badge: 'Performance & SEO',
    },
    {
      question: 'Do we retain full source code ownership and intellectual property?',
      answer:
        'Yes, absolutely. Upon milestone completion, you receive 100% intellectual property ownership of all custom source code, design assets, and documentation. Everything is committed to your private GitHub repository with no recurring vendor lock-in fees.',
      badge: 'Legal & Ownership',
    },
    {
      question: 'Can DrTechei integrate with existing CMS platforms like WordPress or Shopify?',
      answer:
        'Yes. We specialize in Headless CMS setups: you can manage your content through familiar interfaces like WordPress, Shopify, or Strapi while your frontend is powered by our high-performance Next.js or React layer. This gives marketing teams full editing autonomy while keeping the website ultra-fast.',
      badge: 'Integrations',
    },
    {
      question: 'What is the typical project engineering timeline from discovery to deployment?',
      answer:
        'Turnkey digital projects typically range from 2 to 6 weeks depending on functional complexity. We operate on two-week agile sprints with staged approval gates: Wireframing & UX → Technical Prototype → Staging Environment → Production Deployment with post-launch hypercare.',
      badge: 'Timeline & SLA',
    },
    {
      question: 'How does your SEO optimization translate into business revenue growth?',
      answer:
        'Technical SEO is foundational: clean semantic markup, schema.org structured data (Organization, LocalBusiness, Breadcrumbs, FAQs), fast TTFB, and mobile responsiveness ensure search algorithms favor your URLs. Higher rankings and sub-second load times directly reduce bounce rates and maximize user conversion.',
      badge: 'ROI & Growth',
    },
  ];

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions and Technical SEO Standards"
      className="py-20 lg:py-28 bg-[#FAFBFD] relative overflow-hidden border-t border-slate-200/80"
    >
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEEDFA] border border-[#D1CDF4] text-xs font-bold text-[#2D2575] uppercase tracking-wider mb-4 shadow-2xs">
            <Search className="w-3.5 h-3.5 text-[#D98E3A]" />
            <span>Search Engine & Technical FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111622] tracking-tight">
            Clear Answers to Technical Questions
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Everything you need to know about our engineering standards, SEO infrastructure, intellectual property guarantees, and delivery frameworks.
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#2D2575]/40 shadow-md shadow-[#2D2575]/5'
                    : 'bg-white/80 hover:bg-white border-slate-200 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D2575]"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-md bg-[#FDF7EF] border border-[#F2BC7B]/50 text-[#A8631B] uppercase tracking-wider">
                        {faq.badge}
                      </span>
                    </div>
                    <span className="text-base sm:text-lg font-bold text-[#111622] leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#2D2575] text-white rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Technical Guarantee Pill */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-[#111622] via-[#2D2575] to-[#111622] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#2B3548]">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#D98E3A]/20 border border-[#D98E3A]/40 flex items-center justify-center text-[#F2BC7B] shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#F2BC7B]" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">
                Have specific custom API or ERP requirements?
              </div>
              <div className="text-[11px] text-slate-300">
                Our principal engineers can audit your current architecture on a discovery call.
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#D98E3A]/25 transition-all active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span>Ask A Principal Engineer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
