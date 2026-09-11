import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Initializes GSAP ScrollTrigger smooth text and element reveals across all elements
 * matching specific selector classes.
 */
export function initGlobalGsapScroll() {
  if (typeof window === 'undefined') return () => {};

  // Refresh ScrollTrigger to account for dynamic DOM updates
  ScrollTrigger.refresh();

  const ctx = gsap.context(() => {
    // 1. Smooth Headings & Display Titles Reveal
    const headings = gsap.utils.toArray<HTMLElement>('.gsap-reveal-title, h1, h2:not([data-no-gsap])');
    headings.forEach((heading) => {
      // Don't re-animate if already initialized
      if (heading.dataset.gsapInit) return;
      heading.dataset.gsapInit = 'true';

      gsap.fromTo(
        heading,
        {
          opacity: 0,
          y: 28,
          filter: 'blur(4px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    });

    // 2. Smooth Subtitles, Eyebrows & Paragraphs Reveal
    const texts = gsap.utils.toArray<HTMLElement>('.gsap-reveal-text, .gsap-reveal-sub');
    texts.forEach((text) => {
      if (text.dataset.gsapInit) return;
      text.dataset.gsapInit = 'true';

      gsap.fromTo(
        text,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          delay: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: text,
            start: 'top 90%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    });

    // 3. Staggered Card & Grid Children Reveal
    const staggerContainers = gsap.utils.toArray<HTMLElement>('.gsap-stagger-group');
    staggerContainers.forEach((container) => {
      if (container.dataset.gsapInit) return;
      container.dataset.gsapInit = 'true';

      const children = container.querySelectorAll('.gsap-stagger-item, > div');
      if (children.length === 0) return;

      gsap.fromTo(
        children,
        {
          opacity: 0,
          y: 30,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    });
  });

  return () => {
    ctx.revert();
  };
}

/**
 * Custom React Hook for targeting a specific element with smooth GSAP scroll animation
 */
export function useGsapTextReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  start?: string;
}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const ctx = gsap.context(() => {
      const children = el.querySelectorAll('.gsap-child');

      if (children.length > 0) {
        gsap.fromTo(
          children,
          {
            opacity: 0,
            y: options?.y ?? 24,
            filter: 'blur(3px)',
          },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: options?.duration ?? 0.8,
            delay: options?.delay ?? 0.05,
            stagger: options?.stagger ?? 0.06,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: options?.start ?? 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      } else {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: options?.y ?? 24,
            filter: 'blur(3px)',
          },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: options?.duration ?? 0.8,
            delay: options?.delay ?? 0.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: options?.start ?? 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [options?.delay, options?.duration, options?.y, options?.stagger, options?.start]);

  return ref;
}
