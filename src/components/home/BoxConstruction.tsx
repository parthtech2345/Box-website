"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
  Info,
  Package,
  Shield,
  Ruler,
  FileText,
  Printer,
  SlidersHorizontal,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// --- TYPES ---
interface PlyOption {
  id: string;
  name: string;
  category: string;
  construction: string;
  layersSummary: string;
  description: string;
  bestFor: string[];
  image: string;
}

interface FluteProfile {
  id: string;
  name: string;
  type: string;
  fluteHeight: string;
  description: string;
  characteristics: string;
  waveSvg: React.ReactNode;
}

interface SelectionRequirement {
  id: string;
  title: string;
  examples: string;
  recommendedPly: string;
  recommendedCategory: string;
  explanation: string;
  keyFactors: string[];
}

// --- DATA ---
const PLY_OPTIONS: PlyOption[] = [
  {
    id: "3ply",
    name: "3 Ply – Single Wall",
    category: "SINGLE WALL",
    construction: "2 Liners + 1 Flute",
    layersSummary: "Outer Liner • Fluted Medium • Inner Liner",
    description:
      "One fluted layer between two flat liner sheets. Suitable for lightweight products and general-purpose packaging.",
    bestFor: [
      "Lightweight retail and FMCG items",
      "E-commerce apparel & small parcel delivery",
      "Inner protective packaging and partitions",
    ],
    image: "/home/box-specifications/3ply-single-wall.png",
  },
  {
    id: "5ply",
    name: "5 Ply – Double Wall",
    category: "DOUBLE WALL",
    construction: "3 Liners + 2 Flutes",
    layersSummary: "Outer Liner • Flute 1 • Middle Liner • Flute 2 • Inner Liner",
    description:
      "Two fluted layers between three liner sheets. Suitable for medium-to-heavy products, storage and transportation.",
    bestFor: [
      "Master outer shipping cartons & export boxes",
      "Home appliances, electronics & glassware",
      "Automotive components and food distribution",
    ],
    image: "/home/box-specifications/5ply-double-wall.png",
  },
  {
    id: "7ply",
    name: "7 Ply – Triple Wall",
    category: "TRIPLE WALL",
    construction: "4 Liners + 3 Flutes",
    layersSummary: "Outer Liner • 3 Fluted Mediums • 2 Center Liners • Inner Liner",
    description:
      "Three fluted layers between four liner sheets. Suitable for demanding packaging applications and heavier industrial goods.",
    bestFor: [
      "Heavy industrial machinery & metal castings",
      "Bulk chemical and bulk agricultural exports",
      "Wooden crate replacement for international freight",
    ],
    image: "/home/box-specifications/7ply-triple-wall.png",
  },
];

const FLUTE_PROFILES: FluteProfile[] = [
  {
    id: "b-flute",
    name: "B Flute",
    type: "Single Wall Standard",
    fluteHeight: "~2.5 - 3.0 mm",
    description: "Good crush resistance and a relatively smooth printing surface.",
    characteristics: "Excellent flat crush resistance, ideal for die-cut boxes and retail mailers.",
    waveSvg: (
      <svg className="w-full h-8 text-[#A65D32]" viewBox="0 0 200 30" fill="none">
        <path
          d="M 0 15 Q 12 2, 25 15 T 50 15 T 75 15 T 100 15 T 125 15 T 150 15 T 175 15 T 200 15"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <line x1="0" y1="4" x2="200" y2="4" stroke="#493629" strokeWidth="2.5" />
        <line x1="0" y1="26" x2="200" y2="26" stroke="#493629" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    id: "c-flute",
    name: "C Flute",
    type: "Shipping Standard",
    fluteHeight: "~3.6 - 4.2 mm",
    description: "Balanced cushioning and stacking performance.",
    characteristics: "Widely used for RSC shipping cartons requiring solid vertical compression.",
    waveSvg: (
      <svg className="w-full h-8 text-[#A65D32]" viewBox="0 0 200 30" fill="none">
        <path
          d="M 0 15 Q 16 0, 33 15 T 66 15 T 100 15 T 133 15 T 166 15 T 200 15"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <line x1="0" y1="2" x2="200" y2="2" stroke="#493629" strokeWidth="2.5" />
        <line x1="0" y1="28" x2="200" y2="28" stroke="#493629" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    id: "e-flute",
    name: "E Flute",
    type: "Micro-Flute",
    fluteHeight: "~1.1 - 1.6 mm",
    description: "Thinner profile, suitable for compact packaging and detailed printing.",
    characteristics: "High density of small arches offering superior litho-laminated graphic print quality.",
    waveSvg: (
      <svg className="w-full h-8 text-[#A65D32]" viewBox="0 0 200 30" fill="none">
        <path
          d="M 0 15 Q 6 5, 12.5 15 T 25 15 T 37.5 15 T 50 15 T 62.5 15 T 75 15 T 87.5 15 T 100 15 T 112.5 15 T 125 15 T 137.5 15 T 150 15 T 162.5 15 T 175 15 T 187.5 15 T 200 15"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line x1="0" y1="6" x2="200" y2="6" stroke="#493629" strokeWidth="2.5" />
        <line x1="0" y1="24" x2="200" y2="24" stroke="#493629" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    id: "bc-double-wall",
    name: "BC Double Wall",
    type: "Combination Flute",
    fluteHeight: "~6.2 - 7.0 mm",
    description: "Combines B and C flute profiles in a double-wall construction.",
    characteristics: "Pairs B-flute puncture resistance on the exterior with C-flute stacking compression.",
    waveSvg: (
      <svg className="w-full h-10 text-[#A65D32]" viewBox="0 0 200 38" fill="none">
        {/* Top Flute B */}
        <path
          d="M 0 10 Q 12 1, 25 10 T 50 10 T 75 10 T 100 10 T 125 10 T 150 10 T 175 10 T 200 10"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Middle Divider */}
        <line x1="0" y1="19" x2="200" y2="19" stroke="#493629" strokeWidth="2" />
        {/* Bottom Flute C */}
        <path
          d="M 0 28 Q 16 20, 33 28 T 66 28 T 100 28 T 133 28 T 166 28 T 200 28"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line x1="0" y1="2" x2="200" y2="2" stroke="#493629" strokeWidth="2.5" />
        <line x1="0" y1="36" x2="200" y2="36" stroke="#493629" strokeWidth="2.5" />
      </svg>
    ),
  },
];

const SELECTION_REQUIREMENTS: SelectionRequirement[] = [
  {
    id: "req-lightweight",
    title: "Lightweight Products",
    examples: "Lightweight retail goods, apparel, cosmetics, personal care and general-purpose e-commerce parcels.",
    recommendedPly: "3 Ply – Single Wall",
    recommendedCategory: "Recommended Starting Point",
    explanation:
      "A single fluted layer enclosed by two flat liners delivers adequate rigidity and cost-effective physical protection without adding dead freight weight.",
    keyFactors: ["Material efficiency", "Optimized courier freight costs", "Compact storage footprint"],
  },
  {
    id: "req-medium-heavy",
    title: "Medium to Heavy Products",
    examples: "Industrial components, consumer appliances, glassware, lubricants and multi-tier palletized freight.",
    recommendedPly: "5 Ply – Double Wall",
    recommendedCategory: "Recommended Starting Point",
    explanation:
      "Two fluted chambers cushioned between three paper liners deliver exceptional vertical stacking resistance and shock absorption during transit.",
    keyFactors: ["Superior vertical compression", "Long-distance transit stability", "Resistance to external side punctures"],
  },
  {
    id: "req-heavy-duty",
    title: "Heavy-Duty Applications",
    examples: "Automotive engine parts, heavy metal castings, pumps, chemical drums and export sea shipments.",
    recommendedPly: "7 Ply – Triple Wall",
    recommendedCategory: "Recommended Starting Point",
    explanation:
      "Engineered with four heavy paper liners and three high-strength fluted arches, this construction offers structural rigidity capable of substituting wooden packaging.",
    keyFactors: ["Maximum puncture resistance", "Heavy equipment stabilization", "Eco-friendly wooden crate alternative"],
  },
];

const SPECIFICATION_FACTORS = [
  {
    icon: Layers,
    title: "Ply Construction",
    detail: "Single (3-ply), Double (5-ply), or Triple (7-ply) wall based on structural demands.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flute Type",
    detail: "B, C, E, or BC combination profile tailored to cushioning versus print clarity requirements.",
  },
  {
    icon: FileText,
    title: "Paper GSM",
    detail: "Carefully calibrated substance (120 to 350+ GSM) across kraft liners and fluting media.",
  },
  {
    icon: Ruler,
    title: "Box Dimensions",
    detail: "Internal precision length, width, and depth (L × W × H) to eliminate product movement.",
  },
  {
    icon: Printer,
    title: "Printing & Branding",
    detail: "High-contrast flexographic or offset printing with brand graphics, handling icons, and barcodes.",
  },
  {
    icon: Package,
    title: "Box Style & Design",
    detail: "RSC, die-cut self-locking mailers, telescopic lids, or custom internal partitions.",
  },
];

export default function BoxConstruction() {
  const [selectedReqId, setSelectedReqId] = useState<string>("req-medium-heavy");
  const [activePlyTab, setActivePlyTab] = useState<string>("5ply");
  const [activeLayerHover, setActiveLayerHover] = useState<1 | 2 | 3 | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cutawayRef = useRef<HTMLDivElement>(null);
  const plyCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Consistent Section Heading Reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 25 },
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

      // 2. Cutaway 3-Layer Visual Assembly Reveal
      if (cutawayRef.current) {
        gsap.fromTo(
          cutawayRef.current,
          { opacity: 0, y: 35, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cutawayRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 3. 3-Ply / 5-Ply / 7-Ply Cards Stagger
      if (plyCardsRef.current) {
        const cards = plyCardsRef.current.children;
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: plyCardsRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activeRequirement =
    SELECTION_REQUIREMENTS.find((r) => r.id === selectedReqId) || SELECTION_REQUIREMENTS[1];

  return (
    <section
      id="specifications-guide"
      ref={sectionRef}
      className="relative w-full bg-[#FFFFFF] py-14 sm:py-14 lg:py-14 text-[#202A2E] overflow-hidden border-b border-[#E4DED3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================================
            1. SECTION INTRO & HEADER (Matching 2-Column Split of all other sections)
        ========================================================================= */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 mb-10 sm:mb-14 border-b border-[#E4DED3]"
        >
          {/* Left Column: Eyebrow + Main Big Headline */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/20 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                PACKAGING KNOWLEDGE
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              Choose the Right Strength <br className="hidden sm:inline" />
              <span className="text-[#A65D32]">for Your Packaging</span>
            </h2>
          </div>

          {/* Right Column: Context Description with Accent Border */}
          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              Understanding box construction and material specifications helps you choose packaging that protects your products throughout storage and transportation.
            </p>
          </div>
        </div>

        {/* =========================================================================
            2. UNDERSTANDING CORRUGATED BOARD (3-LAYER CUTAWAY VISUAL)
        ========================================================================= */}
        <div ref={cutawayRef} className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 lg:p-12 border border-[#E4DED3] shadow-sm mb-16 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Cutaway Photographic Visual with Precision Engineering Pointer Pins */}
            <div className="lg:col-span-7">
              <div className="relative rounded-xl overflow-hidden bg-white border border-[#E4DED3] p-3 sm:p-4">
                <div className="relative w-full h-[280px] sm:h-[360px] lg:h-[420px] rounded-lg overflow-hidden select-none bg-[#FAF7F2]">
                  <Image
                    src="/home/box-specifications/corrugated-board-cutaway.png"
                    alt="Corrugated cardboard 3-layer cross-section illustration"
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover object-center"
                    priority
                  />

                  {/* SVG Precision Pointer Callout Lines that connect pins to the exact edge cuts */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-20"
                    viewBox="0 0 500 380"
                    preserveAspectRatio="none"
                  >
                    {/* Line 1: Outer Liner Edge */}
                    <path
                      d="M 125 105 L 155 105 L 180 152"
                      stroke={activeLayerHover === 1 ? "#A65D32" : "#493629"}
                      strokeWidth={activeLayerHover === 1 ? "2.5" : "1.5"}
                      strokeDasharray={activeLayerHover === 1 ? "none" : "3,3"}
                      fill="none"
                      className="transition-all duration-300"
                    />
                    <circle
                      cx="180"
                      cy="152"
                      r={activeLayerHover === 1 ? "5" : "3.5"}
                      fill="#A65D32"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />

                    {/* Line 2: Fluted Wave Edge */}
                    <path
                      d="M 130 190 L 165 190 L 195 208"
                      stroke={activeLayerHover === 2 ? "#A65D32" : "#493629"}
                      strokeWidth={activeLayerHover === 2 ? "2.5" : "1.5"}
                      strokeDasharray={activeLayerHover === 2 ? "none" : "3,3"}
                      fill="none"
                      className="transition-all duration-300"
                    />
                    <circle
                      cx="195"
                      cy="208"
                      r={activeLayerHover === 2 ? "5" : "3.5"}
                      fill="#A65D32"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />

                    {/* Line 3: Inner Liner Edge */}
                    <path
                      d="M 120 275 L 150 275 L 175 242"
                      stroke={activeLayerHover === 3 ? "#A65D32" : "#493629"}
                      strokeWidth={activeLayerHover === 3 ? "2.5" : "1.5"}
                      strokeDasharray={activeLayerHover === 3 ? "none" : "3,3"}
                      fill="none"
                      className="transition-all duration-300"
                    />
                    <circle
                      cx="175"
                      cy="242"
                      r={activeLayerHover === 3 ? "5" : "3.5"}
                      fill="#A65D32"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                  </svg>

                  {/* Pointer Pin 1: Outer Liner (Precisely at top outer edge) */}
                  <div
                    onMouseEnter={() => setActiveLayerHover(1)}
                    onMouseLeave={() => setActiveLayerHover(null)}
                    style={{ top: "24%", left: "4%" }}
                    className={`absolute z-30 cursor-pointer flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${activeLayerHover === 1
                      ? "bg-[#A65D32] text-white scale-105 shadow-xl ring-2 ring-white"
                      : "bg-white/95 text-[#202A2E] shadow-md border border-[#E4DED3] hover:border-[#A65D32]"
                      }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs ${activeLayerHover === 1 ? "bg-white text-[#A65D32]" : "bg-[#A65D32] text-white"
                        }`}
                    >
                      1
                    </span>
                    <span className="text-xs font-semibold whitespace-nowrap">Outer Liner</span>
                  </div>

                  {/* Pointer Pin 2: Fluted Medium (Precisely at wavy flute core) */}
                  <div
                    onMouseEnter={() => setActiveLayerHover(2)}
                    onMouseLeave={() => setActiveLayerHover(null)}
                    style={{ top: "47%", left: "4%" }}
                    className={`absolute z-30 cursor-pointer flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${activeLayerHover === 2
                      ? "bg-[#A65D32] text-white scale-105 shadow-xl ring-2 ring-white"
                      : "bg-white/95 text-[#202A2E] shadow-md border border-[#E4DED3] hover:border-[#A65D32]"
                      }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs ${activeLayerHover === 2 ? "bg-white text-[#A65D32]" : "bg-[#A65D32] text-white"
                        }`}
                    >
                      2
                    </span>
                    <span className="text-xs font-semibold whitespace-nowrap">Fluted Medium</span>
                  </div>

                  {/* Pointer Pin 3: Inner Liner (Precisely at bottom liner edge) */}
                  <div
                    onMouseEnter={() => setActiveLayerHover(3)}
                    onMouseLeave={() => setActiveLayerHover(null)}
                    style={{ top: "69%", left: "4%" }}
                    className={`absolute z-30 cursor-pointer flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${activeLayerHover === 3
                      ? "bg-[#A65D32] text-white scale-105 shadow-xl ring-2 ring-white"
                      : "bg-white/95 text-[#202A2E] shadow-md border border-[#E4DED3] hover:border-[#A65D32]"
                      }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-xs ${activeLayerHover === 3 ? "bg-white text-[#A65D32]" : "bg-[#A65D32] text-white"
                        }`}
                    >
                      3
                    </span>
                    <span className="text-xs font-semibold whitespace-nowrap">Inner Liner</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Layer Callouts & Explanation */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#A65D32] mb-2">
                Anatomy of Strength
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#202A2E] mb-4">
                The Science of 3-Layer Construction
              </h3>
              <p className="text-[#62574D] text-sm sm:text-base leading-relaxed mb-6">
                Corrugated board is an engineered composite paper material. Hover over each layer on
                the image or below to inspect its structural role.
              </p>

              {/* Callout Cards with Synced Hover Interaction */}
              <div className="space-y-4">
                {/* 1. Outer Liner */}
                <div
                  onMouseEnter={() => setActiveLayerHover(1)}
                  onMouseLeave={() => setActiveLayerHover(null)}
                  className={`relative pl-5 border-l-4 transition-all duration-300 p-4 rounded-r-xl border cursor-pointer ${activeLayerHover === 1
                    ? "bg-white border-[#A65D32] border-l-[#A65D32] shadow-md -translate-x-1"
                    : "bg-white/80 border-[#E4DED3] border-l-[#E4DED3] hover:border-[#A65D32]/60 hover:border-l-[#A65D32]"
                    }`}
                >
                  <div className="flex items-center gap-2 font-bold text-sm text-[#202A2E] mb-1">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${activeLayerHover === 1 ? "bg-[#A65D32] text-white" : "bg-[#A65D32]/15 text-[#A65D32]"
                        }`}
                    >
                      1
                    </span>
                    <span className={activeLayerHover === 1 ? "text-[#A65D32]" : "text-[#202A2E]"}>
                      Outer Liner
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                    The external flat paper layer providing puncture resistance and a smooth surface
                    for commercial printing and labeling.
                  </p>
                </div>

                {/* 2. Fluted Medium */}
                <div
                  onMouseEnter={() => setActiveLayerHover(2)}
                  onMouseLeave={() => setActiveLayerHover(null)}
                  className={`relative pl-5 border-l-4 transition-all duration-300 p-4 rounded-r-xl border cursor-pointer ${activeLayerHover === 2
                    ? "bg-white border-[#A65D32] border-l-[#A65D32] shadow-md -translate-x-1"
                    : "bg-white/80 border-[#E4DED3] border-l-[#E4DED3] hover:border-[#A65D32]/60 hover:border-l-[#A65D32]"
                    }`}
                >
                  <div className="flex items-center gap-2 font-bold text-sm text-[#202A2E] mb-1">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${activeLayerHover === 2 ? "bg-[#A65D32] text-white" : "bg-[#A65D32]/15 text-[#A65D32]"
                        }`}
                    >
                      2
                    </span>
                    <span className={activeLayerHover === 2 ? "text-[#A65D32]" : "text-[#202A2E]"}>
                      Fluted Medium
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                    The wave-shaped middle layer that creates protective air cushions and acts as
                    continuous structural arches resisting top-to-bottom compression.
                  </p>
                </div>

                {/* 3. Inner Liner */}
                <div
                  onMouseEnter={() => setActiveLayerHover(3)}
                  onMouseLeave={() => setActiveLayerHover(null)}
                  className={`relative pl-5 border-l-4 transition-all duration-300 p-4 rounded-r-xl border cursor-pointer ${activeLayerHover === 3
                    ? "bg-white border-[#A65D32] border-l-[#A65D32] shadow-md -translate-x-1"
                    : "bg-white/80 border-[#E4DED3] border-l-[#E4DED3] hover:border-[#A65D32]/60 hover:border-l-[#A65D32]"
                    }`}
                >
                  <div className="flex items-center gap-2 font-bold text-sm text-[#202A2E] mb-1">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${activeLayerHover === 3 ? "bg-[#A65D32] text-white" : "bg-[#A65D32]/15 text-[#A65D32]"
                        }`}
                    >
                      3
                    </span>
                    <span className={activeLayerHover === 3 ? "text-[#A65D32]" : "text-[#202A2E]"}>
                      Inner Liner
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                    The internal flat paper layer that holds the fluted arches in permanent geometry
                    and protects internal cargo from abrasion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            3. EXPLORE PLY OPTIONS (3 PLY, 5 PLY, 7 PLY)
        ========================================================================= */}
        <div className="mb-16 sm:mb-20">
          <div className="mb-8 pb-4 border-b border-[#E4DED3]">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#202A2E] leading-tight">
              Explore Corrugated <span className="text-[#A65D32]">Ply Options</span>
            </h3>
          </div>

          {/* Ply Cards - Horizontal Comparison on Desktop, Stack on Mobile */}
          <div ref={plyCardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {PLY_OPTIONS.map((ply) => (
              <div
                key={ply.id}
                onMouseEnter={() => setActivePlyTab(ply.id)}
                className={`bg-[#FAF7F2] rounded-xl border transition-all duration-300 flex flex-col overflow-hidden ${activePlyTab === ply.id
                  ? "border-[#A65D32] shadow-md -translate-y-1"
                  : "border-[#E4DED3] hover:border-[#A65D32]/50 hover:shadow-sm"
                  }`}
              >
                {/* Visual Image Header (Clean cross-section without overlapping badge text) */}
                <div className="relative w-full h-48 sm:h-52 bg-white p-3 border-b border-[#E4DED3]">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src={ply.image}
                      alt={`${ply.name} cross section view`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-start">
                  <h4 className="font-heading font-bold text-xl text-[#202A2E] mb-1">
                    {ply.name}
                  </h4>
                  <div className="inline-block text-xs font-semibold text-[#A65D32] mb-3 bg-white px-2.5 py-0.5 rounded border border-[#E4DED3] self-start">
                    Construction: {ply.construction}
                  </div>

                  <p className="text-sm text-[#62574D] leading-relaxed">
                    {ply.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            4. INTERACTIVE PLY SELECTION GUIDE ("Not Sure Which Box You Need?")
        ========================================================================= */}
        <div className="mb-8 pb-4 border-b border-[#E4DED3]">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#202A2E] leading-tight">
            Not Sure <span className="text-[#A65D32]">Which Box You Need?</span>
          </h3>
        </div>

        <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 lg:p-12 border border-[#E4DED3] mb-16 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 3 Selectable Requirement Options */}
            <div className="lg:col-span-5 space-y-3">
              {SELECTION_REQUIREMENTS.map((req) => {
                const isSelected = req.id === selectedReqId;
                return (
                  <button
                    key={req.id}
                    onClick={() => setSelectedReqId(req.id)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer ${isSelected
                      ? "bg-white border-[#A65D32] shadow-sm ring-1 ring-[#A65D32]"
                      : "bg-white/80 border-[#E4DED3] hover:bg-white hover:border-[#A65D32]/50"
                      }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-heading font-bold text-base text-[#202A2E]">
                        {req.title}
                      </span>
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${isSelected
                          ? "bg-[#A65D32] text-white"
                          : "bg-[#E4DED3]/60 text-[#62574D]"
                          }`}
                      >
                        {req.recommendedPly.split("–")[0].trim()}
                      </span>
                    </div>
                    <p className="text-xs text-[#62574D] leading-relaxed line-clamp-2">
                      {req.examples}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right: Recommendation Card with CTA */}
            <div className="lg:col-span-7 bg-white rounded-xl p-6 sm:p-8 border border-[#E4DED3] shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#A65D32] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A65D32]">
                    Suggested Box Construction
                  </span>
                </div>

                <h4 className="font-heading font-bold text-2xl sm:text-3xl text-[#202A2E] mb-3">
                  {activeRequirement.recommendedPly}
                </h4>

                <p className="text-sm sm:text-base text-[#62574D] leading-relaxed mb-6">
                  {activeRequirement.explanation}
                </p>

                <div className="border-t border-[#E4DED3] pt-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#202A2E] mb-3.5">
                    Key Performance Factors:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeRequirement.keyFactors.map((factor, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E4DED3] text-xs font-medium text-[#202A2E] flex items-center gap-2.5 transition-all duration-200 hover:border-[#A65D32] hover:bg-white hover:shadow-sm hover:-translate-y-0.5 cursor-default group"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#A65D32] shrink-0 transition-transform duration-200 group-hover:scale-110" />
                        <span className="group-hover:text-[#A65D32] transition-colors">{factor}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            5. PACKAGING SPECIFICATION CHECKLIST
        ========================================================================= */}
        <div className="mb-8 pb-4 border-b border-[#E4DED3]">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#202A2E] leading-tight">
            What Goes Into Your <span className="text-[#A65D32]">Box Specification?</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16 sm:mb-20">
          {SPECIFICATION_FACTORS.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-[#FAF7F2] rounded-xl border border-[#E4DED3] transition-all duration-300 hover:border-[#A65D32] hover:bg-white hover:shadow-md hover:-translate-y-1 cursor-default group"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#A65D32] mb-4 border border-[#E4DED3] transition-all duration-300 group-hover:bg-[#A65D32] group-hover:text-white group-hover:border-[#A65D32] group-hover:scale-105 shadow-sm">
                  <IconComp className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-[#202A2E] mb-2 group-hover:text-[#A65D32] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            6. COMPACT EDITORIAL CTA STRIP
        ========================================================================= */}
        <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#E4DED3] flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-sm">
          <div className="max-w-xl">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#202A2E] leading-tight mb-2">
              Let&apos;s Find the Right Packaging <span className="text-[#A65D32]">for Your Product</span>
            </h3>
            <p className="text-sm text-[#62574D] leading-relaxed">
              Share your product specifications with our engineering desk. We&apos;ll help you develop the appropriate box construction.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/inquiry"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#A65D32] text-white text-sm font-semibold hover:bg-[#8e4f2b] transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 group"
            >
              <span>Request a Packaging Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
