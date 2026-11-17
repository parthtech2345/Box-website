"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  Factory,
  Printer,
  Scissors,
  Package,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Maximize2,
} from "lucide-react";

interface Stage {
  id: string;
  number: string;
  title: string;
  description: string;
  visualLabel: string;
  icon: React.ElementType;
  image: string;
  technicalSpecs: string[];
}

const STAGES: Stage[] = [
  {
    id: "stage-01",
    number: "01",
    title: "Raw Material Selection",
    description:
      "Selection of suitable kraft paper and raw materials for corrugated board production.",
    visualLabel: "Industrial Kraft Paper Jumbo Rolls",
    icon: Layers,
    image: "/home/manufacturing-process/raw-material-selection.png",
    technicalSpecs: [
      "120 to 450 GSM Virgin Kraft & Semi-Chemical Fluting",
      "Burst Factor (BF) certified Indian & imported paper mills",
      "Moisture controlled roll storage with traceability codes",
    ],
  },
  {
    id: "stage-02",
    number: "02",
    title: "Corrugation & Board Formation",
    description:
      "Paper layers are combined with fluted paper to create corrugated sheets with the required construction.",
    visualLabel: "Continuous Corrugation & Lamination",
    icon: Factory,
    image: "/home/manufacturing-process/corrugation-board-formation.png",
    technicalSpecs: [
      "Automated steam-heated fingerless single & double facers",
      "B, C, and E flute configurations for 3, 5, and 7-ply board",
      "Corn-starch ecological adhesive bonding under pressure",
    ],
  },
  {
    id: "stage-03",
    number: "03",
    title: "Printing & Branding",
    description:
      "Customized designs, colours and product information are printed according to customer requirements.",
    visualLabel: "Multi-Color High-Definition Flexo Printing",
    icon: Printer,
    image: "/home/manufacturing-process/printing-branding.png",
    technicalSpecs: [
      "Up to 4-color high-speed flexographic printing units",
      "Water-based non-toxic food-safe and eco inks",
      "Sharp barcode compliance and transit warning symbols",
    ],
  },
  {
    id: "stage-04",
    number: "04",
    title: "Die-Cutting & Slotting",
    description:
      "Corrugated sheets are cut, creased and shaped according to the required box dimensions and design.",
    visualLabel: "Precision Rotary Die-Cutting & Scoring",
    icon: Scissors,
    image: "/home/manufacturing-process/die-cutting-slotting.png",
    technicalSpecs: [
      "Rotary & flatbed precision CNC die-cutting cylinders",
      "Micrometer-accurate scoring lines for crisp folding edges",
      "Self-locking flap cuts, hand holes, and ventilation slots",
    ],
  },
  {
    id: "stage-05",
    number: "05",
    title: "Folding & Box Assembly",
    description:
      "Cut sheets are folded, glued or stitched to form finished corrugated packaging boxes.",
    visualLabel: "Automated Folder-Gluer & Stitching Line",
    icon: Package,
    image: "/home/manufacturing-process/folding-box-assembly.png",
    technicalSpecs: [
      "High-speed computerized folder-gluer with squaring section",
      "Hot-melt and PVA cold adhesive dispensing systems",
      "Heavy-duty rust-proof wire stitching for industrial crates",
    ],
  },
  {
    id: "stage-06",
    number: "06",
    title: "Quality Inspection & Dispatch",
    description:
      "Finished boxes are checked for construction, dimensions and finishing before packaging and dispatch.",
    visualLabel: "Laboratory QA Audit & Palletized Dispatch",
    icon: ShieldCheck,
    image: "/home/manufacturing-process/quality-inspection-dispatch.png",
    technicalSpecs: [
      "Edge Crush Test (ECT) & Box Compression Test (BCT) verified",
      "Automated bundle strapping and moisture-barrier stretch wrap",
      "Scheduled fleet dispatch with guaranteed logistics lead time",
    ],
  },
];

export default function ManufacturingProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStage, setActiveStage] = useState<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentStage = STAGES[activeStage];
  const CurrentIcon = currentStage.icon;

  return (
    <section
      id="manufacturing"
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 lg:py-24 border-b border-[#E4DED3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header: Matching ProductCategories & WhyChooseUs 2-Column Split */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 mb-10 sm:mb-12 border-b border-[#E4DED3] transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          {/* Left Column: Eyebrow + Main Big Headline */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/20 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                OUR MANUFACTURING PROCESS
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              From Raw Material to <br className="hidden sm:inline" />
              <span className="text-[#A65D32]">Ready-to-Ship Packaging.</span>
            </h2>
          </div>

          {/* Right Column: Context Description with Accent Border */}
          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              Every corrugated box goes through a carefully coordinated manufacturing process. From selecting quality raw materials to final inspection, each stage focuses on strength, precision and consistency.
            </p>
          </div>
        </div>

        {/* INTERACTIVE 6-STAGE HORIZONTAL PRODUCTION TIMELINE TRACK */}
        <div className="mb-10 sm:mb-12">
          {/* Timeline Track with Progressive Connecting Line */}
          <div className="relative">
            {/* Background Base Rail Line */}
            <div className="hidden lg:block absolute top-7 left-8 right-8 h-0.5 bg-[#E4DED3]" />

            {/* Active Progress Bar */}
            <div
              className="hidden lg:block absolute top-7 left-8 h-0.5 bg-[#A65D32] transition-all duration-500 ease-out"
              style={{
                width: `${(activeStage / (STAGES.length - 1)) * 90}%`,
              }}
            />

            {/* 6 Stage Interactive Trigger Nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10">
              {STAGES.map((stg, idx) => {
                const IconComponent = stg.icon;
                const isActive = activeStage === idx;
                const isPast = activeStage > idx;

                return (
                  <button
                    key={stg.id}
                    type="button"
                    onClick={() => setActiveStage(idx)}
                    className={`group text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between ${isActive
                      ? "bg-[#FAF7F2] border-[#A65D32] shadow-md ring-1 ring-[#A65D32]"
                      : "bg-[#FFFFFF] border-[#E4DED3] hover:border-[#D1B48C] hover:bg-[#FAF7F2]"
                      }`}
                  >
                    {/* Top Node Indicator: Circle + Icon */}
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-heading font-bold text-xs transition-all duration-200 ${isActive
                          ? "bg-[#A65D32] text-white shadow-xs scale-110"
                          : isPast
                            ? "bg-[#493629] text-white"
                            : "bg-[#FAF7F2] border border-[#E4DED3] text-[#62574D] group-hover:border-[#A65D32]"
                          }`}
                      >
                        {stg.number}
                      </div>

                      <IconComponent
                        className={`w-4 h-4 transition-colors ${isActive
                          ? "text-[#A65D32]"
                          : "text-[#62574D]/60 group-hover:text-[#493629]"
                          }`}
                      />
                    </div>

                    {/* Stage Name */}
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#A65D32] block mb-0.5">
                        STAGE {stg.number}
                      </span>
                      <h4
                        className={`font-heading font-bold text-xs sm:text-sm leading-snug transition-colors line-clamp-2 ${isActive ? "text-[#202A2E]" : "text-[#62574D] group-hover:text-[#202A2E]"
                          }`}
                      >
                        {stg.title}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* EXPANDED ACTIVE STAGE SHOWCASE (2-Column Editorial Box) */}
        <div className="rounded-2xl bg-[#FAF7F2] border border-[#E4DED3] p-6 sm:p-8 lg:p-10 mb-12 shadow-xs transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left: Stage Information & Engineering Specs (6 cols) */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* Stage Badge & Step Indicator */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 rounded-full bg-[#493629] text-white font-heading font-bold text-xs uppercase tracking-wider">
                    STAGE {currentStage.number} of 06
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#A65D32]">
                    Continuous Corrugation Line
                  </span>
                </div>

                {/* Stage Title */}
                <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#202A2E] leading-tight mb-3">
                  {currentStage.title}
                </h3>

                {/* Primary Description */}
                <p className="text-sm sm:text-base text-[#62574D] leading-relaxed mb-6 font-normal">
                  {currentStage.description}
                </p>

                {/* Technical Specifications Checklist */}
                <div className="space-y-3 pt-6 border-t border-[#E4DED3] mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#493629] block">
                    Manufacturing & Quality Standards:
                  </span>
                  {currentStage.technicalSpecs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#493629]">
                      <CheckCircle2 className="w-4 h-4 text-[#A65D32] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stage Navigation Arrows */}
              <div className="flex items-center justify-between pt-4 border-t border-[#E4DED3]/80">
                <button
                  type="button"
                  disabled={activeStage === 0}
                  onClick={() => setActiveStage((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-lg border border-[#E4DED3] bg-white text-xs font-semibold text-[#493629] hover:bg-[#F5EFE5] disabled:opacity-40 disabled:pointer-events-none transition-colors"
                >
                  ← Previous Stage
                </button>

                <div className="flex gap-1.5">
                  {STAGES.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setActiveStage(dotIdx)}
                      className={`h-2 rounded-full transition-all duration-300 ${activeStage === dotIdx
                        ? "w-6 bg-[#A65D32]"
                        : "w-2 bg-[#E4DED3] hover:bg-[#D1B48C]"
                        }`}
                      aria-label={`Jump to stage ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  disabled={activeStage === STAGES.length - 1}
                  onClick={() => setActiveStage((prev) => Math.min(STAGES.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-lg border border-[#E4DED3] bg-white text-xs font-semibold text-[#493629] hover:bg-[#F5EFE5] disabled:opacity-40 disabled:pointer-events-none transition-colors"
                >
                  Next Stage →
                </button>
              </div>
            </div>

            {/* Right: Dedicated High-Resolution Manufacturing Photo (6 cols) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden border border-[#E4DED3] shadow-md bg-[#FAF7F2] group">
                <Image
                  src={currentStage.image}
                  alt={`${currentStage.title} - ${currentStage.visualLabel}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
