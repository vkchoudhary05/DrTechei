import React from 'react';
import { PageBreadcrumb } from '../components/PageBreadcrumb';
import { About } from '../components/About';
import { TrustValueStrip } from '../components/TrustValueStrip';
import { CTA } from '../components/CTA';
import { useRouter } from '../context/RouterContext';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Users,
  Target,
  HeartHandshake,
  Globe,
  MapPin,
  Mail,
  PhoneCall,
  CheckCircle2,
  Building2,
  Cpu
} from 'lucide-react';

interface AboutPageProps {
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  const { navigate } = useRouter();

  const coreValues = [
    {
      title: 'Craftsmanship & Diagnostic Rigor',
      desc: 'We treat code as enduring engineering, not disposable marketing collateral. Everything is strictly typed, modular, and performant.',
      icon: Target,
    },
    {
      title: '100% Client IP Ownership',
      desc: 'You paid for it, you own it. Complete repository transfer, clean documentation, and no vendor lock-in.',
      icon: ShieldCheck,
    },
    {
      title: 'Senior-Level Accountability',
      desc: 'Direct communication with seasoned technical architects who have built systems that handle millions of requests.',
      icon: Users,
    },
    {
      title: 'Radical Transparency',
      desc: 'Clear sprint timelines, honest estimates, and proactive technical guidance before writing a single line of code.',
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Header */}
      <PageBreadcrumb currentPage="about" subtitle="Engineering Excellence & Senior Software Craft" />

      {/* DEDICATED, SPECIALIZED ABOUT HERO WITH DUAL GLOBAL HUBS */}
      <section className="relative py-12 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-[#FAFBFD] border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2D2575]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D98E3A]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Mission & Identity */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEEDFA] border border-[#D1CDF4] text-xs font-bold text-[#2D2575] uppercase tracking-wider mb-4 shadow-2xs">
                <Globe className="w-3.5 h-3.5 text-[#D98E3A]" />
                <span>Global Engineering Presence • India & Finland</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-extrabold text-[#111622] tracking-tight leading-[1.15]">
                Engineering High-Performance Web Systems Worldwide
              </h1>

              <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
                DrTechei IT Solutions is a boutique software engineering consultancy uniting senior technical architects and product designers across our global engineering hubs in India (Delhi), Finland, and Ireland. We eliminate technical debt and build enduring digital systems.
              </p>

              {/* Direct Reach */}
              <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-600 font-medium">
                <span className="text-slate-400">Direct Inquiries:</span>
                <a
                  href="mailto:wearedrtechie@gmail.com"
                  className="text-[#2D2575] hover:text-[#D98E3A] font-bold flex items-center gap-1 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D98E3A]" />
                  <span>wearedrtechie@gmail.com</span>
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="tel:+18005408324"
                  className="text-slate-700 hover:text-[#2D2575] font-semibold flex items-center gap-1 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#D98E3A]" />
                  <span>+1 (800) 540-TECH</span>
                </a>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => navigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-md shadow-[#D98E3A]/25 active:scale-95 transition-all cursor-pointer ring-1 ring-white/30"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={onOpenQuoteModal}
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#2D2575] bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#D98E3A]" />
                  <span>Get Ballpark Estimate</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column: Global Hubs Interactive Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
                <div className="bg-[#FAFBFD] p-4 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#D98E3A]" />
                    <span className="text-xs font-bold text-[#111622] uppercase tracking-wider">
                      Global Engineering Hubs
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Active Operations
                  </span>
                </div>

                <div className="p-4 sm:p-5 space-y-3.5">
                  {/* India Hub */}
                  <div className="p-3 rounded-xl bg-[#FAFBFD] border border-slate-200/80">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">🇮🇳</span>
                        <div>
                          <h4 className="text-sm font-bold text-[#111622]">India Engineering Center</h4>
                          <p className="text-xs text-slate-500">Delhi NCR, India</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-[#2D2575] bg-[#EEEDFA] px-2 py-0.5 rounded border border-[#D1CDF4]">
                        Core R&D
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Next.js 15 full-stack architecture, high-concurrency Node.js microservices, database optimizations, and automated CI/CD pipelines.
                    </p>
                  </div>

                  {/* Finland Hub */}
                  <div className="p-3 rounded-xl bg-[#FAFBFD] border border-slate-200/80">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">🇫🇮</span>
                        <div>
                          <h4 className="text-sm font-bold text-[#111622]">Finland European Hub</h4>
                          <p className="text-xs text-slate-500">Helsinki, Finland</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-[#D98E3A] bg-[#FDF7EF] px-2 py-0.5 rounded border border-[#F2BC7B]/60">
                        EU Strategic
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      European client partnerships, GDPR compliance architecture, enterprise UX design systems, and international cloud infrastructure.
                    </p>
                  </div>

                  {/* Ireland Hub */}
                  <div className="p-3 rounded-xl bg-[#FAFBFD] border border-slate-200/80">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">🇮🇪</span>
                        <div>
                          <h4 className="text-sm font-bold text-[#111622]">Ireland Enterprise Hub</h4>
                          <p className="text-xs text-slate-500">Dublin, Ireland</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        EMEA Cloud
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Global client strategy, enterprise cloud solutions, continuous compliance, and round-the-clock technical architecture oversight.
                    </p>
                  </div>

                  {/* Trust Reassurance Footnote */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1 text-[#2D2575] font-semibold text-[11px]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#D98E3A]" />
                      <span>Zero junior handoffs</span>
                    </div>
                    <span className="text-[11px] text-slate-400">Senior architects only</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main About Component */}
      <About />

      {/* Core Values Grid */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111622]">
              Our Guiding Engineering Principles
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              The foundational values that steer our technical decisions and client partnerships.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200 hover:border-[#D98E3A]/40 transition-all hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EEEDFA] text-[#2D2575] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#111622] mb-2">{v.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <TrustValueStrip />

      {/* Strategic CTA */}
      <CTA
        onOpenQuoteModal={onOpenQuoteModal}
        onTalkToUs={() => navigate('contact')}
      />
    </div>
  );
};
