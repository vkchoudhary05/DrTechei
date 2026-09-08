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
  iconSize = 34,
}) => {
  const isDark = variant === 'dark';
  
  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* High-Clarity Brand Icon SVG: Stethoscope + 'DT' Monogram + Electronic Circuit Board Traces */}
      <div 
        className="relative flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105"
        style={{ width: iconSize, height: iconSize }}
      >
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
        >
          <defs>
            {/* Rich Copper / Bronze Metallic Gradient */}
            <linearGradient id="dt-copper-primary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBD79A" />
              <stop offset="30%" stopColor="#E29A45" />
              <stop offset="70%" stopColor="#C07724" />
              <stop offset="100%" stopColor="#8C4F13" />
            </linearGradient>

            <linearGradient id="dt-copper-highlight" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C07724" />
              <stop offset="50%" stopColor="#F9DFB0" />
              <stop offset="100%" stopColor="#E29A45" />
            </linearGradient>

            {/* Deep Royal Tech Indigo Core */}
            <linearGradient id="dt-indigo-core" x1="15%" y1="10%" x2="85%" y2="90%">
              <stop offset="0%" stopColor="#2E2478" />
              <stop offset="50%" stopColor="#1C154F" />
              <stop offset="100%" stopColor="#100C2E" />
            </linearGradient>

            {/* Specular Edge Highlight */}
            <linearGradient id="dt-specular" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8AA5C" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#2D2575" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#E29A45" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* 1. STETHOSCOPE (Left Flank) - Binaural headset and acoustic chest piece */}
          <g>
            {/* Binaural eartips */}
            <circle cx="21" cy="22" r="3.2" fill="url(#dt-copper-primary)" />
            <circle cx="31" cy="19" r="3.2" fill="url(#dt-copper-primary)" />

            {/* Binaural metal tubes */}
            <path
              d="M21 23 C21 33 26 38 27 42"
              stroke="url(#dt-copper-primary)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <path
              d="M31 20 C31 31 28 38 27 42"
              stroke="url(#dt-copper-primary)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />

            {/* Connector bridge */}
            <rect x="24.8" y="39.5" width="4.4" height="5" rx="1.2" fill="url(#dt-copper-highlight)" />

            {/* Flexible acoustic stethoscope tube sweeping gracefully down */}
            <path
              d="M27 43.5 C26 57 15 64 15 80 C15 95 24 101 36 101"
              stroke="url(#dt-copper-primary)"
              strokeWidth="4.5"
              strokeLinecap="round"
            />

            {/* Stethoscope Chest Piece / Bell & Diaphragm */}
            <g transform="translate(15, 80)">
              <circle cx="0" cy="0" r="9" fill="url(#dt-copper-primary)" stroke="#8C4F13" strokeWidth="1" />
              <circle cx="0" cy="0" r="6" fill="#1A1542" stroke="url(#dt-copper-highlight)" strokeWidth="1.2" />
              <circle cx="0" cy="0" r="2.5" fill="url(#dt-copper-highlight)" />
            </g>
          </g>

          {/* 2. THE MONOGRAM: BOLD "D" & INNER "T" in Deep Royal Indigo & Copper */}
          <g>
            {/* The bold "D" Body */}
            <path
              d="M36 22 H64 C83 22 96 37 96 58 C96 79 83 94 64 94 H36 Z"
              fill="url(#dt-indigo-core)"
              stroke="url(#dt-specular)"
              strokeWidth="1.8"
            />

            {/* The "T" Stem & Crossbar sculpted in metallic copper */}
            {/* T Stem */}
            <rect x="44" y="33" width="9" height="50" rx="2.5" fill="url(#dt-copper-primary)" />
            {/* T Crossbar */}
            <path
              d="M37 33 H70 C72 33 73 35 72 37 L70 42 H37 Z"
              fill="url(#dt-copper-primary)"
            />
            {/* High-tech diagnostic dot inside D cavity */}
            <circle cx="73" cy="58" r="4.5" fill="url(#dt-copper-highlight)" />
            <circle cx="73" cy="58" r="2" fill="#FFFFFF" />
          </g>

          {/* 3. ELECTRONIC CIRCUIT BOARD TRACES & SOLDER NODES (Branching off the right curve of "D") */}
          <g>
            {/* Trace 1 - Upper right angled trace */}
            <path
              d="M87 39 L97 39 L106 30"
              stroke="url(#dt-copper-primary)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="107" cy="29" r="3.4" fill="url(#dt-copper-highlight)" stroke="#8C4F13" strokeWidth="0.8" />
            <circle cx="107" cy="29" r="1.3" fill="#FFFFFF" />

            {/* Trace 2 - Upper-mid horizontal trace */}
            <path
              d="M93 49 L112 49"
              stroke="url(#dt-copper-primary)"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            <circle cx="113.5" cy="49" r="3.4" fill="url(#dt-copper-highlight)" stroke="#8C4F13" strokeWidth="0.8" />
            <circle cx="113.5" cy="49" r="1.3" fill="#FFFFFF" />

            {/* Trace 3 - Center main long trace */}
            <path
              d="M96 58 L116 58"
              stroke="url(#dt-copper-primary)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <circle cx="117" cy="58" r="3.8" fill="url(#dt-copper-highlight)" stroke="#8C4F13" strokeWidth="0.8" />
            <circle cx="117" cy="58" r="1.5" fill="#FFFFFF" />

            {/* Trace 4 - Lower-mid angled trace */}
            <path
              d="M93 67 L103 67 L110 75"
              stroke="url(#dt-copper-primary)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="111.5" cy="76.5" r="3.4" fill="url(#dt-copper-highlight)" stroke="#8C4F13" strokeWidth="0.8" />
            <circle cx="111.5" cy="76.5" r="1.3" fill="#FFFFFF" />

            {/* Trace 5 - Lower diagonal trace */}
            <path
              d="M87 77 L97 77 L104 83"
              stroke="url(#dt-copper-primary)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="105.5" cy="84.5" r="3.4" fill="url(#dt-copper-highlight)" stroke="#8C4F13" strokeWidth="0.8" />
            <circle cx="105.5" cy="84.5" r="1.3" fill="#FFFFFF" />
          </g>
        </svg>
      </div>

      {/* Brand Typography matching the Logo */}
      <div className="flex flex-col text-left leading-none">
        <div className="flex items-baseline tracking-tight font-extrabold">
          <span 
            className={`font-black tracking-tight ${
              isDark ? 'text-white' : 'text-[#1E1752]'
            }`}
            style={{ fontSize: `${Math.max(16, iconSize * 0.54)}px` }}
          >
            Dr
          </span>
          <span 
            className="font-black bg-gradient-to-r from-[#2D2575] via-[#4338CA] to-[#D98E3A] bg-clip-text text-transparent ml-0.5"
            style={{ fontSize: `${Math.max(16, iconSize * 0.54)}px` }}
          >
            Techei
          </span>
        </div>

        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1">
            <span 
              className={`font-bold uppercase transition-colors duration-200 ${
                isDark ? 'text-amber-300/90' : 'text-[#2D2575]'
              }`}
              style={{ 
                fontSize: `${Math.max(8.5, iconSize * 0.23)}px`, 
                letterSpacing: '0.18em' 
              }}
            >
              IT Solutions
            </span>
            {/* Metallic copper accent indicator */}
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#D98E3A] to-[#B26E20] inline-block shrink-0" />
          </div>
        )}
      </div>
    </div>
  );
};

