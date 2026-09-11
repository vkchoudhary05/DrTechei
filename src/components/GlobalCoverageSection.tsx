import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe2,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  PhoneCall,
  Calendar
} from 'lucide-react';
import { useRouter } from '../context/RouterContext';

interface RegionInfo {
  id: 'europe' | 'australia' | 'canada' | 'india';
  name: string;
  flag: string;
  badge: string;
  headline: string;
  timezone: string;
  timeOffset: string;
  cities: string[];
  keyBenefits: string[];
  overlapHours: string;
  compliance: string;
  caseStudyHighlight: string;
}

export const GlobalCoverageSection: React.FC = () => {
  const { navigate } = useRouter();
  const [activeRegion, setActiveRegion] = useState<'europe' | 'australia' | 'canada' | 'india'>('europe');
  const [liveTimes, setLiveTimes] = useState<Record<string, string>>({});

  const regions: Record<string, RegionInfo> = {
    europe: {
      id: 'europe',
      name: 'Europe & UK',
      flag: '🇪🇺 🇬🇧',
      badge: 'Tier-1 European Tech Partner',
      headline: 'Dedicated Tech Partner for UK, Germany, Ireland, Finland & EU Scaleups',
      timezone: 'GMT / BST / CET / EET',
      timeOffset: '4 - 6 Hours Daily Live Overlap',
      cities: ['London (UK)', 'Dublin (Ireland)', 'Berlin (Germany)', 'Helsinki (Finland)', 'Amsterdam (Netherlands)', 'Paris (France)'],
      keyBenefits: [
        'Strict GDPR & European Data Protection Compliance',
        'Direct English-fluent senior engineering leads',
        'Overlapping afternoon sprints for real-time Slack/Teams collaboration',
        '100% intellectual property assignment under European commercial law'
      ],
      overlapHours: '13:00 - 19:00 CET (Peak Agile Collaboration Window)',
      compliance: 'GDPR Certified • ISO 27001 Aligned • Strict IP Transfer',
      caseStudyHighlight: 'Delivered a Next.js 15 e-commerce engine for an Irish retail brand with 0.35s LCP and 99 PageSpeed.'
    },
    australia: {
      id: 'australia',
      name: 'Australia & NZ',
      flag: '🇦🇺 🇳🇿',
      badge: 'Australia Trusted Tech Partner',
      headline: 'Software Development Partner for Sydney, Melbourne, Brisbane & Perth',
      timezone: 'AEST / AEDT / AWST',
      timeOffset: 'Full Morning Working Sync Window',
      cities: ['Sydney (NSW)', 'Melbourne (VIC)', 'Brisbane (QLD)', 'Perth (WA)', 'Auckland (NZ)'],
      keyBenefits: [
        'Dedicated early morning squads for Australian business hours',
        'Rapid response SLA under 60 minutes during Aussie business days',
        'High-velocity delivery tailored to fast-moving Australasian startups',
        'Transparent weekly sprint demos & production staging branches'
      ],
      overlapHours: '09:00 - 14:00 AEST (Instant Communication & Daily Standup)',
      compliance: 'Australian Privacy Principles (APP) • Enterprise NDA Protection',
      caseStudyHighlight: 'Engineered a real-time fintech dashboard for a Sydney wealthtech startup with 18ms API response.'
    },
    canada: {
      id: 'canada',
      name: 'Canada & USA',
      flag: '🇨🇦 🇺🇸',
      badge: 'North American Tech Partner',
      headline: 'Digital Engineering Partner for Toronto, Vancouver, Montreal & US Firms',
      timezone: 'EST / EDT / PST / PDT',
      timeOffset: 'Convenient Afternoon Sprints',
      cities: ['Toronto (ON)', 'Vancouver (BC)', 'Montreal (QC)', 'Ottawa (ON)', 'New York / SF (US)'],
      keyBenefits: [
        'Late-shift senior engineers providing seamless EST/PST overlap',
        'Next.js 15 and Headless CMS architectures matching North American enterprise standards',
        'Zero vendor lock-in with clean Dockerized microservices & full documentation',
        'Competitive development rates with high North American delivery caliber'
      ],
      overlapHours: '09:00 - 13:00 EST / PST (Sprint Reviews & Architecture Alignment)',
      compliance: 'PIPEDA Compliant • SOC 2 Type II Practices • Clean IP Ownership',
      caseStudyHighlight: 'Modernized a Toronto SaaS platform, cutting cloud bills by 42% and boosting Lighthouse from 41 to 98.'
    },
    india: {
      id: 'india',
      name: 'All India (Pan-India)',
      flag: '🇮🇳',
      badge: '#1 Pan-India Tech Partner',
      headline: 'Full Pan-India Coverage: Delhi NCR, Bengaluru, Mumbai, Hyderabad, Pune & Beyond',
      timezone: 'IST (UTC +5:30)',
      timeOffset: 'Immediate Full-Day Availability',
      cities: [
        'Delhi NCR (Noida, Gurgaon)',
        'Bengaluru (Silicon Valley)',
        'Mumbai & Pune (Tech & Finance)',
        'Hyderabad & Chennai (IT Hubs)',
        'Kolkata & Ahmedabad',
        'Jaipur, Chandigarh, Kochi & All 28 States'
      ],
      keyBenefits: [
        'Comprehensive Pan-India coverage: Tier 1 tech capitals & Tier 2 innovation hubs',
        'On-site technical consultation & hybrid agile workshops available in major metros',
        'Direct founder & senior architect access with zero bureaucratic barriers',
        'End-to-end capabilities: from MVP validation to enterprise high-concurrency scaling'
      ],
      overlapHours: '09:00 - 21:00 IST (Full-Day Continuous Engineering & Support)',
      compliance: 'Indian IT Act Compliant • MSME Registered • Direct GST Billing',
      caseStudyHighlight: 'Scaled a pan-Indian logistics aggregator handling 2.5M requests/day at 99.99% uptime.'
    }
  };

  // Update real-time clocks for the major hubs
  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const formatTime = (timeZone: string) => {
        try {
          return new Intl.DateTimeFormat('en-GB', {
            timeZone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
          }).format(now);
        } catch {
          return '--:--:--';
        }
      };

      setLiveTimes({
        london: formatTime('Europe/London'),
        dublin: formatTime('Europe/Dublin'),
        berlin: formatTime('Europe/Berlin'),
        sydney: formatTime('Australia/Sydney'),
        toronto: formatTime('America/Toronto'),
        delhi: formatTime('Asia/Kolkata'),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const current = regions[activeRegion];

  return (
    <section 
      id="global-tech-partner-section"
      className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-slate-50/70 to-white text-slate-900 border-b border-slate-200/90 overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-[#2D2575]/5 via-[#6366F1]/5 to-[#D98E3A]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with targeted SEO keywords */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#EEEDFA] text-[#2D2575] border border-[#2D2575]/15 mb-4 shadow-2xs">
            <Globe2 className="w-3.5 h-3.5 text-[#D98E3A]" />
            <span className="font-bold">Global Tech Partner Network</span>
            <span className="text-[#D98E3A]">•</span>
            <span>Europe, Australia, Canada &amp; All India</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111622] tracking-tight leading-tight">
            Your Dedicated{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D2575] via-[#4338CA] to-[#D98E3A]">
              Technology Partner
            </span>{' '}
            Worldwide
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you are an ambitious scaleup in <strong className="text-slate-800 font-semibold">London, Dublin, or Berlin</strong>, a fast-growing venture in <strong className="text-slate-800 font-semibold">Sydney or Melbourne</strong>, a modern enterprise in <strong className="text-slate-800 font-semibold">Toronto or Vancouver</strong>, or scaling across <strong className="text-slate-800 font-semibold">all of India (Delhi NCR, Bengaluru, Mumbai, Pune, Hyderabad)</strong>, DrTechei delivers world-class web applications with guaranteed Core Web Vitals speed.
          </p>

          {/* Live Clocks Ticker */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 p-2 rounded-2xl bg-white border border-slate-200/90 shadow-2xs text-xs font-mono">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-100">
              <span>🇮🇳 Delhi:</span>
              <span className="font-bold text-[#2D2575]">{liveTimes.delhi || 'Live'}</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-100">
              <span>🇬🇧 London:</span>
              <span className="font-bold text-[#2D2575]">{liveTimes.london || 'Live'}</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-100">
              <span>🇦🇺 Sydney:</span>
              <span className="font-bold text-[#2D2575]">{liveTimes.sydney || 'Live'}</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-100">
              <span>🇨🇦 Toronto:</span>
              <span className="font-bold text-[#2D2575]">{liveTimes.toronto || 'Live'}</span>
            </div>
          </div>
        </div>

        {/* Region Selector Pills */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 shadow-2xs max-w-2xl w-full">
            {(['europe', 'australia', 'canada', 'india'] as const).map((rKey) => {
              const reg = regions[rKey];
              const isSelected = activeRegion === rKey;
              return (
                <button
                  key={rKey}
                  type="button"
                  onClick={() => setActiveRegion(rKey)}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#2D2575] text-white shadow-sm'
                      : 'text-slate-600 hover:text-[#2D2575] hover:bg-white/70'
                  }`}
                >
                  <span className="text-base leading-none">{reg.flag}</span>
                  <span className="truncate">{reg.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Region Deep Dive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRegion}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 md:p-10 shadow-xl shadow-slate-200/40 text-left relative overflow-hidden"
          >
            {/* Top Accent Gradient Border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2D2575] via-[#6366F1] to-[#D98E3A]" />

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Side: Regional Details & Capabilities */}
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#D98E3A]/15 text-[#B26E20] border border-[#D98E3A]/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{current.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  {current.headline}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  As your dedicated tech partner, DrTechei integrates seamlessly into your product engineering workflows with zero friction. You gain senior full-stack developers, clear daily standups, and rigorous code reviews aligned with your timezone.
                </p>

                {/* Cities Coverage Chips */}
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#D98E3A]" />
                    <span>Key Service Hubs &amp; Coverage:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {current.cities.map((city) => (
                      <span
                        key={city}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200/80"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bulleted Guarantees */}
                <div className="space-y-2.5 pt-2">
                  {current.keyBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Working Cadence, Compliance & Direct Booking */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 space-y-4">
                  
                  {/* Timezone & Overlap Widget */}
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      <Clock className="w-4 h-4 text-[#2D2575]" />
                      <span>Timezone Alignment</span>
                    </div>
                    <div className="text-sm font-bold text-slate-900">{current.timezone}</div>
                    <div className="text-xs text-emerald-700 font-semibold mt-0.5 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{current.overlapHours}</span>
                    </div>
                  </div>

                  {/* Compliance & Legal Guarantee */}
                  <div className="pt-3 border-t border-slate-200/80">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      <ShieldCheck className="w-4 h-4 text-[#D98E3A]" />
                      <span>Standards &amp; IP Protection</span>
                    </div>
                    <div className="text-xs text-slate-600 font-medium">
                      {current.compliance}
                    </div>
                  </div>

                  {/* Case study proof snippet */}
                  <div className="pt-3 border-t border-slate-200/80">
                    <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Verified Impact In Region:
                    </div>
                    <div className="text-xs text-slate-600 italic bg-white p-2.5 rounded-xl border border-slate-200/60">
                      "{current.caseStudyHighlight}"
                    </div>
                  </div>

                  {/* Regional Direct CTA */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => navigate('contact')}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#2D2575] to-[#D98E3A] hover:from-[#231C61] hover:to-[#B26E20] shadow-md shadow-[#2D2575]/20 cursor-pointer transition-all"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Regional Scoping Call</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="text-center text-[11px] text-slate-500 mt-2 font-medium">
                      24-Hour SLA • Free Technical Architecture Review
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
