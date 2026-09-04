import { useState, useRef, useEffect } from "react";
import { useGsap } from "../hooks/useGsap";
import gsap from "gsap";
import { Plus, Minus } from "lucide-react";

export const Capabilities = () => {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(null);

  const capabilities = [
    {
      num: "01",
      title: "IN-HOUSE PRINTING & EMBROIDERY",
      desc: "End-to-End Excellence under One Roof. Powered by an extensive supply network and state-of-the-art in-house machinery—including specialized printing infrastructure and embroidery machines —we deliver high-value, cost-effective garment manufacturing without compromising on deadline or detail.",
      img: "/In-House.png",
    },
    {
      num: "02",
      title: "ONE STOP SOLUTION",
      desc: "Small team brands  handling thousands of tasks at once can collaborate with us for a wide range of services. ",
      img: "one-stop-sol.png",
    },
    {
      num: "03",
      title: "MANAGED SUPPLY CHAIN",
      desc: "We work with ethical and expert mills and factories to produce the high quality garments for your brand.  ",
      img: "/supply-chain.png",
    },
    {
      num: "04",
      title: "CATEGORY VISIBILITY",
      desc: "We offer an extensive collection of women's wear, including dresses, tunics, shirts, short skirts, shorts, co-ord sets, and trousers, specializing in fine embroidered and printed fabrications.",
      img: "/category.png",
    },
    {
      num: "05",
      title: "SUSTAINABLE OPTIONS",
      desc: "We offer organic fabric sourcing, chemical free dyeing solutions and sustainable productions. ",
      img: "/sustainable.png",
    },
    {
      num: "06",
      title: "TRANSPARENT COMMUNICATION",
      desc: "We have a simple and seamless production management tool for order tracking and updates. ",
      img: "https://images.unsplash.com/photo-1621570277341-4fea9203f5e0?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Mouse move handler for floating image on desktop
  useEffect(() => {
    const container = containerRef.current;
    const cursor = cursorRef.current;
    if (!container || !cursor || window.innerWidth < 768) return;

    // quickTo is highly optimized for high-frequency cursor tracking
    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.45,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.45,
      ease: "power3.out",
    });

    const moveCursor = (e) => {
      const rect = container.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;

      // Center the floating image on the cursor
      xTo(relativeX - 150);
      yTo(relativeY - 200);
    };

    container.addEventListener("mousemove", moveCursor);
    return () => {
      container.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const toggleAccordion = (idx) => {
    setOpenAccordion(openAccordion === idx ? null : idx);
  };

  return (
    <section
      ref={containerRef}
      id="capabilities"
      className="relative w-full bg-[#0a0a0a] text-[#faf9f6] px-6 md:px-12 py-24 md:py-36 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl relative z-10">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/40 mb-6 font-mono">
          WHAT WE DO
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl font-light uppercase tracking-tight mb-16 md:mb-24 text-white">
          OUR <span className="italic text-[#d4c5b9]">CAPABILITIES.</span>
        </h2>

        {/* Desktop List Layout (hidden on mobile) */}
        <div className="hidden md:block border-t border-white/10">
          {capabilities.map((item, idx) => (
            <div
              key={item.num}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group flex justify-between items-center py-10 border-b border-white/10 cursor-pointer transition-colors duration-500 hover:border-white"
            >
              <div className="flex items-center gap-12">
                <span className="font-mono text-sm text-white/30 group-hover:text-white transition-colors duration-300">
                  {item.num}
                </span>
                <h3 className="font-serif text-3xl lg:text-5xl font-light uppercase tracking-wide group-hover:translate-x-4 transition-transform duration-500 text-white">
                  {item.title}
                </h3>
              </div>
              <p className="max-w-md text-sm font-light tracking-wide text-white/50 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Floating cursor image wrapper (desktop only) */}
        <div
          ref={cursorRef}
          className={`pointer-events-none absolute left-0 top-0 z-20 hidden md:block h-[400px] w-[300px] overflow-hidden bg-zinc-950 transition-opacity duration-300 ${
            hoveredIdx !== null ? "opacity-100" : "opacity-0"
          }`}
        >
          {capabilities.map((item, idx) => (
            <img
              key={item.num}
              src={item.img}
              alt={item.title}
              className={`absolute inset-0 h-full w-full object-top transition-opacity duration-500 ${
                hoveredIdx === idx
                  ? "opacity-70 scale-100"
                  : "opacity-0 scale-110"
              }`}
            />
          ))}
        </div>

        {/* Mobile Accordion Layout (hidden on desktop) */}
        <div className="block md:hidden border-t border-white/10">
          {capabilities.map((item, idx) => {
            const isAccordionOpen = openAccordion === idx;
            return (
              <div key={item.num} className="border-b border-white/10 py-6">
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-white/30">
                      {item.num}
                    </span>
                    <h3 className="font-serif text-lg font-light uppercase tracking-widest text-white">
                      {item.title}
                    </h3>
                  </div>
                  {isAccordionOpen ? (
                    <Minus className="h-4 w-4 text-white/50" />
                  ) : (
                    <Plus className="h-4 w-4 text-white/50" />
                  )}
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                    isAccordionOpen
                      ? "grid-rows-[1fr] mt-4 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm font-light text-white/70 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                    <div className="w-full aspect-[4/3] overflow-hidden bg-zinc-900">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover opacity-60"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
