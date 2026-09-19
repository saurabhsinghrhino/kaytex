import { useState, useRef } from "react";
import { useGsap } from "../hooks/useGsap";
import gsap from "gsap";

export const WhyKaytex = () => {
  const containerRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const trustValues = [
    {
      title: "PRECISION",
      tagline: "Millimeter-perfect structural cuts.",
      desc: "Our CAD-driven drafting processes and laser cutting options guarantee complete dimensional consistency. Every panel of fabric is cut exactly to design specs, leaving zero room for variation.",
    },
    {
      title: "QUALITY",
      tagline: "Sourced and finished without compromise.",
      desc: "We select extra-long staple organic cottons and high-thread-count fabrics that maintain shape, resist pilling, and wash beautifully. Finished with durable double-needle and flatlock stitching.",
    },
    {
      title: "CONSISTENCY",
      tagline: "Identical standard across bulk orders.",
      desc: "Whether we produce 50 or 5,000 units, our industrial manufacturing lines operate with the same tension controls and seam tolerances, guaranteeing that garment #1 is identical to garment #5,000.",
    },
    {
      title: "FLEXIBILITY",
      tagline: "Adaptable to modern apparel needs.",
      desc: "We accommodate experimental dyeing, custom hardware attachments, packaging variables, and scale adjustments, ensuring boutique fashion houses and commercial labels are supported.",
    },
    {
      title: "RELIABILITY",
      tagline: "Clear deadlines, transparent delivery.",
      desc: "With decades of collective logistics expertise, we coordinate direct factory pipelines, offering clear lead times, constant progress reports, and robust cargo handling.",
    },
  ];

  useGsap(
    () => {
      // Fade-in animations
      gsap.fromTo(
        containerRef.current.querySelectorAll(".fade-in-item"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    [],
    containerRef,
  );

  return (
    <section
      ref={containerRef}
      id="why-kaytex"
      className="relative w-full bg-[#0A0A0A] text-[#F5F5F5] px-6 md:px-12 py-24 md:py-36 border-b border-white/5 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column: Heading and Large Value List (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="fade-in-item text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-[#D4C5B9] mb-4">
              THE kaytex-EXPORTERS STANDARD
            </p>
            <h2 className="fade-in-item font-serif text-4xl sm:text-5xl font-light uppercase tracking-tight text-white mb-16 leading-none">
              WHY CHOOSE{" "}
              <span className="italic text-[#D4C5B9]">kaytex-EXPORTERS.</span>
            </h2>

            {/* Typography List */}
            <div className="flex flex-col border-t border-white/10">
              {trustValues.map((value, idx) => (
                <div
                  key={value.title}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`fade-in-item group flex justify-between items-center py-6 md:py-8 border-b border-white/10 cursor-pointer transition-all duration-300 ${
                    activeIdx === idx
                      ? "opacity-100"
                      : "opacity-30 hover:opacity-70"
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span className="font-serif text-2xl md:text-3xl font-light tracking-wider text-white">
                      {value.title}
                    </span>
                  </div>
                  {/* Visual bullet marker */}
                  <div
                    className={`w-2 h-2 rounded-full bg-[#D4C5B9] transition-transform duration-500 ${
                      activeIdx === idx ? "scale-100" : "scale-0"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Descriptions Card Panel (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center relative min-h-[300px]">
            <div className="fade-in-item border border-white/10 bg-white/[0.02] p-10 md:p-12 flex flex-col justify-between h-fit min-h-[300px] transition-all duration-500 relative">
              {/* Dynamic Content Frame */}
              <div>
                <span className="font-mono text-xs text-white/40 block mb-6 uppercase tracking-wider">
                  Detail / Value 0{activeIdx + 1}
                </span>

                {/* Active value text with soft transition */}
                <div className="transition-all duration-500">
                  <h3 className="font-serif text-2xl uppercase tracking-wider text-white mb-3">
                    {trustValues[activeIdx].title}
                  </h3>
                  <p className="font-serif text-base text-[#D4C5B9] italic mb-6 font-light leading-snug">
                    {trustValues[activeIdx].tagline}
                  </p>
                  <p className="text-sm font-light text-white/60 leading-relaxed tracking-wide">
                    {trustValues[activeIdx].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKaytex;
