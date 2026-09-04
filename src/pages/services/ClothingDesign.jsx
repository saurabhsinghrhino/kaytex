import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsap } from "../../hooks/useGsap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronRight, Check } from "lucide-react";

import heroBg from "/hero bg 2.png";
import introImg from "../../assets/about_main.jpg";
import card1Img from "../../assets/about_main.jpg";
import card2Img from "../../assets/hero.png";
import card3Img from "../../assets/about_detail.jpg";
import card4Img from "../../assets/about_main.jpg";
import card5Img from "../../assets/cat_jacket.jpg";
import card6Img from "../../assets/hero.png";

export const ClothingDesign = () => {
  const containerRef = useRef(null);

  // Hero Refs
  const heroRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroEyebrowRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroDescRef = useRef(null);
  const heroBtnRef = useRef(null);

  // Intro Section Refs
  const introSectionRef = useRef(null);
  const introImgFrameRef = useRef(null);
  const introImgRef = useRef(null);
  const introTextRef = useRef(null);

  // Services Cards Grid Refs
  const cardsSectionRef = useRef(null);
  const cardsRef = useRef([]);

  // Statement Ref
  const statementSectionRef = useRef(null);
  const statementTextRef = useRef(null);

  // Why Choose Refs
  const whyChooseSectionRef = useRef(null);
  const whyChooseGridRef = useRef(null);

  // Testimonial Refs
  const testimonialSectionRef = useRef(null);
  const testimonialCardsRef = useRef([]);

  // Process timeline Refs
  const processSectionRef = useRef(null);
  const progressLineRef = useRef(null);
  const mobileProgressLineRef = useRef(null);
  const desktopProcessStepsRef = useRef([]);
  const mobileProcessStepsRef = useRef([]);

  // Apparel Dev Refs
  const devSectionRef = useRef(null);
  const devNodesRef = useRef([]);

  useGsap(
    () => {
      // ----------------------------------------------------
      // 1. HERO MOUNT TIMELINE ANIMATION
      // ----------------------------------------------------
      const heroTl = gsap.timeline({ delay: 0.1 });

      // Image scale-down and fade-in
      heroTl.fromTo(
        heroBgRef.current,
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.8, ease: "power3.out" },
      );

      // Text elements reveal
      heroTl.fromTo(
        [
          heroEyebrowRef.current,
          heroHeadingRef.current,
          heroDescRef.current,
          heroBtnRef.current,
        ],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.12 },
        "-=1.2",
      );

      // ----------------------------------------------------
      // 2. INTRO SCROLLTRIGGER ANIMATION
      // ----------------------------------------------------
      if (introSectionRef.current) {
        // Image reveal with clip path
        gsap.fromTo(
          introImgFrameRef.current,
          { clipPath: "inset(0% 100% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: introSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          introImgRef.current,
          { scale: 1.1 },
          {
            scale: 1.0,
            duration: 1.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: introSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        // Text reveal
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
              start: "top 65%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 3. SERVICE CARDS STAGGERED REVEAL
      // ----------------------------------------------------
      if (cardsSectionRef.current) {
        gsap.fromTo(
          cardsRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: cardsSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 4. LARGE STATEMENT SCROLL TRIGGER
      // ----------------------------------------------------
      if (statementSectionRef.current) {
        gsap.fromTo(
          statementTextRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: statementSectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 5. WHY CHOOSE KAYTEX DESIGN ANIMATION
      // ----------------------------------------------------
      if (whyChooseSectionRef.current) {
        gsap.fromTo(
          whyChooseGridRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: whyChooseSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 6. TESTIMONIALS SLIDE-IN
      // ----------------------------------------------------
      if (testimonialSectionRef.current) {
        gsap.fromTo(
          testimonialCardsRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: testimonialSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      if (processSectionRef.current) {
        let mm = gsap.matchMedia();

        // Desktop layout (md and above)
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

        // Mobile layout (below md)
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

      // ----------------------------------------------------
      // 8. APPAREL DEVELOPMENT TIMELINE REVEAL
      // ----------------------------------------------------
      if (devSectionRef.current) {
        gsap.fromTo(
          devNodesRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: devSectionRef.current,
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

  const servicesList = [
    {
      num: "01",
      title: "Concept & Design Development",
      desc: "We transform your initial ideas, references, sketches, or inspiration into a clear garment concept that reflects your brand identity.",
      img: "https://images.unsplash.com/photo-1721664195489-7448042bf305?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      num: "02",
      title: "Garment Design",
      desc: "Develop thoughtful silhouettes, details, proportions, and visual elements that give each garment a distinctive identity.",
      img: "https://images.unsplash.com/photo-1753162657219-e4e48c56afbc?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      num: "03",
      title: "Tech Pack Development",
      desc: "We create detailed, production-ready tech packs for every style. Each tech pack includes: flat sketches, BOM (Bill of Materials), construction details, colorways basic measurement specs. Everything a manufacturer needs to sample and produce with accuracy. ",
      img: "/clothing-3.png",
    },
    {
      num: "04",
      title: "3D Garment Visualization",
      desc: "Our 3D digital garment renderings allow you to preview your designs with photo-realistic accuracy—helping you: make quicker decisions, present collections to buyers, launch pre-orders. It saves time, reduces waste, and minimizes upfront costs for emerging and established brands alike.",
      img: "/clothing-4.png",
    },
    {
      num: "05",
      title: "Fit & Construction Guidance",
      desc: "Provide guidance on garment fit, construction, and material considerations to ensure the final product meets your expectations and performs well.",
      img: "https://images.unsplash.com/photo-1628565663674-de1c8161d72c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      num: "06",
      title: "Fabric Surface Print Design",
      desc: "We specialize in all-over print design for fabrics—perfect for brands looking to customize their collections with unique patterns.hand-painted watercolor florals, trendy geometrics, minimalist abstracts, We deliver digital textile designs in repeatable, scalable formats ready for digital or rotary printing.",
      img: "https://images.unsplash.com/photo-1722694583723-b75de0918c44?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const designProcessSteps = [
    {
      num: "01",
      title: "DISCOVER",
      desc: "We understand your brand, product idea, audience, references, requirements, and overall creative direction.",
    },
    {
      num: "02",
      title: "DEFINE",
      desc: "We translate the initial vision into a clearer design direction, identifying silhouettes, materials, details, and product requirements.",
    },
    {
      num: "03",
      title: "DEVELOP",
      desc: "We develop the garment concept and supporting documentation, refining the details needed for the next stage.",
    },
    {
      num: "04",
      title: "REVIEW",
      desc: "We review the design, specifications, fit considerations, and samples where applicable, identifying areas for refinement.",
    },
    {
      num: "05",
      title: "READY FOR PRODUCTION",
      desc: "Once the design direction is approved, the product has a clearer foundation for sourcing and manufacturing.",
    },
  ];

  const devJourneyList = [
    {
      name: "Brand Brief",
      desc: "Aligning on collection direction, mood, and references.",
    },
    {
      name: "Design Direction",
      desc: "Drafting silhouettes and sketching stylistic layouts.",
    },
    {
      name: "Technical Development",
      desc: "Compiling measurements, sizes, and specs sheets.",
    },
    {
      name: "Material Sourcing",
      desc: "Selecting yarn types, knit structures, and weights.",
    },

    {
      name: "Refinement & Grading",
      desc: "Adjusting proportions and sealing fit approvals.",
    },
    {
      name: "Production Setup",
      desc: "Moving designs into cut, stitch, and packing flows.",
    },
  ];

  const testimonials = [
    {
      quote:
        "KAYTEX-EXPORTERS helped us turn an early concept into a much clearer product direction. Their attention to the details made the development process far easier.",
      name: "Alex Morgan",
      role: "Founder, Northline Studio",
    },
    {
      quote:
        "The communication throughout the design process was clear and professional. We always knew what the next step was.",
      name: "Emily Carter",
      role: "Creative Director, Atelier Form",
    },
    {
      quote:
        "What stood out was the balance between creative thinking and practical apparel development.",
      name: "Daniel Brooks",
      role: "Founder, Thread & Co.",
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
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
          <img
            ref={heroBgRef}
            src={heroBg}
            alt="KAYTEX-EXPORTERS Premium Apparel Development Studio"
            className="w-full h-full object-cover object-center opacity-0"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        {/* Hero Copy overlay */}
        <div className="relative z-10 max-w-4xl px-6 text-center mt-12">
          <p
            ref={heroEyebrowRef}
            className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d4c5b9] mb-6 font-mono opacity-0"
          >
            CLOTHING DESIGN SERVICES
          </p>
          <h1
            ref={heroHeadingRef}
            className="font-serif text-4xl sm:text-5xl md:text-7xl font-light uppercase leading-[1.1] tracking-tight text-white mb-8 opacity-0"
          >
            Clothing Design Services <br />
            to Bring Your Fashion{" "}
            <span className="italic text-[#d4c5b9]">Vision to Life</span>
          </h1>
          <p
            ref={heroDescRef}
            className="text-xs md:text-sm font-light text-white/70 tracking-wide max-w-2xl mx-auto mb-10 leading-relaxed opacity-0"
          >
            From your first idea to a refined, production-ready garment, KAYTEX-EXPORTERS
            helps turn creative concepts into apparel that reflects your brand,
            your audience, and your vision.
          </p>
          <div ref={heroBtnRef} className="opacity-0">
            <Link
              to="/inquire"
              className="border border-[#faf9f6]/20 bg-[#faf9f6] text-black hover:bg-[#d4c5b9] px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 hover:-translate-y-0.5 cursor-pointer"
            >
              Work with us &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 2. NARRATIVE INTRO SECTION */}
      <section
        ref={introSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]"
      >
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left image frame */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-start">
            <div
              ref={introImgFrameRef}
              className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl"
              style={{ clipPath: "inset(0% 100% 0% 0%)" }}
            >
              <img
                ref={introImgRef}
                src="/clothing-1.png"
                alt="Apparel Design development"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>
          </div>

          {/* Right narrative */}
          <div
            ref={introTextRef}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-[9px] uppercase tracking-widest text-[#d4c5b9] font-mono mb-4 intro-anim opacity-0">
              PHILOSOPHY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light uppercase tracking-tight text-white mb-6 leading-tight intro-anim opacity-0">
              Your Clothing Line Deserves <br />
              <span className="italic text-[#d4c5b9]">Thoughtful Design.</span>
            </h2>
            <p className="text-xs md:text-sm font-light text-white/70 leading-relaxed tracking-wide mb-6 intro-anim opacity-0">
              A great garment begins long before it reaches the production
              floor. Every silhouette, detail, fabric choice, and construction
              decision contributes to how a product looks, feels, and performs.
            </p>
            <p className="text-xs md:text-sm font-light text-white/70 leading-relaxed tracking-wide intro-anim opacity-0">
              At KAYTEX-EXPORTERS, we approach clothing design with both creativity and
              practicality &mdash; helping brands develop apparel that stays
              true to their vision while being clear and ready for the next
              stages of development.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES GRID (6 CARDS) */}
      <section
        ref={cardsSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-20 md:mb-28">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
              CAPABILITIES
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              What’s In Our{" "}
              <span className="italic text-[#d4c5b9]">
                Clothing Design Services
              </span>
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
              From the first concept to the details that guide production, our
              clothing design services help create a clear foundation for your
              apparel collection.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {servicesList.map((card, idx) => (
              <div
                key={card.num}
                ref={(el) => (cardsRef.current[idx] = el)}
                className="group flex flex-col border border-[#2a2a2a] bg-[#151515]/20 hover:border-[#d4c5b9]/30 transition-colors duration-500 overflow-hidden opacity-0 cursor-pointer"
              >
                {/* Image */}
                <div className="overflow-hidden aspect-[16/10] bg-zinc-900 border-b border-[#2a2a2a] relative">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-[1s] ease-out opacity-85"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-[#d4c5b9]">
                        {card.num}
                      </span>
                    </div>
                    <h3 className="font-serif text-base uppercase tracking-wider text-white group-hover:text-[#d4c5b9] transition-colors duration-300 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-xs font-light text-white/50 leading-relaxed tracking-wide mb-6">
                      {card.desc}
                    </p>
                  </div>
                  <div className="flex justify-end pt-2">
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

      {/* 4. DESIGN DOCUMENTATION BANNER STATEMENT */}
      <section
        ref={statementSectionRef}
        className="relative w-full bg-[url('https://images.unsplash.com/photo-1611325058416-db7794e8e32c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] border-y border-[#2a2a2a] px-6 md:px-12 py-28 md:py-40 flex items-center justify-center"
      >
        <div
          ref={statementTextRef}
          className="mx-auto max-w-4xl text-center opacity-0"
        >
          <span className="text-[10px] uppercase tracking-widest text-[#d4c5b9] font-mono mb-6 block">
            CLARITY IN DESIGN
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-white mb-10 leading-tight">
            Clarity in design <br />
            <span className="italic text-black">is everything.</span>
          </h2>
          <p className="text-xs md:text-sm font-light text-white/60 tracking-wide max-w-xl mx-auto mb-6 leading-relaxed">
            When design information is clear, complete, and thoughtfully
            prepared, the journey from concept to production becomes easier to
            manage.
          </p>
          <p className="text-xs md:text-sm font-light text-white/60 tracking-wide max-w-xl mx-auto leading-relaxed">
            At KAYTEX-EXPORTERS, our design documentation is created with production in
            mind &mdash; helping reduce unnecessary revisions, improve
            communication, and give every garment a clearer path toward
            development.
          </p>
        </div>
      </section>

      {/* 5. WHY CHOOSE DESIGN (4 PUSHES GRID) */}
      <section
        ref={whyChooseSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-20 md:mb-28">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
              PARTNERSHIP
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              Why Choose{" "}
              <span className="italic text-[#d4c5b9]">KAYTEX-EXPORTERS Design?</span>
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
              Good apparel design requires more than creativity. It requires
              communication, technical understanding, attention to detail, and a
              clear path toward production.
            </p>
          </div>

          {/* Grid list with borders */}
          <div
            ref={whyChooseGridRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16"
          >
            {/* 01 */}
            <div className="pt-6 border-t border-[#2a2a2a] opacity-0">
              <span className="font-serif text-2xl text-[#d4c5b9] block mb-3">
                01
              </span>
              <h3 className="font-serif text-base uppercase tracking-wider text-white mb-3">
                Creative + Practical
              </h3>
              <p className="text-xs font-light text-white/60 leading-relaxed tracking-wide">
                We balance creative direction with practical garment development
                so ideas remain both distinctive and achievable.
              </p>
            </div>

            {/* 02 */}
            <div className="pt-6 border-t border-[#2a2a2a] opacity-0">
              <span className="font-serif text-2xl text-[#d4c5b9] block mb-3">
                02
              </span>
              <h3 className="font-serif text-base uppercase tracking-wider text-white mb-3">
                Production-Minded Design
              </h3>
              <p className="text-xs font-light text-white/60 leading-relaxed tracking-wide">
                Our design approach considers what happens beyond the sketch,
                helping create documentation and specifications that support the
                next stages of development.
              </p>
            </div>

            {/* 03 */}
            <div className="pt-6 border-t border-[#2a2a2a] opacity-0">
              <span className="font-serif text-2xl text-[#d4c5b9] block mb-3">
                03
              </span>
              <h3 className="font-serif text-base uppercase tracking-wider text-white mb-3">
                Attention to Detail
              </h3>
              <p className="text-xs font-light text-white/60 leading-relaxed tracking-wide">
                From proportions and construction to material considerations and
                finishing details, we believe the small decisions matter.
              </p>
            </div>

            {/* 04 */}
            <div className="pt-6 border-t border-[#2a2a2a] opacity-0">
              <span className="font-serif text-2xl text-[#d4c5b9] block mb-3">
                04
              </span>
              <h3 className="font-serif text-base uppercase tracking-wider text-white mb-3">
                One Connected Partner
              </h3>
              <p className="text-xs font-light text-white/60 leading-relaxed tracking-wide">
                Design is closely connected to sourcing and manufacturing. Our
                integrated apparel capabilities help keep these stages aligned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section
        ref={testimonialSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-20 md:mb-28">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
              COLLABORATION
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              What Our{" "}
              <span className="italic text-[#d4c5b9]">Clients Say</span>
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
              The best partnerships are built on communication, consistency, and
              confidence in the process.
            </p>
          </div>

          {/* 3 cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {testimonials.map((item, idx) => (
              <div
                key={item.name}
                ref={(el) => (testimonialCardsRef.current[idx] = el)}
                className="p-8 border border-[#2a2a2a] bg-[#151515]/20 flex flex-col justify-between h-full opacity-0"
              >
                <div>
                  <span className="font-serif text-4xl text-[#d4c5b9] block mb-6 font-light">
                    &ldquo;
                  </span>
                  <p className="text-xs md:text-sm font-light text-white/75 leading-relaxed tracking-wide mb-8">
                    {item.quote}
                  </p>
                </div>
                <div className="border-t border-[#2a2a2a] pt-4 mt-auto">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#d4c5b9] mb-1">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. APPAREL DESIGN PROCESS SECTION */}
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
              Our Apparel{" "}
              <span className="italic text-[#d4c5b9]">Design Process</span>
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
              From the first conversation to a refined garment concept, we keep
              the design journey structured, collaborative, and focused.
            </p>
          </div>

          {/* Desktop horizontal timeline layout */}
          <div className="hidden md:block relative w-full pt-12 pb-8">
            {/* Progress lines */}
            <div className="absolute top-12 left-[10%] right-[10%] h-[1px] bg-white/10 z-0" />
            <div
              ref={progressLineRef}
              className="absolute top-12 left-[10%] h-[1px] bg-[#d4c5b9] z-10 origin-left"
              style={{ width: "0%" }}
            />

            <div className="grid grid-cols-5 gap-6 relative z-20">
              {designProcessSteps.map((item, idx) => (
                <div
                  key={item.num}
                  ref={(el) => (desktopProcessStepsRef.current[idx] = el)}
                  className="desktop-process-step flex flex-col items-center text-center px-2"
                >
                  {/* Node Dot */}
                  <div className="w-6 h-6 rounded-full bg-black border border-[#2a2a2a] flex items-center justify-center mb-8">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d4c5b9]" />
                  </div>

                  <span className="font-mono text-xs text-[#d4c5b9] mb-3">
                    {item.num}
                  </span>
                  <h3 className="font-serif text-xs uppercase tracking-wider text-white mb-3 font-normal">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-light text-white/50 leading-relaxed tracking-wide">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile vertical timeline layout */}
          <div className="block md:hidden relative pl-8 py-4">
            {/* Progress lines */}
            <div className="absolute left-[7px] top-0 bottom-0 w-[1px] bg-white/10 z-0" />
            <div
              ref={mobileProgressLineRef}
              className="absolute left-[7px] top-0 w-[1px] bg-[#d4c5b9] z-10 origin-top"
              style={{ height: "0%" }}
            />

            <div className="flex flex-col space-y-12">
              {designProcessSteps.map((item, idx) => (
                <div
                  key={item.num}
                  ref={(el) => (mobileProcessStepsRef.current[idx] = el)}
                  className="mobile-process-step relative flex flex-col items-start"
                >
                  {/* Node Dot */}
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
                  <p className="text-xs font-light text-white/60 leading-relaxed tracking-wide">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. APPAREL DEVELOPMENT TIMELINE (BROADER JOURNEY) */}
      <section
        ref={devSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-20 md:mb-28">
            <span className="text-[10px] uppercase tracking-widest text-[#d4c5b9] font-mono mb-4 block">
              DEVELOPMENT ROADMAP
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              A streamlined path <br />
              <span className="italic text-[#d4c5b9]">
                to bring your vision to life.
              </span>
            </h2>
            <p className="text-sm font-light text-white/70 leading-relaxed tracking-wide">
              Our apparel development process connects creative thinking with
              practical product development &mdash; helping move your idea from
              concept toward a garment that is ready for the next stage.
            </p>
          </div>

          {/* Broad Journey Roadmap Visual Node list */}
          <div className="flex flex-col space-y-6 md:space-y-8 max-w-4xl">
            {devJourneyList.map((node, idx) => (
              <div
                key={node.name}
                ref={(el) => (devNodesRef.current[idx] = el)}
                className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#1f1f1f] pb-4 group opacity-0"
              >
                <div className="flex items-center space-x-6">
                  <span className="font-mono text-xs text-[#d4c5b9] w-8">
                    0{idx + 1}
                  </span>
                  <h4 className="font-serif text-base text-white group-hover:text-[#d4c5b9] transition-colors font-light uppercase">
                    {node.name}
                  </h4>
                </div>
                <p className="text-xs font-light text-white/50 tracking-wide mt-2 sm:mt-0 sm:max-w-md leading-relaxed text-left sm:text-right">
                  {node.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="relative w-full bg-[#111111] border-t border-[#2a2a2a] py-24 md:py-36 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d4c5b9] mb-6 font-mono">
            COLLABORATE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-8 leading-tight">
            Have an Idea for Your <br />
            <span className="italic text-[#d4c5b9]">Next Collection?</span>
          </h2>
          <p className="text-xs md:text-sm font-light text-white/50 tracking-wide max-w-md mx-auto mb-12 leading-relaxed">
            Let's turn your vision into thoughtfully developed apparel with a
            clear path toward production.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/inquire"
              className="w-full sm:w-auto bg-[#faf9f6] text-black px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#d4c5b9] transition-all duration-500 hover:-translate-y-0.5 cursor-pointer text-center"
            >
              Work with us
            </Link>
            <Link
              to="/inquire"
              className="w-full sm:w-auto border border-white/20 bg-black/40 hover:bg-[#d4c5b9] hover:text-black hover:border-white px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 hover:-translate-y-0.5 cursor-pointer text-center"
            >
              Start an Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClothingDesign;
