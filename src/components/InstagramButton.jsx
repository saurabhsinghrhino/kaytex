import React, { useRef } from "react";
import gsap from "gsap";
import { useGsap } from "../hooks/useGsap";
import { Instagram } from "lucide-react";

// Replace with actual kaytex business Instagram URL
const INSTAGRAM_URL =
  "https://www.instagram.com/kaytex.official?utm_source=qr&igsh=MTkweXp0dmgzN3ZieA==";

export const InstagramButton = () => {
  const buttonRef = useRef(null);

  // Smooth entrance animation matching WhatsAppButton timing
  useGsap(() => {
    if (!buttonRef.current) return;

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.8, // Match the WhatsApp button delay
      },
    );
  }, []);

  return (
    <aside
      ref={buttonRef}
      className="fixed bottom-[80px] right-5 sm:bottom-[96px] sm:right-7 z-50 flex items-center gap-3 opacity-0 group"
    >
      {/* Desktop Hover Tooltip */}
      <span className="hidden sm:inline-block px-3 py-1.5 bg-[#0A0A0A] text-[#F5F5F5] text-[10px] font-mono tracking-widest uppercase border border-[#2A2A2A] rounded opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out pointer-events-none shadow-md">
        Follow kaytex-EXPORTERS
      </span>

      {/* Floating Action Button */}
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow kaytex-EXPORTERS on Instagram"
        className="relative flex items-center justify-center w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-full bg-[#0a0a0a] text-[#D4C5B9] border border-[#D4C5B9] shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-[#D4C5B9] hover:text-[#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#D4C5B9]/50"
      >
        <Instagram className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ease-out group-hover:scale-105" />
      </a>
    </aside>
  );
};

export default InstagramButton;
