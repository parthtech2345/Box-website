"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import { Search, ZoomIn, SlidersHorizontal, Image as ImageIcon } from "lucide-react";
import { GALLERY_CATEGORIES, GALLERY_ITEMS, GalleryCategory, GalleryItem } from "@/data/galleryData";
import GalleryLightbox from "./GalleryLightbox";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GalleryMain() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("All Images");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  // Compute item counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      "All Images": GALLERY_ITEMS.length,
    };
    GALLERY_ITEMS.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter items by category & search query
  const filteredItems = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "All Images" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Animate cards on category change or load
  useEffect(() => {
    if (typeof window === "undefined" || !gridRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const cards = gridRef.current.querySelectorAll(".gallery-card");
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.04,
          ease: "power2.out",
        }
      );
    }
  }, [selectedCategory, searchQuery]);

  return (
    <section ref={containerRef} className="w-full bg-[#FFFFFF] py-8 sm:py-12 border-b border-[#E4DED3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================================================================
            FILTERS & SEARCH BAR
        ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 sm:mb-10">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none scroll-smooth">
            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              const count = categoryCounts[cat] || 0;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 shrink-0 ${isActive
                      ? "bg-[#202A2E] text-white shadow-sm ring-1 ring-[#202A2E]"
                      : "bg-[#FAF7F2] text-[#62574D] border border-[#E4DED3] hover:border-[#A65D32] hover:text-[#202A2E]"
                    }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${isActive
                        ? "bg-[#E97835] text-white"
                        : "bg-[#E8D5B8]/50 text-[#8C7A6B]"
                      }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 text-[#8C989E] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search images or packaging..."
              className="w-full pl-10 pr-4 py-2 bg-[#FAF7F2] border border-[#E4DED3] rounded-full text-xs sm:text-sm text-[#202A2E] placeholder-[#8C989E] focus:outline-hidden focus:border-[#A65D32] focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C989E] hover:text-[#202A2E]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-[#8C989E] mb-6 px-1">
          <span>
            Showing <strong className="text-[#202A2E]">{filteredItems.length}</strong> {filteredItems.length === 1 ? "visual asset" : "visual assets"}
            {selectedCategory !== "All Images" && (
              <> in <strong className="text-[#A65D32]">{selectedCategory}</strong></>
            )}
          </span>
          <span className="hidden sm:inline text-[11px]">Click any image to view in high-resolution lightbox</span>
        </div>

        {/* =========================================================================
            GALLERY MASONRY / EDITORIAL GRID
        ========================================================================= */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-14 bg-[#FAF7F2] rounded-2xl border border-dashed border-[#D1B48C]">
            <ImageIcon className="w-12 h-12 text-[#D1B48C] mx-auto mb-3" />
            <h3 className="font-heading font-bold text-lg text-[#202A2E] mb-1">
              No gallery images found
            </h3>
            <p className="text-xs sm:text-sm text-[#62574D] max-w-sm mx-auto mb-4">
              We couldn&apos;t find any images matching &ldquo;{searchQuery}&rdquo;. Try another term or reset filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All Images");
                setSearchQuery("");
              }}
              className="px-5 py-2 rounded-full bg-[#202A2E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#E97835] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 auto-rows-[280px]"
          >
            {filteredItems.map((item, index) => {
              // Varied heights for editorial look: featured items take 2 rows on desktop
              const isTall = item.aspectRatio === "portrait" || (item.featured && index % 3 === 0);

              return (
                <div
                  key={item.id}
                  onClick={() => setLightboxIndex(index)}
                  className={`gallery-card group relative rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#E4DED3] hover:border-[#A65D32] shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer ${isTall ? "sm:row-span-2" : "row-span-1"
                    }`}
                >
                  {/* Image Container */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover object-center group-hover:scale-106 transition-transform duration-600 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient Overlay for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#202A2E]/90 via-[#202A2E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Top Right Zoom Icon Indicator */}
                  <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/85 text-[#202A2E] backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 shadow-sm pointer-events-none">
                    <ZoomIn className="w-4 h-4 text-[#A65D32]" />
                  </div>

                  {/* Bottom Information Card on Hover */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#D1B48C] bg-[#202A2E]/80 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/10 mb-1.5">
                      {item.category}
                    </span>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-white leading-snug drop-shadow-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#F5F2EB]/80 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
}
