import { useRef } from 'react';
import { useGsap } from '../hooks/useGsap';
import gsap from 'gsap';

// Importing our high-quality assets
import look1 from '../assets/about_main.jpg';
import look2 from '../assets/cat_jacket.jpg';
import look3 from '../assets/hero.png';
import look4 from '../assets/about_detail.jpg';

export const Lookbook = () => {
  const containerRef = useRef(null);
  const item1 = useRef(null);
  const item2 = useRef(null);
  const item3 = useRef(null);
  const item4 = useRef(null);

  useGsap(() => {
    // Parallax movements with different speed factors (yPercent)
    gsap.fromTo(item1.current, { yPercent: 10 }, {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    gsap.fromTo(item2.current, { yPercent: -15 }, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    gsap.fromTo(item3.current, { yPercent: 5 }, {
      yPercent: -5,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });

    gsap.fromTo(item4.current, { yPercent: -20 }, {
      yPercent: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    });
  }, [], containerRef);

  return (
    <section
      ref={containerRef}
      id="lookbook"
      className="relative w-full bg-[#faf9f6] text-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.45em] text-black/50 mb-4 font-mono">
            VISUAL LOOKBOOK
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light uppercase tracking-tight text-black leading-none">
            EDITORIAL <span className="italic text-[#8c7a6b]">CAMPAIGN.</span>
          </h2>
        </div>

        {/* Overlapping Spread Layout */}
        <div className="relative min-h-[100vh] md:min-h-[140vh] grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Item 1: Large portrait, top-left */}
          <div
            ref={item1}
            className="md:col-span-5 relative z-10 md:mt-24"
          >
            <div className="aspect-[3/4] w-full overflow-hidden bg-zinc-950">
              <img
                src={look1}
                alt="Structured grey wool coat look"
                className="w-full h-full object-cover opacity-90 hover:scale-102 transition-transform duration-700"
              />
            </div>
            <div className="mt-4 text-left">
              <span className="text-[10px] uppercase tracking-widest font-mono text-black/40">Look 01</span>
              <p className="font-serif text-sm uppercase text-black font-light mt-1">Wool Overcoat &mdash; Charcoal Grey</p>
            </div>
          </div>

          {/* Item 2: Medium portrait, top-right */}
          <div
            ref={item2}
            className="md:col-span-4 md:col-start-8 relative z-20 md:-mt-12"
          >
            <div className="aspect-[3/4] w-full overflow-hidden bg-zinc-950 shadow-2xl">
              <img
                src={look2}
                alt="Minimalist pants and jacket look"
                className="w-full h-full object-cover opacity-90 hover:scale-102 transition-transform duration-700"
              />
            </div>
            <div className="mt-4 text-left">
              <span className="text-[10px] uppercase tracking-widest font-mono text-black/40">Look 02</span>
              <p className="font-serif text-sm uppercase text-black font-light mt-1">Structured Blazer &amp; Trouser Suite</p>
            </div>
          </div>

          {/* Item 3: Landscape, center-left overlapping */}
          <div
            ref={item3}
            className="md:col-span-6 md:col-start-2 relative z-10 md:-mt-6"
          >
            <div className="aspect-[3/2] w-full overflow-hidden bg-zinc-950">
              <img
                src={look3}
                alt="Studio campaign model look"
                className="w-full h-full object-cover opacity-90 hover:scale-102 transition-transform duration-700"
              />
            </div>
            <div className="mt-4 text-left">
              <span className="text-[10px] uppercase tracking-widest font-mono text-black/40">Look 03</span>
              <p className="font-serif text-sm uppercase text-black font-light mt-1">Industrial Studio &mdash; Autumn Winter 2026</p>
            </div>
          </div>

          {/* Item 4: Small square detail, bottom-right */}
          <div
            ref={item4}
            className="md:col-span-3 md:col-start-9 relative z-20 md:mt-24"
          >
            <div className="aspect-square w-full overflow-hidden bg-zinc-950 shadow-xl border-4 border-[#faf9f6]">
              <img
                src={look4}
                alt="Stitching and texture close-up"
                className="w-full h-full object-cover opacity-95 hover:scale-102 transition-transform duration-700"
              />
            </div>
            <div className="mt-4 text-left">
              <span className="text-[10px] uppercase tracking-widest font-mono text-black/40">Look 04</span>
              <p className="font-serif text-sm uppercase text-black font-light mt-1">Macro Seam Detail &mdash; Heavy Duty Wool</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Lookbook;
