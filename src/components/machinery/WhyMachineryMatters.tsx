"use client";

import React, { useRef, useEffect } from "react";
import { Zap, ShieldCheck, Target, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WhyMachineryMatters() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const blocksRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
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
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (blocksRef.current) {
        gsap.fromTo(
          blocksRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: blocksRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const blocks = [
    {
      icon: Zap,
      title: "Efficient Production Processes",
      description:
        "Coordinated machinery setups and reliable equipment workflows help keep operations organized and delivery schedules on track.",
    },
    {
      icon: ShieldCheck,
      title: "Consistent Packaging Construction",
      description:
        "Uniform fluting, adhesive bonding, and board consolidation ensure predictable structural strength across every batch.",
    },
    {
      icon: Target,
      title: "Precision in Box Manufacturing",
      description:
        "Calibrated slotting, creasing, and die-cutting machinery produce accurate dimensions and clean fold lines for effortless box assembly.",
    },
    {
      icon: CheckCircle2,
      title: "Quality-Focused Operations",
      description:
        "Regular maintenance, blade sharpening, and machine calibration support consistent visual appeal and box integrity throughout production.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 lg:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className="max-w-2xl text-center mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
              OPERATIONAL ADVANTAGE
            </span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#202A2E] leading-tight mb-3">
            Supporting Consistent <span className="text-[#A65D32]">Manufacturing</span>
          </h2>
          <p className="text-sm sm:text-base text-[#62574D] leading-relaxed">
            Our machinery investments focus on dimensional repeatability, material integrity, and dependable corrugated box fabrication.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div
          ref={blocksRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {blocks.map((block, i) => {
            const Icon = block.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E4DED3] hover:border-[#D1B48C] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#202A2E] text-white flex items-center justify-center mb-4 group-hover:bg-[#E97835] transition-colors">
                    <Icon className="w-5 h-5 text-[#D1B48C] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#202A2E] mb-2 leading-snug">
                    {block.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                    {block.description}
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
