import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light' | 'auto';
  showSubtitle?: boolean;
  className?: string;
  iconSize?: number;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'auto',
  showSubtitle = true,
  className = '',
  iconSize = 40,
}) => {
  const isDark = variant === 'dark';
  
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Brand Icon SVG: Stethoscope + 'D' & 'T' + Circuit Board Traces */}
      <div 
        className="relative flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105"
        style={{ width: iconSize, height: iconSize }}
      >
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            {/* Warm Copper / Bronze / Gold Metallic Gradients matching the Logo */}
            <linearGradient id="copper-primary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F9D79F" />
              <stop offset="25%" stopColor="#E29A45" />
              <stop offset="65%" stopColor="#C07724" />
              <stop offset="100%" stopColor="#8C4F13" />
            </linearGradient>

            <linearGradient id="copper-highlight" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C07724" />
              <stop offset="50%" stopColor="#F5CF93" />
              <stop offset="100%" stopColor="#E29A45" />
            </linearGradient>

            {/* Dark Titanium / Gunmetal Monogram Core */}
            <linearGradient id="titanium-core" x1="15%" y1="10%" x2="85%" y2="90%">
              <stop offset="0%" stopColor="#323C4E" />
              <stop offset="35%" stopColor="#1E2533" />
              <stop offset="70%" stopColor="#121721" />
              <stop offset="100%" stopColor="#0B0E14" />
            </linearGradient>

            <linearGradient id="titanium-specular" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#56667F" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#2E3747" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0E1219" stopOpacity="0.9" />
            </linearGradient>

            {/* Deep Royal Indigo Tint */}
            <linearGradient id="royal-indigo" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4338CA" />
              <stop offset="50%" stopColor="#2D2575" />
              <stop offset="100%" stopColor="#1A1448" />
            </linearGradient>

            {/* Soft Shadow for realistic depth */}
            <filter id="copper-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#D98E3A" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* 1. STETHOSCOPE (Left Flank) - Rendered in warm polished copper/gold */}
          {/* Earpieces / Binaural headset tips at upper left */}
          <g filter="url(#copper-glow)">
            {/* Left ear tip */}
            <circle cx="21" cy="23" r="2.8" fill="url(#copper-primary)" />
            {/* Right ear tip */}
            <circle cx="31" cy="20" r="2.8" fill="url(#copper-primary)" />
            {/* Binaural metal headset tubes */}
            <path
              d="M21 24 C21 33 26 38 27 42"
              stroke="url(#copper-primary)"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <path
              d="M31 21 C31 31 28 38 27 42"
              stroke="url(#copper-primary)"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            {/* Connector clasp */}
            <rect x="25.2" y="40" width="3.6" height="4.5" rx="1" fill="url(#copper-highlight)" />

            {/* Flexible acoustic stethoscope tube curving down the left spine */}
            <path
              d="M27 43.5 C26 56 16 63 16 78 C16 93 25 99 35 99"
              stroke="url(#copper-primary)"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* Stethoscope Chest Piece / Bell & Diaphragm (positioned elegantly at bottom-left loop) */}
            <g transform="translate(16, 80)">
              {/* Outer metallic bell ring */}
              <circle cx="0" cy="0" r="8.5" fill="url(#copper-primary)" stroke="#8C4F13" strokeWidth="1" />
              {/* Inner diaphragm rim */}
              <circle cx="0" cy="0" r="5.8" fill="#1A2130" stroke="url(#copper-highlight)" strokeWidth="1.2" />
              {/* Center acoustic sensor dot */}
              <circle cx="0" cy="0" r="2.2" fill="url(#copper-highlight)" />
            </g>
          </g>

          {/* 2. THE MONOGRAM: BOLD "D" & INNER "T" in Brushed Titanium */}
          <g>
            {/* The bold "D" Body with metallic depth */}
            <path
              d="M37 24 H64 C82 24 95 38 95 58 C95 78 82 92 64 92 H37 Z"
              fill="url(#titanium-core)"
              stroke="url(#titanium-specular)"
              strokeWidth="1.5"
            />

            {/* Inner cutout forming the D counter and central "T" structure */}
            <path
              d="M50 36 H62 C74 36 82 46 82 58 C82 70 74 80 62 80 H50 Z"
              fill={isDark ? '#111622' : '#FFFFFF'}
            />

            {/* The "T" Stem & Crossbar sculpted inside */}
            {/* T Stem */}
            <rect x="44" y="34" width="8" height="48" rx="2" fill="url(#titanium-core)" />
            {/* T Crossbar */}
            <path
              d="M38 34 H68 C70 34 71 36 70 38 L68 42 H38 Z"
              fill="url(#titanium-core)"
            />
            {/* Subtle copper accent inlay on T intersection */}
            <rect x="46.5" y="36" width="3" height="3" rx="0.8" fill="url(#copper-primary)" />
          </g>

          {/* 3. ELECTRONIC CIRCUIT BOARD TRACES & SOLDER NODES (Branching off the right curve of "D") */}
          <g filter="url(#copper-glow)">
            {/* Trace 1 - Upper right angled trace */}
            <path
              d="M87 40 L97 40 L105 32"
              stroke="url(#copper-primary)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="106" cy="31" r="3.2" fill="url(#copper-highlight)" stroke="#8C4F13" strokeWidth="0.8" />
            <circle cx="106" cy="31" r="1.2" fill="#FFFFFF" />

            {/* Trace 2 - Upper-mid horizontal trace */}
            <path
              d="M93 49 L111 49"
              stroke="url(#copper-primary)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="112.5" cy="49" r="3.2" fill="url(#copper-highlight)" stroke="#8C4F13" strokeWidth="0.8" />
            <circle cx="112.5" cy="49" r="1.2" fill="#FFFFFF" />

            {/* Trace 3 - Center main long trace */}
            <path
              d="M95 58 L115 58"
              stroke="url(#copper-primary)"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <circle cx="116" cy="58" r="3.6" fill="url(#copper-highlight)" stroke="#8C4F13" strokeWidth="0.8" />
            <circle cx="116" cy="58" r="1.4" fill="#FFFFFF" />

            {/* Trace 4 - Lower-mid angled trace */}
            <path
              d="M93 67 L102 67 L109 74"
              stroke="url(#copper-primary)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="110.5" cy="75.5" r="3.2" fill="url(#copper-highlight)" stroke="#8C4F13" strokeWidth="0.8" />
            <circle cx="110.5" cy="75.5" r="1.2" fill="#FFFFFF" />

            {/* Trace 5 - Lower diagonal trace */}
            <path
              d="M87 76 L97 76 L103 82"
              stroke="url(#copper-primary)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="104.5" cy="83.5" r="3.2" fill="url(#copper-highlight)" stroke="#8C4F13" strokeWidth="0.8" />
            <circle cx="104.5" cy="83.5" r="1.2" fill="#FFFFFF" />
          </g>
        </svg>
      </div>

      {/* Brand Typography matching the Logo */}
      <div className="flex flex-col text-left">
        <div className="flex items-baseline tracking-tight leading-none font-extrabold">
          <span 
            className={`transition-colors duration-200 ${
              isDark ? 'text-white' : 'text-[#241C63]'
            }`}
            style={{ fontSize: `${iconSize * 0.58}px` }}
          >
            Dr
          </span>
          <span 
            className="bg-gradient-to-r from-[#2F2579] via-[#4338CA] to-[#D98E3A] bg-clip-text text-transparent font-black"
            style={{ fontSize: `${iconSize * 0.58}px` }}
          >
            Techei
          </span>
        </div>

        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-0.5">
            <span 
              className={`font-bold tracking-widest uppercase transition-colors duration-200 ${
                isDark ? 'text-amber-300/90' : 'text-[#2D2575]'
              }`}
              style={{ fontSize: `${Math.max(8.5, iconSize * 0.22)}px`, letterSpacing: '0.19em' }}
            >
              IT Solutions
            </span>
            {/* Subtle copper accent pip */}
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#D98E3A] to-[#B26E20] inline-block" />
          </div>
        )}
      </div>
    </div>
  );
};

