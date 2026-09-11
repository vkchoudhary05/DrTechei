
import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light' | 'auto';
  showSubtitle?: boolean;
  className?: string;
  iconSize?: number;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
    >
      <img
        src="/Dr1.png"
        alt="DrTechei"
        className="
          block
          w-[140px]
          h-[55px]
          sm:w-[155px]
          sm:h-[50px]
          md:w-[175px]
          md:h-[55px]
          lg:w-[150px]
          lg:h-[60px]
        "
      />
    </div>
  );
};