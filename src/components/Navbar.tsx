import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { useRouter } from '../context/RouterContext';
import { useHeroTheme } from '../context/HeroThemeContext';
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
  const { isDark: isHeroDark } = useHeroTheme();
  const isHomePage = currentPage === 'home';
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showMailTooltip, setShowMailTooltip] = useState(false);
  const [showContactTooltip, setShowContactTooltip] = useState(false);

  const isHeroDarkTop = false;

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
    navigator.clipboard.writeText('hello@drtechei.com');
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
        className={`fixed top-0 left-0 right-0 z-50
    h-16
    sm:h-[68px]
    md:h-[72px]
    lg:h-[76px]
    xl:h-[80px]
    transition-all duration-300 ease-out ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-md py-2 sm:py-2.5 border-b border-slate-200/90'
            : 'bg-white/95 backdrop-blur-md py-2.5 sm:py-3 border-b border-slate-200/80 shadow-xs'
        }`}
      >
        {/* Colorful Brand Top Gradient Accent Strip */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2D2575] via-[#6366F1] to-[#D98E3A]" />

        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-3 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="flex items-center justify-between gap-2 sm:gap-4">

            {/* LEFT ZONE: Brand Logo (Clean, Crisp & Prominent) */}
            <div className="flex items-center shrink-0">
              <button
                type="button"
                onClick={() => handleNavigate('home')}
                className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D98E3A] rounded-lg transition-transform hover:scale-[1.02] text-left cursor-pointer"
                aria-label="DrTechei IT Solutions Home"
              >
                <div className="hidden sm:block">
                  <Logo iconSize={38} showSubtitle={true} variant="auto" />
                </div>
                <div className="sm:hidden">
                  <Logo iconSize={32} showSubtitle={true} variant="auto" />
                </div>
              </button>
            </div>

            {/* CENTER ZONE: Colorful Desktop Navigation Links */}
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
                    className={`relative px-3.5 py-1.5 text-xs xl:text-[13px] 2xl:text-sm font-semibold rounded-lg transition-all duration-150 cursor-pointer ${
                      isActive
                        ? 'text-white font-bold bg-[#2D2575] shadow-sm shadow-[#2D2575]/25'
                        : 'text-slate-700 hover:text-[#2D2575] hover:bg-[#EEEDFA]/70'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-3 right-3 h-0.5 bg-[#D98E3A] rounded-full"
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* RIGHT ZONE: Animated Mail + Contact + Colorful Quote Button + Animated Menu Icon */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">

              {/* 1. ANIMATED MAIL ICON WITH COLOR ACCENT & TOOLTIP */}
              <div className="relative">
                <motion.button
                  id="navbar-mail-btn"
                  type="button"
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.08 }}
                  onMouseEnter={() => setShowMailTooltip(true)}
                  onMouseLeave={() => setShowMailTooltip(false)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowContactTooltip(false);
                    setShowMailTooltip((prev) => !prev);
                  }}
                  className="relative h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center rounded-lg sm:rounded-xl border border-[#2D2575]/20 bg-[#FAFBFD] hover:bg-[#EEEDFA] text-[#2D2575] hover:text-[#D98E3A] transition-all cursor-pointer group shrink-0 shadow-2xs"
                  aria-label="Send direct email to hello@drtechei.com"
                  title="Email DrTechei: hello@drtechei.com"
                >
                  <div className="animate-mail-float">
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:scale-110 text-[#2D2575] group-hover:text-[#D98E3A]" />
                  </div>

                  {/* Pulsing Unread Notification Dot */}
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#D98E3A] border-2 border-white ring-1 ring-[#D98E3A]/40" />
                </motion.button>

                {/* Animated Mail Menu Popover */}
                <AnimatePresence>
                  {showMailTooltip && (
                    <>
                      {/* Mobile backdrop for tap-outside dismiss */}
                      <div
                        className="fixed inset-0 z-40 bg-slate-900/25 backdrop-blur-[1px] sm:hidden"
                        onClick={() => setShowMailTooltip(false)}
                      />

                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.96 }}
                        transition={{ duration: 0.16 }}
                        className="fixed sm:absolute top-[64px] sm:top-full left-3 right-3 sm:left-auto sm:right-0 sm:mt-2 max-w-[340px] sm:w-72 mx-auto sm:mx-0 p-3.5 sm:p-3 bg-white rounded-2xl sm:rounded-xl shadow-2xl sm:shadow-xl border border-slate-200 z-50 pointer-events-auto text-left"
                        onMouseEnter={() => setShowMailTooltip(true)}
                        onMouseLeave={() => setShowMailTooltip(false)}
                      >
                        <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                          <span className="flex items-center gap-1.5 text-[#2D2575]">
                            <Mail className="w-3.5 h-3.5 text-[#D98E3A]" />
                            <span>Direct Architect Inbox</span>
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 text-[10px]">24h SLA</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowMailTooltip(false);
                              }}
                              className="p-1 -mr-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 sm:hidden cursor-pointer"
                              aria-label="Close"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <div className="text-xs font-bold text-[#111622] break-all bg-slate-50 p-2 rounded-lg border border-slate-200/80 my-1.5 font-mono">
                          hello@drtechei.com
                        </div>

                        <p className="text-[11px] text-slate-500 mb-2.5 leading-relaxed">
                          Direct senior engineering review. Send RFPs, architectures, or inquiries.
                        </p>

                        <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={handleCopyEmail}
                            className="flex-1 py-1.5 px-2.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-xs font-bold text-[#2D2575] flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                          >
                            {copiedEmail ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                <span className="text-emerald-600 font-bold">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy Email</span>
                              </>
                            )}
                          </button>
                          <a
                            href="mailto:hello@drtechei.com"
                            onClick={() => setShowMailTooltip(false)}
                            className="py-1.5 px-3 rounded-lg bg-[#2D2575] text-white text-xs font-bold hover:bg-[#1A1448] transition-colors shadow-2xs text-center"
                          >
                            Compose
                          </a>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* 2. ANIMATED CONTACT / CALL ICON WITH WARM COLOR */}
              <div className="relative">
                <motion.button
                  id="navbar-contact-btn"
                  type="button"
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.08 }}
                  onMouseEnter={() => setShowContactTooltip(true)}
                  onMouseLeave={() => setShowContactTooltip(false)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMailTooltip(false);
                    setShowContactTooltip((prev) => !prev);
                  }}
                  className="relative h-8 w-8 sm:h-9 sm:w-9 flex items-center justify-center rounded-lg sm:rounded-xl border border-[#D98E3A]/30 bg-[#FDF7EF] hover:bg-[#FCEFD9] text-[#D98E3A] hover:text-[#B26E20] transition-all cursor-pointer group shrink-0 shadow-2xs"
                  aria-label="Contact senior engineering team"
                  title="Direct Engineering Call"
                >
                  <div className="animate-phone-ring">
                    <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:scale-110 text-[#D98E3A]" />
                  </div>

                  {/* Pulsing Online Badge Dot */}
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 border-2 border-white ring-1 ring-emerald-500/40" />
                </motion.button>

                {/* Animated Contact Tooltip / Popover */}
                <AnimatePresence>
                  {showContactTooltip && (
                    <>
                      {/* Mobile backdrop for tap-outside dismiss */}
                      <div
                        className="fixed inset-0 z-40 bg-slate-900/25 backdrop-blur-[1px] sm:hidden"
                        onClick={() => setShowContactTooltip(false)}
                      />

                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.96 }}
                        transition={{ duration: 0.16 }}
                        className="fixed sm:absolute top-[64px] sm:top-full left-3 right-3 sm:left-auto sm:right-0 sm:mt-2 max-w-[340px] sm:w-72 mx-auto sm:mx-0 p-3.5 sm:p-3 bg-white rounded-2xl sm:rounded-xl shadow-2xl sm:shadow-xl border border-slate-200 z-50 pointer-events-auto text-left"
                        onMouseEnter={() => setShowContactTooltip(true)}
                        onMouseLeave={() => setShowContactTooltip(false)}
                      >
                        <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                          <span className="flex items-center gap-1.5 text-[#2D2575]">
                            <PhoneCall className="w-3.5 h-3.5 text-[#D98E3A]" />
                            <span>Direct Senior Hotline</span>
                          </span>
                          <div className="flex items-center gap-2">
                            <span className="text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 text-[10px]">Available</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowContactTooltip(false);
                              }}
                              className="p-1 -mr-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 sm:hidden cursor-pointer"
                              aria-label="Close"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <div className="text-xs font-bold text-[#111622] bg-slate-50 p-2 rounded-lg border border-slate-200/80 my-1.5 font-mono">
                          +919690941439
                        </div>

                        <p className="text-[11px] text-slate-500 mb-2.5 leading-relaxed">
                          Free 15-minute technical discovery call with our lead systems architects.
                        </p>

                        <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                          <a
                            href="tel:+18005408324"
                            onClick={() => setShowContactTooltip(false)}
                            className="flex-1 py-1.5 px-2.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-xs font-bold text-[#111622] flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                          >
                            <PhoneCall className="w-3.5 h-3.5 text-[#D98E3A]" />
                            <span>Direct Dial</span>
                          </a>
                          <button
                            type="button"
                            onClick={() => {
                              setShowContactTooltip(false);
                              handleNavigate('contact');
                            }}
                            className="py-1.5 px-3 rounded-lg bg-[#D98E3A] text-white text-xs font-bold hover:bg-[#B26E20] transition-colors cursor-pointer shadow-2xs text-center"
                          >
                            Book Call
                          </button>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* 3. VIBRANT ESTIMATE QUOTE BUTTON WITH COLOR GRADIENT */}
              <motion.button
                id="navbar-quote-btn"
                type="button"
                whileTap={{ scale: 0.93 }}
                whileHover={{ scale: 1.04 }}
                onClick={onOpenQuoteModal}
                className="hidden sm:inline-flex group relative items-center justify-center gap-1.5 h-8 sm:h-9 px-3 sm:px-4 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#C07724] hover:from-[#E29D4B] hover:to-[#A8631B] shadow-sm shadow-[#D98E3A]/30 hover:shadow-md hover:shadow-[#D98E3A]/40 transition-all cursor-pointer ring-1 ring-white/30 shrink-0"
              >
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-100 shrink-0 group-hover:rotate-12 transition-transform" />
                <span>Get Quote</span>
              </motion.button>

              {/* 4. ANIMATED MENU ICON (CLICK OPENS UPPER TO LOWER) */}
              <motion.button
                id="navbar-right-menu-btn"
                type="button"
                whileTap={{ scale: 0.92 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setDrawerOpen(true)}
                className="inline-flex items-center justify-center gap-1 sm:gap-1.5 h-8 sm:h-9 px-2.5 sm:px-3 rounded-lg sm:rounded-xl border border-[#2D2575]/25 bg-gradient-to-b from-white to-[#FAFBFD] hover:bg-[#EEEDFA] text-[#2D2575] hover:text-[#111622] transition-all cursor-pointer group shrink-0 shadow-2xs"
                aria-label="Open navigation menu from top to bottom"
                aria-expanded={drawerOpen}
                title="Open Navigation Menu"
              >
                {/* 3-Bar Animated Micro-Hamburger with Color Highlights */}
                <div className="flex flex-col gap-0.5 sm:gap-1 items-end justify-center w-3.5 sm:w-4 h-3.5 sm:h-4">
                  <span className="w-3.5 sm:w-4 h-0.5 rounded-full bg-[#D98E3A] group-hover:bg-[#2D2575] transition-colors" />
                  <span className="w-2.5 sm:w-3 h-0.5 rounded-full bg-[#2D2575] group-hover:bg-[#D98E3A] transition-colors" />
                  <span className="w-2 sm:w-2.5 h-0.5 rounded-full bg-[#D98E3A] group-hover:bg-[#2D2575] transition-colors" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#2D2575]">
                  Menu
                </span>
              </motion.button>

            </div>
          </div>
        </div>
      </header>

      {/* FULL-POWER NAVIGATION MENU: OPENS UPPER TO LOWER (TOP TO BOTTOM) ON BOTH MOBILE & DESKTOP */}
      <AnimatePresence>
        {drawerOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden flex flex-col justify-start">
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

            {/* UPPER-TO-LOWER DROP-DOWN SHEET (SLIDES FROM TOP DOWNWARDS) */}
            <motion.div
              initial={{ y: '-100%', opacity: 0.5 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="relative w-full max-h-[92vh] bg-white shadow-2xl z-50 flex flex-col overflow-hidden border-b-4 border-[#D98E3A] rounded-b-2xl sm:rounded-b-3xl"
            >
              {/* Top Accent Gradient Header Line */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#2D2575] via-[#4338CA] via-[#D98E3A] to-[#E29D4B]" />

              {/* Drawer Top Bar */}
              <div className="px-4 sm:px-8 py-3.5 sm:py-4 border-b border-slate-200/80 bg-[#FAFBFD] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleNavigate('home')}
                  className="focus:outline-none cursor-pointer flex items-center gap-2"
                >
                  <Logo iconSize={36} showSubtitle={true} />
                </button>

                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live Intake Open • 24h Response</span>
                  </div>

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
              </div>

              {/* Responsive Scrollable Content Grid (Multi-Column on Desktop, Stacked on Mobile) */}
              <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
                  
                  {/* COLUMN 1 (md:col-span-4): Main Pages Navigation */}
                  <div className="md:col-span-5 lg:col-span-4">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-3 flex items-center justify-between">
                      <span className="text-[#2D2575]">Core Navigation</span>
                      <span className="text-slate-400 font-normal">Explore Pages</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-1.5">
                      {allMenuPages.slice(0, 6).map((item) => {
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
                                  : 'bg-[#EEEDFA]/60 text-[#2D2575]'
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
                    </div>
                  </div>

                  {/* COLUMN 2 (md:col-span-4): Secondary Pages & All CMS Platforms */}
                  <div className="md:col-span-4 lg:col-span-4">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-3 flex items-center justify-between">
                      <span className="text-[#2D2575]">Agency Info &amp; Reviews</span>
                      <span className="text-slate-400 font-normal">Trust &amp; SLAs</span>
                    </div>

                    <div className="space-y-1.5">
                      {allMenuPages.slice(6).map((item) => {
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
                    </div>

                    {/* Fast CMS Badges Strip */}
                    <div className="mt-4 p-3 rounded-xl bg-gradient-to-br from-[#FAFBFD] to-[#EEEDFA]/30 border border-slate-200">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#2D2575] mb-2">
                        Supported CMS Platforms:
                      </div>
                      <div className="flex flex-wrap gap-1.5 text-[10px] font-medium text-slate-700">
                        <span className="px-2 py-0.5 rounded bg-white border border-slate-200 font-semibold text-[#2D2575]">WordPress</span>
                        <span className="px-2 py-0.5 rounded bg-white border border-slate-200 font-semibold text-emerald-700">Shopify Plus</span>
                        <span className="px-2 py-0.5 rounded bg-white border border-slate-200 font-semibold text-rose-700">Sanity.io</span>
                        <span className="px-2 py-0.5 rounded bg-white border border-slate-200 font-semibold text-indigo-700">Strapi</span>
                        <span className="px-2 py-0.5 rounded bg-white border border-slate-200 font-semibold text-blue-700">Webflow</span>
                        <span className="px-2 py-0.5 rounded bg-white border border-slate-200 font-semibold text-purple-700">WooCommerce</span>
                        <span className="px-2 py-0.5 rounded bg-white border border-slate-200 font-semibold text-zinc-800">Payload</span>
                        <span className="px-2 py-0.5 rounded bg-white border border-slate-200 font-semibold text-sky-700">Drupal</span>
                      </div>
                    </div>
                  </div>

                  {/* COLUMN 3 (md:col-span-4): Global Offices & Fast Action Strip */}
                  <div className="md:col-span-3 lg:col-span-4 flex flex-col justify-between space-y-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FAFBFD] via-white to-[#EEEDFA]/40 border border-slate-200/90 text-xs space-y-3">
                      <div className="flex items-center justify-between text-[#2D2575] font-bold">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#D98E3A]" />
                          <span>Global Delivery Hubs</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                          Active Now
                        </span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex items-center gap-2 text-slate-700">
                          <span className="text-sm">🇮🇳</span>
                          <span className="font-semibold">India: Delhi NCR R&amp;D Center</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700">
                          <span className="text-sm">🇫🇮</span>
                          <span className="font-semibold">Finland: Helsinki Digital Hub</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700">
                          <span className="text-sm">🇮🇪</span>
                          <span className="font-semibold">Ireland: Dublin Enterprise Hub</span>
                        </div>
                      </div>

                      <div className="pt-2.5 border-t border-slate-200/80 space-y-1.5 text-[11px]">
                        <div className="flex items-center justify-between text-slate-600">
                          <span>SLA Turnaround:</span>
                          <span className="text-emerald-700 font-bold">24 Business Hours</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-600">
                          <span>IP Ownership:</span>
                          <span className="text-[#2D2575] font-bold">100% Day-One Transfer</span>
                        </div>
                      </div>
                    </div>

                    {/* Direct Contact Links */}
                    <div className="p-4 rounded-2xl bg-[#EEEDFA]/50 border border-[#2D2575]/15 space-y-2.5">
                      <div className="text-xs font-bold text-[#2D2575]">
                        Need Immediate Answers?
                      </div>
                      <div className="flex flex-col gap-2">
                        <a
                          href="mailto:hello@drtechei.com"
                          className="flex items-center gap-2 text-xs font-semibold text-[#2D2575] hover:text-[#D98E3A] transition-colors"
                        >
                          <Mail className="w-4 h-4 text-[#D98E3A]" />
                          <span>hello@drtechei.com</span>
                        </a>
                        <a
                          href="tel:+18005408324"
                          className="flex items-center gap-2 text-xs font-semibold text-[#111622] hover:text-[#D98E3A] transition-colors"
                        >
                          <PhoneCall className="w-4 h-4 text-[#D98E3A]" />
                          <span>+919690941439</span>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Drawer Bottom Action Buttons Strip */}
              <div className="p-4 sm:p-5 border-t border-slate-200 bg-[#FAFBFD] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-slate-500 font-medium hidden sm:block">
                  Fast 15-minute engineering consults with zero sales pressure.
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => handleNavigate('contact')}
                    className="flex-1 sm:flex-initial py-2.5 px-4 rounded-xl text-xs font-bold text-center text-[#2D2575] bg-white border border-[#2D2575]/20 hover:bg-[#EEEDFA] transition-colors cursor-pointer"
                  >
                    Book Discovery Call
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setDrawerOpen(false);
                      onOpenQuoteModal();
                    }}
                    className="flex-1 sm:flex-initial py-2.5 px-5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-md shadow-[#D98E3A]/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-100" />
                    <span>Get Free Quote</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
