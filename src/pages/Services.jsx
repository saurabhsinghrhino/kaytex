import React from "react";
import ServicesHero from "../components/services/ServicesHero";
import { WhyChooseKAYTEX } from "../components/services/WhyChooseKaytex.jsx";
import IntegratedServices from "../components/services/IntegratedServices";
import ProcessSection from "../components/services/ProcessSection";
import ResponsibleProduction from "../components/services/ResponsibleProduction";
import ServiceVisualStory from "../components/services/ServiceVisualStory";
import FAQSection from "../components/FAQ";
import ServicesCTA from "../components/services/ServicesCTA";

export const Services = () => {
  return (
    <div className="bg-[#0a0a0a]">
      {/* 1. Hero: End-to-End Apparel Solutions */}
      <ServicesHero />

      {/* 2. Why Choose kaytex */}
      <WhyChooseKAYTEX />

      {/* 3. Our Integrated Services (Design, Sourcing, Manufacturing) */}
      <IntegratedServices />

      {/* 4. How We Work (Vertical/Horizontal timeline progress) */}
      <ProcessSection />

      {/* 5. Responsible Production, Global Standards */}
      <ResponsibleProduction />

      {/* 6. Visual Section: From Idea to Finished Garment */}
      <ServiceVisualStory />

      {/* 7. Frequently Asked Questions */}
      <FAQSection />
    </div>
  );
};

export default Services;
