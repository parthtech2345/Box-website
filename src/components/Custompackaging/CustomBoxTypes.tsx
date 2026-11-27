"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface CustomBoxType {
  id: string;
  title: string;
  category: string;
  image: string;
  idealFor: string;
  minOrder: string;
  productionDays: string;
  recommendedPly: string;
  buttonText?: string;
}

const CUSTOM_TYPES: CustomBoxType[] = [
  {
    id: "mailer",
    title: "Roll-End Tuck Mailer Boxes",
    category: "Die-Cut Packaging",
    image: "/Product/items/mailer-boxes.png",
    idealFor: "E-commerce DTC, subscription kits, apparel & cosmetics",
    minOrder: "500 units",
    productionDays: "4-6 days",
    recommendedPly: "3-Ply E-Flute / B-Flute",
  },
  {
    id: "rsc",
    title: "Heavy-Duty RSC Master Shippers",
    category: "Corrugated Boxes",
    image: "/Product/items/regular-slotted-cartons.png",
    idealFor: "Palletised warehouse dispatch, FMCG bulk cartons & logistics",
    minOrder: "1,000 units",
    productionDays: "3-5 days",
    recommendedPly: "5-Ply / 7-Ply BC Flute",
  },
  {
    id: "printed",
    title: "Multi-Colour Flexo Branded Cartons",
    category: "Printed Packaging",
    image: "/Product/items/real-flexographic-printed-boxes.png",
    idealFor: "Retail display, high-visibility branding & promotional campaigns",
    minOrder: "1,000 units",
    productionDays: "5-7 days",
    recommendedPly: "3-Ply / 5-Ply Top White Liner",
  },
  {
    id: "auto-bottom",
    title: "Crash-Lock Auto-Bottom Boxes",
    category: "Die-Cut Packaging",
    image: "/Product/items/auto-bottom-boxes.png",
    idealFor: "High-speed assembly lines, pharmaceutical & food packaging",
    minOrder: "500 units",
    productionDays: "5-7 days",
    recommendedPly: "3-Ply Micro Flute",
  },
  {
    id: "partitions",
    title: "Internal Protective Grid Partitions",
    category: "Industrial Packaging",
    image: "/Product/items/real-industrial-partitions-dividers.png",
    idealFor: "Glassware, automotive spark components & precision parts",
    minOrder: "1,000 sets",
    productionDays: "4-6 days",
    recommendedPly: "Solid Fibre / 3-Ply Kraft",
  },
  {
    id: "pallet",
    title: "Heavy-Duty Pallet Gaylord Containers",
    category: "Industrial Packaging",
    image: "/Product/items/real-pallet-gaylord-boxes.png",
    idealFor: "Bulk export machinery, chemical sacks & heavy automotive freight",
    minOrder: "100 units",
    productionDays: "5-7 days",
    recommendedPly: "7-Ply AAA / AAC Flute",
  },
];

interface CustomBoxTypesProps {
  data?: {
    badge?: string;
    title?: string;
    subtitle?: string;
    filterCategories?: Array<{ id: string; label: string }>;
    boxTypes?: CustomBoxType[];
  };
}

export default function CustomBoxTypes({ data }: CustomBoxTypesProps = {}) {
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const badge = data?.badge || "CUSTOMIZABLE STRUCTURES";
  const title = data?.title || "Select Your Custom Box Architecture";
  const subtitle =
    data?.subtitle ||
    "Every design is fabricated from scratch to match your dimensions, drop-test requirements, and material load thresholds.";

  const filters = data?.filterCategories && data.filterCategories.length > 0
    ? data.filterCategories
    : [
        { id: "all", label: "All Custom Styles" },
        { id: "die-cut", label: "Die-Cut Mailers" },
        { id: "corrugated", label: "Master Shippers (RSC)" },
        { id: "printed", label: "Branded Flexo" },
        { id: "industrial", label: "Industrial & Partitions" },
      ];

  const allItems: CustomBoxType[] =
    data?.boxTypes && data.boxTypes.length > 0 ? data.boxTypes : CUSTOM_TYPES;

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [allItems]);

  const filtered =
    activeFilter === "all"
      ? allItems
      : allItems.filter((t) =>
          (t.category || "").toLowerCase().includes(activeFilter.toLowerCase())
        );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header 2-Column Split */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-10 border-b border-[#E4DED3]"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                {badge}
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              {title}
            </h2>
          </div>

          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Filter Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === f.id
                  ? "bg-[#493629] text-white shadow-sm"
                  : "bg-[#FAF7F2] text-[#62574D] border border-[#E4DED3] hover:border-[#A65D32] hover:text-[#202A2E]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-[#FFFFFF] rounded-2xl border border-[#E4DED3] overflow-hidden shadow-xs hover:border-[#D1B48C] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative w-full aspect-[4/3] bg-[#FAF7F2] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#202A2E]/80 backdrop-blur-xs text-white text-[11px] font-semibold tracking-wide">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#202A2E] group-hover:text-[#A65D32] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#62574D] leading-relaxed mb-4">
                    <strong className="text-[#202A2E]">Ideal For:</strong> {item.idealFor}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E4DED3]/60 space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#62574D]">
                    <span>Recommended Flute / Ply:</span>
                    <span className="font-semibold text-[#202A2E]">{item.recommendedPly}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#62574D]">
                    <span>MOQ:</span>
                    <span className="font-semibold text-[#202A2E]">{item.minOrder}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#62574D]">
                    <span>Lead Time:</span>
                    <span className="font-semibold text-[#A65D32]">{item.productionDays}</span>
                  </div>
                </div>

                <div className="mt-5 pt-3">
                  <Link
                    href="#configurator"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#A65D32] text-[#202A2E] hover:text-white text-xs font-bold transition-all border border-[#E4DED3] hover:border-transparent group-hover:shadow-xs cursor-pointer"
                  >
                    <span>{item.buttonText || "Configure This Box"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

