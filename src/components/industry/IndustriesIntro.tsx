"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ShieldCheck, Truck, Sparkles, Layers } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface IndustriesIntroProps {
  data?: {
    badge?: string;
    title?: string;
    description1?: string;
    description2?: string;
    image?: string;
    bullets?: string[];
  };
}

export default function IndustriesIntro({ data }: IndustriesIntroProps = {}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  const badge = data?.badge || "SECTOR SPECIALIZATION";
  const title = data?.title || "Engineered Packaging for Demanding Supply Chains";
  const description1 =
    data?.description1 ||
    "From high-speed automated bottling lines to heavy-duty automotive engine transport, standard off-the-shelf corrugated boxes fail under specialized industrial stresses.";
  const description2 =
    data?.description2 ||
    "At Aavrit Packaging, we formulate bespoke corrugated compositions, calibrated flute geometries, and sector-compliant surface barrier liners engineered around your product's exact weight, transit duration, and storage climate.";
  const image = data?.image || "/home/industries/automotive.jpg";
  const bullets =
    data?.bullets && data.bullets.length > 0
      ? data.bullets
      : [
          "Calibrated Edge Crush (ECT) & Bursting Test endurance",
          "Automated CNC internal grid partitions & shock pads",
          "Food-grade, ESD anti-static & VCI corrosion protection",
          "Pallet-optimized footprints lowering shipping freight costs",
        ];

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Technical Narrative & Key Points */}
          <div ref={leftRef} className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                  {badge}
                </span>
              </div>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.15] tracking-tight">
                {title}
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              <p>{description1}</p>
              <p>{description2}</p>
            </div>

            {/* 4 Technical Highlights Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF7F2] border border-[#E4DED3]"
                >
                  <ShieldCheck className="w-4 h-4 text-[#A65D32] shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-[#202A2E] leading-snug">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Image with Clean Border */}
          <div ref={rightRef} className="lg:col-span-5">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#E4DED3] shadow-md bg-[#FAF7F2]">
              <Image
                src={image}
                alt="Industrial Corrugated Packaging Manufacturing - AAVRIT PACKAGING"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
