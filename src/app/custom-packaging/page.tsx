import React from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomHero from "@/components/Custompackaging/CustomHero";
import CustomBoxTypes from "@/components/Custompackaging/CustomBoxTypes";
import CustomCapabilities from "@/components/Custompackaging/CustomCapabilities";
import CustomProcess from "@/components/Custompackaging/CustomProcess";
import CustomConfigurator from "@/components/Custompackaging/CustomConfigurator";

export const metadata: Metadata = {
  title: "Custom Corrugated Packaging & Boxes | AAVRIT PACKAGING",
  description:
    "Bespoke corrugated packaging fabrication. Custom dimensions, 3/5/7-ply flute engineering, high-definition flexo printing, and 24-hour CAD prototyping.",
};

export default function CustomPackagingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#202A2E]">
      <Header />
      <main className="flex-1 w-full">
        <CustomHero />
        <CustomBoxTypes />
        <CustomCapabilities />
        <CustomProcess />
        <CustomConfigurator />
      </main>
      <Footer />
    </div>
  );
}
