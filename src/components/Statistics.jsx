import { useRef } from "react";
import { useGsap } from "../hooks/useGsap";
import gsap from "gsap";

export const Statistics = () => {
  const containerRef = useRef(null);

  useGsap(
    () => {
      const statItems = containerRef.current.querySelectorAll(".stat-item");
      const numberEls = containerRef.current.querySelectorAll(".stat-number");
      const labelEls = containerRef.current.querySelectorAll(".stat-label");

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      // Parse "10+", "50K+", etc. into a numeric target + trailing suffix so the
      // number can be counted up from 0 while the original label text stays intact.
      const counters = Array.from(numberEls).map((el) => {
        const raw = el.textContent.trim();
        const match = raw.match(/^(\d+(?:\.\d+)?)(.*)$/);
        const decimals =
          match && match[1].includes(".") ? match[1].split(".")[1].length : 0;
        return {
          el,
          val: 0,
          target: match ? parseFloat(match[1]) : 0,
          suffix: match ? match[2] : "",
          decimals,
        };
      });

      if (prefersReducedMotion) {
        gsap.set(statItems, { borderColor: "rgba(255,255,255,0.1)" });
        gsap.set(numberEls, { opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" });
        gsap.set(labelEls, { opacity: 1, y: 0 });
        counters.forEach(({ el, target, suffix, decimals }) => {
          el.textContent = `${target.toFixed(decimals)}${suffix}`;
        });
        return;
      }

      gsap.set(statItems, { borderColor: "rgba(255,255,255,0)" });
      gsap.set(numberEls, { opacity: 0, y: 30, clipPath: "inset(0 100% 0 0)" });
      gsap.set(labelEls, { opacity: 0, y: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
        },
      });

      statItems.forEach((item, i) => {
        const groupStart = i * 0.15;
        const counter = counters[i];

        tl.to(
          item,
          {
            borderColor: "rgba(255,255,255,0.1)",
            duration: 0.9,
            ease: "power1.out",
          },
          groupStart,
        );

        tl.to(
          numberEls[i],
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0 0% 0 0)",
            duration: 1,
            ease: "power3.out",
            clearProps: "transform",
          },
          groupStart + 0.1,
        );

        if (counter) {
          tl.to(
            counter,
            {
              val: counter.target,
              duration: 1.7,
              ease: "power2.out",
              onUpdate: () => {
                counter.el.textContent = `${counter.val.toFixed(counter.decimals)}${counter.suffix}`;
              },
            },
            groupStart + 0.1,
          );
        }

        tl.to(
          labelEls[i],
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          groupStart + 0.4,
        );
      });
    },
    [],
    containerRef,
  );

  const stats = [
    { value: "30+", label: "Years of Expertise" },
    { value: "50K+", label: "Garments Crafted" },
    { value: "20+", label: "Premium Materials" },
    { value: "15+", label: "Global Markets" },
  ];

  return (
    <section
      ref={containerRef}
      id="statistics"
      className="relative w-full bg-[#0a0a0a] text-[#faf9f6] px-6 md:px-12 py-20 md:py-28 overflow-hidden border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stat-item group flex flex-col justify-center ${
                index > 0 ? "pt-8 md:pt-0" : ""
              }`}
            >
              <span className="stat-number font-serif text-5xl md:text-7xl font-light text-[#d4c5b9] mb-2 tracking-tight select-none transition-all duration-300 ease-out md:group-hover:scale-[1.04] md:group-hover:text-[#c8a96a]">
                {stat.value}
              </span>
              <span className="stat-label relative inline-block text-[10px] md:text-xs uppercase tracking-[0.25em] text-white/50 font-mono after:content-[''] after:absolute after:left-1/2 after:-bottom-3 after:h-px after:w-0 after:-translate-x-1/2 after:bg-[#c8a96a] after:transition-all after:duration-300 after:ease-out md:group-hover:after:w-8">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
