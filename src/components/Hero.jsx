import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGsap } from "../hooks/useGsap";
import { useLenis } from "../hooks/useLenis";
import gsap from "gsap";
import heroImg from "../assets/hero.png";

export const Hero = () => {
  const navigate = useNavigate();
  const { scrollTo } = useLenis();
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const titleLine1Ref = useRef(null);
  const titleLine2Ref = useRef(null);
  const subTextRef = useRef(null);
  const ctaRef = useRef(null);

  useGsap(
    () => {
      const tl = gsap.timeline({ delay: 1.0 }); // Wait slightly for preloader exit

      // Background scale-down and fade-in
      tl.fromTo(
        bgRef.current,
        { scale: 1.15, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.2, ease: "power3.out" },
      );

      // Text animations (revealing lines via clip-path/y transform)
      tl.fromTo(
        [titleLine1Ref.current, titleLine2Ref.current],
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", stagger: 0.15 },
        "-=1.4",
      );

      // Supporting elements fade up
      tl.fromTo(
        [subTextRef.current, ctaRef.current],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: "power3.out", stagger: 0.1 },
        "-=0.8",
      );
    },
    [],
    heroRef,
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black text-[#faf9f6]"
    >
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          ref={bgRef}
          src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="kaytex-EXPORTERS Premium Fashion Editorial"
          className="h-full w-full object-cover object-center opacity-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 w-full text-center md:text-left mt-16 md:mt-24">
        <div className="max-w-4xl">
          <p className="text-[10px] md:text-xs uppercase font-bold tracking-[0.4em] text-white mb-4 font-mono">
            KAY TEX-EXPORTERS &mdash; EST. 1996
          </p>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl font-light uppercase leading-[1.05] tracking-tight text-white mb-6">
            <div className="overflow-hidden h-fit py-1">
              <span ref={titleLine1Ref} className="block">
                CRAFTED FOR THE
              </span>
            </div>
            <div className="overflow-hidden h-fit py-1">
              <span
                ref={titleLine2Ref}
                className="block italic font-light text-[#d4c5b9]"
              >
                WAY YOU MOVE.
              </span>
            </div>
          </h1>

          <p
            ref={subTextRef}
            className="text-sm md:text-lg font-light tracking-wide text-white/70 max-w-lg mb-10 leading-relaxed"
          >
            Modern apparel. Thoughtfully designed. Precisely crafted.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6"
          >
            <button
              onClick={() => scrollTo("#collection")}
              className="w-full sm:w-auto bg-[#faf9f6] text-black px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#d4c5b9] transition-all duration-500 hover:-translate-y-0.5 cursor-pointer"
            >
              Explore Collection &rarr;
            </button>
            <button
              onClick={() => navigate("/inquire")}
              className="w-full sm:w-auto border border-white/20 bg-black/40 hover:bg-[#d4c5b9] hover:text-black hover:border-white px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 hover:-translate-y-0.5 cursor-pointer"
            >
              Start an Inquiry &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Down Arrow Indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        onClick={() => scrollTo("#brand-statement")}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">
          Scroll Down
        </span>
        <div className="h-10 w-[1px] bg-gradient-to-b from-white to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
