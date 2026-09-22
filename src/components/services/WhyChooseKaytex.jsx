import React, { useRef } from "react";
import { useGsap } from "../../hooks/useGsap";
import gsap from "gsap";

// import endToEndImg from "../../assets/about_detail.jpg";
// import qualityImg from "../../assets/cat_jacket.jpg";
// import communicationImg from "../../assets/about_main.jpg";
// import growthImg from "../../assets/hero.png";

export const WhyChooseKAYTEX = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGsap(
    () => {
      if (!sectionRef.current) return;

      // Staggered scroll-triggered fade up for trust cards
      gsap.fromTo(
        cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    [],
    sectionRef,
  );

  const pillars = [
    {
      num: "01",
      title: "Everything You Need, Under One Roof",
      desc: "From design development and material sourcing to manufacturing, KAY TEX EXPORTERS brings essential apparel capabilities together in one streamlined process.",
      tag: "END-TO-END SUPPORT",
      img: "https://images.unsplash.com/photo-1618218168350-6e7c81151b64?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      num: "02",
      title: "Quality at Every Stage",
      desc: "We pay attention to fabrics, construction, measurements, finishing, and the small details that define the final garment.",
      tag: "QUALITY-FOCUSED",
      img: "https://imgs.search.brave.com/lz07rOPeV-fqILqNAElfAAxxRXsNzbpjf9Zp_GgId78/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lc3l5/N3F1bzJnZS5leGFj/dGRuLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wOS9Z/b3VuZy13b21hbi1j/aG9vc2luZy1jbG90/aGVzLW9uLWEtcmFj/ay1pbi1hLXNob3dy/b29tLmpwZz9xdWFs/aXR5PTky",
    },
    {
      num: "03",
      title: "A Partner You Can Rely On",
      desc: "We believe apparel projects work better when requirements, timelines, specifications, and expectations are clearly understood from the beginning.",
      tag: "CLEAR COMMUNICATION",
      img: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      num: "04",
      title: "Supporting Brands as They Grow",
      desc: "Whether you're developing your first collection or expanding an established clothing line, our approach is designed to adapt to evolving requirements.",
      tag: "BUILT FOR GROWTH",
      img: "https://imgs.search.brave.com/MHlm60njVvyQwMedez_HIpmNnmGkZf0jUuDvERNu1GA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/MTAyNDE2OS9waG90/by9idXNpbmVzcy1j/aGFydC1hbmQtcmVm/bGVjdGlvbi1idWls/ZGluZ3MuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWxUVWw2/ODVFY3dLcFdKMzVR/NWhmeFd4T3AyQTht/MDJPenp1RF9VcFZi/QUk9",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="why-choose"
      className="relative w-full bg-[#0a0a0a] text-[#f5f5f5] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 md:mb-28">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
            PARTNERSHIP VALUES
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
            Why Choose{" "}
            <span className="italic text-[#d4c5b9]">kay tex EXPORTERS</span>
          </h2>
          <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
            Building great apparel requires more than manufacturing. It requires
            clear communication, attention to detail, dependable execution, and
            a partner who understands the journey from concept to finished
            product.
          </p>
        </div>

        {/* 2x2 Grid of Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 cursor-pointer">
          {pillars.map((item, idx) => (
            <div
              key={item.num}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="group flex flex-col sm:flex-row gap-6 p-8 border border-[#2a2a2a] bg-[#151515]/30 hover:border-[#d4c5b9]/30 transition-colors duration-500"
            >
              {/* Text Info */}
              <div className="flex-1 flex flex-col justify-between ">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl md:text-4xl text-[#d4c5b9] font-light">
                      {item.num}
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-[#d4c5b9]/60 font-mono">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-light text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs font-light text-white/60 leading-relaxed tracking-wide">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Aspect Square Image Block */}
              <div className="w-full sm:w-28 md:w-32 aspect-square overflow-hidden bg-zinc-900 border border-white/5 shrink-0 relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseKAYTEX;
