import React, { useEffect, useState, useRef } from 'react';
import { Briefcase, Users, Cpu, HeartHandshake } from 'lucide-react';

interface StatItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}

export const TrustValueStrip: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    projects: 0,
    clients: 0,
    tech: 0,
    focus: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    {
      id: 'projects',
      target: 50,
      suffix: '+',
      label: 'Projects Completed',
      sublabel: 'Custom platforms & websites delivered',
      icon: <Briefcase className="w-5 h-5 text-[#D98E3A]" />,
    },
    {
      id: 'clients',
      target: 30,
      suffix: '+',
      label: 'Happy Clients',
      sublabel: 'Global business partnerships',
      icon: <Users className="w-5 h-5 text-[#2D2575]" />,
    },
    {
      id: 'tech',
      target: 5,
      suffix: '+',
      label: 'Core Tech Stacks',
      sublabel: 'Next.js, React, Node, Shopify & CMS',
      icon: <Cpu className="w-5 h-5 text-[#D98E3A]" />,
    },
    {
      id: 'focus',
      target: 100,
      suffix: '%',
      label: 'Client Satisfaction',
      sublabel: 'Dedicated engineering & support',
      icon: <HeartHandshake className="w-5 h-5 text-emerald-600" />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counters smoothly
          const duration = 1600; // ms
          const startTime = performance.now();

          const updateCounters = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts({
              projects: Math.floor(easeOut * 50),
              clients: Math.floor(easeOut * 30),
              tech: Math.floor(easeOut * 5),
              focus: Math.floor(easeOut * 100),
            });

            if (progress < 1) {
              requestAnimationFrame(updateCounters);
            } else {
              setCounts({
                projects: 50,
                clients: 30,
                tech: 5,
                focus: 100,
              });
            }
          };

          requestAnimationFrame(updateCounters);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      id="value-strip"
      className="relative z-10 py-10 sm:py-14 bg-white border-y border-slate-200/80 shadow-xs"
    >
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* Banner Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2D2575] mb-2">
            Proven Track Record
          </p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#111622]">
            Helping Businesses Build Better Digital Experiences
          </h2>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 2xl:gap-10">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-[#D98E3A]/40 hover:bg-[#FDF7EF]/40 shadow-xs hover:shadow-md transition-all duration-200 group"
            >
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs group-hover:scale-110 group-hover:border-[#D98E3A]/40 transition-all duration-200 mb-3.5">
                {stat.icon}
              </div>
              <div className="flex items-baseline gap-0.5">
                <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {counts[stat.id]}
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-[#D98E3A]">
                  {stat.suffix}
                </span>
              </div>
              <div className="mt-1 text-sm font-bold text-[#2D2575]">
                {stat.label}
              </div>
              <div className="mt-0.5 text-xs text-slate-500 font-normal">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
