import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Building2, 
  Users, 
  Globe2, 
  FileCheck, 
  ChevronDown, 
  ChevronUp, 
  Award,
  Layers,
  MapPin,
  Cpu
} from 'lucide-react';

interface TechPartnerIndiaPageProps {
  onOpenQuoteModal: () => void;
}

export const TechPartnerIndiaPage: React.FC<TechPartnerIndiaPageProps> = ({ onOpenQuoteModal }) => {
  const { navigate } = useRouter();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const hubs = [
    { 
      name: 'Delhi NCR (Executive HQ)', 
      address: 'Level 6, Vandhna Bldg, Tolstoy Marg, Connaught Place, New Delhi 110001',
      desc: 'Executive engineering headquarters, enterprise architectural reviews & corporate strategy.' 
    },
    { 
      name: 'Dehradun (Delivery Center)', 
      address: 'IT Park, Sahastradhara Road, Dehradun, Uttarakhand 248001',
      desc: 'Dedicated Next.js 15 delivery pods, automated QA suites & high-velocity sprint pipelines.' 
    },
    { 
      name: 'Bengaluru (Tech Corridor)', 
      desc: 'Deep tech R&D, Next.js specialized frontends, Headless CMS & AI model orchestration.' 
    },
    { 
      name: 'Mumbai (FinTech Cluster)', 
      desc: 'FinTech platforms, high-security payment gateways & banking-grade transaction scale.' 
    },
    { 
      name: 'Hyderabad & Pune', 
      desc: 'Enterprise cloud infrastructure, Kubernetes microservices & continuous CI/CD cutover.' 
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Top 1% Senior Engineering Talent',
      desc: 'We do not hire junior interns or outsource. Every squad member is an experienced senior engineer (5+ years) with deep full-stack mastery.'
    },
    {
      icon: Globe2,
      title: 'Global Delivery & Pan-India Scale',
      desc: 'Seamless delivery for both domestic Indian enterprises and international businesses across Europe (Finland, Ireland, UK), US, and Australia.'
    },
    {
      icon: Zap,
      title: 'Rapid Time-to-Market & Agile Sprints',
      desc: 'Sprint-based milestone delivery. Deploy MVPs in 3 to 6 weeks with production-ready Next.js 15, robust APIs, and CI/CD pipelines.'
    },
    {
      icon: ShieldCheck,
      title: '100% IP & Source Code Ownership',
      desc: 'Complete handover of all repositories, documentation, and cloud architecture. Clean, modular code with zero vendor lock-in.'
    },
    {
      icon: Clock,
      title: '24/7 Delivery & Timezone Flexibility',
      desc: 'Overlapping business hours for European, American, and Indian working days with guaranteed SLA response times.'
    },
    {
      icon: Cpu,
      title: 'Modern Architecture Guarantee',
      desc: 'No obsolete legacy stacks. We build exclusively on Next.js 15, React 19, TypeScript, Node.js, and cloud-native serverless backends.'
    }
  ];

  const techStack = [
    { name: 'Next.js 15 (App Router)', tag: 'Enterprise Web' },
    { name: 'React 19 & TypeScript', tag: 'Interactive UI' },
    { name: 'Node.js & Express / NestJS', tag: 'High-Concurrency APIs' },
    { name: 'GraphQL & REST APIs', tag: 'Data Integration' },
    { name: 'PostgreSQL, MongoDB, Supabase', tag: 'Scalable Databases' },
    { name: 'AWS, GCP, Vercel & Docker', tag: 'Cloud Infrastructure' }
  ];

  const faqs = [
    {
      q: 'Why choose DrTechei as your technology partner in India?',
      a: 'Unlike traditional body-shopping Indian IT giants that delegate projects to junior freshers, DrTechei operates as an Executive Engineering Studio. You get direct access to seasoned architects, modern Next.js/React stacks, 95+ Core Web Vitals guarantees, and 100% source code ownership.'
    },
    {
      q: 'How does DrTechei support companies based in Europe (Ireland, Finland, UK) and North America?',
      a: 'We provide dedicated timezone overlap with Europe (GMT and EET) and the US. Our engineers are 100% fluent in English, participate in daily video standups, and communicate continuously via Slack, Jira, and GitHub.'
    },
    {
      q: 'Can Indian enterprises hire DrTechei for domestic software engineering?',
      a: 'Yes. We work extensively with Indian startups, D2C brands, and enterprises looking for world-class web and cloud engineering, with GST-compliant invoicing in INR (₹) or USD ($).'
    },
    {
      q: 'What is the pricing model for dedicated engineering teams?',
      a: 'We offer two transparent models: Monthly Dedicated Squads (predictable sprint-based billing per senior engineer) and Fixed-Price Project Contracts with milestone-based deliverables.'
    },
    {
      q: 'How quickly can we assemble and onboard an engineering squad?',
      a: 'We can deploy a verified senior squad within 48 to 72 hours. We review your requirements, match certified engineers, and initiate sprint zero immediately.'
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
              <span className="text-base">🇮🇳</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F2BC7B]">
                India &amp; Global Engineering Hub
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white mb-6">
              India’s Elite <span className="text-[#F2BC7B]">Technology Partner</span> for Global Scalability &amp; Enterprise Web
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
              Accelerate your product development with India’s top 1% senior full-stack architects. Dedicated Next.js 15 squads, sub-second performance guarantees, and seamless delivery across Europe, USA, and Pan-India.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D98E3A] to-[#B26E20] text-white text-sm font-bold shadow-lg shadow-[#D98E3A]/25 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Calculate Project Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => navigate('contact')}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-bold backdrop-blur-md transition-all cursor-pointer"
              >
                Book Technical Consultation
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#F2BC7B]">Top 1%</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Senior Developers Only</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white">24/7</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Global Delivery Agility</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#F2BC7B]">99+</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Core Web Vitals Benchmark</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Hubs in India */}
      <section className="py-12 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-bold uppercase tracking-wider text-[#D98E3A] mb-3 text-center">
            Pan-India Talent &amp; Architecture Network
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
            {hubs.map((hub, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 font-bold text-[#111622] text-sm mb-1">
                    <MapPin className="w-4 h-4 text-[#D98E3A] shrink-0" />
                    <span>{hub.name}</span>
                  </div>
                  {hub.address && (
                    <div className="text-[11px] font-medium text-slate-700 bg-white p-2 rounded-lg border border-slate-200/80 mb-2">
                      📍 {hub.address}
                    </div>
                  )}
                  <p className="text-xs text-slate-600 leading-relaxed">{hub.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* India Cities Covered Strip */}
          <div className="mt-6 p-4 rounded-xl bg-indigo-50/50 border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#2D2575] font-bold">
              <span>🇮🇳</span>
              <span>Active Client Engagements &amp; Dedicated Squads Across India:</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 font-medium text-slate-700">
              <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 shadow-2xs font-bold text-[#2D2575]">Delhi NCR</span>
              <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 shadow-2xs font-bold text-emerald-700">Dehradun</span>
              <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 shadow-2xs">Mumbai</span>
              <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 shadow-2xs">Bengaluru</span>
              <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 shadow-2xs">Hyderabad</span>
              <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 shadow-2xs">Chennai</span>
              <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 shadow-2xs">Kolkata</span>
              <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 shadow-2xs">Pune</span>
              <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 shadow-2xs">Ahmedabad</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Advantages */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#D98E3A] mb-3">
            Why High-Growth Companies Partner with Us
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111622] tracking-tight">
            Engineering Precision Without the Agency Red Tape
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4">
            We reject junior delegation and bureaucratic agency models. Every client collaborates directly with certified technical leads.
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

      {/* 4. Tech Stack */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#D98E3A] mb-3">
                Battle-Tested Tech Ecosystem
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111622] tracking-tight mb-6">
                Full-Stack Mastery with Modern Frameworks
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                From high-traffic e-commerce systems to complex enterprise SaaS, we leverage Next.js 15, TypeScript, and cloud-native databases to deliver scalable, sub-second web platforms.
              </p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Sub-second Server-Side Rendering (SSR) &amp; Edge Caching</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Robust API security with JWT, OAuth2, and automated penetration testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>100% intellectual property transfer upon sprint delivery</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {techStack.map((tech, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-xs font-bold text-[#D98E3A] uppercase tracking-wide mb-1">{tech.tag}</div>
                  <div className="text-sm font-extrabold text-[#111622]">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs for India Tech Partnership */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111622] tracking-tight">
            Frequently Asked Questions: India Tech Partnership
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Answers for global and domestic companies partnering with DrTechei in India.
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
      </section>

      {/* 6. CTA Banner */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#111622] to-[#2D2575] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            Partner with India’s Premier Engineering Squad
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Connect directly with our Lead Architect in Delhi NCR. Get a comprehensive technical proposal, timeline, and sprint breakdown in under 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => navigate('contact')}
              className="px-8 py-4 rounded-xl bg-[#D98E3A] hover:bg-[#C27B2A] text-white font-bold text-sm shadow-xl transition-all cursor-pointer"
            >
              Contact India Engineering Desk
            </button>
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition-all cursor-pointer"
            >
              Calculate Project Estimate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
