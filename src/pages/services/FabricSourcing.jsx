import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsap } from "../../hooks/useGsap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronRight, Check } from "lucide-react";

export const FabricSourcing = () => {
  const containerRef = useRef(null);

  // Hero Refs
  const heroRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroEyebrowRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroDescRef = useRef(null);
  const heroBtnRef = useRef(null);

  // Expert Section Refs
  const expertSectionRef = useRef(null);
  const expertImgFrameRef = useRef(null);
  const expertImgRef = useRef(null);
  const expertTextRef = useRef(null);

  // Sustainability Refs
  const sustainSectionRef = useRef(null);
  const sustainImgFrameRef = useRef(null);
  const sustainImgRef = useRef(null);
  const sustainTextRef = useRef(null);

  // Fiber Cards Grid Refs
  const fibersSectionRef = useRef(null);
  const fiberCardsRef = useRef([]);

  // Structure Section Refs
  const structureSectionRef = useRef(null);
  const weaveBlockRef = useRef(null);
  const knitBlockRef = useRef(null);

  // Customization Section Refs
  const customSectionRef = useRef(null);
  const customCardsRef = useRef([]);
  const customSequenceRef = useRef(null);

  // Why kaytex Refs
  const whySectionRef = useRef(null);
  const whyGridRef = useRef(null);

  // Process timeline Refs
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
      // 2. EXPERT SOURCING CLIP REVEAL
      // ----------------------------------------------------
      if (expertSectionRef.current) {
        gsap.fromTo(
          expertImgFrameRef.current,
          { clipPath: "inset(0% 100% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: expertSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          expertImgRef.current,
          { scale: 1.1 },
          {
            scale: 1.0,
            duration: 1.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: expertSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          expertTextRef.current.querySelectorAll(".expert-anim"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: expertSectionRef.current,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 3. SUSTAINABILITY REVEAL
      // ----------------------------------------------------
      if (sustainSectionRef.current) {
        gsap.fromTo(
          sustainImgFrameRef.current,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: sustainSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          sustainImgRef.current,
          { scale: 1.1 },
          {
            scale: 1.0,
            duration: 1.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sustainSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          sustainTextRef.current.querySelectorAll(".sustain-anim"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: sustainSectionRef.current,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 4. FIBER CARDS STAGGERED REVEAL
      // ----------------------------------------------------
      if (fibersSectionRef.current) {
        gsap.fromTo(
          fiberCardsRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: fibersSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 5. WEAVING & KNITTING LAYOUT REVEALS
      // ----------------------------------------------------
      if (structureSectionRef.current) {
        gsap.fromTo(
          [weaveBlockRef.current, knitBlockRef.current],
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: structureSectionRef.current,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 6. CUSTOMIZATION REVEALS & SEQUENCE
      // ----------------------------------------------------
      if (customSectionRef.current) {
        gsap.fromTo(
          customCardsRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: customSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        if (customSequenceRef.current) {
          gsap.fromTo(
            customSequenceRef.current.children,
            { scale: 0.95, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
              stagger: 0.15,
              scrollTrigger: {
                trigger: customSequenceRef.current,
                start: "top 75%",
                toggleActions: "play none none none",
              },
            },
          );
        }
      }

      // ----------------------------------------------------
      // 7. WHY CHOOSE kaytex SOURCING ANIMATION
      // ----------------------------------------------------
      if (whySectionRef.current) {
        gsap.fromTo(
          whyGridRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: whySectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 8. SOURCING PROCESS TIMELINE SCROLL DRAW
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

  const fiberCollection = [
    {
      num: "01",
      name: "Cotton",
      desc: "Versatile, breathable, and suitable for a wide range of apparel applications.",
      img: "https://images.unsplash.com/photo-1633175118641-6001540f5dc7?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      num: "02",
      name: "Linen",
      desc: "Known for its natural texture, breathability, and relaxed character.",
      img: "https://images.unsplash.com/photo-1754611341458-5bb2b30f7097?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      num: "03",
      name: "Viscose",
      desc: "Soft and fluid, making it suitable for lightweight and draped garments.",
      img: "https://images.unsplash.com/photo-1584093091778-e7f4e76e8063?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      num: "04",
      name: "Modal",
      desc: "Smooth and comfortable with a soft hand feel suited to selected apparel applications.",
      img: "https://imgs.search.brave.com/uenU1NfsbaFpTHZFAisW4akhvRXiz258N2Bv9Eihgs4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlc3BydWNlLmNv/bS90aG1iLzRzOFpW/QWhzMk1XN3BxNF9U/Y25fejR6b2pUST0v/MTUwMHgwL2ZpbHRl/cnM6bm9fdXBzY2Fs/ZSgpOm1heF9ieXRl/cygxNTAwMDApOnN0/cmlwX2ljYygpL2hv/dy10by13YXNoLW1v/ZGFsLWNsb3RoZXMt/MjE0NTc5NC0wNS1h/MzJmOWUyMDJhYWY0/MzVlYTJkZDM2YThl/OGNlNGIxOS5qcGc",
    },
    {
      num: "05",
      name: "Lyocell",
      desc: "A soft cellulosic fiber often selected for its fluid feel and contemporary apparel applications.",
      img: "https://imgs.search.brave.com/UkLQ5Lt59Fcf2-Pbds237wGMUodF9sMB5qOv_FTSDPA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mYWJy/aWNmYWN0b3J5Lmlu/L2Nkbi9zaG9wL3By/b2R1Y3RzL2x5b2Nl/bGwtdmVyZGUtbWFu/emFuYV8xXzE0MDB4/LmpwZz92PTE2NjEw/MDA1ODU",
    },
    {
      num: "06",
      name: "Cotton Blends",
      desc: "Blended constructions that combine different fiber characteristics for specific performance and aesthetic requirements.",
      img: "https://images.unsplash.com/photo-1622532470022-24107cac5ef3?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const customizationCapabilities = [
    {
      num: "01",
      title: "Color Development",
      desc: "Explore colors and shades aligned with the collection and brand direction.",
    },
    {
      num: "02",
      title: "Weight & Hand Feel",
      desc: "Evaluate fabric weight and tactile qualities according to garment requirements.",
    },
    {
      num: "03",
      title: "Texture & Surface",
      desc: "Develop or explore surface characteristics that give fabrics a distinctive visual and tactile identity.",
    },
    {
      num: "04",
      title: "Finishing",
      desc: "Explore finishing options that influence the appearance, handle, or performance of a fabric.",
    },
    {
      num: "05",
      title: "Custom Development",
      desc: "Work through project-specific material requirements when standard options need further refinement.",
    },
  ];

  const whyChooseSourcing = [
    {
      num: "01",
      title: "Design-Led Sourcing",
      desc: "We consider how the fabric supports the intended garment design, silhouette, and overall collection direction.",
    },
    {
      num: "02",
      title: "Woven + Knit Expertise",
      desc: "Explore fabric options across both woven and knit constructions depending on the requirements of the product.",
    },
    {
      num: "03",
      title: "Material Flexibility",
      desc: "From natural fibers to blended constructions, explore materials suited to different apparel applications.",
    },
    {
      num: "04",
      title: "Development Support",
      desc: "When standard fabrics need refinement, we can explore customization and development requirements.",
    },
    {
      num: "05",
      title: "Connected Apparel Solutions",
      desc: "Fabric sourcing can connect directly with design and manufacturing, helping keep material decisions aligned with the wider product journey.",
    },
  ];

  const sourcingProcessSteps = [
    {
      num: "01",
      title: "UNDERSTAND",
      desc: "We start by understanding your garment concept, target market, aesthetic direction, performance requirements, and material preferences.",
    },
    {
      num: "02",
      title: "SOURCE",
      desc: "We identify suitable fabric options based on the requirements of the product.",
    },
    {
      num: "03",
      title: "SHORTLIST",
      desc: "We narrow the options based on characteristics such as composition, construction, weight, texture, color, and intended use.",
    },
    {
      num: "04",
      title: "EVALUATE",
      desc: "Fabric options are reviewed against the product requirements, including look, feel, construction, and applicable documentation.",
    },
    {
      num: "05",
      title: "CUSTOMIZE",
      desc: "Where required, we explore customization or development to bring the material closer to the intended product direction.",
    },
    {
      num: "06",
      title: "READY FOR DEVELOPMENT",
      desc: "Once a suitable material direction is established, it can move into the next stages of apparel development.",
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
            src="https://images.unsplash.com/photo-1718049942873-58bd663206dc?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="kaytex-EXPORTERS Fabric Sourcing Studio"
            className="w-full h-full object-cover object-center opacity-0"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-4xl px-6 text-center mt-12">
          <p
            ref={heroEyebrowRef}
            className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d4c5b9] mb-6 font-mono opacity-0"
          >
            FABRIC SOURCING SERVICES
          </p>
          <h1
            ref={heroHeadingRef}
            className="font-serif text-3xl sm:text-5xl md:text-7xl font-light uppercase leading-[1.1] tracking-tight text-white mb-8 opacity-0"
          >
            Fabric Sourcing Services <br />
            for Global{" "}
            <span className="italic text-[#d4c5b9]">Clothing Brands</span>
          </h1>
          <p
            ref={heroDescRef}
            className="text-xs md:text-sm font-light text-white/70 tracking-wide max-w-2xl mx-auto mb-10 leading-relaxed opacity-0"
          >
            From everyday essentials to distinctive collection pieces, KAY TEX
            -EXPORTERS helps clothing brands source thoughtfully selected
            fabrics that align with their design, quality, performance, and
            production requirements.
          </p>
          <div ref={heroBtnRef} className="opacity-0">
            <Link
              to="/inquire"
              className="border border-[#faf9f6]/25 bg-[#faf9f6] text-black hover:bg-[#d4c5b9] px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 hover:-translate-y-0.5 cursor-pointer"
            >
              Connect Today
            </Link>
          </div>
        </div>
      </section>

      {/* 2. EXPERT SOURCING IN INDIA */}
      <section
        ref={expertSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]"
      >
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left image frame */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-start">
            <div
              ref={expertImgFrameRef}
              className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl"
              style={{ clipPath: "inset(0% 100% 0% 0%)" }}
            >
              <img
                ref={expertImgRef}
                src="https://images.unsplash.com/photo-1619043518800-7f14be467dca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Tactile Fabric Sourcing in India"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />
            </div>
          </div>

          {/* Right narrative */}
          <div
            ref={expertTextRef}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-[9px] uppercase tracking-widest text-[#d4c5b9] font-mono mb-4 expert-anim opacity-0">
              FABRIC SOURCING
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light uppercase tracking-tight text-white mb-6 leading-tight expert-anim opacity-0">
              Expert Fabric Sourcing in India <br />
              for Woven and Knit{" "}
              <span className="italic text-[#d4c5b9]">Collections</span>
            </h2>
            <p className="text-xs md:text-sm font-light text-white/70 leading-relaxed tracking-wide mb-6 expert-anim opacity-0">
              India's textile ecosystem offers a wide range of fibers,
              constructions, finishes, and manufacturing capabilities. KAY TEX
              -EXPORTERS helps brands navigate this landscape to identify
              fabrics that align with the intended look, feel, performance, and
              production requirements of each collection.
            </p>
            <p className="text-xs md:text-sm font-light text-white/70 leading-relaxed tracking-wide mb-8 expert-anim opacity-0">
              Whether you're developing lightweight woven garments, structured
              outerwear, comfortable knitwear, or everyday essentials, our
              sourcing approach focuses on finding suitable materials while
              keeping design and production requirements connected.
            </p>
            {/* Visual presentation labels */}
            <div className="flex flex-wrap gap-3 expert-anim opacity-0">
              {["WOVEN", "KNIT", "NATURAL", "BLENDED"].map((lbl) => (
                <span
                  key={lbl}
                  className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] tracking-widest font-mono text-[#d4c5b9] uppercase"
                >
                  {lbl}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUSTAINABLE & CERTIFIED FABRICS */}
      <section
        ref={sustainSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]"
      >
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div
            ref={sustainTextRef}
            className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1"
          >
            <span className="text-[9px] uppercase tracking-widest text-[#d4c5b9] font-mono mb-4 sustain-anim opacity-0">
              RESPONSIBLE MATERIAL CHOICES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light uppercase tracking-tight text-white mb-6 leading-tight sustain-anim opacity-0">
              Sustainable & Certified Fabrics <br />
              for{" "}
              <span className="italic text-[#d4c5b9]">Conscious Brands</span>
            </h2>
            <p className="text-xs md:text-sm font-light text-white/70 leading-relaxed tracking-wide mb-6 sustain-anim opacity-0">
              For brands seeking more responsible material choices, we help
              explore fabrics with sustainability considerations and, where
              required, relevant certifications or standards. Certified options
              are available where applicable and are subject to supplier
              documentation and product requirements.
            </p>
            <p className="text-xs md:text-sm font-light text-white/70 leading-relaxed tracking-wide sustain-anim opacity-0">
              Material selection can influence the environmental profile, feel,
              durability, and positioning of a collection. We help brands
              consider these factors when evaluating fabric options.
            </p>
          </div>

          {/* Right image frame */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end order-1 lg:order-2">
            <div
              ref={sustainImgFrameRef}
              className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl"
              style={{ clipPath: "inset(100% 0% 0% 0%)" }}
            >
              <img
                ref={sustainImgRef}
                src="https://images.unsplash.com/photo-1529087795572-98e214aeeb79?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sustainable Organic Textile choices"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. NATURAL & BLENDED FIBERS */}
      <section
        ref={fibersSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-20 md:mb-28">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
              FIBER LIBRARY
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              Natural & Blended{" "}
              <span className="italic text-[#d4c5b9]">Fibers We Source</span>
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
              Explore fabric collections spanning natural fibers, fluid
              cellulosics, and tailored blended constructions.
            </p>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {fiberCollection.map((fiber, idx) => (
              <div
                key={fiber.num}
                ref={(el) => (fiberCardsRef.current[idx] = el)}
                className="group flex flex-col border border-[#2a2a2a] bg-[#151515]/20 hover:border-[#d4c5b9]/30 transition-colors duration-500 overflow-hidden opacity-0"
              >
                <div className="overflow-hidden aspect-[16/10] bg-zinc-900 border-b border-[#2a2a2a] relative">
                  <img
                    src={fiber.img}
                    alt={fiber.name}
                    className="w-full h-full object-cover object-center  group-hover:scale-105 transition-all duration-[1s] ease-out opacity-85"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs text-[#d4c5b9] block mb-2">
                      {fiber.num}
                    </span>
                    <h3 className="font-serif text-base uppercase tracking-wider text-white group-hover:text-[#d4c5b9] transition-colors duration-300 mb-3 font-normal">
                      {fiber.name}
                    </h3>
                    <p className="text-xs font-light text-white/50 leading-relaxed tracking-wide">
                      {fiber.desc}
                    </p>
                  </div>
                  <div className="flex justify-end pt-6">
                    <span className="text-white/40 group-hover:text-[#d4c5b9] group-hover:translate-x-1.5 transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SPECIALIZED WEAVING & KNITTING */}
      <section
        ref={structureSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-20 md:mb-28">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
              CONSTRUCTIONS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              Specialized Weaving &{" "}
              <span className="italic text-[#d4c5b9]">Knitting Structures</span>
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
              Fabric construction plays an important role in how a garment
              looks, feels, moves, and performs. We help brands explore suitable
              structures based on the specific requirements of each project.
            </p>
          </div>

          <div className="flex flex-col space-y-24">
            {/* Woven Block */}
            <div
              ref={weaveBlockRef}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center opacity-0"
            >
              <div className="lg:col-span-6">
                <span className="text-[9px] uppercase tracking-widest text-[#d4c5b9] font-mono mb-4 block">
                  WOVEN FABRICS
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-light uppercase tracking-wider text-white mb-6">
                  Structured & Durable Constructions
                </h3>
                <p className="text-xs md:text-sm font-light text-white/60 leading-relaxed tracking-wide mb-8">
                  Different woven constructions can create differences in
                  texture, structure, drape, durability, and visual character.
                  Based on product requirements, we explore:
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs font-mono uppercase tracking-wider text-[#d4c5b9]/80">
                  {[
                    "Plain Weave",
                    "Twill",
                    "Poplin",
                    "Satin",
                    "Jacquard",
                    "Dobby",
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d4c5b9]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900 border border-white/5">
                  <img
                    src="https://images.unsplash.com/photo-1617694820985-a5476fe22722?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3BlY2lhbGl6ZWQlMjBXZWF2aW5nJTIwJTI2JTIwS25pdHRpbmclMjBTdHJ1Y3R1cmVzfGVufDB8MHwwfHx8Mg%3D%3D"
                    alt="Woven fabric construction details"
                    className="w-full h-full object-cover object-center  transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Knit Block */}
            <div
              ref={knitBlockRef}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center opacity-0"
            >
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900 border border-white/5">
                  <img
                    src="https://images.unsplash.com/photo-1595026525047-dfa997df8a4a?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Knit fabric loop details"
                    className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </div>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2">
                <span className="text-[9px] uppercase tracking-widest text-[#d4c5b9] font-mono mb-4 block">
                  KNIT FABRICS
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-light uppercase tracking-wider text-white mb-6">
                  Comfort-Focused Loop structures
                </h3>
                <p className="text-xs md:text-sm font-light text-white/60 leading-relaxed tracking-wide mb-8">
                  Knit textiles are evaluated for stretch, hand feel, recovery,
                  and warmth profiles. Sourced options explored during
                  development stages include:
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs font-mono uppercase tracking-wider text-[#d4c5b9]/80">
                  {[
                    "Single Jersey",
                    "Rib",
                    "Interlock",
                    "Piqué",
                    "French Terry",
                    "Fleece",
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d4c5b9]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FABRIC CUSTOMIZATION & DEVELOPMENT */}
      <section
        ref={customSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-20 md:mb-28">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
              DEVELOPMENT
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              Fabric Customization &{" "}
              <span className="italic text-[#d4c5b9]">Development</span>
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
              Sometimes the right fabric doesn't exist off the shelf. When a
              collection requires something more specific, fabric customization
              can help bring the material closer to the intended look, feel, or
              performance.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
            {customizationCapabilities.map((cap, idx) => (
              <div
                key={cap.num}
                ref={(el) => (customCardsRef.current[idx] = el)}
                className="p-6 border border-[#2a2a2a] bg-[#151515]/20 flex flex-col justify-between opacity-0"
              >
                <div>
                  <span className="font-mono text-[10px] text-[#d4c5b9] block mb-3">
                    {cap.num}
                  </span>
                  <h4 className="font-serif text-xs uppercase tracking-wider text-white mb-3">
                    {cap.title}
                  </h4>
                  <p className="text-[10px] font-light text-white/50 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Material Transformation Sequence */}
          <div className="border-t border-[#2a2a2a] pt-12">
            <span className="text-[9px] uppercase tracking-widest text-[#d4c5b9] font-mono mb-8 block text-center">
              MATERIAL DEVELOPMENT STAGES
            </span>
            <div
              ref={customSequenceRef}
              className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto text-xs uppercase font-mono tracking-widest text-white/40"
            >
              <div className="px-4 py-2 border border-white/5 bg-white/5 text-white">
                BASE FABRIC
              </div>
              <div className="text-[#d4c5b9]">&darr; md:&rarr;</div>
              <div className="px-4 py-2 border border-white/5 bg-white/5 text-white">
                COLOR DEVELOPMENT
              </div>
              <div className="text-[#d4c5b9]">&darr; md:&rarr;</div>
              <div className="px-4 py-2 border border-white/5 bg-white/5 text-white">
                TEXTURE & SURFACE
              </div>
              <div className="text-[#d4c5b9]">&darr; md:&rarr;</div>
              <div className="px-4 py-2 border border-white/5 bg-white/5 text-white">
                FINISHING RUN
              </div>
              <div className="text-[#d4c5b9]">&darr; md:&rarr;</div>
              <div className="px-4 py-2 border border-[#d4c5b9] bg-[#d4c5b9]/10 text-[#d4c5b9] font-bold">
                FINAL MATERIAL
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE kaytex SOURCING */}
      <section
        ref={whySectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-20 md:mb-28">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
              CAPABILITIES
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              Why Brands Choose kaytex-EXPORTERS <br />
              <span className="italic text-[#d4c5b9]">for Fabric Sourcing</span>
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
              Finding the right fabric is not simply about choosing a material.
              It is about finding the right balance between design intent,
              quality, hand feel, performance, and production requirements.
            </p>
          </div>

          {/* Differentiators loop */}
          <div
            ref={whyGridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          >
            {whyChooseSourcing.map((item) => (
              <div
                key={item.num}
                className="pt-6 border-t border-[#2a2a2a] opacity-0"
              >
                <span className="font-mono text-xs text-[#d4c5b9] block mb-3">
                  {item.num}
                </span>
                <h3 className="font-serif text-xs uppercase tracking-wider text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-[10px] font-light text-white/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SOURCING PROCESS TIMELINE */}
      <section
        ref={processSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-20 md:mb-28">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
              WORKFLOW
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              How Our Fabric <br />
              <span className="italic text-[#d4c5b9]">
                Sourcing Process Works
              </span>
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
              We keep the sourcing journey structured and transparent, moving
              from the initial product brief toward fabric options that are
              ready for evaluation and development.
            </p>
          </div>

          {/* Desktop timeline layout */}
          <div className="hidden md:block relative w-full pt-12 pb-8">
            <div className="absolute top-12 left-[8%] right-[8%] h-[1px] bg-white/10 z-0" />
            <div
              ref={progressLineRef}
              className="absolute top-12 left-[8%] h-[1px] bg-[#d4c5b9] z-10 origin-left"
              style={{ width: "0%" }}
            />

            <div className="grid grid-cols-6 gap-4 relative z-20">
              {sourcingProcessSteps.map((item, idx) => (
                <div
                  key={item.num}
                  ref={(el) => (desktopProcessStepsRef.current[idx] = el)}
                  className="desktop-process-step flex flex-col items-center text-center px-1 opacity-0"
                >
                  <div className="w-6 h-6 rounded-full bg-black border border-[#2a2a2a] flex items-center justify-center mb-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4c5b9]" />
                  </div>
                  <span className="font-mono text-xs text-[#d4c5b9] mb-3">
                    {item.num}
                  </span>
                  <h3 className="font-serif text-[11px] uppercase tracking-wider text-white mb-3 font-normal">
                    {item.title}
                  </h3>
                  <p className="text-[10px] font-light text-white/50 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile timeline layout */}
          <div className="block md:hidden relative pl-8 py-4">
            <div className="absolute left-[7px] top-0 bottom-0 w-[1px] bg-white/10 z-0" />
            <div
              ref={mobileProgressLineRef}
              className="absolute left-[7px] top-0 w-[1px] bg-[#d4c5b9] z-10 origin-top"
              style={{ height: "0%" }}
            />

            <div className="flex flex-col space-y-12">
              {sourcingProcessSteps.map((item, idx) => (
                <div
                  key={item.num}
                  ref={(el) => (mobileProcessStepsRef.current[idx] = el)}
                  className="mobile-process-step relative flex flex-col items-start"
                >
                  <div className="absolute left-[-31px] top-1.5 w-4 h-4 rounded-full bg-black border border-[#d4c5b9] flex items-center justify-center">
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
                  <p className="text-xs font-light text-white/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="relative w-full bg-[#111111] border-t border-[#2a2a2a] py-24 md:py-36 text-center overflow-hidden">
        {/* Background Visual behind CTA */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1645684922842-87793d0b25df?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Tactile Premium Fabric Close-up"
            className="w-full h-full object-cover object-center scale-105"
            loading="lazy"
          />
        </div>

        <div className="relative z-10 max-w-3xl px-6 mx-auto">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d4c5b9] mb-6 font-mono">
            COLLABORATE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-8 leading-tight">
            Looking for the Right Fabric <br />
            <span className="italic text-[#d4c5b9]">
              for Your Next Collection?
            </span>
          </h2>
          <p className="text-xs md:text-sm font-light text-white/50 tracking-wide max-w-md mx-auto mb-12 leading-relaxed">
            Tell us what you're developing and let's explore the materials that
            can bring your product vision to life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/inquire"
              className="w-full sm:w-auto bg-[#faf9f6] text-black px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#d4c5b9] transition-all duration-500 hover:-translate-y-0.5 cursor-pointer text-center"
            >
              Connect Today
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

export default FabricSourcing;
