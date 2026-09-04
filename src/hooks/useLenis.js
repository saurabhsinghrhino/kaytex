import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

export const useLenis = () => {
  useEffect(() => {
    // Return early if lenis is already initialized or if reduced motion is preferred
    if (lenisInstance) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisInstance = lenis;

    // Connect Lenis scroll to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Sync Lenis RAF with GSAP Ticker
    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  // Utility to scroll to any element
  const scrollTo = (target, options = {}) => {
    if (lenisInstance) {
      lenisInstance.scrollTo(target, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        ...options
      });
    } else {
      const element = typeof target === 'string' ? document.querySelector(target) : target;
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return { lenis: lenisInstance, scrollTo };
};
export default useLenis;
