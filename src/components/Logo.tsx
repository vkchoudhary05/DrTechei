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
            className={`font-black ml-0.5 ${
              isDark
                ? 'bg-gradient-to-r from-[#FBD79A] via-[#E29A45] to-[#D98E3A] bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-[#2D2575] via-[#4338CA] to-[#D98E3A] bg-clip-text text-transparent'
            }`}
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
            {/* <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#D98E3A] to-[#B26E20] inline-block shrink-0" /> */}
          </div>
        )}
      </div>
    </div>
  );
};

