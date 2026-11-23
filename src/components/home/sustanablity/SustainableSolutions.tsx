"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Box, Layers, FileText, RefreshCw } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SustainableSolutions() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current || !gridRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".solution-card");
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

  const solutions = [
    {
      title: "Custom-Sized Packaging",
      badge: "Dimension Optimization",
      description:
        "Packaging dimensions engineered specifically according to the product's size and protection requirements, preventing oversized shipping and extra cushioning.",
      image: "/Sustanablity/box-display.png",
      alt: "Custom-sized corrugated box packaging assortment",
      icon: Box,
      benefit: "Reduces void space & shipping freight",
      link: "/custom-packaging",
    },
    {
      title: "Suitable Ply Selection",
      badge: "Structural Caliper",
      description:
        "Choosing an appropriate 3 Ply, 5 Ply, or 7 Ply construction based on product weight, stacking, and transportation needs, avoiding material over-specification.",
      image: "/Sustanablity/ply-5ply.png",
      alt: "Corrugated flute board layers 3-ply and 5-ply construction",
      icon: Layers,
      benefit: "Tailors paper caliper to load",
      link: "/products",
    },
    {
      title: "Paper-Based Packaging",
      badge: "Mono-Material Format",
      description:
        "Using suitable kraft and other paper-based board options according to the required application, simplifying waste streams compared to non-recyclable multi-material composites.",
      image: "/Sustanablity/journey-sustainable.png",
      alt: "Kraft paperboard materials and corrugated boxes",
      icon: FileText,
      benefit: "Compatible with paper recycling",
      link: "/products",
    },
    {
      title: "Reusable Packaging Options",
      badge: "Extended Lifecycle",
      description:
        "Where suitable, boxes can be designed with heavy-duty construction for multiple handling, internal transit, or storage uses, depending on their condition.",
      image: "/Sustanablity/sustainable-plant.png",
      alt: "Durable corrugated storage containers and warehouse packing",
      icon: RefreshCw,
      benefit: "Multi-cycle operational utility",
      link: "/industries",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAF7F2] py-14 sm:py-16 lg:py-20 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header 2-Column Split */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-10 border-b border-[#E4DED3]">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                RESPONSIBLE PACKAGING OPTIONS
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              Smarter Packaging Choices <br className="hidden sm:inline" />
              <span className="text-[#A65D32]">for Different Needs</span>
            </h2>
          </div>

          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              Every product has distinct structural demands. By tailoring dimensions, ply grades, and paperboards, packaging provides dependable protection with responsible material usage.
            </p>
          </div>
        </div>

        {/* 4 Solutions Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="solution-card group bg-white rounded-2xl border border-[#E4DED3] hover:border-[#78846A]/60 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badge */}
                  <div className="relative w-full aspect-[16/11] overflow-hidden bg-[#FAF7F2]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-[#78846A]" />
                      <h3 className="font-heading font-bold text-base text-[#202A2E] group-hover:text-[#A65D32] transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Key Benefit Pill */}
                    <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#E4DED3] text-[11px] font-medium text-[#62574D]">
                      <span className="text-[#78846A] font-bold block mb-0.5">
                        Key Value:
                      </span>
                      {item.benefit}
                    </div>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="p-4 sm:p-5 pt-0">
                  <Link
                    href={item.link}
                    className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-[#78846A] hover:text-[#A65D32] pt-3 border-t border-[#F0ECE1] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
