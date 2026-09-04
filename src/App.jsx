import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import useLenis from "./hooks/useLenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WhatsAppButton from "./components/WhatsAppButton";
import InstagramButton from "./components/InstagramButton";
import InquireForm from "./components/InquiryForm";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Individual service sub-pages
import ClothingDesign from "./pages/services/ClothingDesign";
import FabricSourcing from "./pages/services/FabricSourcing";
import FabricCustomisation from "./pages/services/FabricCustomisation";
import ClothingManufacturing from "./pages/services/ClothingManufacturing";

// Secondary sub-service pages
import TechPackDevelopment from "./pages/services/TechPackDevelopment";
import ThreeDGarments from "./pages/services/ThreeDGarments";
import WomensClothing from "./pages/services/WomensClothing";
import Loungewear from "./pages/services/Loungewear";

// SEO title mapping based on route pathnames
const routeTitles = {
  "/": "KAYTEX-EXPORTERS | Premium Apparel",
  "/about": "ABOUT KAYTEX-EXPORTERS | Our Story",
  "/services": "KAYTEX-EXPORTERS | Services",
  "/faq": "KAYTEX-EXPORTERS | Frequently Asked Questions",
  "/inquire": "CONTACT KAYTEX-EXPORTERS | Apparel Manufacturing & Development",
  "/contact": "CONTACT KAYTEX-EXPORTERS | Apparel Manufacturing & Development",
  "/services/clothing-design": "KAYTEX-EXPORTERS | Clothing Design Services",
  "/services/clothing-design/tech-pack-development":
    "KAYTEX-EXPORTERS | Tech Pack Development",
  "/services/clothing-design/3d-garments":
    "KAYTEX-EXPORTERS | 3D Garment Visualization",
  "/services/fabric-sourcing": "KAYTEX-EXPORTERS | Fabric Sourcing",
  "/services/fabric-customisation": "KAYTEX-EXPORTERS | Fabric Customisation",
  "/services/clothing-manufacturing":
    "KAYTEX-EXPORTERS | Clothing Manufacturing",
  "/services/clothing-manufacturing/womens-clothing":
    "KAYTEX-EXPORTERS | Women's Clothing Manufacturing",
  "/services/clothing-manufacturing/loungewear":
    "KAYTEX-EXPORTERS | Loungewear Manufacturing",
};

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Initialize Lenis smooth scrolling globally
  const { lenis } = useLenis();

  useEffect(() => {
    // Disable scrolling when preloader is running
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Recalculate ScrollTrigger markers after layout resolves
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  // Handle SEO Document Title updates dynamically
  useEffect(() => {
    document.title =
      routeTitles[location.pathname] || "KAYTEX-EXPORTERS | Premium Apparel";
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] overflow-x-hidden selection:bg-[#d4c5b9] selection:text-black">
      {/* 1. Cinematic Preloader */}
      <Preloader onComplete={() => setLoading(false)} />

      {/* 2. Main Site Wrapper (Revealed once loading completes) */}
      {!loading && (
        <>
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route
                path="/services/clothing-design"
                element={<ClothingDesign />}
              />
              <Route
                path="/services/clothing-design/tech-pack-development"
                element={<TechPackDevelopment />}
              />
              <Route
                path="/services/clothing-design/3d-garments"
                element={<ThreeDGarments />}
              />
              <Route
                path="/services/fabric-sourcing"
                element={<FabricSourcing />}
              />
              <Route
                path="/services/fabric-customisation"
                element={<FabricCustomisation />}
              />
              <Route
                path="/services/clothing-manufacturing"
                element={<ClothingManufacturing />}
              />
              <Route
                path="/services/clothing-manufacturing/womens-clothing"
                element={<WomensClothing />}
              />
              <Route
                path="/services/clothing-manufacturing/loungewear"
                element={<Loungewear />}
              />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/inquire" element={<InquireForm />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <InstagramButton />
          <WhatsAppButton />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
