"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { JOURNEY_MILESTONES } from "./journeyData";

export default function GrowthJourney() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0); // 0.0 to 1.0

  const totalCards = JOURNEY_MILESTONES.length;

  // Window scroll tracker for the pinned horizontal sequence
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollable = container.offsetHeight - window.innerHeight;

      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Distance between milestone cards in viewport units
  const cardStepVW = 60;
  const currentTranslateVW = scrollProgress * (totalCards - 1) * cardStepVW;

  // Jump to specific milestone on click
  const jumpToMilestone = (idx: number) => {
    const container = containerRef.current;
    if (!container) return;
    const totalScrollable = container.offsetHeight - window.innerHeight;
    const targetProgress = idx / (totalCards - 1);
    const targetY = container.offsetTop + targetProgress * totalScrollable;
    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="growth-journey"
      ref={containerRef}
      className="relative w-full bg-[#FFFFFF] border-b border-[#E4DED3]"
      style={{ height: "230vh" }}
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
                  OUR JOURNEY
                </span>
              </div>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
                Our Journey &amp;{" "}
                <span className="text-[#A65D32]">Manufacturing Milestones.</span>
              </h2>
            </div>

            {/* Right Column: Context Description with Accent Border */}
            <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
              <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
                From our foundational corrugation lines in 2008 to modern high-speed automated facilities, explore every stage that shaped our quality packaging journey.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. SCROLLER TRACK: Alternating ABOVE and BELOW the line!
            Cards sit clearly ABOVE or BELOW the line with proper clearance,
            so the line never cuts through any description or image.
        ========================================================================= */}
        <div className="relative flex-1 w-full flex items-center overflow-visible my-auto">
          
          {/* Continuous Center Horizontal Line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-[#E4DED3] pointer-events-none z-10">
            <div
              className="h-full bg-[#A65D32] origin-left transition-all duration-75"
              style={{ width: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>

          {/* Cards Track: translates horizontally as user scrolls */}
          <div
            ref={trackRef}
            className="relative flex items-center will-change-transform transition-transform duration-75 ease-out h-[68vh] max-h-[660px]"
            style={{
              transform: `translateX(calc(22vw - ${currentTranslateVW}vw))`,
              gap: "8vw",
              width: "max-content",
            }}
          >
            {JOURNEY_MILESTONES.map((m, idx) => {
              // Alternating placement: even cards (0, 2) sit ABOVE the line; odd cards (1, 3) sit BELOW the line
              const isAbove = idx % 2 === 0;
              const cardProgress = idx / (totalCards - 1);
              const dist = Math.abs(scrollProgress - cardProgress);
              const isFocused = dist < 0.22;

              return (
                <article
                  key={m.id}
                  className={`relative shrink-0 flex items-center justify-center transition-opacity duration-300 ${
                    isFocused ? "opacity-100" : "opacity-30"
                  }`}
                  style={{
                    width: "clamp(500px, 50vw, 760px)",
                  }}
                >
                  {/* Card Container placed cleanly ABOVE or BELOW the line */}
                  <div
                    className={`relative z-20 grid grid-cols-12 gap-5 sm:gap-7 items-center w-full transition-all duration-300 ${
                      isAbove
                        ? "mb-auto pb-6 translate-y-[-24px]"
                        : "mt-auto pt-6 translate-y-[24px]"
                    } ${isFocused ? "scale-100" : "scale-95"}`}
                  >
                    {/* Media: 100% clean photo with NO text, NO watermarks */}
                    <div className="col-span-5 relative h-[140px] sm:h-[160px] lg:h-[180px] rounded-lg overflow-hidden border border-[#E8D5B8] bg-white shadow-sm shrink-0">
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

        {/* =========================================================================
            3. BOTTOM TIMELINE: Clickable Milestone Years
        ========================================================================= */}
        <div className="max-w-7xl mx-auto w-full z-30 shrink-0 pt-3 border-t border-[#E4DED3]">
          <div className="w-full flex justify-between items-center text-xs">
            {JOURNEY_MILESTONES.map((m, idx) => {
              const cardProgress = idx / (totalCards - 1);
              const isActive = Math.abs(scrollProgress - cardProgress) < 0.16;

              return (
                <button
                  key={m.id}
                  onClick={() => jumpToMilestone(idx)}
                  className={`cursor-pointer transition-all duration-200 flex flex-col items-center ${
                    isActive
                      ? "text-[#A65D32] font-bold scale-105"
                      : "text-[#7D7166] font-medium hover:text-[#202A2E]"
                  }`}
                >
                  <span className="text-xs sm:text-sm tracking-wider font-semibold">{m.year}</span>
                  <span className="hidden sm:inline text-[10px] text-[#A29486]">{m.phaseTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
