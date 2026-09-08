import React from 'react';
import { PageBreadcrumb } from '../components/PageBreadcrumb';
import { Technologies } from '../components/Technologies';
import { CTA } from '../components/CTA';
import { useRouter } from '../context/RouterContext';
import { Sparkles, ArrowRight, CheckCircle2, Shield, Cpu, Zap, Code, Database, Server } from 'lucide-react';

interface TechnologiesPageProps {
  onOpenQuoteModal: () => void;
}

export const TechnologiesPage: React.FC<TechnologiesPageProps> = ({ onOpenQuoteModal }) => {
  const { navigate } = useRouter();

  const comparisonRows = [
    {
      feature: 'PageSpeed & Lighthouse Score',
      modern: '95 - 100 on Mobile & Desktop',
      legacy: '40 - 65 with heavy JS bundles',
    },
    {
      feature: 'Search Engine Indexing (SEO)',
      modern: 'Server-Side Rendered (SSR) & Static HTML',
      legacy: 'Client-side render delay (Googlebot crawl budget waste)',
    },
    {
      feature: 'Cumulative Layout Shift (CLS)',
      modern: 'CLS < 0.05 (No jumping UI elements)',
      legacy: 'High shift as client scripts load unsized images',
    },
    {
      feature: 'Type Safety & Code Rigor',
      modern: 'Strict TypeScript across Frontend & Backend',
      legacy: 'Untyped JavaScript prone to silent runtime crashes',
    },
    {
      feature: 'Content Authoring Experience',
      modern: 'Headless CMS (WordPress, Strapi, Sanity)',
      legacy: 'Clunky monolithic database-heavy admin portals',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Header */}
      <PageBreadcrumb currentPage="technologies" subtitle="Enterprise Tech Stack & Edge Infrastructure" />

      {/* SEO Dedicated Hero */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-[#FAFBFD] border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEEDFA] border border-[#D1CDF4] text-xs font-bold text-[#2D2575] uppercase tracking-wider mb-5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
              <span>Modern Precision Tech Stack</span>
            </div>

            <h1 className="text-3xl sm:text-5xl 2xl:text-6xl font-extrabold text-[#111622] tracking-tight leading-tight">
              Technologies We Work With: Battle-Tested & High Performance
            </h1>

            <p className="mt-5 text-base sm:text-xl text-slate-600 leading-relaxed">
              We select modern frameworks and cloud runtimes designed for enterprise resilience, instant load times, and long-term maintainability.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-md shadow-[#D98E3A]/25 active:scale-95 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-100" />
                <span>Estimate Project Tech Stack</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Technologies Grid */}
      <Technologies />

      {/* Technical Architecture Comparison Matrix */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111622]">
              Why Our Modern Architecture Beats Legacy Websites
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Comparing DrTechei's Next.js 15 & Headless edge stack against legacy monolithic systems.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-[#FAFBFD] shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100/80 border-b border-slate-200 text-[#111622]">
                  <th className="p-4 sm:p-5 font-bold uppercase text-[11px] tracking-wider">Architecture Dimension</th>
                  <th className="p-4 sm:p-5 font-bold text-[#2D2575] bg-[#EEEDFA]/60">DrTechei Modern Stack</th>
                  <th className="p-4 sm:p-5 font-bold text-slate-500">Legacy Monoliths</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/80 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-[#111622]">{row.feature}</td>
                    <td className="p-4 sm:p-5 text-[#2D2575] font-semibold bg-[#EEEDFA]/20">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.modern}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-500">
                      <span>{row.legacy}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
