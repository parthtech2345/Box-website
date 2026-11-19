"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Award, Users, Package, MapPin, Check } from "lucide-react";

export interface StatisticItem {
  id: string;
  value: number | string;
  suffix: string;
  label: string;
  subtext?: string;
  icon: React.ElementType;
}

// Exactly matching verified single data source for the 4 statistics counters
const STATISTICS_DATA: StatisticItem[] = [
  {
    id: "stat-1",
    value: 25,
    suffix: "+",
    label: "Years of Experience",
    subtext: "Dedicated manufacturing journey",
    icon: Award,
  },
  {
    id: "stat-2",
    value: 500,
    suffix: "+",
    label: "Clients Served",
    subtext: "Across major industrial sectors",
    icon: Users,
  },
  {
    id: "stat-3",
    value: 1200,
    suffix: "+",
    label: "Packaging Solutions",
    subtext: "Engineered box designs",
    icon: Package,
  },
  {
    id: "stat-4",
    value: 65,
    suffix: "+",
    label: "Cities Reached",
    subtext: "Pan-India delivery network",
    icon: MapPin,
  },
];

export default function CompanyHistory() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const statsSectionRef = useRef<HTMLDivElement | null>(null);

  // Reusing the exact animated counter implementation from homepage
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          STATISTICS_DATA.forEach((stat) => {
            if (typeof stat.value === "number") {
              const target = stat.value;
              const duration = 1800; // 1.8s
              const frameRate = 30;
              const totalFrames = Math.round((duration / 1000) * frameRate);
              let frame = 0;

              const counterInterval = setInterval(() => {
                frame++;
                const progress = frame / totalFrames;
                // Ease-out quad matching homepage
                const currentCount = Math.round(target * (1 - Math.pow(1 - progress, 2)));

                setCounts((prev) => ({
                  ...prev,
                  [stat.id]: currentCount,
                }));

                if (frame >= totalFrames) {
                  clearInterval(counterInterval);
                  setCounts((prev) => ({
                    ...prev,
                    [stat.id]: target,
                  }));
                }
              }, 1000 / frameRate);
            }
          });
        }
      },
      { threshold: 0.25 }
    );

    const el = statsSectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasAnimated]);

  return (
    <section
      id="company-history"
      aria-label="Company History and Our Journey"
      className="w-full bg-[#FFFFFF] py-14 sm:py-16 lg:py-18 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========================================================= */}
        {/* TOP TWO-COLUMN SECTION: 50% IMAGE LEFT, 50% TEXT RIGHT   */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 lg:mb-20">

          {/* Left Column: Manufacturing Facility Image (Matching Homepage Treatment) */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#D1B48C]/60 shadow-xl group bg-[#202A2E]/5">
              <Image
                src="/home/company img.png"
                alt="AAVRIT PACKAGING modern corrugated cardboard packaging manufacturing facility in India"
                fill
                priority={false}
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Column: Company History & Journey Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">

            {/* Eyebrow Label: OUR JOURNEY */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#493629]/10 text-[#493629] text-xs font-bold uppercase tracking-widest mb-3 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span>OUR JOURNEY</span>
            </div>

            {/* Main Heading: The Story Behind Our Company */}
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#202A2E] leading-[1.12] tracking-tight mb-4">
              The Story Behind Our Company
            </h2>

            {/* Description Paragraph 1 */}
            <p className="text-base text-[#62574D] font-normal leading-relaxed mb-3">
              At AAVRIT PACKAGING, our journey began with a clear conviction: packaging is not just a container, but an essential shield that protects goods, safeguards reputations, and enables businesses to ship with complete confidence.
            </p>

            {/* Description Paragraph 2 */}
            <p className="text-sm sm:text-[15px] text-[#687378] font-normal leading-relaxed mb-6">
              Over the years, we have grown from focused beginnings into a dependable corrugated box manufacturer in Gujarat, India. By pairing robust 3-ply, 5-ply and 7-ply board engineering with modern automated machinery and stringent quality testing, we create corrugated solutions built around our customers&apos; real transit demands.
            </p>

            {/* 6 Core Brand Principles Grid with Interactive Hover Animation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 w-full">
              {[
                "Built Around Your Requirements",
                "Certified In-House Lab Testing",
                "Strength in Every Layer",
                "High-Speed Automated Capacity",
                "Focused on Reliable Packaging",
                "Eco-Friendly 100% Recyclable",
              ].map((quality, idx) => (
                <div
                  key={idx}
                  className="group/item flex items-center gap-3 cursor-pointer py-1.5 transition-all duration-200 select-none"
                >
                  <div className="w-5 h-5 rounded-md bg-[#A65D32]/15 border-[1.5px] border-[#A65D32]/40 flex items-center justify-center shrink-0 transition-all duration-300 ease-out group-hover/item:bg-[#A65D32] group-hover/item:border-[#A65D32] group-hover/item:scale-110 group-hover/item:shadow-md group-hover/item:shadow-[#A65D32]/30">
                    <Check className="w-3.5 h-3.5 text-[#A65D32] stroke-[2.5] transition-all duration-300 ease-out group-hover/item:text-white group-hover/item:stroke-[3.5] group-hover/item:scale-110" />
                  </div>
                  <span className="text-[13px] sm:text-[14px] font-semibold text-[#202A2E] transition-all duration-200 group-hover/item:text-[#A65D32] group-hover/item:translate-x-0.5 leading-snug">
                    {quality}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* SUBTLE DIVIDER                                            */}
        {/* ========================================================= */}
        <div className="w-full border-t border-[#E4DED3] mb-12" />

        {/* ========================================================= */}
        {/* BOTTOM: 4 STATISTICS COUNTERS IN INDUSTRIAL SQUARE BOXES   */}
        {/* ========================================================= */}
        <div
          ref={statsSectionRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STATISTICS_DATA.map((stat) => {
            const displayValue =
              typeof stat.value === "number"
                ? (counts[stat.id] ?? 0) + stat.suffix
                : `${stat.value}${stat.suffix}`;

            return (
              <div
                key={stat.id}
                className="bg-[#F5F2EB]/60 hover:bg-[#F5F2EB] rounded-2xl border border-[#E4DED3] hover:border-[#D1B48C] p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-md group relative overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#E4DED3] group-hover:bg-[#A65D32] transition-colors" />

                <div>
                  {/* Large Numerical Counter in Barlow Semi Condensed */}
                  <div className="font-heading font-bold text-4xl sm:text-5xl text-[#A65D32] tracking-tight leading-none mb-3">
                    {displayValue}
                  </div>

                  {/* Primary Label in Charcoal */}
                  <div className="font-heading font-semibold text-lg sm:text-xl text-[#202A2E] leading-snug">
                    {stat.label}
                  </div>
                </div>

                {/* Subtext */}
                {stat.subtext && (
                  <div className="text-xs text-[#687378] mt-5 pt-3.5 border-t border-[#E4DED3]/70 font-normal">
                    {stat.subtext}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
