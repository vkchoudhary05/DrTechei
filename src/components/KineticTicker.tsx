import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Globe2, ShieldCheck, Zap, Terminal, Code2, Layers } from 'lucide-react';

interface KineticTickerProps {
  theme?: 'dark' | 'light';
  speed?: 'normal' | 'fast';
}

export const KineticTicker: React.FC<KineticTickerProps> = ({ theme = 'dark', speed = 'normal' }) => {
  const isDark = theme === 'dark';

  const items = [
    { text: 'GLOBAL TECH PARTNER', icon: Globe2, highlight: true },
    { text: 'EUROPE • AUSTRALIA • CANADA • ALL INDIA', icon: ShieldCheck, highlight: false },
    { text: 'NEXT.JS 15 APPS', icon: Zap, highlight: true },
    { text: 'DEDICATED TECH SQUAD', icon: Terminal, highlight: false },
    { text: '99+ LIGHTHOUSE SPEED', icon: Sparkles, highlight: true },
    { text: '100% CODE OWNERSHIP', icon: Code2, highlight: false },
    { text: 'ENTERPRISE CMS & APIs', icon: Layers, highlight: false },
    { text: 'SUB-SECOND EDGE TTFB', icon: Zap, highlight: true },
  ];

  const duration = speed === 'fast' ? 22 : 32;

  return (
    <div
      className={`w-full overflow-hidden select-none border-y relative ${
        isDark
          ? 'bg-slate-950/80 backdrop-blur-md border-slate-800/80 text-white'
          : 'bg-white/90 backdrop-blur-md border-slate-200/90 text-slate-800'
      }`}
    >
      {/* Edge gradient fades for clean endless loop illusion */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none ${
          isDark
            ? 'bg-gradient-to-r from-slate-950 to-transparent'
            : 'bg-gradient-to-r from-white to-transparent'
        }`}
      />
      <div
        className={`absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none ${
          isDark
            ? 'bg-gradient-to-l from-slate-950 to-transparent'
            : 'bg-gradient-to-l from-white to-transparent'
        }`}
      />

      <div className="flex py-2.5 sm:py-3.5">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration,
            ease: 'linear',
          }}
          className="flex shrink-0 items-center gap-6 sm:gap-10 pr-6 sm:pr-10"
        >
          {/* Render doubled sequence for seamless infinite looping */}
          {[...items, ...items].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2.5 sm:gap-3 shrink-0 uppercase tracking-wider font-extrabold text-[11px] sm:text-xs"
              >
                <span
                  className={`p-1 rounded-md ${
                    item.highlight
                      ? isDark
                        ? 'bg-[#D98E3A]/20 text-[#F2BC7B]'
                        : 'bg-[#D98E3A]/15 text-[#B26E20]'
                      : isDark
                      ? 'bg-indigo-500/20 text-indigo-300'
                      : 'bg-[#EEEDFA] text-[#2D2575]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </span>

                <span
                  className={`${
                    item.highlight
                      ? isDark
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#FBD79A] via-[#E29A45] to-[#D98E3A]'
                        : 'text-transparent bg-clip-text bg-gradient-to-r from-[#2D2575] to-[#D98E3A]'
                      : isDark
                      ? 'text-slate-300'
                      : 'text-slate-700'
                  }`}
                >
                  {item.text}
                </span>

                <span className={isDark ? 'text-slate-700' : 'text-slate-300'}>•</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
