import React, { useState } from 'react';
import { technologiesData } from '../data/technologies';
import { TechCategory } from '../types';
import { 
  Code, 
  Layers, 
  Server, 
  Database, 
  Wrench, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const Technologies: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<TechCategory>('all');

  const categories: { key: TechCategory; label: string; icon: React.ReactNode }[] = [
    { key: 'all', label: 'All Stacks', icon: <Sparkles className="w-4 h-4" /> },
    { key: 'frontend', label: 'Frontend', icon: <Code className="w-4 h-4" /> },
    { key: 'backend', label: 'Backend', icon: <Server className="w-4 h-4" /> },
    { key: 'cms', label: 'CMS Solutions', icon: <Layers className="w-4 h-4" /> },
    { key: 'database', label: 'Databases', icon: <Database className="w-4 h-4" /> },
    { key: 'tools', label: 'Tools & Payments', icon: <Wrench className="w-4 h-4" /> },
  ];

  const filteredTechnologies = selectedCategory === 'all'
    ? technologiesData
    : technologiesData.filter((tech) => tech.category === selectedCategory);

  return (
    <section
      id="technologies"
      className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-slate-100"
    >
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEEDFA] text-[#2D2575] text-xs font-bold uppercase tracking-wider mb-3 border border-[#D1CDF4]/70">
            <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
            <span>Modern Precision Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111622] tracking-tight">
            Technologies We Work With
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We select battle-tested, high-performance tools engineered for speed, enterprise security, and long-term maintainability.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`flex items-center gap-2 px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-[#2D2575] text-white shadow-md shadow-[#2D2575]/25 ring-2 ring-[#D98E3A]/50'
                  : 'bg-slate-100 text-slate-700 hover:bg-[#FDF7EF] hover:text-[#A8631B]'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-5 2xl:gap-6">
          {filteredTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="group relative flex flex-col justify-between p-3.5 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#D98E3A]/40 hover:bg-white hover:shadow-lg hover:shadow-[#D98E3A]/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Tech Symbol / Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-xs bg-gradient-to-br ${tech.badgeColor || 'from-[#2D2575] to-[#D98E3A]'}`}>
                    {tech.name.substring(0, 2).toUpperCase()}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D2575] bg-[#EEEDFA] px-2 py-0.5 rounded-md border border-[#D1CDF4]/70">
                    {tech.category}
                  </span>
                </div>

                {/* Tech Title */}
                <h3 className="text-sm font-bold text-[#111622] group-hover:text-[#2D2575] transition-colors">
                  {tech.name}
                </h3>

                {/* Brief description */}
                <p className="mt-1.5 text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {tech.description}
                </p>
              </div>

              {/* Popular For Pill */}
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
                <CheckCircle2 className="w-3 h-3 text-[#D98E3A] shrink-0" />
                <span className="truncate">{tech.popularFor}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Guarantee Strip */}
        <div className="mt-12 p-5 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#2D2575] text-[#F2BC7B] flex items-center justify-center font-bold text-sm shrink-0 border border-[#D98E3A]/40">
              ✓
            </div>
            <div>
              <p className="text-xs font-bold text-[#111622]">Zero Technical Debt & Diagnostic Quality Standard</p>
              <p className="text-xs text-slate-600">Every line of code is typed in TypeScript, fully documented, and conforms to high-performance enterprise standards.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="text-xs font-bold text-[#2D2575] hover:text-[#D98E3A] whitespace-nowrap flex items-center gap-1 hover:underline"
          >
            <span>Have a specific technology requirement?</span>
            <ExternalLink className="w-3 h-3 text-[#D98E3A]" />
          </a>
        </div>
      </div>
    </section>
  );
};
