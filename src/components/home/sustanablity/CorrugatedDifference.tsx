"use client";

import React, { useRef, useEffect } from "react";
import { Recycle, Repeat, Maximize2, ShieldCheck, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CorrugatedDifference() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current || !cardsRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll(".diff-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
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

  const cards = [
    {
      code: "A",
      title: "Recyclable Paper-Based Material",
      description:
        "Corrugated packaging is primarily made from paper-based materials and can enter established paper recycling systems when collected and processed appropriately.",
      icon: Recycle,
      tag: "Circular Recovery",
      color: "#78846A",
      bgLight: "#FAF7F2",
    },
    {
      code: "B",
      title: "Reusable Packaging",
      description:
        "Suitable corrugated boxes can be reused for storage, handling, or transportation, depending on their condition and intended use.",
      icon: Repeat,
      tag: "Extended Utility",
      color: "#A65D32",
      bgLight: "#FAF7F2",
    },
    {
      code: "C",
      title: "Right-Sized Packaging",
      description:
        "Choosing suitable box dimensions can help avoid unnecessary packaging material and improve packaging efficiency across shipping and warehousing.",
      icon: Maximize2,
      tag: "Material Efficiency",
      color: "#E97835",
      bgLight: "#FAF7F2",
    },
    {
      code: "D",
      title: "Practical Product Protection",
      description:
        "Appropriately designed corrugated packaging helps protect products during storage and transportation, reducing the risk of damage and product loss.",
      icon: ShieldCheck,
      tag: "Damage Prevention",
      color: "#202A2E",
      bgLight: "#FAF7F2",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAF7F2] py-14 sm:py-16 lg:py-20 border-b border-[#E4DED3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header 2-Column Split */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-10 border-b border-[#E4DED3]">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                STRUCTURAL & RESOURCE ADVANTAGES
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              Why Corrugated Packaging <br className="hidden sm:inline" />
              <span className="text-[#A65D32]">Makes a Difference</span>
            </h2>
          </div>

          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              Corrugated board provides a balance of cushioning strength, structural stiffness, and material efficiency without relying on complex composite plastics.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="diff-card group relative bg-white rounded-2xl p-6 sm:p-7 border border-[#E4DED3] hover:border-[#78846A]/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header: Code badge & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E4DED3] text-[#78846A] flex items-center justify-center group-hover:bg-[#78846A] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#78846A] bg-[#78846A]/10 px-2.5 py-1 rounded-full border border-[#78846A]/20">
                      {card.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-lg text-[#202A2E] leading-snug mb-2.5 group-hover:text-[#78846A] transition-colors duration-200">
                    <span className="text-[#A65D32] mr-1.5 font-semibold">
                      {card.code}.
                    </span>
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom subtle indicator line */}
                <div className="mt-6 pt-4 border-t border-[#F0ECE1] flex items-center justify-between text-xs text-[#8C989E]">
                  <span className="font-medium">Responsible Principle</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D1B48C] group-hover:bg-[#78846A] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
