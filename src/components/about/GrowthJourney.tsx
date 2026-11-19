"use client";

import React from "react";

export default function GrowthJourney() {
  return (
    <section
      id="growth-journey"
      className="w-full bg-[#FFFFFF] py-14 sm:py-16 border-b border-[#E4DED3] relative overflow-hidden"
      aria-label="Our Journey"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================================
            SECTION HEADER (Clean 2-Column Split Theme)
        ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          {/* Left Column: Eyebrow + Main Big Headline */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                OUR JOURNEY
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              Growing with Purpose,{" "}
              <span className="text-[#A65D32]">Moving Forward Together.</span>
            </h2>
          </div>

          {/* Right Column: Context Description with Accent Border */}
          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              Every step in our journey reflects our commitment to better packaging,
              thoughtful manufacturing and stronger business relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
