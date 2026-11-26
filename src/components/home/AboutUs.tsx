"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Check, Award, Users, Package, MapPin } from "lucide-react";
import Card3DTilt from "@/components/ui/Card3DTilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface StatisticItem {
  id: string;
  value: number | string; // Numeric value for counter animation, or "XX+" placeholder
  suffix: string;
  label: string;
  subtext?: string;
  icon: React.ElementType;
  isPlaceholder?: boolean;
}

// Configurable single data structure for the 4 statistics counters
const STATISTICS_DATA: StatisticItem[] = [
  {
    id: "stat-1",
    value: 25,
    suffix: "+",
    label: "Years of Experience",
    subtext: "Dedicated manufacturing journey",
    icon: Award,
    isPlaceholder: false,
  },
  {
    id: "stat-2",
    value: 500,
    suffix: "+",
    label: "Clients Served",
    subtext: "Across major industrial sectors",
    icon: Users,
    isPlaceholder: false,
  },
  {
    id: "stat-3",
    value: 1200,
    suffix: "+",
    label: "Packaging Solutions",
    subtext: "Engineered box designs",
    icon: Package,
    isPlaceholder: false,
  },
  {
    id: "stat-4",
    value: 65,
    suffix: "+",
    label: "Cities Reached",
    subtext: "Pan-India delivery network",
    icon: MapPin,
    isPlaceholder: false,
  },
];

export default function AboutUs({ data }: { data?: any } = {}) {
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  const statsSectionRef = useRef<HTMLDivElement | null>(null);

  const statsList = data?.stats && data.stats.length > 0 ? data.stats : STATISTICS_DATA;
  const imageSrc =
    data?.mediaUrl && typeof data.mediaUrl === "string" && data.mediaUrl.trim() !== "" && !data.mediaUrl.includes("packaging-facility.png")
      ? data.mediaUrl
      : data?.image && typeof data.image === "string" && data.image.trim() !== "" && !data.image.includes("packaging-facility.png")
      ? data.image
      : "/home/company img.png";
  const badgeText = data?.badge || "ABOUT AAVRIT PACKAGING";
  const titleText = data?.title || "Protection Begins With Better Packaging.";
  const descriptionText = data?.description || "At AAVRIT Packaging, we believe packaging is more than just a box. It is an essential part of protecting products, maintaining quality and helping businesses deliver with confidence.";

  // Animated Counter implementation with GSAP & ScrollTrigger
  useEffect(() => {
    if (typeof window === "undefined" || !statsSectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = statsSectionRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsSectionRef.current,
              start: "top 85%",
              once: true,
              onEnter: () => {
                statsList.forEach((stat: any) => {
                  if (typeof stat.value === "number") {
                    const counter = { val: 0 };
                    gsap.to(counter, {
                      val: stat.value,
                      duration: 2.2,
                      ease: "power2.out",
                      onUpdate: () => {
                        setCounts((prev) => ({
                          ...prev,
                          [stat.id]: Math.round(counter.val),
                        }));
                      },
                    });
                  }
                });
              },
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [statsList]);

  return (
    <section
      id="about"
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 lg:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========================================================= */}
        {/* TOP TWO-COLUMN INTRODUCTION: 50% IMAGE LEFT, 50% TEXT RIGHT */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 lg:mb-20">

          {/* Left Column (Approx 50% / 6 cols): Manufacturing Facility Image */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#D1B48C]/60 shadow-xl group bg-[#202A2E]/5">
              <Image
                src={imageSrc}
                alt="AAVRIT PACKAGING modern corrugated cardboard packaging manufacturing facility in India"
                fill
                priority={false}
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Column (Approx 50% / 6 cols): Company Introduction Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">

            {/* Small uppercase category label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#493629]/10 text-[#493629] text-xs font-bold uppercase tracking-widest mb-3 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E97835]" />
              <span>{badgeText}</span>
            </div>

            {/* Main Heading in Barlow Semi Condensed */}
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#202A2E] leading-[1.12] tracking-tight mb-4">
              {titleText}
            </h2>

            {/* First Paragraph */}
            <p className="text-base text-[#62574D] font-normal leading-relaxed mb-3">
              {descriptionText}
            </p>

            {/* Second Paragraph */}
            <p className="text-sm sm:text-[15px] text-[#687378] font-normal leading-relaxed mb-6">
              From customized corrugated boxes to dependable bulk packaging solutions, our focus is on understanding business requirements and creating packaging that combines strength, practicality and value.
            </p>

            {/* 6 Brand Qualities Grid: 3 left, 3 right with Interactive Checkbox Draw & Pop Hover Animation */}
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
                  <div className="w-5 h-5 rounded-md bg-[#E97835]/15 border-[1.5px] border-[#E97835]/40 flex items-center justify-center shrink-0 transition-all duration-300 ease-out group-hover/item:bg-[#E97835] group-hover/item:border-[#E97835] group-hover/item:scale-110 group-hover/item:shadow-md group-hover/item:shadow-[#E97835]/30">
                    <Check className="w-3.5 h-3.5 text-[#E97835] stroke-[2.5] transition-all duration-300 ease-out group-hover/item:text-white group-hover/item:stroke-[3.5] group-hover/item:scale-110" />
                  </div>
                  <span className="text-[13px] sm:text-[14px] font-semibold text-[#202A2E] transition-all duration-200 group-hover/item:text-[#E97835] group-hover/item:translate-x-0.5 leading-snug">
                    {quality}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* SUBTLE DIVIDER / TRANSITION                               */}
        {/* ========================================================= */}
        <div className="w-full border-t border-[#E4DED3] mb-12" />

        {/* ========================================================= */}
        {/* BOTTOM: FOUR STATISTICS IN PREMIUM INDUSTRIAL SQUARE BOXES */}
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
            const Icon = stat.icon;

            return (
              <Card3DTilt key={stat.id} className="h-full rounded-2xl">
                <div className="h-full bg-[#F5F2EB]/60 hover:bg-[#F5F2EB] rounded-2xl border border-[#E4DED3] hover:border-[#D1B48C] p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-md group relative overflow-hidden">
                  {/* Subtle top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#E4DED3] group-hover:bg-[#E97835] transition-colors" />

                  <div>
                    {/* Large Numerical Counter in Barlow Semi Condensed */}
                    <div className="font-heading font-bold text-4xl sm:text-5xl text-[#E97835] tracking-tight leading-none mb-3">
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
              </Card3DTilt>
            );
          })}
        </div>

      </div>
    </section>
  );
}
