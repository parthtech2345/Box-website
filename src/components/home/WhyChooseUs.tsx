"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Layers,
  SlidersHorizontal,
  Settings,
  Truck,
  Handshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface Feature {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  tag: string;
}

const FEATURES: Feature[] = [
  {
    number: "01",
    title: "Quality-Focused Manufacturing",
    description:
      "Careful attention to materials, construction and packaging quality at every stage.",
    icon: ShieldCheck,
    tag: "Certified Testing",
  },
  {
    number: "02",
    title: "Strength & Durability",
    description:
      "Corrugated packaging solutions designed to provide dependable product protection.",
    icon: Layers,
    tag: "High Burst Factor",
  },
  {
    number: "03",
    title: "Customized Packaging Solutions",
    description:
      "Flexible packaging designs tailored to different product dimensions and requirements.",
    icon: SlidersHorizontal,
    tag: "Precision CAD",
  },
  {
    number: "04",
    title: "Manufacturing Precision",
    description:
      "Attention to structural accuracy, folding quality and consistent packaging construction.",
    icon: Settings,
    tag: "Automated Lines",
  },
  {
    number: "05",
    title: "Reliable Supply",
    description:
      "Packaging solutions planned around business and commercial supply requirements.",
    icon: Truck,
    tag: "On-Time Dispatch",
  },
  {
    number: "06",
    title: "Customer-Centric Approach",
    description:
      "Focused on understanding customer requirements and providing suitable packaging solutions.",
    icon: Handshake,
    tag: "Dedicated Support",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 lg:py-24 border-b border-[#E4DED3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Consistent 2-Column Split matching ProductCategories */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 mb-10 sm:mb-12 border-b border-[#E4DED3] transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          {/* Left Column: Eyebrow + Main Big Headline */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/20 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                WHY CHOOSE US
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              Packaging Excellence <br className="hidden sm:inline" />
              <span className="text-[#A65D32]">Built on Trust</span>
            </h2>
          </div>

          {/* Right Column: Context Description with Accent Border */}
          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              We combine thoughtful design, quality materials and manufacturing precision to deliver dependable corrugated packaging solutions for diverse business requirements.
            </p>
          </div>
        </div>

        {/* 6 Feature Cards Grid in 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {FEATURES.map((item, idx) => {
            const Icon = item.icon;
            const delayClass =
              idx === 0
                ? "transition-delay-[100ms]"
                : idx === 1
                  ? "transition-delay-[200ms]"
                  : idx === 2
                    ? "transition-delay-[300ms]"
                    : idx === 3
                      ? "transition-delay-[400ms]"
                      : idx === 4
                        ? "transition-delay-[500ms]"
                        : "transition-delay-[600ms]";

            return (
              <div
                key={item.number}
                className={`relative bg-[#FFFFFF] rounded-2xl p-6 sm:p-7 border border-[#E4DED3] shadow-xs hover:border-[#D1B48C] hover:shadow-xl transition-all duration-300 ease-out transform hover:-translate-y-1 group flex flex-col justify-between ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
                  } ${delayClass}`}
              >
                {/* Top Header: Icon + Number */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Warm Light-Beige Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E4DED3] flex items-center justify-center text-[#A65D32] group-hover:bg-[#493629] group-hover:text-white group-hover:border-[#493629] transition-all duration-300 shadow-2xs">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Sequential Number */}
                    <span className="font-heading font-bold text-sm tracking-widest text-[#A65D32]/70 group-hover:text-[#A65D32] transition-colors">
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl text-[#202A2E] mb-2.5 group-hover:text-[#A65D32] transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#62574D] font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
