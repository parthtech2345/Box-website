import React from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  SustainabilityHero,
  SustainabilityIntro,
  CorrugatedDifference,
  ResponsibleManufacturing,
  SustainableSolutions,
  ReducingPackagingWaste,
  SustainabilityFAQs,
} from "@/components/home/sustanablity";

export const metadata: Metadata = {
  title: "Sustainable Corrugated Packaging | AAVRIT PACKAGING",
  description:
    "Explore responsible corrugated packaging solutions, paper-based materials, efficient packaging design, and sustainable manufacturing practices at AAVRIT PACKAGING.",
  alternates: {
    canonical: "/sustainability",
  },
  openGraph: {
    title: "Sustainable Corrugated Packaging | AAVRIT PACKAGING",
    description:
      "Explore responsible corrugated packaging solutions, paper-based materials, efficient packaging design, and sustainable manufacturing practices at AAVRIT PACKAGING.",
    url: "/sustainability",
    siteName: "AAVRIT PACKAGING",
    type: "website",
    images: [
      {
        url: "/Sustanablity/Eco-Friendly Packaging and Renewable Earth.png",
        width: 1200,
        height: 630,
        alt: "AAVRIT PACKAGING Sustainable Packaging",
      },
    ],
  },
};

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#202A2E]">
      <Header />
      <main className="flex-1 w-full" id="main-content">
        {/* 1. Hero Banner */}
        <SustainabilityHero />

        {/* 2. Introduction: Why Sustainability Matters in Packaging */}
        <SustainabilityIntro />

        {/* 3. Understanding Sustainable Corrugated Packaging */}
        <CorrugatedDifference />

        {/* 4. Our Approach to Responsible Manufacturing */}
        <ResponsibleManufacturing />

        {/* 5. Sustainable Packaging Solutions */}
        <SustainableSolutions />

        {/* 6. Reducing Unnecessary Packaging Waste */}
        <ReducingPackagingWaste />

        {/* 7. Sustainability FAQs */}
        <SustainabilityFAQs />
      </main>
      <Footer />
    </div>
  );
}
