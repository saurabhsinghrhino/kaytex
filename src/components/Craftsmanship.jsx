import { useRef } from 'react';
import { useGsap } from '../hooks/useGsap';
import gsap from 'gsap';
import craftsmanshipImg from '../assets/about_detail.jpg';

export const Craftsmanship = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);

  useGsap(() => {
    // Subtle image zoom on scroll
    gsap.fromTo(imageRef.current,
      { scale: 1.0 },
      {
        scale: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      }
    );

    // Fade-in overlay text
    gsap.fromTo(overlayRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 50%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, [], containerRef);

  return (
    <section
      ref={containerRef}
      id="craftsmanship"
      className="relative w-full h-[70vh] md:h-screen bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Background Tactile Fabric Detail */}
      <div className="absolute inset-0 z-0">
        <img
          ref={imageRef}
          src={craftsmanshipImg}
          alt="Tactile macro stitching of KAYTEX-EXPORTERS garments"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Centered Editorial Content */}
      <div ref={overlayRef} className="relative z-10 text-center max-w-4xl px-6">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.45em] text-white/50 mb-6 font-mono">
          UNCOMPROMISING PRECISION
        </p>
        
        <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl font-light uppercase leading-[1.15] tracking-tight text-white mb-8">
          DETAIL MAKES THE <br />
          <span className="italic text-[#d4c5b9]">DIFFERENCE.</span>
        </h2>

        <p className="max-w-xl mx-auto text-sm md:text-base font-light tracking-wide text-white/70 leading-relaxed">
          From the selection of extra-long staple organic fibers to our 12-stitches-per-inch sewing standard, every phase of production is monitored. You can visually see and tactfully feel the weight, consistency, and structure of a KAYTEX-EXPORTERS garment.
        </p>

        <div className="mt-12 flex justify-center gap-6">
          <div className="flex flex-col items-center">
            <span className="text-white font-serif text-lg">12 CPI</span>
            <span className="text-white/40 text-[9px] uppercase tracking-wider font-mono">Stitch Density</span>
          </div>
          <div className="w-[1px] h-10 bg-white/20" />
          <div className="flex flex-col items-center">
            <span className="text-white font-serif text-lg">100%</span>
            <span className="text-white/40 text-[9px] uppercase tracking-wider font-mono">Premium Cotton</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
