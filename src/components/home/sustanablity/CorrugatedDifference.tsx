"use client";

import React, { useRef, useEffect } from "react";
import { Recycle, Repeat, Maximize2, ShieldCheck, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SustainabilityDifferenceData, DEFAULT_SUSTAINABILITY_DATA } from "@/data/sustainabilityData";

const ICON_MAP: Record<string, React.ElementType> = {
  Recycle,
  Repeat,
  Maximize2,
  ShieldCheck,
};

interface CorrugatedDifferenceProps {
  data?: SustainabilityDifferenceData | null;
}

export default function CorrugatedDifference({ data }: CorrugatedDifferenceProps = {}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const fallback = DEFAULT_SUSTAINABILITY_DATA.difference!;
  const badge = data?.badge || fallback.badge;
  const title = data?.title || fallback.title;
  const highlightText = data?.highlightText || fallback.highlightText;
  const subtitle = data?.subtitle || fallback.subtitle;
  const cards = (data?.cards && data.cards.length > 0 ? data.cards : fallback.cards) || [];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAF7F2] py-14 sm:py-14 lg:py-14 border-b border-[#E4DED3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          {cards.map((card, idx) => {
            const Icon = (card.icon && typeof card.icon === "string" && ICON_MAP[card.icon])
              ? ICON_MAP[card.icon]
              : (typeof card.icon === "function" ? card.icon : Recycle);
            return (
              <div
                key={idx}
                className="diff-card group relative bg-white rounded-2xl p-6 sm:p-7 border border-[#E4DED3] hover:border-[#78846A]/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header: Code badge & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E4DED3] text-[#78846A] flex items-center justify-center group-hover:bg-[#78846A] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#78846A] bg-[#78846A]/10 px-2.5 py-1 rounded-full border border-[#78846A]/20">
                      {card.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg text-[#202A2E] leading-snug mb-2.5 group-hover:text-[#78846A] transition-colors duration-200">
                    <span className="text-[#A65D32] mr-1.5 font-semibold">
                      {card.code}.
                    </span>
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom subtle indicator line */}
                <div className="mt-6 pt-4 border-t border-[#F0ECE1] flex items-center justify-between text-xs text-[#8C989E]">
                  <span className="font-medium">Responsible Principle</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D1B48C] group-hover:bg-[#78846A] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
