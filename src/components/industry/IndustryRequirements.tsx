"use client";

import React, { useRef, useEffect } from "react";
import { CheckCircle2, ShieldAlert } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Requirement {
  title: string;
  description: string;
}

interface Props {
  industryName: string;
  requirements: Requirement[];
}

export default function IndustryRequirements({ industryName, requirements }: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 30 },
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

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
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
      className="w-full bg-[#FAF7F2] py-14 sm:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header 2-Column Split */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-12 border-b border-[#E4DED3]"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                TECHNICAL SPECIFICATIONS
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              Packaging Requirements for <br className="hidden sm:inline" />
              <span className="text-[#A65D32]">{industryName}</span>
            </h2>
          </div>

          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              Every sector demands specific burst ratings, paper grammage, and moisture resistance to preserve product integrity.
            </p>
          </div>
        </div>

        {/* Requirements Grid (3-4 cards) */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {requirements.map((req, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-[#E8D5B8] hover:border-[#A65D32] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8D5B8] flex items-center justify-center text-[#A65D32] group-hover:bg-[#A65D32] group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#A65D32] group-hover:text-white" />
                  </div>
                  <span className="text-xl font-mono font-bold text-[#A65D32]/30 group-hover:text-[#A65D32] transition-colors">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base sm:text-lg text-[#202A2E] group-hover:text-[#A65D32] transition-colors mb-2.5">
                  {req.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                  {req.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E4DED3]/60 flex items-center justify-between text-xs font-semibold text-[#8C7E72]">
                <span>Standard Benchmark</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
