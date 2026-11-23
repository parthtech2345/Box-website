"use client";

import React, { useRef, useEffect } from "react";
import { MessageSquareText, Layers, Scissors, Truck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WhyContactUs() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current || !gridRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".why-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
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

  const reasons = [
    {
      title: "Packaging Requirement Discussion",
      description: "Consult directly with experienced manufacturing engineers to evaluate your product's weight, dimensions, and distribution stresses.",
      icon: MessageSquareText,
      tag: "Technical Consult",
    },
    {
      title: "Product and Material Guidance",
      description: "Get unbiased guidance on selecting suitable kraft paperboard GSM, flute profiles (A, B, C, E), and multi-ply construction.",
      icon: Layers,
      tag: "Material Selection",
    },
    {
      title: "Custom Packaging Inquiries",
      description: "Discuss bespoke box geometries, crash-lock auto bottoms, tamper-evident seals, and protective internal grid partitions.",
      icon: Scissors,
      tag: "CAD Sampling",
    },
    {
      title: "Bulk Order Discussions",
      description: "Access direct factory pricing, scheduled recurring batch dispatches, and warehouse inventory buffer management.",
      icon: Truck,
      tag: "Volume Supply",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAF7F2] py-14 sm:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header 2-Column Split */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-10 border-b border-[#E4DED3]">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                DIRECT COLLABORATION
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              Why Connect With <br className="hidden sm:inline" />
              <span className="text-[#A65D32]">AAVRIT PACKAGING</span>
            </h2>
          </div>

          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              We collaborate with businesses across industrial manufacturing, automotive, pharma, and retail to develop durable, cost-effective packaging.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="why-card group bg-white rounded-2xl border border-[#E4DED3] hover:border-[#A65D32] p-6 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF7F2] border border-[#E4DED3] text-[#A65D32] flex items-center justify-center group-hover:bg-[#A65D32] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A65D32] bg-[#A65D32]/10 px-2.5 py-1 rounded-full border border-[#A65D32]/20">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#202A2E] group-hover:text-[#A65D32] transition-colors leading-snug mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F0ECE1] flex items-center justify-between text-[11px] text-[#8C989E]">
                  <span className="font-semibold text-[#A65D32]">Specialized Guidance</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D1B48C] group-hover:bg-[#A65D32] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
