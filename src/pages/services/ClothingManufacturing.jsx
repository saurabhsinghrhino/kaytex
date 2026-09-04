import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsap } from "../../hooks/useGsap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ClipboardList,
  Factory,
  GitBranch,
  BadgeCheck,
} from "lucide-react";

import heroBg from "../../assets/cat_jacket.jpg";
import womensWearImg from "../../assets/about_main.jpg";
import ctaBg from "../../assets/hero.png";

export const ClothingManufacturing = () => {
  const containerRef = useRef(null);

  // Hero Refs
  const heroRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroEyebrowRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroDescRef = useRef(null);
  const heroBtnRef = useRef(null);

  // Section Refs (For scroll fade reveals)
  const philosophySectionRef = useRef(null);
  const sourcingSectionRef = useRef(null);
  const ecosystemSectionRef = useRef(null);
  const whyIndiaSectionRef = useRef(null);
  const madeEasySectionRef = useRef(null);

  // Women's Wear Refs
  const categorySectionRef = useRef(null);
  const categoryImgFrameRef = useRef(null);
  const categoryImgRef = useRef(null);
  const categoryTextRef = useRef(null);

  // Kaytex Ecosystem Refs
  const roleSectionRef = useRef(null);
  const roleCardsRef = useRef([]);

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
      // 2. TEXT-ONLY SECTIONS SCROLL TRIGGERS (Staggers & fades)
      // ----------------------------------------------------
      const textSections = [
        philosophySectionRef,
        sourcingSectionRef,
        ecosystemSectionRef,
        whyIndiaSectionRef,
        madeEasySectionRef,
      ];

      textSections.forEach((secRef) => {
        if (secRef.current) {
          gsap.fromTo(
            secRef.current.querySelectorAll(".editorial-anim"),
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.15,
              scrollTrigger: {
                trigger: secRef.current,
                start: "top 75%",
                toggleActions: "play none none none",
              },
            },
          );
        }
      });

      // ----------------------------------------------------
      // 3. WOMEN'S WEAR CATEGORY REVEALS
      // ----------------------------------------------------
      if (categorySectionRef.current) {
        gsap.fromTo(
          categoryImgFrameRef.current,
          { clipPath: "inset(0% 100% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: categorySectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          categoryImgRef.current,
          { scale: 1.05 },
          {
            scale: 1.0,
            duration: 1.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: categorySectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          categoryTextRef.current.querySelectorAll(".category-anim"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: categorySectionRef.current,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 4. KAYTEX ECOSYSTEM GRID STAGGER
      // ----------------------------------------------------
      if (roleSectionRef.current) {
        gsap.fromTo(
          roleCardsRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: roleSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    },
    [],
    containerRef,
  );

  const ecosystemPoints = [
    {
      num: "01",
      title: "Product Understanding",
      icon: ClipboardList,
      desc: "We begin by understanding the garment, collection direction, material requirements, construction details, and intended outcome.",
    },
    {
      num: "02",
      title: "Manufacturing Alignment",
      icon: Factory,
      desc: "We help align product requirements with suitable manufacturing capabilities based on the needs of the project.",
    },
    {
      num: "03",
      title: "Production Coordination",
      icon: GitBranch,
      desc: "Keep key production considerations connected across development, materials, construction, finishing, and manufacturing.",
    },
    {
      num: "04",
      title: "Quality Focus",
      icon: BadgeCheck,
      desc: "Maintain attention to garment details and production requirements throughout the development journey.",
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
            src={heroBg}
            alt="KAYTEX-EXPORTERS Premium Apparel Manufacturing Facility"
            className="w-full h-full object-cover object-center opacity-0"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-4xl px-6 text-center mt-12">
          <p
            ref={heroEyebrowRef}
            className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d4c5b9] mb-6 font-mono opacity-0"
          >
            APPAREL MANUFACTURING
          </p>
          <h1
            ref={heroHeadingRef}
            className="font-serif text-3xl sm:text-5xl md:text-7xl font-light uppercase leading-[1.1] tracking-tight text-white mb-8 opacity-0"
          >
            Clothing Manufacturer for <br />
            Global <span className="italic text-[#d4c5b9]">Apparel Brands</span>
          </h1>
          <p
            ref={heroDescRef}
            className="text-xs md:text-sm font-light text-white/70 tracking-wide max-w-2xl mx-auto mb-10 leading-relaxed opacity-0"
          >
            From product development to production, KAYTEX-EXPORTERS helps apparel brands
            turn thoughtful designs into well-developed garments through a
            connected manufacturing approach.
          </p>
          <div ref={heroBtnRef} className="opacity-0">
            <Link
              to="/inquire"
              className="border border-[#faf9f6]/25 bg-[#faf9f6] text-black hover:bg-[#d4c5b9] px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 hover:-translate-y-0.5 cursor-pointer"
            >
              Connect
            </Link>
          </div>
        </div>
      </section>

      {/* 2. DESIGN-LED. CRAFTSMANSHIP-DRIVEN (Asymmetric text-only) */}
      <section
        ref={philosophySectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]/30"
      >
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4 flex flex-col justify-start">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#d4c5b9] font-mono editorial-anim opacity-0">
              MANUFACTURING PHILOSOPHY
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-light uppercase tracking-tight text-white mb-6 leading-tight editorial-anim opacity-0">
              Design-Led. Craftsmanship-Driven. <br />
              Built for Scale and Exports
            </h2>
            <div className="w-12 h-[1px] bg-[#d4c5b9] mb-8 editorial-anim opacity-0" />
            <p className="text-sm font-light text-white/70 leading-relaxed tracking-wide editorial-anim opacity-0">
              Manufacturing works best when design intent and production
              capability stay connected. KAYTEX-EXPORTERS approaches apparel production
              with attention to construction, material choices, finishing,
              consistency, and the requirements of brands developing collections
              for wider markets.
            </p>
          </div>
        </div>
      </section>

      {/* 3. HOW KAYTEX-EXPORTERS WORKS WITH MILLS (Asymmetric text-only) */}
      <section
        ref={sourcingSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]/30"
      >
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4 flex flex-col justify-start">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#d4c5b9] font-mono editorial-anim opacity-0">
              STRATEGIC SOURCING
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-light uppercase tracking-tight text-white mb-6 leading-tight editorial-anim opacity-0">
              How KAYTEX-EXPORTERS Strategically Works With <br />
              Mills and Factories Across India
            </h2>
            <div className="w-12 h-[1px] bg-[#d4c5b9] mb-8 editorial-anim opacity-0" />
            <p className="text-sm font-light text-white/70 leading-relaxed tracking-wide mb-4 editorial-anim opacity-0">
              India's apparel ecosystem brings together diverse textile,
              manufacturing, finishing, and production capabilities. KAYTEX-EXPORTERS
              works across this ecosystem to connect product requirements with
              suitable manufacturing capabilities based on the needs of each
              collection.
            </p>
            <p className="text-xs font-light text-white/50 leading-relaxed tracking-wide italic editorial-anim opacity-0">
              The objective is not simply to find production capacity, but to
              align the right capabilities with the right product.
            </p>
          </div>
        </div>
      </section>

      {/* 4. INDIA SUPPLY ECOSYSTEM (Asymmetric text-only) */}
      <section
        ref={ecosystemSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]/30"
      >
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4 flex flex-col justify-start">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#d4c5b9] font-mono editorial-anim opacity-0">
              SUPPLY CHAIN INTEL
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-light uppercase tracking-tight text-white mb-6 leading-tight editorial-anim opacity-0">
              India Is Not One Supply Chain <br />
              &mdash; It Is an Ecosystem
            </h2>
            <div className="w-12 h-[1px] bg-[#d4c5b9] mb-8 editorial-anim opacity-0" />
            <p className="text-sm font-light text-white/70 leading-relaxed tracking-wide mb-6 editorial-anim opacity-0">
              Different regions and production networks offer different
              strengths across textiles, garment construction, craftsmanship,
              finishing, and manufacturing. Understanding these differences
              allows brands to approach production with greater flexibility and
              intention.
            </p>
            <p className="text-sm font-light text-white/70 leading-relaxed tracking-wide editorial-anim opacity-0">
              KAYTEX-EXPORTERS's role is to help connect product requirements with the
              capabilities that best support them.
            </p>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT CATEGORIES (Women's Wear only) */}
      <section
        ref={categorySectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]/30"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
              CATEGORIES
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              Product Categories{" "}
              <span className="italic text-[#d4c5b9]">We Manufacture</span>
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
              Our manufacturing capabilities focus on apparel categories where
              design, material, construction, and finishing come together to
              create commercially relevant garments.
            </p>
          </div>

          {/* Women's Wear Split campaign visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left large visual */}
            <div className="lg:col-span-7 w-full flex justify-center lg:justify-start">
              <div
                ref={categoryImgFrameRef}
                className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl"
                style={{ clipPath: "inset(0% 100% 0% 0%)" }}
              >
                <img
                  ref={categoryImgRef}
                  src="https://images.unsplash.com/photo-1631127860594-975f546d3ae2?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Premium women's fashion apparel production"
                  className="w-full h-full object-cover object-center "
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
              </div>
            </div>

            {/* Right category details */}
            <div
              ref={categoryTextRef}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <span className="font-serif text-xs text-[#d4c5b9] block mb-2 category-anim opacity-0">
                01
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-light uppercase tracking-wider text-white mb-4 category-anim opacity-0">
                WOMEN'S WEAR
              </h3>
              <p className="text-xs md:text-sm font-light text-white/75 leading-relaxed tracking-wide mb-8 category-anim opacity-0">
                We develop and manufacture women's apparel across a range of
                silhouettes and collection directions, with attention to fabric,
                construction, finishing, and the overall design intent of the
                garment.
              </p>
              <div className="category-anim opacity-0">
                <Link
                  to="/services/clothing-manufacturing/womens-clothing"
                  className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-mono text-[#d4c5b9] hover:text-white transition-colors duration-300 group cursor-pointer"
                >
                  <span>Explore Category</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE INDIA (Asymmetric text-only) */}
      <section
        ref={whyIndiaSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]/30"
      >
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4 flex flex-col justify-start">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#d4c5b9] font-mono editorial-anim opacity-0">
              GLOBAL PARTNERSHIP
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-light uppercase tracking-tight text-white mb-6 leading-tight editorial-anim opacity-0">
              Why Global Brands Are Choosing India <br />
              for Long-Term Partnerships
            </h2>
            <div className="w-12 h-[1px] bg-[#d4c5b9] mb-8 editorial-anim opacity-0" />
            <p className="text-sm font-light text-white/70 leading-relaxed tracking-wide mb-4 editorial-anim opacity-0">
              India offers a broad apparel ecosystem where textile knowledge,
              manufacturing capabilities, craftsmanship, and production
              infrastructure can come together within a connected supply
              environment. For brands looking beyond individual production runs,
              this ecosystem can support longer-term product development and
              manufacturing relationships.
            </p>
            <p className="text-xs font-light text-white/50 leading-relaxed tracking-wide italic editorial-anim opacity-0">
              The value lies not only in production, but in building a
              manufacturing relationship that can evolve with the brand.
            </p>
          </div>
        </div>
      </section>

      {/* 7. KAYTEX'S ROLE IN THIS ECOSYSTEM */}
      <section
        ref={roleSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]/30"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-20 md:mb-28">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
              WORKFLOW INTEGRATION
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              KAYTEX-EXPORTERS’s Role{" "}
              <span className="italic text-[#d4c5b9]">in This Ecosystem</span>
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
              KAYTEX-EXPORTERS helps connect the different stages of apparel development
              by bringing design intent, material decisions, production
              requirements, and manufacturing capabilities into a more
              coordinated workflow.
            </p>
          </div>

          {/* Grid loop of 4 thin-stroke icon points */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecosystemPoints.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.num}
                  ref={(el) => (roleCardsRef.current[idx] = el)}
                  className="group flex flex-col p-6 border border-[#2a2a2a] bg-[#151515]/20 hover:border-[#d4c5b9]/30 transition-all duration-300 hover:-translate-y-0.5 opacity-0"
                >
                  <div className="w-12 h-12 border border-[#d4c5b9]/30 bg-black flex items-center justify-center mb-6 transition-colors duration-300 group-hover:border-[#d4c5b9]">
                    <IconComponent className="w-5 h-5 text-[#d4c5b9] transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <span className="font-mono text-[10px] text-white/40 block mb-2">
                    {item.num}
                  </span>
                  <h4 className="font-serif text-sm uppercase tracking-wider text-white mb-3 group-hover:text-[#d4c5b9] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs font-light text-white/50 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CLOTHING MANUFACTURING MADE EASY (Asymmetric text-only) */}
      <section
        ref={madeEasySectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]/30"
      >
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4 flex flex-col justify-start">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#d4c5b9] font-mono editorial-anim opacity-0">
              PRODUCTION INTEGRATION
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-light uppercase tracking-tight text-white mb-6 leading-tight editorial-anim opacity-0">
              Clothing Manufacturing, <br />
              Now Made Easy
            </h2>
            <div className="w-12 h-[1px] bg-[#d4c5b9] mb-8 editorial-anim opacity-0" />
            <p className="text-sm font-light text-white/70 leading-relaxed tracking-wide mb-4 editorial-anim opacity-0">
              From the first product brief to the final manufacturing stage,
              KAYTEX-EXPORTERS brings the key parts of apparel development into a more
              connected process&mdash;helping brands move from concept toward
              production with greater clarity.
            </p>
            <p className="text-xs font-light text-white/50 leading-relaxed tracking-wide italic editorial-anim opacity-0">
              One product vision. One connected journey.
            </p>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="relative w-full bg-[#111111] border-t border-[#2a2a2a] py-24 md:py-36 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src={ctaBg}
            alt="KAYTEX-EXPORTERS Premium garment manufacturing close-up"
            className="w-full h-full object-cover object-center scale-105"
            loading="lazy"
          />
        </div>

        <div className="relative z-10 max-w-3xl px-6 mx-auto">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d4c5b9] mb-6 font-mono">
            COLLABORATE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-8 leading-tight">
            Ready to Bring Your Collection <br />
            <span className="italic text-[#d4c5b9]">Into Production?</span>
          </h2>
          <p className="text-xs md:text-sm font-light text-white/50 tracking-wide max-w-md mx-auto mb-12 leading-relaxed">
            Tell us what you're developing and let's explore how KAYTEX-EXPORTERS can
            support your next apparel manufacturing project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/inquire"
              className="w-full sm:w-auto bg-[#faf9f6] text-black px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#d4c5b9] transition-all duration-500 hover:-translate-y-0.5 cursor-pointer text-center"
            >
              Connect
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

export default ClothingManufacturing;
