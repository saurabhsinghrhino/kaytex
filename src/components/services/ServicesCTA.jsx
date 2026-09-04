import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsap } from "../../hooks/useGsap";
import gsap from "gsap";
import ctaBg from "../../assets/about_main.jpg";

export const ServicesCTA = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useGsap(
    () => {
      // Parallax scroll effect for background visual
      gsap.fromTo(
        bgRef.current,
        { scale: 1.12, yPercent: -8 },
        {
          scale: 1.0,
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      // Fade up content on scroll
      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none none"
          }
        }
      );
    },
    [],
    containerRef
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[60vh] md:h-[80vh] bg-black overflow-hidden flex items-center justify-center text-[#faf9f6] border-t border-[#2a2a2a]"
    >
      {/* Background visual with overlays */}
      <div className="absolute inset-0 z-0">
        <img
          ref={bgRef}
          src={ctaBg}
          alt="Garment Sourcing Campaign visual"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/80" />
      </div>

      {/* Narrative overlay content */}
      <div ref={contentRef} className="relative z-10 text-center max-w-3xl px-6">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
          START YOUR PROJECT
        </p>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light uppercase leading-[1.2] tracking-tight text-white mb-10">
          Ready to Bring Your Next <br />
          <span className="italic text-[#d4c5b9]">Collection to Life?</span>
        </h2>

        <p className="text-xs md:text-sm font-light text-white/60 tracking-wide max-w-lg mx-auto mb-10 leading-relaxed">
          Whether you're developing a new clothing line, sourcing materials, or
          looking for a dependable manufacturing partner, let's start the conversation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            to="/inquire"
            className="w-full sm:w-auto bg-[#faf9f6] text-black px-8 py-4 text-xs uppercase tracking-[0.3em] font-medium hover:bg-[#d4c5b9] transition-all duration-500 hover:-translate-y-0.5 cursor-pointer text-center"
          >
            Start Your Project
          </Link>
          <Link
            to="/inquire"
            className="w-full sm:w-auto border border-white/20 bg-black/40 hover:bg-[#d4c5b9] hover:text-black hover:border-white px-8 py-4 text-xs uppercase tracking-[0.3em] font-medium transition-all duration-500 hover:-translate-y-0.5 cursor-pointer text-center"
          >
            Send an Enquiry
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
