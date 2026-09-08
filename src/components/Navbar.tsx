import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { useRouter } from '../context/RouterContext';
import { PageRoute } from '../types/router';
import {
  Menu,
  X,
  ArrowRight,
  PhoneCall,
  Sparkles,
  Globe,
  Briefcase,
  Cpu,
  Award,
  Compass,
  Users,
  MessageSquare,
  HelpCircle,
  Clock,
  Home,
  ShieldCheck
} from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const { currentPage, navigate } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Track window scroll for elevated backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  // Clean, uncluttered desktop navigation links
  const desktopNavLinks: Array<{ name: string; route: PageRoute }> = [
    { name: 'Services', route: 'services' },
    { name: 'Portfolio', route: 'portfolio' },
    { name: 'Technologies', route: 'technologies' },
    { name: 'Why Choose Us', route: 'why-us' },
    { name: 'Process', route: 'process' },
    { name: 'About', route: 'about' },
    { name: 'Contact', route: 'contact' },
  ];

  // Comprehensive drawer pages with icons and descriptions
  const allMenuPages: Array<{
    name: string;
    route: PageRoute;
    desc: string;
    icon: React.ComponentType<{ className?: string }>;
    badge?: string;
  }> = [
    {
      name: 'Home',
      route: 'home',
      desc: 'Overview, live diagnostics & enterprise agency introduction',
      icon: Home,
    },
    {
      name: 'Web Development Services',
      route: 'services',
      desc: 'Next.js 15, custom React apps, headless CMS & Node APIs',
      icon: Globe,
      badge: 'Popular',
    },
    {
      name: 'Portfolio & Case Studies',
      route: 'portfolio',
      desc: 'Verified customer results with +180% speed acceleration',
      icon: Briefcase,
      badge: 'Live Builds',
    },
    {
      name: 'Technologies & Tech Stack',
      route: 'technologies',
      desc: 'Enterprise TypeScript, React 19, GraphQL & cloud edge stack',
      icon: Cpu,
    },
    {
      name: 'Why Choose DrTechei',
      route: 'why-us',
      desc: 'Senior developer model, 100% IP ownership & performance guarantee',
      icon: Award,
      badge: 'Advantage',
    },
    {
      name: '6-Step Engineering Process',
      route: 'process',
      desc: 'Discovery, strategy, sprint execution, QA audits & cutover',
      icon: Compass,
    },
    {
      name: 'About DrTechei',
      route: 'about',
      desc: 'Senior software engineering standards, values & leadership',
      icon: Users,
    },
    {
      name: 'Client Testimonials',
      route: 'testimonials',
      desc: '5.0-star reviews and feedback from verified founders & CTOs',
      icon: MessageSquare,
    },
    {
      name: 'FAQ & Technical Specs',
      route: 'faq',
      desc: 'Answers to Core Web Vitals, code ownership, pricing & SLAs',
      icon: HelpCircle,
    },
    {
      name: 'Contact & Free Estimate',
      route: 'contact',
      desc: 'Schedule 15-min discovery call or request technical proposal',
      icon: PhoneCall,
      badge: '24h SLA',
    },
  ];

  const handleNavigate = (route: PageRoute) => {
    navigate(route);
    setDrawerOpen(false);
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-xs py-2.5 sm:py-3 border-b border-slate-200/90'
            : 'bg-white/90 backdrop-blur-md py-3 sm:py-3.5 border-b border-slate-200/60'
        }`}
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="flex items-center justify-between gap-4">

            {/* LEFT ZONE: Prominent Left Menu Button (Both Desktop & Mobile) + Brand Logo */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              
              {/* UNIVERSAL LEFT MENU BUTTON (Available on Desktop & Mobile) */}
              <button
                id="navbar-left-menu-btn"
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl border border-slate-200/90 bg-white hover:bg-slate-50 text-[#2D2575] hover:text-[#111622] hover:border-[#D98E3A]/60 shadow-2xs transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D98E3A] cursor-pointer"
                aria-label="Open navigation menu"
                aria-expanded={drawerOpen}
              >
                <Menu className="w-4 h-4 text-[#D98E3A]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#2D2575]">
                  Menu
                </span>
              </button>

              {/* Brand Logo */}
              <button
                type="button"
                onClick={() => handleNavigate('home')}
                className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D98E3A] rounded-lg transition-transform hover:opacity-95 text-left cursor-pointer"
                aria-label="DrTechei IT Solutions Home"
              >
                <Logo iconSize={32} />
              </button>
            </div>

            {/* CENTER ZONE: Clean, High-End Desktop Navigation Links */}
            <nav
              aria-label="Desktop Primary Navigation"
              className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-3"
            >
              {desktopNavLinks.map((item) => {
                const isActive = currentPage === item.route;
                return (
                  <button
                    key={item.route}
                    type="button"
                    onClick={() => handleNavigate(item.route)}
                    className={`px-3 py-1.5 text-xs xl:text-[13px] 2xl:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                      isActive
                        ? 'text-[#2D2575] font-bold bg-[#EEEDFA]'
                        : 'text-slate-600 hover:text-[#2D2575] hover:bg-slate-100/70'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </nav>

            {/* RIGHT ZONE: Hotline & Free Quote CTA */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              
              {/* Direct Phone Hotline on Desktop */}
              <a
                href="tel:+18005408324"
                className="hidden xl:inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#2D2575] px-3 py-1.5 rounded-lg hover:bg-slate-100/80 transition-colors"
                title="Call DrTechei IT Solutions"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#D98E3A]" />
                <span>+1 (800) 540-TECH</span>
              </a>

              {/* High-Impact Project Quote Button */}
              <button
                id="navbar-quote-btn"
                type="button"
                onClick={onOpenQuoteModal}
                className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-md shadow-[#D98E3A]/20 hover:shadow-[#D98E3A]/35 transition-all duration-200 active:scale-95 cursor-pointer ring-1 ring-white/30"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#FDF7EF]" />
                <span className="hidden xs:inline">Get Free Quote</span>
                <span className="xs:hidden">Quote</span>
                <ArrowRight className="w-3.5 h-3.5 hidden sm:inline-block transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* FULL-POWER NAVIGATION MENU DRAWER (OPENS FROM LEFT WHEN MENU BUTTON IS CLICKED) */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-[#0D121B]/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-out Menu Panel from Left */}
          <div className="fixed top-0 left-0 bottom-0 w-[90vw] max-w-md bg-white shadow-2xl z-50 flex flex-col overflow-hidden border-r border-slate-200 animate-in slide-in-from-left duration-250">
            
            {/* Drawer Top Header */}
            <div className="p-4 sm:p-5 border-b border-slate-100 bg-[#FAFBFD] flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleNavigate('home')}
                className="focus:outline-none cursor-pointer"
              >
                <Logo iconSize={32} />
              </button>

              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-[#111622] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D98E3A] cursor-pointer"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Availability Alert Strip inside Drawer */}
            <div className="px-4 py-2.5 bg-[#EEEDFA] border-b border-[#D1CDF4]/60 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-[#2D2575] font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Accepting Client Projects</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-[#D98E3A] uppercase tracking-wider">
                Q3/Q4 Open
              </span>
            </div>

            {/* Scrollable Navigation Items */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-2 flex items-center justify-between">
                  <span>Navigation</span>
                  <span className="text-[10px] font-normal text-slate-400">Click to open page</span>
                </div>

                <nav className="space-y-1">
                  {allMenuPages.map((item) => {
                    const isActive = currentPage === item.route;
                    const IconComponent = item.icon;

                    return (
                      <button
                        key={item.route}
                        type="button"
                        onClick={() => handleNavigate(item.route)}
                        className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#EEEDFA] text-[#2D2575] font-bold shadow-2xs border-l-4 border-[#D98E3A]'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-[#2D2575]'
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            isActive
                              ? 'bg-[#2D2575] text-white'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>

                        <div className="flex-grow min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-xs font-bold text-[#111622]">
                              {item.name}
                            </span>
                            {item.badge && (
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#FDF7EF] text-[#A8631B] border border-[#F2BC7B]/60">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Direct Support & Hotline Card */}
              <div className="p-3.5 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 text-xs space-y-2.5">
                <div className="flex items-center gap-2 text-[#2D2575] font-bold">
                  <Clock className="w-3.5 h-3.5 text-[#D98E3A]" />
                  <span>Direct Senior Developer Hotline</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  Have questions about your project scope or architecture? Talk directly with our senior leads.
                </p>
                <div className="pt-1 flex flex-col gap-1.5 text-xs font-semibold">
                  <a
                    href="tel:+18005408324"
                    className="flex items-center gap-2 text-[#111622] hover:text-[#D98E3A]"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#D98E3A]" />
                    <span>+1 (800) 540-TECH</span>
                  </a>
                  <a
                    href="mailto:contact@drtechei.com"
                    className="flex items-center gap-2 text-slate-600 hover:text-[#2D2575]"
                  >
                    <span className="w-3.5 h-3.5 text-center font-mono text-[10px] text-[#D98E3A]">@</span>
                    <span className="truncate">contact@drtechei.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="p-4 border-t border-slate-200 bg-white space-y-2">
              <button
                type="button"
                onClick={() => {
                  setDrawerOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-md shadow-[#D98E3A]/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-100" />
                <span>Get Free Ballpark Quote</span>
              </button>

              <button
                type="button"
                onClick={() => handleNavigate('contact')}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center text-[#2D2575] bg-[#EEEDFA] hover:bg-[#EEEDFA]/80 transition-colors block cursor-pointer"
              >
                Book 15-Min Discovery Call
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
