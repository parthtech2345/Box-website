"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Layers, SlidersHorizontal, Recycle, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SustainabilityManufacturingData, DEFAULT_SUSTAINABILITY_DATA } from "@/data/sustainabilityData";

const ICON_MAP: Record<string, React.ElementType> = {
  Layers,
  SlidersHorizontal,
  Recycle,
  CheckCircle2,
  Sparkles,
};

interface ResponsibleManufacturingProps {
  data?: SustainabilityManufacturingData | null;
}

export default function ResponsibleManufacturing({ data }: ResponsibleManufacturingProps = {}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stepsRef = useRef<HTMLDivElement | null>(null);

  const fallback = DEFAULT_SUSTAINABILITY_DATA.manufacturing!;
  const badge = data?.badge || fallback.badge;
  const title = data?.title || fallback.title;
  const highlightText = data?.highlightText || fallback.highlightText;
  const subtitle = data?.subtitle || fallback.subtitle;
  const stages = (data?.stages && data.stages.length > 0 ? data.stages : fallback.stages) || [];

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

        {/* Process Timeline / Cards */}
        {/* Desktop: Horizontal Layout with Connecting Rail */}
        <div ref={stepsRef} className="relative">
          {/* Subtle horizontal connector on desktop */}
          <div className="hidden lg:block absolute top-[110px] left-[10%] right-[10%] h-0.5 bg-[#E4DED3] -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative z-10">
            {stages.map((stage, idx) => {
              const Icon = (stage.icon && typeof stage.icon === "string" && ICON_MAP[stage.icon])
                ? ICON_MAP[stage.icon]
                : (typeof stage.icon === "function" ? stage.icon : Layers);
              const stageImage = stage.image || "/Sustanablity/material-selection.png";
              const stageAlt = stage.alt || stage.title || "Manufacturing stage";
              return (
                <div
                  key={idx}
                  className="stage-card group bg-[#FAF7F2] rounded-2xl border border-[#E4DED3] hover:border-[#78846A]/60 p-5 sm:p-5.5 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div>
                    {/* Top Step Badge + Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-heading font-black text-2xl sm:text-3xl text-[#D1B48C] group-hover:text-[#78846A] transition-colors">
                        {stage.step}
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-white border border-[#E4DED3] text-[#78846A] flex items-center justify-center shadow-2xs group-hover:bg-[#78846A] group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Realistic Stage Image */}
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-white border border-[#E4DED3]">
                      <Image
                        src={stageImage}
                        alt={stageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                      />
                    </div>

                    {/* Stage Heading */}
                    <h3 className="font-heading font-bold text-base text-[#202A2E] leading-snug mb-2 group-hover:text-[#A65D32] transition-colors">
                      {stage.title}
                    </h3>

                    {/* Stage Description */}
                    <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  {/* Stage Footer Indicator */}
                  <div className="mt-5 pt-3 border-t border-[#E8E2D7] flex items-center justify-between text-[11px] text-[#8C989E]">
                    <span className="font-semibold uppercase tracking-wider text-[#78846A]">
                      Step {stage.step}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#78846A]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
