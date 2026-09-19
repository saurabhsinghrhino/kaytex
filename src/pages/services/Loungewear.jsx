import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGsap } from "../../hooks/useGsap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  PenTool,
  Search,
  Scissors,
  Tag,
  Workflow,
  Globe2,
  Leaf,
  Layers3,
  Sparkles,
  ClipboardList,
  Factory,
  CheckCircle,
  Plus,
  Minus,
} from "lucide-react";

import cat1Img from "../../assets/about_main.jpg";
import cat2Img from "../../assets/about_detail.jpg";
import cat3Img from "../../assets/cat_jacket.jpg";
import cat4Img from "../../assets/hero.png";
import cat5Img from "../../assets/about_main.jpg";
import cat6Img from "../../assets/about_detail.jpg";
import ctaBg from "../../assets/hero.png";

export const Loungewear = () => {
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
  const statementSectionRef = useRef(null);
  const counterSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const fabricSectionRef = useRef(null);
  const whyIndiaSectionRef = useRef(null);
  const categoriesSectionRef = useRef(null);
  const processSectionRef = useRef(null);
  const faqSectionRef = useRef(null);

  // Cards Refs
  const serviceCardsRef = useRef([]);
  const fabricCardsRef = useRef([]);
  const categoryCardsRef = useRef([]);
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
      // 2. BRAND STATEMENT REVEAL
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
            stagger: 0.15,
            scrollTrigger: {
              trigger: statementSectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 3. QUALITATIVE COUNTERS REVEAL
      // ----------------------------------------------------
      if (counterSectionRef.current) {
        gsap.fromTo(
          counterSectionRef.current.children,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: counterSectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 4. END-TO-END SERVICES CARDS STAGGER
      // ----------------------------------------------------
      if (servicesSectionRef.current) {
        gsap.fromTo(
          serviceCardsRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: servicesSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 5. CHOOSE FABRIC CARDS REVEALS
      // ----------------------------------------------------
      if (fabricSectionRef.current) {
        gsap.fromTo(
          fabricCardsRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: fabricSectionRef.current,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 6. WHY INDIA TYPOGRAPHY REVEAL
      // ----------------------------------------------------
      if (whyIndiaSectionRef.current) {
        gsap.fromTo(
          whyIndiaSectionRef.current.querySelectorAll(".india-anim"),
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: whyIndiaSectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 7. PRODUCT CATEGORIES SHOWCASE STAGGER
      // ----------------------------------------------------
      if (categoriesSectionRef.current) {
        gsap.fromTo(
          categoryCardsRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: categoriesSectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // ----------------------------------------------------
      // 8. LOUNGEWEAR PROCESS TIMELINE SCROLL DRAW
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
      // 9. FAQ ACCORDION REVEAL
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

  const loungewearServices = [
    {
      num: "01",
      title: "Design and Development",
      icon: PenTool,
      desc: "Turn your product ideas, sketches, references, or technical specifications into loungewear concepts prepared for development and production.",
    },
    {
      num: "02",
      title: "Fabric & Fiber Sourcing",
      icon: Search,
      desc: "Explore suitable fibers, knitted structures, woven fabrics, weights, textures, and finishes based on the comfort and performance requirements of your collection.",
    },
    {
      num: "03",
      title: "Sampling & Prototyping",
      icon: Scissors,
      desc: "Develop physical samples to review garment construction, fabric behavior, fit, finishing, and overall product direction before bulk production.",
    },
    {
      num: "04",
      title: "Private Label Branding",
      icon: Tag,
      desc: "Support your brand identity with customized labels, trims, packaging elements, and other approved branding details.",
    },
    {
      num: "05",
      title: "Seamless Production",
      icon: Workflow,
      desc: "Coordinate the journey from approved samples into organized bulk production with attention to consistency, materials, construction, and finishing.",
    },
    {
      num: "06",
      title: "Global Shipping Support",
      icon: Globe2,
      desc: "Support coordination around the movement of finished apparel toward international destinations based on the requirements of each project.",
    },
  ];

  const fabricOptions = [
    {
      num: "01",
      title: "Fibers",
      icon: Leaf,
      desc: "Select from fibers such as cotton, linen, bamboo, modal, rayon, viscose, Tencel, blends, and organic fabric options based on your product requirements.",
      img: "https://i.pinimg.com/736x/f8/ba/c8/f8bac8c0c294feb3a717e54faf9557fc.jpg",
    },
    {
      num: "02",
      title: "Fabrics",
      icon: Layers3,
      desc: "Explore fabric structures such as single jersey, interlock, waffle knit, French terry, polar fleece, rib knit, and woven fabrics depending on the desired garment and hand feel.",
      img: "https://i.pinimg.com/736x/0a/a6/78/0aa6787498360b61f90f0a69f6cf5b61.jpg",
    },
    {
      num: "03",
      title: "Finishes",
      icon: Sparkles,
      desc: "Explore finishing options such as sueding, softener washes, double brushing, and other treatments designed to influence softness, hand feel, appearance, and overall garment character.",
      img: "https://i.pinimg.com/736x/71/50/6d/71506ddea583d06f09d37c6817b947d9.jpg",
    },
  ];

  const categoryShowcase = [
    {
      num: "01",
      title: "Joggers & Pajama Sets",
      desc: "Comfort-focused separates and coordinated sets designed for relaxed everyday wear.",
      img: "https://i.pinimg.com/1200x/6a/66/bd/6a66bdd08cb1506f86c752709e1cf53a.jpg",
    },
    {
      num: "02",
      title: "Sweatshirts & Hoodies",
      desc: "Versatile fleece and knit layers developed around comfort, construction, and brand-specific details.",
      img: "https://i.pinimg.com/736x/ea/35/ea/ea35eacaa38864ce225613339569745b.jpg",
    },
    {
      num: "03",
      title: "Tops, Tees & Camisoles",
      desc: "Lightweight everyday essentials developed across suitable jersey and woven fabric options.",
      img: "https://i.pinimg.com/736x/7b/18/ad/7b18ad5395d9f93326734da9cc711061.jpg",
    },
    {
      num: "04",
      title: "Sleepwear Sets",
      desc: "Coordinated sleepwear designed around softness, comfort, fit, and collection aesthetics.",
      img: "https://i.pinimg.com/1200x/8b/01/e8/8b01e8f92fd28c73426c5f60c650183d.jpg",
    },
    {
      num: "05",
      title: "Maternity & Nursing Sets",
      desc: "Comfort-focused maternity and nursing apparel designed around practical wear ability and adaptable details.",
      img: "https://i.pinimg.com/1200x/e7/b6/f1/e7b6f120a05d7fe878ff9407c87b09c6.jpg",
    },
  ];

  const processWorkflow = [
    {
      num: "01",
      title: "Product Brief & Requirements",
      icon: ClipboardList,
      desc: "Share your designs, references, tech packs, product requirements, and target fabric direction so the project can be understood clearly from the beginning.",
    },
    {
      num: "02",
      title: "Fabric & Sample Development",
      icon: Layers3,
      desc: "Select suitable materials and develop samples to review fabric behavior, fit, construction, finishing, and overall product direction.",
    },
    {
      num: "03",
      title: "Approval & Bulk Production",
      icon: Factory,
      desc: "Once the product direction is approved, move into organized bulk production according to the agreed project requirements.",
    },
    {
      num: "04",
      title: "Finishing, Quality Review & Delivery",
      icon: CheckCircle,
      desc: "Complete finishing and quality review before coordinating the finished garments toward delivery.",
    },
  ];

  const faqs = [
    {
      q: "What types of loungewear does kaytex-EXPORTERS manufacture?",
      a: "kaytex-EXPORTERS can support a range of loungewear categories including joggers and pajama sets, sweatshirts and hoodies, tops and tees, sleepwear, kids' loungewear, and maternity or nursing sets, depending on the project requirements.",
    },
    {
      q: "Can I customize my loungewear designs?",
      a: "Yes. Loungewear can be developed around your design direction, including fabric choices, colors, prints, trims, labels, finishing details, and other approved customization requirements.",
    },
    {
      q: "What fabrics can I use for loungewear?",
      a: "Depending on the product requirements, fabric options may include single jersey, interlock, waffle knit, French terry, polar fleece, rib knit, woven fabrics, and different fiber compositions and blends.",
    },
    {
      q: "Can kaytex-EXPORTERS help with fabric sourcing?",
      a: "Yes. kaytex-EXPORTERS can support the sourcing and selection of suitable fibers, fabric structures, and finishing options based on the requirements of your collection.",
    },
    {
      q: "Do you offer private label loungewear manufacturing?",
      a: "kaytex-EXPORTERS can support private label development through approved branding elements such as labels, trims, and other brand-specific details depending on project requirements.",
    },
    {
      q: "Can kaytex-EXPORTERS manufacture for international brands?",
      a: "kaytex-EXPORTERS works with apparel brands seeking manufacturing support from India for loungewear and related product categories, depending on the project's requirements.",
    },
    {
      q: "Can I develop samples before bulk production?",
      a: "Yes. Sampling and prototyping are part of the development process, allowing product details, fabric behavior, fit, construction, and finishing to be reviewed before bulk production.",
    },
    {
      q: "How can I start a loungewear manufacturing project?",
      a: "Start by sharing your designs, tech packs, references, product requirements, or fabric direction through the kaytex-EXPORTERS inquiry form. The team can then understand your requirements and discuss the next steps.",
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
            src="https://i.pinimg.com/1200x/ba/57/77/ba5777cd3a34f50b4fdb11e2ae9706c6.jpg"
            alt="Premium loungewear custom manufacturing details"
            className="w-full h-full object-cover object-center opacity-0"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center mt-12">
          <p
            ref={heroEyebrowRef}
            className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d4c5b9] mb-6 font-mono opacity-0"
          >
            LOUNGEWEAR MANUFACTURING
          </p>
          <h1
            ref={heroHeadingRef}
            className="font-serif text-3xl sm:text-5xl md:text-7xl font-light uppercase leading-[1.1] tracking-tight text-white mb-8 opacity-0"
          >
            Premium Loungewear Manufacturer and Exporter <br />
            for Global{" "}
            <span className="italic text-[#d4c5b9]">Clothing Brands</span>
          </h1>
          <p
            ref={heroDescRef}
            className="text-xs md:text-sm font-light text-white/70 tracking-wide max-w-3xl mx-auto mb-10 leading-relaxed opacity-0"
          >
            From fabric selection and product development to sampling and bulk
            production, kaytex-EXPORTERS helps global brands develop premium
            loungewear designed around comfort, quality, and their unique brand
            direction.
          </p>
          <div ref={heroBtnRef} className="opacity-0">
            <Link
              to="/inquire"
              className="border border-[#faf9f6]/25 bg-[#faf9f6] text-black hover:bg-[#d4c5b9] px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 hover:-translate-y-0.5 cursor-pointer"
            >
              Start Production
            </Link>
          </div>
        </div>
      </section>

      {/* 2. BLACK BRAND / MANUFACTURING STATEMENT */}
      <section
        ref={statementSectionRef}
        className="relative w-full bg-[#000000] px-6 md:px-12 py-24 md:py-36 text-center border-t border-b border-[#111]"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-[9px] uppercase tracking-widest text-[#d4c5b9] font-mono mb-6 statement-anim opacity-0">
            ABOUT OUR LOUNGEWEAR CAPABILITY
          </p>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-light uppercase tracking-wide text-white leading-relaxed mb-6 statement-anim opacity-0">
            kaytex-EXPORTERS is a full-service loungewear manufacturer and
            export partner for global clothing brands.
          </h2>
          <p className="text-xs md:text-sm font-light text-white/60 leading-relaxed max-w-2xl mx-auto mb-6 statement-anim opacity-0">
            We specialize in producing high-quality, custom-designed loungewear
            across knit and woven fabrics, supporting apparel brands, retailers,
            and wholesalers looking for a reliable overseas manufacturing
            partner in India.
          </p>
          <p className="text-[10px] font-mono tracking-widest text-[#d4c5b9] uppercase statement-anim opacity-0">
            Supporting brands across international markets
          </p>
        </div>
      </section>

      {/* 3. kaytex COUNTER */}
      <section
        ref={counterSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-16 border-b border-[#2a2a2a]/30 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-7xl mx-auto"
      >
        <div className="p-4 border-r border-[#2a2a2a]/30 last:border-0 opacity-0">
          <span className="font-serif text-2xl md:text-3xl font-light text-white block mb-1">
            CUSTOM
          </span>
          <span className="text-[10px] uppercase tracking-widest text-white/50 font-mono">
            LOUNGEWEAR
          </span>
        </div>
        <div className="p-4 border-r border-[#2a2a2a]/30 last:border-0 opacity-0">
          <span className="font-serif text-2xl md:text-3xl font-light text-white block mb-1">
            KNIT + WOVEN
          </span>
          <span className="text-[10px] uppercase tracking-widest text-white/50 font-mono">
            FABRIC OPTIONS
          </span>
        </div>
        <div className="p-4 border-r border-[#2a2a2a]/30 last:border-0 opacity-0">
          <span className="font-serif text-2xl md:text-3xl font-light text-white block mb-1">
            PRIVATE LABEL
          </span>
          <span className="text-[10px] uppercase tracking-widest text-white/50 font-mono">
            BRAND SUPPORT
          </span>
        </div>
        <div className="p-4 last:border-0 opacity-0">
          <span className="font-serif text-2xl md:text-3xl font-light text-white block mb-1">
            GLOBAL
          </span>
          <span className="text-[10px] uppercase tracking-widest text-white/50 font-mono">
            MANUFACTURING
          </span>
        </div>
      </section>

      {/* 4. END-TO-END SERVICES */}
      <section
        ref={servicesSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]/30"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-20 md:mb-28">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
              RANGE
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              End-to-End Loungewear <br />
              <span className="italic text-[#d4c5b9]">
                Manufacturing Services
              </span>
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
              From the first product concept to finished garments, KAY TEX
              -EXPORTERS supports the key stages required to develop and
              manufacture loungewear for growing brands.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loungewearServices.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.num}
                  ref={(el) => (serviceCardsRef.current[idx] = el)}
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

      {/* 5. RIGHT FABRIC FOR YOUR BRAND */}
      <section
        ref={fabricSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]/30"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-20 md:mb-28">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
              MATERIALS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              We Help You Choose <br />
              <span className="italic text-[#d4c5b9]">
                the Right Fabric for Your Brand
              </span>
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
              The right fabric influences how your loungewear feels, fits,
              moves, and performs. kaytex-EXPORTERS helps brands explore fiber
              compositions, fabric structures, weights, and finishes suited to
              their product direction.
            </p>
          </div>

          {/* Image cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 cursor-pointer gap-8">
            {fabricOptions.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.num}
                  ref={(el) => (fabricCardsRef.current[idx] = el)}
                  className="group flex flex-col border border-[#2a2a2a] bg-[#151515]/20 p-6 hover:-translate-y-1 hover:border-[#d4c5b9]/30 transition-all duration-500 opacity-0"
                >
                  <div className="overflow-hidden aspect-[4/3] bg-zinc-900 border border-white/5 mb-6 relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover object-center  group-hover:scale-104 transition-all duration-[1s] opacity-80"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                    {/* Subtle Overlay Icon */}
                    <div className="absolute bottom-4 right-4 z-20 w-8 h-8 border border-white/20 bg-black/60 flex items-center justify-center transition-all group-hover:border-[#d4c5b9]">
                      <IconComp className="w-4 h-4 text-[#d4c5b9]" />
                    </div>
                  </div>
                  <span className="font-mono text-xs text-[#d4c5b9] block mb-2">
                    {item.num}
                  </span>
                  <h3 className="font-serif text-lg uppercase tracking-wider text-white mb-3 font-normal">
                    {item.title}
                  </h3>
                  <p className="text-xs font-light text-white/50 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. WHY MANUFACTURE LOUNGEWEAR IN INDIA */}
      <section
        ref={whyIndiaSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]/30"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#d4c5b9] font-mono mb-6 india-anim opacity-0">
            GLOBAL ADVANTAGE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-8 leading-tight india-anim opacity-0">
            Why Manufacture Your Loungewear <br />
            <span className="italic text-[#d4c5b9]">Clothing in India?</span>
          </h2>
          <p className="text-sm font-light text-white/70 leading-relaxed tracking-wide max-w-2xl mx-auto india-anim opacity-0">
            India offers a diverse apparel ecosystem with access to varied
            fibers, textile structures, skilled manufacturing capabilities, and
            flexible production support. For loungewear brands, this can create
            opportunities to develop differentiated products while building
            longer-term manufacturing relationships.
          </p>
        </div>
      </section>

      {/* 7. PRODUCT CATEGORIES OF LOUNGEWEAR */}
      <section
        ref={categoriesSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-t border-[#2a2a2a]/30"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-20 md:mb-28">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-6 font-mono">
              CATEGORIES
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              Product Categories{" "}
              <span className="italic text-[#d4c5b9]">of Loungewear</span>
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
              Explore the loungewear categories kaytex-EXPORTERS can support
              across different comfort, lifestyle, and collection requirements.
            </p>
          </div>

          {/* Cards Showcase Grid (Pure visual showcase - no routes or links) */}
          <div className="grid grid-cols-1 md:grid-cols-2 cursor-pointer lg:grid-cols-3 gap-8">
            {categoryShowcase.map((item, idx) => (
              <div
                key={item.num}
                ref={(el) => (categoryCardsRef.current[idx] = el)}
                className="group flex flex-col border border-[#2a2a2a] bg-[#151515]/20 p-6 transition-all duration-500 opacity-0"
              >
                <div className="overflow-hidden aspect-[4/3] bg-zinc-900 border border-white/5 mb-6 relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-center  group-hover:scale-104 transition-all duration-[1s]"
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
                <p className="text-xs font-light text-white/50 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. OUR LOUNGEWEAR MANUFACTURING PROCESS */}
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
              Our Loungewear{" "}
              <span className="italic text-[#d4c5b9]">
                Manufacturing Process
              </span>
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed">
              From the initial product brief to finished garments, we keep the
              manufacturing journey structured, collaborative, and focused on
              consistent development.
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
              {processWorkflow.map((item, idx) => {
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
              {processWorkflow.map((item, idx) => {
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

      {/* 9. FAQ SECTION */}
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
              Answers to common questions about kaytex-EXPORTERS's loungewear
              manufacturing capabilities.
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
                      {idx === 7 && (
                        <>
                          {" "}
                          You can{" "}
                          <Link
                            to="/inquire"
                            className="text-[#d4c5b9] hover:underline font-mono text-xs"
                          >
                            Start Production
                          </Link>{" "}
                          immediately.
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

      {/* 10. FINAL CTA */}
      <section className="relative w-full bg-[#111111] border-t border-[#2a2a2a] py-24 md:py-36 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="https://i.pinimg.com/736x/ae/e5/8c/aee58c0507db0f98c3d721270aa48cee.jpg"
            alt="Premium comfortable loungewear textile coordinate sets"
            className="w-full h-full object-cover object-center scale-105"
            loading="lazy"
          />
        </div>

        <div className="relative z-10 max-w-3xl px-6 mx-auto">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d4c5b9] mb-6 font-mono">
            COLLABORATE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-8 leading-tight">
            Ready to Build Your <br />
            <span className="italic text-[#d4c5b9]">
              Loungewear Collection?
            </span>
          </h2>
          <p className="text-xs md:text-sm font-light text-white/50 tracking-wide max-w-md mx-auto mb-12 leading-relaxed">
            Bring your loungewear concepts, fabrics, and product requirements to
            kaytex-EXPORTERS and explore a manufacturing partnership built
            around quality, customization, and scalable production.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/inquire"
              className="w-full sm:w-auto bg-[#faf9f6] text-black px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#d4c5b9] transition-all duration-500 hover:-translate-y-0.5 cursor-pointer text-center"
            >
              Start Production
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

export default Loungewear;
