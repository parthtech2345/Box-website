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

interface ReasonItem {
  icon?: any;
  title: string;
  description: string;
}

interface WhyIndustriesChooseUsProps {
  data?: {
    badge?: string;
    title?: string;
    subtitle?: string;
    reasons?: Array<{
      icon?: string;
      title: string;
      description: string;
    }>;
  };
}

const ICON_CLASS = "w-5 h-5 text-[#A65D32] group-hover:text-white transition-colors duration-200";

const DEFAULT_REASONS = [
  {
    icon: <Ruler className={ICON_CLASS} />,
    title: "Customized Packaging Solutions",
    description: "Every box is designed around the exact physical dimensions, fragility, and stacking parameters of your product.",
  },
  {
    icon: <ShieldCheck className={ICON_CLASS} />,
    title: "Reliable Product Protection",
    description: "Multi-ply board architectures engineered to withstand drop impacts, transit vibrations, and warehouse compression.",
  },
  {
    icon: <Maximize2 className={ICON_CLASS} />,
    title: "Flexible Box Sizes & Specs",
    description: "From lightweight single-wall 3-ply mailers to heavy-duty 7-ply export bulk containers without tooling limits.",
  },
  {
    icon: <Printer className={ICON_CLASS} />,
    title: "Printing & Branding Options",
    description: "High-definition 1 to 4 colour flexographic printing for company branding, handling warnings, and scan-ready barcodes.",
  },
  {
    icon: <Truck className={ICON_CLASS} />,
    title: "Transport-Optimized Formats",
    description: "Dimensions calculated to tile seamlessly inside trucks and ocean shipping containers, cutting freight costs.",
  },
  {
    icon: <Layers className={ICON_CLASS} />,
    title: "Industry-Specific Engineering",
    description: "Food-safe adhesives, anti-static ESD coatings, moisture barriers, and custom partitions tailored to sector needs.",
  },
];

function getReasonIcon(iconName?: string, index: number = 0) {
  switch (iconName) {
    case "Ruler":
      return <Ruler className={ICON_CLASS} />;
    case "ShieldCheck":
      return <ShieldCheck className={ICON_CLASS} />;
    case "Maximize2":
      return <Maximize2 className={ICON_CLASS} />;
    case "Printer":
      return <Printer className={ICON_CLASS} />;
    case "Truck":
      return <Truck className={ICON_CLASS} />;
    case "Layers":
      return <Layers className={ICON_CLASS} />;
    default: {
      const fallbackIcons = [
        <Ruler key="1" className={ICON_CLASS} />,
        <ShieldCheck key="2" className={ICON_CLASS} />,
        <Maximize2 key="3" className={ICON_CLASS} />,
        <Printer key="4" className={ICON_CLASS} />,
        <Truck key="5" className={ICON_CLASS} />,
        <Layers key="6" className={ICON_CLASS} />,
      ];
      return fallbackIcons[index % fallbackIcons.length];
    }
  }
}

export default function WhyIndustriesChooseUs({ data }: WhyIndustriesChooseUsProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const reasons = (data?.reasons && data.reasons.length > 0)
    ? data.reasons.map((r, i) => ({
      icon: getReasonIcon(r.icon, i),
      title: r.title,
      description: r.description,
    }))
    : DEFAULT_REASONS;

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
                {data?.badge || "CAPABILITIES OVERVIEW"}
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              {data?.title || (
                <>
                  Why Industries Choose <br className="hidden sm:inline" />
                  <span className="text-[#A65D32]">Our Packaging</span>
                </>
              )}
            </h2>
          </div>

          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              {data?.subtitle || "We combine automated corrugation lines, precision sample dielines, and quality raw kraft material to deliver consistent batch performance."}
            </p>
          </div>
        </div>

        {/* 6 Capabilities Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8D5B8] hover:border-[#A65D32] hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-white border border-[#E8D5B8] flex items-center justify-center mb-4 group-hover:bg-[#A65D32] group-hover:border-[#A65D32] transition-all duration-200 shadow-2xs">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#202A2E] group-hover:text-[#A65D32] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-[#E4DED3]/60 flex items-center justify-between text-xs font-semibold text-[#8C7E72] group-hover:text-[#62574D] transition-colors">
                <span>Pillar 0{i + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32] group-hover:scale-125 transition-transform duration-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
