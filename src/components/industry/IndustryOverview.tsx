"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { CheckCircle2, AlertCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  industryName: string;
  image: string;
  overviewParagraphs: string[];
  challenges: string[];
  benefits: string[];
}

export default function IndustryOverview({
  industryName,
  image,
  overviewParagraphs,
  challenges,
  benefits,
}: Props) {
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
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* LEFT SIDE: Description & Challenges/Benefits (Stacked first on mobile) */}
          <div ref={leftRef} className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                INDUSTRY OVERVIEW
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#202A2E] leading-tight">
              {industryName}
            </h2>

            {/* Detailed Overview Paragraphs */}
            <div className="space-y-4 text-base text-[#62574D] font-normal leading-relaxed">
              {overviewParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Packaging Challenges & Corrugated Benefits Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E4DED3]">
              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8D5B8]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A65D32] mb-2.5">
                  <AlertCircle className="w-4 h-4 text-[#A65D32]" />
                  <span>Key Transit Challenges</span>
                </div>
                <ul className="space-y-2 text-xs text-[#62574D]">
                  {challenges.map((ch, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#A65D32] font-bold">•</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8D5B8]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#493629] mb-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A65D32]" />
                  <span>How Our Packaging Helps</span>
                </div>
                <ul className="space-y-2 text-xs text-[#62574D]">
                  {benefits.map((bn, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#A65D32] font-bold">•</span>
                      <span>{bn}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Large Realistic Industry Image (Stacked second on mobile) */}
          <div ref={rightRef} className="lg:col-span-5 sticky top-24">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#E8D5B8] shadow-xl bg-[#FAF7F2]">
              <Image
                src={image}
                alt={`${industryName} overview image - AAVRIT PACKAGING`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-[#E8D5B8] shadow-md flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#493629] block">
                    Tailored Sector Application
                  </span>
                  <span className="text-[11px] text-[#8C7E72]">
                    Engineered for rigorous real-world transit
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-[#A65D32] bg-[#A65D32]/10 px-2 py-0.5 rounded">
                  Active Spec
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
