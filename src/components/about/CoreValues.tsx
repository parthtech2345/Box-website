"use client";

import React, { useState, useRef, useEffect } from "react";
import { CORE_VALUES_DATA } from "./coreValuesData";
import { Layers } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CoreValues({ data }: { data?: any }) {
  const badge = data?.badge || "OUR CORE VALUES";
  const title = data?.title || "What We Stand For Shapes Everything We Do.";
  const subtitle =
    data?.subtitle ||
    "Our values guide the way we work, the solutions we create and the relationships we build. Much like corrugated cardboard derives its integrity from synchronized paper layers, our company culture is reinforced by each core principle.";
  const values =
    data?.values && data.values.length > 0 ? data.values : CORE_VALUES_DATA;

  const [activeValue, setActiveValue] = useState<string>(
    values[0]?.id || "value-1"
  );
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const diagramRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Header Reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 25 },
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

      // 2. Left Cards Staggered Reveal
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.09,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 3. Right Cross Section Slide-in
      if (diagramRef.current) {
        gsap.fromTo(
          diagramRef.current,
          { opacity: 0, x: 35, scale: 0.98 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: diagramRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="core-values"
      ref={sectionRef}
      aria-label="Our Core Values"
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 lg:py-14 border-b border-[#E4DED3] relative overflow-hidden"
    >
      {/* Background Kraft Cardboard Ambient Details */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-[#E8D5B8]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#A65D32]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================================
            1. SECTION HEADER (Matching Exact Homepage 2-Column Split Theme)
        ========================================================================= */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 mb-10 sm:mb-12 border-b border-[#E4DED3]"
        >
          {/* Left Column: Eyebrow + Main Big Headline */}
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

          {/* Right Column: Context Description with Accent Border */}
          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* =========================================================================
            2. BALANCED TWO-COLUMN MAIN CONTENT (EQUAL 50/50 SIDES):
               - LEFT (6 cols): 5 Value Description Cards
               - RIGHT (6 cols): Interactive 5-Ply Corrugated Cross-Section Diagram
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* =======================================================================
              LEFT SIDE (6 cols): Exactly 5 Value Description Cards
          ======================================================================= */}
          <div ref={cardsRef} className="lg:col-span-6 flex flex-col justify-between space-y-3">
            {values.map((val: any) => {
              const isActive = activeValue === val.id;

              return (
                <div
                  key={val.id}
                  onMouseEnter={() => setActiveValue(val.id)}
                  onClick={() => setActiveValue(val.id)}
                  className={`flex-1 p-4 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-center ${
                    isActive
                      ? "bg-[#FAF7F2] border-[#A65D32] shadow-sm -translate-y-0.5 ring-1 ring-[#A65D32]/25"
                      : "bg-white border-[#E4DED3] hover:border-[#D1B48C] hover:bg-[#FAF7F2]/60"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    {/* Number Tag */}
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded transition-colors shrink-0 mt-0.5 ${
                        isActive
                          ? "bg-[#A65D32] text-white"
                          : "bg-[#493629]/10 text-[#493629]"
                      }`}
                    >
                      {val.number}
                    </span>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3
                          className={`font-heading font-bold text-base transition-colors ${
                            isActive ? "text-[#A65D32]" : "text-[#202A2E]"
                          }`}
                        >
                          {val.title}
                        </h3>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#78846A] truncate">
                          {val.layerName}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =======================================================================
              RIGHT SIDE (6 cols): Interactive 5-Ply Corrugated Cross-Section Diagram
          ======================================================================= */}
          <div ref={diagramRef} className="lg:col-span-6 flex flex-col justify-between space-y-4">
            {/* Interactive Corrugated Cross-Section Card */}
            <div className="w-full flex-1 bg-[#FAF7F2] p-5 sm:p-6 rounded-2xl border-2 border-[#D1B48C] shadow-lg flex flex-col justify-between transition-all duration-700 ease-out">
              <div className="flex items-center justify-between pb-3 border-b border-[#E4DED3]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#493629]">
                  Interactive Corrugated Cross-Section
                </span>
                <span className="text-[11px] font-semibold text-[#78846A] bg-[#78846A]/10 px-2.5 py-0.5 rounded-full">
                  5-Ply Structural Metaphor
                </span>
              </div>

              {/* Stacked 5 Corrugated Board Layers */}
              <div className="space-y-3 py-4 flex-1 flex flex-col justify-around">
                {values.map((val: any) => {
                  const isActive = activeValue === val.id;

                  return (
                    <div
                      key={val.id}
                      onMouseEnter={() => setActiveValue(val.id)}
                      onClick={() => setActiveValue(val.id)}
                      className={`relative w-full rounded-xl transition-all duration-300 cursor-pointer select-none overflow-hidden ${
                        isActive
                          ? "ring-2 ring-[#A65D32] shadow-md scale-[1.01]"
                          : "hover:ring-1 hover:ring-[#A65D32]/50 opacity-85 hover:opacity-100"
                      }`}
                    >
                      <div
                        className={`h-11 sm:h-12 px-4 flex items-center justify-between transition-colors duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-[#A65D32] to-[#8E4F2B] text-white"
                            : "bg-[#E8D5B8] text-[#493629] border border-[#D1B48C]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center shrink-0 ${
                              isActive
                                ? "bg-white text-[#A65D32]"
                                : "bg-[#493629] text-white"
                            }`}
                          >
                            {val.number}
                          </span>
                          <span className="text-xs sm:text-sm font-bold tracking-tight">
                            {val.layerName}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-wider hidden sm:inline ${
                            isActive ? "text-white/90" : "text-[#62574D]"
                          }`}
                        >
                          {val.title}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Kraft Quality Commitment Note */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#FAF7F2] border border-[#E4DED3] shadow-xs flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#A65D32]/10 flex items-center justify-center text-[#A65D32] shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <p className="text-xs text-[#62574D] leading-relaxed">
                <span className="font-bold text-[#493629]">Engineered with Purpose:</span> Every layer of our corrugated board mirrors our commitment to quality, durability, and trusted client partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
