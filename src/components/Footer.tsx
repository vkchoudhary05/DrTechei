import React, { useState } from 'react';
import { Logo } from './Logo';
import { useRouter } from '../context/RouterContext';
import { PageRoute } from '../types/router';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  ShieldCheck, 
  FileText, 
  X,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Globe2,
  Clock,
  ArrowRight,
  Building2,
  Zap
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent, route: PageRoute) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    if (typeof document !== 'undefined') {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    navigate(route, { scrollToTop: true });
  };

  // Registered Corporate Headquarters & Core Engineering Labs (India)
  const registeredOffices = [
    {
      country: 'India',
      flag: '🇮🇳',
      city: 'New Delhi',
      title: 'Delhi NCR Corporate HQ',
      badge: 'Registered Office',
      badgeType: 'registered' as const,
      isRegistered: true,
      address: 'Level 6, Vandhna Building, Tolstoy Marg, Connaught Place, New Delhi 110001',
      corridor: 'Connaught Place • Gurgaon • Noida',
      timezone: 'IST (UTC+5:30)',
      email: 'india@drtechei.com',
      actionLabel: 'View India Partner Hub',
      tags: ['Pan-India HQ', '100% IP Ownership', 'Architecture'],
      route: 'technology-partner-india' as PageRoute
    },
    {
      country: 'India',
      flag: '🇮🇳',
      city: 'Dehradun',
      title: 'Dehradun Delivery Hub',
      badge: 'R&D Center',
      badgeType: 'registered' as const,
      isRegistered: true,
      address: 'IT Park, Sahastradhara Road, Dehradun, Uttarakhand 248001',
      corridor: 'Software Engineering & Cloud Labs',
      timezone: 'IST (UTC+5:30)',
      email: 'india@drtechei.com',
      actionLabel: 'View Delivery Hub',
      tags: ['Next.js 15 Labs', 'Full-Stack Squads', 'Core Web Vitals'],
      route: 'technology-partner-india' as PageRoute
    }
  ];

  // Dedicated International Engineering Services & Regional Client Desks
  const internationalServices = [
    {
      country: 'Ireland',
      flag: '🇮🇪',
      city: 'Dublin & UK Corridor',
      title: 'Ireland Client Services',
      badge: 'Dedicated Services',
      badgeType: 'service' as const,
      isRegistered: false,
      serviceDesc: 'Dedicated Next.js & React agile squads for Irish startups and scaleups across Dublin (Silicon Docks), Cork, and Galway with 100% IP handover.',
      corridor: 'Dublin • Cork • Galway • London',
      timezone: 'GMT / Irish Time (UTC+0 / +1)',
      email: 'ireland@drtechei.com',
      actionLabel: 'View Ireland Partner Portal',
      tags: ['Silicon Docks Standards', 'Full GMT Overlap', 'GDPR Ready'],
      route: 'technology-partner-ireland' as PageRoute
    },
    {
      country: 'Finland',
      flag: '🇫🇮',
      city: 'Helsinki & Nordics Corridor',
      title: 'Finland Client Services',
      badge: 'Dedicated Services',
      badgeType: 'service' as const,
      isRegistered: false,
      serviceDesc: 'Dedicated cloud engineering, headless CMS, and sub-second web performance squads serving Helsinki, Espoo, and Tampere with strict GDPR compliance.',
      corridor: 'Helsinki • Espoo • Tampere • Nordics',
      timezone: 'EET / Helsinki Time (UTC+2 / +3)',
      email: 'nordics@drtechei.com',
      actionLabel: 'View Finland Partner Portal',
      tags: ['Nordic Quality', 'EET Timezone Overlap', 'Sub-Second Speed'],
      route: 'technology-partner-finland' as PageRoute
    }
  ];

  return (
    <>
      <footer className="bg-[#0A0E17] text-slate-400 pt-16 pb-12 border-t border-[#1C2436] relative">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          
          {/* Main Top Navigation Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-14 border-b border-[#1C2436]">
            
            {/* Brand & Direct Contact Column */}
            <div className="sm:col-span-2 lg:col-span-4 space-y-5">
              <button
                type="button"
                onClick={(e) => handleNavClick(e, 'home')}
                className="inline-block focus:outline-none cursor-pointer text-left"
                aria-label="DrTechei Home"
              >
                <Logo variant="dark" iconSize={36} />
              </button>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                Next-generation software engineering consultancy. Building high-performance Next.js architectures, headless CMS implementations, and dedicated engineering squads that scale globally.
              </p>

              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#D98E3A] animate-pulse" />
                <span className="font-medium">Accepting New Client Projects for Q3/Q4</span>
              </div>

              {/* Contact Direct Strip */}
              <div className="space-y-2 pt-1 text-xs">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#D98E3A] shrink-0" />
                  <a 
                    href="mailto:hello@drtechei.com" 
                    className="text-slate-200 hover:text-[#F2BC7B] transition-colors font-medium"
                  >
                    hello@drtechei.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#D98E3A] shrink-0" />
                  <a 
                    href="tel:+18005408324" 
                    className="text-slate-200 hover:text-[#F2BC7B] transition-colors font-medium"
                  >
                    +1 (800) 540-TECH
                  </a>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="pt-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Follow &amp; Connect With Us
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow DrTechei on Instagram"
                    className="w-9 h-9 rounded-xl bg-[#131926] hover:bg-[#D98E3A] text-slate-400 hover:text-white border border-[#222C3E] hover:border-[#D98E3A] flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
                    title="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow DrTechei on Facebook"
                    className="w-9 h-9 rounded-xl bg-[#131926] hover:bg-[#1877F2] text-slate-400 hover:text-white border border-[#222C3E] hover:border-[#1877F2] flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
                    title="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with DrTechei on LinkedIn"
                    className="w-9 h-9 rounded-xl bg-[#131926] hover:bg-[#0A66C2] text-slate-400 hover:text-white border border-[#222C3E] hover:border-[#0A66C2] flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow DrTechei on X / Twitter"
                    className="w-9 h-9 rounded-xl bg-[#131926] hover:bg-white text-slate-400 hover:text-black border border-[#222C3E] hover:border-white flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
                    title="Twitter / X"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View DrTechei Open Source on GitHub"
                    className="w-9 h-9 rounded-xl bg-[#131926] hover:bg-[#24292F] text-slate-400 hover:text-white border border-[#222C3E] hover:border-slate-500 flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Watch DrTechei Architecture Breakdowns on YouTube"
                    className="w-9 h-9 rounded-xl bg-[#131926] hover:bg-[#FF0000] text-slate-400 hover:text-white border border-[#222C3E] hover:border-[#FF0000] flex items-center justify-center transition-all duration-200 shadow-2xs hover:scale-105"
                    title="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Company Column */}
            <div className="col-span-1 lg:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'about')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'portfolio')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    Portfolio &amp; Work
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'why-us')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    Why Choose Us
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'process')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    Our Delivery Process
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'testimonials')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    Client Testimonials
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'faq')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    FAQ &amp; Architecture
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'contact')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left font-semibold text-slate-200"
                  >
                    Contact &amp; Estimate
                  </button>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div className="col-span-1 lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Engineering Services
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    Full-Stack Web Development
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    Next.js 15 &amp; App Router Engineering
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    React 19 Interactive Frontends
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    Node.js, Express &amp; Microservices
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    Headless CMS (Sanity, Strapi, Contentful)
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={(e) => handleNavClick(e, 'services')}
                    className="hover:text-[#F2BC7B] transition-colors cursor-pointer text-left"
                  >
                    Sub-Second Core Web Vitals &amp; SEO
                  </button>
                </li>
              </ul>
            </div>

            {/* Technologies & Fast Action Column */}
            <div className="sm:col-span-2 lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Core Tech Stack
              </h4>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'GraphQL', 'Docker', 'AWS / Vercel'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-[#131926] border border-[#222C3E] text-slate-300 font-mono text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-3 p-4 rounded-xl bg-[#121825] border border-[#222C3E]">
                <div className="text-xs font-bold text-white mb-1">
                  Ready to Build or Scale?
                </div>
                <p className="text-[11px] text-slate-400 mb-3 leading-relaxed">
                  Book a direct 30-minute technical roadmap discovery with our senior architecture lead.
                </p>
                <button
                  type="button"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="w-full py-2 px-3 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-[#2D2575] to-[#4F46E5] hover:from-[#3D3395] hover:to-[#6366F1] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Schedule Discovery Call</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Corporate Headquarters & Dedicated Global Services Bento Grid Section */}
          <div className="py-10 border-b border-[#1C2436]">
            {/* Master Grid Container - Everything neatly framed inside this attractive bento box */}
            <div className="rounded-2xl bg-gradient-to-b from-[#0F1626] to-[#0A0F1A] border border-[#1E293B] p-5 sm:p-7 shadow-2xl relative overflow-hidden">
              {/* Subtle ambient lighting effect */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#2D2575]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D98E3A]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Master Header Inside Grid */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-6 border-b border-[#1D293F] relative z-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#162134] border border-[#263752] text-[#F2BC7B] text-xs font-semibold mb-2">
                    <Building2 className="w-3.5 h-3.5 text-[#D98E3A]" />
                    <span>Global Delivery Architecture</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    Corporate Headquarters &amp; Dedicated Global Services
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                    Registered Corporate Headquarters &amp; R&amp;D Hub in India, providing dedicated engineering services to clients across Ireland and Finland.
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141E30] border border-[#21304A] text-xs text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-medium">Active Real-Time Corridors</span>
                    <span className="font-mono text-slate-400 text-[11px]">(IST • GMT • EET)</span>
                  </div>
                </div>
              </div>

              {/* Two Column Bento Grid: Left = India Registered HQ, Right = Dedicated International Services */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6 relative z-10">
                
                {/* Column 1: Registered Corporate Headquarters (India) */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Registered Corporate Offices (India)</span>
                    </div>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      Official Entity
                    </span>
                  </div>

                  {/* 2 India Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 h-full">
                    {registeredOffices.map((office) => (
                      <div
                        key={office.title}
                        className="p-4 rounded-xl bg-[#111726]/90 hover:bg-[#141C2E] border border-[#1F2B3E] hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group shadow-sm"
                      >
                        <div className="space-y-2.5">
                          {/* Top Row: Flag, Title, Badge */}
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xl">{office.flag}</span>
                              <div>
                                <h4 className="font-bold text-sm text-white group-hover:text-emerald-300 transition-colors">
                                  {office.title}
                                </h4>
                                <span className="text-[11px] text-slate-400">{office.city}</span>
                              </div>
                            </div>
                            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 shrink-0 whitespace-nowrap">
                              {office.badge}
                            </span>
                          </div>

                          {/* Address details */}
                          <div className="pt-0.5">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                              Registered Address:
                            </span>
                            <p className="text-xs text-slate-300 leading-relaxed font-normal">
                              {office.address}
                            </p>
                          </div>

                          {/* Feature tags */}
                          <div className="flex flex-wrap gap-1 pt-1">
                            {office.tags.map((tag) => (
                              <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-[#162032] text-slate-300 border border-[#23314B]">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Actions */}
                        <div className="mt-3.5 pt-3 border-t border-[#1C283B]">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                            <span className="font-mono text-emerald-400/90">{office.timezone}</span>
                            <span className="text-slate-400">{office.email}</span>
                          </div>
                          <a
                            href={`/${office.route}`}
                            onClick={(e) => handleNavClick(e, office.route)}
                            className="w-full py-2 px-2.5 rounded-lg bg-[#162133] hover:bg-[#1E2D44] border border-[#253650] hover:border-emerald-500/60 text-xs font-semibold text-emerald-300 hover:text-white transition-all flex items-center justify-between group/link cursor-pointer"
                          >
                            <span>{office.actionLabel}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform text-emerald-400" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: Dedicated International Engineering Services (Ireland & Finland) */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D98E3A]">
                      <Zap className="w-4 h-4 text-[#D98E3A]" />
                      <span>Dedicated Engineering Services (International)</span>
                    </div>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-[#D98E3A]/10 text-[#F2BC7B] border border-[#D98E3A]/30">
                      Agile Squads
                    </span>
                  </div>

                  {/* 2 International Service Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 h-full">
                    {internationalServices.map((service) => (
                      <div
                        key={service.title}
                        className="p-4 rounded-xl bg-[#111726]/90 hover:bg-[#141C2E] border border-[#1F2B3E] hover:border-[#D98E3A]/50 transition-all duration-300 flex flex-col justify-between group shadow-sm"
                      >
                        <div className="space-y-2.5">
                          {/* Top Row: Flag, Title, Badge */}
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xl">{service.flag}</span>
                              <div>
                                <h4 className="font-bold text-sm text-white group-hover:text-[#F2BC7B] transition-colors">
                                  {service.title}
                                </h4>
                                <span className="text-[11px] text-slate-400">{service.city}</span>
                              </div>
                            </div>
                            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#D98E3A]/10 text-[#F2BC7B] border border-[#D98E3A]/30 shrink-0 whitespace-nowrap">
                              {service.badge}
                            </span>
                          </div>

                          {/* Service Scope */}
                          <div className="pt-0.5">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                              Service Scope &amp; Delivery:
                            </span>
                            <p className="text-xs text-slate-300 leading-relaxed font-normal">
                              {service.serviceDesc}
                            </p>
                          </div>

                          {/* Feature tags */}
                          <div className="flex flex-wrap gap-1 pt-1">
                            {service.tags.map((tag) => (
                              <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-[#162032] text-slate-300 border border-[#23314B]">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Actions */}
                        <div className="mt-3.5 pt-3 border-t border-[#1C283B]">
                          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                            <span className="font-mono text-[#F2BC7B]">{service.timezone}</span>
                            <span className="text-slate-400">{service.email}</span>
                          </div>
                          <a
                            href={`/${service.route}`}
                            onClick={(e) => handleNavClick(e, service.route)}
                            className="w-full py-2 px-2.5 rounded-lg bg-[#162133] hover:bg-[#1E2D44] border border-[#253650] hover:border-[#D98E3A]/60 text-xs font-semibold text-[#D98E3A] hover:text-white transition-all flex items-center justify-between group/link cursor-pointer"
                          >
                            <span>{service.actionLabel}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform text-[#D98E3A]" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Regional Technology Partners Fast Navigation Strip */}
          <div className="py-6 border-b border-[#1C2436]">
            <div className="p-4 rounded-xl bg-[#111724] border border-[#20293A] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 text-xs">
                <Globe2 className="w-4 h-4 text-[#D98E3A] shrink-0" />
                <span className="text-slate-200 font-semibold">Dedicated Regional Technology Partner Portals:</span>
                <span className="text-slate-400 hidden sm:inline">Country-tailored squads &amp; local currency billing</span>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                <button
                  type="button"
                  onClick={(e) => handleNavClick(e, 'technology-partner-india')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#182132] hover:bg-[#222E46] border border-[#27354E] text-slate-200 hover:text-white text-xs font-semibold transition-all cursor-pointer"
                >
                  <span>🇮🇳</span>
                  <span>Partner India (Delhi NCR &amp; Bengaluru)</span>
                </button>

                <button
                  type="button"
                  onClick={(e) => handleNavClick(e, 'technology-partner-ireland')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#182132] hover:bg-[#222E46] border border-[#27354E] text-slate-200 hover:text-white text-xs font-semibold transition-all cursor-pointer"
                >
                  <span>🇮🇪</span>
                  <span>Partner Ireland (Silicon Docks Dublin)</span>
                </button>

                <button
                  type="button"
                  onClick={(e) => handleNavClick(e, 'technology-partner-finland')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#182132] hover:bg-[#222E46] border border-[#27354E] text-slate-200 hover:text-white text-xs font-semibold transition-all cursor-pointer"
                >
                  <span>🇫🇮</span>
                  <span>Partner Finland (Helsinki &amp; Espoo)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Legal & Copyright Bar */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>© {new Date().getFullYear()} DrTechei IT Solutions. All Rights Reserved. 100% Client IP Ownership.</span>
            </div>

            <div className="flex items-center gap-6 text-slate-400">
              <button
                onClick={() => setLegalModal('privacy')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setLegalModal('terms')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
                aria-label="Scroll to top of page"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Privacy Policy / Terms Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto text-slate-800">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#2D2575]" />
                <h3 className="text-lg font-bold text-[#111622]">
                  {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
                </h3>
              </div>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p><strong>Effective Date:</strong> January 1, 2026</p>
                  <p>DrTechei IT Solutions ("DrTechei", "we", "us", or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website or engage our engineering services.</p>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider pt-2">1. Information We Collect</h4>
                  <p>We collect information you voluntarily provide to us when submitting project estimates, contact requests, or scheduling consultations (such as your name, business email, company name, website URL, and project requirements).</p>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider pt-2">2. How We Use Your Information</h4>
                  <p>We use your information solely to respond to inquiries, prepare technical proposals, manage client contracts, and deliver custom software engineering projects. We never sell, rent, or trade client information to third parties.</p>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider pt-2">3. Confidentiality &amp; IP Protection</h4>
                  <p>All client communications, code repositories, and project specifications are treated under strict confidentiality. We execute mutual Non-Disclosure Agreements (NDAs) prior to architectural reviews upon request.</p>
                </>
              ) : (
                <>
                  <p><strong>Effective Date:</strong> January 1, 2026</p>
                  <p>Welcome to DrTechei IT Solutions. By accessing this website or engaging our development services, you agree to comply with and be bound by the following terms and conditions.</p>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider pt-2">1. Intellectual Property Ownership</h4>
                  <p>Upon final milestone payment, 100% ownership of custom source code, documentation, and digital assets developed specifically for your project is transferred to your company without recurring licensing fees.</p>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider pt-2">2. Scope &amp; Delivery Framework</h4>
                  <p>Project scopes, timelines, and deliverables are documented in individual Statements of Work (SOW) executed between DrTechei and the client. Development proceeds in sprint milestones with staged approval gates.</p>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider pt-2">3. Performance &amp; Warranty</h4>
                  <p>We provide a 30-day post-launch warranty period to resolve any functional defects or performance regressions within the approved project specifications.</p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#2D2575] hover:bg-[#201955] transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

