"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { ABOUT_FAQS } from "./aboutFaqData";

export default function AboutFAQ({ data }: { data?: any }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const badge = data?.badge || "HAVE QUESTIONS?";
  const title = data?.title || "Frequently Asked Questions";
  const subtitle =
    data?.subtitle ||
    "Find answers to common questions about our company, packaging solutions and manufacturing approach.";
  const faqs = data?.faqs && data.faqs.length > 0 ? data.faqs : ABOUT_FAQS;

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="about-faq"
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 lg:py-14 border-b border-[#E4DED3] relative overflow-hidden"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================================
            1. SECTION HEADER (Matching Exact Homepage 2-Column Split Theme)
        ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 mb-12 sm:mb-16 border-b border-[#E4DED3]">
          {/* Left Column: Eyebrow + Main Big Headline */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/20 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                {badge}
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              {title.includes(" ") ? (
                <>
                  {title.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="text-[#A65D32]">
                    {title.split(" ").slice(-1)[0]}
                  </span>
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

        {/* =========================================================================
            2. INTERACTIVE ANIMATED ACCORDION LIST (Exact Homepage Behavior)
        ========================================================================= */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq: any, idx: number) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${isOpen
                  ? "bg-[#FAF7F2] border-[#A65D32] shadow-sm ring-1 ring-[#A65D32]/20"
                  : "bg-[#FAF7F2]/60 border-[#E4DED3] hover:border-[#A65D32]/50 hover:bg-[#FAF7F2]"
                  }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-5 flex-1 pr-2">
                    <span
                      className={`text-xs sm:text-sm font-bold font-mono transition-colors ${isOpen ? "text-[#A65D32]" : "text-[#62574D]/60"
                        }`}
                    >
                      {faq.number}
                    </span>

                    <span className="font-heading font-bold text-base sm:text-lg lg:text-xl text-[#202A2E] leading-snug">
                      {faq.q}
                    </span>
                  </div>

                  {/* Animated Plus / Minus Toggle Button */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${isOpen
                      ? "bg-[#A65D32] text-white border-[#A65D32] rotate-180 scale-105 shadow-sm"
                      : "bg-white text-[#202A2E] border-[#E4DED3] hover:border-[#A65D32]"
                      }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Animated Dropdown Answer Container */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-4 text-sm sm:text-base text-[#62574D] leading-relaxed border-t border-[#E4DED3]/60">
                      <div className="pl-7 sm:pl-9">
                        <p>{faq.a}</p>
                      </div>
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
