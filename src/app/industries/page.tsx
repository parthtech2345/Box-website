import React from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IndustriesHero from "@/components/industry/IndustriesHero";
import IndustriesIntro from "@/components/industry/IndustriesIntro";
import IndustriesCategories from "@/components/industry/IndustriesCategories";
import WhyIndustriesChooseUs from "@/components/industry/WhyIndustriesChooseUs";
import IndustriesCTA from "@/components/industry/IndustriesCTA";

export const metadata: Metadata = {
  title: "Industries | Corrugated Packaging Solutions | AAVRIT PACKAGING",
  description:
    "Delivering reliable and customized corrugated packaging solutions for automotive, pharmaceutical, food & beverage, e-commerce, electronics, and textile industries.",
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#202A2E]">
      <Header />
      <main className="flex-1 w-full">
        <IndustriesHero />
        <IndustriesIntro />
        <IndustriesCategories />
        <WhyIndustriesChooseUs />
        <IndustriesCTA />
      </main>
      <Footer />
    </div>
  );
}
