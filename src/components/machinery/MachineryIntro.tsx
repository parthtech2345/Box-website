"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Cpu, ShieldCheck, Layers, Gauge } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MachineryIntro() {
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

  const features = [
    {
      icon: Cpu,
      title: "Coordinated Line Equipment",
      desc: "Each machine is synchronized to maintain smooth sheet handling from raw paper to final jointing.",
    },
    {
      icon: Layers,
      title: "Multi-Ply Engineering",
      desc: "Engineered tooling supports 3-ply, 5-ply, and 7-ply constructions across various flute profiles.",
    },
    {
      icon: Gauge,
      title: "Dimensional Repeatability",
      desc: "Precision scoring and slotting tolerances allow rapid, reliable erecting on client packaging lines.",
    },
    {
      icon: ShieldCheck,
      title: "In-Process Quality Checks",
      desc: "Continuous operator monitoring at every machine station ensures structural compliance and clean finishing.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 lg:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Context & Overview */}
          <div ref={leftRef} className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                MANUFACTURING EXCELLENCE
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.15] tracking-tight">
              Technology Behind <br />
              <span className="text-[#A65D32]">Every Box</span>
            </h2>

            <p className="text-base sm:text-lg text-[#62574D] font-normal leading-relaxed">
              Our manufacturing process combines machinery, skilled operations,
              and quality-focused production methods to create corrugated
              packaging solutions for different industries.
            </p>

            <p className="text-sm sm:text-base text-[#62574D] leading-relaxed">
              From heavy-duty industrial shipping containers to precision-folded
              e-commerce mailers, our facility integrates specialized machinery
              for corrugating, sheet pasting, high-definition flexo printing,
              rotary die-cutting, slitting, and automated joint assembly.
            </p>

            {/* 4 Feature Cards with Interactive Hover Effect */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={i}
                    className="group/card p-4 rounded-xl bg-[#FAF7F2] hover:bg-white border border-[#E8D5B8]/80 hover:border-[#A65D32] hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex items-start gap-3.5 cursor-default"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#202A2E] group-hover/card:bg-[#E97835] text-white flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300 shadow-xs">
                      <Icon className="w-4 h-4 text-[#D1B48C] group-hover/card:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm text-[#202A2E] group-hover/card:text-[#A65D32] transition-colors mb-1">
                        {f.title}
                      </h3>
                      <p className="text-xs text-[#62574D] leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Industrial Factory Visual + Balanced Operational Status Card */}
          <div ref={rightRef} className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E4DED3] shadow-md aspect-[4/3] bg-[#FAF7F2] group">
              <Image
                src="/Machinery/intro-machinery.png"
                alt="AAVRIT PACKAGING Modern Manufacturing Facility"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Below-Image Balanced Capability Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#E8D5B8] shadow-xs space-y-3.5">
              <div className="flex items-center justify-between border-b border-[#E4DED3]/80 pb-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#78846A] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#78846A]" />
                  </span>
                  <span className="text-xs font-bold text-[#202A2E] uppercase tracking-wider">
                    Manufacturing Operations
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#A65D32] bg-[#A65D32]/10 px-2.5 py-0.5 rounded-full">
                  Fully Integrated Facility
                </span>
              </div>

              {/* 3 Quick Capability Badges */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-xl bg-white border border-[#E4DED3] shadow-2xs">
                  <span className="font-heading font-bold text-xs sm:text-sm text-[#202A2E] block">
                    3 / 5 / 7 Ply
                  </span>
                  <span className="text-[10px] text-[#8C7E72] block mt-0.5">
                    Board Profiles
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-[#E4DED3] shadow-2xs">
                  <span className="font-heading font-bold text-xs sm:text-sm text-[#202A2E] block">
                    B, C, E Flute
                  </span>
                  <span className="text-[10px] text-[#8C7E72] block mt-0.5">
                    Fluting Types
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-white border border-[#E4DED3] shadow-2xs">
                  <span className="font-heading font-bold text-xs sm:text-sm text-[#202A2E] block">
                    100% Eco
                  </span>
                  <span className="text-[10px] text-[#8C7E72] block mt-0.5">
                    Starch Bonding
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-[#62574D] leading-relaxed pt-1">
                Continuous material handling and in-line converting ensure uniform flute integrity and structural durability across all packaging orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
