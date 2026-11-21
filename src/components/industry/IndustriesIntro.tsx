"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ShieldCheck, Truck, Sparkles, Layers } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function IndustriesIntro() {
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading & Detailed Context */}
          <div ref={leftRef} className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                VERSATILE PACKAGING CAPABILITIES
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.15] tracking-tight">
              Packaging Solutions <br />
              <span className="text-[#A65D32]">Across Industries</span>
            </h2>

            <p className="text-base sm:text-lg text-[#62574D] font-normal leading-relaxed">
              Different industries have different packaging requirements. From protecting delicate products to transporting heavy industrial components, we provide corrugated packaging solutions designed around the specific needs of each industry.
            </p>

            <p className="text-sm sm:text-base text-[#62574D] leading-relaxed">
              Our engineering team analyzes each sector&apos;s distribution challenges—including transit vibration, drop impacts, stacking load, and warehouse humidity—to specify optimal fluting, GSM ratings, and internal cushioning.
            </p>

            {/* Quick Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8D5B8]">
                <ShieldCheck className="w-5 h-5 text-[#A65D32] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#202A2E]">Engineered Protection</h4>
                  <p className="text-xs text-[#8C7E72] mt-0.5">Custom ply ratings (3/5/7-ply) tailored to load stress.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8D5B8]">
                <Truck className="w-5 h-5 text-[#A65D32] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#202A2E]">Transit & Export Ready</h4>
                  <p className="text-xs text-[#8C7E72] mt-0.5">Wood-free, lightweight boxes fit for international freight.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composite Grid */}
          <div ref={rightRef} className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#E8D5B8] shadow-xl aspect-[4/3] bg-[#FAF7F2]">
              <Image
                src="/home/product-categories/industrial-packaging.png"
                alt="Industrial packaging visual - AAVRIT PACKAGING"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-[#E8D5B8] shadow-md flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#493629] block">
                    Certified Packaging Quality
                  </span>
                  <span className="text-[11px] text-[#8C7E72]">
                    Burst factor & edge crush certified testing
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-[#A65D32] bg-[#A65D32]/10 px-2.5 py-1 rounded-md">
                  6 Core Sectors
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
