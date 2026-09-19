import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { Plus } from "lucide-react";
import { useLenis } from "../hooks/useLenis";
import { useGsap } from "../hooks/useGsap";

const faqData = [
  {
    id: "faq-1",
    question: "What is KAY TEX-EXPORTERS?",
    answer:
      "KAY TEX-EXPORTERS is a specialized women’s garment exporter, delivering premium-quality apparel crafted for global fashion brands. We focus on reliable production, refined craftsmanship, and export-ready quality tailored to every brand’s unique requirements.",
  },
  {
    id: "faq-2",
    question: "What items do you manufacture?",
    answer:
      "KAY TEX-EXPORTERS specializes in manufacturing and exporting premium women’s garments for fashion brands and retailers worldwide. From design-focused development to precise production, we deliver quality, consistency, and export-ready apparel tailored to every brand’s requirements.",
  },
  {
    id: "faq-3",
    question: "What is your Minimum Order Quantity (MOQ)?",
    answer:
      "Our general MOQ starts at 100 units per style/color. However, for specialized premium developments or private labels, we can discuss flexible scheduling depending on fabric sourcing.",
  },
  {
    id: "faq-4",
    question: "Do you offer custom fabric sourcing?",
    answer:
      "Yes, we have an extensive network of textile mills and suppliers to source loopback cotton, heavyweight fleeces, organic cottons, linen blends, and technical performance fabrics according to your exact specifications.",
  },
  {
    id: "faq-5",
    question: "Can you assist with private label branding?",
    answer:
      "Absolutely. We offer complete private label services, including custom neck labels, care tags, size tags, custom branded polybags, hangtags, and packaging coordinates.",
  },
  {
    id: "faq-6",
    question: "Where are your manufacturing units located?",
    answer:
      "Our main manufacturing plant and design studio is located in Noida (Sector 155), India. This facility is fully audited and equipped for high-precision fabric cutting, sewing, checking, and packaging.",
  },
  {
    id: "faq-7",
    question: "Do you export globally?",
    answer:
      "Yes, we export garments worldwide. We handle all logistics, customs documentations, and shipping arrangements to deliver directly to your warehouses or studios globally.",
  },
  {
    id: "faq-8",
    question: "How long does production take?",
    answer:
      "A typical production cycle takes between 30 to 45 days after sample approval and order confirmation. Lead times vary depending on the order size, custom styling details, and fabric availability.",
  },
  {
    id: "faq-9",
    question: "Can I request samples before placing a bulk order?",
    answer:
      "Yes, we create prototypes/pre-production samples for style, fit, and material verification. Sampling charges apply, which are adjusted or waived upon bulk order confirmation.",
  },
  {
    id: "faq-10",
    question: "What quality control standards do you follow?",
    answer:
      "We implement a strict 4-point checking system covering fabric inspection, inline checking during assembly, post-sewing verification, and final random sampling audits before packaging.",
  },
];

export const FAQ = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const { scrollTo } = useLenis();
  const sectionRef = useRef(null);
  const contentRefs = useRef([]);

  // GSAP scroll entrance animation
  useGsap(() => {
    if (!sectionRef.current) return;

    // Respect user's reduced motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.fromTo(
      ".faq-anim-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  // Handle smooth opening/closing height animations
  useEffect(() => {
    contentRefs.current.forEach((el, index) => {
      if (!el) return;

      const isReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (index === openIndex) {
        gsap.to(el, {
          height: "auto",
          opacity: 1,
          duration: isReducedMotion ? 0 : 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: isReducedMotion ? 0 : 0.3,
          ease: "power2.in",
        });
      }
    });
  }, [openIndex]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative w-full bg-[#0A0A0A] text-[#F5F5F5] px-6 md:px-12 py-20 md:py-32 border-t border-white/5 overflow-hidden"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 faq-anim-item">
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-[#D4C5B9] block mb-3">
            FAQ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white mb-4 uppercase">
            Everything You Need to Know
          </h2>
          <p className="text-xs sm:text-sm text-white/60 font-light tracking-wide max-w-lg mx-auto leading-relaxed">
            Essential answers to guide your understanding of our garment studio,
            sampling, and inquiry process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            const questionId = `faq-title-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={faq.id}
                className="faq-anim-item transition-colors duration-300 hover:bg-white/[0.02]"
              >
                <h3>
                  <button
                    type="button"
                    id={questionId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-6 md:py-7 flex justify-between items-center text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D4C5B9] cursor-pointer group"
                  >
                    <span className="font-serif text-base sm:text-lg md:text-xl font-light tracking-wide text-white/90 group-hover:text-white transition-colors duration-300 pr-6">
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 p-1.5 rounded-full border border-white/10 bg-white/5 text-[#D4C5B9] transition-transform duration-300 ease-out ${
                        isOpen
                          ? "rotate-45 bg-[#D4C5B9] text-black border-[#D4C5B9]"
                          : "group-hover:border-white/30"
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={questionId}
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="h-0 opacity-0 overflow-hidden"
                >
                  <p className="pb-7 text-xs sm:text-sm font-light text-white/60 tracking-wide leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle Bottom CTA */}
        <div className="mt-20 pt-12 border-t border-white/5 text-center faq-anim-item flex flex-col items-center">
          <h3 className="font-serif text-xl sm:text-2xl font-light uppercase tracking-wider text-white mb-2">
            Still Have Questions?
          </h3>
          <p className="text-xs text-white/60 font-light tracking-wide mb-8 max-w-md leading-relaxed">
            We are here to help. Send us your inquiry and our studio team will
            get back to you directly.
          </p>
          <button
            type="button"
            onClick={() => navigate("/inquire")}
            className="border border-white/20 bg-white/5 px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-white hover:bg-[#D4C5B9] hover:text-black hover:border-[#D4C5B9] transition-all duration-500 cursor-pointer"
          >
            Send an Enquiry
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
