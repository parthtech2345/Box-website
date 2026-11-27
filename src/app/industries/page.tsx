import React, { Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IndustriesHero from "@/components/industry/IndustriesHero";
import IndustriesIntro from "@/components/industry/IndustriesIntro";
import IndustriesCategories from "@/components/industry/IndustriesCategories";
import WhyIndustriesChooseUs from "@/components/industry/WhyIndustriesChooseUs";
import IndustriesCTA from "@/components/industry/IndustriesCTA";
import { getAllIndustries, getIndustriesBanner, getIndustriesLanding } from "@/lib/industryData";

export const metadata: Metadata = {
  title: "Industries | Corrugated Packaging Solutions | AAVRIT PACKAGING",
  description:
    "Delivering reliable and customized corrugated packaging solutions for automotive, pharmaceutical, food & beverage, e-commerce, electronics, and textile industries.",
};

async function IndustriesPageContent() {
  const [banner, landing, industries] = await Promise.all([
    getIndustriesBanner(),
    getIndustriesLanding(),
    getAllIndustries(),
  ]);

  return (
    <>
      <IndustriesHero data={banner} />
      <IndustriesIntro data={landing?.intro} />
      <IndustriesCategories industries={industries} />
      <WhyIndustriesChooseUs data={landing?.whyChooseUs} />
      <IndustriesCTA data={landing?.cta} />
    </>
  );
}

export default function IndustriesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#202A2E]">
      <Header />
      <main className="flex-1 w-full">
        <Suspense
          fallback={
            <div className="w-full min-h-[500px] flex items-center justify-center bg-[#FAF7F2]">
              <div className="w-8 h-8 border-3 border-[#A65D32] border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          <IndustriesPageContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
