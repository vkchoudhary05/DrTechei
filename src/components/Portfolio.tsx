import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { PortfolioCategory, PortfolioProject } from '../types';
import { 
  ArrowUpRight, 
  Sparkles, 
  ExternalLink,
  Layers, 
  TrendingUp 
} from 'lucide-react';

interface PortfolioProps {
  onSelectProject: (project: PortfolioProject) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');

  const filterTabs: { key: PortfolioCategory; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'websites', label: 'Websites' },
    { key: 'ecommerce', label: 'E-Commerce' },
    { key: 'cms', label: 'CMS Solutions' },
    { key: 'webapps', label: 'Web Applications' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? portfolioData
    : portfolioData.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="py-20 md:py-28 bg-[#FAFBFD] relative overflow-hidden"
    >
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEEDFA] text-[#2D2575] text-xs font-bold uppercase tracking-wider mb-3 border border-[#D1CDF4]/70">
            <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
            <span>Case Studies & Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111622] tracking-tight">
            Featured Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Explore some of the high-converting digital experiences we've engineered for forward-thinking enterprises and ambitious brands.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveCategory(tab.key)}
              className={`px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === tab.key
                  ? 'bg-[#2D2575] text-white shadow-md shadow-[#2D2575]/25 ring-2 ring-[#D98E3A]/40'
                  : 'bg-white text-slate-600 hover:bg-[#FDF7EF] hover:text-[#A8631B] border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 2xl:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col rounded-2xl bg-white border border-slate-200/80 hover:border-[#D98E3A]/40 hover:shadow-2xl hover:shadow-[#D98E3A]/10 transition-all duration-300 overflow-hidden hover:-translate-y-1.5"
            >
              {/* Project Image Container with Zoom & Overlay */}
              <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.client} ${project.category} web development project by DrTechei`}
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-slate-900 backdrop-blur-md shadow-sm">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold text-amber-200 bg-[#111622]/80 border border-[#D98E3A]/50 backdrop-blur-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#D98E3A]" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>

                {/* Hover Quick Action Indicator */}
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-gradient-to-r from-[#D98E3A] to-[#B26E20] text-white flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-semibold text-[#2D2575] mb-2">
                    <span>{project.industry}</span>
                    <span className="text-slate-400 font-normal">{project.client}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#111622] group-hover:text-[#2D2575] transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Highlight Metric Strip */}
                  {project.results && project.results.length > 0 && (
                    <div className="mt-4 p-2.5 rounded-xl bg-[#FDF7EF] border border-[#F2BC7B]/40 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-[#A8631B] font-bold">
                        <TrendingUp className="w-3.5 h-3.5 text-[#D98E3A]" />
                        <span>{project.results[0].metric}</span>
                      </div>
                      <span className="text-[11px] text-slate-600">{project.results[0].label}</span>
                    </div>
                  )}
                </div>

                {/* Technology Badges */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 items-center">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[10px] font-semibold text-slate-700 bg-slate-100 border border-slate-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[10px] font-semibold text-slate-400">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Callout */}
        <div className="mt-14 text-center">
          <p className="text-xs text-slate-500 mb-3">
            Interested in case studies specific to your business sector?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2D2575] hover:text-[#D98E3A] transition-colors"
          >
            <span>Request a Tailored Industry Portfolio & Deck</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#D98E3A]" />
          </a>
        </div>
      </div>
    </section>
  );
};
