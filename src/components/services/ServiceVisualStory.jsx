import React, { useRef } from "react";
import { useGsap } from "../../hooks/useGsap";
import gsap from "gsap";

export const ServiceVisualStory = () => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  useGsap(
    () => {
      if (!containerRef.current) return;

      // Staggered parallax and scaling reveals on scroll
      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        const img = item.querySelector("img");

        gsap.fromTo(
          item,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );

        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.1 },
            {
              scale: 1.0,
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            },
          );
        }
      });
    },
    [],
    containerRef,
  );

  const stages = [
    {
      num: "01",
      tag: "IDEA",
      title: "Initial Concept",
      desc: "Mood boards, mood outlines, and initial collection definitions.",
      img: "https://imgs.search.brave.com/eY2DzGxCqSShT22ZpzxsF1qX4CLvTSHLtJL3fL8kJw4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/NTM4NTU5Mi9waG90/by95b3UtaGF2ZS10/by1iZS1wYXRpZW50/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1LYmN0Z1ppenB0/TWJwTFE3VzN0Y25B/a3NOUW5OcGpySTZJ/Zlg4Mm9hV19BPQ",
    },
    {
      num: "02",
      tag: "DESIGN",
      title: "Tech Pack Development",
      desc: "Technical drawings, stitches specification, and initial dimensions mapping.",
      img: "https://imgs.search.brave.com/KajW7mIX15H6Tc5teCo6-GxpJ29I65ePdZBNMnIU3Zg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZWNo/aW1hZ2luZy5jby51/ay93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Ni8wMy9TdWl0LURl/c2lnbi1EcmFmdC5q/cGc",
    },
    {
      num: "03",
      tag: "MATERIAL",
      title: "Textile Sourcing",
      desc: "Weight checking, swatch selection, and trim matching cycles.",
      img: "https://images.unsplash.com/photo-1727684455609-02060483c26f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      num: "04",
      tag: "DEVELOPMENT",
      title: "Fit & Prototype Review",
      desc: "Creating pre-production samples to test construction and silhouette proportions.",
      img: "https://images.unsplash.com/photo-1699570048416-464809789279?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      num: "05",
      tag: "MANUFACTURING",
      title: "Assembly & Sewing",
      desc: "Industrial cutting accuracy and precision sewing under strict timelines.",
      img: "https://images.unsplash.com/photo-1457972657980-4c9fddebec8d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      num: "06",
      tag: "FINISHED GARMENT",
      title: "Final Audits & Packing",
      desc: "Quality inspections, pressing, custom labelling, and preparation for global export.",
      img: "https://images.unsplash.com/photo-1680034976850-129b4a07be56?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="visual-story"
      className="relative w-full bg-[#0a0a0a] text-[#f5f5f5] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-24 md:mb-32">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
            STORYBOARD
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6 leading-tight">
            From the First Sketch{" "}
            <span className="italic text-[#d4c5b9]">to the Final Stitch.</span>
          </h2>
          <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
            Every garment passes through multiple stages before it becomes part
            of a collection. Our integrated approach keeps those stages
            connected.
          </p>
        </div>

        {/* Storyboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 cursor-pointer">
          {stages.map((stage, idx) => (
            <div
              key={stage.num}
              ref={(el) => (itemsRef.current[idx] = el)}
              className="flex flex-col justify-between border-t border-[#2a2a2a] pt-8 opacity-0"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#d4c5b9]">
                    {stage.num}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-[#d4c5b9]/70 font-mono">
                    {stage.tag}
                  </span>
                </div>

                {/* Visual Image container */}
                <div className="overflow-hidden aspect-[16/10] bg-zinc-900 border border-white/5 relative mb-6">
                  <img
                    src={stage.img}
                    alt={stage.title}
                    className="w-full h-full object-cover object-center "
                  />
                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </div>

                <h3 className="font-serif text-base uppercase tracking-wider text-white mb-3">
                  {stage.title}
                </h3>
                <p className="text-xs font-light text-white/50 leading-relaxed tracking-wide">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceVisualStory;
