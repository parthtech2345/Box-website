"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Building2, MapPin } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

export default function Testimonial({ data }: { data?: any } = {}) {
  const testimonialsList = data?.testimonials && data.testimonials.length > 0 ? data.testimonials : TESTIMONIALS;
  const badgeText = data?.badge || "CLIENT EXPERIENCES";
  const titleText = data?.title || "What Our Partners Say";
  const subtitleText = data?.subtitle || data?.description || "Strong packaging builds stronger business relationships.";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonialsList.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleSelect = (idx: number) => {
    setCurrentIndex(idx);
  };

  // 2.5-second automatic rotation with pause-on-hover
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      handleNext();
    }, 2500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, handleNext]);

  // Helper to determine relative position of a card index relative to currentIndex
  const getCardPosition = (index: number) => {
    const diff = (index - currentIndex + total) % total;
    if (diff === 0) return "center";
    if (diff === 1 || diff === -4) return "right";
    if (diff === total - 1 || diff === -1) return "left";
    return "hidden";
  };

  return (
    <section
      id="testimonials"
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 lg:py-14 border-b border-[#E4DED3] relative overflow-hidden"
      aria-label="What Our Partners Say"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================================
            1. SECTION HEADER (Matching 2-Column Split Theme)
        ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 mb-12 sm:mb-16 border-b border-[#E4DED3]">
          {/* Left Column: Eyebrow + Main Big Headline */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/20 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                {badgeText}
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              {titleText}
            </h2>
          </div>

          {/* Right Column: Context Description with Accent Border */}
          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              {subtitleText}
            </p>
          </div>
        </div>

        {/* =========================================================================
            2. ANIMATED ROTATING / SWAPPING CARD SHOWCASE
        ========================================================================= */}
        <div
          className="relative max-w-5xl mx-auto min-h-[420px] sm:min-h-[380px] lg:min-h-[360px] flex items-center justify-center py-6 select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {testimonialsList.map((item: any, index: number) => {
            const position = getCardPosition(index);

            // Positioning styles for 3D card swapping effect
            let transformStyles = "";
            let zIndex = 1;
            let opacity = 0;
            let pointerEvents: "auto" | "none" = "none";

            if (position === "center") {
              transformStyles = "translate-x-0 scale-100 rotate-0";
              zIndex = 20;
              opacity = 1;
              pointerEvents = "auto";
            } else if (position === "left") {
              transformStyles = "-translate-x-[22%] sm:-translate-x-[42%] lg:-translate-x-[50%] scale-90 -rotate-2";
              zIndex = 10;
              opacity = 0.45;
              pointerEvents = "auto";
            } else if (position === "right") {
              transformStyles = "translate-x-[22%] sm:translate-x-[42%] lg:translate-x-[50%] scale-90 rotate-2";
              zIndex = 10;
              opacity = 0.45;
              pointerEvents = "auto";
            } else {
              transformStyles = "translate-x-0 scale-75 opacity-0";
              zIndex = 1;
              opacity = 0;
              pointerEvents = "none";
            }

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (position === "left") handlePrev();
                  if (position === "right") handleNext();
                }}
                className={`absolute w-[92%] sm:w-[80%] max-w-[620px] bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#E4DED3] transition-all duration-700 ease-out shadow-lg ${position === "center"
                  ? "cursor-default border-[#A65D32]/40 ring-1 ring-[#A65D32]/20"
                  : "cursor-pointer hover:opacity-75 hover:border-[#A65D32]/30"
                  } ${transformStyles}`}
                style={{
                  zIndex,
                  opacity,
                  pointerEvents,
                }}
              >
                {/* Decorative Terracotta Quote Mark */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E4DED3] flex items-center justify-center text-[#A65D32] shadow-sm">
                    <Quote className="w-6 h-6 rotate-180 fill-[#A65D32]/10 text-[#A65D32]" />
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[11px] font-semibold text-[#A65D32] border border-[#E4DED3]">
                    <Building2 className="w-3 h-3" />
                    {item.industry}
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-[#202A2E] font-medium text-base sm:text-lg lg:text-xl leading-relaxed mb-8">
                  “{item.quote}”
                </p>

                {/* Client Profile Footer */}
                <div className="pt-6 border-t border-[#E4DED3] flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-heading font-bold text-base sm:text-lg text-[#202A2E]">
                      {item.contactPerson || item.author || "Client Partner"}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#62574D]">
                      {item.designation || item.role || "Operations"}
                      {(item.companyName || item.company) && (
                        <> • <span className="font-semibold text-[#493629]">{item.companyName || item.company}</span></>
                      )}
                    </p>
                    {(item.location || item.city) && (
                      <p className="text-[11px] text-[#A65D32] flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" />
                        {item.location || item.city}
                      </p>
                    )}
                  </div>

                  {/* Logo Display on Card (only if logo is non-empty) */}
                  {item.logo && typeof item.logo === "string" && item.logo.trim() !== "" ? (
                    <div className="relative w-28 sm:w-36 h-10 shrink-0">
                      <Image
                        src={item.logo}
                        alt={`${item.companyName || item.company || "Client"} logo`}
                        fill
                        className="object-contain object-right"
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            3. PAGINATION INDICATORS (Centered without Side Arrows)
        ========================================================================= */}
        <div className="flex items-center justify-center gap-2.5 mt-8 sm:mt-10">
          {testimonialsList.map((item: any, idx: number) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${isActive
                  ? "w-8 h-2.5 bg-[#A65D32]"
                  : "w-2.5 h-2.5 bg-[#E4DED3] hover:bg-[#A65D32]/50"
                  }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
