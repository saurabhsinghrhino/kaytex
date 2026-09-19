import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsap } from "../../hooks/useGsap";
import { useLenis } from "../../hooks/useLenis";
import gsap from "gsap";
import heroImg from "../../assets/about_main.jpg";

export const ServicesHero = () => {
  const { scrollTo } = useLenis();
  const heroRef = useRef(null);
  const textContainerRef = useRef(null);
  const imageFrameRef = useRef(null);
  const imageRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingLinesRef = useRef([]);
  const descRef = useRef(null);
  const statementRef = useRef(null);
  const ctaGroupRef = useRef(null);

  useGsap(
    () => {
      const tl = gsap.timeline({ delay: 0.2 });

      // 1. Eyebrow reveals
      tl.fromTo(
        eyebrowRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      );

      // 2. Heading reveals line-by-line
      tl.fromTo(
        headingLinesRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: "power4.out", stagger: 0.15 },
        "-=0.6",
      );

      // 3. Supporting text reveals
      tl.fromTo(
        descRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6",
      );

      // 4. Short statement reveals
      tl.fromTo(
        statementRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6",
      );

      // 5. CTA buttons reveal
      tl.fromTo(
        ctaGroupRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6",
      );

      // 6. Image mask reveal & scale down
      tl.fromTo(
        imageFrameRef.current,
        { clipPath: "inset(0% 100% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.6, ease: "power4.inOut" },
        "-=1.8",
      );

      tl.fromTo(
        imageRef.current,
        { scale: 1.12 },
        { scale: 1, duration: 2.0, ease: "power3.out" },
        "-=1.6",
      );
    },
    [],
    heroRef,
  );

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-[#0a0a0a] text-[#f5f5f5] flex items-center justify-center pt-24 pb-16 md:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Editorial Copy */}
        <div
          ref={textContainerRef}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <p
            ref={eyebrowRef}
            className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono opacity-0"
          >
            OUR SERVICES
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light uppercase leading-[1.1] tracking-tight text-white mb-8">
            <span
              ref={(el) => (headingLinesRef.current[0] = el)}
              className="block opacity-0"
            >
              End-to-End Apparel
            </span>
            <span
              ref={(el) => (headingLinesRef.current[1] = el)}
              className="block opacity-0"
            >
              Solutions for Global
            </span>
            <span
              ref={(el) => (headingLinesRef.current[2] = el)}
              className="block italic text-[#d4c5b9] opacity-0"
            >
              Clothing Brands
            </span>
          </h1>

          <p
            ref={descRef}
            className="text-sm md:text-base font-light tracking-wide text-white/70 max-w-xl mb-6 leading-relaxed opacity-0"
          >
            From the first concept to the finished garment, KAY TEX-EXPORTERS
            helps clothing brands bring their ideas to life through thoughtful
            development, reliable sourcing, and quality-focused manufacturing.
          </p>

          <p
            ref={statementRef}
            className="text-xs uppercase tracking-wider text-[#d4c5b9] font-medium mb-10 opacity-0"
          >
            One partner. One streamlined process. Complete apparel solutions.
          </p>

          <div
            ref={ctaGroupRef}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 opacity-0"
          >
            <Link
              to="/inquire"
              className="w-full sm:w-auto text-center bg-[#f5f5f5] text-black px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#d4c5b9] transition-all duration-500 hover:-translate-y-0.5 cursor-pointer"
            >
              Start a Conversation &rarr;
            </Link>
            <button
              onClick={() => scrollTo("#integrated-services")}
              className="w-full sm:w-auto border border-white/20 bg-black/40 hover:bg-[#d4c5b9] hover:text-black hover:border-white px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 hover:-translate-y-0.5 cursor-pointer"
            >
              Explore Our Services &rarr;
            </button>
          </div>
        </div>

        {/* Right Editorial Image Frame */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <div
            ref={imageFrameRef}
            className="relative w-full max-w-md lg:max-w-none aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl"
            style={{ clipPath: "inset(0% 100% 0% 0%)" }}
          >
            <img
              ref={imageRef}
              src="/service-img.jpeg"
              alt="kaytex-EXPORTERS Premium Garment Assembly and Apparels"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
