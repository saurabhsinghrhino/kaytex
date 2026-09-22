import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "../hooks/useGsap";

gsap.registerPlugin(ScrollTrigger);

const MARKET_REGIONS = [
  {
    number: "01",
    region: "NORTH AMERICA",
    markets: "United States & Canada",
    description:
      "Apparel manufacturing and export solutions for fashion brands, retailers, and sourcing partners across North America.",
    image: "/north-american.png",
  },
  {
    number: "02",
    region: "EUROPE",
    markets: "United Kingdom & European Markets",
    description:
      "Flexible apparel production and sourcing solutions aligned with the expectations of international fashion businesses.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format,compress&fit=crop&w=800&q=75",
  },
  {
    number: "03",
    region: "MIDDLE EAST",
    markets: "Gulf & Middle Eastern Markets",
    description:
      "Apparel manufacturing and export support for brands and retailers seeking quality-focused production partnerships.",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format,compress&fit=crop&w=800&q=75",
  },
  {
    number: "04",
    region: "AUSTRALIA & NEW ZEALAND",
    markets: "Australia & New Zealand",
    description:
      "Reliable apparel sourcing and manufacturing solutions for fashion brands and retail businesses across the region.",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format,compress&fit=crop&w=800&q=75",
  },
  {
    number: "05",
    region: "ASIA-PACIFIC",
    markets: "Selected International Markets",
    description:
      "Scalable sourcing and manufacturing solutions for brands working across growing international apparel markets.",
    image:
      "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format,compress&fit=crop&w=800&q=75",
  },
  {
    number: "06",
    region: "GLOBAL PARTNERSHIPS",
    markets: "Worldwide",
    description:
      "Supporting long-term relationships with brands, retailers, and sourcing companies looking for dependable Indian manufacturing partners.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format,compress&fit=crop&w=800&q=75",
  },
];

export default function GlobalReach({ onInquiryClick }) {
  const containerRef = useRef(null);

  useGsap(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Reveal
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      heroTl
        .fromTo(
          ".hero-eyebrow",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        )
        .fromTo(
          ".hero-heading-line",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
          },
          "-=0.3",
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.4",
        );

      // 2. Markets Section Intro Reveal
      const marketsHeaderTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".markets-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      marketsHeaderTl
        .fromTo(
          ".markets-eyebrow",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        )
        .fromTo(
          ".markets-subtext",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.3",
        );

      // 3. Staggered Card Animation & Image Parallax/Reveal
      const cards = gsap.utils.toArray(".market-card");
      cards.forEach((card) => {
        const imgWrapper = card.querySelector(".card-img-wrapper");
        const img = card.querySelector(".card-img");
        const num = card.querySelector(".card-number");
        const region = card.querySelector(".card-region");
        const markets = card.querySelector(".card-markets");
        const desc = card.querySelector(".card-desc");
        const line = card.querySelector(".card-line");

        const cardTl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        // Entry animation for card structure
        cardTl
          .fromTo(
            card,
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          )
          // Reveal clip-path for image container
          .fromTo(
            imgWrapper,
            { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
            {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              duration: 0.8,
              ease: "power3.inOut",
            },
            "-=0.5",
          )
          // Un-scale image slightly on enter
          .fromTo(
            img,
            { scale: 1.2 },
            { scale: 1.0, duration: 1.2, ease: "power3.out" },
            "-=0.8",
          )
          // Content Stagger
          .fromTo(
            num,
            { opacity: 0, x: -10 },
            { opacity: 1, x: 0, duration: 0.4 },
            "-=0.6",
          )
          .fromTo(
            region,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
            "-=0.4",
          )
          .fromTo(
            markets,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
            "-=0.3",
          )
          .fromTo(
            line,
            { scaleX: 0, transformOrigin: "left" },
            { scaleX: 1, duration: 0.5, ease: "power3.out" },
            "-=0.3",
          )
          .fromTo(
            desc,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
            "-=0.3",
          );
      });

      // 4. CTA Reveal Sequence
      gsap.fromTo(
        ".cta-container",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cta-section",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#0A0A0A] text-[#F5F5F5] min-h-screen pt-28 md:pt-36 pb-20 overflow-hidden font-sans selection:bg-[#d4c5b9] selection:text-[#0A0A0A]"
    >
      {/* Hero Section */}
      <section className="hero-section relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-24 md:mb-36">
        <div className="absolute -top-12 right-0 w-[350px] h-[350px] md:w-[600px] md:h-[600px] pointer-events-none opacity-[0.04] text-[#d4c5b9]">
          <svg
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="w-full h-full animate-[spin_120s_linear_infinite]"
          >
            <circle cx="100" cy="100" r="90" />
            <ellipse cx="100" cy="100" rx="90" ry="35" />
            <ellipse cx="100" cy="100" rx="35" ry="90" />
            <line x1="10" y1="100" x2="190" y2="100" />
            <line x1="100" y1="10" x2="100" y2="190" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl">
          <span className="hero-eyebrow inline-block text-[#d4c5b9] text-xs md:text-sm font-mono tracking-[0.3em] uppercase mb-6">
            GLOBAL REACH
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[1.02] uppercase mb-8">
            <span className="hero-heading-line block">MADE IN INDIA.</span>
            <span className="hero-heading-line block font-semibold text-white">
              READY FOR THE WORLD.
            </span>
          </h1>

          <p className="hero-description text-white/60 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            KAY TEX EXPORTERS partners with clothing brands, retailers, and
            sourcing companies worldwide, delivering apparel solutions built
            around quality, consistency, and dependable manufacturing.
          </p>
        </div>
      </section>

      {/* Markets Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-28 md:mb-40">
        <div className="markets-header mb-12 md:mb-16 border-b border-[#2A2A2A] pb-8">
          <span className="markets-eyebrow inline-block text-[#d4c5b9] text-xs md:text-sm font-mono tracking-[0.25em] uppercase mb-3">
            MARKETS WE SERVE
          </span>
          <p className="markets-subtext text-white/50 text-base md:text-lg font-light max-w-xl">
            Built for brands looking for reliable apparel manufacturing and
            export partnerships across international markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {MARKET_REGIONS.map((item, index) => (
            <div
              key={item.number}
              className="market-card group relative bg-[#151515] border border-[#2A2A2A] p-6 sm:p-8 lg:p-10 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#d4c5b9]/70 hover:shadow-2xl hover:shadow-[#d4c5b9]/5 flex flex-col justify-between overflow-hidden [content-visibility:auto]"
            >
              {/* Card Header & Content */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="card-number text-[#d4c5b9] font-mono text-sm md:text-base tracking-widest opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {item.number}
                  </span>

                  {/* Top-Right Arrow Indicator */}
                  <div className="text-white/30 group-hover:text-[#d4c5b9] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </div>

                {/* Animated Editorial Image Frame */}
                <div className="card-img-wrapper relative w-full h-48 sm:h-56 lg:h-64 mb-6 overflow-hidden bg-[#222]">
                  <img
                    src={item.image}
                    alt={item.region}
                    loading={index < 2 ? "eager" : "lazy"}
                    fetchPriority={index < 2 ? "high" : "low"}
                    decoding="async"
                    width="800"
                    height="500"
                    className="card-img w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-80" />
                </div>

                {/* Region Titles */}
                <h2 className="card-region text-2xl sm:text-3xl font-medium tracking-wide uppercase text-[#F5F5F5] group-hover:text-white transition-colors duration-300 mb-2">
                  {item.region}
                </h2>

                <p className="card-markets text-[#d4c5b9] text-xs sm:text-sm font-mono tracking-wider uppercase mb-5 opacity-90">
                  {item.markets}
                </p>

                {/* Animated Accent Line */}
                <div className="card-line w-10 h-[1px] bg-[#d4c5b9]/40 group-hover:bg-[#d4c5b9] group-hover:w-20 transition-all duration-500 mb-5" />

                <p className="card-desc text-white/50 group-hover:text-white/70 text-sm md:text-base leading-relaxed font-light transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
