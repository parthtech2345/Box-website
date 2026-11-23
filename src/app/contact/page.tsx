import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ContactHero,
  ContactInfoCards,
  ContactInquiryForm,
  ContactLocationMap,
  WhyContactUs,
  ContactFAQs,
} from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact Us | AAVRIT PACKAGING",
  description:
    "Connect with AAVRIT PACKAGING for industrial corrugated box inquiries, custom packaging quotations, technical specifications, and factory visits.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | AAVRIT PACKAGING",
    description:
      "Looking for the right packaging solution? Connect with our engineering and sales team for quotations, box prototyping, and bulk supply agreements.",
    url: "/contact",
    images: [
      {
        url: "/contact/Contact Support Workspace.png",
        width: 1200,
        height: 630,
        alt: "AAVRIT PACKAGING Contact Support Workspace",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#202A2E] flex flex-col">
      {/* 1. Global Navigation */}
      <Header />

      <main className="flex-1 w-full">
        {/* 2. Hero Section */}
        <ContactHero />

        {/* 3. Contact Information Cards */}
        <ContactInfoCards />

        {/* 4. Main Inquiry Form & Assistance Panel */}
        <ContactInquiryForm />

        {/* 5. Google Maps & Office Location */}
        <ContactLocationMap />

        {/* 6. Why Contact AAVRIT PACKAGING */}
        <WhyContactUs />

        {/* 7. Contact FAQs */}
        <ContactFAQs />
      </main>

      {/* 9. Global Footer */}
      <Footer />
    </div>
  );
}
