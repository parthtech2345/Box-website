import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import CompanyHistory from "@/components/about/CompanyHistory";
import GrowthJourney from "@/components/about/GrowthJourney";
import CoreValues from "@/components/about/CoreValues";
import VisionMission from "@/components/about/VisionMission";
import ManufacturingExperience from "@/components/about/ManufacturingExperience";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import WorkingPrinciples from "@/components/about/WorkingPrinciples";
import AboutFAQ from "@/components/about/AboutFAQ";

export const metadata: Metadata = {
  title: "About Us | AAVRIT PACKAGING – Built on Purpose. Driven by Packaging.",
  description:
    "Discover the company, values, manufacturing approach, and sustainable kraft corrugated box engineering behind Aavrit Packaging in Gujarat, India.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2EB] text-[#202A2E]">
      {/* 1. Official Header */}
      <Header />

      <main className="flex-1 flex flex-col overflow-x-hidden">
        {/* Section 1: Hero Banner */}
        <AboutHero />

        {/* Section 2: Company History */}
        <CompanyHistory />

        {/* Section 3: Our Growth Journey */}
        <GrowthJourney />

        {/* Section 4: Our Core Values */}
        <CoreValues />

        {/* Section 5: Our Vision & Mission */}
        <VisionMission />

        {/* Section 6: Manufacturing Experience / Project Showcase Slider */}
        <ManufacturingExperience />

        {/* Section 7: Owner & Management Team */}
        <LeadershipTeam />

        {/* Section 8: Production Philosophy, Customer Approach & Quality Commitment */}
        <WorkingPrinciples />

        {/* Section 9: Frequently Asked Questions (FAQ) */}
        <AboutFAQ />
      </main>

      {/* Official Footer */}
      <Footer />
    </div>
  );
}
