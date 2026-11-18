import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Homepage Sections inside src/components/home/
import Hero from "@/components/home/Hero";
import AboutUs from "@/components/home/AboutUs";
import ProductCategories from "@/components/home/ProductCategories";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BoxConstruction from "@/components/home/BoxConstruction";
import OurClients from "@/components/home/OurClients";
import CustomPackaging from "@/components/home/CustomPackaging";
import IndustriesWeServe from "@/components/home/IndustriesWeServe";
import ManufacturingProcess from "@/components/home/ManufacturingProcess";
import MachineryInfrastructure from "@/components/home/MachineryInfrastructure";
import QualityAssurance from "@/components/home/QualityAssurance";
import CaseStudies from "@/components/home/CaseStudies";
import FactoryGallery from "@/components/home/FactoryGallery";
import Sustainability from "@/components/home/Sustainability";
import FAQ from "@/components/home/FAQ";
import FinalInquiryCTA from "@/components/home/FinalInquiryCTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2EB] text-[#202A2E]">
      {/* 1. Header & Navigation with Utility Strip */}
      <Header />

      <main className="flex-1 flex flex-col overflow-x-hidden">
        {/* 2. Hero Section */}
        <Hero />

        {/* Section 1: Company Introduction & Animated Statistics */}
        <AboutUs />

        {/* Section 2: Product Categories */}
        <ProductCategories />

        {/* Section 3: Why Choose Us */}
        <WhyChooseUs />

        {/* Section 4: Custom Packaging Solutions */}
        <CustomPackaging />

        {/* Section 5: Manufacturing Process */}
        <ManufacturingProcess />

        {/* Section 6: Industries We Serve */}
        <IndustriesWeServe />

        {/* Section 7: Case Studies / Packaging Applications */}
        <CaseStudies />

        {/* Section 8: Corrugated Box Construction (3/5/7 Ply) */}
        <BoxConstruction />

        {/* Section 8.5: Sustainability – Packaging with Purpose */}
        <Sustainability />

        {/* Section 8.6: Trusted by Businesses - Client Logo Marquee */}
        <OurClients />

        {/* Section 9: Machinery and Infrastructure */}
        <MachineryInfrastructure />

        {/* Section 10: Quality Assurance */}
        <QualityAssurance />

        {/* Section 11: Factory Gallery / Video */}
        <FactoryGallery />

        {/* Section 12: FAQ */}
        <FAQ />

        {/* Section 14: Final Inquiry CTA */}
        <FinalInquiryCTA />

        {/* Section 15: Footer */}
        <Footer />
      </main>
    </div>
  );
}
