"use client";

import React, { useRef, useEffect } from "react";
import {
  Ruler,
  Layers,
  Palette,
  ShieldCheck,
  Zap,
  Repeat,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CAPABILITIES = [
  {
    icon: <Ruler className="w-5 h-5 text-[#A65D32]" />,
    title: "100% Bespoke Dimensions",
    description:
      "No standard mould restrictions. Specify your Length, Width, and Depth in millimeters, inches, or centimeters for tight-fit protection.",
    highlight: "±0.5mm CNC dieline precision",
  },
  {
    icon: <Layers className="w-5 h-5 text-[#A65D32]" />,
    title: "Flute & Ply Customization",
    description:
      "Choose from 3-Ply, 5-Ply, or 7-Ply board architectures with B-Flute, C-Flute, E-Flute, or hybrid BC & AAC combinations for heavy export stacking.",
    highlight: "120 GSM to 350+ GSM kraft paper",
  },
  {
    icon: <Palette className="w-5 h-5 text-[#A65D32]" />,
    title: "Flexographic & Screen Printing",
    description:
      "High-speed 1 to 4 colour branded flexo printing, water-based eco-friendly inks, QR code serialization, and barcode compliance for Amazon/Flipkart.",
    highlight: "Sharp registration & vibrant Pantone match",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#A65D32]" />,
    title: "Barrier & Water-Resistant Coatings",
    description:
      "Functional anti-humidity coatings, oil/grease barrier liners for perishable foods, and anti-static ESD coatings for sensitive electronic PCBs.",
    highlight: "Export-grade moisture repellant",
  },
  {
    icon: <Zap className="w-5 h-5 text-[#A65D32]" />,
    title: "24-Hour Digital Prototype",
    description:
      "Receive automated CAD 3D layout proofs and flat dieline templates within 24 hours of submitting your outer dimensions and weight load.",
    highlight: "Fast approval before mass tooling",
  },
  {
    icon: <Repeat className="w-5 h-5 text-[#A65D32]" />,
    title: "Scalable Production Runs",
    description:
      "Whether you need pilot test batches of 500 units or commercial monthly contracts exceeding 500,000 corrugated cartons, our plant scales seamlessly.",
    highlight: "High-speed automatic rotary slotting",
  },
];

export default function CustomCapabilities() {
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
      className="w-full bg-[#FAF7F2] py-14 sm:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header 2-Column Split */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-10 border-b border-[#E4DED3]"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                MANUFACTURING CAPABILITIES
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              End-to-End Bespoke <br className="hidden sm:inline" />
              <span className="text-[#A65D32]">Packaging Capabilities</span>
            </h2>
          </div>

          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              Equipped with 5-ply automated corrugators, computerised sample dieline cutters, and 4-colour flexo graphic printing presses under one roof.
            </p>
          </div>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CAPABILITIES.map((cap, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-[#E4DED3] hover:border-[#A65D32] hover:bg-[#FAF7F2]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-default"
            >
              <div>
                {/* Icon box with proper contrast on hover */}
                <div className="w-11 h-11 rounded-xl bg-[#FAF7F2] border border-[#E8D5B8] flex items-center justify-center mb-4 text-[#A65D32] group-hover:bg-[#A65D32] group-hover:text-white group-hover:border-[#A65D32] transition-all duration-200">
                  <div className="[&>svg]:text-current">
                    {cap.icon}
                  </div>
                </div>

                {/* Title keeps dark readable text, accents to terracotta */}
                <h3 className="font-heading font-bold text-lg text-[#202A2E] group-hover:text-[#A65D32] transition-colors mb-2">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed mb-4">
                  {cap.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E4DED3]/60 flex items-center justify-between text-xs font-semibold text-[#A65D32]">
                <span>{cap.highlight}</span>
                <span className="text-[#8C7E72] font-mono text-[11px]">0{i + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
