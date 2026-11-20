"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Award, Users, Package, MapPin, Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface StatisticItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  subtext?: string;
  icon: React.ElementType;
}

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
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const qualitiesRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Facility Image Reveal
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, x: -40, scale: 0.96 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 2. Company Story Content Entrance
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0, x: 40 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 3. Qualities Stagger
      if (qualitiesRef.current) {
        gsap.fromTo(
          qualitiesRef.current.children,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power1.out",
            scrollTrigger: {
              trigger: qualitiesRef.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 4. 4 Stat Cards & Counting Animation
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        STATISTICS_DATA.forEach((stat, idx) => {
          const el = counterRefs.current[idx];
          if (!el) return;

          const obj = { val: 0 };
          gsap.to(obj, {
            val: stat.value,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            onUpdate: () => {
              el.innerText = `${Math.floor(obj.val)}${stat.suffix}`;
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="company-history"
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 lg:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* TOP TWO-COLUMN INTRODUCTION: 50% IMAGE LEFT, 50% TEXT RIGHT */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 lg:mb-20">
          {/* Left Column: Manufacturing Facility Image */}
          <div ref={imageRef} className="lg:col-span-6 relative w-full flex items-center justify-center">
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

          {/* Right Column: Company Introduction Content */}
          <div ref={contentRef} className="lg:col-span-6 flex flex-col justify-center">
            {/* Small uppercase category label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#493629]/10 text-[#493629] text-xs font-bold uppercase tracking-widest mb-3 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E97835]" />
              <span>ABOUT AAVRIT PACKAGING</span>
            </div>

            {/* Main Heading */}
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#202A2E] leading-[1.12] tracking-tight mb-4">
              Protection Begins With Better Packaging.
            </h2>

            {/* First Paragraph */}
            <p className="text-base text-[#62574D] font-normal leading-relaxed mb-3">
              At AAVRIT Packaging, we believe packaging is more than just a box. It is an essential part of protecting products, maintaining quality and helping businesses deliver with confidence.
            </p>

            {/* Second Paragraph */}
            <p className="text-sm sm:text-[15px] text-[#687378] font-normal leading-relaxed mb-6">
              From customized corrugated boxes to dependable bulk packaging solutions, our focus is on understanding business requirements and creating packaging that combines strength, practicality and value.
            </p>

            {/* 6 Brand Qualities Grid with Staggered Entrance */}
            <div ref={qualitiesRef} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 w-full">
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
        {/* BOTTOM: FOUR STATISTICS WITH LIVE COUNTERS                */}
        {/* ========================================================= */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STATISTICS_DATA.map((stat, idx) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className="bg-[#F5F2EB]/60 hover:bg-[#F5F2EB] rounded-2xl border border-[#E4DED3] hover:border-[#D1B48C] p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-md group relative overflow-hidden"
              >
                {/* Subtle top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#E4DED3] group-hover:bg-[#E97835] transition-colors" />

                <div>
                  {/* Large Numerical Counter with Live GSAP Ref */}
                  <div className="font-heading font-bold text-4xl sm:text-5xl text-[#E97835] tracking-tight leading-none mb-3">
                    <span
                      ref={(el) => {
                        counterRefs.current[idx] = el;
                      }}
                    >
                      0{stat.suffix}
                    </span>
                  </div>

                  {/* Primary Label */}
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
