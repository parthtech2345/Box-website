"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Box, Layers, FileText, RefreshCw } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SustainabilitySolutionsData, DEFAULT_SUSTAINABILITY_DATA } from "@/data/sustainabilityData";

const ICON_MAP: Record<string, React.ElementType> = {
  Box,
  Layers,
  FileText,
  RefreshCw,
};

interface SustainableSolutionsProps {
  data?: SustainabilitySolutionsData | null;
}

export default function SustainableSolutions({ data }: SustainableSolutionsProps = {}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const fallback = DEFAULT_SUSTAINABILITY_DATA.solutions!;
  const badge = data?.badge || fallback.badge;
  const title = data?.title || fallback.title;
  const highlightText = data?.highlightText || fallback.highlightText;
  const subtitle = data?.subtitle || fallback.subtitle;
  const solutions = (data?.solutions && data.solutions.length > 0 ? data.solutions : fallback.solutions) || [];

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current || !gridRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".solution-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAF7F2] py-14 sm:py-14 lg:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header 2-Column Split */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-10 border-b border-[#E4DED3]">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                {badge}
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              {title} <br className="hidden sm:inline" />
              {highlightText && <span className="text-[#A65D32]">{highlightText}</span>}
            </h2>
          </div>

          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* 4 Solutions Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {solutions.map((item, idx) => {
            const Icon = (item.icon && typeof item.icon === "string" && ICON_MAP[item.icon])
              ? ICON_MAP[item.icon]
              : (typeof item.icon === "function" ? item.icon : Box);
            const itemImage = item.image || "/Sustanablity/box-display.png";
            const itemAlt = item.alt || item.title || "Packaging solution";
            return (
              <div
                key={idx}
                className="solution-card group bg-white rounded-2xl border border-[#E4DED3] hover:border-[#78846A]/60 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badge */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#FAF7F2]">
                    <Image
                      src={itemImage}
                      alt={itemAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-4 sm:p-4.5">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-[#78846A] shrink-0" />
                      <h3 className="font-heading font-bold text-sm sm:text-base text-[#202A2E] group-hover:text-[#A65D32] transition-colors leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-[13px] text-[#62574D] leading-relaxed mb-3">
                      {item.description}
                    </p>

                    {/* Key Benefit Pill */}
                    <div className="p-2 sm:p-2.5 rounded-lg bg-[#FAF7F2] border border-[#E4DED3] text-[11px] font-medium text-[#62574D]">
                      <span className="text-[#78846A] font-bold block mb-0.5">
                        Key Value:
                      </span>
                      {item.benefit}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
