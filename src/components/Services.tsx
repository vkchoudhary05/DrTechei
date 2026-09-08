import React from 'react';
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
  Sparkles
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenQuoteWithService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, onOpenQuoteWithService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-[#2D2575]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#D98E3A]" />;
      case 'Atom':
        return <Atom className="w-6 h-6 text-[#4338CA]" />;
      case 'Server':
        return <Server className="w-6 h-6 text-[#B26E20]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-[#2D2575]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#D98E3A]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#7C3AED]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-600" />;
      default:
        return <Globe className="w-6 h-6 text-[#2D2575]" />;
    }
  };

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-[#FAFBFD] relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#2D2575]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D98E3A]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEEDFA] text-[#2D2575] text-xs font-bold uppercase tracking-wider mb-3.5 border border-[#D1CDF4]/70">
            <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
            <span>Diagnostic & Full-Cycle Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111622] tracking-tight">
            Our Digital Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to build, launch and grow your digital presence with enterprise speed, security and precision.
          </p>
        </div>

        {/* Services Grid (8 Services) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 2xl:gap-8">
          {servicesData.map((service, idx) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 hover:border-[#D98E3A]/50 hover:shadow-xl hover:shadow-[#D98E3A]/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Subtle top gradient line on hover */}
              <div className="absolute top-0 left-6 right-6 h-[2.5px] bg-gradient-to-r from-[#2D2575] via-[#D98E3A] to-[#F2BC7B] opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />

              <div>
                {/* Header Icon + Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#FDF7EF] border border-[#F2BC7B]/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#2D2575] group-hover:border-[#2D2575] transition-all duration-300">
                    <span className="group-hover:brightness-0 group-hover:invert transition-all">
                      {getIcon(service.iconName)}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#D98E3A] transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#111622] group-hover:text-[#2D2575] transition-colors mb-2">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-5 line-clamp-3">
                  {service.description}
                </p>

                {/* Key Features Checklist */}
                <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                  {service.features.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-[#D98E3A] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2D2575] hover:text-[#D98E3A] transition-colors group/btn cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>

                <button
                  onClick={() => onOpenQuoteWithService(service.title)}
                  className="text-[11px] font-semibold text-slate-600 hover:text-[#2D2575] px-2.5 py-1 rounded-md bg-slate-100 hover:bg-[#FDF7EF] hover:border hover:border-[#F2BC7B]/40 transition-colors cursor-pointer"
                  title={`Request quote for ${service.title}`}
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Custom Inquiries */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#111622] via-[#1E1752] to-[#111622] text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-[#2B3548] shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">Need a custom enterprise architecture or combined stack?</h4>
            <p className="text-xs sm:text-sm text-slate-300">
              We engineer custom headless ecosystems combining Next.js, Node.js microservices, and specialized CMS backbones.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteWithService('Custom Enterprise Stack')}
            className="shrink-0 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-md shadow-[#D98E3A]/20 transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Consult an Architect</span>
            <ChevronRight className="w-4 h-4 text-amber-200" />
          </button>
        </div>
      </div>
    </section>
  );
};
