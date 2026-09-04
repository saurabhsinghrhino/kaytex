import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "../hooks/useGsap";

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
  {
    number: "01",
    title: "CONCEPT",
    description:
      "Understanding the brand's vision, garment requirements, references, and direction.",
  },
  {
    number: "02",
    title: "FABRIC & SOURCING",
    description:
      "Selecting suitable fabrics, materials, colors, textures, and trims according to the garment requirements.",
  },
  {
    number: "03",
    title: "DESIGN & DEVELOPMENT",
    description:
      "Turning the concept into garment specifications, patterns, construction details, and production-ready designs.",
  },
  {
    number: "04",
    title: "SAMPLING",
    description:
      "Creating samples to evaluate fit, construction, fabric, finishing, and overall appearance.",
  },
  {
    number: "05",
    title: "PRODUCTION",
    description:
      "Moving approved garments into production while maintaining consistency throughout the manufacturing process.",
  },
  {
    number: "06",
    title: "QUALITY CONTROL",
    description:
      "Checking materials, measurements, stitching, construction, finishing, and overall garment quality.",
  },
  {
    number: "07",
    title: "FINISHING & DELIVERY",
    description:
      "Final finishing, inspection, packing, and preparing the completed garments for delivery.",
  },
];

export default function BrandStatement() {
  const containerRef = useRef(null);

  useGsap(() => {
    const ctx = gsap.context(() => {
      // Header Sequence Timeline
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      headerTl
        .fromTo(
          ".process-label",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        )
        .fromTo(
          ".process-heading",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.3",
        );

      // Card Grid Stagger Timeline
      const cardElements = gsap.utils.toArray(".process-card");

      cardElements.forEach((card) => {
        const numberEl = card.querySelector(".card-number");
        const titleEl = card.querySelector(".card-title");
        const lineEl = card.querySelector(".card-line");
        const descEl = card.querySelector(".card-desc");

        const cardTl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        // Entry animation for card container
        cardTl.fromTo(
          card,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        );

        // Internal content stagger
        cardTl
          .fromTo(
            numberEl,
            { opacity: 0 },
            { opacity: 1, duration: 0.4 },
            "-=0.4",
          )
          .fromTo(
            titleEl,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
            "-=0.3",
          )
          .fromTo(
            lineEl,
            { scaleX: 0, transformOrigin: "left" },
            { scaleX: 1, duration: 0.5, ease: "power3.out" },
            "-=0.3",
          )
          .fromTo(
            descEl,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
            "-=0.3",
          );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#0D0D0D] text-[#F5F5F5] py-24 md:py-32 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="process-label inline-block text-[#d4c5b9] text-xs md:text-sm font-mono tracking-[0.25em] uppercase mb-4">
            OUR PROCESS
          </span>
          <h2 className="process-heading text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] uppercase">
            FROM IDEA <br className="hidden sm:inline" />
            TO FINISHED <br className="hidden sm:inline" />
            <span className="font-semibold text-white">GARMENT.</span>
          </h2>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROCESS_STEPS.map((step, index) => {
            const isLast = index === PROCESS_STEPS.length - 1;

            return (
              <div
                key={step.number}
                className={`process-card group relative bg-[#151515] border border-[#2A2A2A] p-8 md:p-10 lg:p-12 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#d4c5b9]/60 ${
                  isLast ? "md:col-span-2 md:max-w-xl md:mx-auto w-full" : ""
                }`}
              >
                {/* Top Row: Number */}
                <div className="flex items-center justify-between mb-8">
                  <span className="card-number text-[#d4c5b9] font-mono text-sm md:text-base tracking-widest opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="card-title text-xl md:text-2xl font-medium tracking-wide uppercase text-[#F5F5F5] group-hover:-translate-y-0.5 transition-transform duration-300">
                    {step.title}
                  </h3>

                  {/* Accent Line */}
                  <div className="card-line w-8 h-[1px] bg-[#d4c5b9]/40 group-hover:bg-[#d4c5b9] transition-colors duration-300" />

                  <p className="card-desc text-white/50 text-sm md:text-base leading-relaxed font-light pt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
