"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { CheckCircle2, Target, Wrench, ShieldCheck } from "lucide-react";
import { MachineItem } from "@/data/machineryData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface MachineryOverviewProps {
  machine: MachineItem;
}

export default function MachineryOverview({ machine }: MachineryOverviewProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (leftRef.current) {
        gsap.fromTo(
          leftRef.current,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: leftRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (rightRef.current) {
        gsap.fromTo(
          rightRef.current,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: rightRef.current,
              start: "top 85%",
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT SIDE – Machine Information (Desktop 7 cols, Mobile first) */}
          <div ref={leftRef} className="lg:col-span-7 space-y-6 order-1">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                {machine.category}
              </span>
            </div>

            {/* Machine Name */}
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.15] tracking-tight">
              {machine.name}
            </h2>

            {/* Detailed Description */}
            <p className="text-base sm:text-lg text-[#62574D] font-normal leading-relaxed">
              {machine.fullDescription}
            </p>

            {/* Main Purpose & Role Cards */}
            <div className="space-y-4 pt-2">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8D5B8] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#202A2E] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Target className="w-5 h-5 text-[#E97835]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-[#202A2E] mb-1">
                    Primary Operational Purpose
                  </h3>
                  <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                    {machine.purpose}
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8D5B8] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#202A2E] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Wrench className="w-5 h-5 text-[#D1B48C]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-[#202A2E] mb-1">
                    Role in Box Manufacturing
                  </h3>
                  <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                    {machine.roleSummary}
                  </p>
                </div>
              </div>
            </div>

            {/* Important Machine Highlights */}
            <div className="pt-4 border-t border-[#E4DED3]">
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-[#202A2E] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#A65D32]" />
                Key Equipment Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {machine.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#62574D]">
                    <CheckCircle2 className="w-4 h-4 text-[#A65D32] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – Machine Image (Desktop 5 cols, Mobile second) */}
          <div ref={rightRef} className="lg:col-span-5 order-2">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#E8D5B8] shadow-xl aspect-[4/3] bg-[#FAF7F2] group">
              <Image
                src={machine.image}
                alt={`${machine.name} - AAVRIT PACKAGING`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
