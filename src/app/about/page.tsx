import React, { Suspense } from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSectionsController from "@/components/about/AboutSectionsController";

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

      <main className="flex-1 flex flex-col">
        <Suspense fallback={null}>
          <AboutSectionsController />
        </Suspense>
      </main>

      {/* Official Footer */}
      <Footer />
    </div>
  );
}
