import React from 'react';
import { PageBreadcrumb } from '../components/PageBreadcrumb';
import { Technologies } from '../components/Technologies';
import { CTA } from '../components/CTA';
import { useRouter } from '../context/RouterContext';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Shield,
  Cpu,
  Zap,
  Code,
  Database,
  Server,
  Layers,
  Globe,
  Mail,
  PhoneCall
} from 'lucide-react';

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

      {/* DEDICATED SPECIALIZED TECH STACK HERO */}
      <section className="relative py-12 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-[#FAFBFD] border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2D2575]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D98E3A]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Stack Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEEDFA] border border-[#D1CDF4] text-xs font-bold text-[#2D2575] uppercase tracking-wider mb-4 shadow-2xs">
                <Cpu className="w-3.5 h-3.5 text-[#D98E3A]" />
                <span>Battle-Tested Engineering Architecture</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-extrabold text-[#111622] tracking-tight leading-[1.15]">
                Technologies We Work With: High Performance & Edge-Ready
              </h1>

              <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
                We select modern frameworks and cloud runtimes engineered for enterprise resilience, sub-second latency, and long-term maintainability. Strictly typed in TypeScript with automated testing pipelines.
              </p>

              {/* Global Offices & Inquiries */}
              <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-slate-600 font-medium">
                <span className="text-slate-400">Engineering Hubs:</span>
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
                  href="mailto:wearedrtechie@gmail.com"
                  className="text-[#2D2575] hover:text-[#D98E3A] font-bold flex items-center gap-1 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D98E3A]" />
                  <span>wearedrtechie@gmail.com</span>
                </a>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-md shadow-[#D98E3A]/25 active:scale-95 transition-all cursor-pointer ring-1 ring-white/30"
                >
                  <Sparkles className="w-4 h-4 text-amber-100" />
                  <span>Estimate Project Tech Stack</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => navigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#2D2575] bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-all cursor-pointer"
                >
                  <span>Request Architectural Consultation</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column: 3-Tier Enterprise Cloud Pipeline Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
                <div className="bg-[#FAFBFD] p-4 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#D98E3A]" />
                    <span className="text-xs font-bold text-[#111622] uppercase tracking-wider">
                      Edge-to-Database Architecture
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Sub-50ms SLA
                  </span>
                </div>

                <div className="p-4 sm:p-5 space-y-3">
                  {/* Tier 1 */}
                  <div className="p-3 rounded-xl bg-[#FAFBFD] border border-slate-200/80 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#EEEDFA] text-[#2D2575] flex items-center justify-center shrink-0 font-bold text-xs">
                      01
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#111622]">Global Edge & CDN Layer</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">Vercel Edge / Cloudflare / AWS CloudFront with automated SSL & DDoS defense.</p>
                    </div>
                  </div>

                  {/* Tier 2 */}
                  <div className="p-3 rounded-xl bg-[#FAFBFD] border border-slate-200/80 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FDF7EF] text-[#D98E3A] flex items-center justify-center shrink-0 font-bold text-xs">
                      02
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#111622]">Application & Compute Layer</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">Next.js 15 App Router (SSR/SSG), React 19, Node.js microservices & GraphQL.</p>
                    </div>
                  </div>

                  {/* Tier 3 */}
                  <div className="p-3 rounded-xl bg-[#FAFBFD] border border-slate-200/80 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-xs">
                      03
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#111622]">Database & Storage Layer</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">PostgreSQL, Redis Cache, MongoDB, Supabase & Headless CMS decoupled stores.</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1 text-[#2D2575] font-semibold text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Strict Type Safety Guaranteed
                    </span>
                    <span className="text-[11px] text-slate-400">TypeScript 5.8+</span>
                  </div>
                </div>
              </div>
            </motion.div>
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
                    <td className="p-4 sm:p-5 text-slate-500">{row.legacy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        onOpenQuoteModal={onOpenQuoteModal}
        onTalkToUs={() => navigate('contact')}
      />
    </div>
  );
};
