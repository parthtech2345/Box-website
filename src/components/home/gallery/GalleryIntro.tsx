"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GalleryIntro() {
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !headerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full bg-[#FFFFFF] pt-12 sm:pt-14 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header 2-Column Split Matching Website Standard */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E4DED3]"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                OUR VISUAL SHOWCASE
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              A Closer Look at <br className="hidden sm:inline" />
              <span className="text-[#A65D32]">AAVRIT PACKAGING</span>
            </h2>
          </div>

          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              Explore our collection of packaging products, manufacturing environments, machinery, and industry-specific solutions. Every image reflects an important part of our packaging and manufacturing journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
