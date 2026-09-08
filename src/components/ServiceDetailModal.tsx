import React from 'react';
import { ServiceItem } from '../types';
import { X, Check, ArrowRight, ShieldCheck, Sparkles, Layers, Cpu } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuoteWithService: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenQuoteWithService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-[#2D2575] text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
          <span>{service.highlight}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-[#111622] tracking-tight">
          {service.title}
        </h3>

        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          {service.tagline}
        </p>

        <div className="mt-4 p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {service.description}
        </div>

        {/* Key Features List */}
        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#111622] mb-3 flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#2D2575]" />
            <span>Core Capabilities Included</span>
          </h4>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {service.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50/70 border border-slate-100 text-xs text-slate-700"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#D98E3A] mt-1.5 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#111622] mb-3 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-[#D98E3A]" />
            <span>Key Project Deliverables</span>
          </h4>
          <div className="space-y-2">
            {service.deliverables.map((deliv, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-xs text-slate-600"
              >
                <div className="w-5 h-5 rounded-full bg-[#EEEDFA] text-[#2D2575] flex items-center justify-center font-bold text-[10px] shrink-0">
                  {idx + 1}
                </div>
                <span>{deliv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Applied */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 mr-2 flex items-center gap-1">
            <Cpu className="w-3.5 h-3.5 text-[#2D2575]" />
            <span>Technologies:</span>
          </span>
          {service.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-500">
            ✓ Turnkey delivery with full intellectual property ownership.
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenQuoteWithService(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-md shadow-[#D98E3A]/25 active:scale-95 transition-all cursor-pointer"
          >
            <span>Request Quote for {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
