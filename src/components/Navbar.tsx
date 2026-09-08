import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { useRouter } from '../context/RouterContext';
import { PageRoute } from '../types/router';
import { motion, AnimatePresence } from 'motion/react';
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
  Mail,
  MapPin,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Copy,
  Check
} from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const { currentPage, navigate } = useRouter();
  const isHomePage = currentPage === 'home';
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showMailTooltip, setShowMailTooltip] = useState(false);
  const [showContactTooltip, setShowContactTooltip] = useState(false);

  // Track window scroll for seamless top hero blend and sticky scroller transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
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

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('wearedrtechie@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Clean desktop navigation links
  const desktopNavLinks: Array<{ name: string; route: PageRoute }> = [
    { name: 'Services', route: 'services' },
    { name: 'Portfolio', route: 'portfolio' },
    { name: 'Technologies', route: 'technologies' },
    { name: 'Why Us', route: 'why-us' },
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
      desc: 'Overview, live diagnostics & agency intro',
      icon: Home,
    },
    {
      name: 'Services',
      route: 'services',
      desc: 'Next.js 15, custom React frontends & Node.js APIs',
      icon: Globe,
      badge: 'Popular',
    },
    {
      name: 'Portfolio & Case Studies',
      route: 'portfolio',
      desc: 'Proven client results with +180% speed boost',
      icon: Briefcase,
      badge: 'Live Builds',
    },
    {
      name: 'Technologies & Stack',
      route: 'technologies',
      desc: 'Next.js, React 19, TypeScript & cloud edge stack',
      icon: Cpu,
    },
    {
      name: 'Why Choose DrTechei',
      route: 'why-us',
      desc: 'Senior dev model, 100% IP ownership & SLAs',
      icon: Award,
      badge: 'Advantage',
    },
    {
      name: 'Engineering Process',
      route: 'process',
      desc: '6-stage agile sprints from discovery to cutover',
      icon: Compass,
    },
    {
      name: 'About DrTechei',
      route: 'about',
      desc: 'Dual hubs in India & Finland with senior engineers',
      icon: Users,
    },
    {
      name: 'Client Testimonials',
      route: 'testimonials',
      desc: '5.0-star reviews from verified founders & CTOs',
      icon: MessageSquare,
    },
    {
      name: 'FAQ & Specifications',
      route: 'faq',
      desc: 'Core Web Vitals, code ownership, pricing & SLAs',
      icon: HelpCircle,
    },
    {
      name: 'Contact & Consultation',
      route: 'contact',
      desc: 'Free 15-min discovery call & technical blueprint',
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-xs py-2 sm:py-2.5 border-b border-slate-200/90'
            : isHomePage
              ? 'bg-transparent py-3 sm:py-4 border-b border-transparent shadow-none'
              : 'bg-white/95 backdrop-blur-md py-2.5 sm:py-3.5 border-b border-slate-200/70 shadow-2xs'
        }`}
      >
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="flex items-center justify-between gap-2 sm:gap-4">

            {/* LEFT ZONE: Brand Logo ONLY (Clean & Prominent) */}
            <div className="flex items-center shrink-0">
              <button
                type="button"
                onClick={() => handleNavigate('home')}
                className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D98E3A] rounded-lg transition-transform hover:opacity-95 text-left cursor-pointer"
                aria-label="DrTechei IT Solutions Home"
              >
                <div className="hidden sm:block">
                  <Logo iconSize={36} showSubtitle={true} variant="auto" />
                </div>
                <div className="sm:hidden">
                  <Logo iconSize={30} showSubtitle={true} variant="auto" />
                </div>
              </button>
            </div>

            {/* CENTER ZONE: Clean Desktop Navigation Links */}
            <nav
              aria-label="Desktop Primary Navigation"
              className="hidden lg:flex items-center gap-1 xl:gap-1.5 2xl:gap-2"
            >
              {desktopNavLinks.map((item) => {
                const isActive = currentPage === item.route;
                return (
                  <button
                    key={item.route}
                    type="button"
                    onClick={() => handleNavigate(item.route)}
                    className={`relative px-3 py-1.5 text-xs xl:text-[13px] 2xl:text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                      isActive
                        ? 'text-[#2D2575] font-bold bg-[#EEEDFA]'
                        : 'text-slate-600 hover:text-[#2D2575] hover:bg-slate-100/70'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#D98E3A] rounded-full"
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* RIGHT ZONE: Animated Mail Icon + Animated Contact Icon + Quote Button + Animated Menu Icon (RIGHT SIDE ONLY) */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">

              {/* 1. ANIMATED MAIL ICON WITH HOVER/CLICK POPOVER */}
              <div className="relative">
                <motion.button
                  id="navbar-mail-btn"
                  type="button"
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.08 }}
                  onMouseEnter={() => setShowMailTooltip(true)}
                  onMouseLeave={() => setShowMailTooltip(false)}
                  onClick={() => {
                    window.location.href = 'mailto:wearedrtechie@gmail.com';
                  }}
                  className={`relative h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center rounded-lg sm:rounded-xl border transition-all cursor-pointer group shrink-0 ${
                    !isScrolled && isHomePage
                      ? 'border-transparent bg-transparent hover:bg-slate-100/70 text-[#2D2575] hover:text-[#D98E3A] shadow-none'
                      : 'border-slate-200/90 bg-white hover:bg-[#EEEDFA]/50 text-[#2D2575] hover:text-[#D98E3A] hover:border-[#D98E3A]/60 shadow-2xs'
                  }`}
                  aria-label="Send direct email to wearedrtechie@gmail.com"
                  title="Email DrTechei: wearedrtechie@gmail.com"
                >
                  <div className="animate-mail-float">
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:scale-110" />
                  </div>

                  {/* Pulsing Unread Notification Dot */}
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#D98E3A] border-2 border-white ring-1 ring-[#D98E3A]/40" />
                </motion.button>

                {/* Animated Mail Tooltip on Hover */}
                <AnimatePresence>
                  {showMailTooltip && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-64 p-3 bg-white rounded-xl shadow-xl border border-slate-200 z-50 pointer-events-auto"
                      onMouseEnter={() => setShowMailTooltip(true)}
                      onMouseLeave={() => setShowMailTooltip(false)}
                    >
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        <span>Direct Architect Inbox</span>
                        <span className="text-emerald-600 font-semibold">24h SLA</span>
                      </div>
                      <div className="text-xs font-bold text-[#111622] truncate">
                        wearedrtechie@gmail.com
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Click to compose or copy address for RFPs.
                      </p>
                      <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          className="flex-1 py-1 px-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[11px] font-semibold text-[#2D2575] flex items-center justify-center gap-1 cursor-pointer transition-colors"
                        >
                          {copiedEmail ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span className="text-emerald-600">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy Email</span>
                            </>
                          )}
                        </button>
                        <a
                          href="mailto:wearedrtechie@gmail.com"
                          className="py-1 px-2 rounded-lg bg-[#2D2575] text-white text-[11px] font-bold hover:bg-[#1A1448] transition-colors"
                        >
                          Compose
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 2. ANIMATED CONTACT / CALL ICON */}
              <div className="relative">
                <motion.button
                  id="navbar-contact-btn"
                  type="button"
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.08 }}
                  onMouseEnter={() => setShowContactTooltip(true)}
                  onMouseLeave={() => setShowContactTooltip(false)}
                  onClick={() => handleNavigate('contact')}
                  className={`relative h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center rounded-lg sm:rounded-xl border transition-all cursor-pointer group shrink-0 ${
                    !isScrolled && isHomePage
                      ? 'border-transparent bg-transparent hover:bg-[#FDF7EF] text-[#D98E3A] hover:text-[#B26E20] shadow-none'
                      : 'border-slate-200/90 bg-white hover:bg-[#FDF7EF] text-[#D98E3A] hover:text-[#B26E20] hover:border-[#D98E3A]/60 shadow-2xs'
                  }`}
                  aria-label="Contact senior engineering team"
                  title="Direct Engineering Call"
                >
                  <div className="animate-phone-ring">
                    <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:scale-110" />
                  </div>

                  {/* Pulsing Online Badge Dot */}
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 border-2 border-white ring-1 ring-emerald-500/40" />
                </motion.button>

                {/* Animated Contact Tooltip on Hover */}
                <AnimatePresence>
                  {showContactTooltip && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-64 p-3 bg-white rounded-xl shadow-xl border border-slate-200 z-50 pointer-events-auto"
                      onMouseEnter={() => setShowContactTooltip(true)}
                      onMouseLeave={() => setShowContactTooltip(false)}
                    >
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        <span>Direct Senior Hotline</span>
                        <span className="text-emerald-600 font-semibold">Available</span>
                      </div>
                      <div className="text-xs font-bold text-[#111622]">
                        +919690941439
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Free 15-minute technical discovery with senior architects.
                      </p>
                      <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center gap-2">
                        <a
                          href="tel:+18005408324"
                          className="flex-1 py-1 px-2 rounded-lg bg-[#FAFBFD] hover:bg-slate-100 border border-slate-200 text-[11px] font-semibold text-[#111622] flex items-center justify-center gap-1 cursor-pointer transition-colors"
                        >
                          <PhoneCall className="w-3 h-3 text-[#D98E3A]" />
                          <span>Direct Dial</span>
                        </a>
                        <button
                          type="button"
                          onClick={() => {
                            setShowContactTooltip(false);
                            handleNavigate('contact');
                          }}
                          className="py-1 px-2.5 rounded-lg bg-[#D98E3A] text-white text-[11px] font-bold hover:bg-[#B26E20] transition-colors cursor-pointer"
                        >
                          Book Call
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 3. SLEEK ESTIMATE QUOTE BUTTON (SHOWN ON SM+ SCREENS TO PREVENT MOBILE CLUTTER) */}
              <motion.button
                id="navbar-quote-btn"
                type="button"
                whileTap={{ scale: 0.93 }}
                whileHover={{ scale: 1.03 }}
                onClick={onOpenQuoteModal}
                className="hidden sm:inline-flex group relative items-center justify-center gap-1.5 h-8 sm:h-9 px-2.5 sm:px-3.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-xs hover:shadow-md hover:shadow-[#D98E3A]/30 transition-all cursor-pointer ring-1 ring-white/30 shrink-0"
              >
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-100 shrink-0" />
                <span>Get Quote</span>
              </motion.button>

              {/* 4. ANIMATED MENU ICON (ONLY ON RIGHT SIDE AS REQUESTED) */}
              <motion.button
                id="navbar-right-menu-btn"
                type="button"
                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.06 }}
                onClick={() => setDrawerOpen(true)}
                className={`inline-flex items-center justify-center gap-1 sm:gap-1.5 h-8 sm:h-9 px-2 sm:px-3 rounded-lg sm:rounded-xl border transition-all cursor-pointer group shrink-0 ${
                  !isScrolled && isHomePage
                    ? 'border-transparent bg-transparent hover:bg-slate-100/70 text-[#2D2575] hover:text-[#111622] shadow-none'
                    : 'border-slate-200/90 bg-white/95 hover:bg-[#EEEDFA]/50 text-[#2D2575] hover:text-[#111622] hover:border-[#2D2575]/40 shadow-2xs'
                }`}
                aria-label="Open navigation menu"
                aria-expanded={drawerOpen}
                title="Open Navigation Menu"
              >
                {/* 3-Bar Animated Micro-Hamburger */}
                <div className="flex flex-col gap-0.5 sm:gap-1 items-end justify-center w-3.5 sm:w-4 h-3.5 sm:h-4">
                  <span className="w-3.5 sm:w-4 h-0.5 rounded-full transition-all duration-200 bg-[#D98E3A] group-hover:bg-[#2D2575]" />
                  <span className="w-2.5 sm:w-3 h-0.5 rounded-full transition-all duration-200 bg-[#2D2575] group-hover:bg-[#D98E3A]" />
                  <span className="w-2 sm:w-2.5 h-0.5 rounded-full transition-all duration-200 bg-[#D98E3A] group-hover:bg-[#2D2575]" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider hidden sm:inline text-[#2D2575]">
                  Menu
                </span>
              </motion.button>

            </div>
          </div>
        </div>
      </header>

      {/* FULL-POWER NAVIGATION MENU DRAWER WITH FLUID ANIMATION (OPENS FROM RIGHT SIDE) */}
      <AnimatePresence>
        {drawerOpen && (
          <div className="fixed inset-0 z-50">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-[#0D121B]/75 backdrop-blur-md"
              onClick={() => setDrawerOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-out Menu Panel from the RIGHT SIDE with Spring Animation */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 w-[90vw] max-w-md bg-white shadow-2xl z-50 flex flex-col overflow-hidden border-l border-slate-200"
            >
              {/* Drawer Top Header */}
              <div className="p-4 sm:p-5 border-b border-slate-100 bg-[#FAFBFD] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleNavigate('home')}
                  className="focus:outline-none cursor-pointer"
                >
                  <Logo iconSize={32} showSubtitle={true} />
                </button>

                <motion.button
                  type="button"
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 rounded-xl text-slate-500 hover:text-[#111622] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D98E3A] cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Global Offices & Live Status Strip inside Drawer */}
              <div className="px-4 py-2.5 bg-gradient-to-r from-[#EEEDFA] to-[#FAFBFD] border-b border-[#D1CDF4]/60 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-[#2D2575] font-semibold text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span>Global Hubs: 🇮🇳 Delhi • 🇫🇮 Finland • 🇮🇪 Ireland</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#D98E3A] uppercase tracking-wider">
                  Live Intake Open
                </span>
              </div>

              {/* Quick Contact Bar inside Drawer with Animated Direct Triggers */}
              <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between text-xs gap-2">
                <a
                  href="mailto:wearedrtechie@gmail.com"
                  className="flex items-center gap-1.5 font-bold text-[#2D2575] hover:text-[#D98E3A] transition-colors truncate max-w-[190px]"
                  title="Direct Architect Inbox"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D98E3A] shrink-0" />
                  <span className="truncate text-[11px]">wearedrtechie@gmail.com</span>
                </a>
                <a
                  href="tel:+18005408324"
                  className="flex items-center gap-1 font-bold text-[#111622] hover:text-[#D98E3A] transition-colors shrink-0 text-[11px]"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#D98E3A]" />
                  <span>+919690941439</span>
                </a>
              </div>

              {/* Scrollable Navigation Items */}
              <div className="flex-1 overflow-y-auto px-3.5 sm:px-4 py-4 space-y-4">
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-2 flex items-center justify-between">
                    <span>Navigation</span>
                    <span className="text-[10px] font-normal text-slate-400">Select view</span>
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
                                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#FDF7EF] text-[#A8631B] border border-[#F2BC7B]/60">
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

                {/* Global Engineering Centers Detail inside Drawer */}
                <div className="p-3.5 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 text-xs space-y-2.5">
                  <div className="flex items-center gap-2 text-[#2D2575] font-bold">
                    <Clock className="w-3.5 h-3.5 text-[#D98E3A]" />
                    <span>Global Engineering Hubs</span>
                  </div>
                  
                  <div className="space-y-1.5 pt-1 text-xs">
                    <div className="flex items-center gap-2 text-slate-700">
                      <span>🇮🇳</span>
                      <span className="font-semibold">India: Delhi NCR R&D Center</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <span>🇫🇮</span>
                      <span className="font-semibold">Finland: Helsinki Digital Hub</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <span>🇮🇪</span>
                      <span className="font-semibold">Ireland: Dublin Enterprise Hub</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200/70 flex flex-col gap-1.5 text-xs font-semibold">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-[11px]">Turnaround:</span>
                      <span className="text-emerald-700 font-bold text-[11px]">24 business hours</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-[11px]">IP Ownership:</span>
                      <span className="text-[#2D2575] font-bold text-[11px]">100% Day One Transfer</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Drawer Bottom Action Buttons */}
              <div className="p-3.5 sm:p-4 border-t border-slate-200 bg-white space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    setDrawerOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full py-2.5 sm:py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-md shadow-[#D98E3A]/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-100" />
                  <span>Get Free Ballpark Quote</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleNavigate('contact')}
                  className="w-full py-2 sm:py-2.5 px-4 rounded-xl text-xs font-bold text-center text-[#2D2575] bg-[#EEEDFA] hover:bg-[#EEEDFA]/80 transition-colors block cursor-pointer"
                >
                  Book 15-Min Discovery Call
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
