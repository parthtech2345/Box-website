"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface IndustryCard {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  applications: string[];
}

const INDUSTRIES: IndustryCard[] = [
  {
    id: "automotive",
    slug: "automotive",
    name: "Automotive",
    description:
      "Protective packaging solutions for automotive components and transportation.",
    image: "/home/industries/automotive.jpg",
    applications: [
      "Auto Components",
      "Spare Parts",
      "Engine Components",
      "Metal & Plastic Parts",
    ],
  },
  {
    id: "pharmaceutical",
    slug: "pharmaceutical",
    name: "Pharmaceutical",
    description:
      "Reliable secondary packaging for pharmaceutical products and medical supplies.",
    image: "/home/industries/pharmaceutical.jpg",
    applications: [
      "Medicine Packaging",
      "Secondary Packaging",
      "Bottle Packaging",
      "Medical Equipment",
    ],
  },
  {
    id: "food-beverage",
    slug: "food-beverage",
    name: "Food & Beverage",
    description:
      "Practical packaging for food products, beverages and everyday consumer goods.",
    image: "/home/industries/food-beverage.jpg",
    applications: [
      "Food Products",
      "Bakery & Snacks",
      "FMCG",
      "Frozen Products",
    ],
  },
  {
    id: "ecommerce",
    slug: "ecommerce",
    name: "E-commerce",
    description:
      "Dependable shipping packaging designed for online orders and deliveries.",
    image: "/home/industries/ecommerce.jpg",
    applications: [
      "Courier Boxes",
      "Shipping Cartons",
      "Mailer Boxes",
      "Return Packaging",
    ],
  },
  {
    id: "electronics",
    slug: "electronics",
    name: "Electronics",
    description:
      "Protective packaging for electronic components, appliances and fragile products.",
    image: "/home/industries/electronics.jpg",
    applications: [
      "Electronic Components",
      "Appliances",
      "Accessories",
      "Fragile Products",
    ],
  },
  {
    id: "textile-garments",
    slug: "textile-garments",
    name: "Textile & Garments",
    description:
      "Packaging solutions for garments, textile products and export shipments.",
    image: "/home/industries/textile-garments.jpg",
    applications: [
      "Garment Boxes",
      "Textile Packaging",
      "Export Cartons",
    ],
  },
  {
    id: "agriculture",
    slug: "agriculture",
    name: "Agriculture",
    description:
      "Corrugated packaging for fresh produce and agricultural products.",
    image: "/home/industries/agriculture.jpg",
    applications: [
      "Fruits",
      "Vegetables",
      "Agricultural Products",
    ],
  },
  {
    id: "engineering",
    slug: "engineering",
    name: "Engineering",
    description:
      "Strong industrial packaging for machinery parts and engineering components.",
    image: "/home/industries/engineering.jpg",
    applications: [
      "Machinery Parts",
      "Industrial Components",
      "Heavy Equipment",
    ],
  },
];

export default function IndustriesWeServe() {
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

  return (
    <section
      id="industries"
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 lg:py-14 border-b border-[#E4DED3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header: Matching 2-Column Split */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 mb-10 sm:mb-12 border-b border-[#E4DED3] transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          {/* Left Column: Eyebrow + Main Big Headline */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/20 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                INDUSTRIES WE SERVE
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              Packaging Solutions <br className="hidden sm:inline" />
              <span className="text-[#A65D32]">Across Every Industry</span>
            </h2>
          </div>

          {/* Right Column: Context Description with Accent Border */}
          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              From automotive components to everyday consumer products, our corrugated packaging solutions support diverse industries with reliable protection, practical design and dependable quality.
            </p>
          </div>
        </div>

        {/* 8 INDUSTRY CARDS GRID: 4 Columns on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {INDUSTRIES.map((ind, idx) => {
            const delayClass =
              idx === 0
                ? "transition-delay-[50ms]"
                : idx === 1
                  ? "transition-delay-[100ms]"
                  : idx === 2
                    ? "transition-delay-[150ms]"
                    : idx === 3
                      ? "transition-delay-[200ms]"
                      : idx === 4
                        ? "transition-delay-[250ms]"
                        : idx === 5
                          ? "transition-delay-[300ms]"
                          : idx === 6
                            ? "transition-delay-[350ms]"
                            : "transition-delay-[400ms]";

            return (
              <Link
                key={ind.id}
                href={`/industries/${ind.slug}`}
                className={`group flex flex-col h-full bg-[#FAF7F2] rounded-2xl border border-[#E4DED3] overflow-hidden shadow-xs hover:border-[#A65D32] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  } ${delayClass}`}
              >
                {/* Image Container: 55-60% Visual Area in 4:3 Ratio with Clean Photography */}
                <div className="relative w-full aspect-[4/3] bg-[#FAF7F2] overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={`${ind.name} industry corrugated cardboard packaging solutions`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Card Body & Content: Clean & Focused */}
                <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-[#FAF7F2] border-t border-[#E4DED3]/60">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#202A2E] group-hover:text-[#A65D32] transition-colors duration-200">
                    {ind.name}
                  </h3>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#493629] text-white text-xs font-semibold tracking-wide shrink-0 shadow-2xs group-hover:bg-[#A65D32] transition-colors duration-200">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D1B48C] group-hover:translate-x-0.5 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
