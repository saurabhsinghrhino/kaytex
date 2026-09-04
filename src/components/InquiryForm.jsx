import { useState } from "react";
import { z } from "zod";
import { Loader2 } from "lucide-react";

const WHATSAPP_NUMBER = "918826993211";

// Client-side Zod validation schema matching frontend rules
const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;
const clientInquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  phone: z
    .string()
    .trim()
    .min(7, "Phone number is too short")
    .max(20, "Phone number is too long")
    .regex(phoneRegex, "Invalid phone number format"),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(254, "Email is too long"),
  query: z
    .string()
    .trim()
    .min(10, "Query must be at least 10 characters")
    .max(2000, "Query is too long (max 2000 chars)"),
});

export const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("IDLE"); // IDLE | OPENING | ERROR
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    setErrorMessage("");

    // 1. Zod Frontend Validation
    const validation = clientInquirySchema.safeParse(formData);
    if (!validation.success) {
      const formattedErrors = {};
      validation.error.errors.forEach((err) => {
        formattedErrors[err.path[0]] = err.message;
      });
      setErrors(formattedErrors);
      return;
    }

    // 2. Format Structured WhatsApp Message
    const { name, phone, email, query } = validation.data;

    const message = [
      "Hello KAYTEX-EXPORTERS,",
      "",
      "I would like to discuss an apparel manufacturing/export inquiry.",
      "",
      "━━━━━━━━━━━━━━━━━━",
      "INQUIRY DETAILS",
      "━━━━━━━━━━━━━━━━━━",
      "",
      `Full Name: ${name}`,
      "",
      `Email: ${email}`,
      "",
      `Phone / WhatsApp: ${phone}`,
      "",
      "Project Details:",
      query,
      "",
      "━━━━━━━━━━━━━━━━━━",
      "",
      "I look forward to discussing my requirements with KAYTEX-EXPORTERS.",
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

  return (
    <section
      id="inquiry"
      className="relative w-full bg-[#0a0a0a] text-[#f5f5f5] px-6 md:px-12 py-24 md:py-36 overflow-hidden border-t border-[#2a2a2a]"
    >
      <div className="mx-auto max-w-4xl">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/70  mb-6 font-mono">
          DIRECT LINE
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl font-light uppercase tracking-tight text-[#f5f5f5] mb-16 leading-none">
          LET'S <span className="italic text-[#c8a96a]">TALK.</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 max-w-3xl"
        >
          {/* Form Fields */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex-1 flex flex-col">
              <label
                htmlFor="inquiry-name"
                className="text-[20px] uppercase tracking-widest text-white/70  font-mono mb-2"
              >
                My Name Is
              </label>
              <input
                id="inquiry-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="bg-transparent border-b border-[#2a2a2a] pb-2 text-base font-light tracking-wide text-[#f5f5f5] focus:outline-none focus:border-[#c8a96a] transition-colors duration-300 placeholder:text-[20px] placeholder-white/20"
                disabled={status === "OPENING"}
              />
              {errors.name && (
                <span className="text-[15px] text-red-400 mt-2 tracking-wide font-mono">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="flex-1 flex flex-col">
              <label
                htmlFor="inquiry-phone"
                className="text-[20px]  uppercase tracking-widest text-white/70 font-mono mb-2"
              >
                My Phone Is
              </label>
              <input
                id="inquiry-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="bg-transparent border-b border-[#2a2a2a] pb-2 text-base font-light tracking-wide text-[#f5f5f5] focus:outline-none focus:border-[#c8a96a] transition-colors duration-300 placeholder:text-[20px] placeholder-white/20"
                disabled={status === "OPENING"}
              />
              {errors.phone && (
                <span className="text-[15px] text-red-400 mt-2 tracking-wide font-mono">
                  {errors.phone}
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="inquiry-email"
              className="text-[20px]  uppercase tracking-widest text-white/70  font-mono mb-2"
            >
              You Can Email Me At
            </label>
            <input
              id="inquiry-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="bg-transparent border-b border-[#2a2a2a] pb-2 text-base font-light tracking-wide text-[#f5f5f5] focus:outline-none focus:border-[#c8a96a] transition-colors duration-300 placeholder:text-[20px] placeholder-white/20"
              disabled={status === "OPENING"}
            />
            {errors.email && (
              <span className="text-[15px] text-red-400 mt-2 tracking-wide font-mono">
                {errors.email}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="inquiry-query"
              className="text-[20px]  uppercase tracking-widest text-white/70  font-mono mb-2"
            >
              Tell Us About Your Requirement
            </label>
            <textarea
              id="inquiry-query"
              name="query"
              value={formData.query}
              onChange={handleChange}
              placeholder="I would like to discuss a custom apparel order for our studio..."
              rows={4}
              className="bg-transparent border-b placeholder:text-[20px] border-[#2a2a2a] pb-2 text-base font-light tracking-wide text-[#f5f5f5] focus:outline-none focus:border-[#c8a96a] transition-colors duration-300 resize-none placeholder-white/20"
              disabled={status === "OPENING"}
            />
            {errors.query && (
              <span className="text-[15px] text-red-400 mt-2 tracking-wide font-mono">
                {errors.query}
              </span>
            )}
          </div>

          {/* Status Notice */}
          {status === "OPENING" && (
            <div className="p-4 border border-[#c8a96a]/40 bg-[#c8a96a]/10 text-[#c8a96a] text-xs font-mono tracking-wide leading-relaxed">
              Opening WhatsApp with your inquiry...
            </div>
          )}

          {/* Error messaging */}
          {status === "ERROR" && (
            <div className="text-red-400 text-xs font-mono tracking-wide">
              {errorMessage ||
                "Unable to open WhatsApp automatically. Please contact us directly at +91 88269 93211."}
            </div>
          )}

          {/* Submit Button */}
          <div className="mt-4 flex justify-start">
            <button
              type="submit"
              disabled={status === "OPENING"}
              className="group flex items-center gap-3 bg-[#f5f5f5] text-black px-10 py-5 text-xs uppercase tracking-[0.3em] font-medium hover:bg-[#c8a96a] transition-all duration-500 hover:-translate-y-0.5 hover:rounded-4xl hover:shadow-lg hover:shadow-[#c8a96a]/40 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "OPENING" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin text-black" />
                  <span>Opening WhatsApp...</span>
                </>
              ) : (
                <span>Send Inquiry on WhatsApp &rarr;</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InquiryForm;
