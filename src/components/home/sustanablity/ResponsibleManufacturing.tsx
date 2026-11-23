"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Layers, SlidersHorizontal, Recycle, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ResponsibleManufacturing() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stepsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current || !stepsRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const stepItems = stepsRef.current?.querySelectorAll(".stage-card");
      if (stepItems && stepItems.length > 0) {
        gsap.fromTo(
          stepItems,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
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

  const stages = [
    {
      step: "01",
      title: "Responsible Material Selection",
      description:
        "Selecting suitable paper grades and board materials according to specific packaging requirements, balancing structural performance with paper-based sustainability.",
      image: "/Sustanablity/material-selection.png",
      alt: "Selecting paper grades and kraft paper reels for corrugated board",
      icon: Layers,
    },
    {
      step: "02",
      title: "Efficient Material Usage",
      description:
        "Designing appropriate box dimensions and calculating precise board specifications to minimize unnecessary off-cut trim and optimize raw material yield.",
      image: "/Sustanablity/efficient-usage.png",
      alt: "Precision board cutting and corrugated flute cross-section",
      icon: SlidersHorizontal,
    },
    {
      step: "03",
      title: "Manufacturing Waste Management",
      description:
        "Collecting, separating, and managing paper and cardboard production waste for systematic recovery and paper mill recycling reprocessing.",
      image: "/Sustanablity/waste-management.png",
      alt: "Cardboard scrap collection and paper recovery process",
      icon: Recycle,
    },
    {
      step: "04",
      title: "Quality-Focused Production",
      description:
        "Enforcing strict box construction and quality checks to ensure packaging performs reliably according to its intended storage and shipping application.",
      image: "/Sustanablity/quality-production.png",
      alt: "Quality inspection and box durability checks",
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-14 sm:py-16 lg:py-20 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header 2-Column Split */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-10 border-b border-[#E4DED3]">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                PRACTICAL PRODUCTION METHODOLOGY
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              Building Responsibility <br className="hidden sm:inline" />
              <span className="text-[#A65D32]">Into Every Stage</span>
            </h2>
          </div>

          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              Responsible packaging manufacturing relies on disciplined workflows—from raw material planning to final inspection—ensuring materials are used effectively and scrap is captured for circular recovery.
            </p>
          </div>
        </div>

        {/* Process Timeline / Cards */}
        {/* Desktop: Horizontal Layout with Connecting Rail */}
        <div ref={stepsRef} className="relative">
          {/* Subtle horizontal connector on desktop */}
          <div className="hidden lg:block absolute top-[110px] left-[10%] right-[10%] h-0.5 bg-[#E4DED3] -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative z-10">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div
                  key={idx}
                  className="stage-card group bg-[#FAF7F2] rounded-2xl border border-[#E4DED3] hover:border-[#78846A]/60 p-5 sm:p-5.5 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div>
                    {/* Top Step Badge + Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-heading font-black text-2xl sm:text-3xl text-[#D1B48C] group-hover:text-[#78846A] transition-colors">
                        {stage.step}
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-white border border-[#E4DED3] text-[#78846A] flex items-center justify-center shadow-2xs group-hover:bg-[#78846A] group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Realistic Stage Image */}
                    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-white border border-[#E4DED3]">
                      <Image
                        src={stage.image}
                        alt={stage.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                      />
                    </div>

                    {/* Stage Heading */}
                    <h3 className="font-heading font-bold text-base text-[#202A2E] leading-snug mb-2 group-hover:text-[#A65D32] transition-colors">
                      {stage.title}
                    </h3>

                    {/* Stage Description */}
                    <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  {/* Stage Footer Indicator */}
                  <div className="mt-5 pt-3 border-t border-[#E8E2D7] flex items-center justify-between text-[11px] text-[#8C989E]">
                    <span className="font-semibold uppercase tracking-wider text-[#78846A]">
                      Step {stage.step}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#78846A]" />
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
