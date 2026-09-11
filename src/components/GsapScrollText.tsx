import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GsapScrollTextProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div' | 'span';
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  blur?: boolean;
  stagger?: number;
  splitWords?: boolean;
}

export const GsapScrollText: React.FC<GsapScrollTextProps> = ({
  children,
  as: Component = 'div',
  className = '',
  delay = 0,
  duration = 0.8,
  y = 24,
  blur = true,
  stagger = 0.04,
  splitWords = false,
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const targets = splitWords ? el.querySelectorAll('.gsap-word') : el;

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          y,
          filter: blur ? 'blur(4px)' : 'none',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'none',
          duration,
          delay,
          stagger: splitWords ? stagger : 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, duration, y, blur, stagger, splitWords]);

  // If splitWords is true and children is a string, wrap words in spans
  if (splitWords && typeof children === 'string') {
    const words = children.split(' ');
    return React.createElement(
      Component,
      { ref: containerRef, className: `${className} inline-block` },
      words.map((word, idx) => (
        <span key={idx} className="gsap-word inline-block mr-[0.25em] will-change-transform">
          {word}
        </span>
      ))
    );
  }

  return React.createElement(
    Component,
    { ref: containerRef, className: `${className} will-change-transform` },
    children
  );
};
