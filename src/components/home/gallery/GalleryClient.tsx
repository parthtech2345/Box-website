"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ZoomIn, CheckCircle2, ArrowRight } from "lucide-react";
import GalleryHero from "./GalleryHero";
import GalleryCTA from "./GalleryCTA";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  GalleryPageData,
  GalleryItemDetails,
  DEFAULT_GALLERY_DATA,
  DEFAULT_GALLERY_CATEGORIES,
} from "@/data/galleryData";

export type { GalleryItemDetails };

interface GalleryClientProps {
  data?: GalleryPageData | null;
}

export default function GalleryClient({ data }: GalleryClientProps = {}) {
  const [selectedImage, setSelectedImage] = useState<GalleryItemDetails | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const showcase = data?.showcase || DEFAULT_GALLERY_DATA.showcase!;
  const allItems: GalleryItemDetails[] =
    showcase.items && showcase.items.length > 0
      ? showcase.items
      : DEFAULT_GALLERY_DATA.showcase!.items;

  const categoryOrder =
    showcase.categories && showcase.categories.length > 0
      ? showcase.categories
      : DEFAULT_GALLERY_CATEGORIES;

  // Build dynamic sections grouped by category
  const sections: { category: string; items: GalleryItemDetails[] }[] = [];
  const handledCategories = new Set<string>();

  categoryOrder.forEach((cat) => {
    const itemsInCat = allItems.filter((i) => i.category === cat);
    if (itemsInCat.length > 0) {
      sections.push({ category: cat, items: itemsInCat });
      handledCategories.add(cat);
    }
  });

  allItems.forEach((item) => {
    if (!handledCategories.has(item.category)) {
      handledCategories.add(item.category);
      const itemsInCat = allItems.filter((i) => i.category === item.category);
      sections.push({ category: item.category, items: itemsInCat });
    }
  });

  // GSAP Scroll Animations on Gallery Page
  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const sectionBlocks = containerRef.current?.querySelectorAll(".gallery-section-block");
      sectionBlocks?.forEach((sec) => {
        const header = sec.querySelector(".section-header");
        const cards = sec.querySelectorAll(".gallery-card");

        if (header) {
          gsap.fromTo(
            header,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sec,
                start: "top 85%",
              },
            }
          );
        }

        if (cards && cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sec,
                start: "top 80%",
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [sections.length]);

  // Close lightbox on Escape key
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <>
      {/* 1. Hero Banner */}
      <GalleryHero data={data?.banner} />

      {/* Main Clean Gallery Section */}
      <section
        ref={containerRef}
        className="w-full bg-[#FFFFFF] py-12 sm:py-14 border-b border-[#E4DED3]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
          {sections.map((sec, idx) => (
            <div key={idx} className="gallery-section-block space-y-6">
              {/* Category Heading matching Theme */}
              <div className="section-header flex items-center gap-3 pb-3 border-b border-[#E4DED3]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A65D32]" />
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#202A2E] tracking-tight">
                  {sec.category}
                </h2>
              </div>

              {/* Clean Image Grid: Image + Heading Only */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                {sec.items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedImage(item)}
                    className="gallery-card group bg-[#FAF7F2] rounded-2xl border border-[#E4DED3] hover:border-[#A65D32] overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between transform hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative w-full aspect-[4/3] bg-white overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-contain p-2 group-hover:scale-106 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#202A2E]/70 hover:bg-[#E97835] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Image Heading Only */}
                    <div className="p-4 sm:p-4.5 bg-white border-t border-[#E4DED3]/60">
                      <h3 className="font-heading font-bold text-sm sm:text-base text-[#202A2E] group-hover:text-[#A65D32] transition-colors leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <GalleryCTA data={data?.cta} />

      {/* Lightbox Modal matching Website Theme (2-Column Split: Image Left, Details & Keypoints Right) */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#202A2E]/75 backdrop-blur-sm p-4 sm:p-6 transition-all duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF7F2] border border-[#E4DED3] rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button top-right */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white hover:bg-[#202A2E] text-[#62574D] hover:text-white border border-[#E4DED3] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Body: 2-Column Split (Image Left, Description & Keypoints Right) */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
              {/* LEFT COLUMN: Clean Image Display */}
              <div className="md:col-span-6 p-5 sm:p-7 flex items-center justify-center bg-white border-b md:border-b-0 md:border-r border-[#E4DED3]">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#E4DED3]/80 p-3">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* RIGHT COLUMN: Details, Narrative & Keypoints */}
              <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-5 bg-[#FAF7F2]">
                <div className="space-y-3.5 pr-6">
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A65D32]">
                      {selectedImage.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#202A2E] leading-tight tracking-tight">
                    {selectedImage.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                    {selectedImage.description}
                  </p>

                  {/* Keypoints Box */}
                  {selectedImage.keypoints && selectedImage.keypoints.length > 0 && (
                    <div className="pt-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#202A2E] block mb-2">
                        Key Highlights:
                      </span>
                      <ul className="space-y-2 bg-white rounded-xl p-3 sm:p-3.5 border border-[#E4DED3]">
                        {selectedImage.keypoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#62574D] leading-snug">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#A65D32] shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Footer Link / Action */}
                {selectedImage.link && (
                  <div className="pt-2">
                    <Link
                      href={selectedImage.link}
                      onClick={() => setSelectedImage(null)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#202A2E] hover:bg-[#E97835] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs"
                    >
                      <span>{selectedImage.linkText || "Learn More"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
