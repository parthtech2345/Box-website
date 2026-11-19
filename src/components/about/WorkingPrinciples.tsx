"use client";

import React from "react";
import Image from "next/image";
import {
  Settings,
  Users2,
  CheckCircle,
  Check,
  Sparkles,
  ArrowRight,
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
      className="relative py-24 md:py-32 bg-[#F5EFE5] text-[#202A2E] overflow-hidden"
      aria-label="How We Work: Production Philosophy, Customer Approach & Quality Commitment"
    >
      {/* Background Decorative Patterns */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, #493629 1.5px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#E8D5B8]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#A65D32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================================
            1. SECTION MAIN HEADING
        ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8D5B8]/60 border border-[#A65D32]/25 text-[#A65D32] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HOW WE WORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#493629] tracking-tight leading-tight mb-5">
            The Principles Behind{" "}
            <span className="text-[#A65D32]">Every Box We Create.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#62574D] leading-relaxed font-light">
            Our approach brings together thoughtful manufacturing,
            customer-focused solutions and a consistent commitment to quality.
          </p>
        </div>

        {/* =========================================================================
            2. THREE CONNECTED PRINCIPLES TIMELINE
        ========================================================================= */}
        <div className="relative">
          {/* Subtle Vertical Kraft Connecting Line (Desktop center / Mobile left) */}
          <div className="hidden lg:block absolute left-1/2 top-12 bottom-12 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#A65D32] via-[#E8D5B8] to-[#493629] opacity-35" />

          <div className="space-y-20 lg:space-y-32">
            {WORKING_PRINCIPLES.map((stage, idx) => {
              // Alternating: Stage 01 (Image Right, Text Left), Stage 02 (Image Left, Text Right), Stage 03 (Image Right, Text Left)
              const isImageLeft = idx === 1;

              return (
                <div
                  key={stage.number}
                  className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
                >
                  {/* Central Node Marker on Desktop */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white border-2 border-[#A65D32] shadow-md items-center justify-center z-20">
                    <span className="text-xs font-black text-[#493629]">
                      {stage.number}
                    </span>
                  </div>

                  {/* Left Column (Content for 01 & 03, Image for 02) */}
                  <div
                    className={`lg:col-span-6 ${
                      isImageLeft ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    {!isImageLeft ? (
                      /* Text Content Block */
                      <div className="space-y-5 lg:pr-8">
                        {/* Eyebrow & Number (Mobile / Desktop) */}
                        <div className="flex items-center gap-3">
                          <span className="text-3xl sm:text-4xl font-black text-[#A65D32]/30 tracking-tight lg:hidden">
                            {stage.number}
                          </span>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8D5B8] text-[#A65D32] text-xs font-bold uppercase tracking-wider shadow-sm">
                            {getIcon(idx)}
                            <span>{stage.label}</span>
                          </div>
                        </div>

                        {/* Heading */}
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#493629] tracking-tight leading-snug">
                          {stage.heading}
                        </h3>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-[#62574D] leading-relaxed">
                          {stage.description}
                        </p>

                        {/* Bullet Highlights */}
                        <ul className="space-y-2.5 pt-2">
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

                        {/* Metric Callout Pill */}
                        <div className="pt-2">
                          <div className="inline-flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E8D5B8] shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-[#A65D32]" />
                            <span className="text-xs font-bold text-[#493629]">
                              {stage.accentMetric.value}
                            </span>
                            <span className="text-xs text-[#62574D]">
                              &bull; {stage.accentMetric.label}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Stage 02: Image on Left */
                      <div className="relative group lg:pr-6">
                        {/* Decorative Layered Kraft Offset Frame */}
                        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#E8D5B8]/70 to-[#A65D32]/15 rotate-1 pointer-events-none" />

                        <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-[#493629] border border-[#E8D5B8] shadow-2xl">
                          <Image
                            src={stage.imageSrc}
                            alt={stage.imageAlt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                          />

                          {/* Gradient Vignette */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#493629]/80 via-transparent to-transparent pointer-events-none" />

                          {/* Floating Bottom Pill */}
                          <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8D5B8] shadow-md flex items-center justify-between gap-3 pointer-events-none">
                            <span className="text-xs font-bold text-[#493629] uppercase tracking-wider">
                              {stage.accentMetric.value}
                            </span>
                            <span className="text-[11px] font-semibold text-[#A65D32]">
                              {stage.label}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column (Image for 01 & 03, Text for 02) */}
                  <div
                    className={`lg:col-span-6 ${
                      isImageLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {!isImageLeft ? (
                      /* Image Block for 01 & 03 */
                      <div className="relative group lg:pl-6">
                        {/* Decorative Layered Kraft Offset Frame */}
                        <div className="absolute -inset-3 rounded-3xl bg-gradient-to-bl from-[#E8D5B8]/70 to-[#A65D32]/15 -rotate-1 pointer-events-none" />

                        <div className="relative rounded-2xl overflow-hidden aspect-[16/11] bg-[#493629] border border-[#E8D5B8] shadow-2xl">
                          <Image
                            src={stage.imageSrc}
                            alt={stage.imageAlt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                          />

                          {/* Gradient Vignette */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#493629]/80 via-transparent to-transparent pointer-events-none" />

                          {/* Floating Bottom Pill */}
                          <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8D5B8] shadow-md flex items-center justify-between gap-3 pointer-events-none">
                            <span className="text-xs font-bold text-[#493629] uppercase tracking-wider">
                              {stage.accentMetric.value}
                            </span>
                            <span className="text-[11px] font-semibold text-[#A65D32]">
                              {stage.label}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Stage 02: Text Block on Right */
                      <div className="space-y-5 lg:pl-8">
                        {/* Eyebrow & Number */}
                        <div className="flex items-center gap-3">
                          <span className="text-3xl sm:text-4xl font-black text-[#A65D32]/30 tracking-tight lg:hidden">
                            {stage.number}
                          </span>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8D5B8] text-[#A65D32] text-xs font-bold uppercase tracking-wider shadow-sm">
                            {getIcon(idx)}
                            <span>{stage.label}</span>
                          </div>
                        </div>

                        {/* Heading */}
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#493629] tracking-tight leading-snug">
                          {stage.heading}
                        </h3>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-[#62574D] leading-relaxed">
                          {stage.description}
                        </p>

                        {/* Bullet Highlights */}
                        <ul className="space-y-2.5 pt-2">
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

                        {/* Metric Callout Pill */}
                        <div className="pt-2">
                          <div className="inline-flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E8D5B8] shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-[#A65D32]" />
                            <span className="text-xs font-bold text-[#493629]">
                              {stage.accentMetric.value}
                            </span>
                            <span className="text-xs text-[#62574D]">
                              &bull; {stage.accentMetric.label}
                            </span>
                          </div>
                        </div>
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
