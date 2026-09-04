import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * A custom hook for running GSAP animations with proper React lifecycle cleanup.
 * 
 * @param {Function} callback - A function containing the GSAP code. It receives the GSAP context argument.
 * @param {Array} dependencies - The React dependency array for the effect.
 * @param {React.RefObject} scopeRef - Optional ref for scoping selectors.
 */
export const useGsap = (callback, dependencies = [], scopeRef = null) => {
  useEffect(() => {
    // Create a GSAP context scoped to the component or element
    const ctx = gsap.context((self) => {
      callback(self);
    }, scopeRef || undefined);

    // Clean up all animations and triggers on unmount
    return () => {
      ctx.revert();
    };
  }, dependencies);
};

export default useGsap;
