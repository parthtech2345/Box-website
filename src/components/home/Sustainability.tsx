"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Recycle, Box, SlidersHorizontal, Leaf, Sparkles, CheckCircle2 } from "lucide-react";

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
            2. TWO-COLUMN MAIN CONTENT AREA
        ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14 sm:mb-16">
          {/* LEFT COLUMN: 3 Sustainability Principles + Supporting Message + CTA */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* The 3 Principles */}
            <div className="space-y-4">
              {PRINCIPLES.map((principle, idx) => {
                const Icon = principle.icon;
                const isActive = activePrinciple === idx;

                return (
                  <div
                    key={principle.number}
                    onMouseEnter={() => setActivePrinciple(idx)}
                    className={`p-5 sm:p-6 rounded-xl border transition-all duration-300 cursor-pointer ${isActive
                      ? "bg-[#FAF7F2] border-[#78846A] shadow-sm -translate-y-0.5 ring-1 ring-[#78846A]/30"
                      : "bg-white border-[#E4DED3] hover:border-[#78846A]/50 hover:bg-[#FAF7F2]/50"
                      }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Number Indicator & Icon Badge */}
                      <div
                        className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 border transition-all duration-300 ${isActive
                          ? "bg-[#78846A] text-white border-[#78846A]"
                          : "bg-[#FAF7F2] text-[#78846A] border-[#E4DED3]"
                          }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h3 className="font-heading font-bold text-base sm:text-lg text-[#202A2E]">
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

            {/* Supporting Highlighted Editorial Statement */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#FAF7F2] border-l-4 border-[#A65D32] border border-[#E4DED3]">
              <p className="text-xs sm:text-sm text-[#493629] font-medium leading-relaxed italic">
                “Thoughtful packaging starts with the right material, the right design and the right fit for every product.”
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#A65D32] text-white text-sm font-semibold hover:bg-[#8e4f2b] transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 group"
              >
                <span>Explore Our Packaging Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Signature Animated Corrugated Cardboard Sustainability Visual */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl p-4 sm:p-6 bg-[#FAF7F2] border border-[#E4DED3] overflow-hidden shadow-sm group">
              {/* Outer Circular Motion Graphic SVG representing material circularity */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 600 500"
                fill="none"
              >
                <circle
                  cx="300"
                  cy="250"
                  r="210"
                  stroke="#78846A"
                  strokeWidth="1.5"
                  strokeDasharray="6 8"
                  className="opacity-40 animate-spin-slow origin-center"
                />
                <circle
                  cx="300"
                  cy="250"
                  r="225"
                  stroke="#A65D32"
                  strokeWidth="1"
                  strokeDasharray="3 12"
                  className="opacity-30 animate-spin-reverse origin-center"
                />
              </svg>

              {/* Main Visual Image Container */}
              <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[460px] rounded-xl overflow-hidden bg-white border border-[#E4DED3]">
                <Image
                  src="/home/sustainability/sustainable-cardboard-plant.png"
                  alt="Authentic kraft corrugated box beside a green plant sprout representing responsible packaging"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                  priority
                />

                {/* Subtle Botanical / Paper Nature Badges */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-[#E4DED3] shadow-sm">
                  <Leaf className="w-3.5 h-3.5 text-[#78846A]" />
                  <span className="text-xs font-semibold text-[#202A2E]">
                    Paper-Based & Renewable Fiber
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#202A2E]/90 backdrop-blur-sm text-white text-xs font-medium shadow-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#78846A]" />
                  <span>Circular Packaging Material</span>
                </div>
              </div>

              {/* Caption beneath visual */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#62574D] px-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#78846A]" />
                  Corrugated cardboard is naturally biodegradable and widely recyclable
                </span>
                <span className="font-semibold text-[#A65D32]">Packaging with Purpose</span>
              </div>
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
