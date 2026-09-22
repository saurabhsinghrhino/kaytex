import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import gsap from "gsap";
import { useGsap } from "../hooks/useGsap";
import { useLenis } from "../hooks/useLenis";
import {
  Shirt,
  Image as ImageIcon,
  Layers,
  Package,
  Globe2,
  Plus,
  Minus,
  ArrowRight,
  Loader2,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Instagram,
  CheckCircle2,
  Compass,
  Scissors,
  Check,
} from "lucide-react";

// Verified business contact constants
const CONTACT_EMAIL = "Info@kaytex.in";
const CONTACT_PHONE = "+918826993211";
const WHATSAPP_NUMBER = "+9173792 97720";
const DISPLAY_PHONE = "+91 88269 93211";
const STUDIO_ADDRESS =
  "Plot 101, Sector 155, Noida 201301, Uttar Pradesh, India";
const MAPS_URL = "https://maps.app.goo.gl/QqrWxKonAHCsWtsAA";
const INSTAGRAM_URL =
  "https://www.instagram.com/kaytex.official?utm_source=qr&igsh=MTkweXp0dmgzN3ZieA==";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello KAY TEX EXPORTERS, I would like to discuss an apparel manufacturing inquiry.",
)}`;

// Dropdown options
const SERVICE_OPTIONS = [
  "Clothing Design Services",
  "Tech Pack Development",
  "3D Garment Design",
  "Fabric Sourcing",
  "Fabric Customisation",
  "Clothing Manufacturing",
  "Women's Clothing Manufacturing",
  "Loungewear Manufacturing",
  "Other",
];

const CATEGORY_OPTIONS = [
  "Women's Wear",
  "Loungewear",
  "Dresses",
  "Tops",
  "Bottoms",
  "Hoodies & Sweatshirts",
  "Sleepwear",
  "Kidswear",
  "Maternity Wear",
  "Other",
];

// Client-side Zod validation schema
const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name (at least 2 characters)")
    .max(100, "Name is too long"),
  company: z
    .string()
    .trim()
    .min(2, "Please enter your company or brand name")
    .max(120, "Company name is too long"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(254, "Email is too long"),
  phone: z.string().trim().max(30, "Phone number is too long").optional(),
  country: z.string().trim().max(80, "Country name is too long").optional(),
  service: z.string().trim().min(1, "Please select the service you require"),
  category: z.string().trim().optional(),
  quantity: z
    .string()
    .trim()
    .max(100, "Quantity description is too long")
    .optional(),
  projectDetails: z
    .string()
    .trim()
    .min(10, "Please tell us about your project (at least 10 characters)")
    .max(3000, "Project details are too long (max 3000 characters)"),
  fileRef: z.string().trim().max(500, "Reference link is too long").optional(),
});

export const Contact = () => {
  const { scrollTo } = useLenis();
  const navigate = useNavigate();

  // Animation Refs
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const heroEyebrowRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroDescRef = useRef(null);
  const heroBtnRef = useRef(null);
  const heroImgRef = useRef(null);

  const infoSectionRef = useRef(null);
  const infoCardsRef = useRef([]);

  const shareSectionRef = useRef(null);
  const shareCardsRef = useRef([]);

  const formSectionRef = useRef(null);
  const formLeftRef = useRef(null);
  const formRightRef = useRef(null);

  const whySectionRef = useRef(null);
  const whyCardRef = useRef(null);

  const processSectionRef = useRef(null);
  const processCardsRef = useRef([]);

  const faqSectionRef = useRef(null);
  const faqItemsRef = useRef([]);

  const ctaSectionRef = useRef(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    category: "",
    quantity: "",
    projectDetails: "",
    fileRef: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("IDLE"); // IDLE | OPENING | ERROR
  const [errorMessage, setErrorMessage] = useState("");
  const [activeFaq, setActiveFaq] = useState(null);

  // GSAP Animations
  useGsap(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // 1. Hero Animation Timeline
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    heroTl
      .fromTo(
        heroEyebrowRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
      )
      .fromTo(
        heroHeadingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9 },
        "-=0.6",
      )
      .fromTo(
        heroDescRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6",
      )
      .fromTo(
        heroBtnRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5",
      )
      .fromTo(
        heroImgRef.current,
        { opacity: 0, scale: 1.04 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
        "-=0.9",
      );

    // 2. Info Cards Stagger
    if (infoSectionRef.current && infoCardsRef.current.length > 0) {
      gsap.fromTo(
        infoCardsRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoSectionRef.current,
            start: "top 80%",
          },
        },
      );
    }

    // 3. What to Share Grid Stagger
    if (shareSectionRef.current && shareCardsRef.current.length > 0) {
      gsap.fromTo(
        shareCardsRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: shareSectionRef.current,
            start: "top 80%",
          },
        },
      );
    }

    // 4. Main Form Section Reveal
    if (formSectionRef.current) {
      gsap.fromTo(
        [formLeftRef.current, formRightRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formSectionRef.current,
            start: "top 75%",
          },
        },
      );
    }

    // 5. Why Contact Statement Reveal
    if (whySectionRef.current) {
      gsap.fromTo(
        whyCardRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whySectionRef.current,
            start: "top 80%",
          },
        },
      );
    }

    // 6. Process Steps Stagger
    if (processSectionRef.current && processCardsRef.current.length > 0) {
      gsap.fromTo(
        processCardsRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: processSectionRef.current,
            start: "top 80%",
          },
        },
      );
    }

    // 7. FAQ Stagger
    if (faqSectionRef.current && faqItemsRef.current.length > 0) {
      gsap.fromTo(
        faqItemsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: faqSectionRef.current,
            start: "top 80%",
          },
        },
      );
    }

    // 8. Final CTA Reveal
    if (ctaSectionRef.current) {
      gsap.fromTo(
        ctaSectionRef.current.querySelector(".cta-content"),
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: "top 80%",
          },
        },
      );
    }
  }, []);

  // Form input handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  // Form submit handler - Formats details into WhatsApp message and opens WhatsApp directly
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    setErrorMessage("");

    // 1. Zod Frontend Validation
    const validation = contactFormSchema.safeParse(formData);
    if (!validation.success) {
      const formattedErrors = {};
      validation.error.errors.forEach((err) => {
        formattedErrors[err.path[0]] = err.message;
      });
      setErrors(formattedErrors);
      return;
    }

    // 2. Format Structured WhatsApp Message
    const {
      name,
      company,
      email,
      phone,
      country,
      service,
      category,
      quantity,
      projectDetails,
      fileRef,
    } = validation.data;

    const message = [
      "Hello KAY TEX EXPORTERS,",
      "",
      "I would like to discuss an apparel manufacturing/export inquiry.",
      "",
      "━━━━━━━━━━━━━━━━━━",
      "INQUIRY DETAILS",
      "━━━━━━━━━━━━━━━━━━",
      "",
      `Full Name: ${name}`,
      "",
      `Company / Brand: ${company}`,
      "",
      `Email: ${email}`,
      "",
      `Phone / WhatsApp: ${phone || "Not provided"}`,
      "",
      `Country: ${country || "Not provided"}`,
      "",
      `Service Required: ${service}`,
      "",
      `Product Category: ${category || "Not provided"}`,
      "",
      `Estimated Order Quantity: ${quantity || "Not provided"}`,
      "",
      "Project Details:",
      projectDetails,
      ...(fileRef
        ? [
            "",
            `Reference / File Links: ${fileRef}`,
            "",
            "Attachment Note: Please share any files/tech packs directly in this WhatsApp chat.",
          ]
        : []),
      "",
      "━━━━━━━━━━━━━━━━━━",
      "",
      "I look forward to discussing my requirements with KAY TEX EXPORTERS.",
      "",
      "Thank you.",
    ].join("\n");

    setStatus("OPENING");

    try {
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

      // Open WhatsApp in a new tab/window
      const newWindow = window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer",
      );
      if (
        !newWindow ||
        newWindow.closed ||
        typeof newWindow.closed === "undefined"
      ) {
        // Fallback if popup is blocked
        window.location.href = whatsappUrl;
      }

      setTimeout(() => {
        setStatus("IDLE");
      }, 2500);
    } catch (error) {
      console.error("Error opening WhatsApp:", error);
      setErrorMessage(
        "Unable to open WhatsApp automatically. Please contact us directly at +91 88269 93211.",
      );
      setStatus("ERROR");
    }
  };

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const infoBlocks = [
    {
      num: "01",
      title: "GENERAL INQUIRIES",
      desc: "Have a question about our services, capabilities, or development process? Send us your requirements and our team can guide you further.",
    },
    {
      num: "02",
      title: "APPAREL DEVELOPMENT",
      desc: "Have a design, sketch, tech pack, fabric reference, or product concept? Share the details and let us understand your development needs.",
    },
    {
      num: "03",
      title: "MANUFACTURING",
      desc: "Looking for a manufacturing partner for your apparel collection? Tell us about your products, quantities, fabrics, and production requirements.",
    },
    {
      num: "04",
      title: "GLOBAL PARTNERSHIPS",
      desc: "Working from an international market? Share your project details and explore a potential manufacturing partnership with KAY TEX EXPORTERS.",
    },
  ];

  const shareItems = [
    {
      num: "01",
      title: "Product Type",
      desc: "Tell us what garments you want to develop or manufacture.",
      icon: Shirt,
    },
    {
      num: "02",
      title: "Design References",
      desc: "Share sketches, inspiration, existing samples, or visual references.",
      icon: ImageIcon,
    },
    {
      num: "03",
      title: "Fabric Direction",
      desc: "Tell us your preferred fiber, fabric structure, weight, texture, or finish if known.",
      icon: Layers,
    },
    {
      num: "04",
      title: "Quantity",
      desc: "Provide an approximate production quantity if available.",
      icon: Package,
    },
    {
      num: "05",
      title: "Target Market",
      desc: "Let us know where your collection will be sold or distributed.",
      icon: Globe2,
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "We Review",
      desc: "We review the information and requirements you've shared.",
      icon: Compass,
    },
    {
      num: "02",
      title: "We Understand",
      desc: "We clarify product, fabric, quantity, development, and manufacturing requirements where needed.",
      icon: Layers,
    },
    {
      num: "03",
      title: "We Discuss",
      desc: "We connect with you to discuss the project and potential next steps.",
      icon: MessageSquare,
    },
    {
      num: "04",
      title: "We Move Forward",
      desc: "Once requirements are aligned, the project can move toward development, sampling, or manufacturing.",
      icon: Scissors,
    },
  ];

  const faqData = [
    {
      q: "What information should I provide in my inquiry?",
      a: "Share as much relevant information as possible, such as your product category, designs or references, fabric preferences, estimated quantities, target market, and any specific manufacturing requirements.",
    },
    {
      q: "Can I contact KAY TEX EXPORTERS before I have a finalized tech pack?",
      a: "Yes. You can share your initial concept, sketches, references, or product requirements so the team can understand what stage your project is currently at.",
    },
    {
      q: "Can you help with fabric sourcing?",
      a: "Yes. Fabric sourcing and customization support can be discussed based on the requirements of your product and collection.",
    },
    {
      q: "Can I request samples before bulk production?",
      a: "Sampling can be part of the product development process, allowing product details, fabric behavior, fit, and construction to be reviewed before bulk production.",
    },
    {
      q: "Do you work with international clothing brands?",
      a: "KAY TEX EXPORTERS supports apparel brands seeking manufacturing and product development partnerships from India, depending on project requirements.",
    },
    {
      q: "How do I start a manufacturing project?",
      a: "Submit an inquiry with your product details, references, quantities, fabric direction, and other relevant information. The team can then review your requirements and discuss the next steps.",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="bg-[#0a0a0a] text-[#f5f5f5] selection:bg-[#d4c5b9] selection:text-black overflow-x-hidden min-h-screen"
    >
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section
        ref={heroRef}
        className="relative w-full pt-32 pb-20 md:pt-44 md:pb-32 px-6 md:px-12 border-b border-[#2a2a2a] overflow-hidden"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span
                ref={heroEyebrowRef}
                className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.4em] text-[#d4c5b9] block mb-4 opacity-0"
              >
                LET'S WORK TOGETHER
              </span>
              <h1
                ref={heroHeadingRef}
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white uppercase leading-[1.08] mb-8 opacity-0"
              >
                Let's Build Your <br className="hidden sm:inline" />
                <span className="italic text-[#d4c5b9]">Next Collection.</span>
              </h1>
              <p
                ref={heroDescRef}
                className="text-sm sm:text-base md:text-lg text-white/70 font-light tracking-wide max-w-2xl leading-relaxed mb-10 opacity-0"
              >
                Have a product idea, tech pack, fabric requirement, or
                manufacturing project in mind? Share your requirements with KAY
                TEX -EXPORTERS and let's explore how we can bring your apparel
                vision to life.
              </p>
              <div
                ref={heroBtnRef}
                className="opacity-0 flex flex-wrap gap-4 items-center"
              >
                <button
                  type="button"
                  onClick={() => navigate("/inquire")}
                  className="border border-[#faf9f6]/25 bg-[#faf9f6] text-black hover:bg-[#d4c5b9] hover:border-[#d4c5b9] px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 hover:-translate-y-0.5 cursor-pointer flex items-center gap-3"
                >
                  Start an Inquiry
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 relative w-full">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-900 border border-[#2a2a2a] shadow-2xl">
                <img
                  ref={heroImgRef}
                  src="https://zeddworkstudio.com/wp-content/uploads/2025/10/organic-fabric-sourcing-zeddwork-studio.jpg"
                  alt="KAY TEX EXPORTERS Apparel Development and Material Craftsmanship"
                  className="w-full h-full object-cover object-center opacity-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 p-4 border border-white/10 bg-black/60 backdrop-blur-sm">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#d4c5b9] block mb-1">
                    APPAREL EXPORTS HOUSE
                  </span>
                  <p className="text-xs text-white/80 font-light tracking-wide">
                    Connecting design clarity with dependable Indian
                    manufacturing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. CONTACT INFORMATION & CHANNELS
          ========================================================================= */}
      <section
        ref={infoSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-b border-[#2a2a2a]"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-16 md:mb-24">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-4 font-mono">
              COLLABORATION CHANNELS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              Connect With{" "}
              <span className="italic text-[#d4c5b9]">KAY TEX EXPORTERS</span>
            </h2>
            <p className="text-sm sm:text-base font-light text-white/70 tracking-wide leading-relaxed">
              Whether you're developing a new collection or looking for a
              reliable apparel manufacturing partner, we're here to understand
              your requirements and help define the next step.
            </p>
          </div>

          {/* 4 Info Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
            {infoBlocks.map((block, idx) => (
              <div
                key={block.num}
                ref={(el) => (infoCardsRef.current[idx] = el)}
                className="p-8 border border-[#2a2a2a] bg-[#151515]/30 flex flex-col justify-between hover:border-[#d4c5b9]/40 transition-colors duration-300 opacity-0"
              >
                <div>
                  <span className="font-mono text-xs text-[#d4c5b9] block mb-4">
                    {block.num}
                  </span>
                  <h3 className="font-serif text-base uppercase tracking-wider text-white mb-3">
                    {block.title}
                  </h3>
                  <p className="text-xs font-light text-white/60 leading-relaxed tracking-wide">
                    {block.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Verified Contact Details Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-[#2a2a2a]">
            {/* Email */}
            <div className="p-6 border border-[#2a2a2a] bg-[#111111]/40 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-4 text-[#d4c5b9]">
                <Mail className="w-4 h-4" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                  EMAIL DIRECT
                </span>
              </div>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-serif text-base text-white hover:text-[#d4c5b9] transition-colors break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            {/* WhatsApp / Phone */}
            <div className="p-6 border border-[#2a2a2a] bg-[#111111]/40 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-4 text-[#d4c5b9]">
                <Phone className="w-4 h-4" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                  PHONE / WHATSAPP
                </span>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-base text-white hover:text-[#d4c5b9] transition-colors flex items-center justify-between"
              >
                <span>{DISPLAY_PHONE}</span>
                <span className="text-[10px] font-mono text-[#d4c5b9] uppercase tracking-wider">
                  Chat &rarr;
                </span>
              </a>
            </div>

            {/* Studio / Address */}
            <div className="p-6 border border-[#2a2a2a] bg-[#111111]/40 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-4 text-[#d4c5b9]">
                <MapPin className="w-4 h-4" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                  MANUFACTURING PLANT
                </span>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-light text-white/80 hover:text-white transition-colors leading-relaxed"
              >
                {STUDIO_ADDRESS}
              </a>
            </div>

            {/* Instagram */}
            <div className="p-6 border border-[#2a2a2a] bg-[#111111]/40 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-4 text-[#d4c5b9]">
                <Instagram className="w-4 h-4" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                  EDITORIAL & UPDATES
                </span>
              </div>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-base text-white hover:text-[#d4c5b9] transition-colors flex items-center justify-between"
              >
                <span>@kaytex.official</span>
                <span className="text-[10px] font-mono text-[#d4c5b9] uppercase tracking-wider">
                  Follow &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. WHY CONTACT KAY TEX EXPORTERS?
          ========================================================================= */}
      <section
        ref={whySectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-b border-[#2a2a2a]"
      >
        <div className="mx-auto max-w-4xl text-center">
          <div ref={whyCardRef} className="opacity-0">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d4c5b9] mb-6 font-mono">
              STRATEGIC PARTNERSHIP
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-8 leading-tight">
              One Conversation Can Define <br />
              <span className="italic text-[#d4c5b9]">
                the Right Production Path.
              </span>
            </h2>
            <div className="w-12 h-[1px] bg-[#d4c5b9] mx-auto mb-8" />
            <p className="text-sm sm:text-base font-light text-white/70 leading-relaxed tracking-wide max-w-2xl mx-auto">
              From product development and fabric sourcing to sampling and
              manufacturing, KAY TEX EXPORTERS brings multiple stages of apparel
              development together so brands can approach production with
              greater clarity.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. PROCESS SECTION: WHAT HAPPENS AFTER YOU SUBMIT?
          ========================================================================= */}
      <section
        ref={processSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-b border-[#2a2a2a]"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mb-16 md:mb-24">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-4 font-mono">
              NEXT STEPS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              What Happens{" "}
              <span className="italic text-[#d4c5b9]">After You Submit?</span>
            </h2>
            <p className="text-sm sm:text-base font-light text-white/70 tracking-wide leading-relaxed">
              We keep the on-boarding process transparent, prompt, and
              structured around your project requirements.
            </p>
          </div>

          {/* 4 Process Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.num}
                  ref={(el) => (processCardsRef.current[idx] = el)}
                  className="p-8 border border-[#2a2a2a] bg-[#151515]/20 flex flex-col justify-between hover:border-[#d4c5b9]/30 transition-colors opacity-0"
                >
                  <div>
                    <div className="w-10 h-10 border border-[#d4c5b9]/30 bg-black flex items-center justify-center mb-6">
                      <IconComp className="w-4 h-4 text-[#d4c5b9]" />
                    </div>
                    <span className="font-mono text-xs text-[#d4c5b9] block mb-2">
                      {step.num}
                    </span>
                    <h3 className="font-serif text-base uppercase tracking-wider text-white mb-3 font-normal">
                      {step.title}
                    </h3>
                    <p className="text-xs font-light text-white/60 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section
        ref={faqSectionRef}
        className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 border-b border-[#2a2a2a]"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/50 mb-4 font-mono">
              FAQ
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-tight text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-sm font-light text-white/70 tracking-wide leading-relaxed max-w-xl mx-auto">
              Essential answers to guide your manufacturing inquiry and project
              setup.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            {faqData.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  ref={(el) => (faqItemsRef.current[idx] = el)}
                  className="border-b border-[#2a2a2a] pb-4 opacity-0"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left py-4 hover:text-[#d4c5b9] transition-colors focus:outline-none cursor-pointer group"
                    aria-expanded={isOpen}
                    aria-controls={`faq-contact-answer-${idx}`}
                  >
                    <span className="font-serif text-base sm:text-lg uppercase tracking-wider text-white font-light group-hover:text-[#d4c5b9] transition-colors pr-6">
                      {faq.q}
                    </span>
                    <span className="text-[#d4c5b9] shrink-0 p-1 rounded-full border border-white/10 group-hover:border-[#d4c5b9]">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  <div
                    id={`faq-contact-answer-${idx}`}
                    className={`overflow-hidden transition-all duration-400 ease-in-out ${
                      isOpen ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-xs sm:text-sm font-light text-white/65 leading-relaxed tracking-wide pb-4">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. FINAL FULL-WIDTH CTA
          ========================================================================= */}
      <section
        ref={ctaSectionRef}
        className="relative w-full bg-[#000000] py-28 md:py-40 px-6 md:px-12 text-center overflow-hidden border-t border-[#1a1a1a]"
      >
        <div className="cta-content mx-auto max-w-3xl relative z-10">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d4c5b9] mb-6 font-mono">
            COLLABORATE WITH US
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-white mb-8 leading-tight">
            Have a Collection <br />
            <span className="italic text-[#d4c5b9]">in Mind?</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#d4c5b9] mx-auto mb-8 opacity-60" />
          <p className="text-xs sm:text-sm md:text-base font-light text-white/60 tracking-wide max-w-lg mx-auto mb-12 leading-relaxed">
            Let's turn your product requirements into a clear path toward
            development and production.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={() => navigate("/inquire")}
              className="w-full sm:w-auto bg-[#faf9f6] text-black px-10 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#d4c5b9] hover:border-[#d4c5b9] transition-all duration-500 hover:-translate-y-0.5 cursor-pointer text-center"
            >
              Start an Inquiry
            </button>
            <Link
              to="/services"
              className="w-full sm:w-auto border border-white/20 bg-black/40 hover:bg-[#d4c5b9] hover:text-black hover:border-white px-10 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-500 hover:-translate-y-0.5 cursor-pointer text-center"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
