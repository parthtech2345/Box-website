"use client";

import React, { useState, useEffect } from "react";
import Hero from "@/components/home/Hero";
import AboutUs from "@/components/home/AboutUs";
import ProductCategories from "@/components/home/ProductCategories";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BoxConstruction from "@/components/home/BoxConstruction";
import OurClients from "@/components/home/OurClients";
import Testimonial from "@/components/home/Testimonial";
import CustomPackaging from "@/components/home/CustomPackaging";
import IndustriesWeServe from "@/components/home/IndustriesWeServe";
import CaseStudies from "@/components/home/CaseStudies";
import ManufacturingProcess from "@/components/home/ManufacturingProcess";
import Sustainability from "@/components/home/Sustainability";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function HomeSectionsController() {
  const [sections, setSections] = useState<Record<string, any>>({});

  useEffect(() => {
    let isMounted = true;
    async function fetchLiveSections() {
      try {
        const res = await fetch("/api/home-sections");
        const json = await res.json();
        if (isMounted && json.success && json.data) {
          setSections(json.data);
        }
      } catch (e) {
        // Fallback to static defaults silently
      }
    }
    fetchLiveSections();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {/* 2. Hero Section */}
      <Hero data={sections["hero"]} />

      {/* Section 1: Company Introduction & Animated Statistics */}
      <AboutUs data={sections["about-us"]} />

      {/* Section 2: Product Categories */}
      <ProductCategories data={sections["product-categories"]} />

      {/* Section 3: Why Choose Us */}
      <WhyChooseUs data={sections["why-choose-us"]} />

      {/* Section 4: Custom Packaging Solutions */}
      <CustomPackaging data={sections["custom-packaging"]} />

      {/* Section 5: Manufacturing Process */}
      <ManufacturingProcess data={sections["manufacturing-process"]} />

      {/* Section 6: Industries We Serve */}
      <IndustriesWeServe />

      {/* Section 7: Case Studies / Packaging Applications */}
      <CaseStudies />

      {/* Section 8: Corrugated Box Construction (3/5/7 Ply) */}
      <BoxConstruction />

      {/* Section 8.5: Sustainability – Packaging with Purpose */}
      <Sustainability />

      {/* Section 8.6: Trusted by Businesses - Client Logo Marquee */}
      <OurClients data={sections["our-clients"]} />

      {/* Section 8.7: Testimonials – Animated Rotating Card Showcase */}
      <Testimonial data={sections["testimonials"]} />

      {/* Section 8.8: Frequently Asked Questions */}
      <FAQ data={sections["faq"]} />

      {/* Section 8.9: Premium Kraft Industrial CTA */}
      <CTA data={sections["cta"]} />
    </>
  );
}
