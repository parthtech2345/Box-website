"use client";

import React, { useRef, useEffect } from "react";
import { MachineRolePoint } from "@/data/machineryData";
import { CheckCircle2, Factory } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface MachineryRoleProps {
  rolePoints: MachineRolePoint[];
  machineName: string;
}

export default function MachineryRole({
  rolePoints,
  machineName,
}: MachineryRoleProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

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

      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 lg:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
              PACKAGING CONTRIBUTION
            </span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#202A2E] leading-tight mb-3">
            Role in Corrugated <span className="text-[#A65D32]">Box Manufacturing</span>
          </h2>

          <p className="text-sm sm:text-base text-[#62574D] leading-relaxed font-normal">
            Understand how the {machineName} contributes to overall box quality, structural endurance, and customer packaging specifications.
          </p>
        </div>

        {/* 3-4 Relevant Benefit Blocks */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {rolePoints.map((point, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E4DED3] hover:border-[#D1B48C] hover:shadow-md transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#202A2E] text-white flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-[#E97835]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#202A2E] mb-2 leading-snug">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
