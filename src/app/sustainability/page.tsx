import React, { Suspense } from "react";
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
  SustainabilityCTA,
} from "@/components/home/sustanablity";
import {
  getSustainabilityBanner,
  getSustainabilityIntro,
  getSustainabilityDifference,
  getSustainabilityManufacturing,
  getSustainabilitySolutions,
  getSustainabilityWasteReduction,
  getSustainabilityFAQs,
  getSustainabilityCTA,
  getSustainabilitySEO,
} from "@/lib/sustainabilityData";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSustainabilitySEO();

  const title = seo?.metaTitle || "Sustainable Corrugated Packaging | AAVRIT PACKAGING";
  const description =
    seo?.metaDescription ||
    "Explore responsible corrugated packaging solutions, paper-based materials, efficient packaging design, and sustainable manufacturing practices at AAVRIT PACKAGING.";
  const canonical = seo?.canonicalLink || "/sustainability";
  const ogImage = seo?.ogImage || "/Sustanablity/Eco-Friendly Packaging and Renewable Earth.png";
  const ogImageAlt = seo?.ogImageAlt || "AAVRIT PACKAGING Sustainable Packaging";

  return {
    title,
    description,
    keywords: seo?.metaKeywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "AAVRIT PACKAGING",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
  };
}

async function SustainabilityContent() {
  const [
    banner,
    intro,
    difference,
    manufacturing,
    solutions,
    wasteReduction,
    faqs,
    cta,
  ] = await Promise.all([
    getSustainabilityBanner(),
    getSustainabilityIntro(),
    getSustainabilityDifference(),
    getSustainabilityManufacturing(),
    getSustainabilitySolutions(),
    getSustainabilityWasteReduction(),
    getSustainabilityFAQs(),
    getSustainabilityCTA(),
  ]);

  return (
    <>
      {/* 1. Hero Banner */}
      <SustainabilityHero data={banner} />

      {/* 2. Introduction: Why Sustainability Matters in Packaging */}
      <SustainabilityIntro data={intro} />

      {/* 3. Understanding Sustainable Corrugated Packaging */}
      <CorrugatedDifference data={difference} />

      {/* 4. Our Approach to Responsible Manufacturing */}
      <ResponsibleManufacturing data={manufacturing} />

      {/* 5. Sustainable Packaging Solutions */}
      <SustainableSolutions data={solutions} />

      {/* 6. Reducing Unnecessary Packaging Waste */}
      <ReducingPackagingWaste data={wasteReduction} />

      {/* 7. Sustainability FAQs */}
      <SustainabilityFAQs data={faqs} />

      {/* 8. Call to Action */}
      <SustainabilityCTA data={cta} />
    </>
  );
}

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#202A2E]">
      <Header />
      <main className="flex-1 w-full" id="main-content">
        <Suspense fallback={<div className="min-h-[60vh] bg-[#FFFFFF]" />}>
          <SustainabilityContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

