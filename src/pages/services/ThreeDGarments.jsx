import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsap } from "../../hooks/useGsap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Box,
  Palette,
  Image as ImageIcon,
  Play,
  FileText,
  Layers,
  Shapes,
  RefreshCw,
} from "lucide-react";

import heroBg from "../../assets/hero.png";
import why1Img from "../../assets/about_detail.jpg";
import why2Img from "../../assets/about_main.jpg";
import why3Img from "../../assets/cat_jacket.jpg";
import why4Img from "../../assets/about_detail.jpg";
import ctaBg from "../../assets/hero.png";

export const ThreeDGarments = () => {
  const containerRef = useRef(null);

  // Hero Refs
  const heroRef = useRef(null);
  const heroBgRef = useRef(null);
  const heroEyebrowRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroDescRef = useRef(null);
  const heroBtnRef = useRef(null);

  // Why Choose Refs
  const whySectionRef = useRef(null);
  const whyHeadingRef = useRef(null);
  const whyCardsRef = useRef([]);

  // Offer Section Refs
  const offerSectionRef = useRef(null);
  const offerCardsRef = useRef([]);

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
      // 2. WHY CHOOSE 3D STAGGERED REVEALS
      // ----------------------------------------------------
      if (whySectionRef.current) {
        gsap.fromTo(
          whyHeadingRef.current.querySelectorAll(".why-title-anim"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: whySectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          },
        );

        gsap.fromTo(
          whyCardsRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: whySectionRef.current,
              start: "top 65%",
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
          { y: 30, opacity: 0 },
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

  const whyChooseBenefits = [
    {
      num: "01",
      title: "Design Your Collection in 3D",
      desc: "Visualize silhouettes, proportions, garment details, and overall design direction in a digital environment before committing to physical samples.",
      video: "/vid-1.mp4",
    },
    {
      num: "02",
      title: "3D Renderings for Marketing & Pre-Orders",
      desc: "Create polished garment visuals that can help brands present upcoming products for marketing, collection previews, buyer discussions, and pre-order campaigns.",
      video: "/vid-2.mp4",
    },
    {
      num: "03",
      title: "Reduce Wastage & Unnecessary Sampling Rounds",
      desc: "Review design directions digitally before moving further into physical development, helping teams identify visual changes and explore alternatives earlier in the process.",
      video: "/vid-3.mp4",
    },
    {
      num: "04",
      title: "Better Collaboration Between Designers, Manufacturers & Brands",
      desc: "Use realistic 3D visuals as a shared reference that makes it easier for designers, brands, and manufacturing teams to discuss garment details and visual direction.",
      video: "/vid-4.mp4",
    },
  ];

  const whatWeOffer = [
    {
      num: "01",
      title: "True-to-Life 3D Mockups",
      icon: Box,
      desc: "Create realistic digital garments with attention to fabric textures, drape, fit, construction, and overall garment appearance.",
    },
    {
      num: "02",
      title: "Multiple Colorways & Prints Preview",
      icon: Palette,
      desc: "Explore different color directions, prints, and visual variations digitally so teams can compare options before moving further into development.",
    },
    {
      num: "03",
      title: "Customized Backgrounds & Marketing Renders",
      icon: ImageIcon,
      desc: "Create presentation-ready renders with customized environments and backgrounds suited to campaign concepts, product presentations, or collection previews.",
    },
    {
      num: "04",
      title: "3D Videos & Animations",
      label: "OPTIONAL",
      icon: Play,
      desc: "Bring garments to life with optional motion-based presentations, rotating product views, and animated 3D visuals for enhanced presentations.",
    },
  ];

  const getStartedSteps = [
    {
      num: "01",
      title: "Share Tech Pack or Sketch",
      icon: FileText,
      desc: "Start with your available tech pack, technical sketch, reference images, or design concept so we can understand the intended garment.",
    },
    {
      num: "02",
      title: "Fabric & Trim Selection",
      label: "REAL TEXTURES",
      icon: Layers,
      desc: "Provide fabric, trim, color, and material references so the 3D garment can represent the intended visual character as realistically as possible.",
    },
    {
      num: "03",
      title: "3D Prototype Creation",
      icon: Shapes,
      desc: "We build the garment digitally, applying the available design, material, construction, and visual information to create a realistic 3D prototype.",
    },
    {
      num: "04",
      title: "Review & Revise",
      icon: RefreshCw,
      desc: "Review the digital prototype and share feedback so the garment visualization can be refined according to the agreed project requirements.",
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
            src="https://i.pinimg.com/736x/bb/a9/66/bba9662c8a1bd355f58d6849e376ce82.jpg"
            alt="3D digital garment visualization for apparel design"
            className="w-full h-full object-cover object-center opacity-0"
          />
          <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-4xl px-6 text-center mt-12">
          <p
            ref={heroEyebrowRef}
            className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d4c5b9] mb-6 font-mono opacity-0"
          >
            DIGITAL APPAREL DEVELOPMENT
          </p>
          <h1
            ref={heroHeadingRef}
            className="font-serif text-3xl sm:text-5xl md:text-7xl font-light uppercase leading-[1.1] tracking-tight text-white mb-8 opacity-0"
          >
            Revolutionize Your Clothing Line <br />
            with{" "}
            <span className="italic text-[#d4c5b9]">3D Garment Design</span>
          </h1>
          <p
            ref={heroDescRef}
            className="text-xs md:text-sm font-light text-white/70 tracking-wide max-w-2xl mx-auto mb-10 leading-relaxed opacity-0"
          >
            Visualize your garments before physical sampling with realistic 3D
            designs that help brands explore fit, fabrics, colors, and
            presentation with greater clarity.
          </p>
          <div ref={heroBtnRef} className="opacity-0">
            <Link
              to="/inquire"
              className="border border-[#faf9f6]/25 bg-[#faf9f6] text-black hover:bg-[#d4c5b9] px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 hover:-translate-y-0.5 cursor-pointer"
            >
              Request a 3D Sample
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE 3D GARMENT DESIGN */}
      <section
        ref={whySectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]/30"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div ref={whyHeadingRef} className="max-w-3xl mb-20 md:mb-28">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d4c5b9] mb-6 font-mono why-title-anim opacity-0">
              WHY 3D?
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6 why-title-anim opacity-0">
              Why Choose 3D Garment Design?
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed why-title-anim opacity-0">
              3D garment visualization allows brands to explore apparel concepts
              digitally before moving into physical sampling. It creates a more
              visual way to review designs, communicate ideas, and prepare
              collections.
            </p>
          </div>

          {/* Grid Layout 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {whyChooseBenefits.map((item, idx) => (
              <div
                key={item.num}
                ref={(el) => (whyCardsRef.current[idx] = el)}
                className="group flex flex-col border border-[#2a2a2a] bg-[#151515]/20 p-6 hover:border-[#d4c5b9]/30 transition-all duration-500 opacity-0"
              >
                <div className="overflow-hidden aspect-[16/10] bg-zinc-900 border border-white/5 mb-6 relative">
                  <video
                    src={item.video}
                    alt="3D digital garment visualization for apparel design"
                    className="w-full h-full object-cover object-center"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </div>
                <span className="font-mono text-xs text-[#d4c5b9] block mb-2">
                  {item.num}
                </span>
                <h3 className="font-serif text-lg uppercase tracking-wider text-white group-hover:text-[#d4c5b9] transition-colors mb-3 font-normal">
                  {item.title}
                </h3>
                <p className="text-xs font-light text-white/55 leading-relaxed tracking-wide">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER IN 3D GARMENT DESIGN */}
      <section
        ref={offerSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]/30"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-20 md:mb-28">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
              CAPABILITIES
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              What We Offer{" "}
              <span className="italic text-[#d4c5b9]">
                in 3D Garment Design Services
              </span>
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
              From realistic garment visualization to presentation-ready assets,
              our 3D design services help brands explore and communicate apparel
              concepts with greater visual clarity.
            </p>
          </div>

          {/* Grid loop of 4 icon-based points */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatWeOffer.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.num}
                  ref={(el) => (offerCardsRef.current[idx] = el)}
                  className="group flex flex-col p-6 border border-[#2a2a2a] bg-[#151515]/20 hover:border-[#d4c5b9]/30 transition-all duration-300 hover:-translate-y-0.5 opacity-0"
                >
                  <div className="w-12 h-12 border border-[#d4c5b9]/30 bg-black flex items-center justify-center mb-6 transition-colors duration-300 group-hover:border-[#d4c5b9]">
                    <IconComponent className="w-5 h-5 text-[#d4c5b9] transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-white/40">
                      {item.num}
                    </span>
                    {item.label && (
                      <span className="font-mono text-[8px] px-2 py-0.5 bg-white/5 border border-white/10 text-[#d4c5b9] rounded-sm">
                        {item.label}
                      </span>
                    )}
                  </div>
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

      {/* 4. HOW CAN YOU GET STARTED TIMELINE */}
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
              How Can You Get Started <br />
              <span className="italic text-[#d4c5b9]">
                with 3D Garment Designing for Your Brand?
              </span>
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
              Bring your design references, technical information, and material
              direction together. We turn those inputs into a realistic 3D
              garment prototype that can be reviewed and refined digitally.
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
              {getStartedSteps.map((item, idx) => {
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
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="font-mono text-xs text-[#d4c5b9]">
                        {item.num}
                      </span>
                      {item.label && (
                        <span className="font-mono text-[8px] text-white/40 uppercase tracking-widest">
                          [{item.label}]
                        </span>
                      )}
                    </div>
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
              {getStartedSteps.map((item, idx) => {
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
                      {item.label && (
                        <span className="font-mono text-[8px] text-[#d4c5b9]/70 uppercase tracking-widest">
                          [{item.label}]
                        </span>
                      )}
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
            alt="Premium realistic 3D garment textile visualization close-up"
            className="w-full h-full object-cover object-center scale-105"
            loading="lazy"
          />
        </div>

        <div className="relative z-10 max-w-3xl px-6 mx-auto">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d4c5b9] mb-6 font-mono">
            COLLABORATE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-8 leading-tight">
            See Your Garment <br />
            <span className="italic text-[#d4c5b9]">Before You Make It.</span>
          </h2>
          <p className="text-xs md:text-sm font-light text-white/50 tracking-wide max-w-md mx-auto mb-12 leading-relaxed">
            Bring your design concept to life with realistic 3D garment
            visualization designed to support development, collaboration, and
            presentation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/inquire"
              className="w-full sm:w-auto bg-[#faf9f6] text-black px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#d4c5b9] transition-all duration-500 hover:-translate-y-0.5 cursor-pointer text-center"
            >
              Request a 3D Sample
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

export default ThreeDGarments;
