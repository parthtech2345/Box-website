"use client";

import React, { useState } from "react";
import { VISION_MISSION_DATA } from "./visionMissionData";
import { Compass, Sparkles, Check } from "lucide-react";

export default function VisionMission() {
  const { eyebrow, mainHeading, supportingText, vision, mission } =
    VISION_MISSION_DATA;

  // Track hover/checked status for checkpoints
  const [activeVisionChecks, setActiveVisionChecks] = useState<number[]>([]);
  const [activeMissionChecks, setActiveMissionChecks] = useState<number[]>([]);

  const handleVisionHover = (idx: number) => {
    if (!activeVisionChecks.includes(idx)) {
      setActiveVisionChecks((prev) => [...prev, idx]);
    }
  };

  const handleMissionHover = (idx: number) => {
    if (!activeMissionChecks.includes(idx)) {
      setActiveMissionChecks((prev) => [...prev, idx]);
    }
  };

  return (
    <section
      id="vision-mission"
      aria-label="Our Vision and Mission"
      className="w-full bg-[#FAF7F2] py-12 sm:py-14 lg:py-16 border-b border-[#E4DED3] relative overflow-hidden"
    >
      {/* Background Subtle Ambient Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#E8D5B8]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#A65D32]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================================
            1. SECTION HEADER (Clean 2-Column Split Theme)
        ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 sm:pb-8 mb-8 sm:mb-10 border-b border-[#E4DED3]">
          {/* Left Column: Eyebrow + Main Big Headline */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                {eyebrow}
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.15] tracking-tight">
              {mainHeading.split(".")[0]}.{" "}
              <span className="text-[#A65D32]">{mainHeading.split(".")[1] || ""}</span>
            </h2>
          </div>

          {/* Right Column: Context Description with Accent Border */}
          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              {supportingText}
            </p>
          </div>
        </div>

        {/* =========================================================================
            2. TWO COMPACT, UNIFIED THEMED CARDS
        ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-5xl mx-auto">
          {/* CARD 01: OUR VISION */}
          <div className="group relative rounded-xl p-5 sm:p-6 bg-white border border-[#E4DED3] hover:border-[#A65D32]/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Card Header: Badge & Number */}
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF7F2] border border-[#E8D5B8] text-[#A65D32] text-[10px] font-bold uppercase tracking-wider">
                  <Compass className="w-3 h-3 text-[#A65D32]" />
                  <span>OUR VISION</span>
                </div>
                <span className="text-2xl font-black text-[#A65D32]/40 tracking-tight font-mono select-none">
                  {vision.badgeNumber}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2 mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-[#202A2E] tracking-tight leading-snug group-hover:text-[#A65D32] transition-colors">
                  {vision.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#62574D] font-normal leading-relaxed">
                  {vision.description}
                </p>
              </div>

              {/* Checkpoints Label */}
              <div className="pt-3 border-t border-[#E8D5B8]/80 mb-2.5 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A7B6E]">
                  Key Strategic Pillars
                </span>
                <span className="text-[10px] font-mono text-[#A65D32] font-semibold">
                  {activeVisionChecks.length}/{vision.checkpoints.length} Verified
                </span>
              </div>

              {/* Checkpoints Checklist */}
              <div className="space-y-1.5">
                {vision.checkpoints.map((point, idx) => {
                  const isChecked = activeVisionChecks.includes(idx);
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => handleVisionHover(idx)}
                      tabIndex={0}
                      onFocus={() => handleVisionHover(idx)}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer border ${
                        isChecked
                          ? "bg-[#FAF7F2] border-[#A65D32]/40 text-[#202A2E] shadow-2xs"
                          : "bg-[#FAF7F2]/40 border-transparent text-[#62574D] hover:bg-[#FAF7F2] hover:border-[#E8D5B8] hover:text-[#202A2E]"
                      }`}
                    >
                      {/* Check Icon with dynamic tick animation */}
                      <div
                        className={`w-4.5 h-4.5 rounded-md flex items-center justify-center shrink-0 transition-all duration-200 ${
                          isChecked
                            ? "bg-[#A65D32] text-white scale-100 shadow-xs"
                            : "bg-white border border-[#D1B48C] text-transparent scale-90"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 stroke-[3] transition-all duration-200 ${
                            isChecked ? "scale-100 opacity-100" : "scale-75 opacity-0"
                          }`}
                        />
                      </div>
                      <span className="text-xs font-medium leading-snug">
                        {point}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="pt-3.5 mt-4 border-t border-[#E8D5B8]/70 flex items-center justify-between text-[11px] text-[#8A7B6E]">
              <span>Hover points to verify</span>
              <span className="text-[#A65D32] font-semibold">Long-Term Direction</span>
            </div>
          </div>

          {/* CARD 02: OUR MISSION */}
          <div className="group relative rounded-xl p-5 sm:p-6 bg-white border border-[#E4DED3] hover:border-[#A65D32]/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Card Header: Badge & Number */}
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF7F2] border border-[#E8D5B8] text-[#A65D32] text-[10px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-[#A65D32]" />
                  <span>OUR MISSION</span>
                </div>
                <span className="text-2xl font-black text-[#A65D32]/40 tracking-tight font-mono select-none">
                  {mission.badgeNumber}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2 mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-[#202A2E] tracking-tight leading-snug group-hover:text-[#A65D32] transition-colors">
                  {mission.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#62574D] font-normal leading-relaxed">
                  {mission.description}
                </p>
              </div>

              {/* Checkpoints Label */}
              <div className="pt-3 border-t border-[#E8D5B8]/80 mb-2.5 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A7B6E]">
                  Operational Standards
                </span>
                <span className="text-[10px] font-mono text-[#A65D32] font-semibold">
                  {activeMissionChecks.length}/{mission.checkpoints.length} Verified
                </span>
              </div>

              {/* Checkpoints Checklist */}
              <div className="space-y-1.5">
                {mission.checkpoints.map((point, idx) => {
                  const isChecked = activeMissionChecks.includes(idx);
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => handleMissionHover(idx)}
                      tabIndex={0}
                      onFocus={() => handleMissionHover(idx)}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer border ${
                        isChecked
                          ? "bg-[#FAF7F2] border-[#A65D32]/40 text-[#202A2E] shadow-2xs"
                          : "bg-[#FAF7F2]/40 border-transparent text-[#62574D] hover:bg-[#FAF7F2] hover:border-[#E8D5B8] hover:text-[#202A2E]"
                      }`}
                    >
                      {/* Check Icon with dynamic tick animation */}
                      <div
                        className={`w-4.5 h-4.5 rounded-md flex items-center justify-center shrink-0 transition-all duration-200 ${
                          isChecked
                            ? "bg-[#A65D32] text-white scale-100 shadow-xs"
                            : "bg-white border border-[#D1B48C] text-transparent scale-90"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 stroke-[3] transition-all duration-200 ${
                            isChecked ? "scale-100 opacity-100" : "scale-75 opacity-0"
                          }`}
                        />
                      </div>
                      <span className="text-xs font-medium leading-snug">
                        {point}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="pt-3.5 mt-4 border-t border-[#E8D5B8]/70 flex items-center justify-between text-[11px] text-[#8A7B6E]">
              <span>Hover points to verify</span>
              <span className="text-[#A65D32] font-semibold">Everyday Execution</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
