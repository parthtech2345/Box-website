"use client";

import React, { useRef, useEffect } from "react";
import { MachineStep } from "@/data/machineryData";
import { Cog } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface MachineryHowItWorksProps {
  steps: MachineStep[];
  machineName: string;
}

export default function MachineryHowItWorks({
  steps,
  machineName,
}: MachineryHowItWorksProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const stepsRef = useRef<HTMLDivElement | null>(null);

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

      if (stepsRef.current) {
        gsap.fromTo(
          stepsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stepsRef.current,
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
      className="w-full bg-[#FAF7F2] py-14 sm:py-14 lg:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
              OPERATIONAL WORKFLOW
            </span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-tight tracking-tight mb-4">
            How This Machine Works in <br className="hidden sm:inline" />
            <span className="text-[#A65D32]">Our Manufacturing Process</span>
          </h2>

          <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
            Follow the sequential checkpoints detailing how the {machineName} processes material, performs its converting function, and prepares board for subsequent production stages.
          </p>
        </div>

        {/* 5-6 Clear Checkpoints Grid */}
        <div
          ref={stepsRef}
          className={`grid grid-cols-1 md:grid-cols-2 ${steps.length === 6 ? "lg:grid-cols-3" : "lg:grid-cols-3"
            } gap-6`}
        >
          {steps.map((stg, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-white border border-[#E4DED3] hover:border-[#A65D32] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#202A2E] text-white flex items-center justify-center font-heading font-bold text-sm group-hover:bg-[#E97835] transition-colors">
                    {stg.step}
                  </div>
                  <Cog className="w-4 h-4 text-[#A65D32]/40 group-hover:text-[#A65D32] group-hover:rotate-45 transition-all duration-300" />
                </div>

                {/* Heading */}
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#202A2E] mb-2 leading-snug group-hover:text-[#A65D32] transition-colors">
                  {stg.title}
                </h3>

                {/* Explanation */}
                <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                  {stg.description}
                </p>
              </div>

              {/* Progress Notch */}
              <div className="mt-5 pt-3 border-t border-[#FAF7F2] flex items-center justify-between text-[11px] text-[#8C7E72] font-semibold">
                <span>Checkpoint {stg.step} of {steps.length < 10 ? `0${steps.length}` : steps.length}</span>
                <span className="text-[#78846A]">✓ Verified Workflow</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
