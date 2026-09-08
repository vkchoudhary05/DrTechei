import React, { useRef, useState, useEffect } from 'react';
import { servicesData } from '../data/services';
import { ServiceItem } from '../types';
import { 
  Globe, 
  Zap, 
  Atom, 
  Server, 
  ShoppingBag, 
  Layers, 
  Palette, 
  TrendingUp, 
  ArrowRight, 
  Check, 
  ChevronRight,
  ChevronLeft,
  Sparkles,
  MoveRight
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenQuoteWithService: (serviceName: string) => void;
  limit?: number;
  onViewAll?: () => void;
}

export const Services: React.FC<ServicesProps> = ({
  onSelectService,
  onOpenQuoteWithService,
  limit,
  onViewAll,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // In the horizontal scrollable grid, displaying all 8 services allows users to scroll through the full catalog
  const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-[#2D2575]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#D98E3A]" />;
      case 'Atom':
        return <Atom className="w-5 h-5 sm:w-6 sm:h-6 text-[#4338CA]" />;
      case 'Server':
        return <Server className="w-5 h-5 sm:w-6 sm:h-6 text-[#B26E20]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-[#2D2575]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-[#D98E3A]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-[#7C3AED]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />;
      default:
        return <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-[#2D2575]" />;
    }
  };

  // IntersectionObserver to detect when user arrives at this section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const updateScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft } = scrollRef.current;
    const cardWidth = window.innerWidth < 640 ? 295 : 355;
    const currentIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(currentIndex, 0), displayedServices.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [displayedServices.length]);

  // Automatic scroller grid: advances 1 or 2 cards at a smooth interval
  useEffect(() => {
    if (!isInView || isPaused) return;

    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const el = scrollRef.current;
      const { scrollLeft, scrollWidth, clientWidth } = el;
      
      const isMobile = window.innerWidth < 768;
      const cardStep = isMobile ? 305 : 365;

      if (scrollLeft + clientWidth >= scrollWidth - 25) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: cardStep, behavior: 'smooth' });
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [isInView, isPaused]);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = window.innerWidth < 640 ? 295 : 355;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-14 sm:py-18 md:py-20 bg-[#FAFBFD] relative overflow-hidden border-b border-slate-200/80"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#2D2575]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D98E3A]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative">
        
        {/* Section Header with Automatic Scroller Status (Manual chevron buttons removed) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-5">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEEDFA] text-[#2D2575] text-xs font-bold uppercase tracking-wider mb-3.5 border border-[#D1CDF4]/70 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
              <span>Diagnostic & Full-Cycle Engineering</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-[#111622] tracking-tight">
              Our Digital Solutions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Everything you need to build, launch and grow your digital presence with enterprise speed, security and precision.
            </p>
          </div>

          {/* Automatic Scroller Live Status Pill */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-600 shadow-2xs">
              <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-400' : 'bg-emerald-500 animate-pulse'}`} />
              <span className="text-[11px] sm:text-xs">
                {isPaused ? 'Paused on hover' : 'Automatic Scroller Grid'}
              </span>
              <span className="text-slate-300">•</span>
              <span className="font-mono text-[#D98E3A] font-bold">
                {String(activeIndex + 1).padStart(2, '0')}/{String(displayedServices.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* HORIZONTAL AUTOMATIC SCROLLER GRID CONTAINER (Left to Right) */}
        <div 
          className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 2200)}
        >
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory select-none scrollbar-none sm:scrollbar-thin"
            style={{
              scrollbarGutter: 'stable',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {displayedServices.map((service, idx) => (
              <div
                key={service.id}
                className="w-[285px] sm:w-[330px] md:w-[360px] shrink-0 snap-start flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-[#D98E3A]/60 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative"
              >
                {/* Subtle top gradient accent on hover */}
                <div className="absolute top-0 left-6 right-6 h-[2.5px] bg-gradient-to-r from-[#2D2575] via-[#D98E3A] to-[#F2BC7B] opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />

                <div>
                  {/* Card Header: Icon + Highlight Tag + Index Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FDF7EF] border border-[#F2BC7B]/40 flex items-center justify-center group-hover:scale-105 group-hover:bg-[#2D2575] group-hover:border-[#2D2575] transition-all duration-300">
                      <span className="group-hover:brightness-0 group-hover:invert transition-all">
                        {getIcon(service.iconName)}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {service.highlight && (
                        <span className="text-[10px] font-bold text-[#D98E3A] bg-[#FDF7EF] px-2 py-0.5 rounded border border-[#F2BC7B]/50 truncate max-w-[150px]">
                          {service.highlight}
                        </span>
                      )}
                      <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#D98E3A] transition-colors">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-base sm:text-lg font-bold text-[#111622] group-hover:text-[#2D2575] transition-colors mb-1.5">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Key Features Checklist */}
                  <div className="space-y-2 mb-5 pt-3 border-t border-slate-100">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#D98E3A] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.technologies.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="text-[10px] font-semibold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded">
                        +{service.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2D2575] hover:text-[#D98E3A] transition-colors group/btn cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenQuoteWithService(service.title)}
                    className="text-[11px] font-bold text-[#D98E3A] hover:text-white px-2.5 py-1 rounded-lg bg-[#FDF7EF] hover:bg-[#D98E3A] border border-[#F2BC7B]/50 transition-all cursor-pointer shadow-2xs"
                    title={`Request quote for ${service.title}`}
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Pagination Dots & Interaction Notice */}
        <div className="mt-3 flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          {/* Automatic scroll guidance */}
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <MoveRight className="w-4 h-4 text-[#D98E3A] animate-pulse" />
            <span>Automatically advances 1-2 grids when in view • Hover or touch cards to pause</span>
          </div>

          {/* Interactive Dot Indicators to jump to any slide */}
          <div className="flex items-center gap-1.5">
            {displayedServices.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToIndex(idx)}
                className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                  activeIndex === idx
                    ? 'w-6 bg-[#2D2575]'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Jump to solution ${idx + 1}`}
                title={`Jump to solution ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
