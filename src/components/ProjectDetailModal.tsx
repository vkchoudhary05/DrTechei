import React from 'react';
import { PortfolioProject } from '../types';
import { X, ExternalLink, TrendingUp, Check, Sparkles, Layers, ArrowRight } from 'lucide-react';

interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onStartSimilarProject: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onStartSimilarProject,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[92vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Industry & Client */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#2D2575] uppercase tracking-wider mb-2">
          <span>{project.industry}</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-500">{project.client}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-[#111622] tracking-tight">
          {project.title}
        </h3>

        {/* Project Image Banner */}
        <div className="mt-5 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative h-64 sm:h-80 bg-[#111622]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111622]/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-[#111622] shadow-xs backdrop-blur-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Results Metrics Strip */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          {project.results.map((res, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-[#EEEDFA]/70 border border-[#D1CDF4] text-center"
            >
              <div className="text-xl sm:text-2xl font-black text-[#2D2575] flex items-center justify-center gap-1">
                <TrendingUp className="w-4 h-4 text-[#D98E3A] shrink-0" />
                <span>{res.metric}</span>
              </div>
              <div className="text-[11px] text-slate-600 font-medium mt-0.5">
                {res.label}
              </div>
            </div>
          ))}
        </div>

        {/* Challenge & Solution Grid */}
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              The Challenge
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#FDF7EF] border border-[#F2BC7B]/40">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A8631B] mb-2">
              The DrTechei Solution
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        <p className="mt-5 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {project.longDescription}
        </p>

        {/* Bottom Actions */}
        <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Sparkles className="w-4 h-4 text-[#D98E3A]" />
            <span>Ready to achieve comparable results for your business?</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onStartSimilarProject(project.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-md shadow-[#D98E3A]/25 active:scale-95 transition-all cursor-pointer"
          >
            <span>Start Similar Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
