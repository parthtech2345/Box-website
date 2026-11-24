"use client";

import React, { useState, useMemo, useRef, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Search,
  X,
  ArrowRight,
  Filter,
  Package,
  Phone,
  ChevronRight,
} from "lucide-react";
import { MAIN_CATEGORIES, ALL_PRODUCTS } from "@/data/productsData";
import Card3DTilt from "@/components/ui/Card3DTilt";
import BannerEmployeeMascot from "@/components/common/BannerEmployeeMascot";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ProductCatalogContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Sync category from URL search params (e.g., ?category=printed-corrugated-boxes)
  useEffect(() => {
    if (categoryParam) {
      const match = MAIN_CATEGORIES.find((c) => c.id === categoryParam);
      if (match) {
        setSelectedCategory(match.id);
        // Smoothly scroll down to catalog area if visiting with category query
        if (catalogSectionRef.current) {
          catalogSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [categoryParam]);

  const catalogSectionRef = useRef<HTMLElement | null>(null);
  const searchBarRef = useRef<HTMLDivElement | null>(null);
  const sidebarRef = useRef<HTMLElement | null>(null);
  const productGridRef = useRef<HTMLDivElement | null>(null);
  const ctaSectionRef = useRef<HTMLElement | null>(null);

  // Filter products based on search term and selected category
  const filteredProducts = useMemo(() => {
    let result = ALL_PRODUCTS;

    // Filter by Category
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.categoryId === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.keyFeatures.some((f) => f.toLowerCase().includes(q))
      );
    }

    return result;
  }, [searchQuery, selectedCategory]);

  const clearSearch = () => {
    setSearchQuery("");
  };

  // Fluid entrance animation when category or search query changes
  useEffect(() => {
    if (!productGridRef.current) return;
    const cards = productGridRef.current.children;
    if (cards.length === 0) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 16, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.35,
        stagger: 0.03,
        ease: "power2.out",
        clearProps: "transform,opacity",
      }
    );
  }, [selectedCategory, searchQuery]);

  // GSAP ScrollTrigger Animations
  useEffect(() => {
    if (typeof window === "undefined" || !catalogSectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Top Search & Filter Bar Entrance
      if (searchBarRef.current) {
        gsap.fromTo(
          searchBarRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: searchBarRef.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 2. Left Sidebar Filter Entrance
      if (sidebarRef.current) {
        gsap.fromTo(
          sidebarRef.current,
          { opacity: 0, x: -25 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sidebarRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 3. Product Cards Stagger Entrance on Scroll
      if (productGridRef.current && productGridRef.current.children.length > 0) {
        gsap.fromTo(
          productGridRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: productGridRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 4. Custom Manufacturing CTA Strip Entrance
      if (ctaSectionRef.current) {
        gsap.fromTo(
          ctaSectionRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ctaSectionRef.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, catalogSectionRef);

    return () => ctx.revert();
  }, []);

  // Smooth cards re-stagger when category or search changes
  useEffect(() => {
    if (typeof window === "undefined" || !productGridRef.current) return;
    if (productGridRef.current.children.length > 0) {
      gsap.fromTo(
        productGridRef.current.children,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.03,
          ease: "power2.out",
        }
      );
    }
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full bg-[#FFFFFF]">
      {/* =========================================================================
          1. COMPACT STANDARD PRODUCT PAGE HERO BANNER (UNTOUCHED)
          - Original aspect ratio preserved (aspect-[2048/768] on desktop)
          - No boxes cropped from top or bottom
          - Clean heading: "Our Products" + Breadcrumb (Home > Products)
      ========================================================================= */}
      <section className="relative w-full bg-[#202A2E] text-white overflow-hidden">
        <div className="relative w-full h-[340px] sm:h-[380px] lg:h-[420px]">
          <Image
            src="/Product/Kraft Packaging Showcase Banner.png"
            alt="AAVRIT PACKAGING - Products Banner"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center pointer-events-none"
          />

          {/* Subtle Side Vignette Gradient for Text Contrast (Leaves boxes on the right untouched) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#202A2E]/95 via-[#202A2E]/65 to-transparent w-full sm:w-1/2 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

          {/* Banner Hero Content: Headline & Breadcrumbs + Speaking Mascot */}
          <div className="absolute inset-0 flex flex-col justify-between py-6 sm:py-8 pointer-events-none">
            {/* Upper Area: Title & Breadcrumbs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-auto">
              <div className="max-w-md">
                <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-1.5 drop-shadow-md">
                  Our Products
                </h1>

                {/* Breadcrumb Effect */}
                <nav className="flex items-center gap-2 text-xs sm:text-sm text-[#F5F2EB]/90" aria-label="Breadcrumb">
                  <Link href="/" className="hover:text-[#E97835] transition-colors drop-shadow-xs">
                    Home
                  </Link>
                  <ChevronRight className="w-3.5 h-3.5 text-[#D1B48C]" />
                  <span className="text-[#D1B48C] font-semibold drop-shadow-xs">
                    Products
                  </span>
                </nav>
              </div>
            </div>

            {/* Lower Area: QC Inspector Speaking Mascot */}
            <BannerEmployeeMascot
              characterImage="/Product/character_qc_inspector.png"
              characterAlt="Quality Control Specialist - AAVRIT PACKAGING"
              dialogueIcon="📦"
              dialogueTitle="Quality Tested Packaging!"
              dialogueSubtext="High-burst strength & precision corrugated cartons"
              characterWidthClass="w-[110px] sm:w-[130px] lg:w-[150px]"
              shadowWidthClass="w-20 sm:w-24 lg:w-28"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. MAIN CATALOG SECTION WITH SIDEBAR CATEGORY FILTER & TOP SEARCHBAR
          - Clean separation below banner (no awkward overlapping)
          - Left Sidebar with all 6 Categories + All Products count
          - Right Side: Search input & Responsive Product Cards Grid
      ========================================================================= */}
      <section
        ref={catalogSectionRef}
        className="w-full bg-[#FAF7F2] py-10 sm:py-14 border-b border-[#E4DED3]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top Search & Filter Bar (Positioned comfortably below the banner) */}
          <div
            ref={searchBarRef}
            className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-[#E4DED3] mb-8"
          >
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Search Field */}
              <div className="relative flex-1 flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-[#A65D32]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products, packaging types, e.g. 3 Ply, Mailer, Industrial..."
                  className="w-full pl-12 pr-10 py-3 bg-[#FAF7F2] border border-[#E4DED3] focus:border-[#A65D32] focus:bg-white rounded-xl text-sm sm:text-base text-[#202A2E] placeholder-[#8C7E72] outline-none transition-all duration-200"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    aria-label="Clear search"
                    className="absolute right-3.5 p-1 rounded-full text-[#7D7166] hover:text-[#202A2E] hover:bg-[#E4DED3]/40 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Status Summary & Reset */}
              <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
                <div className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E4DED3] text-xs font-semibold text-[#62574D]">
                  <Package className="w-4 h-4 text-[#A65D32]" />
                  <span>
                    Showing <strong className="text-[#202A2E]">{filteredProducts.length}</strong> of{" "}
                    {ALL_PRODUCTS.length}
                  </span>
                </div>

                {(searchQuery || selectedCategory !== "all") && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                    className="text-xs text-[#A65D32] hover:text-[#493629] font-bold hover:underline cursor-pointer px-2"
                  >
                    Reset Filter
                  </button>
                )}
              </div>
            </div>

            {/* Mobile Horizontal Category Filter Strip */}
            <div className="flex lg:hidden items-center gap-2 overflow-x-auto pt-4 mt-3 border-t border-[#E4DED3]/60 pb-1 scrollbar-thin">
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${selectedCategory === "all"
                  ? "bg-[#A65D32] text-white"
                  : "bg-[#FAF7F2] text-[#62574D] border border-[#E4DED3]"
                  }`}
              >
                All Products ({ALL_PRODUCTS.length})
              </button>
              {MAIN_CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${selectedCategory === c.id
                    ? "bg-[#A65D32] text-white"
                    : "bg-[#FAF7F2] text-[#62574D] border border-[#E4DED3]"
                    }`}
                >
                  {c.title}
                </button>
              ))}
            </div>
          </div>

          {/* Catalog Layout: Left Side Filter + Right Product Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: Side Filter Bar (3 cols on desktop) */}
            <aside
              ref={sidebarRef}
              className="hidden lg:block lg:col-span-3 bg-white rounded-2xl p-5 border border-[#E4DED3] shadow-xs sticky top-24"
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E4DED3]">
                <div className="flex items-center gap-2 text-sm font-bold text-[#202A2E]">
                  <Filter className="w-4 h-4 text-[#A65D32]" />
                  <span>Product Categories</span>
                </div>
                {selectedCategory !== "all" && (
                  <button
                    type="button"
                    onClick={() => setSelectedCategory("all")}
                    className="text-[11px] font-semibold text-[#A65D32] hover:underline cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Vertical Category Filter List */}
              <nav className="space-y-1.5" aria-label="Category Filters">
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer text-left ${selectedCategory === "all"
                    ? "bg-[#A65D32] text-white shadow-xs"
                    : "text-[#62574D] hover:bg-[#FAF7F2] hover:text-[#202A2E]"
                    }`}
                >
                  <span>All Products</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${selectedCategory === "all"
                      ? "bg-white/20 text-white"
                      : "bg-[#FAF7F2] text-[#8C7E72]"
                      }`}
                  >
                    {ALL_PRODUCTS.length}
                  </span>
                </button>

                {MAIN_CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  const count = ALL_PRODUCTS.filter((p) => p.categoryId === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer text-left ${isSelected
                        ? "bg-[#A65D32] text-white shadow-xs"
                        : "text-[#62574D] hover:bg-[#FAF7F2] hover:text-[#202A2E]"
                        }`}
                    >
                      <span className="truncate pr-2">{cat.title}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${isSelected
                          ? "bg-white/20 text-white"
                          : "bg-[#FAF7F2] text-[#8C7E72]"
                          }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Custom Inquiries Helper Box */}
              <div className="mt-6 pt-5 border-t border-[#E4DED3]">
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E4DED3]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#A65D32] block mb-1">
                    Need Custom Sizing?
                  </span>
                  <p className="text-xs text-[#62574D] leading-relaxed mb-3">
                    We fabricate custom-cut corrugated cartons with specialized fluting and GSM specs.
                  </p>
                  <a
                    href="#quote"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A65D32] hover:text-[#493629]"
                  >
                    <span>Request Custom Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </aside>

            {/* Right Column: Product Cards Grid (9 cols on desktop) */}
            <main className="lg:col-span-9">
              {/* Active Search & Filter Indicator */}
              {(searchQuery || selectedCategory !== "all") && (
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-[#62574D]">Active Filters:</span>
                  {selectedCategory !== "all" && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E4DED3] text-xs font-semibold text-[#A65D32]">
                      Category: {MAIN_CATEGORIES.find((c) => c.id === selectedCategory)?.title}
                      <button
                        type="button"
                        onClick={() => setSelectedCategory("all")}
                        className="hover:text-black cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  )}
                  {searchQuery && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E4DED3] text-xs font-semibold text-[#A65D32]">
                      Keyword: "{searchQuery}"
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="hover:text-black cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  )}
                </div>
              )}

              {/* Product Cards Grid or Empty State */}
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-2xl border border-[#E4DED3] p-12 text-center max-w-lg mx-auto my-8">
                  <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border border-[#E4DED3] flex items-center justify-center text-[#A65D32] mx-auto mb-4">
                    <Search className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#202A2E] mb-2">
                    No packaging matches found
                  </h3>
                  <p className="text-sm text-[#62574D] leading-relaxed mb-6">
                    We couldn't find any products matching "<strong>{searchQuery}</strong>". Try searching for
                    standard keywords like <em>"3 Ply"</em>, <em>"Mailer"</em>, <em>"Box"</em>, or reset your filters.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#493629] text-white text-sm font-semibold hover:bg-[#A65D32] transition-colors cursor-pointer"
                  >
                    <span>View All Products</span>
                    <ArrowRight className="w-4 h-4 text-[#D1B48C]" />
                  </button>
                </div>
              ) : (
                <div
                  ref={productGridRef}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
                >
                  {filteredProducts.map((p) => (
                    <Card3DTilt key={p.id} className="h-full rounded-xl">
                      <Link
                        href={`/products/${p.slug}`}
                        className="group flex flex-col h-full bg-white rounded-xl border border-[#E4DED3] overflow-hidden shadow-xs hover:border-[#D1B48C] hover:shadow-lg transition-all duration-300 cursor-pointer block"
                      >
                        {/* Product Photography */}
                        <div className="relative w-full aspect-[4/3] bg-[#FAF7F2] overflow-hidden">
                          <Image
                            src={p.image}
                            alt={`${p.name} - AAVRIT PACKAGING`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                          />
                        </div>

                        {/* Card Content: Title on first line, View Details button below */}
                        <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 gap-3.5 bg-white border-t border-[#E4DED3]/60">
                          <h3 className="font-heading font-bold text-base sm:text-lg text-[#202A2E] group-hover:text-[#A65D32] transition-colors leading-snug">
                            {p.name}
                          </h3>

                          <div className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-[#493629] text-white text-xs sm:text-sm font-semibold tracking-wide group-hover:bg-[#A65D32] transition-colors duration-200 shadow-xs">
                            <span>View Details</span>
                            <ChevronRight className="w-4 h-4 text-[#D1B48C] group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </Card3DTilt>
                  ))}
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. CUSTOM MANUFACTURING CTA STRIP
      ========================================================================= */}
      <section
        ref={ctaSectionRef}
        className="w-full bg-[#202A2E] text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-[#344247]"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-2">
              Require Custom Box Dimensions or Heavy-Duty GSM Specifications?
            </h3>
            <p className="text-sm text-[#F5F2EB]/80 leading-relaxed">
              We manufacture customized corrugation setups, tailored flute combinations (B, C, E, BC, AAC),
              and proprietary moisture-resistant barrier coatings for high-volume enterprise orders.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href="#quote"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#E97835] hover:bg-[#A65D32] text-white text-sm font-bold tracking-wide transition-colors shadow-md"
            >
              <span>Get Custom Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/15 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#E97835]" />
              <span>+91 98765 43210</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ProductCatalogView() {
  return (
    <Suspense fallback={<div className="w-full min-h-[400px] bg-[#FAF7F2]" />}>
      <ProductCatalogContent />
    </Suspense>
  );
}
