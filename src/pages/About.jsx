import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "../hooks/useGsap";
import { useLenis } from "../hooks/useLenis";
import WhyKaytex from "../components/WhyKaytex";
import { useNavigate } from "react-router-dom";

// Ensure ScrollTrigger is registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ==========================================================================
   DATA STRUCTURES & REPLACEABLE PLACEHOLDERS
   ========================================================================== */

const services = [
  {
    num: "01",
    label: "APPAREL SOURCING",
    title: "Apparel Sourcing",
    desc: "Helping identify suitable materials, fabrics, and apparel solutions based on product requirements and quality expectations.",
  },
  {
    num: "02",
    label: "PRODUCT DEVELOPMENT",
    title: "Product Development",
    desc: "Supporting the journey from an initial concept to a refined, production-ready garment.",
  },
  {
    num: "03",
    label: "QUALITY & CRAFTSMANSHIP",
    title: "Quality & Craftsmanship",
    desc: "Maintaining attention to materials, construction, finishing, and details that influence the final product.",
  },
  {
    num: "04",
    label: "PRODUCTION SUPPORT",
    title: "Production Support",
    desc: "Helping ensure that ideas and specifications translate smoothly into finished apparel.",
  },
];

const audiences = [
  {
    num: "01",
    title: "FASHION BRANDS",
    desc: "For established and emerging brands developing new collections and expanding their product lines.",
  },
  {
    num: "02",
    title: "STARTUPS & NEW LABELS",
    desc: "For founders turning their first apparel idea into a real product.",
  },
  {
    num: "03",
    title: "RETAILERS",
    desc: "For businesses looking for reliable apparel solutions and quality-focused products.",
  },
  {
    num: "04",
    title: "BUSINESS & BULK CLIENTS",
    desc: "For organizations requiring apparel in larger quantities or for specific requirements.",
  },
];

const differentiators = [
  {
    num: "01",
    title: "QUALITY-LED",
    desc: "We prioritize quality across materials, construction, finishing, and the final garment.",
  },
  {
    num: "02",
    title: "DETAIL-DRIVEN",
    desc: "Small details can make a major difference. We pay attention to the elements that others may overlook.",
  },
  {
    num: "03",
    title: "CLEAR COMMUNICATION",
    desc: "We believe projects move better when expectations, requirements, and timelines are clearly understood.",
  },
  {
    num: "04",
    title: "LONG-TERM THINKING",
    desc: "We aim to build relationships that grow beyond a single order or collection.",
  },
];

// // TODO: Replace demo values with verified Kaytex statistics.
const statsData = [
  { value: 45, suffix: "+", label: "Collections / Projects Supported" },
  { value: 120, suffix: "K+", label: "Apparel Products Developed" },
  { value: 30, suffix: "+", label: "Clients & Partners" },
  { value: 8, suffix: "+", label: "Years of Industry Experience" },
];

const pillarsData = [
  {
    title: "RELATIONSHIPS",
    desc: "Building meaningful partnerships that last beyond individual projects.",
  },
  {
    title: "CONSISTENCY",
    desc: "Delivering dependable quality and communication across every stage.",
  },
  {
    title: "PROGRESS",
    desc: "Continuously improving our processes, products, and approach.",
  },
];

// // TODO: Replace demo founder names, images and descriptions with actual Kaytex founder information.
const founders = [
  {
    name: "Dhirendra Kumar Agrawal",
    role: "Founder, Kay Tex Exporters",
    image: "founder.png",
    description:
      "Founded in 1996, Kay Tex Exporters began with a simple vision: to bring quality craftsmanship in women's wear and kids' wear to the global market. Under the leadership of Dhirendra Kumar Agrawal, the company has grown into a trusted name in garment exports, known for its commitment to quality, reliability, and timely delivery. Over nearly three decades, Kay Tex Exporters has built strong, lasting partnerships with clients across Europe, the USA, and the UAE — serving international fashion brands and retailers with a focus on craftsmanship, consistency, and trust.",
  },
];

// // TODO: Replace demo timeline milestones with actual Kaytex company history.
const milestones = [
  {
    num: "01",
    title: "THE BEGINNING",
    desc: "KAYTEX-EXPORTERS begins with a vision to create better apparel experiences.",
  },
  {
    num: "02",
    title: "BUILDING THE FOUNDATION",
    desc: "Developing relationships, processes, and product expertise.",
  },
  {
    num: "03",
    title: "EXPANDING THE VISION",
    desc: "Growing our capabilities and working with a wider range of apparel requirements.",
  },
  {
    num: "04",
    title: "WHAT’S NEXT",
    desc: "Continuing to build, improve, and create with purpose.",
  },
];

/* ==========================================================================
   SUB-COMPONENTS
   ========================================================================== */

const AboutHero = () => {
  const { scrollTo } = useLenis();
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const navigate = useNavigate();

  useGsap(() => {
    if (!heroRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      ".hero-text-anim",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
    )
      .fromTo(
        ".hero-btn-anim",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        "-=0.4",
      )
      .fromTo(
        imgRef.current,
        { scale: 1.15, clipPath: "inset(100% 0% 0% 0%)" },
        {
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power4.out",
        },
        "-=0.8",
      );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full bg-[#0A0A0A] pt-32 pb-20 md:pt-44 md:pb-32 px-6 md:px-12 border-b border-white/5 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 z-10">
            <span className="hero-text-anim text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#D4C5B9] block mb-4">
              ABOUT KAYTEX-EXPORTERS
            </span>
            <h1 className="hero-text-anim font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white uppercase leading-[1.05] mb-6">
              Where Quality <br className="hidden sm:inline" />
              Meets Modern Fashion.
            </h1>
            <p className="hero-text-anim text-sm sm:text-base text-white/60 font-light tracking-wide max-w-xl leading-relaxed mb-10">
              KAYTEX-EXPORTERS is built around a simple idea — clothing should
              feel as good as it looks. We bring together thoughtful design,
              quality materials, and careful craftsmanship to create apparel
              made for today's world.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <button
                type="button"
                onClick={() => navigate("/inquire")}
                className="hero-btn-anim border cursor-pointer border-[#D4C5B9] bg-[#D4C5B9] px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-black hover:bg-transparent hover:text-white transition-all duration-500"
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-white/5 border border-white/10">
              <img
                ref={imgRef}
                src="/about-first.jpeg"
                alt="KAYTEX-EXPORTERS Craftsmanship and Fabric Texture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const OurStory = () => {
  const sectionRef = useRef(null);

  useGsap(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.fromTo(
      ".story-anim",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0A0A0A] py-20 md:py-32 px-6 md:px-12 border-b border-white/5"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <span className="story-anim text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#D4C5B9] block mb-3">
              OUR STORY
            </span>
            <h2 className="story-anim font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white mb-8 uppercase leading-tight">
              Built With a Passion for Better Clothing.
            </h2>
            <p className="story-anim text-sm sm:text-base text-white/70 font-light tracking-wide leading-relaxed mb-6">
              KAYTEX-EXPORTERS was created with a passion for bringing together
              timeless style, quality materials, and thoughtful craftsmanship.
              We believe great clothing isn't simply about following trends —
              it's about creating pieces that people genuinely enjoy wearing.
            </p>
            <p className="story-anim text-sm sm:text-base text-white/50 font-light tracking-wide leading-relaxed">
              From the first idea to the finished garment, we believe every
              detail matters. Fabric selection, construction, finishing,
              comfort, and presentation all contribute to creating clothing that
              feels considered and complete.
            </p>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="story-anim relative aspect-[4/5] w-full border border-white/10 overflow-hidden">
              <img
                src="/kaytex.png"
                alt="KAYTEX-EXPORTERS Studio Apparel Assembly"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhatWeDo = () => {
  const sectionRef = useRef(null);

  useGsap(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.fromTo(
      ".wwd-anim",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0A0A0A] py-20 md:py-32 px-6 md:px-12 border-b border-white/5"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <span className="wwd-anim text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#D4C5B9] block mb-3">
              WHAT WE DO
            </span>
            <h2 className="wwd-anim font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white uppercase mb-6 leading-tight">
              From Concept to Creation, We Make Apparel Happen.
            </h2>
            <p className="wwd-anim text-sm text-white/60 font-light tracking-wide leading-relaxed">
              At KAYTEX-EXPORTERS, we bring together design, quality, and
              apparel expertise to help turn ideas into finished garments.
              Whether you're developing a new collection, sourcing apparel, or
              looking for dependable production support, our approach is built
              around clarity, quality, and consistency.
            </p>
          </div>

          {/* Right Column: Interactive Service Stack */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/10">
            {services.map((item) => (
              <div
                key={item.num}
                className="wwd-anim group py-8 first:pt-0 last:pb-0 transition-colors duration-500 cursor-default"
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-mono text-xs text-[#D4C5B9] transition-transform duration-300 group-hover:-translate-y-1">
                    {item.num}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-light tracking-wide uppercase group-hover:text-[#D4C5B9] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-white/60 font-light leading-relaxed tracking-wide transition-opacity duration-300 group-hover:text-white/80">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BasedIn = () => {
  const sectionRef = useRef(null);

  useGsap(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.fromTo(
      ".based-anim",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0A0A0A] py-20 md:py-32 px-6 md:px-12 border-b border-white/5 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="based-anim text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#D4C5B9] block mb-3">
              WHERE WE'RE BASED
            </span>
            <h2 className="based-anim font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white uppercase mb-4 leading-tight">
              Rooted in India. <br />
              Connected to the World.
            </h2>
            <p className="based-anim text-sm sm:text-base text-white/70 font-light tracking-wide leading-relaxed mb-8">
              KAYTEX-EXPORTERS operates from India, a country with a rich
              textile and apparel heritage. Being connected to one of the
              world's major garment and textile ecosystems allows us to stay
              close to materials, craftsmanship, manufacturing expertise, and
              the people behind the products.
            </p>

            {/* Info Block */}
            <div className="based-anim grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div>
                <span className="block font-mono text-[10px] uppercase text-white/40 tracking-widest mb-1">
                  BASED IN
                </span>
                <span className="font-serif text-base text-white">India</span>
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase text-white/40 tracking-widest mb-1">
                  INDUSTRY
                </span>
                <span className="font-serif text-base text-white">
                  Apparel & Fashion
                </span>
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase text-white/40 tracking-widest mb-1">
                  FOCUS
                </span>
                <span className="font-serif text-xs text-[#D4C5B9] tracking-wider uppercase">
                  Quality • Design • Production
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div
              ref={mapRef}
              className="relative aspect-[4/3] w-full border border-white/10 overflow-hidden bg-white/5"
            >
              <img
                src="https://images.unsplash.com/photo-1611725450473-d18c7b751c59?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Indian Textile Craftsmanship"
                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4C5B9]">
                  HERITAGE & CRAFTSMANSHIP
                </span>
                <span className="font-mono text-xs text-white/60">
                  20.5937° N, 78.9629° E
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhoWeServe = () => {
  const sectionRef = useRef(null);

  useGsap(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.fromTo(
      ".serve-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0A0A0A] py-20 md:py-32 px-6 md:px-12 border-b border-white/5"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 md:mb-20">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#D4C5B9] block mb-3">
            WHO WE SERVE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white uppercase max-w-2xl">
            We work with people and businesses who care about creating better
            apparel.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item) => (
            <div
              key={item.num}
              className="serve-card border border-white/10 p-8 bg-white/[0.02] hover:border-[#D4C5B9]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[#D4C5B9] block mb-6">
                  {item.num}
                </span>
                <h3 className="font-serif text-lg text-white font-light tracking-wide uppercase mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-white/60 font-light leading-relaxed tracking-wide">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhatSetsUsApart = () => {
  const sectionRef = useRef(null);

  useGsap(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.fromTo(
      ".apart-anim",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0A0A0A] py-20 md:py-32 px-6 md:px-12 border-b border-white/5"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 md:mb-24">
          <span className="apart-anim text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#D4C5B9] block mb-3">
            WHAT SETS US APART
          </span>
          <h2 className="apart-anim font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white uppercase max-w-3xl leading-tight">
            The apparel industry is built on relationships, consistency, and
            attention to detail. We focus on getting the fundamentals right.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((diff) => (
            <div
              key={diff.num}
              className="apart-anim border-t border-white/10 pt-6"
            >
              <span className="font-mono text-xs text-[#D4C5B9] block mb-3">
                {diff.num}
              </span>
              <h3 className="font-serif text-lg text-white font-light tracking-wide uppercase mb-3">
                {diff.title}
              </h3>
              <p className="text-xs text-white/60 font-light leading-relaxed tracking-wide">
                {diff.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImpactStats = () => {
  const sectionRef = useRef(null);

  useGsap(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const statElements = sectionRef.current.querySelectorAll(".stat-number");

    statElements.forEach((el) => {
      const targetVal = parseFloat(el.getAttribute("data-value") || "0");
      const obj = { val: 0 };

      gsap.to(obj, {
        val: targetVal,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        onUpdate: () => {
          el.innerText = Math.floor(obj.val).toString();
        },
      });
    });

    gsap.fromTo(
      ".stat-card",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0A0A0A] py-20 md:py-32 px-6 md:px-12 border-b border-white/5"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#D4C5B9] block mb-3">
            MEASURABLE IMPACT
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-white uppercase">
            Proven Progress & Performance
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, idx) => (
            <div key={idx} className="stat-card border-l border-white/10 pl-6">
              <div className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-tight mb-2 flex items-baseline">
                <span className="stat-number" data-value={stat.value}>
                  0
                </span>
                <span className="text-[#D4C5B9]">{stat.suffix}</span>
              </div>
              <p className="text-xs text-white/60 font-light tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustedGrowth = () => {
  const sectionRef = useRef(null);

  useGsap(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.fromTo(
      ".growth-pillar",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0A0A0A] py-20 md:py-32 px-6 md:px-12 border-b border-white/5"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#D4C5B9] block mb-3">
            TRUSTED GROWTH
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white uppercase mb-6">
            "Growth means more when it's built on trust."
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-light tracking-wide leading-relaxed">
            Our goal isn't simply to grow faster. It's to grow better — through
            strong relationships, consistent quality, reliable communication,
            and products that our clients can stand behind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
          {pillarsData.map((pillar) => (
            <div key={pillar.title} className="growth-pillar">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#D4C5B9] mb-3">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed tracking-wide">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Founders = () => {
  const sectionRef = useRef(null);

  useGsap(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.fromTo(
      ".founder-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0A0A0A] py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-10 lg:px-12 border-b border-white/5"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <span className="text-[9px] sm:text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#D4C5B9] block mb-3">
            MEET THE FOUNDERS
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-white uppercase max-w-2xl leading-[1.15]">
            The Leadership Behind KAYTEX-EXPORTERS.
          </h2>

          <p className="text-[11px] sm:text-xs md:text-sm text-white/60 font-light tracking-wide mt-4 max-w-lg leading-relaxed">
            Behind KAYTEX-EXPORTERS is a team driven by a shared passion for
            apparel, quality, and building something meaningful.
          </p>
        </div>

        {/* Founders */}
        <div className="w-full space-y-16 sm:space-y-20 md:space-y-24 lg:space-y-32">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className={`founder-card group flex flex-col lg:flex-row items-start lg:items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Founder Image */}
              <div className="relative w-full sm:w-[85%] md:w-[70%] lg:w-1/2 mx-auto lg:mx-0 aspect-[4/5] max-h-[520px] border border-white/10 overflow-hidden bg-white/5">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Founder Content */}
              <div className="relative w-full lg:w-1/2">
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-light tracking-wide uppercase mb-2">
                  {founder.name}
                </h3>

                <span className="font-mono text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] sm:tracking-widest text-[#D4C5B9] block mb-4">
                  {founder.role}
                </span>

                <p className="text-[11px] sm:text-xs md:text-sm text-white/60 font-light leading-relaxed tracking-wide max-w-xl">
                  {founder.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const JourneyTimeline = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useGsap(() => {
    if (!sectionRef.current || !lineRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 80%",
          scrub: true,
        },
      },
    );

    gsap.fromTo(
      ".timeline-item",
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0A0A0A] py-20 md:py-32 px-6 md:px-12 border-b border-white/5"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-16">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#D4C5B9] block mb-3">
            OUR JOURNEY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white uppercase">
            Milestones Along the Way.
          </h2>
        </div>

        <div className="relative pl-6 md:pl-10">
          {/* Vertical progress line */}
          <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-white/10" />
          <div
            ref={lineRef}
            className="absolute top-0 bottom-0 left-0 w-[1px] bg-[#D4C5B9] origin-top"
          />

          <div className="space-y-12">
            {milestones.map((ms) => (
              <div key={ms.num} className="timeline-item relative">
                <div className="absolute -left-[29px] md:-left-[45px] top-1.5 w-2 h-2 rounded-full bg-[#D4C5B9]" />
                <span className="font-mono text-xs text-[#D4C5B9] block mb-1">
                  {ms.num}
                </span>
                <h3 className="font-serif text-xl text-white font-light tracking-wide uppercase mb-2">
                  {ms.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed tracking-wide max-w-xl">
                  {ms.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const OurVision = () => {
  const sectionRef = useRef(null);

  useGsap(() => {
    if (!sectionRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.fromTo(
      ".vision-page-anim",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0A0A0A] py-24 md:py-40 px-6 md:px-12 border-b border-white/5 text-center"
    >
      <div className="mx-auto max-w-4xl">
        <span className="vision-page-anim text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#D4C5B9] block mb-6">
          OUR VISION
        </span>
        <h2 className="vision-page-anim font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white uppercase leading-tight mb-8">
          Building a Better Future for Apparel.
        </h2>
        <p className="vision-page-anim text-sm sm:text-base text-white/70 font-light tracking-wide max-w-2xl mx-auto leading-relaxed mb-10">
          We want KAYTEX-EXPORTERS to grow into a trusted name in apparel by
          combining thoughtful design, dependable quality, responsible growth,
          and meaningful relationships.
        </p>
        <p className="vision-page-anim font-serif text-lg sm:text-xl text-[#D4C5B9] font-light tracking-widest uppercase">
          "Better Products. Stronger Partnerships. Lasting Impact."
        </p>
      </div>
    </section>
  );
};

const AboutCTA = () => {
  const { scrollTo } = useLenis();
  const navigate = useNavigate();

  return (
    <section className="relative w-full bg-[#0A0A0A] py-24 md:py-36 px-6 md:px-12 text-center overflow-hidden">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white uppercase mb-6 leading-tight">
          Let's Build Something Worth Wearing.
        </h2>
        <p className="text-xs sm:text-sm text-white/60 font-light tracking-wide mb-10 max-w-lg mx-auto leading-relaxed">
          Whether you're developing your next collection, exploring apparel
          solutions, or simply want to know more about KAYTEX-EXPORTERS, we'd
          love to hear from you.
        </p>

        <div className="flex flex-wrap justify-center gap-4 items-center">
          <button
            type="button"
            onClick={() => navigate("/inquire")}
            className="border cursor-pointer border-[#D4C5B9] bg-[#D4C5B9] px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-black hover:bg-transparent hover:text-white transition-all duration-500"
          >
            Send an Enquiry
          </button>
        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   MAIN EXPORT COMPONENT
   ========================================================================== */
export const About = () => {
  return (
    <main className="w-full bg-[#0A0A0A] text-[#F5F5F5] selection:bg-[#D4C5B9] selection:text-black">
      <AboutHero />
      <OurStory />
      <WhatWeDo />
      {/* <WhereWereBased /> */}
      <WhoWeServe />
      <WhatSetsUsApart />
      <ImpactStats />
      <TrustedGrowth />
      <Founders />
      <JourneyTimeline />
      <WhyKaytex />
      <OurVision />
      <AboutCTA />
    </main>
  );
};

export default About;
