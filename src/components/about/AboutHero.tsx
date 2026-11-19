"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Sparkles, ShieldCheck } from "lucide-react";

export default function AboutHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      aria-label="About Us Hero Banner"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#F5EFE5] via-[#FAF7F2] to-[#F5EFE5] border-b border-[#E4DED3]"
    >
      {/* Background Subtle Ambient Kraft Gradient & Geometric Grid Accents */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Radial Ambient Lights */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#E8D5B8]/25 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#A65D32]/5 rounded-full blur-3xl" />

        {/* Cardboard fold line graphic */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          viewBox="0 0 1440 600"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M -50 180 C 400 120, 850 480, 1500 220"
            stroke="#D1B48C"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: Breadcrumb, Eyebrow, Heading, Description
          ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center">
            
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className={`flex items-center gap-2 text-xs font-medium text-[#62574D] mb-5 transition-all duration-700 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
            >
              <Link
                href="/"
                className="hover:text-[#A65D32] transition-colors flex items-center"
              >
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#D1B48C]" />
              <span className="text-[#A65D32] font-semibold">About Us</span>
            </nav>

            {/* Eyebrow Pill Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-4 transition-all duration-700 delay-100 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#A65D32] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                ABOUT OUR COMPANY
              </span>
            </div>

            {/* Main Heading: Deep Kraft Brown with Terracotta Accents */}
            <h1
              className={`font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#493629] leading-[1.14] tracking-tight mb-5 transition-all duration-700 delay-200 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Built on Purpose. <br />
              <span className="text-[#A65D32] relative inline-block">
                Driven by Packaging.
                {/* Decorative restrained curved terracotta underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#A65D32]/70"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 2 8 C 80 2, 220 2, 298 8"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Description: Warm Charcoal */}
            <p
              className={`text-base sm:text-lg text-[#62574D] font-normal leading-relaxed max-w-xl mb-8 transition-all duration-700 delay-300 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Discover the company, values and manufacturing approach behind our corrugated
              packaging solutions.
            </p>

            {/* Key Value Anchors */}
            <div
              className={`flex flex-wrap items-center gap-y-3 text-xs sm:text-sm text-[#62574D] font-medium border-t border-[#E4DED3] pt-5 w-full transition-all duration-700 delay-400 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
                <span className="text-[#202A2E] font-semibold">Engineered Protection</span>
              </div>
              <span className="mx-3 text-[#D1B48C]">•</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#78846A]" />
                <span className="text-[#202A2E] font-semibold">100% Recyclable Board</span>
              </div>
              <span className="mx-3 text-[#D1B48C]">•</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#493629]" />
                <span className="text-[#202A2E] font-semibold">Indian Manufacturing</span>
              </div>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: Photorealistic Packaging Visual with Subtle Zoom on Scroll
          ========================================================================= */}
          <div
            className={`lg:col-span-6 relative transition-all duration-1000 delay-200 ease-out ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            {/* Ambient Terracotta Backdrop Aura */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#A65D32]/10 via-transparent to-[#E8D5B8]/30 rounded-3xl blur-xl pointer-events-none" />

            {/* Main Image Stage Container */}
            <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#D1B48C] hover:border-[#A65D32] shadow-2xl transition-all duration-500 bg-[#FAF7F2] group">
              
              {/* Aspect Ratio 16:9 Image Box */}
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src="/about/hero/about-us-hero.png"
                  alt="Aavrit Packaging realistic kraft corrugated cardboard boxes arranged professionally"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{
                    transform: `scale(${1 + Math.min(scrollY * 0.0004, 0.06)})`,
                    transition: "transform 0.15s ease-out",
                  }}
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Subtle soft gradient overlay along bottom to blend packaging stage */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#493629]/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Quality Assurance Micro Badge on Bottom-Left */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E4DED3] shadow-md">
                <div className="w-6 h-6 rounded-md bg-[#A65D32]/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#A65D32]" />
                </div>
                <span className="text-[11px] sm:text-xs font-semibold text-[#202A2E]">
                  Industrial Quality Kraft Packaging
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
