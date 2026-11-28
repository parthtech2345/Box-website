import React, { Suspense } from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MachineryHero from "@/components/machinery/MachineryHero";
import MachineryIntro from "@/components/machinery/MachineryIntro";
import MachineryGrid from "@/components/machinery/MachineryGrid";
import WhyMachineryMatters from "@/components/machinery/WhyMachineryMatters";
import MachineryCTA from "@/components/machinery/MachineryCTA";
import {
  getAllMachinery,
  getMachineryBanner,
  getMachineryIntro,
  getMachineryGridHeader,
  getMachineryWhyMatters,
  getMachineryCTA,
  getMachinerySEO,
} from "@/lib/machineryData";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getMachinerySEO();

  const title =
    seo?.metaTitle ||
    "Machinery & Technology | Corrugated Box Manufacturing Equipment | AAVRIT PACKAGING";
  const description =
    seo?.metaDescription ||
    "Discover the machinery and manufacturing technology behind our corrugated packaging solutions: automatic corrugation lines, flexo printer slotters, die cutters, and folder gluers.";

  return {
    title,
    description,
    keywords: seo?.metaKeywords,
    alternates: {
      canonical: seo?.canonicalLink || "/machinery",
    },
    openGraph: {
      title,
      description,
      images: seo?.ogImage ? [{ url: seo.ogImage, alt: seo.ogImageAlt || title }] : undefined,
    },
  };
}

async function MachineryPageContent() {
  const [banner, intro, gridHeader, machines, whyMatters, cta] = await Promise.all([
    getMachineryBanner(),
    getMachineryIntro(),
    getMachineryGridHeader(),
    getAllMachinery(),
    getMachineryWhyMatters(),
    getMachineryCTA(),
  ]);

  return (
    <>
      {/* 1. Hero Banner */}
      <MachineryHero data={banner} />

      {/* 2. Introduction: Technology Behind Every Box */}
      <MachineryIntro data={intro} />

      {/* 3. Machinery Collection: Exactly 6 Cards */}
      <MachineryGrid machines={machines} headerData={gridHeader} />

      {/* 4. Why Our Machinery Matters: Supporting Consistent Manufacturing */}
      <WhyMachineryMatters data={whyMatters} />

      {/* 5. Final CTA */}
      <MachineryCTA data={cta?.listing} />
    </>
  );
}

export default function MachineryPage() {
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
          <MachineryPageContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
