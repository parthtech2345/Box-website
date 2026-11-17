"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Ruler,
  Box as BoxIcon,
  Layers,
  Printer,
  ArrowRight,
  Play,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  PackageCheck,
} from "lucide-react";

export default function CustomPackaging() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [assemblyStep, setAssemblyStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<number>(0);

  // Intersection Observer for scroll reveal
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

  // Assembly animation timer sequence
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setAssemblyStep((prev) => (prev >= 4 ? 0 : prev + 1));
    }, 2800);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const customizationFeatures = [
    {
      title: "Custom Dimensions",
      desc: "Box sizes designed around your product measurements.",
      icon: Ruler,
      detail: "Exact internal L × W × H precision in mm",
    },
    {
      title: "Box Styles",
      desc: "Different structural designs to suit your packaging requirements.",
      icon: BoxIcon,
      detail: "RSC, Die-cut mailers, Tuck-in, Tray & Lid",
    },
    {
      title: "Corrugated Strength",
      desc: "Choose suitable board construction for your packaging needs.",
      icon: Layers,
      detail: "3-ply, 5-ply, 7-ply & custom flute (B/C/E)",
    },
    {
      title: "Custom Printing",
      desc: "Add your branding and product information through customized printing.",
      icon: Printer,
      detail: "Multi-color flexo & high-res branding",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Share Your Requirements",
      desc: "Tell us about your product, dimensions and packaging needs.",
    },
    {
      num: "02",
      title: "Discuss Your Design",
      desc: "Explore suitable box structures, board strength and printing options.",
    },
    {
      num: "03",
      title: "Get Your Custom Solution",
      desc: "Our team reviews your requirements and works towards a suitable packaging solution.",
    },
  ];

  const stepLabels = [
    "1. Flat Corrugated Dieline",
    "2. Vertical Flutes Folding Up",
    "3. Side & Front Flaps Engaging",
    "4. Top Interlocking Closure",
    "5. Precision 3D Assembled Box",
  ];

  return (
    <section
      id="custom-packaging"
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 lg:py-24 border-b border-[#E4DED3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header: Matching ProductCategories & WhyChooseUs 2-Column Split */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 mb-12 sm:mb-16 border-b border-[#E4DED3] transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          {/* Left Column: Eyebrow + Main Big Headline */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/20 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                CUSTOM PACKAGING SOLUTIONS
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              Packaging Designed <br className="hidden sm:inline" />
              <span className="text-[#A65D32]">Around Your Needs.</span>
            </h2>
          </div>

          {/* Right Column: Context Description with Accent Border */}
          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              Every product has different packaging requirements. Tell us what you need, and we'll help create customized corrugated packaging solutions that fit your product, dimensions and business requirements.
            </p>
          </div>
        </div>

        {/* MAIN INTERACTIVE 2-COLUMN EXPERIENCE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">

          {/* LEFT SIDE: Customization Concept, Process & CTAs (6 cols) */}
          <div
            className={`lg:col-span-6 flex flex-col justify-between transition-all duration-700 delay-150 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <div className="mb-8">
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#202A2E] mb-3">
                Precision Kraft Engineering from Concept to Prototype
              </h3>
              <p className="text-sm sm:text-base text-[#62574D] leading-relaxed">
                Whether shipping fragile automotive electronics, high-volume retail goods, or export produce, our engineering team designs structural dielines and fluting profiles matched to your exact payload weight and handling demands.
              </p>
            </div>

            {/* THREE-STEP PROCESS: "From Your Idea to Your Packaging" */}
            <div className="mb-8 p-6 sm:p-7 rounded-2xl bg-[#FAF7F2] border border-[#E4DED3]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#493629] mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A65D32]" />
                <span>From Your Idea to Your Packaging</span>
              </div>

              <div className="relative">
                {/* Connecting Terracotta Track */}
                <div className="hidden sm:block absolute top-4 bottom-4 left-4 w-px bg-linear-to-b from-[#A65D32] via-[#D1B48C] to-[#E4DED3]" />

                <div className="space-y-6">
                  {processSteps.map((step, idx) => (
                    <div key={step.num} className="flex items-start gap-4 sm:gap-5 relative group">
                      {/* Step Number Dot */}
                      <div className="w-8 h-8 rounded-full bg-[#493629] text-white flex items-center justify-center font-heading font-bold text-xs shrink-0 shadow-xs ring-4 ring-[#FAF7F2] group-hover:bg-[#A65D32] transition-colors">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-base sm:text-lg text-[#202A2E] mb-1 group-hover:text-[#A65D32] transition-colors">
                          {step.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive 3D Cardboard Box Assembly Animation (6 cols) */}
          <div
            className={`lg:col-span-6 transition-all duration-700 delay-300 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <div className="relative rounded-2xl bg-[#FAF7F2] border border-[#E4DED3] p-6 sm:p-8 overflow-hidden shadow-xs">

              {/* Assembly Status Header & Controls */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E4DED3]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#A65D32] animate-pulse" />
                  <span className="font-heading font-bold text-sm text-[#493629] uppercase tracking-wide">
                    Live Assembly Simulation
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1.5 rounded-lg bg-white border border-[#E4DED3] text-[#493629] hover:bg-[#F5EFE5] transition-colors text-xs font-semibold flex items-center gap-1"
                    title={isPlaying ? "Pause sequence" : "Play sequence"}
                  >
                    {isPlaying ? <RotateCcw className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span className="hidden sm:inline">{isPlaying ? "Auto" : "Paused"}</span>
                  </button>
                </div>
              </div>

              {/* STAGE CONTAINER WITH PERSPECTIVE */}
              <div className="relative w-full aspect-[4/3] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F5EFE5] to-[#E8D5B8]/40 rounded-xl border border-[#E4DED3]/80">

                {/* Kraft Corrugation Watermark Grid */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-25"
                  style={{
                    backgroundImage: "radial-gradient(#A65D32 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                {/* 3D Interactive Cardboard Assembly Visual */}
                <div className="relative w-72 sm:w-80 h-64 sm:h-72 flex items-center justify-center">

                  {/* STEP 0: Flat Dieline (Unfolded corrugated blank) */}
                  {assemblyStep === 0 && (
                    <div className="relative w-64 h-56 transition-all duration-700 ease-out flex items-center justify-center">
                      <div className="relative w-48 h-36 bg-[#D1B48C] border-2 border-dashed border-[#A65D32]/70 rounded-sm shadow-md flex items-center justify-center">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#493629]/70">
                          Raw Kraft Dieline
                        </span>
                        {/* Crease lines */}
                        <div className="absolute inset-x-0 top-1/3 border-b border-[#A65D32]/40" />
                        <div className="absolute inset-x-0 bottom-1/3 border-b border-[#A65D32]/40" />
                        <div className="absolute inset-y-0 left-1/3 border-r border-[#A65D32]/40" />
                        <div className="absolute inset-y-0 right-1/3 border-r border-[#A65D32]/40" />
                      </div>
                      {/* Flaps extending outward */}
                      <div className="absolute -top-4 w-28 h-6 bg-[#C4A47C] border border-[#A65D32]/50 rounded-t-sm" />
                      <div className="absolute -bottom-4 w-28 h-6 bg-[#C4A47C] border border-[#A65D32]/50 rounded-b-sm" />
                      <div className="absolute -left-5 h-24 w-6 bg-[#B89870] border border-[#A65D32]/50 rounded-l-sm" />
                      <div className="absolute -right-5 h-24 w-6 bg-[#B89870] border border-[#A65D32]/50 rounded-r-sm" />
                    </div>
                  )}

                  {/* STEP 1: Side Panels Folding Up */}
                  {assemblyStep === 1 && (
                    <div className="relative w-64 h-56 transition-all duration-700 ease-out flex items-center justify-center">
                      <div className="relative w-44 h-32 bg-[#D1B48C] border border-[#A65D32] shadow-lg flex items-center justify-center">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#493629]/80">
                          Base & Flutes
                        </span>
                      </div>
                      {/* Folding wall angles */}
                      <div className="absolute -left-2 w-8 h-32 bg-[#B89870] border border-[#A65D32] transform -skew-y-12 shadow-md" />
                      <div className="absolute -right-2 w-8 h-32 bg-[#A88860] border border-[#A65D32] transform skew-y-12 shadow-md" />
                      <div className="absolute -top-3 w-40 h-8 bg-[#C4A47C] border border-[#A65D32] transform -skew-x-12" />
                    </div>
                  )}

                  {/* STEP 2: Body Formed, Flaps Open */}
                  {assemblyStep === 2 && (
                    <div className="relative w-64 h-56 transition-all duration-700 ease-out flex items-center justify-center">
                      <div className="relative w-48 h-40">
                        {/* 3D Box Body */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D1B48C] to-[#B89870] rounded-sm border-2 border-[#493629] shadow-xl flex items-center justify-center">
                          <span className="text-xs font-bold text-[#493629]/90">
                            3D Shell Forming
                          </span>
                        </div>
                        {/* Open Top Flaps angled out */}
                        <div className="absolute -top-6 left-2 w-20 h-7 bg-[#E8D5B8] border border-[#493629] transform -rotate-12 rounded-t-sm" />
                        <div className="absolute -top-6 right-2 w-20 h-7 bg-[#C4A47C] border border-[#493629] transform rotate-12 rounded-t-sm" />
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Top Flaps Folding into Place */}
                  {assemblyStep === 3 && (
                    <div className="relative w-64 h-56 transition-all duration-700 ease-out flex items-center justify-center">
                      <div className="relative w-48 h-42 bg-gradient-to-br from-[#D1B48C] to-[#A88860] rounded-sm border-2 border-[#493629] shadow-2xl flex items-center justify-center">
                        {/* Folding top flaps meeting in center */}
                        <div className="absolute top-0 inset-x-0 h-10 bg-[#E8D5B8] border-b-2 border-[#493629] flex items-center justify-center">
                          <span className="text-[11px] font-bold tracking-wider text-[#A65D32]">
                            Interlocking Joint
                          </span>
                        </div>
                        <span className="text-xs font-bold text-[#493629] mt-6">
                          Seal & Joint Secured
                        </span>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: Completed 3D Kraft Corrugated Shipping Box with Measurement Lines */}
                  {assemblyStep === 4 && (
                    <div className="relative w-64 h-56 transition-all duration-700 ease-out flex items-center justify-center">
                      {/* Completed 3D Box Illustration */}
                      <div className="relative w-48 h-40 bg-gradient-to-br from-[#D1B48C] via-[#C4A47C] to-[#A88860] rounded-lg border-2 border-[#493629] shadow-2xl flex flex-col justify-between p-3 overflow-hidden">

                        {/* Simulated Tape / Seam */}
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-4 bg-[#B89870]/70 border-y border-[#493629]/30" />

                        {/* Kraft Branding Graphic */}
                        <div className="flex items-center justify-between z-10">
                          <span className="px-2 py-0.5 rounded bg-[#493629] text-[9px] font-bold text-white uppercase tracking-wider">
                            RSC 5-PLY
                          </span>
                          <span className="text-[10px] font-bold text-[#493629]">
                            BF 28+
                          </span>
                        </div>

                        <div className="z-10 text-center">
                          <span className="font-heading font-bold text-sm text-[#493629] tracking-wider block">
                            CUSTOM SPEC
                          </span>
                          <span className="text-[10px] text-[#493629]/80 font-mono">
                            450 × 300 × 280 mm
                          </span>
                        </div>

                        <div className="flex items-center justify-between text-[9px] font-semibold text-[#493629]/70 z-10">
                          <span>Payload: 45 kg</span>
                          <span>Virgin Kraft</span>
                        </div>
                      </div>

                      {/* Dimension Measurement Callouts (Animated) */}
                      {/* Width dimension line */}
                      <div className="absolute -bottom-6 inset-x-8 flex items-center justify-between text-[10px] font-mono font-bold text-[#A65D32]">
                        <span className="w-1.5 h-1.5 bg-[#A65D32] rounded-full" />
                        <div className="flex-1 h-px bg-[#A65D32] mx-2 relative flex items-center justify-center">
                          <span className="px-1.5 bg-[#FAF7F2] text-[9px]">L: 450 mm</span>
                        </div>
                        <span className="w-1.5 h-1.5 bg-[#A65D32] rounded-full" />
                      </div>

                      {/* Height dimension line */}
                      <div className="absolute -right-6 inset-y-6 flex flex-col items-center justify-between text-[10px] font-mono font-bold text-[#A65D32]">
                        <span className="w-1.5 h-1.5 bg-[#A65D32] rounded-full" />
                        <div className="flex-1 w-px bg-[#A65D32] my-1 relative flex items-center justify-center">
                          <span className="py-0.5 px-1 bg-[#FAF7F2] text-[9px] -rotate-90 whitespace-nowrap">H: 280 mm</span>
                        </div>
                        <span className="w-1.5 h-1.5 bg-[#A65D32] rounded-full" />
                      </div>
                    </div>
                  )}

                  {/* Soft Floor Shadow */}
                  <div className="absolute -bottom-4 w-44 sm:w-56 h-4 bg-[#493629]/20 rounded-full blur-md" />
                </div>

                {/* Live Stage Label Pill */}
                <div className="absolute bottom-3 inset-x-4 flex items-center justify-between px-3 py-1.5 bg-white/90 backdrop-blur-xs rounded-lg border border-[#E4DED3] text-xs">
                  <span className="font-semibold text-[#493629]">
                    {stepLabels[assemblyStep]}
                  </span>
                  <span className="font-mono text-[11px] text-[#A65D32] font-bold">
                    Step {assemblyStep + 1} of 5
                  </span>
                </div>
              </div>

              {/* Interactive Step Selector Pills */}
              <div className="mt-4 flex items-center justify-between gap-1.5 sm:gap-2">
                {[0, 1, 2, 3, 4].map((stepIdx) => (
                  <button
                    key={stepIdx}
                    type="button"
                    onClick={() => {
                      setAssemblyStep(stepIdx);
                      setIsPlaying(false);
                    }}
                    className={`flex-1 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-xs font-semibold transition-all ${assemblyStep === stepIdx
                      ? "bg-[#493629] text-white shadow-xs"
                      : "bg-white border border-[#E4DED3] text-[#62574D] hover:bg-[#F5EFE5]"
                      }`}
                  >
                    <span>0{stepIdx + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* 4 SUPPORTING CUSTOMIZATION FEATURE BLOCKS STRIP */}
        <div className="mb-14 sm:mb-16">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A65D32]">
              PACKAGING CAPABILITIES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {customizationFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 bg-[#FAF7F2] rounded-xl border border-[#E4DED3] hover:border-[#D1B48C] hover:bg-white hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-white border border-[#E4DED3] flex items-center justify-center text-[#A65D32] group-hover:bg-[#493629] group-hover:text-white group-hover:border-[#493629] transition-all duration-200 mb-3.5 shadow-2xs">
                      <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                    </div>
                    <h4 className="font-heading font-bold text-lg text-[#202A2E] mb-1.5 group-hover:text-[#A65D32] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* REFINED BOTTOM INQUIRY STRIP (Harmonious with White + Kraft Industrial Theme) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] border border-[#E4DED3] flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-white border border-[#E4DED3] flex items-center justify-center text-[#A65D32] shrink-0 shadow-2xs mx-auto sm:mx-0">
              <PackageCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#A65D32]/10 text-[#A65D32] text-[11px] font-bold uppercase tracking-wider mb-1.5">
                <span>Fast 24-Hour Design Turnaround</span>
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#202A2E] leading-tight">
                Have a Packaging Requirement?
              </h3>
              <p className="text-xs sm:text-sm text-[#62574D] mt-1 leading-relaxed">
                Share your idea with us. Let's discuss the right corrugated packaging solution for your business.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <Link
              href="#quote"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#493629] text-white font-heading font-semibold text-sm tracking-wide hover:bg-[#A65D32] transition-all duration-200 shadow-sm active:scale-95 group/btn"
            >
              <span>Request Custom Packaging</span>
              <ArrowRight className="w-4 h-4 text-[#D1B48C] group-hover/btn:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
