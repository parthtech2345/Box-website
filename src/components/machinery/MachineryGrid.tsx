"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MACHINERY_DATA, MachineItem } from "@/data/machineryData";
import { MachineryGridHeaderData } from "@/lib/machineryData";
import Card3DTilt from "@/components/ui/Card3DTilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface MachineryGridProps {
  machines?: MachineItem[];
  headerData?: MachineryGridHeaderData | null;
}

export default function MachineryGrid({ machines, headerData }: MachineryGridProps = {}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const items = machines && machines.length > 0 ? machines : MACHINERY_DATA;
  const badge = headerData?.badge || "CORE PLANT INFRASTRUCTURE";
  const rawTitle = headerData?.title || "Our Machinery &";
  const highlightText = headerData?.highlightText || "Equipment";
  const subtitle =
    headerData?.subtitle ||
    "Explore the dedicated machinery operating in our manufacturing plant, engineered to produce high-end corrugated cartons with precision, speed, and durability.";

  // Prevent repetition if title already includes or ends with highlightText
  let displayTitle = rawTitle.trim();
  if (highlightText && displayTitle.toLowerCase().endsWith(highlightText.toLowerCase())) {
    displayTitle = displayTitle.slice(0, -highlightText.length).trim();
  }

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
          { opacity: 0, y: 35 },
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
      id="machinery-collection"
      ref={sectionRef}
      className="w-full bg-[#FAF7F2] py-14 sm:py-14 lg:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header 2-Column Split */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-12 border-b border-[#E4DED3]"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                {badge}
              </span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#202A2E] leading-tight tracking-tight">
              {displayTitle}{" "}
              {highlightText && <span className="text-[#A65D32]">{highlightText}</span>}
            </h2>
          </div>

          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Exactly 6 Machinery Cards (3 cols desktop, 2 cols tablet, 1 col mobile) */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          {items.map((machine) => (
            <Card3DTilt key={machine.id} className="h-full rounded-2xl">
              <Link
                href={`/machinery/${machine.slug}`}
                className="group flex flex-col h-full bg-white rounded-2xl border border-[#E4DED3] overflow-hidden shadow-xs hover:border-[#A65D32] hover:shadow-xl transition-all duration-300 cursor-pointer block"
              >
                {/* Machine Image (Clean, No Text Overlay) */}
                <div className="relative w-full aspect-[16/10] bg-[#FAF7F2] overflow-hidden">
                  <Image
                    src={machine.image}
                    alt={`${machine.name} - AAVRIT PACKAGING`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Card Body: Machine Headline & Explore Button Only */}
                <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-white">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#202A2E] group-hover:text-[#A65D32] transition-colors leading-snug">
                    {machine.name}
                  </h3>

                  <div className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FAF7F2] group-hover:bg-[#493629] text-[#A65D32] group-hover:text-white transition-all duration-200 border border-[#E8D5B8] group-hover:border-[#493629]">
                    <span className="text-xs font-bold">Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </Card3DTilt>
          ))}
        </div>
      </div>
    </section>
  );
}
