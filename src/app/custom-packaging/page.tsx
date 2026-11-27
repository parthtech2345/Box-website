import React from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomHero from "@/components/Custompackaging/CustomHero";
import CustomBoxTypes from "@/components/Custompackaging/CustomBoxTypes";
import CustomCapabilities from "@/components/Custompackaging/CustomCapabilities";
import CustomProcess from "@/components/Custompackaging/CustomProcess";
import CustomConfigurator from "@/components/Custompackaging/CustomConfigurator";
import { getAllCustomPackagingSections } from "@/lib/customPackagingData";

export const metadata: Metadata = {
  title: "Custom Corrugated Packaging & Boxes | AAVRIT PACKAGING",
  description:
    "Bespoke corrugated packaging fabrication. Custom dimensions, 3/5/7-ply flute engineering, high-definition flexo printing, and 24-hour CAD prototyping.",
};

export default async function CustomPackagingPage() {
  const sections = await getAllCustomPackagingSections();

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#202A2E]">
      <Header />
      <main className="flex-1 w-full">
        <CustomHero data={sections?.hero} />
        <CustomBoxTypes data={sections?.["box-types"]} />
        <CustomCapabilities data={sections?.capabilities} />
        <CustomProcess data={sections?.process} />
        <CustomConfigurator data={sections?.configurator} />
      </main>
      <Footer />
    </div>
  );
}
