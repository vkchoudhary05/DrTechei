import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Euro, 
  Zap, 
  Building2, 
  Users, 
  Globe2, 
  FileCheck, 
  ChevronDown, 
  ChevronUp, 
  Rocket,
  Award
} from 'lucide-react';

interface TechPartnerIrelandPageProps {
  onOpenQuoteModal: () => void;
}

export const TechPartnerIrelandPage: React.FC<TechPartnerIrelandPageProps> = ({ onOpenQuoteModal }) => {
  const { navigate } = useRouter();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const benefits = [
    {
      icon: Rocket,
      title: 'Built for Irish Startups & Scaleups',
      desc: 'Rapidly scale your tech squad without Dublin’s exorbitant recruitment fees, prolonged hiring cycles, or contractor churn.'
    },
    {
      icon: Clock,
      title: 'Full GMT / Irish Standard Time Overlap',
      desc: 'Seamless real-time synchronization during regular Irish business hours. Daily standups, live sprint reviews, and instant Slack access.'
    },
    {
      icon: ShieldCheck,
      title: 'Strict GDPR & EU Data Protection',
      desc: 'Full alignment with Irish and European compliance frameworks. Robust Data Processing Agreements and mutual NDAs signed before work begins.'
    },
    {
      icon: Euro,
      title: 'Cost-Effective Commercial Models',
      desc: 'Dublin contract rates average €90–€150/hr. DrTechei delivers senior full-stack squads at €35–€55/hr with zero hidden payroll fees.'
    },
    {
      icon: FileCheck,
      title: '100% Intellectual Property Handover',
      desc: 'You maintain absolute ownership of all codebase repositories, deployment pipelines, system architecture, and product documentation.'
    },
    {
      icon: Zap,
      title: 'Enterprise Next.js & Sub-Second Speed',
      desc: 'Silicon Docks standard engineering. Sub-second TTFB, 99+ Core Web Vitals, and resilient serverless architectures built for rapid growth.'
    }
  ];

  const techStack = [
    { name: 'Next.js 15 & React 19', tag: 'Fast-Moving Web Apps' },
    { name: 'TypeScript & Node.js', tag: 'Enterprise Grade APIs' },
    { name: 'Headless CMS (Sanity / Strapi)', tag: 'Content Platforms' },
    { name: 'PostgreSQL & Drizzle ORM', tag: 'FinTech & SaaS Data' },
    { name: 'Tailwind CSS & Radix UI', tag: 'Accessible Frontends' },
    { name: 'AWS, Vercel & Docker', tag: 'Resilient Cloud Infra' }
  ];

  const comparison = [
    { metric: 'Dublin Contractor / Agency Rate', local: '€90 - €150 / hr + VAT', drtechei: '€35 - €55 / hr (Transparent Invoicing)' },
    { metric: 'Hiring Lead Time', local: '6 to 12 weeks recruitment', drtechei: 'Squad Deployed within 48 to 72 Hours' },
    { metric: 'Contract Flexibility', local: 'Strict 6-12 month lock-in', drtechei: 'Agile 2-week sprint cycles with zero lock-in' },
    { metric: 'Code & Architecture Review', local: 'Variable quality', drtechei: 'Senior architect code reviews on every pull request' },
    { metric: 'Performance Guarantees', local: 'Best-effort delivery', drtechei: 'Contractual 95+ Core Web Vitals guarantee' }
  ];

  const faqs = [
    {
      q: 'Why do Dublin and Irish businesses partner with DrTechei?',
      a: 'Dublin has become one of the most competitive tech talent markets in Europe, driving senior developer salaries and contractor rates to historic highs. DrTechei solves this bottleneck by providing top-tier, English-fluent engineering squads operating directly in Irish business hours (GMT/IST) at 50% to 60% lower cost.'
    },
    {
      q: 'Can DrTechei augment our existing in-house developers in Ireland?',
      a: 'Absolutely. Many of our Irish clients already have a CTO or a small core engineering team in Dublin or Cork. We integrate seamlessly into your existing Git workflows, Jira boards, and Slack channels, functioning exactly like your internal team.'
    },
    {
      q: 'How do you handle intellectual property (IP) and NDAs under Irish law?',
      a: 'We execute comprehensive, standard bilateral Non-Disclosure Agreements (NDA) and Intellectual Property Assignment agreements that ensure 100% of all code, assets, and documentation belong exclusively to your Irish entity.'
    },
    {
      q: 'What engagement models are available for Irish companies?',
      a: 'We offer two clear engagement models: Dedicated Engineering Squads (monthly sprint-based teams with flexible scaling) or Fixed-Scope Milestone Delivery (ideal for MVPs, major platform rebuilds, or discrete feature releases).'
    },
    {
      q: 'How do we get started?',
      a: 'Book a 30-minute discovery call with our engineering leadership. We will evaluate your technical roadmap, recommend optimal architecture, and deliver an exact proposal within 24 hours.'
    }
  ];

  return (
    <div className="bg-[#FAFBFD] min-h-screen text-slate-900">
      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-[#111622] via-[#1F1958] to-[#2D2575] text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F2BC7B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Region Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
              <span className="text-base">🇮🇪</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F2BC7B]">
                Ireland &amp; Dublin Tech Partnership
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white mb-6">
              Strategic Technology Partner for <span className="text-[#F2BC7B]">Irish Startups</span> &amp; Enterprise Innovators
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              Scale engineering capacity on demand. Silicon Docks-caliber Next.js 15, React, and cloud architectures with full Irish business hours overlap, strict GDPR compliance, and transparent Euro billing.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D98E3A] to-[#B26E20] text-white text-sm font-bold shadow-lg shadow-[#D98E3A]/25 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Calculate Ireland Project Estimate (€)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => navigate('contact')}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-bold backdrop-blur-md transition-all cursor-pointer"
              >
                Book Dublin Discovery Call
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#F2BC7B]">GMT / IST</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Dublin Timezone Sync</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white">48h</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Squad Deployment Speed</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#F2BC7B]">€35-55</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Senior Hourly Bracket</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Value Proposition for Irish Companies */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dublin Office & City Coverage Strip */}
        <div className="mb-14 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🇮🇪</span>
            <div>
              <div className="font-bold text-sm text-[#111622] flex items-center gap-2">
                <span>Ireland &amp; EU Startup Registered Desk</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold">Dublin (Silicon Docks)</span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5 font-mono">
                📍 Silicon Docks, 2 Grand Canal Square, Grand Canal Dock, Dublin 2, D02 A342, Ireland
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-700">
            <span className="font-bold text-slate-900 mr-1">Serving Key Irish Corridors:</span>
            <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 font-bold text-[#2D2575]">Dublin</span>
            <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 font-bold text-amber-800">Cork</span>
            <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200">Galway</span>
            <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200">Limerick</span>
            <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200">Waterford</span>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#D98E3A] mb-3">
            Accelerate Your Irish Tech Ecosystem
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111622] tracking-tight">
            Overcoming Dublin’s Hiring Bottleneck
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4">
            Competing for senior developers in Dublin against multinational tech giants is expensive and slow. DrTechei gives Irish companies immediate access to senior engineering talent without the overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#D98E3A]/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2D2575]/5 text-[#2D2575] flex items-center justify-center mb-5 group-hover:bg-[#2D2575] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#111622] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Cost & Delivery Comparison */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111622] tracking-tight">
              Irish Recruitment &amp; Agency vs. DrTechei Tech Partnership
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Deliver 2x faster with verified senior architects at predictable costs.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#111622] text-white">
                <tr>
                  <th className="p-4 sm:p-5 font-bold">Key Metric</th>
                  <th className="p-4 sm:p-5 font-bold text-slate-300">Local Dublin Agency / Contractors</th>
                  <th className="p-4 sm:p-5 font-bold text-[#F2BC7B]">DrTechei Strategic Tech Partner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparison.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    <td className="p-4 sm:p-5 font-semibold text-[#111622]">{row.metric}</td>
                    <td className="p-4 sm:p-5 text-slate-500">{row.local}</td>
                    <td className="p-4 sm:p-5 font-bold text-[#2D2575] bg-[#FAF5EE]">{row.drtechei}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Tech Stack & Architecture */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#D98E3A] mb-3">
              Production-Ready Engineering
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111622] tracking-tight mb-6">
              Built for Scale, Security &amp; European Standards
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Whether building a FinTech MVP, an enterprise SaaS platform, or migrating from legacy code to Next.js 15, we enforce strict TypeScript typing, sub-second TTFB caching, and automated testing pipelines from day one.
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Zero legacy debt: Modern Next.js 15 App Router &amp; Server Actions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Enterprise compliance: Data encryption at rest and in transit</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Dedicated Slack/Teams channel with direct Lead Architect access</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {techStack.map((tech, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-xs font-bold text-[#D98E3A] uppercase tracking-wide mb-1">{tech.tag}</div>
                <div className="text-sm font-extrabold text-[#111622]">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs for Irish Clients */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111622] tracking-tight">
              Frequently Asked Questions: Ireland Tech Partnership
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Common questions answered for founders and engineering leaders across Ireland.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 font-bold text-[#111622] flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  {openFaqIndex === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#D98E3A] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Banner */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#111622] to-[#2D2575] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Scale Your Irish Tech Squad in 48 Hours?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Connect directly with our Lead Architect for Ireland. We will review your backlog, outline sprint architecture, and deliver an exact proposal with zero obligations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => navigate('contact')}
              className="px-8 py-4 rounded-xl bg-[#D98E3A] hover:bg-[#C27B2A] text-white font-bold text-sm shadow-xl transition-all cursor-pointer"
            >
              Contact Irish Engineering Desk
            </button>
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition-all cursor-pointer"
            >
              Get Instant Project Estimate (€)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
