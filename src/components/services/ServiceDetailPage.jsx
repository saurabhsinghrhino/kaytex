import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { useGsap } from "../../hooks/useGsap";
import gsap from "gsap";

export const ServiceDetailPage = ({
  title,
  eyebrow = "APPAREL SERVICES",
  desc,
  overview,
  capabilities = [],
  whyMattersTitle,
  whyMattersDesc,
  steps = [],
  image,
}) => {
  const containerRef = useRef(null);
  const imageFrameRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useGsap(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({ delay: 0.2 });

      // Fade up text items
      tl.fromTo(
        textRef.current.querySelectorAll(".anim-item"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.15 }
      );

      // Image reveal animation
      tl.fromTo(
        imageFrameRef.current,
        { clipPath: "inset(0% 100% 0% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "power4.inOut" },
        "-=1.0"
      );

      tl.fromTo(
        imageRef.current,
        { scale: 1.12 },
        { scale: 1.0, duration: 1.6, ease: "power3.out" },
        "-=1.2"
      );
    },
    [],
    containerRef
  );

  return (
    <div ref={containerRef} className="bg-[#0a0a0a] text-[#f5f5f5] min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[#2a2a2a]">
        <div className="mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div ref={textRef} className="lg:col-span-7 flex flex-col">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d4c5b9] mb-4 font-mono anim-item">
              {eyebrow}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-white mb-6 leading-tight anim-item">
              {title}
            </h1>
            <p className="text-sm md:text-base font-light text-white/70 tracking-wide leading-relaxed max-w-xl mb-10 anim-item">
              {desc}
            </p>
            <div className="anim-item">
              <Link
                to="/inquire"
                className="inline-flex items-center space-x-2 bg-[#f5f5f5] text-black px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#d4c5b9] transition-all duration-500 hover:-translate-y-0.5"
              >
                <span>Start an Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div
              ref={imageFrameRef}
              className="relative w-full max-w-md lg:max-w-none aspect-[4/5] overflow-hidden bg-zinc-900 border border-white/5"
              style={{ clipPath: "inset(0% 100% 0% 0%)" }}
            >
              <img
                ref={imageRef}
                src={image}
                alt={title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview & What We Provide */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-b border-[#2a2a2a]">
        {/* Left: Overview text */}
        <div className="lg:col-span-7 flex flex-col justify-start">
          <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono mb-4">
            OVERVIEW
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-light uppercase tracking-tight text-white mb-6">
            Connecting Vision with Product
          </h2>
          <p className="text-sm font-light text-white/70 leading-relaxed tracking-wide mb-6">
            {overview}
          </p>
        </div>

        {/* Right: Capabilities Checklist */}
        <div className="lg:col-span-5 flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono mb-6">
            WHAT WE PROVIDE
          </span>
          <div className="flex flex-col space-y-4">
            {capabilities.map((cap) => (
              <div key={cap} className="flex items-center space-x-3 py-1 border-b border-[#1f1f1f]">
                <span className="p-0.5 rounded-full bg-[#d4c5b9]/10 text-[#d4c5b9]">
                  <Check className="w-4 h-4" />
                </span>
                <span className="text-xs md:text-sm font-light text-white/80 tracking-wide">
                  {cap}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why It Matters Value Section */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-b border-[#2a2a2a]">
        <div className="lg:col-span-4">
          <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono mb-4 block">
            THE VALUE
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-light uppercase tracking-tight text-white">
            {whyMattersTitle}
          </h3>
        </div>
        <div className="lg:col-span-8 flex items-center">
          <p className="text-sm md:text-base font-light text-white/75 leading-relaxed tracking-wide">
            {whyMattersDesc}
          </p>
        </div>
      </section>

      {/* 4. Process Roadmap Steps */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 py-20 md:py-28 border-b border-[#2a2a2a]">
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono mb-4 block">
            HOW WE DO IT
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-light uppercase tracking-tight text-white">
            Operational Workflow Roadmap
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, idx) => (
            <div key={item.title} className="p-8 border border-[#2a2a2a] bg-[#151515]/20 flex flex-col justify-between">
              <div>
                <span className="font-serif text-2xl text-[#d4c5b9] block mb-4">
                  0{idx + 1}
                </span>
                <h4 className="font-serif text-base uppercase tracking-wider text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-xs font-light text-white/50 leading-relaxed tracking-wide">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Direct Project CTA Block */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 py-24 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xs md:text-sm font-light text-white/60 tracking-wide max-w-md mx-auto mb-10 leading-relaxed">
          Submit your product specifications, sketches, or material details, and our apparel team will get in touch with you.
        </p>
        <Link
          to="/inquire"
          className="inline-flex items-center space-x-2 bg-[#f5f5f5] text-black px-10 py-5 text-xs uppercase tracking-[0.3em] font-medium hover:bg-[#d4c5b9] transition-all duration-500 hover:-translate-y-0.5"
        >
          <span>Get in Touch &rarr;</span>
        </Link>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
