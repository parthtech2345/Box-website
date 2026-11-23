import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivacyHero from "@/components/privacy/PrivacyHero";
import PrivacyPolicyBar from "@/components/privacy/PrivacyPolicyBar";
import PrivacyContent from "@/components/privacy/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | AAVRIT PACKAGING",
  description:
    "Learn how AAVRIT PACKAGING protects your corporate data, technical box drawings, contact information, and packaging inquiry details. Strict B2B confidentiality standards.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | AAVRIT PACKAGING",
    description:
      "Learn how AAVRIT PACKAGING protects your corporate data, technical box drawings, and packaging inquiries.",
    url: "/privacy-policy",
    images: [
      {
        url: "/contact/Contact Support Workspace.png",
        width: 1200,
        height: 630,
        alt: "AAVRIT PACKAGING Privacy Policy",
      },
    ],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#202A2E] flex flex-col">
      {/* 1. Global Navigation */}
      <Header />

      <main className="flex-1 w-full">
        {/* 2. Hero Section with Contact Workspace Banner & Entrance Animation */}
        <PrivacyHero />

        {/* 3. Policy Information Bar with Metadata & Print Action */}
        <PrivacyPolicyBar />

        {/* 4. Two-Column Privacy Layout: Left Sticky TOC + Right Content */}
        <PrivacyContent />
      </main>

      {/* 5. Global Footer */}
      <Footer />
    </div>
  );
}
