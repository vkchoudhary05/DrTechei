import React, { useState } from 'react';
import { 
  Search, 
  Compass, 
  Layout, 
  Code, 
  CheckCircle2, 
  Rocket, 
  ArrowRight,
  Sparkles 
} from 'lucide-react';

interface ProcessProps {
  onStartProject: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onStartProject }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      title: 'Discovery & Diagnosis',
      subtitle: 'Research & Alignment',
      description: 'Understand your business, goals, target audience, competitive landscape, and revenue bottlenecks through in-depth workshops.',
      details: [
        'Diagnostic stakeholder alignment interview',
        'Target audience persona profiling',
        'Competitor & tech benchmark audit',
        'Project scope & KPI definition'
      ],
      icon: <Search className="w-5 h-5 text-[#2D2575]" />
    },
    {
      step: '02',
      title: 'Strategy & Spec',
      subtitle: 'Architecture & Blueprint',
      description: 'Plan the technology, structure and user experience. We map information architecture, choose frameworks, and establish sprint deliverables.',
      details: [
        'Tech stack selection (Next.js vs CMS)',
        'Sitemap & conversion journey map',
        'Technical SEO URL architecture',
        'Hosting & deployment strategy'
      ],
      icon: <Compass className="w-5 h-5 text-[#D98E3A]" />
    },
    {
      step: '03',
      title: 'Precision Design',
      subtitle: 'UI/UX & Design System',
      description: 'Create a modern, conversion-focused interface. We develop interactive Figma prototypes with design tokens, responsive layouts, and animations.',
      details: [
        'High-fidelity interactive prototype',
        'Mobile-first responsive viewports',
        'Accessible color & typography system',
        'Micro-interaction & motion specs'
      ],
      icon: <Layout className="w-5 h-5 text-[#4338CA]" />
    },
    {
      step: '04',
      title: 'Engineering',
      subtitle: 'Clean Code Execution',
      description: 'Build using modern technologies and clean code. We implement modular TypeScript components, server-side rendering, and secure API integrations.',
      details: [
        'Strictly typed TypeScript codebase',
        'SSR & Static Site Generation',
        'Headless CMS & API synchronization',
        'Version-controlled Git workflow'
      ],
      icon: <Code className="w-5 h-5 text-[#2D2575]" />
    },
    {
      step: '05',
      title: 'Auditing & Testing',
      subtitle: 'Rigorous QA & Audit',
      description: 'Test responsiveness, performance and functionality across 20+ device viewports, automated Lighthouse audits, and cross-browser suites.',
      details: [
        'Core Web Vitals acceleration audit',
        'Cross-browser and mobile device testing',
        'Security & form validation stress tests',
        'Accessibility compliance check'
      ],
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />
    },
    {
      step: '06',
      title: 'Launch & Growth',
      subtitle: 'Deployment & Scaling',
      description: 'Deploy, optimize and support your website with zero-downtime DNS cutover, automated backups, Google Search Console indexing, and training.',
      details: [
        'Zero-downtime production deployment',
        'XML sitemap & Search Console indexing',
        'CMS video handoff & team training',
        'Ongoing SLA monitoring & maintenance'
      ],
      icon: <Rocket className="w-5 h-5 text-[#D98E3A]" />
    }
  ];

  return (
    <section
      id="process"
      className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-slate-100"
    >
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEEDFA] text-[#2D2575] text-xs font-bold uppercase tracking-wider mb-3 border border-[#D1CDF4]/70">
            <Sparkles className="w-3.5 h-3.5 text-[#D98E3A]" />
            <span>Methodical Delivery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111622] tracking-tight">
            How We Work
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A battle-tested 6-step engineering methodology that guarantees transparent milestones, high velocity, and exceptional digital outcomes.
          </p>
        </div>

        {/* Timeline Desktop / Tablet Grid */}
        <div className="relative">
          {/* Connecting Line behind steps on large screens */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-[#2D2575]/25 via-[#D98E3A]/40 to-[#2D2575]/25 -translate-y-12 z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 2xl:gap-8 relative z-10">
            {steps.map((item, index) => {
              const isSelected = activeStep === index;
              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(index)}
                  className={`group cursor-pointer p-6 sm:p-7 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#FDF7EF]/90 border-[#F2BC7B] shadow-lg shadow-[#D98E3A]/10'
                      : 'bg-white border-slate-200/80 hover:border-[#D98E3A]/40 hover:bg-[#FAFBFD] shadow-2xs'
                  }`}
                >
                  <div>
                    {/* Step badge and icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center group-hover:scale-105 transition-transform">
                        {item.icon}
                      </div>
                      <span className="text-xs font-mono font-extrabold text-[#2D2575] bg-[#EEEDFA] px-2.5 py-1 rounded-full border border-[#D1CDF4]/70">
                        Step {item.step}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg font-bold text-[#111622] group-hover:text-[#2D2575] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#D98E3A] mb-2">
                      {item.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Details list */}
                    <ul className="space-y-1.5 pt-3 border-t border-slate-100/80 text-[11px] text-slate-500">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#D98E3A]" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className={`font-semibold ${isSelected ? 'text-[#2D2575]' : 'text-slate-400'}`}>
                      {isSelected ? 'Phase Highlighted' : 'Click to inspect'}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-[#D98E3A] translate-x-1' : 'text-slate-300'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onStartProject}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#D98E3A] via-[#E29D4B] to-[#B26E20] hover:from-[#E29D4B] hover:to-[#9E5F17] shadow-lg shadow-[#D98E3A]/25 active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Ready to Begin Discovery?</span>
            <ArrowRight className="w-4 h-4 text-amber-100" />
          </button>
        </div>
      </div>
    </section>
  );
};
