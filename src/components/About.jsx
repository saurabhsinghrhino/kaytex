import { useRef } from "react";
import { useGsap } from "../hooks/useGsap";
import gsap from "gsap";
import aboutMain from "../assets/about_main.jpg";
import aboutDetail from "../assets/about_detail.jpg";

export const About = () => {
  const containerRef = useRef(null);
  const mainImageRef = useRef(null);
  const detailImageRef = useRef(null);
  const textRef = useRef(null);

  useGsap(
    () => {
      // Parallax on main image (slower scroll speed)
      gsap.fromTo(
        mainImageRef.current,
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      // Parallax on detail image (faster scroll speed in opposite direction)
      gsap.fromTo(
        detailImageRef.current,
        { yPercent: 15 },
        {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      // Fade-in elements of text on enter
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    [],
    containerRef,
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative w-full bg-[#faf9f6] text-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Visual Grid Side (Left on Desktop, 5 cols) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Main Image Frame */}
            <div className="relative w-full aspect-[3/4] max-w-[450px] overflow-hidden bg-black">
              <img
                ref={mainImageRef}
                src="https://images.unsplash.com/photo-1624129126429-0775cd4ea284?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="kaytex-EXPORTERS Editorial Wool Coat"
                className="w-full h-[120%] object-cover absolute top-[-10%] left-0"
              />
            </div>

            {/* Overlapping Detail Image */}
            <div className="absolute right-[-10px] md:right-0 lg:right-[-40px] bottom-[-40px] w-2/5 aspect-square overflow-hidden border-8 border-[#faf9f6] shadow-2xl bg-black">
              <img
                ref={detailImageRef}
                src="https://images.unsplash.com/photo-1625479142928-c2f2914318f2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Garment sewing detail close-up"
                className="w-full h-[120%] object-cover absolute top-[-10%] left-0"
              />
            </div>
          </div>

          {/* Copy Side (Right on Desktop, 6 cols) */}
          <div
            ref={textRef}
            className="lg:col-span-6 flex flex-col justify-center mt-12 lg:mt-0"
          >
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-black/50 mb-6 font-mono">
              WHO WE ARE
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl font-light uppercase leading-none tracking-tight mb-8">
              BUILT AROUND <br />
              <span className="italic text-[#8c7a6b]">DETAIL.</span>
            </h2>

            <p className="text-base font-light tracking-wide text-black/75 mb-6 leading-relaxed max-w-xl">
              KAY TEX-EXPORTERS IS A MANUFACTURING AND EXPORTS HOUSE FOR
              CLOTHING BRANDS, RETAILERS, AND SOURCING COMPANIES WORLDWIDE
              SEEKING LONG-TERM PARTNERSHIPS.
            </p>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 gap-8 border-t border-black/10 pt-8 max-w-md">
              <div>
                <p className="text-xs text-black/40 uppercase tracking-widest font-mono mb-2">
                  Philosophy
                </p>
                <p className="font-serif text-lg font-medium text-black">
                  Precision First
                </p>
              </div>
              <div>
                <p className="text-xs text-black/40 uppercase tracking-widest font-mono mb-2">
                  Materials
                </p>
                <p className="font-serif text-lg font-medium text-black">
                  Sourced at the core of origin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
