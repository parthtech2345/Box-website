import React, { Suspense } from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryClient from "@/components/home/gallery/GalleryClient";
import { getAllGalleryData, getGallerySEO } from "@/lib/galleryData";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getGallerySEO();

  const title =
    seo?.metaTitle || "Packaging Gallery | Products, Machinery & Manufacturing – AAVRIT PACKAGING";
  const description =
    seo?.metaDescription ||
    "Explore AAVRIT PACKAGING's gallery featuring corrugated packaging products, custom packaging, manufacturing machinery, industries, and production processes.";
  const canonical = seo?.canonicalLink || "/gallery";
  const ogImage = seo?.ogImage || "/Gallery/Kraft Packaging Gallery Montage.png";
  const ogImageAlt = seo?.ogImageAlt || "AAVRIT PACKAGING Visual Gallery";

  return {
    title,
    description,
    keywords: seo?.metaKeywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "AAVRIT PACKAGING",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
  };
}

async function GalleryContent() {
  const data = await getAllGalleryData();
  return <GalleryClient data={data} />;
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#202A2E]">
      <Header />
      <main className="flex-1 w-full" id="main-content">
        <Suspense fallback={<GalleryClient />}>
          <GalleryContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
