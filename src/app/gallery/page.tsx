import React from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryClient from "@/components/home/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Packaging Gallery | Products, Machinery & Manufacturing – AAVRIT PACKAGING",
  description:
    "Explore AAVRIT PACKAGING's gallery featuring corrugated packaging products, custom packaging, manufacturing machinery, industries, and production processes.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Packaging Gallery | Products, Machinery & Manufacturing – AAVRIT PACKAGING",
    description:
      "Explore AAVRIT PACKAGING's gallery featuring corrugated packaging products, custom packaging, manufacturing machinery, industries, and production processes.",
    url: "/gallery",
    siteName: "AAVRIT PACKAGING",
    type: "website",
    images: [
      {
        url: "/Gallery/Kraft Packaging Gallery Montage.png",
        width: 1200,
        height: 630,
        alt: "AAVRIT PACKAGING Visual Gallery",
      },
    ],
  },
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#202A2E]">
      <Header />
      <main className="flex-1 w-full" id="main-content">
        <GalleryClient />
      </main>
      <Footer />
    </div>
  );
}
