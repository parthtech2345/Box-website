"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES_DATA } from "@/data/industriesData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface IndustriesCategoriesProps {
  industries?: any[];
}

export default function IndustriesCategories({ industries }: IndustriesCategoriesProps = {}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const list = industries && industries.length > 0 ? industries : INDUSTRIES_DATA;

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
  }, [list]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAF7F2] py-14 sm:py-14 border-b border-[#E4DED3] overflow-hidden"
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
                CORE INDUSTRY SECTORS
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              Select Your Industry <br className="hidden sm:inline" />
              <span className="text-[#A65D32]">Packaging Solution</span>
            </h2>
          </div>

          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              Explore custom-tailored corrugated board fluting, dielines, and load endurance engineered specifically for each industry.
            </p>
          </div>
        </div>

        {/* 6 Industry Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          {list.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group flex flex-col bg-white rounded-2xl border border-[#E4DED3] overflow-hidden shadow-xs hover:border-[#A65D32] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer block"
            >
              {/* Industry Image */}
              <div className="relative w-full aspect-[16/10] bg-[#FAF7F2] overflow-hidden">
                <Image
                  src={ind.image}
                  alt={`${ind.name} - AAVRIT PACKAGING`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-white">
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#202A2E] group-hover:text-[#A65D32] transition-colors leading-snug">
                  {ind.name}
                </h3>

                <div className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FAF7F2] group-hover:bg-[#493629] text-[#A65D32] group-hover:text-white transition-all duration-200 border border-[#E8D5B8] group-hover:border-[#493629]">
                  <span className="text-xs font-bold">Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
