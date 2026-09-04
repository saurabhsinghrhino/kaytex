import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsap } from "../../hooks/useGsap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ClipboardList,
  FileText,
  ClipboardCheck,
} from "lucide-react";

import ctaBg from "../../assets/hero.png";

export const TechPackDevelopment = () => {
  const containerRef = useRef(null);

  // Hero Refs
  const heroRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroEyebrowRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroDescRef = useRef(null);
  const heroBtnRef = useRef(null);

  // Offer Section Refs
  const offerSectionRef = useRef(null);
  const offerImgFrameRef = useRef(null);
  const offerImgRef = useRef(null);
  const offerTextRef = useRef(null);

  // Why Section Refs
  const whySectionRef = useRef(null);
  const whyImgFrameRef = useRef(null);
  const whyImgRef = useRef(null);
  const whyTextRef = useRef(null);

  // Process Section Refs
  const processSectionRef = useRef(null);
  const progressLineRef = useRef(null);
  const mobileProgressLineRef = useRef(null);
  const desktopProcessStepsRef = useRef([]);
  const mobileProcessStepsRef = useRef([]);

  useGsap(
    () => {
      // ----------------------------------------------------
      // 1. HERO MOUNT TIMELINE ANIMATION
      // ----------------------------------------------------
      const heroTl = gsap.timeline({ delay: 0.1 });

      heroTl.fromTo(
        heroBgRef.current,
        { scale: 1.05, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.6, ease: "power3.out" },
      );

      heroTl.fromTo(
        [
          heroEyebrowRef.current,
          heroHeadingRef.current,
          heroDescRef.current,
          heroBtnRef.current,
        ],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.12 },
        "-=1.1",
      );

      // ----------------------------------------------------
      // 2. WHAT WE OFFER SPLIT REVEALS
      // ----------------------------------------------------
      if (offerSectionRef.current) {
        gsap.fromTo(
          offerImgFrameRef.current,
          { clipPath: "inset(0% 100% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: offerSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          offerImgRef.current,
          { scale: 1.05 },
          {
            scale: 1.0,
            duration: 1.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: offerSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          offerTextRef.current.querySelectorAll(".offer-anim"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: offerSectionRef.current,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 3. WHY YOU NEED A TECH PACK SPLIT REVEALS
      // ----------------------------------------------------
      if (whySectionRef.current) {
        gsap.fromTo(
          whyImgFrameRef.current,
          { clipPath: "inset(0% 0% 0% 100%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: whySectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          whyImgRef.current,
          { scale: 1.05 },
          {
            scale: 1.0,
            duration: 1.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: whySectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          whyTextRef.current.querySelectorAll(".why-anim"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: whySectionRef.current,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 4. GET STARTED PROCESS TIMELINE SCROLL DRAW
      // ----------------------------------------------------
      if (processSectionRef.current) {
        let mm = gsap.matchMedia();

        // Desktop Layout Timeline (>= 768px)
        mm.add("(min-width: 768px)", () => {
          if (progressLineRef.current) {
            gsap.fromTo(
              progressLineRef.current,
              { width: "0%" },
              {
                width: "100%",
                ease: "none",
                scrollTrigger: {
                  trigger: processSectionRef.current,
                  start: "top 60%",
                  end: "bottom 80%",
                  scrub: true,
                },
              },
            );
          }

          gsap.fromTo(
            desktopProcessStepsRef.current,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: processSectionRef.current,
                start: "top 65%",
                toggleActions: "play none none none",
              },
            },
          );
        });

        // Mobile Layout Timeline (< 768px)
        mm.add("(max-width: 767px)", () => {
          if (mobileProgressLineRef.current) {
            gsap.fromTo(
              mobileProgressLineRef.current,
              { height: "0%" },
              {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                  trigger: processSectionRef.current,
                  start: "top 60%",
                  end: "bottom 80%",
                  scrub: true,
                },
              },
            );
          }

          gsap.fromTo(
            mobileProcessStepsRef.current,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: processSectionRef.current,
                start: "top 65%",
                toggleActions: "play none none none",
              },
            },
          );
        });
      }
    },
    [],
    containerRef,
  );

  const techPackComponents = [
    {
      num: "01",
      title: "Flat Technical Sketch",
      desc: "Clear front, back, and relevant garment views that communicate the overall silhouette, construction details, and key design elements.",
    },
    {
      num: "02",
      title: "Design Detail Sheet",
      desc: "A focused breakdown of important design features, trims, stitching, closures, placements, and construction details.",
    },
    {
      num: "03",
      title: "Bill of Materials",
      desc: "A structured reference for the materials, trims, components, and other elements required to develop the garment.",
    },
    {
      num: "04",
      title: "Colorways",
      desc: "Organized color references that help communicate the intended color direction and variations for the garment.",
    },
    {
      num: "05",
      title: "Measurement Sheet",
      desc: "Defined garment measurements and points of measure that provide a clear reference for sampling and size development.",
    },
  ];

  const whyTechPacksMatter = [
    {
      num: "01",
      title: "Communication Clarity",
      desc: "A clear technical reference helps designers, pattern makers, sampling teams, and manufacturers understand the intended garment more consistently.",
    },
    {
      num: "02",
      title: "Save Money",
      desc: "Clear specifications can help identify misunderstandings earlier and reduce avoidable sampling changes, material confusion, and unnecessary revisions.",
    },
    {
      num: "03",
      title: "Save Time",
      desc: "Organized garment information gives development teams a clearer starting point and can make review and communication more efficient.",
    },
    {
      num: "04",
      title: "Improve Production Efficiency",
      desc: "Structured specifications help keep important garment information accessible throughout development and production.",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Consultation & Requirements",
      icon: ClipboardList,
      desc: "We understand your design direction, garment requirements, references, materials, measurements, and other available information.",
    },
    {
      num: "02",
      title: "Tech Pack Development",
      icon: FileText,
      desc: "We organize the relevant technical information into a structured tech pack designed around the requirements of the garment.",
    },
    {
      num: "03",
      title: "Review & Finalization",
      icon: ClipboardCheck,
      desc: "Review the documentation, clarify details, and refine the final information before it moves into the next stage of development.",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="bg-[#0a0a0a] text-[#f5f5f5] overflow-x-hidden"
    >
      {/* 1. HERO SECTION */}
      <section
        ref={heroRef}
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            ref={heroBgRef}
            src="https://cdn.massindia.in/wp-content/uploads/2026/05/ChatGPT-Image-May-30-2026-02_44_06-PM-1024x768.webp"
            alt="Fashion designer reviewing garment specifications"
            className="w-full h-full object-cover object-center opacity-0"
          />
          <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-4xl px-6 text-center mt-12">
          <p
            ref={heroEyebrowRef}
            className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d4c5b9] mb-6 font-mono opacity-0"
          >
            TECHNICAL DEVELOPMENT
          </p>
          <h1
            ref={heroHeadingRef}
            className="font-serif text-3xl sm:text-5xl md:text-7xl font-light uppercase leading-[1.1] tracking-tight text-white mb-8 opacity-0"
          >
            Need Tech Pack Development <br />
            Services for Your{" "}
            <span className="italic text-[#d4c5b9]">Designs?</span>
          </h1>
          <p
            ref={heroDescRef}
            className="text-xs md:text-sm font-light text-white/70 tracking-wide max-w-2xl mx-auto mb-10 leading-relaxed opacity-0"
          >
            Turn your creative ideas into clear, production-ready documentation
            that helps designers, manufacturers, and production teams stay
            aligned from concept to garment.
          </p>
          <div ref={heroBtnRef} className="opacity-0">
            <Link
              to="/inquire"
              className="border border-[#faf9f6]/25 bg-[#faf9f6] text-black hover:bg-[#d4c5b9] px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 hover:-translate-y-0.5 cursor-pointer"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE OFFER */}
      <section
        ref={offerSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]/30"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="max-w-3xl mb-20 md:mb-28">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d4c5b9] mb-6 font-mono offer-anim opacity-0">
              TECH PACK DEVELOPMENT
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6 offer-anim opacity-0">
              What We Offer
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed offer-anim opacity-0">
              A well-developed tech pack turns a design concept into a clear
              technical reference. We organize the key information needed to
              communicate how a garment should be developed, sampled, reviewed,
              and produced.
            </p>
          </div>

          {/* Women's Wear details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left large visual */}
            <div className="lg:col-span-6 w-full flex justify-center lg:justify-start">
              <div
                ref={offerImgFrameRef}
                className="relative w-full aspect-[4/5] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl"
                style={{ clipPath: "inset(0% 100% 0% 0%)" }}
              >
                <img
                  ref={offerImgRef}
                  src="https://usercontent.one/wp/www.apparelentrepreneurship.com/wp-content/uploads/2019/11/aw_womens_tech_packs_1.jpg?media=1772530633"
                  alt="Women's apparel technical development and specifications"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-[1s]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                {/* Subtle measurement lines decor */}
                <div className="absolute bottom-4 left-4 z-20 font-mono text-[9px] text-white/30 tracking-widest uppercase">
                  <span>SCALE REFERENCE // 1:1</span>
                </div>
              </div>
            </div>

            {/* Right components list */}
            <div
              ref={offerTextRef}
              className="lg:col-span-6 flex flex-col justify-center"
            >
              <span className="font-serif text-xs text-[#d4c5b9] block mb-2 offer-anim opacity-0">
                01 &mdash; WOMEN'S WEAR
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-light uppercase tracking-wider text-white mb-4 offer-anim opacity-0">
                Tech Packs for Women's Apparel
              </h3>
              <p className="text-xs md:text-sm font-light text-white/60 leading-relaxed tracking-wide mb-8 offer-anim opacity-0">
                Detailed technical documentation for women's apparel that helps
                translate design intent into clear specifications for
                development and manufacturing.
              </p>

              {/* Tech Pack components */}
              <div className="flex flex-col space-y-6">
                {techPackComponents.map((item) => (
                  <div
                    key={item.num}
                    className="border-t border-[#1f1f1f] pt-4 group offer-anim opacity-0"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-[10px] text-white/40 group-hover:text-[#d4c5b9] transition-colors">
                          {item.num}
                        </span>
                        <h4 className="font-serif text-xs uppercase tracking-wider text-white group-hover:text-[#d4c5b9] transition-colors font-normal">
                          {item.title}
                        </h4>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-[#d4c5b9] group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-[11px] font-light text-white/50 leading-relaxed pl-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY YOU NEED A TECH PACK? */}
      <section
        ref={whySectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]/30"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-20 md:mb-28">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6 why-anim opacity-0">
              Why You Need a Tech Pack?
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed why-anim opacity-0">
              A clear tech pack gives everyone working on a garment the same
              reference point. It helps reduce ambiguity between design ideas
              and production requirements, making communication more structured
              throughout development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left list of benefits */}
            <div
              ref={whyTextRef}
              className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1"
            >
              <span className="font-serif text-xs text-[#d4c5b9] block mb-2 why-anim opacity-0">
                WOMEN'S WEAR
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-light uppercase tracking-wider text-white mb-8 why-anim opacity-0">
                Connected Specifications
              </h3>

              {/* Subtopics */}
              <div className="flex flex-col space-y-6">
                {whyTechPacksMatter.map((item) => (
                  <div
                    key={item.num}
                    className="border-t border-[#1f1f1f] pt-4 why-anim opacity-0"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="font-mono text-[10px] text-[#d4c5b9]">
                        {item.num}
                      </span>
                      <h4 className="font-serif text-xs uppercase tracking-wider text-white font-normal">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[11px] font-light text-white/50 leading-relaxed pl-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Large image */}
            <div className="lg:col-span-6 w-full flex justify-center lg:justify-end order-1 lg:order-2">
              <div
                ref={whyImgFrameRef}
                className="relative w-full aspect-[4/5] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl"
                style={{ clipPath: "inset(0% 0% 0% 100%)" }}
              >
                <img
                  ref={whyImgRef}
                  src="https://images.unsplash.com/photo-1753162656029-781d67c7f6e6?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Garment sample review with technical specifications"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-[1s]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                {/* Subtle measurement lines decor */}
                <div className="absolute top-4 right-4 z-20 font-mono text-[9px] text-white/30 tracking-widest uppercase">
                  <span>DIMENSIONS SPEC // INT_REF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW CAN YOU GET STARTED */}
      <section
        ref={processSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]/30"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-20 md:mb-28">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
              PROCESS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              How Can You Get Started <br />
              <span className="italic text-[#d4c5b9]">with Techpacks?</span>
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
              Start with your design vision and the information you already
              have. We help organize the requirements, develop the technical
              documentation, and refine the details into a clearer reference for
              apparel development.
            </p>
          </div>

          {/* Desktop timeline layout */}
          <div className="hidden md:block relative w-full pt-12 pb-8">
            <div className="absolute top-12 left-[16%] right-[16%] h-[1px] bg-white/10 z-0" />
            <div
              ref={progressLineRef}
              className="absolute top-12 left-[16%] h-[1px] bg-[#d4c5b9] z-10 origin-left"
              style={{ width: "0%" }}
            />

            <div className="grid grid-cols-3 gap-8 relative z-20">
              {processSteps.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.num}
                    ref={(el) => (desktopProcessStepsRef.current[idx] = el)}
                    className="desktop-process-step flex flex-col items-center text-center px-4 opacity-0"
                  >
                    <div className="w-12 h-12 border border-[#d4c5b9]/30 bg-black flex items-center justify-center mb-8">
                      <IconComponent className="w-5 h-5 text-[#d4c5b9]" />
                    </div>
                    <span className="font-mono text-xs text-[#d4c5b9] mb-3">
                      {item.num}
                    </span>
                    <h3 className="font-serif text-xs uppercase tracking-wider text-white mb-3 font-normal">
                      {item.title}
                    </h3>
                    <p className="text-[11px] font-light text-white/50 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile timeline layout */}
          <div className="block md:hidden relative pl-12 py-4">
            <div className="absolute left-[23px] top-0 bottom-0 w-[1px] bg-white/10 z-0" />
            <div
              ref={mobileProgressLineRef}
              className="absolute left-[23px] top-0 w-[1px] bg-[#d4c5b9] z-10 origin-top"
              style={{ height: "0%" }}
            />

            <div className="flex flex-col space-y-12">
              {processSteps.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.num}
                    ref={(el) => (mobileProcessStepsRef.current[idx] = el)}
                    className="mobile-process-step relative flex flex-col items-start"
                  >
                    <div className="absolute left-[-47px] top-0.5 w-12 h-12 border border-[#d4c5b9]/30 bg-black flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-[#d4c5b9]" />
                    </div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="font-mono text-[10px] text-[#d4c5b9]">
                        {item.num}
                      </span>
                      <h3 className="font-serif text-base uppercase tracking-wider text-white font-normal">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs font-light text-white/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="relative w-full bg-[#111111] border-t border-[#2a2a2a] py-24 md:py-36 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src={ctaBg}
            alt="Technical fashion drawings and specification sheets"
            className="w-full h-full object-cover object-center scale-105"
            loading="lazy"
          />
        </div>

        <div className="relative z-10 max-w-3xl px-6 mx-auto">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d4c5b9] mb-6 font-mono">
            COLLABORATE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-8 leading-tight">
            Turn Your Design Into <br />
            <span className="italic text-[#d4c5b9]">
              a Clear Production Reference.
            </span>
          </h2>
          <p className="text-xs md:text-sm font-light text-white/50 tracking-wide max-w-md mx-auto mb-12 leading-relaxed">
            Have a design in mind? Let's organize the details and create the
            technical foundation your apparel development process needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/inquire"
              className="w-full sm:w-auto bg-[#faf9f6] text-black px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#d4c5b9] transition-all duration-500 hover:-translate-y-0.5 cursor-pointer text-center"
            >
              Work With Us
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto border border-white/20 bg-black/40 hover:bg-[#d4c5b9] hover:text-black hover:border-white px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 hover:-translate-y-0.5 cursor-pointer text-center"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechPackDevelopment;
