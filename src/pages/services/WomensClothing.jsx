import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGsap } from "../../hooks/useGsap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SlidersHorizontal,
  Globe2,
  TrendingUp,
  ArrowRight,
  FileText,
  Layers,
  Scissors,
  Factory,
  Plus,
  Minus,
} from "lucide-react";

import ctaBg from "../../assets/hero.png";

export const WomensClothing = () => {
  const containerRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState(null);

  // Hero Refs
  const heroRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroEyebrowRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroDescRef = useRef(null);
  const heroBtnRef = useRef(null);

  // Simple sections
  const partnerSectionRef = useRef(null);
  const setsApartSectionRef = useRef(null);
  const capabilitiesSectionRef = useRef(null);
  const statementSectionRef = useRef(null);
  const customizeSectionRef = useRef(null);
  const processSectionRef = useRef(null);
  const faqSectionRef = useRef(null);

  // Sets Apart Cards Refs
  const setsApartCardsRef = useRef([]);
  // Capabilities Cards Refs
  const capabilityCardsRef = useRef([]);
  // Process timeline Refs
  const progressLineRef = useRef(null);
  const mobileProgressLineRef = useRef(null);
  const desktopProcessStepsRef = useRef([]);
  const mobileProcessStepsRef = useRef([]);
  // FAQ Items Refs
  const faqItemsRef = useRef([]);

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
      // 2. STRATEGIC PARTNER DESCRIPTION REVEAL
      // ----------------------------------------------------
      if (partnerSectionRef.current) {
        gsap.fromTo(
          partnerSectionRef.current.querySelectorAll(".partner-anim"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: partnerSectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 3. WHAT SETS US APART CARDS STAGGER
      // ----------------------------------------------------
      if (setsApartSectionRef.current) {
        gsap.fromTo(
          setsApartCardsRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: setsApartSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 4. CAPABILITIES CARDS REVEALS
      // ----------------------------------------------------
      if (capabilitiesSectionRef.current) {
        gsap.fromTo(
          capabilityCardsRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: capabilitiesSectionRef.current,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 5. MANIFESTO STATEMENT REVEAL
      // ----------------------------------------------------
      if (statementSectionRef.current) {
        gsap.fromTo(
          statementSectionRef.current.querySelectorAll(".statement-anim"),
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statementSectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 6. FABRIC CUSTOMIZATION REVEALS
      // ----------------------------------------------------
      if (customizeSectionRef.current) {
        gsap.fromTo(
          customizeSectionRef.current.querySelector(".custom-img-frame"),
          { clipPath: "inset(0% 100% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: customizeSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          customizeSectionRef.current.querySelector(".custom-img"),
          { scale: 1.05 },
          {
            scale: 1.0,
            duration: 1.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: customizeSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          customizeSectionRef.current.querySelectorAll(".custom-text-anim"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: customizeSectionRef.current,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 7. MANUFACTURING PROCESS TIMELINE SCROLL DRAW
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

      // ----------------------------------------------------
      // 8. FAQ ACCORDION REVEAL
      // ----------------------------------------------------
      if (faqSectionRef.current) {
        gsap.fromTo(
          faqItemsRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: faqSectionRef.current,
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

  const differentiators = [
    {
      num: "01",
      title: "Full Customization Support",
      icon: SlidersHorizontal,
      desc: "From garment construction and fabric selection to prints, embellishments, trims, and finishing details, we support brands in developing products around their specific design direction.",
    },
    {
      num: "02",
      title: "Global Delivery + Logistics Support",
      icon: Globe2,
      desc: "Support the movement of finished apparel from production toward global destinations with a process designed around coordination, documentation, and delivery requirements.",
    },
    {
      num: "03",
      title: "Scalable Productions",
      icon: TrendingUp,
      desc: "Whether developing an initial collection or preparing for larger production runs, our manufacturing approach is designed to support brands as their product requirements evolve.",
    },
  ];

  const capabilities = [
    {
      num: "01",
      title: "Dress Manufacturing",
      desc: "Develop and manufacture women's dresses across different silhouettes, fabric directions, construction details, and finishing requirements.",
      img: "/Shirt.jpeg",
    },
    {
      num: "02",
      title: "High-End Garments",
      desc: "Support premium womenswear collections where construction, fabric quality, detailing, finishing, and presentation require close attention throughout development and production.",
      img: "https://images.unsplash.com/photo-1702974982510-9de683e524c2?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      num: "03",
      title: "Jerseywear",
      desc: "Manufacture women's jersey apparel with attention to fabric behavior, garment construction, fit, finishing, and production consistency.",
      img: "/Top.jpeg",
    },
  ];

  const manufacturingSteps = [
    {
      num: "01",
      title: "Submit Your Tech Packs",
      icon: FileText,
      desc: "Share your tech packs, sketches, specifications, references, or other available product information so we can understand the garment requirements.",
    },
    {
      num: "02",
      title: "Material & Trim Sourcing",
      icon: Layers,
      desc: "Identify suitable fabrics, trims, components, and material directions based on the requirements of your garments and collection.",
    },
    {
      num: "03",
      title: "Sample Development",
      icon: Scissors,
      desc: "Move from specifications toward physical samples, allowing the garment's construction, fit, materials, and finishing details to be reviewed and refined.",
    },
    {
      num: "04",
      title: "Bulk Production & Delivery",
      icon: Factory,
      desc: "Once the product direction is approved, production moves into the bulk manufacturing stage followed by coordination toward final delivery.",
    },
  ];

  const faqs = [
    {
      q: "What types of women's apparel does KAY TEX EXPORTERS manufacture?",
      a: "KAY TEX EXPORTERS focuses on womenswear and can support categories such as dresses, premium garments, and jerseywear, depending on the product requirements.",
    },
    {
      q: "Can I customize my garments?",
      a: "Yes. Garments can be developed around your design direction, including fabric choices, construction details, prints, embellishments, trims, and finishing requirements.",
    },
    {
      q: "Can KAY TEX EXPORTERS help with fabric sourcing?",
      a: "Yes. KAY TEX EXPORTERS provides fabric sourcing and customization support as part of the apparel development process. You can explore our fabric sourcing services for more detailed information.",
    },
    {
      q: "Can you manufacture for international clothing brands?",
      a: "KAY TEX EXPORTERS works with apparel brands developing products for global markets, with a focus on coordinated product development and manufacturing.",
    },
    {
      q: "Can you help with sampling before bulk production?",
      a: "Yes. Sample development is an important stage of the manufacturing process and allows the garment to be reviewed and refined before moving toward bulk production.",
    },
    {
      q: "Do you support scalable production?",
      a: "KAY TEX EXPORTERS's manufacturing approach is designed to support brands as their production requirements evolve. Specific production capabilities depend on the product and project requirements.",
    },
    {
      q: "How do I start a manufacturing project with KAY TEX EXPORTERS?",
      a: "Start by sharing your tech pack, sketches, references, or product requirements through our inquiry form. The KAY TEX EXPORTERS team can then understand your project and discuss the next steps.",
    },
    {
      q: "Can KAY TEX EXPORTERS support delivery and logistics?",
      a: "KAY TEX EXPORTERS can support coordination around delivery and logistics requirements as part of the manufacturing process. Specific arrangements depend on the project and destination.",
    },
  ];

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

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
            src="https://images.unsplash.com/photo-1618587194716-40490bdba417?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Women's apparel premium manufacturing and production"
            className="w-full h-full object-cover object-center opacity-0"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center mt-12">
          <p
            ref={heroEyebrowRef}
            className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d4c5b9] mb-6 font-mono opacity-0"
          >
            WOMENSWEAR MANUFACTURING
          </p>
          <h1
            ref={heroHeadingRef}
            className="font-serif text-3xl sm:text-5xl md:text-7xl font-light uppercase leading-[1.1] tracking-tight text-white mb-8 opacity-0"
          >
            We Manufacture and Export Women's Apparel <br />
            for Global{" "}
            <span className="italic text-[#d4c5b9]">Clothing Brands</span>
          </h1>
          <p
            ref={heroDescRef}
            className="text-xs md:text-sm font-light text-white/70 tracking-wide max-w-3xl mx-auto mb-10 leading-relaxed opacity-0"
          >
            From product development to bulk production, KAY TEX EXPORTERS works
            with womenswear brands to bring thoughtfully designed garments into
            production with consistency, flexibility, and a focus on long-term
            growth.
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

      {/* 2. STRATEGIC CLOTHING PARTNER */}
      <section
        ref={partnerSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]/30"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#d4c5b9] font-mono mb-6 partner-anim opacity-0">
            OUR APPROACH
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-8 leading-tight partner-anim opacity-0">
            We Are Your Strategic Clothing Partner
          </h2>
          <p className="text-sm font-light text-white/70 leading-relaxed tracking-wide partner-anim opacity-0">
            KAY TEX EXPORTERS works alongside womenswear brands to connect
            product development, materials, manufacturing, and production into a
            more coordinated journey. Our focus is to support brands beyond
            individual orders and build relationships that can grow with their
            collections.
          </p>
        </div>
      </section>

      {/* 3. WHAT SETS US APART */}
      <section
        ref={setsApartSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]/30"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
              From customization to production scale, we structure our
              manufacturing support around the practical needs of growing
              womenswear brands.
            </p>
          </div>

          {/* Cards loop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.num}
                  ref={(el) => (setsApartCardsRef.current[idx] = el)}
                  className="group p-8 border border-[#2a2a2a] bg-[#151515]/20 flex flex-col justify-between hover:border-[#d4c5b9]/30 hover:-translate-y-1 transition-all duration-300 opacity-0"
                >
                  <div className="w-12 h-12 border border-[#d4c5b9]/30 bg-black flex items-center justify-center mb-8 transition-colors duration-300 group-hover:border-[#d4c5b9]">
                    <IconComp className="w-5 h-5 text-[#d4c5b9] transition-transform duration-300 group-hover:-translate-y-0.5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#d4c5b9] block mb-2">
                      {item.num}
                    </span>
                    <h3 className="font-serif text-base uppercase tracking-wider text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-xs font-light text-white/50 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WOMENSWEAR CAPABILITIES */}
      <section
        ref={capabilitiesSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]/30"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-20">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              Our Womenswear{" "}
              <span className="italic text-[#d4c5b9]">
                Manufacturing Capabilities
              </span>
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
              We manufacture across a range of womenswear categories, combining
              garment development, material choices, construction, finishing,
              and production requirements to support diverse collection
              directions.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((item, idx) => (
              <div
                key={item.num}
                ref={(el) => (capabilityCardsRef.current[idx] = el)}
                className="group flex flex-col border border-[#2a2a2a] bg-[#151515]/20 p-6 hover:-translate-y-1 hover:border-[#d4c5b9]/30 transition-all duration-500 opacity-0"
              >
                <div className="overflow-hidden aspect-[4/3] bg-zinc-900 border border-white/5 mb-6 relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-all duration-[1s]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </div>
                <span className="font-mono text-xs text-[#d4c5b9] block mb-2">
                  {item.num}
                </span>
                <h3 className="font-serif text-lg uppercase tracking-wider text-white mb-3 font-normal">
                  {item.title}
                </h3>
                <p className="text-xs font-light text-white/50 leading-relaxed mb-6">
                  {item.desc}
                </p>
                <span className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-mono text-[#d4c5b9] mt-auto">
                  <span>Explore {item.title.split(" ")[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STRATEGIC MANUFACTURING STATEMENT (Black Manifesto) */}
      <section
        ref={statementSectionRef}
        className="relative w-full bg-[#000000] px-6 md:px-12 py-28 md:py-36 text-center border-t border-b border-[#111]"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-light uppercase tracking-wide text-[#faf9f6] leading-relaxed statement-anim opacity-0">
            "We are a strategic manufacturing partner for womenswear brands,
            built to support long-term growth with consistent quality and
            scalable production."
          </h2>
        </div>
      </section>

      {/* 6. FABRIC CUSTOMIZATION SECTION */}
      <section
        ref={customizeSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36"
      >
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left image frame */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-start">
            <div
              className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl custom-img-frame"
              style={{ clipPath: "inset(0% 100% 0% 0%)" }}
            >
              <img
                src="https://images.unsplash.com/photo-1451928803901-7357a9e01215?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover object-center custom-img"
                alt="Women's fashion fabric customization and detailing"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />
            </div>
          </div>

          {/* Right narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[9px] uppercase tracking-widest text-[#d4c5b9] font-mono mb-4 custom-text-anim opacity-0">
              TEXTILE BESPOKE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light uppercase tracking-tight text-white mb-6 leading-tight custom-text-anim opacity-0">
              From Print to Embellishment &mdash; <br />
              You Can Fully{" "}
              <span className="italic text-[#d4c5b9]">
                Customize the Fabric
              </span>
            </h2>
            <p className="text-xs md:text-sm font-light text-white/70 leading-relaxed tracking-wide mb-8 custom-text-anim opacity-0">
              Bring your fabric concept closer to the final garment with
              customization options across prints, dyeing, surface treatments,
              embellishments, and other textile development details.
            </p>
            <div className="custom-text-anim opacity-0">
              <Link
                to="/services/fabric-sourcing"
                className="inline-flex border border-[#faf9f6]/25 bg-[#faf9f6] text-black hover:bg-[#d4c5b9] px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 hover:-translate-y-0.5 cursor-pointer"
              >
                Explore Fabric Sourcing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUR 4-STEP MANUFACTURING PROCESS */}
      <section
        ref={processSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]/30"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-20 md:mb-28">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
              WORKFLOW
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              Our 4-Step{" "}
              <span className="italic text-[#d4c5b9]">
                Manufacturing Process
              </span>
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
              From the first technical reference to finished garments, our
              manufacturing workflow keeps the key stages organized,
              transparent, and connected.
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
              {manufacturingSteps.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.num}
                    ref={(el) => (desktopProcessStepsRef.current[idx] = el)}
                    className="desktop-process-step flex flex-col items-center text-center px-2 opacity-0"
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
              {manufacturingSteps.map((item, idx) => {
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

      {/* 8. FAQ SECTION */}
      <section
        ref={faqSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]/30"
      >
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-20">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
              FAQ
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed max-w-2xl mx-auto">
              Answers to common questions about our womenswear manufacturing
              process.
            </p>
          </div>

          {/* Accordion List */}
          <div className="flex flex-col space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  ref={(el) => (faqItemsRef.current[idx] = el)}
                  className="border-b border-[#2a2a2a] pb-4 opacity-0"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left py-4 hover:text-[#d4c5b9] transition-colors focus:outline-none group"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                  >
                    <span className="font-serif text-sm md:text-base uppercase tracking-wider text-white font-light group-hover:text-[#d4c5b9] transition-colors">
                      {faq.q}
                    </span>
                    <span className="text-[#d4c5b9] pl-4">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${idx}`}
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-xs md:text-sm font-light text-white/60 leading-relaxed tracking-wide">
                      {faq.a}
                      {idx === 2 && (
                        <>
                          {" "}
                          You can{" "}
                          <Link
                            to="/services/fabric-sourcing"
                            className="text-[#d4c5b9] hover:underline font-mono text-xs"
                          >
                            Explore Fabric Sourcing
                          </Link>{" "}
                          for more details.
                        </>
                      )}
                      {idx === 6 && (
                        <>
                          {" "}
                          Please{" "}
                          <Link
                            to="/inquire"
                            className="text-[#d4c5b9] hover:underline font-mono text-xs"
                          >
                            Connect Today
                          </Link>{" "}
                          to start your brief.
                        </>
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="relative w-full bg-[#111111] border-t border-[#2a2a2a] py-24 md:py-36 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src={ctaBg}
            alt="Premium women's clothing apparel customized development"
            className="w-full h-full object-cover object-center scale-105"
            loading="lazy"
          />
        </div>

        <div className="relative z-10 max-w-3xl px-6 mx-auto">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d4c5b9] mb-6 font-mono">
            COLLABORATE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-8 leading-tight">
            Ready to Build Your Next <br />
            <span className="italic text-[#d4c5b9]">
              Womenswear Collection?
            </span>
          </h2>
          <p className="text-xs md:text-sm font-light text-white/50 tracking-wide max-w-md mx-auto mb-12 leading-relaxed">
            Share your product requirements with KAY TEX EXPORTERS and let's
            explore how we can support your next manufacturing project.
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

export default WomensClothing;
