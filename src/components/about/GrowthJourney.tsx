"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { JOURNEY_MILESTONES } from "./journeyData";

export default function GrowthJourney({ data }: { data?: any }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0); // 0.0 to 1.0
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);

  const badge = data?.badge || "OUR JOURNEY";
  const title = data?.title || "Our Journey & Manufacturing Milestones.";
  const subtitle =
    data?.subtitle ||
    "From our foundational corrugation lines in 2008 to modern high-speed automated facilities, explore every stage that shaped our quality packaging journey.";
  const milestones =
    data?.milestones && data.milestones.length > 0
      ? data.milestones
      : JOURNEY_MILESTONES;

  const totalCards = milestones.length;

  // Window scroll tracker with smooth momentum-damping lerp for ultra-smooth slow scroll
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollable = container.offsetHeight - window.innerHeight;

      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
      targetProgressRef.current = progress;
    };

    const smoothLoop = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.0004) {
        currentProgressRef.current += diff * 0.07;
        setScrollProgress(currentProgressRef.current);
      } else if (currentProgressRef.current !== targetProgressRef.current) {
        currentProgressRef.current = targetProgressRef.current;
        setScrollProgress(targetProgressRef.current);
      }
      animFrameRef.current = requestAnimationFrame(smoothLoop);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    animFrameRef.current = requestAnimationFrame(smoothLoop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Distance between milestone cards in viewport units
  const cardStepVW = 60;
  const currentTranslateVW = scrollProgress * (totalCards - 1) * cardStepVW;

  return (
    <section
      id="growth-journey"
      ref={containerRef}
      className="relative w-full bg-[#FFFFFF] border-b border-[#E4DED3]"
      style={{ height: "620vh" }}
      aria-label="Our Journey: From Inception to Today"
    >
      {/* 
        Sticky Viewport: Pure White background (#FFFFFF)
        Matching exact 2-column header design from all sections
      */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8 select-none z-20 bg-[#FFFFFF]">
        
        {/* =========================================================================
            1. SECTION HEADER (Matching Exact All-Section 2-Column Split Theme)
        ========================================================================= */}
        <div className="max-w-7xl mx-auto w-full z-30 shrink-0 pb-4 sm:pb-5 border-b border-[#E4DED3]">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            {/* Left Column: Eyebrow Badge + Main Big Headline */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                  {badge}
                </span>
              </div>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
                {title.includes("&") ? (
                  <>
                    {title.split("&")[0]}&amp;{" "}
                    <span className="text-[#A65D32]">{title.split("&")[1]?.trim()}</span>
                  </>
                ) : (
                  title
                )}
              </h2>
            </div>

            {/* Right Column: Context Description with Accent Border */}
            <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
              <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
                {subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. SCROLLER TRACK:
            The horizontal timeline line runs through the exact center.
            Each milestone has its active node dot directly ON the line.
            - Card 1 (2008): positioned ABOVE the line with clean clearance
            - Card 2 (2013): positioned BELOW the line with clean clearance
            - Card 3 (2018): positioned ABOVE the line with clean clearance
            - Card 4 (2024 – Present): positioned BELOW the line with clean clearance
        ========================================================================= */}
        <div className="relative flex-1 w-full flex items-center overflow-visible my-auto">
          
          {/* Continuous Center Horizontal Line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-[#E4DED3] pointer-events-none z-10">
            <div
              className="h-full bg-[#A65D32] origin-left"
              style={{ width: `${(scrollProgress * 100).toFixed(2)}%` }}
            />
          </div>

          {/* Cards Track: translates horizontally as user scrolls */}
          <div
            ref={trackRef}
            className="relative flex items-center will-change-transform h-[70vh] max-h-[680px]"
            style={{
              transform: `translateX(calc(22vw - ${currentTranslateVW}vw))`,
              gap: "8vw",
              width: "max-content",
            }}
          >
            {milestones.map((m: any, idx: number) => {
              // Alternating placement: even cards (0, 2) sit ABOVE the line; odd cards (1, 3) sit BELOW the line
              const isAbove = idx % 2 === 0;
              const cardProgress = idx / (totalCards - 1);
              const dist = Math.abs(scrollProgress - cardProgress);
              const isFocused = dist < 0.22;

              return (
                <article
                  key={m.id}
                  className={`relative shrink-0 transition-opacity duration-300 ${
                    isFocused ? "opacity-100" : "opacity-30"
                  }`}
                  style={{
                    width: "clamp(500px, 50vw, 760px)",
                    height: "100%",
                  }}
                >
                  {/* Active Node Dot directly on the central line */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex items-center justify-center">
                    <span
                      className={`rounded-full border-2 transition-all duration-300 ${
                        isFocused
                          ? "w-4 h-4 bg-[#A65D32] border-[#FFFFFF] shadow-md scale-125"
                          : "w-3 h-3 bg-[#FFFFFF] border-[#A65D32]"
                      }`}
                    />
                  </div>

                  {/* Connecting Stem from the Dot to the Card */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-[1.5px] bg-[#E4DED3] z-10 pointer-events-none ${
                      isAbove
                        ? "bottom-1/2 h-7 bg-gradient-to-t from-[#A65D32] to-[#E4DED3]"
                        : "top-1/2 h-7 bg-gradient-to-b from-[#A65D32] to-[#E4DED3]"
                    }`}
                  />

                  {/* Card Container placed clearly ABOVE or BELOW the line */}
                  <div
                    className={`absolute left-0 right-0 z-30 grid grid-cols-12 gap-5 sm:gap-7 items-center w-full transition-transform duration-300 ${
                      isAbove
                        ? "bottom-[calc(50%+28px)]"
                        : "top-[calc(50%+28px)]"
                    } ${isFocused ? "scale-100" : "scale-95"}`}
                  >
                    {/* Media: 100% clean photo with NO text, NO watermarks */}
                    <div className="col-span-5 relative h-[140px] sm:h-[160px] lg:h-[175px] rounded-lg overflow-hidden border border-[#E8D5B8] bg-white shadow-sm shrink-0">
                      <Image
                        src={m.image}
                        alt={`${m.year} - ${m.headline}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 30vw"
                        className="object-cover object-center"
                      />
                    </div>

                    {/* Body: Year, Headline, Description */}
                    <div className="col-span-7 flex flex-col justify-center text-left">
                      <span className="font-heading text-2xl sm:text-3xl font-bold text-[#A65D32] leading-none mb-1">
                        {m.year}
                      </span>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-[#202A2E] tracking-tight leading-snug mb-1.5">
                        {m.headline}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#62574D] font-normal leading-relaxed line-clamp-3 sm:line-clamp-4">
                        {m.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
