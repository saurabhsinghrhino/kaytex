import { useRef } from "react";
import { gsap } from "gsap";
import { useGsap } from "../hooks/useGsap";
import logo from "../assets/kaytex-logo.png";

export const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const logoRef = useRef(null);
  const brandNameRef = useRef(null);
  const loaderBarRef = useRef(null);
  const progressRef = useRef(null);

  useGsap(
    () => {
      const isReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (isReducedMotion) {
        if (onComplete) onComplete();
        if (containerRef.current) {
          containerRef.current.style.display = "none";
        }
        return;
      }

      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      // 1. Animate Logo Reveal
      tl.fromTo(
        logoRef.current,
        {
          opacity: 0,
          scale: 0.94,
          y: 10,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
        },
      )
        // 2. Animate Brand Name Reveal (starts slightly after logo)
        .fromTo(
          brandNameRef.current,
          {
            opacity: 0,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.55",
        )
        // 3. Animate Minimal Progress Line (0% -> 100%)
        .fromTo(
          progressRef.current,
          {
            scaleX: 0,
          },
          {
            scaleX: 1,
            duration: 1.1,
            ease: "power2.inOut",
          },
          "-=0.5",
        )
        // 4. Smooth content fade out before curtain exit
        .to([logoRef.current, brandNameRef.current, loaderBarRef.current], {
          opacity: 0,
          y: -10,
          duration: 0.45,
          stagger: 0.05,
          ease: "power3.in",
        })
        // 5. Smooth curtain slide reveal
        .to(
          containerRef.current,
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 0.8,
            ease: "power4.inOut",
          },
          "-=0.15",
        )
        // 6. Completely hide container
        .set(containerRef.current, {
          display: "none",
        });
    },
    [],
    containerRef,
  );

  return (
    <div
      ref={containerRef}
      id="preloader"
      role="status"
      aria-label="Loading kaytex-EXPORTERS"
      aria-live="polite"
      className="fixed inset-0 z-50 flex min-h-screen min-h-[100dvh] w-full flex-col items-center justify-center bg-[#0a0a0a] text-[#f5f5f5] select-none"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      <div
        ref={contentWrapperRef}
        className="flex flex-col items-center justify-center text-center px-6"
      >
        {/* kaytex-EXPORTERS Official Logo */}
        <div
          ref={logoRef}
          className="opacity-0 flex items-center justify-center mb-5 sm:mb-6"
        >
          <img
            src={logo}
            alt="kaytex-EXPORTERS"
            loading="eager"
            className="w-36 sm:w-44 md:w-56 lg:w-64 max-w-[80vw] h-auto object-contain brightness-0 invert"
          />
        </div>

        {/* Brand Name */}
        <span
          ref={brandNameRef}
          className="opacity-0 text-xs sm:text-sm md:text-base font-light uppercase tracking-[0.3em] sm:tracking-[0.35em] md:tracking-[0.4em] text-[#f5f5f5]"
        >
          KAY TEX EXPORTERS
        </span>

        {/* Minimal Progress Line */}
        <div
          ref={loaderBarRef}
          className="relative mt-6 sm:mt-8 h-[2px] w-28 sm:w-36 md:w-44 overflow-hidden rounded-full bg-[#2a2a2a]"
        >
          <div
            ref={progressRef}
            className="absolute inset-y-0 left-0 w-full origin-left bg-[#d4c5b9]"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
