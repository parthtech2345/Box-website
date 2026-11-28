"use client";

import React, { useRef, useEffect } from "react";
import { Check, Compass, Ruler, Shield, Sparkles, TrendingDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SustainabilityWasteReductionData, DEFAULT_SUSTAINABILITY_DATA } from "@/data/sustainabilityData";

const ICON_MAP: Record<string, React.ElementType> = {
  Ruler,
  Shield,
  Compass,
  TrendingDown,
  Sparkles,
};

interface ReducingPackagingWasteProps {
  data?: SustainabilityWasteReductionData | null;
}

export default function ReducingPackagingWaste({ data }: ReducingPackagingWasteProps = {}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const fallback = DEFAULT_SUSTAINABILITY_DATA.wasteReduction!;
  const badge = data?.badge || fallback.badge;
  const title = data?.title || fallback.title;
  const highlightText = data?.highlightText || fallback.highlightText;
  const subtitle = data?.subtitle || fallback.subtitle;
  const methods = (data?.methods && data.methods.length > 0 ? data.methods : fallback.methods) || [];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 lg:py-14 border-b border-[#E4DED3] overflow-hidden"
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

        {/* 4 Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {methods.map((item, idx) => {
            const Icon = (item.icon && typeof item.icon === "string" && ICON_MAP[item.icon])
              ? ICON_MAP[item.icon]
              : (typeof item.icon === "function" ? item.icon : Ruler);
            return (
              <div
                key={idx}
                className="waste-card group bg-[#FAF7F2] rounded-2xl border border-[#E4DED3] hover:border-[#78846A]/60 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-md"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-white border border-[#E4DED3] text-[#78846A] flex items-center justify-center font-heading font-bold text-sm shadow-2xs group-hover:bg-[#78846A] group-hover:text-white transition-colors">
                      {item.num}
                    </span>
                    <Icon className="w-5 h-5 text-[#D1B48C] group-hover:text-[#78846A] transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg text-[#202A2E] mb-2 group-hover:text-[#A65D32] transition-colors">
                    {item.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed mb-4">
                    {item.summary}
                  </p>
                </div>

                {/* Practical Impact Box */}
                <div className="p-3 rounded-xl bg-white border border-[#E4DED3] text-xs text-[#62574D]">
                  <span className="font-semibold text-[#78846A] block mb-1">
                    Direct Impact:
                  </span>
                  <p className="leading-relaxed text-[11px] text-[#62574D]">
                    {item.impact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
