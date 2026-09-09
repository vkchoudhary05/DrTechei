import React, { useState, useRef, useEffect } from 'react';
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
  Sparkles
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
}) => {
  const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;
  const sectionRef = useRef<HTMLElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const userInteractionTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Monitor when section enters view
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

  // Automatic scroll left to right when section is in view
  useEffect(() => {
    if (!isInView || isUserInteracting) return;

    const interval = setInterval(() => {
      const el = mobileScrollRef.current;
      if (!el) return;

      const cardStep = 301; // 285px card + 16px gap
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 25) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: cardStep, behavior: 'smooth' });
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [isInView, isUserInteracting]);

  const handleTouchStart = () => {
    setIsUserInteracting(true);
    if (userInteractionTimerRef.current) {
      clearTimeout(userInteractionTimerRef.current);
    }
  };

  const handleTouchEnd = () => {
    if (userInteractionTimerRef.current) {
      clearTimeout(userInteractionTimerRef.current);
    }
    userInteractionTimerRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 3500);
  };

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
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-5 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEEDFA] text-[#2D2575] text-xs font-bold uppercase tracking-wider mb-3.5 border border-[#D1CDF4]/70 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
              <span>Diagnostic &amp; Full-Cycle Engineering</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-[#111622] tracking-tight">
              Our Digital Solutions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Everything you need to build, launch and grow your digital presence with enterprise speed, security and precision.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <div className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>8 Core Specializations</span>
              <span className="text-slate-300">•</span>
              <span className="text-[#2D2575] font-bold">100% In-House</span>
            </div>
          </div>
        </div>

        {/* Mobile Interaction Status Note (No buttons) */}
        <div className="md:hidden flex items-center justify-between text-[11px] text-slate-500 mb-2 px-1">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-semibold text-[#2D2575]">
              {isUserInteracting ? 'Manual Swipe Active' : 'Automatic Scroll'}
            </span>
            <span className="text-slate-400">• Left to Right</span>
          </div>
          <span className="text-[10px] text-slate-400">Swipe freely</span>
        </div>

        {/* 1. MOBILE AUTO + USER HORIZONTAL SCROLL (LEFT TO RIGHT, NO BUTTONS, NOT ENDLESS) */}
        <div className="block md:hidden relative -mx-4 sm:-mx-6 overflow-hidden py-1 mb-4">
          <div
            ref={mobileScrollRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleTouchStart}
            onMouseUp={handleTouchEnd}
            className="flex gap-4 overflow-x-auto pb-4 pt-1 px-4 scroll-smooth snap-x snap-mandatory select-none scrollbar-none"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {displayedServices.map((service) => (
              <div
                key={`mob-${service.id}`}
                className="w-[285px] shrink-0 snap-start flex flex-col justify-between p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#D98E3A]/60 text-left"
              >
                <div>
                  {/* Card Header: Icon + Highlight Tag + Index Number */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FDF7EF] border border-[#F2BC7B]/40 flex items-center justify-center shadow-2xs">
                      {getIcon(service.iconName)}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {service.highlight && (
                        <span className="text-[10px] font-bold text-[#D98E3A] bg-[#FDF7EF] px-2 py-0.5 rounded border border-[#F2BC7B]/50 truncate max-w-[130px]">
                          {service.highlight}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-sm font-bold text-[#111622] leading-snug mb-1">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-1.5 mb-3 pt-2.5 border-t border-slate-100">
                    {service.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                        <Check className="w-3 h-3 text-[#D98E3A] shrink-0 mt-0.5" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {service.technologies.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#2D2575] hover:text-[#D98E3A] cursor-pointer"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenQuoteWithService(service.title)}
                    className="text-[11px] font-bold text-[#D98E3A] px-2.5 py-1 rounded-lg bg-[#FDF7EF] border border-[#F2BC7B]/50 cursor-pointer"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. DESKTOP & TABLET RESPONSIVE GRID (NO HORIZONTAL OVERFLOW SCROLLBARS) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 text-left">
          {displayedServices.map((service, idx) => (
            <div
              key={`desk-${service.id}`}
              className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#D98E3A]/60 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative text-left"
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
    </section>
  );
};
