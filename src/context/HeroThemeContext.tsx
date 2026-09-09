import React, { createContext, useContext, useState, useEffect } from 'react';

export type HeroThemeId = 'cyber-obsidian' | 'royal-indigo' | 'midnight-titanium' | 'studio-clean';

export interface HeroThemeConfig {
  id: HeroThemeId;
  name: string;
  tagline: string;
  isDark: boolean;
  accentColor: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  previewBg: string;
  cardBg: string;
  cardBorder: string;
  textPrimary: string;
  textSecondary: string;
  accentGradient: string;
}

export const HERO_THEMES: Record<HeroThemeId, HeroThemeConfig> = {
  'cyber-obsidian': {
    id: 'cyber-obsidian',
    name: 'Cyber Obsidian',
    tagline: 'Deep Obsidian with Circuit Copper Glow',
    isDark: true,
    accentColor: '#D98E3A',
    badgeBg: 'rgba(217, 142, 58, 0.12)',
    badgeBorder: 'rgba(217, 142, 58, 0.35)',
    badgeText: '#F2BC7B',
    previewBg: 'bg-[#0B0F19]',
    cardBg: 'bg-[#111726]/90 backdrop-blur-xl',
    cardBorder: 'border-slate-800/90',
    textPrimary: 'text-white',
    textSecondary: 'text-slate-300',
    accentGradient: 'from-[#FBD79A] via-[#E29A45] to-[#D98E3A]',
  },
  'royal-indigo': {
    id: 'royal-indigo',
    name: 'Royal Tech Indigo',
    tagline: 'Signature DrTechei Sapphire-Violet',
    isDark: true,
    accentColor: '#818CF8',
    badgeBg: 'rgba(99, 102, 241, 0.16)',
    badgeBorder: 'rgba(129, 140, 248, 0.35)',
    badgeText: '#C7D2FE',
    previewBg: 'bg-[#0E0C28]',
    cardBg: 'bg-[#17133D]/90 backdrop-blur-xl',
    cardBorder: 'border-indigo-900/60',
    textPrimary: 'text-white',
    textSecondary: 'text-indigo-200/90',
    accentGradient: 'from-[#A5B4FC] via-[#818CF8] to-[#6366F1]',
  },
  'midnight-titanium': {
    id: 'midnight-titanium',
    name: 'Midnight Titanium',
    tagline: 'Ultra-Clean Charcoal & Emerald Telemetry',
    isDark: true,
    accentColor: '#10B981',
    badgeBg: 'rgba(16, 185, 129, 0.12)',
    badgeBorder: 'rgba(52, 211, 153, 0.3)',
    badgeText: '#6EE7B7',
    previewBg: 'bg-[#0D131F]',
    cardBg: 'bg-[#151F32]/90 backdrop-blur-xl',
    cardBorder: 'border-slate-800/80',
    textPrimary: 'text-white',
    textSecondary: 'text-slate-300',
    accentGradient: 'from-[#6EE7B7] via-[#34D399] to-[#10B981]',
  },
  'studio-clean': {
    id: 'studio-clean',
    name: 'Studio Clean',
    tagline: 'High-Contrast Architectural White',
    isDark: false,
    accentColor: '#2D2575',
    badgeBg: '#EEEDFA',
    badgeBorder: '#D1CDF4',
    badgeText: '#2D2575',
    previewBg: 'bg-[#FAFBFD]',
    cardBg: 'bg-white',
    cardBorder: 'border-slate-200/90',
    textPrimary: 'text-[#111622]',
    textSecondary: 'text-slate-600',
    accentGradient: 'from-[#2D2575] via-[#4338CA] to-[#D98E3A]',
  },
};

interface HeroThemeContextType {
  theme: HeroThemeId;
  setTheme: (theme: HeroThemeId) => void;
  currentConfig: HeroThemeConfig;
  isDark: boolean;
  allThemes: HeroThemeConfig[];
}

const HeroThemeContext = createContext<HeroThemeContextType | undefined>(undefined);

export const HeroThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<HeroThemeId>(() => {
    return 'studio-clean';
  });

  const setTheme = (newTheme: HeroThemeId) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('drtechei_hero_theme', newTheme);
      } catch {}
    }
  };

  const currentConfig = HERO_THEMES['studio-clean'];
  const isDark = false;
  const allThemes = Object.values(HERO_THEMES);

  return (
    <HeroThemeContext.Provider value={{ theme, setTheme, currentConfig, isDark, allThemes }}>
      {children}
    </HeroThemeContext.Provider>
  );
};

export const useHeroTheme = () => {
  const context = useContext(HeroThemeContext);
  if (!context) {
    throw new Error('useHeroTheme must be used within a HeroThemeProvider');
  }
  return context;
};
