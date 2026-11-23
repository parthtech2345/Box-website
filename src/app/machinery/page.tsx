import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MachineryHero from "@/components/machinery/MachineryHero";
import MachineryIntro from "@/components/machinery/MachineryIntro";
import MachineryGrid from "@/components/machinery/MachineryGrid";
import WhyMachineryMatters from "@/components/machinery/WhyMachineryMatters";
import MachineryCTA from "@/components/machinery/MachineryCTA";

export const metadata: Metadata = {
  title: "Machinery & Technology | Corrugated Box Manufacturing Equipment | AAVRIT PACKAGING",
  description:
    "Discover the machinery and manufacturing technology behind our corrugated packaging solutions: automatic corrugation lines, flexo printer slotters, die cutters, and folder gluers.",
};

export default function MachineryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#202A2E]">
      <Header />
      <main className="flex-1 w-full">
        {/* 1. Hero Banner */}
        <MachineryHero />

        {/* 2. Introduction: Technology Behind Every Box */}
        <MachineryIntro />

        {/* 3. Machinery Collection: Exactly 6 Cards */}
        <MachineryGrid />

        {/* 4. Why Our Machinery Matters: Supporting Consistent Manufacturing */}
        <WhyMachineryMatters />

        {/* 5. Final CTA */}
        <MachineryCTA />
      </main>
      <Footer />
    </div>
  );
}
