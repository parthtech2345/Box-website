"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Boxes, Sparkles, PackageCheck, Layers } from "lucide-react";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      id="cta"
      ref={sectionRef}
      className="relative w-full bg-[#FFFFFF] text-[#202A2E] py-14 sm:py-14 lg:py-14 overflow-hidden border-b border-[#E4DED3]"
      aria-label="Ready to Get Started"
    >
      {/* Background Decorative Ambient Accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#E8D5B8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#A65D32]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Cardboard Fold Line SVG Path */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 1200 600"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M -100 200 C 300 100, 700 500, 1300 250"
          stroke="#E4DED3"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
        <path
          d="M -50 400 C 400 300, 800 600, 1350 450"
          stroke="#A65D32"
          strokeWidth="1"
          strokeOpacity="0.25"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* =========================================================================
              LEFT SIDE (55%): Eyebrow, Large Heading, Pitch, Dual CTA Buttons
          ========================================================================= */}
          <div
            className={`lg:col-span-7 flex flex-col justify-center transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/20 mb-4 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                READY TO GET STARTED?
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.15] tracking-tight mb-5">
              Let&apos;s Build the Right Box <br className="hidden sm:inline" />
              <span className="text-[#A65D32] relative inline-block">
                for Your Business.
                {/* Restrained decorative underline */}
                <span className="absolute left-0 bottom-[-4px] w-full h-[2.5px] bg-[#A65D32] rounded-full" />
              </span>
            </h2>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#62574D] font-normal leading-relaxed mb-8 max-w-2xl">
              From everyday packaging to specialized industrial solutions, we create corrugated
              boxes designed around your product, protection and business needs.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              {/* Primary CTA: Request a Quote */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-[#A65D32] text-white text-base font-semibold hover:bg-[#8e4f2b] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 group active:scale-[0.98]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA: Explore Our Products */}
              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-[#FAF7F2] text-[#493629] text-base font-semibold border border-[#D1B48C]/60 hover:bg-[#F2ECE1] hover:border-[#A65D32] hover:text-[#202A2E] transition-all duration-200 active:scale-[0.98]"
              >
                <span>Explore Our Products</span>
              </Link>
            </div>

            {/* Compact Supporting Value Line */}
            <div className="flex flex-wrap items-center gap-y-2 text-xs sm:text-sm text-[#62574D] font-medium border-t border-[#E4DED3] pt-5">
              <span>Custom Sizes</span>
              <span className="mx-2.5 text-[#A65D32]">•</span>
              <span>Multiple Ply Options</span>
              <span className="mx-2.5 text-[#A65D32]">•</span>
              <span>Tailored Packaging</span>
            </div>
          </div>

          {/* =========================================================================
              RIGHT SIDE (45%): Realistic Corrugated Cardboard Packaging Composition
          ========================================================================= */}
          <div
            className={`lg:col-span-5 relative transition-all duration-700 delay-150 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
          >
            {/* Studio frame container */}
            <div className="relative rounded-2xl p-2.5 sm:p-3 bg-[#FAF7F2] border border-[#E4DED3] shadow-lg group">
              {/* Outer Terracotta Soft Radial Aura */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#A65D32]/10 to-transparent rounded-2xl blur-lg pointer-events-none" />

              {/* Image Container with Natural Studio Lighting */}
              <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] rounded-xl overflow-hidden bg-white">
                <Image
                  src="/home/cta/corrugated-boxes-composition.png"
                  alt="Authentic kraft corrugated cardboard boxes composition with visible fluting texture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                  priority
                />

                {/* Floating Dimension Badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#493629]/90 backdrop-blur-sm border border-[#E8D5B8]/30 shadow-md">
                  <Boxes className="w-3.5 h-3.5 text-[#A65D32]" />
                  <span className="text-xs font-semibold text-[#F5EFE5]">
                    Engineered Kraft Architecture
                  </span>
                </div>

                {/* Floating Bottom Stamp */}
                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-[#E4DED3] shadow-md">
                  <PackageCheck className="w-3.5 h-3.5 text-[#A65D32]" />
                  <span className="text-xs font-bold text-[#493629]">
                    100% Recyclable Board
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
