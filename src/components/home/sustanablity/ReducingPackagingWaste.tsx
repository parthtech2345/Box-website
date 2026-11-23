"use client";

import React, { useRef, useEffect } from "react";
import { Check, Compass, Ruler, Shield, Sparkles, TrendingDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ReducingPackagingWaste() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current || !cardsRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = cardsRef.current?.querySelectorAll(".waste-card");
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const methods = [
    {
      num: "01",
      title: "Right-Sized Boxes",
      summary: "Select dimensions that suit the product instead of using unnecessarily oversized packaging.",
      impact: "Eliminates dead volume, lowers transport emissions, and removes the need for plastic filler cushioning.",
      icon: Ruler,
    },
    {
      num: "02",
      title: "Appropriate Board Construction",
      summary: "Select suitable ply and flute combinations according to the required protection.",
      impact: "Avoids heavy over-calipering by matching paper weight and flute profiles precisely to stacking loads.",
      icon: Shield,
    },
    {
      num: "03",
      title: "Efficient Material Planning",
      summary: "Plan box layouts and material usage carefully to help minimize avoidable production waste.",
      impact: "Precision die-cutting nesting and CAD slot planning maximize sheet yield from master paper reels.",
      icon: Compass,
    },
    {
      num: "04",
      title: "Responsible Waste Handling",
      summary: "Separate paper and cardboard waste for appropriate collection and recovery wherever facilities are available.",
      impact: "Clean corrugated off-cuts are compressed into dense bales and returned to pulp mills for continuous re-pulping.",
      icon: TrendingDown,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 lg:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header 2-Column Split */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-10 border-b border-[#E4DED3]">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                PRACTICAL WASTE MINIMIZATION
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              Small Packaging Decisions. <br className="hidden sm:inline" />
              <span className="text-[#A65D32]">Meaningful Impact.</span>
            </h2>
          </div>

          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              Sustainable packaging does not require complex compromises. Making deliberate decisions during box dimensioning, board engineering, and trim handling generates noticeable efficiencies.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {methods.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="waste-card group bg-[#FAF7F2] rounded-2xl border border-[#E4DED3] hover:border-[#78846A]/60 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-md"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-white border border-[#E4DED3] text-[#78846A] flex items-center justify-center font-heading font-bold text-sm shadow-2xs group-hover:bg-[#78846A] group-hover:text-white transition-colors">
                      {item.num}
                    </span>
                    <Icon className="w-5 h-5 text-[#D1B48C] group-hover:text-[#78846A] transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg text-[#202A2E] mb-2 group-hover:text-[#A65D32] transition-colors">
                    {item.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed mb-4">
                    {item.summary}
                  </p>
                </div>

                {/* Practical Impact Box */}
                <div className="p-3 rounded-xl bg-white border border-[#E4DED3] text-xs text-[#62574D]">
                  <span className="font-semibold text-[#78846A] block mb-1">
                    Direct Impact:
                  </span>
                  <p className="leading-relaxed text-[11px] text-[#62574D]">
                    {item.impact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
