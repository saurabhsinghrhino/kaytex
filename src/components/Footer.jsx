import { Link } from "react-router-dom";
import logo from "../assets/kaytex-logo.png"; // Adjust path to match your asset location

const INSTAGRAM_URL = "YOUR_KAYTEX_INSTAGRAM_URL";
const WHATSAPP_NUMBER = "+918826993211";
const DEFAULT_MESSAGE =
  "Hello KAYTEX-EXPORTERS, I would like to know more about your apparel manufacturing and export services.";

export const Footer = () => {
  const encodedMessage = encodeURIComponent(DEFAULT_MESSAGE);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  return (
    <footer className="relative w-full bg-[#d4c5b9] text-black font-bold px-6 md:px-12 py-16 md:py-24 border-t border-black/10 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Brand Info & Tagline */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-3 flex flex-col">
            <Link to="/" aria-label="KAYTEX-EXPORTERS Home">
              <img
                src={logo}
                alt="KAYTEX-EXPORTERS"
                className="h-20 w-20 sm:h-20 md:h-24 w-auto object-contain brightness-0 mb-6"
              />
            </Link>
            <p className="text-[15px] tracking-wide text-black font-bold max-w-xs leading-relaxed mb-6">
              Building thoughtful apparel solutions for brands that care about
              design, quality, and consistency.
            </p>

            {/* Social Text links */}
            <div className="flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-mono uppercase tracking-widest text-black font-bold hover:text-black transition-colors duration-300"
              >
                Instagram
              </a>
              <span className="text-black font-bold">/</span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-mono uppercase tracking-widest text-black font-bold hover:text-black transition-colors duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Column 2: COMPANY */}
          <div className="lg:col-span-1.5 xl:col-span-1 flex flex-col">
            <span className="text-[15px] uppercase tracking-[0.2em] text-black font-bold font-mono mb-5">
              Company
            </span>
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-[11px] text-black font-bold hover:text-black transition-colors uppercase tracking-wider text-left"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-[11px] text-black font-bold hover:text-black transition-colors uppercase tracking-wider text-left"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-[11px] text-black font-bold hover:text-black transition-colors uppercase tracking-wider text-left"
              >
                Services
              </Link>
              <Link
                to="/faq"
                className="text-[11px] text-black font-bold hover:text-black transition-colors uppercase tracking-wider text-left"
              >
                FAQ
              </Link>
              <Link
                to="/inquire"
                className="text-[11px] text-black font-bold hover:text-black transition-colors uppercase tracking-wider text-left"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Column 3: SERVICES */}
          <div className="lg:col-span-2 flex flex-col">
            <span className="text-[15px] uppercase tracking-[0.2em] text-black font-bold font-mono mb-5">
              Services
            </span>
            <div className="flex flex-col space-y-3">
              <Link
                to="/services/clothing-design"
                className="text-[11px] text-black font-bold hover:text-black transition-colors uppercase tracking-wider text-left"
              >
                Clothing Design
              </Link>
              <Link
                to="/services/fabric-sourcing"
                className="text-[11px] text-black font-bold hover:text-black transition-colors uppercase tracking-wider text-left"
              >
                Fabric Sourcing
              </Link>
              <Link
                to="/services/fabric-customisation"
                className="text-[11px] text-black font-bold hover:text-black transition-colors uppercase tracking-wider text-left"
              >
                Fabric Customisation
              </Link>
              <Link
                to="/services/clothing-manufacturing"
                className="text-[11px] text-black font-bold hover:text-black transition-colors uppercase tracking-wider text-left"
              >
                Clothing Manufacturing
              </Link>
            </div>
          </div>

          {/* Column 4: DESIGN SERVICES */}
          <div className="lg:col-span-2 flex flex-col">
            <span className="text-[15px] uppercase tracking-[0.2em] text-black font-bold font-mono mb-5">
              Design Services
            </span>
            <div className="flex flex-col space-y-3">
              <Link
                to="/services/clothing-design/tech-pack-development"
                className="text-[11px] text-black font-bold hover:text-black transition-colors uppercase tracking-wider text-left"
              >
                Tech Pack Development
              </Link>
              <Link
                to="/services/clothing-design/3d-garments"
                className="text-[11px] text-black font-bold hover:text-black transition-colors uppercase tracking-wider text-left"
              >
                3D Garments
              </Link>
            </div>
          </div>

          {/* Column 5: MANUFACTURING */}
          <div className="lg:col-span-2 flex flex-col">
            <span className="text-[15px] uppercase tracking-[0.2em] text-black font-bold font-mono mb-5">
              Manufacturing
            </span>
            <div className="flex flex-col space-y-3">
              <Link
                to="/services/clothing-manufacturing/womens-clothing"
                className="text-[11px] text-black font-bold hover:text-black transition-colors uppercase tracking-wider text-left"
              >
                Women's Clothing
              </Link>
              <Link
                to="/services/clothing-manufacturing/loungewear"
                className="text-[11px] text-black font-bold hover:text-black transition-colors uppercase tracking-wider text-left"
              >
                Loungewear
              </Link>
            </div>
          </div>

          {/* Column 6: CONTACT */}
          <div className="lg:col-span-2 flex flex-col">
            <span className="text-[15px] uppercase tracking-[0.2em] text-black font-bold font-mono mb-5">
              Contact
            </span>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:Info@kaytex.in"
                className="text-[11px] text-black font-bold hover:text-black transition-colors uppercase tracking-wider text-left break-all"
              >
                Info@kaytex.in
              </a>
              <a
                href="tel:+918826993211"
                className="text-[11px] text-black font-bold hover:text-black transition-colors uppercase tracking-wider text-left"
              >
                8826993211
              </a>
              <a
                href="https://maps.app.goo.gl/QqrWxKonAHCsWtsAA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-black font-bold hover:text-black transition-colors uppercase tracking-wider text-left leading-relaxed"
              >
                Plot 101, Sector 155, Noida 201301
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-black/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[15px] tracking-wider uppercase font-mono text-black font-bold">
          <div>
            © {new Date().getFullYear()} KAYTEX-EXPORTERS. ALL RIGHTS RESERVED.
          </div>

          <Link
            to="https://digitalwingss.com/"
            target="_blank"
            className="hover:text-black transition-colors"
          >
            Designed By digitalwings
          </Link>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-black transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
