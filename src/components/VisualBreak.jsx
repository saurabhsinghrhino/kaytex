import { useRef } from 'react';
import { useGsap } from '../hooks/useGsap';
import gsap from 'gsap';
import breakImg from '../assets/hero.png';

export const VisualBreak = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useGsap(() => {
    // Slow parallax scale
    gsap.fromTo(imageRef.current,
      { scale: 1.05, yPercent: -5 },
      {
        scale: 1.15,
        yPercent: 5,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      }
    );
  }, [], containerRef);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[60vh] md:h-[80vh] bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <img
          ref={imageRef}
          src={breakImg}
          alt="Cinematic fashion silhouette break"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Centered Minimal Statement */}
      <div className="relative z-10 text-center px-6">
        <h2 className="font-serif text-5xl sm:text-7xl md:text-9xl font-light uppercase tracking-[0.2em] text-[#faf9f6] opacity-90 select-none">
          MADE TO <span className="italic text-[#d4c5b9]">MOVE.</span>
        </h2>
      </div>
    </section>
  );
};

export default VisualBreak;
