"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Layers, Scissors, Recycle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SustainabilityIntroData, DEFAULT_SUSTAINABILITY_DATA } from "@/data/sustainabilityData";

const ICON_MAP: Record<string, React.ElementType> = {
  Layers,
  Scissors,
  Recycle,
};

interface SustainabilityIntroProps {
  data?: SustainabilityIntroData | null;
}

export default function SustainabilityIntro({ data }: SustainabilityIntroProps = {}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const rightColRef = useRef<HTMLDivElement | null>(null);

  const fallback = DEFAULT_SUSTAINABILITY_DATA.intro!;
  const badge = data?.badge || fallback.badge;
  const title = data?.title || fallback.title;
  const highlightText = data?.highlightText || fallback.highlightText;
  const paragraphs = (data?.paragraphs && data.paragraphs.length > 0 ? data.paragraphs : fallback.paragraphs) || [];
  const image = data?.image || fallback.image || "/Sustanablity/intro-sustainable-packaging.png";
  const imageAlt = data?.imageAlt || fallback.imageAlt || "Natural kraft corrugated cardboard packaging arrangement";
  const highlights = (data?.highlights && data.highlights.length > 0 ? data.highlights : fallback.highlights) || [];

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

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 lg:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Narrative & 3 Highlights */}
          <div ref={leftColRef} className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                  {badge}
                </span>
              </div>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.15] tracking-tight">
                {title} <br />
                {highlightText && <span className="text-[#A65D32]">{highlightText}</span>}
              </h2>
            </div>

            <div className="space-y-3.5 text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Three Small Highlight Points */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {highlights.map((item, idx) => {
                const Icon = (item.icon && ICON_MAP[item.icon]) ? ICON_MAP[item.icon] : Layers;
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
                src={image}
                alt={imageAlt}
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
