"use client";

import React from "react";
import Image from "next/image";
import {
  Settings,
  Users2,
  CheckCircle,
  Check,
} from "lucide-react";
import { WORKING_PRINCIPLES } from "./principlesData";

export default function WorkingPrinciples() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Settings className="w-4 h-4 text-[#A65D32]" />;
      case 1:
        return <Users2 className="w-4 h-4 text-[#A65D32]" />;
      case 2:
      default:
        return <CheckCircle className="w-4 h-4 text-[#A65D32]" />;
    }
  };

  return (
    <section
      id="working-principles"
      className="relative py-14 sm:py-14 lg:py-14 bg-white text-[#202A2E] border-b border-[#E4DED3] overflow-hidden"
      aria-label="How We Work: Production Philosophy, Customer Approach & Quality Commitment"
    >
      {/* Background Subtle Ambient Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#E8D5B8]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#A65D32]/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================================
            1. SECTION HEADER (Exact 2-Column Split Theme matching other sections)
        ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 sm:pb-8 mb-12 sm:mb-16 border-b border-[#E4DED3]">
          {/* Left Column: Eyebrow + Main Big Headline */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                HOW WE WORK
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.15] tracking-tight">
              The Principles Behind{" "}
              <span className="text-[#A65D32]">Every Box We Create.</span>
            </h2>
          </div>

          {/* Right Column: Context Description with Accent Border */}
          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              Our approach brings together thoughtful manufacturing,
              customer-focused solutions and a consistent commitment to quality.
            </p>
          </div>
        </div>

        {/* =========================================================================
            2. THREE CONNECTED PRINCIPLES TIMELINE
        ========================================================================= */}
        <div className="relative">
          {/* Subtle Vertical Kraft Connecting Line (Desktop center / Mobile left) */}
          <div className="hidden lg:block absolute left-1/2 top-12 bottom-12 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#A65D32] via-[#E8D5B8] to-[#493629] opacity-35" />

          <div className="space-y-16 lg:space-y-24">
            {WORKING_PRINCIPLES.map((stage, idx) => {
              const isImageLeft = idx === 1;

              return (
                <div
                  key={stage.number}
                  className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
                >
                  {/* Central Node Marker on Desktop */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-[#A65D32] shadow-md items-center justify-center z-20">
                    <span className="text-xs font-black text-[#493629]">
                      {stage.number}
                    </span>
                  </div>

                  {/* Left Column (Content for 01 & 03, Image for 02) */}
                  <div
                    className={`lg:col-span-6 ${isImageLeft ? "lg:order-2" : "lg:order-1"
                      }`}
                  >
                    {!isImageLeft ? (
                      /* Text Content Block */
                      <div className="space-y-4 lg:pr-8">
                        {/* Eyebrow & Number */}
                        <div className="flex items-center gap-3">
                          <span className="text-3xl font-black text-[#A65D32]/30 tracking-tight lg:hidden">
                            {stage.number}
                          </span>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E8D5B8] text-[#A65D32] text-xs font-bold uppercase tracking-wider shadow-2xs">
                            {getIcon(idx)}
                            <span>{stage.label}</span>
                          </div>
                        </div>

                        {/* Heading */}
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#202A2E] tracking-tight leading-snug">
                          {stage.heading}
                        </h3>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-[#62574D] leading-relaxed">
                          {stage.description}
                        </p>

                        {/* Bullet Highlights */}
                        <ul className="space-y-2.5 pt-1">
                          {stage.bulletPoints.map((point, pIdx) => (
                            <li
                              key={pIdx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-[#493629] font-medium"
                            >
                              <div className="w-5 h-5 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/30 flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3 h-3 text-[#A65D32]" />
                              </div>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      /* Stage 02: Image on Left (100% clean photo, no text overlay) */
                      <div className="relative group lg:pr-6">
                        <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-[#493629] border border-[#E8D5B8] shadow-lg">
                          <Image
                            src={stage.imageSrc}
                            alt={stage.imageAlt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column (Image for 01 & 03, Text for 02) */}
                  <div
                    className={`lg:col-span-6 ${isImageLeft ? "lg:order-1" : "lg:order-2"
                      }`}
                  >
                    {!isImageLeft ? (
                      /* Image Block for 01 & 03 (100% clean photo, no text overlay) */
                      <div className="relative group lg:pl-6">
                        <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-[#493629] border border-[#E8D5B8] shadow-lg">
                          <Image
                            src={stage.imageSrc}
                            alt={stage.imageAlt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                        </div>
                      </div>
                    ) : (
                      /* Stage 02: Text Block on Right */
                      <div className="space-y-4 lg:pl-8">
                        {/* Eyebrow & Number */}
                        <div className="flex items-center gap-3">
                          <span className="text-3xl font-black text-[#A65D32]/30 tracking-tight lg:hidden">
                            {stage.number}
                          </span>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E8D5B8] text-[#A65D32] text-xs font-bold uppercase tracking-wider shadow-2xs">
                            {getIcon(idx)}
                            <span>{stage.label}</span>
                          </div>
                        </div>

                        {/* Heading */}
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#202A2E] tracking-tight leading-snug">
                          {stage.heading}
                        </h3>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-[#62574D] leading-relaxed">
                          {stage.description}
                        </p>

                        {/* Bullet Highlights */}
                        <ul className="space-y-2.5 pt-1">
                          {stage.bulletPoints.map((point, pIdx) => (
                            <li
                              key={pIdx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-[#493629] font-medium"
                            >
                              <div className="w-5 h-5 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/30 flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3 h-3 text-[#A65D32]" />
                              </div>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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
