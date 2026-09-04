import React, { useRef, useState } from "react";
import { useGsap } from "../../hooks/useGsap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check } from "lucide-react";

import designImg from "../../assets/about_detail.jpg";
import sourcingImg from "../../assets/about_main.jpg";
import manufacturingImg from "../../assets/cat_jacket.jpg";

export const IntegratedServices = () => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const sectionRefs = useRef([]);
  const [activeStep, setActiveStep] = useState(0); // 0, 1, 2

  useGsap(
    () => {
      if (!containerRef.current) return;

      // Track active section and update state
      sectionRefs.current.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 40%",
          end: "bottom 40%",
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
        });

        // Stagger fade up for details inside each section
        gsap.fromTo(
          section.querySelectorAll(".anim-fade-up"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.0,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    },
    [],
    containerRef,
  );

  const services = [
    {
      num: "01",
      title: "Design & Development",
      desc: "Great apparel starts with a clear vision. Our development process helps transform creative concepts into practical, production-ready garments while keeping your brand identity at the center.",
      points: [
        "Concept development",
        "Garment specifications",
        "Technical development",
        "Sample coordination",
        "Fit and construction considerations",
        "Production-ready documentation",
      ],
      img: "https://images.unsplash.com/photo-1753162657546-fe4f94c65192?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      layout: "left",
    },
    {
      num: "02",
      title: "Fabric Sourcing & Customization",
      desc: "The right fabric can define the look, feel, performance, and identity of a garment. We help connect product requirements with suitable materials and customization options.",
      points: [
        "Fabric sourcing",
        "Material selection",
        "Fabric quality considerations",
        "Color matching",
        "Customization options",
        "Trim and accessory sourcing",
        "Material coordination",
      ],
      img: "https://images.unsplash.com/photo-1773511237767-0e324389922a?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      layout: "right",
    },
    {
      num: "03",
      title: "Clothing Manufacturing",
      desc: "Once the design and materials are ready, production brings the concept to life. Our manufacturing approach focuses on consistency, craftsmanship, quality control, and reliable execution.",
      points: [
        "Garment production",
        "Cutting & stitching",
        "Construction accuracy",
        "Finishing & pressing",
        "Quality checks",
        "Production coordination",
        "Packaging preparation",
      ],
      img: "https://images.unsplash.com/photo-1742280923779-bde44046c5d2?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      layout: "left",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="integrated-services"
      className="relative w-full bg-[#0a0a0a] text-[#f5f5f5] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-24 md:mb-32" ref={triggerRef}>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
            CAPABILITIES
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6 leading-tight">
            Our Integrated Services &mdash; Designed for Quality, Speed, and
            Brand Consistency
          </h2>
          <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
            Every stage of apparel development influences the final product. Our
            integrated approach keeps the process connected &mdash; helping
            brands move from idea to production with greater clarity and
            consistency.
          </p>
        </div>

        {/* Sticky Steps Tracker (Desktop Only) */}
        <div className="hidden lg:flex sticky top-24 z-20 bg-[#0a0a0a]/90 backdrop-blur-md border border-[#2a2a2a] p-6 mb-16 items-center justify-between">
          <div className="flex space-x-12">
            {services.map((item, idx) => (
              <div
                key={item.num}
                className={`flex items-center space-x-3 transition-colors duration-500 ${
                  activeStep === idx ? "text-[#d4c5b9]" : "text-white/40"
                }`}
              >
                <span className="font-mono text-xs">{item.num}</span>
                <span className="text-[10px] uppercase tracking-wider font-medium">
                  {item.title.split(" & ")[0]}
                </span>
              </div>
            ))}
          </div>
          {/* Progress bar container */}
          <div className="w-48 h-[2px] bg-[#2a2a2a] relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-[#d4c5b9] transition-all duration-500 ease-out"
              style={{
                width: `${((activeStep + 1) / services.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Shifting Alternating Service Blocks */}
        <div className="flex flex-col gap-24 md:gap-36">
          {services.map((service, idx) => (
            <div
              key={service.num}
              ref={(el) => (sectionRefs.current[idx] = el)}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Image Column */}
              <div
                className={`lg:col-span-6 w-full ${
                  service.layout === "right" ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="group overflow-hidden aspect-[4/3] bg-zinc-900 border border-white/5 relative">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                  <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                </div>
              </div>

              {/* Copy Column */}
              <div
                className={`lg:col-span-6 flex flex-col justify-center ${
                  service.layout === "right" ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="flex items-center space-x-3 mb-6 anim-fade-up">
                  <span className="font-mono text-xs text-[#d4c5b9]">
                    {service.num}
                  </span>
                  <div className="h-[1px] w-8 bg-[#d4c5b9]" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-light uppercase tracking-tight text-white mb-6 anim-fade-up">
                  {service.title}
                </h3>

                <p className="text-sm font-light text-white/70 leading-relaxed tracking-wide mb-8 anim-fade-up">
                  {service.desc}
                </p>

                {/* Supporting Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 anim-fade-up">
                  {service.points.map((point) => (
                    <div key={point} className="flex items-start space-x-3">
                      <span className="p-0.5 rounded-full bg-[#d4c5b9]/10 text-[#d4c5b9] mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-xs font-light text-white/60 tracking-wide">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegratedServices;
