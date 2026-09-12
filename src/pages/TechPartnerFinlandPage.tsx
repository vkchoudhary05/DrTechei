import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { 
  ShieldCheck, 
  Clock, 
  Code2, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Euro, 
  Zap, 
  Building2, 
  Users, 
  Globe2, 
  FileCheck, 
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Award,
  Terminal,
  Server
} from 'lucide-react';

interface TechPartnerFinlandPageProps {
  onOpenQuoteModal: () => void;
}

export const TechPartnerFinlandPage: React.FC<TechPartnerFinlandPageProps> = ({ onOpenQuoteModal }) => {
  const { navigate } = useRouter();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const benefits = [
    {
      icon: ShieldCheck,
      title: '100% GDPR & EU Data Sovereignty',
      desc: 'Full compliance with strict European and Finnish privacy regulations. Clean data governance with zero overseas data leakage.'
    },
    {
      icon: Clock,
      title: 'EET (Helsinki) Timezone Alignment',
      desc: 'Direct daily overlap with Helsinki, Espoo, and Tampere teams for instant Slack/Teams communication and real-time sprint syncs.'
    },
    {
      icon: Euro,
      title: 'Transparent Euro (€) Billing & ROI',
      desc: 'Save up to 60% compared to local Finnish IT consultancy rates (€120–€180/hr) while retaining top 1% senior engineering caliber.'
    },
    {
      icon: FileCheck,
      title: '100% Source Code & IP Transfer',
      desc: 'Unconditional intellectual property transfer. All GitHub repos, CI/CD pipelines, and cloud credentials belong solely to your company.'
    },
    {
      icon: Zap,
      title: 'Nordic Quality & Clean Architecture',
      desc: 'Minimalist, hyper-efficient code adhering to Nordic engineering standards. 98+ Core Web Vitals and resilient microservices.'
    },
    {
      icon: Users,
      title: 'Certified Senior Tech Squads',
      desc: 'No junior interns. You get dedicated senior architects with 8+ years of production experience in Next.js, React, and Node.js.'
    }
  ];

  const techStack = [
    { name: 'Next.js 15 (App Router)', tag: 'Enterprise Web' },
    { name: 'React 19 & TypeScript', tag: 'Interactive UI' },
    { name: 'Node.js & GraphQL APIs', tag: 'Microservices' },
    { name: 'Tailwind CSS & Headless UI', tag: 'Nordic Minimalism' },
    { name: 'PostgreSQL & Supabase', tag: 'Reliable Data' },
    { name: 'AWS & Vercel Edge Cloud', tag: 'Ultra-low Latency' }
  ];

  const comparison = [
    { metric: 'Average Hourly Rate', local: '€110 - €180 / hr', drtechei: '€35 - €55 / hr (Predictable Sprints)' },
    { metric: 'Team Seniority', local: 'Mix of juniors & mid-level', drtechei: '100% Verified Senior Architects (8+ yrs)' },
    { metric: 'Onboarding Speed', local: '4 to 8 weeks recruitment', drtechei: '48 to 72 Hours Instant Deployment' },
    { metric: 'Performance Guarantee', local: 'Standard delivery', drtechei: 'Guaranteed 95+ Core Web Vitals & Sub-second TTFB' },
    { metric: 'IP & Code Ownership', local: 'Often retain proprietary tooling', drtechei: '100% Complete IP Handover from Day One' },
    { metric: 'Timezone Overlap', local: 'Local (EET)', drtechei: 'Full EET Business Hours Overlap & Support' }
  ];

  const faqs = [
    {
      q: 'Why should Finnish companies partner with DrTechei instead of a local Helsinki agency?',
      a: 'Helsinki agencies charge upwards of €120–€180/hour due to high domestic overhead. DrTechei provides senior, English-fluent engineers specialized in Next.js, React, and Node.js at €35–€55/hour, offering identical European code quality, strict GDPR compliance, and full EET timezone synchronization at a fraction of the cost.'
    },
    {
      q: 'How does DrTechei comply with GDPR and EU data protection standards?',
      a: 'We strictly adhere to EU Regulation 2016/679 (GDPR). We sign bilateral NDAs and Data Processing Agreements (DPA), operate exclusively on EU-based cloud regions (Frankfurt, Stockholm, Helsinki) when requested, and enforce stringent SOC2/ISO-aligned development protocols.'
    },
    {
      q: 'Can DrTechei integrate with our existing in-house team in Finland?',
      a: 'Yes. We operate under two flexible engagement models: Team Augmentation (senior engineers embedding directly into your Jira, GitHub, and Slack) or Dedicated Project Squads (delivering full products end-to-end under guaranteed SLAs).'
    },
    {
      q: 'What is the onboarding process and how quickly can we start?',
      a: 'We can deploy a senior squad within 48 to 72 hours. We start with a technical discovery call, review your architecture or requirements, assemble the team, and begin sprint zero immediately.'
    },
    {
      q: 'In which currency do you invoice Finnish clients?',
      a: 'All invoices are issued in Euros (€) with clear milestone-based or monthly sprint billing via direct SEPA bank transfer or corporate card.'
    }
  ];

  return (
    <div className="bg-[#FAFBFD] min-h-screen text-slate-900">
      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-[#111622] via-[#1A1842] to-[#2D2575] text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F2BC7B_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Region Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
              <span className="text-base">🇫🇮</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F2BC7B]">
                Finland &amp; Nordic Tech Partnership
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white mb-6">
              Dedicated Technology Partner for <span className="text-[#F2BC7B]">Finnish Enterprises</span> &amp; High-Growth Startups
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              Scale your digital products with top 1% senior Next.js, React, and cloud architects. Full EET (Helsinki) timezone alignment, 100% GDPR compliance, and transparent Euro billing—at 60% lower cost than domestic agencies.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D98E3A] to-[#B26E20] text-white text-sm font-bold shadow-lg shadow-[#D98E3A]/25 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Calculate Project Estimate (€)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => navigate('contact')}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-bold backdrop-blur-md transition-all cursor-pointer"
              >
                Book Technical Discovery Call
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#F2BC7B]">EET</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Helsinki Work Hours Overlap</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
                <div className="text-xs text-slate-300 font-medium mt-1">GDPR &amp; EU Code Ownership</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#F2BC7B]">€35-55</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Senior Hourly Bracket</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Value Proposition for Nordic Businesses */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Helsinki Office & City Coverage Strip */}
        <div className="mb-14 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🇫🇮</span>
            <div>
              <div className="font-bold text-sm text-[#111622] flex items-center gap-2">
                <span>Nordic &amp; Baltic Registered Desk</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">Helsinki (Kamppi)</span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5 font-mono">
                📍 Mannerheimintie 12 B, Kamppi, 00100 Helsinki, Finland
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-700">
            <span className="font-bold text-slate-900 mr-1">Serving Key Tech Corridors:</span>
            <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 font-bold text-[#2D2575]">Helsinki</span>
            <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 font-bold text-sky-700">Espoo (Otaniemi)</span>
            <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200">Tampere</span>
            <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200">Vantaa</span>
            <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200">Oulu</span>
            <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200">Turku</span>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#D98E3A] mb-3">
            Why Finnish Leaders Choose DrTechei
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111622] tracking-tight">
            Engineered for Nordic Quality &amp; European Reliability
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4">
            From Espoo technology hubs to Helsinki venture-backed innovators, we provide the architectural rigour and agility needed to outpace competition.
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

      {/* 3. Cost Comparison Table */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111622] tracking-tight">
              Helsinki Local Agency vs. DrTechei Tech Partner
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Compare transparent value, delivery speed, and technical quality.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#111622] text-white">
                <tr>
                  <th className="p-4 sm:p-5 font-bold">Key Metric</th>
                  <th className="p-4 sm:p-5 font-bold text-slate-300">Local Finnish Agency</th>
                  <th className="p-4 sm:p-5 font-bold text-[#F2BC7B]">DrTechei Global Tech Partner</th>
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

      {/* 4. Technology Stack & Nordic Standards */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#D98E3A] mb-3">
              Modern Enterprise Ecosystem
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111622] tracking-tight mb-6">
              Precision Architecture for Finnish Tech Leaders
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              We specialize in cutting-edge TypeScript full-stack environments. Whether you need a high-converting B2B SaaS platform, a modern headless e-commerce store, or real-time IoT dashboards, our code is documented, tested, and containerized for frictionless handoff.
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Zero vendor lock-in with clean Docker &amp; Kubernetes deployments</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Comprehensive test suites (Jest, Playwright, Cypress) with CI/CD</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Green computing standards: sub-second load times reduce server carbon footprint</span>
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

      {/* 5. FAQs for Finnish Clients */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111622] tracking-tight">
              Frequently Asked Questions: Finland Partnership
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Everything Finnish business leaders ask before initiating a partnership.
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
            Ready to Accelerate Your Engineering Roadmap in Finland?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Schedule a confidential 30-minute discovery session with our Lead Architect. Get a comprehensive technical proposal and sprint breakdown within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => navigate('contact')}
              className="px-8 py-4 rounded-xl bg-[#D98E3A] hover:bg-[#C27B2A] text-white font-bold text-sm shadow-xl transition-all cursor-pointer"
            >
              Contact Finnish Engineering Desk
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
