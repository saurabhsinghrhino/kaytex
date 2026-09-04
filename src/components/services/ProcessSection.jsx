import React, { useRef } from "react";
import { useGsap } from "../../hooks/useGsap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ProcessSection = () => {
  const sectionRef = useRef(null);
  const progressLineRef = useRef(null);
  const mobileProgressLineRef = useRef(null);

  // Separate refs for desktop and mobile layouts
  const desktopStepsRef = useRef([]);
  const mobileStepsRef = useRef([]);

  useGsap(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const mm = gsap.matchMedia();

      // ==========================================
      // 1. DESKTOP ANIMATIONS (>= 768px)
      // ==========================================
      mm.add("(min-width: 768px)", () => {
        const desktopSteps = desktopStepsRef.current.filter(Boolean);

        // Desktop horizontal progress line animation on scroll
        if (progressLineRef.current) {
          gsap.fromTo(
            progressLineRef.current,
            { width: "0%" },
            {
              width: "80%", // Covers middle track between first & last nodes
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top 60%",
                end: "bottom 80%",
                scrub: true,
              },
            },
          );
        }

        // Desktop process steps reveal
        if (desktopSteps.length > 0) {
          gsap.fromTo(
            desktopSteps,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.15,
              scrollTrigger: {
                trigger: section,
                start: "top 65%",
                toggleActions: "play none none none",
                once: true,
              },
            },
          );
        }
      });

      // ==========================================
      // 2. MOBILE ANIMATIONS (< 768px)
      // ==========================================
      mm.add("(max-width: 767px)", () => {
        const mobileSteps = mobileStepsRef.current.filter(Boolean);

        // Mobile vertical progress line animation on scroll
        if (mobileProgressLineRef.current) {
          gsap.fromTo(
            mobileProgressLineRef.current,
            { height: "0%" },
            {
              height: "100%",
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top 60%",
                end: "bottom 80%",
                scrub: true,
              },
            },
          );
        }

        // Mobile process steps reveal
        if (mobileSteps.length > 0) {
          gsap.fromTo(
            mobileSteps,
            { x: -20, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: section,
                start: "top 75%",
                toggleActions: "play none none none",
                once: true,
              },
            },
          );
        }
      });

      return () => {
        mm.revert();
      };
    },
    [],
    sectionRef,
  );

  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      desc: "We understand your brand, product requirements, target market, materials, and expectations.",
    },
    {
      num: "02",
      title: "DEVELOP",
      desc: "We translate your ideas into detailed product specifications and development requirements.",
    },
    {
      num: "03",
      title: "SOURCE",
      desc: "We identify suitable fabrics, materials, trims, and customization options based on the product.",
    },
    {
      num: "04",
      title: "PRODUCE",
      desc: "The approved product moves into manufacturing with attention to construction, consistency, and quality.",
    },
    {
      num: "05",
      title: "DELIVER",
      desc: "The finished garments go through final checks before being prepared for delivery.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="how-we-work"
      className="relative w-full bg-[#0a0a0a] text-[#f5f5f5] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
            PROCESS
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
            How We Work &mdash;{" "}
            <span className="italic text-[#d4c5b9]">A Transparent Process</span>
          </h2>
          <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
            A clear process makes apparel development easier. We keep every
            stage structured so you know what happens next.
          </p>
        </div>

        {/* Desktop horizontal timeline layout */}
        <div className="hidden md:block relative w-full pt-4 pb-8">
          <div className="relative w-full">
            {/* Progress lines */}
            <div className="absolute top-3 left-[10%] right-[10%] h-[1px] bg-white/10 z-0" />
            <div
              ref={progressLineRef}
              className="absolute top-3 left-[10%] h-[1px] bg-[#d4c5b9] z-10 origin-left"
              style={{ width: "0%" }}
            />

            <div className="grid grid-cols-5 gap-6 relative z-20">
              {steps.map((item, idx) => (
                <div
                  key={item.num || idx}
                  ref={(el) => {
                    desktopStepsRef.current[idx] = el;
                  }}
                  className="desktop-process-step flex flex-col items-center text-center px-2"
                >
                  {/* Node Dot */}
                  <div className="w-6 h-6 rounded-full bg-[#0a0a0a] border border-[#2a2a2a] hover:border-[#d4c5b9] flex items-center justify-center mb-6 shrink-0 relative z-20 transition-colors duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4c5b9]" />
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-col items-center w-full">
                    <span className="font-mono text-xs text-[#d4c5b9] mb-2 block">
                      {item.num}
                    </span>
                    <h3 className="font-serif text-sm uppercase tracking-wider text-white mb-3 font-normal leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs font-light text-white/50 leading-relaxed tracking-wide">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline layout */}
        <div className="block md:hidden relative pl-8 py-4">
          {/* Progress lines */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[1px] bg-white/10 z-0" />
          <div
            ref={mobileProgressLineRef}
            className="absolute left-[7px] top-0 w-[1px] bg-[#d4c5b9] z-10 origin-top"
            style={{ height: "0%" }}
          />

          <div className="flex flex-col space-y-12">
            {steps.map((item, idx) => (
              <div
                key={item.num || idx}
                ref={(el) => {
                  mobileStepsRef.current[idx] = el;
                }}
                className="mobile-process-step relative flex flex-col items-start"
              >
                {/* Node Dot */}
                <div className="absolute left-[-31px] top-1.5 w-4 h-4 rounded-full bg-[#0a0a0a] border border-[#d4c5b9] flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#d4c5b9]" />
                </div>

                <div className="flex items-center space-x-3 mb-2">
                  <span className="font-mono text-[10px] text-[#d4c5b9]">
                    {item.num}
                  </span>
                  <h3 className="font-serif text-base uppercase tracking-wider text-white font-normal">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs font-light text-white/60 leading-relaxed tracking-wide">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
