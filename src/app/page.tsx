import React, { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeSectionsController from "@/components/home/HomeSectionsController";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2EB] text-[#202A2E]">
      {/* 1. Header & Navigation with Utility Strip */}
      <Header />

      <main className="flex-1 flex flex-col overflow-x-hidden">
        <Suspense fallback={null}>
          <HomeSectionsController />
        </Suspense>

        {/* Section 15: Footer */}
        <Footer />
      </main>
    </div>
  );
}
