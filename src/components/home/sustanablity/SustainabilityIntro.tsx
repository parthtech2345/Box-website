"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Layers, Scissors, Recycle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SustainabilityIntro() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const rightColRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }
      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const highlights = [
    {
      title: "Thoughtful Material Selection",
      description: "Selecting appropriate paper grades and renewable fiber weights matched to actual structural load requirements.",
      icon: Layers,
    },
    {
      title: "Responsible Packaging Design",
      description: "Optimizing box dimensions to fit goods securely, eliminating excess volume, void-fill, and shipping weight.",
      icon: Scissors,
    },
    {
      title: "Resource-Conscious Manufacturing",
      description: "Systematic segregation and recovery of paper trimmings to feed circular paper reprocessing streams.",
      icon: Recycle,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-14 sm:py-16 lg:py-20 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Narrative & 3 Highlights */}
          <div ref={leftColRef} className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                  RESPONSIBLE PACKAGING
                </span>
              </div>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.15] tracking-tight">
                Why Sustainability <br />
                <span className="text-[#A65D32]">Matters in Packaging</span>
              </h2>
            </div>

            <div className="space-y-3.5 text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              <p>
                Packaging plays an important role in protecting products during storage and transportation. However, the materials used, the way packaging is designed, and the manufacturing process also matter.
              </p>
              <p>
                Corrugated cardboard packaging offers a practical packaging option that can support material recovery and recycling systems when properly collected and processed. By focusing on smart dimensional planning and responsibly sourced paperboards, businesses can safeguard their goods while minimizing unnecessary material consumption.
              </p>
            </div>

            {/* Three Small Highlight Points */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E4DED3] hover:border-[#78846A]/50 hover:shadow-xs transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#78846A]/15 text-[#78846A] flex items-center justify-center mb-2.5 group-hover:bg-[#78846A] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-heading font-bold text-sm text-[#202A2E] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#62574D] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Editorial Photograph */}
          <div ref={rightColRef} className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/4] rounded-2xl overflow-hidden bg-[#FAF7F2] border-2 border-[#E4DED3] shadow-md group">
              <Image
                src="/Sustanablity/intro-sustainable-packaging.png"
                alt="Natural kraft corrugated cardboard packaging arrangement"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
