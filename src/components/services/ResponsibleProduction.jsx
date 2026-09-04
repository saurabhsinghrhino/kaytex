import React, { useRef } from "react";
import { useGsap } from "../../hooks/useGsap";
import gsap from "gsap";

export const ResponsibleProduction = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useGsap(
    () => {
      if (!sectionRef.current) return;

      // Staggered fade in for pillars on scroll
      gsap.fromTo(
        itemsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none"
          }
        }
      );
    },
    [],
    sectionRef
  );

  const pillars = [
    {
      title: "Quality Control",
      desc: "Consistent attention to garment quality and finishing at every stage, from textile selection to final pressing and packaging."
    },
    {
      title: "Responsible Sourcing",
      desc: "Thoughtful consideration of materials, supplier practices, and environmental integrity in our fabric networks."
    },
    {
      title: "Production Discipline",
      desc: "Structured, repeatable sewing processes designed to maintain precision standards and sizing guidelines across bulk collections."
    },
    {
      title: "Global Mindset",
      desc: "An operational model structured to support the timelines, communications, and standards of international apparel markets."
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="responsible-production"
      className="relative w-full bg-[#0a0a0a] text-[#f5f5f5] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
            OUR COMMITMENT
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
            Responsible Production, <span className="italic text-[#d4c5b9]">Global Standards</span>
          </h2>
          <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
            Quality and responsibility go hand in hand. We believe apparel production should
            be approached with care &mdash; from materials and manufacturing practices to
            quality standards and long-term partnerships.
          </p>
        </div>

        {/* 4-Column Border-divided Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {pillars.map((item, idx) => (
            <div
              key={item.title}
              ref={(el) => (itemsRef.current[idx] = el)}
              className="pt-8 border-t border-[#2a2a2a] flex flex-col justify-between opacity-0"
            >
              <div>
                <h3 className="font-serif text-lg uppercase tracking-wider text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-xs font-light text-white/60 leading-relaxed tracking-wide">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResponsibleProduction;
