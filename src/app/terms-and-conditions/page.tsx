import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TermsHero from "@/components/terms/TermsHero";
import TermsPolicyBar from "@/components/terms/TermsPolicyBar";
import TermsInteractiveLayout from "@/components/terms/TermsInteractiveLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions | AAVRIT PACKAGING",
  description:
    "Review the official Terms & Conditions for AAVRIT PACKAGING. Learn about our packaging inquiries, custom quotations, manufacturing specifications, order processes, and website policies.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | AAVRIT PACKAGING",
    description:
      "Review the official commercial and website terms for AAVRIT PACKAGING, leading industrial corrugated box manufacturer in India.",
    url: "/terms-and-conditions",
    images: [
      {
        url: "/contact/Contact Support Workspace.png",
        width: 1200,
        height: 630,
        alt: "AAVRIT PACKAGING Terms & Conditions",
      },
    ],
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#202A2E] flex flex-col">
      {/* 1. Global Navigation */}
      <Header />

      <main className="flex-1 w-full">
        {/* 2. Hero Section with Contact Workspace Banner & Entrance Animation */}
        <TermsHero />

        {/* 3. Policy Information Bar with Metadata & Print Action */}
        <TermsPolicyBar />

        {/* 4. Two-Column Terms Layout: Left Sticky TOC + Right Content */}
        <TermsInteractiveLayout />
      </main>

      {/* 5. Global Footer */}
      <Footer />
    </div>
  );
}
