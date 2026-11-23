"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Recycle, Box, SlidersHorizontal, Leaf, Sparkles, CheckCircle2 } from "lucide-react";
import PackagingConveyorAnimation from "./PackagingConveyorAnimation";

interface SustainabilityPrinciple {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  badge: string;
}

const PRINCIPLES: SustainabilityPrinciple[] = [
  {
    number: "01",
    title: "Recyclable Paper-Based Packaging",
    description:
      "Corrugated cardboard is paper-based and can generally be recycled through suitable paper recovery and recycling facilities.",
    icon: Recycle,
    badge: "Circular Material Recovery",
  },
  {
    number: "02",
    title: "Smarter Packaging Design",
    description:
      "Appropriate box dimensions and construction can help avoid unnecessary packaging material while maintaining product protection.",
    icon: Box,
    badge: "Right-Sized Engineering",
  },
  {
    number: "03",
    title: "Efficient Material Usage",
    description:
      "Thoughtful material selection and production planning can help make better use of packaging resources.",
    icon: SlidersHorizontal,
    badge: "Resource Optimization",
  },
  {
    number: "04",
    title: "Eco-Conscious Manufacturing Flow",
    description:
      "Modern box assembly practices reduce scrap and energy consumption while ensuring consistent structural strength.",
    icon: Leaf,
    badge: "Sustainable Operations",
  },
];

export default function Sustainability() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activePrinciple, setActivePrinciple] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sustainability"
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 lg:py-14 border-b border-[#E4DED3] relative overflow-hidden"
      aria-label="Packaging with Purpose - Sustainability"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================================
            1. SECTION HEADER (Matching 2-Column Split Theme)
        ========================================================================= */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 mb-12 sm:mb-16 border-b border-[#E4DED3] transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          {/* Left Column: Eyebrow + Main Big Headline */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#78846A]/15 border border-[#78846A]/30 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#78846A]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#78846A]">
                RESPONSIBLE PACKAGING
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              Better Packaging. <br className="hidden sm:inline" />
              <span className="text-[#A65D32]">Thoughtful Choices.</span>
            </h2>
          </div>

          {/* Right Column: Context Description with Accent Border */}
          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              Good packaging does more than protect products. Thoughtful material selection and efficient design can help reduce unnecessary packaging and support more responsible resource use.
            </p>
          </div>
        </div>

        {/* =========================================================================
            2. TWO-COLUMN MAIN CONTENT AREA (Principles on Left, GIF on Right)
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-14 sm:mb-16">
          {/* LEFT COLUMN: 4 Sustainability Principles */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            {/* The 4 Principles */}
            {PRINCIPLES.map((principle, idx) => {
              const Icon = principle.icon;
              const isActive = activePrinciple === idx;

              return (
                <div
                  key={principle.number}
                  onMouseEnter={() => setActivePrinciple(idx)}
                  className={`p-4 sm:p-5 rounded-xl border transition-all duration-300 cursor-pointer ${isActive
                    ? "bg-[#FAF7F2] border-[#78846A] shadow-sm -translate-y-0.5 ring-1 ring-[#78846A]/30"
                    : "bg-white border-[#E4DED3] hover:border-[#78846A]/50 hover:bg-[#FAF7F2]/50"
                    }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Number Indicator & Icon Badge */}
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${isActive
                        ? "bg-[#78846A] text-white border-[#78846A]"
                        : "bg-[#FAF7F2] text-[#78846A] border-[#E4DED3]"
                        }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="font-heading font-bold text-base text-[#202A2E]">
                          <span className="text-[#A65D32] mr-2 text-sm font-semibold">
                            {principle.number}
                          </span>
                          {principle.title}
                        </h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#78846A] bg-[#78846A]/10 px-2 py-0.5 rounded border border-[#78846A]/20 hidden sm:inline-block">
                          {principle.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: GIF Visual + Heading + Editorial Statement */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            {/* Meaningful Heading for the GIF */}
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#A65D32]" />
              <h3 className="font-heading font-bold text-lg sm:text-xl text-[#202A2E] tracking-tight">
                Sustainable Packaging in Motion
              </h3>
            </div>

            {/* GIF Container with Highlighted Border */}
            <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[390px] rounded-2xl overflow-hidden bg-[#FAF7F2] border-2 border-[#D1B48C] shadow-md hover:border-[#A65D32] transition-colors duration-300 flex items-center justify-center">
              <Image
                src="/home/sustainability/box_manufacturing_kraft_theme.gif"
                alt="Industrial corrugated cardboard manufacturing and packaging line in kraft theme"
                fill
                unoptimized
                className="object-contain object-center"
                priority
              />
            </div>

            {/* Supporting Highlighted Editorial Statement below the GIF */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#FAF7F2] border-l-4 border-[#A65D32] border border-[#E4DED3] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-xs sm:text-sm text-[#493629] font-medium leading-relaxed italic">
                “Thoughtful packaging starts with the right material, the right design and the right fit for every product.”
              </p>
              <Link
                href="/sustainability"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#78846A] hover:text-[#A65D32] shrink-0 transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Slow Rotation CSS for Circular Motion Graphics */}
      <style jsx>{`
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-spin-slow {
          animation: spinSlow 45s linear infinite;
        }
        .animate-spin-reverse {
          animation: spinReverse 60s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-spin-slow,
          .animate-spin-reverse {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
