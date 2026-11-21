"use client";

import React, { useRef, useEffect } from "react";
import {
  Ruler,
  ShieldCheck,
  Maximize2,
  Printer,
  Truck,
  Layers,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const REASONS = [
  {
    icon: <Ruler className="w-5 h-5 text-[#A65D32]" />,
    title: "Customized Packaging Solutions",
    description: "Every box is designed around the exact physical dimensions, fragility, and stacking parameters of your product.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#A65D32]" />,
    title: "Reliable Product Protection",
    description: "Multi-ply board architectures engineered to withstand drop impacts, transit vibrations, and warehouse compression.",
  },
  {
    icon: <Maximize2 className="w-5 h-5 text-[#A65D32]" />,
    title: "Flexible Box Sizes & Specs",
    description: "From lightweight single-wall 3-ply mailers to heavy-duty 7-ply export bulk containers without tooling limits.",
  },
  {
    icon: <Printer className="w-5 h-5 text-[#A65D32]" />,
    title: "Printing & Branding Options",
    description: "High-definition 1 to 4 colour flexographic printing for company branding, handling warnings, and scan-ready barcodes.",
  },
  {
    icon: <Truck className="w-5 h-5 text-[#A65D32]" />,
    title: "Transport-Optimized Formats",
    description: "Dimensions calculated to tile seamlessly inside trucks and ocean shipping containers, cutting freight costs.",
  },
  {
    icon: <Layers className="w-5 h-5 text-[#A65D32]" />,
    title: "Industry-Specific Engineering",
    description: "Food-safe adhesives, anti-static ESD coatings, moisture barriers, and custom partitions tailored to sector needs.",
  },
];

export default function WhyIndustriesChooseUs() {
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
            stagger: 0.08,
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
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 border-b border-[#E4DED3] overflow-hidden"
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
                CAPABILITIES OVERVIEW
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              Why Industries Choose <br className="hidden sm:inline" />
              <span className="text-[#A65D32]">Our Packaging</span>
            </h2>
          </div>

          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              We combine automated corrugation lines, precision sample dielines, and quality raw kraft material to deliver consistent batch performance.
            </p>
          </div>
        </div>

        {/* 6 Capabilities Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {REASONS.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8D5B8] hover:border-[#A65D32] hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-white border border-[#E8D5B8] flex items-center justify-center mb-4 text-[#A65D32] group-hover:bg-[#A65D32] group-hover:text-white transition-all duration-200">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#202A2E] group-hover:text-[#A65D32] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-[#E4DED3]/60 flex items-center justify-between text-xs font-semibold text-[#8C7E72]">
                <span>Pillar 0{i + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
