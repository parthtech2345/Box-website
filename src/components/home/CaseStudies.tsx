"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, ArrowUpRight } from "lucide-react";

interface PackagingApplication {
  id: string;
  projectNumber: string;
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
  highlights: string[];
}

const APPLICATIONS: PackagingApplication[] = [
  {
    id: "automotive",
    projectNumber: "PROJECT 01",
    category: "AUTOMOTIVE",
    title: "Packaging for Automotive Components",
    description:
      "Corrugated packaging applications for automotive components, spare parts, metal parts and industrial supplies.",
    image: "/home/case-studies/automotive-packaging.png",
    href: "/industries/automotive",
    highlights: ["Engine & Machined Parts", "Heavy-Duty 7-Ply Protection", "Custom Internal Partitions"],
  },
  {
    id: "food-beverage",
    projectNumber: "PROJECT 02",
    category: "FOOD & BEVERAGE",
    title: "Packaging for Food & FMCG Products",
    description:
      "Practical corrugated packaging applications for food products, bakery items, snacks and FMCG goods.",
    image: "/home/case-studies/food-beverage-packaging.png",
    href: "/industries/food-beverage",
    highlights: ["Bakery & Confectionery", "Food-Grade Sourcing", "Ventilated Air-Flow"],
  },
  {
    id: "ecommerce",
    projectNumber: "PROJECT 03",
    category: "E-COMMERCE",
    title: "Reliable Packaging for Every Shipment",
    description:
      "Corrugated shipping boxes, mailers and protective packaging applications for online orders and delivery operations.",
    image: "/home/case-studies/ecommerce-packaging.png",
    href: "/industries/ecommerce",
    highlights: ["Tamper-Evident Mailers", "Quick-Lock Assembly", "High Stacking Strength"],
  },
];

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featured = APPLICATIONS[0];
  const secondaryApps = APPLICATIONS.slice(1);

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 lg:py-14 border-b border-[#E4DED3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header: Matching 2-Column Split */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 mb-10 sm:mb-14 border-b border-[#E4DED3] transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          {/* Left Column */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/20 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                OUR WORK & APPLICATIONS
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              Packaging Solutions <br className="hidden sm:inline" />
              <span className="text-[#A65D32]">in Action</span>
            </h2>
          </div>

          {/* Right Column */}
          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              Discover how corrugated packaging solutions serve different industries and business requirements, combining practical design, dependable protection and manufacturing precision.
            </p>
          </div>
        </div>

        {/* ASYMMETRICAL EDITORIAL LAYOUT (1 Large Featured + 2 Supporting Showcases) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-12 sm:mb-16">

          {/* PRIMARY FEATURED SHOWCASE (Automotive) - 7 Columns */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-100 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <Link
              href={featured.href}
              className="group flex flex-col h-full bg-[#FAF7F2] rounded-2xl border border-[#E4DED3] overflow-hidden shadow-xs hover:border-[#A65D32] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              {/* Primary Image: Generous 16:10 Aspect Ratio */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#FAF7F2] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />

                {/* Floating Category Pill */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#202A2E]/90 text-white text-[11px] font-bold rounded-lg uppercase tracking-wider backdrop-blur-xs shadow-xs">
                    {featured.projectNumber}
                  </span>
                  <span className="px-3 py-1 bg-[#A65D32] text-white text-[11px] font-bold rounded-lg uppercase tracking-wider shadow-xs">
                    {featured.category}
                  </span>
                </div>
              </div>

              {/* Primary Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#202A2E] mb-3 group-hover:text-[#A65D32] transition-colors duration-200">
                    {featured.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#62574D] leading-relaxed mb-6 font-normal">
                    {featured.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-white border border-[#E4DED3] text-xs font-semibold text-[#493629]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Explore Link */}
                <div className="pt-4 border-t border-[#E4DED3] flex items-center justify-between text-sm font-semibold text-[#493629] group-hover:text-[#A65D32] transition-colors">
                  <span className="font-heading tracking-wide">Explore Application</span>
                  <div className="w-8 h-8 rounded-full bg-white border border-[#E4DED3] group-hover:bg-[#A65D32] group-hover:text-white group-hover:border-[#A65D32] flex items-center justify-center transition-all duration-200">
                    <ArrowUpRight className="w-4 h-4 text-[#A65D32] group-hover:text-white" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* TWO SECONDARY SHOWCASES (Food & Beverage + E-commerce) - 5 Columns */}
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
            {secondaryApps.map((app, idx) => {
              const delay = idx === 0 ? "delay-200" : "delay-300";
              return (
                <div
                  key={app.id}
                  className={`flex-1 transition-all duration-700 ${delay} ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                  <Link
                    href={app.href}
                    className="group flex flex-col sm:flex-row h-full bg-[#FAF7F2] rounded-2xl border border-[#E4DED3] overflow-hidden shadow-xs hover:border-[#A65D32] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  >
                    {/* Thumbnail Image */}
                    <div className="relative w-full sm:w-2/5 aspect-[16/10] sm:aspect-auto min-h-[160px] bg-[#FAF7F2] overflow-hidden shrink-0">
                      <Image
                        src={app.image}
                        alt={app.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2 py-0.5 bg-[#202A2E]/90 text-white text-[10px] font-bold rounded uppercase tracking-wider backdrop-blur-xs">
                          {app.category}
                        </span>
                      </div>
                    </div>

                    {/* Secondary Content */}
                    <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#A65D32] block mb-1">
                          {app.projectNumber}
                        </span>
                        <h4 className="font-heading font-bold text-lg sm:text-xl text-[#202A2E] mb-2 group-hover:text-[#A65D32] transition-colors leading-snug">
                          {app.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed line-clamp-2 mb-3">
                          {app.description}
                        </p>
                      </div>

                      {/* Explore Link */}
                      <div className="pt-3 border-t border-[#E4DED3]/70 flex items-center justify-between text-xs font-semibold text-[#493629] group-hover:text-[#A65D32] transition-colors">
                        <span>Explore Application</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#A65D32] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

        </div>

        {/* SECTION LEVEL CTA */}
        <div className="flex items-center justify-center pt-2">
          <Link
            href="/#industries"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#493629] text-white text-sm font-semibold tracking-wide shadow-sm hover:bg-[#A65D32] transition-all duration-200 group"
          >
            <span>Explore All Industries</span>
            <ArrowRight className="w-4 h-4 text-[#D1B48C] group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

      </div>
    </section>
  );
}
