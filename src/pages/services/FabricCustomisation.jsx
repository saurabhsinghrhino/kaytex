import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsap } from "../../hooks/useGsap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronRight, Check } from "lucide-react";

import heroBg from "../../assets/hero.png";
import introImg from "../../assets/about_detail.jpg";
import printingImg from "../../assets/about_main.jpg";
import dyeingImg from "../../assets/about_detail.jpg";
import collage1Img from "../../assets/hero.png";
import collage2Img from "../../assets/cat_jacket.jpg";
import artisanImg from "../../assets/about_detail.jpg";
import detailImg from "../../assets/cat_jacket.jpg";
import ctaBg from "../../assets/hero.png";

export const FabricCustomisation = () => {
  const containerRef = useRef(null);

  // Hero Refs
  const heroRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroEyebrowRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroDescRef = useRef(null);
  const heroBtnRef = useRef(null);

  // Intro Refs
  const introSectionRef = useRef(null);
  const introTextRef = useRef(null);

  // What We Offer Refs
  const offerSectionRef = useRef(null);
  const offerCardsRef = useRef([]);

  // Printing Refs
  const printingSectionRef = useRef(null);
  const printingImgFrameRef = useRef(null);
  const printingImgRef = useRef(null);
  const printingListRef = useRef(null);

  // Dyeing Refs
  const dyeingSectionRef = useRef(null);
  const dyeingImgFrameRef = useRef(null);
  const dyeingImgRef = useRef(null);
  const dyeingTextRef = useRef(null);

  // Surface Refs
  const surfaceSectionRef = useRef(null);
  const surfaceTextRef = useRef(null);
  const surfaceCollageRef = useRef(null);

  // Artisan Refs
  const artisanSectionRef = useRef(null);
  const artisanImgFrameRef = useRef(null);
  const artisanImgRef = useRef(null);
  const artisanTextRef = useRef(null);

  // Why Choose Refs
  const whySectionRef = useRef(null);
  const whyGridRef = useRef(null);

  // Attention to Details Refs
  const detailsSectionRef = useRef(null);
  const detailsImgFrameRef = useRef(null);
  const detailsImgRef = useRef(null);
  const detailsTextRef = useRef(null);

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
        { scale: 1.08, opacity: 0 },
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
      // 2. INTRODUCTION TEXT REVEAL
      // ----------------------------------------------------
      if (introSectionRef.current) {
        gsap.fromTo(
          introTextRef.current.querySelectorAll(".intro-anim"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: introSectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 3. WHAT WE OFFER CARDS STAGGER
      // ----------------------------------------------------
      if (offerSectionRef.current) {
        gsap.fromTo(
          offerCardsRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: offerSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 4. CUSTOM PRINTING SPLIT REVEALS
      // ----------------------------------------------------
      if (printingSectionRef.current) {
        gsap.fromTo(
          printingImgFrameRef.current,
          { clipPath: "inset(0% 100% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: printingSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          printingImgRef.current,
          { scale: 1.1 },
          {
            scale: 1.0,
            duration: 1.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: printingSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          printingListRef.current.querySelectorAll(".print-anim"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: printingSectionRef.current,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 5. CUSTOM DYEING SPLIT REVEALS
      // ----------------------------------------------------
      if (dyeingSectionRef.current) {
        gsap.fromTo(
          dyeingImgFrameRef.current,
          { clipPath: "inset(0% 0% 0% 100%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: dyeingSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          dyeingImgRef.current,
          { scale: 1.1 },
          {
            scale: 1.0,
            duration: 1.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: dyeingSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          dyeingTextRef.current.querySelectorAll(".dye-anim"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: dyeingSectionRef.current,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 6. SURFACE MANIPULATION REVEALS
      // ----------------------------------------------------
      if (surfaceSectionRef.current) {
        gsap.fromTo(
          surfaceTextRef.current.querySelectorAll(".surface-anim"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: surfaceSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          surfaceCollageRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: surfaceSectionRef.current,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 7. ARTISAN HANDWORK REVEALS
      // ----------------------------------------------------
      if (artisanSectionRef.current) {
        gsap.fromTo(
          artisanImgFrameRef.current,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: artisanSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          artisanImgRef.current,
          { scale: 1.1 },
          {
            scale: 1.0,
            duration: 1.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: artisanSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          artisanTextRef.current.querySelectorAll(".artisan-anim"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: artisanSectionRef.current,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 8. WHY CHOOSE KAY TEX CUSTOMIZATION
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
      // 9. ATTENTION TO DETAIL REVEALS
      // ----------------------------------------------------
      if (detailsSectionRef.current) {
        gsap.fromTo(
          detailsImgFrameRef.current,
          { clipPath: "inset(0% 100% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: detailsSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          detailsImgRef.current,
          { scale: 1.15 },
          {
            scale: 1.0,
            duration: 1.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: detailsSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          detailsTextRef.current.querySelectorAll(".detail-anim"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: detailsSectionRef.current,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 10. GET STARTED TIMELINE SCROLL DRAW
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

  const offerList = [
    {
      num: "01",
      title: "Custom Printing Services",
      desc: "Digital, screen, rotary, and artisan block printing solutions mapped to your artwork.",
    },
    {
      num: "02",
      title: "Custom Dyeing Services",
      desc: "Solid shades, ombres, and resist-dyeing methods configured against fabric properties.",
    },
    {
      num: "03",
      title: "Surface Manipulation",
      desc: "Embroidery, smocking, quilting, and patchwork options introducing depth and texture.",
    },
    {
      num: "04",
      title: "Artisan Handwork",
      desc: "Hand-applied beading, crocheting, and detailing adding human quality to collections.",
    },
  ];

  const printingTechniques = [
    {
      num: "01",
      name: "Digital Printing",
      desc: "Perfect for intricate, photo-realistic designs and complex artwork with extensive color possibilities.",
    },
    {
      num: "02",
      name: "Screen Printing",
      desc: "Ideal for bold graphic patterns and strong visual artwork where vibrant, defined colors are central to the design.",
    },
    {
      num: "03",
      name: "Rotary Printing",
      desc: "Suitable for production-scale repeat patterns where consistent pattern application and efficient textile printing are required.",
    },
    {
      num: "04",
      name: "Block Printing",
      desc: "A traditional printing approach that adds handcrafted character, texture, and artisanal personality to fabrics.",
    },
  ];

  const dyeingTechniques = [
    {
      num: "01",
      name: "Solid Dyeing",
      desc: "Create consistent, rich color across the fabric for clean and refined collection directions.",
    },
    {
      num: "02",
      name: "Ombre Dyeing",
      desc: "Create gradual transitions between shades for a soft gradient effect with visual depth.",
    },
    {
      num: "03",
      name: "Tie and Dye",
      desc: "Create expressive and distinctive patterns using traditional resist-dyeing techniques.",
    },
  ];

  const surfaceTechniques = [
    {
      num: "01",
      name: "Embroidery",
      desc: "Machine or hand embroidery for logos, motifs, decorative elements, or detailed surface artwork.",
    },
    {
      num: "02",
      name: "Smocking",
      desc: "Gathered fabric detailing that introduces texture, dimension, and stretch characteristics.",
    },
    {
      num: "03",
      name: "Quilting",
      desc: "Layered stitching that creates warmth, structure, comfort, and dimensional surface effects.",
    },
    {
      num: "04",
      name: "Patchwork",
      desc: "Creative combinations of fabrics, colors, and patterns for distinctive and expressive textile compositions.",
    },
  ];

  const artisanTechniques = [
    {
      name: "BEADING",
      desc: "Hand-applied beads for decorative details, visual texture, sparkle, and elevated embellishment.",
    },
    {
      name: "CROCHET",
      desc: "Delicate handcrafted textures that can add dimension and artisanal character to selected apparel applications.",
    },
    {
      name: "APPLIQUÉ & OTHER ARTISAN WORK",
      desc: "Explore techniques such as mirror work, appliqué, and other handcrafted details in collaboration with skilled craftspeople where suitable for the project.",
    },
  ];

  const whyChooseCustom = [
    {
      num: "01",
      title: "Design-Led Approach",
      desc: "We consider the intended garment and collection direction when exploring customization options.",
    },
    {
      num: "02",
      title: "Multiple Techniques",
      desc: "Explore printing, dyeing, surface manipulation, and artisan techniques within one connected material development journey.",
    },
    {
      num: "03",
      title: "Material Awareness",
      desc: "Customization decisions are considered in relation to the characteristics and requirements of the fabric.",
    },
    {
      num: "04",
      title: "Detail-Focused Development",
      desc: "We pay close attention to color, placement, texture, scale, finish, and overall visual consistency.",
    },
    {
      num: "05",
      title: "Connected Apparel Development",
      desc: "Fabric customization can connect with broader design and manufacturing requirements, helping maintain consistency throughout product development.",
    },
  ];

  const customProcessSteps = [
    {
      num: "01",
      title: "SHARE YOUR VISION",
      desc: "Tell us about your collection, artwork, references, fabric, and intended garment.",
    },
    {
      num: "02",
      title: "DISCUSS THE MATERIAL",
      desc: "We understand the fabric, construction, color, texture, and customization requirements.",
    },
    {
      num: "03",
      title: "EXPLORE & DEVELOP",
      desc: "We explore suitable techniques and material directions based on the project.",
    },
    {
      num: "04",
      title: "REFINE THE DIRECTION",
      desc: "Review the developed direction and refine the details toward the next stage of apparel development.",
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
            ref={heroBgRef} //
            src="https://images.unsplash.com/photo-1631127839872-91d2bd28e462?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="KAY TEX EXPORTERS Fabric Customization Studio"
            className="w-full h-full object-cover object-center opacity-0"
          />
          <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-4xl px-6 text-center mt-12">
          <p
            ref={heroEyebrowRef}
            className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d4c5b9] mb-6 font-mono opacity-0"
          >
            FABRIC CUSTOMIZATION SERVICES
          </p>
          <h1
            ref={heroHeadingRef}
            className="font-serif text-3xl sm:text-5xl md:text-7xl font-light uppercase leading-[1.1] tracking-tight text-white mb-8 opacity-0"
          >
            Fabric Customization Services <br />
            Tailored Textiles for{" "}
            <span className="italic text-[#d4c5b9]">Unique Brands</span>
          </h1>
          <p
            ref={heroDescRef}
            className="text-xs md:text-sm font-light text-white/70 tracking-wide max-w-2xl mx-auto mb-10 leading-relaxed opacity-0"
          >
            Transform standard fabrics into distinctive materials through
            thoughtful printing, dyeing, surface development, and artisan
            detailing tailored to your collection.
          </p>
          <div ref={heroBtnRef} className="opacity-0">
            <Link
              to="/inquire"
              className="border border-[#faf9f6]/25 bg-[#faf9f6] text-black hover:bg-[#d4c5b9] px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 hover:-translate-y-0.5 cursor-pointer"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section
        ref={introSectionRef}
        className="relative w-full bg-[url('https://images.unsplash.com/photo-1771440048248-f92cfdec51b3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] px-6 md:px-12 py-24 md:py-36  border-black border-6 text-center"
      >
        <div ref={introTextRef} className="max-w-4xl mx-auto">
          <span className="text-[9px] uppercase tracking-widest text-[#d4c5b9] font-mono mb-6 block intro-anim opacity-0">
            FABRIC CUSTOMIZATION
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-8 leading-tight intro-anim opacity-0">
            Make the Material <br />
            <span className="italic text-[#d4c5b9]">Part of the Brand.</span>
          </h2>
          <p className="text-xs md:text-sm font-light text-white/70 leading-relaxed tracking-wide mb-6 max-w-2xl mx-auto intro-anim opacity-0">
            Fabric can do more than provide structure to a garment. It can carry
            color, texture, identity, craftsmanship, and emotion. Our
            customization capabilities help brands develop textiles that feel
            intentional from the first touch.
          </p>
          <p className="text-xs md:text-sm font-light text-white/70 leading-relaxed tracking-wide max-w-2xl mx-auto intro-anim opacity-0">
            From distinctive prints and custom colors to intricate surface
            techniques and artisan details, we help explore material directions
            that make a collection feel uniquely its own.
          </p>
        </div>
      </section>

      {/* 3. WHAT WE OFFER */}
      <section
        ref={offerSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-20 md:mb-28">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
              RANGE
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              What We Offer &mdash; <br />
              <span className="italic text-[#d4c5b9]">A Complete Range</span>
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
              Different collections require different approaches to material
              development. Explore our range of printing, dyeing, surface
              manipulation, and artisan handwork.
            </p>
          </div>

          {/* Offer list columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerList.map((item, idx) => (
              <div
                key={item.num}
                ref={(el) => (offerCardsRef.current[idx] = el)}
                className="p-6 border border-[#2a2a2a] bg-[#151515]/20 flex flex-col justify-between opacity-0"
              >
                <div>
                  <span className="font-mono text-xs text-[#d4c5b9] block mb-3">
                    {item.num}
                  </span>
                  <h3 className="font-serif text-sm uppercase tracking-wider text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs font-light text-white/50 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CUSTOM PRINTING SERVICES */}
      <section
        ref={printingSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]"
      >
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual image */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-start">
            <div
              ref={printingImgFrameRef}
              className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl"
              style={{ clipPath: "inset(0% 100% 0% 0%)" }}
            >
              <img
                ref={printingImgRef}
                src="https://images.unsplash.com/photo-1725799012428-2d4bddb0af3d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Bespoke textile printing rolls"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>
          </div>

          {/* Right techniques list */}
          <div
            ref={printingListRef}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-[9px] uppercase tracking-widest text-[#d4c5b9] font-mono mb-4 print-anim opacity-0">
              01 / PRINTING
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light uppercase tracking-tight text-white mb-4 leading-tight print-anim opacity-0">
              Custom Printing Services
            </h2>
            <p className="text-xs md:text-sm font-light text-white/70 leading-relaxed tracking-wide mb-8 print-anim opacity-0">
              Bring artwork, patterns, graphics, and visual identities to life
              through printing techniques selected according to the design
              direction, fabric, production requirements, and desired finish.
            </p>

            {/* Techniques list */}
            <div className="flex flex-col space-y-6">
              {printingTechniques.map((item) => (
                <div
                  key={item.num}
                  className="border-t border-[#1f1f1f] pt-4 group print-anim opacity-0"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-[10px] text-white/40 group-hover:text-[#d4c5b9] transition-colors">
                        {item.num}
                      </span>
                      <h4 className="font-serif text-xs uppercase tracking-wider text-white group-hover:text-[#d4c5b9] transition-colors font-normal">
                        {item.name}
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
      </section>

      {/* 5. CUSTOM DYEING SERVICES */}
      <section
        ref={dyeingSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]"
      >
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left techniques list */}
          <div
            ref={dyeingTextRef}
            className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1"
          >
            <span className="text-[9px] uppercase tracking-widest text-[#d4c5b9] font-mono mb-4 dye-anim opacity-0">
              02 / DYEING
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light uppercase tracking-tight text-white mb-4 leading-tight dye-anim opacity-0">
              Custom Dyeing Services
            </h2>
            <p className="text-xs md:text-sm font-light text-white/70 leading-relaxed tracking-wide mb-8 dye-anim opacity-0">
              Color can completely change the character of a fabric. Explore
              dyeing approaches that help create tones, gradients, and
              expressive color effects aligned with your collection. Methods are
              subject to fabric composition and development requirements.
            </p>

            {/* Techniques list */}
            <div className="flex flex-col space-y-6 mb-8">
              {dyeingTechniques.map((item) => (
                <div
                  key={item.num}
                  className="border-t border-[#1f1f1f] pt-4 group dye-anim opacity-0"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-[10px] text-white/40 group-hover:text-[#d4c5b9] transition-colors">
                        {item.num}
                      </span>
                      <h4 className="font-serif text-xs uppercase tracking-wider text-white group-hover:text-[#d4c5b9] transition-colors font-normal">
                        {item.name}
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

            {/* Color progression visual (in photography values) */}
            <div className="flex items-center space-x-6 text-[10px] font-mono tracking-widest text-[#d4c5b9] dye-anim opacity-0">
              <span>LIGHT SHADES</span>
              <span>&rarr;</span>
              <span>MID TONES</span>
              <span>&rarr;</span>
              <span>DEEP COLOURS</span>
            </div>
          </div>

          {/* Right Visual image */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end order-1 lg:order-2">
            <div
              ref={dyeingImgFrameRef}
              className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl"
              style={{ clipPath: "inset(0% 0% 0% 100%)" }}
            >
              <img
                ref={dyeingImgRef}
                src="https://images.unsplash.com/photo-1672798379137-f872e2631e0b?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Artisanal fabric dyeing process"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. SURFACE MANIPULATION */}
      <section
        ref={surfaceSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]"
      >
        <div className="mx-auto max-w-7xl">
          {/* Alternating top copy */}
          <div ref={surfaceTextRef} className="max-w-3xl mb-20">
            <span className="text-[9px] uppercase tracking-widest text-[#d4c5b9] font-mono mb-4 block surface-anim opacity-0">
              03 / SURFACE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6 surface-anim opacity-0">
              Surface Manipulation & Textures
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed surface-anim opacity-0">
              Texture and dimensional detail can transform a simple fabric into
              something more expressive. Our surface-focused techniques help
              introduce depth, structure, and tactile character.
            </p>
          </div>

          {/* Visual grid layout mixing text and visual collage */}
          <div
            ref={surfaceCollageRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Embroidery card */}
            <div className="flex flex-col border border-[#2a2a2a] bg-[#151515]/20 p-6 opacity-0">
              <span className="font-mono text-[10px] text-[#d4c5b9] mb-3">
                01
              </span>
              <h4 className="font-serif text-xs uppercase tracking-wider text-white mb-3">
                Embroidery
              </h4>
              <p className="text-xs font-light text-white/50 leading-relaxed mb-6">
                Machine or hand embroidery for logos, motifs, decorative
                elements, or detailed surface artwork.
              </p>
              <div
                className="overflow-hidden aspect-[4/3] bg-zinc-900 cursor-pointer
               border border-white/5 mt-auto"
              >
                <img
                  src="https://images.unsplash.com/photo-1671535108620-d169ce916f09?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Embroidery details close-up"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Smocking card */}
            <div className="flex flex-col border border-[#2a2a2a] bg-[#151515]/20 p-6 opacity-0">
              <span className="font-mono text-[10px] text-[#d4c5b9] mb-3">
                02
              </span>
              <h4 className="font-serif text-xs uppercase tracking-wider text-white mb-3">
                Smocking
              </h4>
              <p className="text-xs font-light text-white/50 leading-relaxed mb-6">
                Gathered fabric detailing that introduces texture, dimension,
                and stretch characteristics.
              </p>
              <div className="overflow-hidden aspect-[4/3] bg-zinc-900 border cursor-pointer border-white/5 mt-auto">
                <img
                  src="https://images.unsplash.com/photo-1582888142624-0223026471fa?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Gathered fabric smocking detailing"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Quilting card */}
            <div className="flex flex-col border border-[#2a2a2a] bg-[#151515]/20 p-6 opacity-0">
              <span className="font-mono text-[10px] text-[#d4c5b9] mb-3">
                03
              </span>
              <h4 className="font-serif text-xs uppercase tracking-wider text-white mb-3">
                Quilting
              </h4>
              <p className="text-xs font-light text-white/50 leading-relaxed mb-6">
                Layered stitching that creates warmth, structure, comfort, and
                dimensional surface effects.
              </p>
              <div className="overflow-hidden aspect-[4/3] bg-zinc-900 border cursor-pointer border-white/5 mt-auto">
                <img
                  src="https://images.unsplash.com/photo-1752752309455-a4f00ba787ef?q=80&w=2344&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Layered quilted textile structure"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Patchwork card */}
            <div className="flex flex-col border border-[#2a2a2a] bg-[#151515]/20 p-6 opacity-0">
              <span className="font-mono text-[10px] text-[#d4c5b9] mb-3">
                04
              </span>
              <h4 className="font-serif text-xs uppercase tracking-wider text-white mb-3">
                Patchwork
              </h4>
              <p className="text-xs font-light text-white/50 leading-relaxed mb-6">
                Creative combinations of fabrics, colors, and patterns for
                distinctive and expressive textile compositions.
              </p>
              <div className="overflow-hidden aspect-[4/3] bg-zinc-900 border cursor-pointer border-white/5 mt-auto">
                <img
                  src="https://images.unsplash.com/photo-1641644785726-26ec66bfce73?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Sewn patchwork fabric swatches"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ARTISAN HANDWORK */}
      <section
        ref={artisanSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]"
      >
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual image */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-start">
            <div
              ref={artisanImgFrameRef}
              className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl"
              style={{ clipPath: "inset(100% 0% 0% 0%)" }}
            >
              <img
                ref={artisanImgRef}
                src="https://images.unsplash.com/photo-1785835945703-cd0c72375743?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Traditional artisan beading handwork detailing"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />
            </div>
          </div>

          {/* Right techniques list (Serif-led) */}
          <div
            ref={artisanTextRef}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-[9px] uppercase tracking-widest text-[#d4c5b9] font-mono mb-4 artisan-anim opacity-0">
              04 / ARTISANAL
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light uppercase tracking-tight text-white mb-2 leading-tight artisan-anim opacity-0">
              Artisan Handwork
            </h2>
            <p className="font-serif italic text-base text-[#d4c5b9] mb-6 artisan-anim opacity-0">
              "Crafted by Detail."
            </p>
            <p className="text-xs md:text-sm font-light text-white/70 leading-relaxed tracking-wide mb-8 artisan-anim opacity-0">
              Traditional craftsmanship can add a distinctive human quality to a
              textile. We explore artisan techniques that introduce detail,
              texture, and character into fabric and garment development.
            </p>

            {/* Techniques list */}
            <div className="flex flex-col space-y-6">
              {artisanTechniques.map((item) => (
                <div
                  key={item.name}
                  className="border-t border-[#1f1f1f] pt-4 group artisan-anim opacity-0"
                >
                  <h4 className="text-xs uppercase tracking-widest text-white group-hover:text-[#d4c5b9] transition-colors font-mono mb-2">
                    {item.name}
                  </h4>
                  <p className="text-[11px] font-light text-white/50 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE KAY TEX */}
      <section
        ref={whySectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-20 md:mb-28">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
              COLLABORATION
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              Why Choose KAY TEX EXPORTERS <br />
              <span className="italic text-[#d4c5b9]">
                for Fabric Customization?
              </span>
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
              Fabric customization requires more than choosing a technique. The
              process depends on understanding how material, artwork, color,
              texture, construction, and production requirements work together.
            </p>
          </div>

          {/* Differentiators loop with horizontal hover lines */}
          <div ref={whyGridRef} className="flex flex-col space-y-6 max-w-5xl">
            {whyChooseCustom.map((item) => (
              <div
                key={item.num}
                className="pt-6 border-t border-[#1f1f1f] group flex flex-col md:flex-row justify-between items-start md:items-center gap-4 opacity-0"
              >
                <div className="flex items-center space-x-6">
                  <span className="font-mono text-xs text-white/40 group-hover:text-[#d4c5b9] transition-colors w-8">
                    {item.num}
                  </span>
                  <h4 className="font-serif text-base uppercase tracking-wider text-white group-hover:text-[#d4c5b9] transition-colors font-light">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs font-light text-white/55 tracking-wide max-w-xl md:text-right leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WE GIVE ATTENTION TO DETAILS */}
      <section
        ref={detailsSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]"
      >
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div
            ref={detailsTextRef}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-[9px] uppercase tracking-widest text-[#d4c5b9] font-mono mb-4 detail-anim opacity-0">
              ACCURACY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light uppercase tracking-tight text-white mb-6 leading-tight detail-anim opacity-0">
              We Give Attention <br />
              <span className="italic text-[#d4c5b9]">to Details</span>
            </h2>
            <p className="text-xs md:text-sm font-light text-white/70 leading-relaxed tracking-wide mb-6 detail-anim opacity-0">
              Small details can change how a fabric feels, looks, and ultimately
              represents a brand. From color accuracy and pattern placement to
              texture and finishing, we approach customization with a close eye
              on the details that shape the final material.
            </p>
            <p className="text-xs md:text-sm font-light text-white/70 leading-relaxed tracking-wide mb-8 detail-anim opacity-0">
              Our goal is not simply to add decoration. It is to make sure every
              customization decision supports the character and purpose of the
              garment.
            </p>

            {/* Checklist items */}
            <div className="grid grid-cols-3 gap-3 detail-anim opacity-0">
              {[
                "COLOR",
                "PATTERN",
                "PLACEMENT",
                "TEXTURE",
                "FINISH",
                "CONSISTENCY",
              ].map((lbl) => (
                <span
                  key={lbl}
                  className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] tracking-widest font-mono text-[#d4c5b9] text-center"
                >
                  {lbl}
                </span>
              ))}
            </div>
          </div>

          {/* Right image frame */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <div
              ref={detailsImgFrameRef}
              className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl"
              style={{ clipPath: "inset(0% 100% 0% 0%)" }}
            >
              <img
                ref={detailsImgRef}
                src="https://images.unsplash.com/photo-1771098124556-0d22d2ab3881?q=80&w=2278&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Macro texture close-up garment customization detail"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. GET STARTED TIMELINE */}
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
              How Can You Get Started <br />
              <span className="italic text-[#d4c5b9]">
                with Fabric Customization?
              </span>
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
              Tell us what you're creating, what you want the material to look
              and feel like, and where you're looking to take the collection.
              We'll help explore the appropriate customization direction.
            </p>
          </div>

          {/* Desktop timeline layout */}
          <div className="hidden md:block relative w-full pt-12 pb-8">
            <div className="absolute top-12 left-[12%] right-[12%] h-[1px] bg-white/10 z-0" />
            <div
              ref={progressLineRef}
              className="absolute top-12 left-[12%] h-[1px] bg-[#d4c5b9] z-10 origin-left"
              style={{ width: "0%" }}
            />

            <div className="grid grid-cols-4 gap-6 relative z-20">
              {customProcessSteps.map((item, idx) => (
                <div
                  key={item.num}
                  ref={(el) => (desktopProcessStepsRef.current[idx] = el)}
                  className="desktop-process-step flex flex-col items-center text-center px-2 opacity-0"
                >
                  <div className="w-6 h-6 rounded-full bg-black border border-[#2a2a2a] flex items-center justify-center mb-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4c5b9]" />
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
              {customProcessSteps.map((item, idx) => (
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

      {/* 11. FINAL CTA */}
      <section className="relative w-full bg-[#111111] border-t border-[#2a2a2a] py-24 md:py-36 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Tactile Premium Customize Fabric Swatch"
            className="w-full h-full object-cover object-center scale-105"
            loading="lazy"
          />
        </div>

        <div className="relative z-10 max-w-3xl px-6 mx-auto">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d4c5b9] mb-6 font-mono">
            COLLABORATE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-8 leading-tight">
            Ready to Make Your <br />
            <span className="italic text-[#d4c5b9]">Fabric Different?</span>
          </h2>
          <p className="text-xs md:text-sm font-light text-white/50 tracking-wide max-w-md mx-auto mb-12 leading-relaxed">
            Let's explore the colors, textures, prints, and details that can
            give your collection its own material identity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/inquire"
              className="w-full sm:w-auto bg-[#faf9f6] text-black px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#d4c5b9] transition-all duration-500 hover:-translate-y-0.5 cursor-pointer text-center"
            >
              Get Quote
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

export default FabricCustomisation;
