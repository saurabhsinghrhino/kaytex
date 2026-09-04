import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGsap } from '../hooks/useGsap';
import { useLenis } from '../hooks/useLenis';
import gsap from 'gsap';
import ctaBg from '../assets/about_main.jpg';

export const FinalCTA = () => {
  const navigate = useNavigate();
  const { scrollTo } = useLenis();
  const containerRef = useRef(null);
  const bgRef = useRef(null);

  useGsap(() => {
    // Parallax background scale
    gsap.fromTo(bgRef.current,
      { scale: 1.1, yPercent: -5 },
      {
        scale: 1.0,
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
      className="relative w-full h-[60vh] md:h-[80vh] bg-black overflow-hidden flex items-center justify-center text-[#faf9f6]"
    >
      {/* Background visual */}
      <div className="absolute inset-0 z-0">
        <img
          ref={bgRef}
          src={ctaBg}
          alt="Campaign landscape visual"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70" />
      </div>

      {/* Narrative overlay */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
          COLLABORATIVE CREATION
        </p>
        
        <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl font-light uppercase leading-[1.2] tracking-tight text-white mb-10">
          HAVE AN IDEA? <br />
          <span className="italic text-[#d4c5b9]">LET'S MAKE IT REAL.</span>
        </h2>

        <button
          onClick={() => navigate('/inquire')}
          className="bg-[#faf9f6] text-black px-10 py-5 text-xs uppercase tracking-[0.3em] font-medium hover:bg-[#d4c5b9] transition-all duration-500 hover:-translate-y-0.5 cursor-pointer"
        >
          Start An Inquiry &rarr;
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;
