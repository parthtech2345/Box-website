"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Calculator,
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CustomConfiguratorProps {
  data?: {
    badge?: string;
    title?: string;
    subtitle?: string;
    defaultLength?: string;
    defaultWidth?: string;
    defaultHeight?: string;
    defaultUnit?: "mm" | "inch";
    defaultPly?: string;
    defaultBoxStyle?: string;
    defaultPrinting?: string;
    defaultQuantity?: string;
    submitButtonText?: string;
    successMessage?: string;
    guaranteeNote?: string;
  };
}

export default function CustomConfigurator({ data }: CustomConfiguratorProps = {}) {
  const [unit, setUnit] = useState<"mm" | "inch">(data?.defaultUnit || "inch");
  const [length, setLength] = useState(data?.defaultLength || "12");
  const [width, setWidth] = useState(data?.defaultWidth || "10");
  const [height, setHeight] = useState(data?.defaultHeight || "8");
  const [ply, setPly] = useState(data?.defaultPly || "5-ply");
  const [boxStyle, setBoxStyle] = useState(data?.defaultBoxStyle || "rsc");
  const [printing, setPrinting] = useState(data?.defaultPrinting || "2-colour");
  const [quantity, setQuantity] = useState(data?.defaultQuantity || "2500");

  const [submitted, setSubmitted] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);

  const badge = data?.badge || "INTERACTIVE CONFIGURATOR";
  const title = data?.title || "Configure Your Custom Box Specifications";
  const subtitle =
    data?.subtitle ||
    "Input your box size, preferred wall ply, and printing requirements to generate an instant engineering summary and request an expedited quotation.";
  const submitButtonText =
    data?.submitButtonText || "Calculate & Request Specification Sheet";
  const successMessage =
    data?.successMessage ||
    "Configuration saved! Our engineering team will reach out with the dieline drawing.";
  const guaranteeNote =
    data?.guaranteeNote ||
    "We provide custom die-lines and sample boxes prior to commercial production runs to ensure 100% fit accuracy.";

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

      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (previewRef.current) {
        gsap.fromTo(
          previewRef.current,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: previewRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="custom-calculator"
      ref={sectionRef}
      className="w-full bg-[#FAF7F2] py-14 sm:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header 2-Column Split */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-12 border-b border-[#E4DED3]"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
              <Calculator className="w-3.5 h-3.5 text-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                {badge}
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              {title}
            </h2>
          </div>

          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* 2-Column Layout: Left Form + Right Live Preview Spec */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form (7 cols) */}
          <div
            ref={formRef}
            className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8D5B8] shadow-md"
          >
            <form onSubmit={handleCalculate} className="space-y-6">
              {/* Unit Toggle */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E4DED3]">
                <span className="text-sm font-bold text-[#202A2E]">
                  1. Dimension Units
                </span>
                <div className="inline-flex rounded-xl p-1 bg-[#FAF7F2] border border-[#E4DED3]">
                  <button
                    type="button"
                    onClick={() => setUnit("inch")}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      unit === "inch"
                        ? "bg-[#493629] text-white shadow-xs"
                        : "text-[#62574D] hover:text-[#202A2E]"
                    }`}
                  >
                    Inches (&ldquo;)
                  </button>
                  <button
                    type="button"
                    onClick={() => setUnit("mm")}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      unit === "mm"
                        ? "bg-[#493629] text-white shadow-xs"
                        : "text-[#62574D] hover:text-[#202A2E]"
                    }`}
                  >
                    Millimeters (mm)
                  </button>
                </div>
              </div>

              {/* Dimensions Input (L x W x H) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#62574D] mb-2">
                  Outer Dimensions (Length &times; Width &times; Height)
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <input
                      type="number"
                      step="any"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      placeholder="Length"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4DED3] bg-[#FAF7F2] text-sm text-[#202A2E] font-semibold focus:bg-white focus:border-[#A65D32] outline-none"
                      required
                    />
                    <span className="text-[11px] text-[#8C7E72] mt-1 block">L ({unit})</span>
                  </div>
                  <div>
                    <input
                      type="number"
                      step="any"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      placeholder="Width"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4DED3] bg-[#FAF7F2] text-sm text-[#202A2E] font-semibold focus:bg-white focus:border-[#A65D32] outline-none"
                      required
                    />
                    <span className="text-[11px] text-[#8C7E72] mt-1 block">W ({unit})</span>
                  </div>
                  <div>
                    <input
                      type="number"
                      step="any"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="Height"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4DED3] bg-[#FAF7F2] text-sm text-[#202A2E] font-semibold focus:bg-white focus:border-[#A65D32] outline-none"
                      required
                    />
                    <span className="text-[11px] text-[#8C7E72] mt-1 block">H ({unit})</span>
                  </div>
                </div>
              </div>

              {/* Ply Structure & Box Style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#62574D] mb-2">
                    Board Structure
                  </label>
                  <select
                    value={ply}
                    onChange={(e) => setPly(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4DED3] bg-[#FAF7F2] text-sm text-[#202A2E] font-semibold focus:bg-white focus:border-[#A65D32] outline-none cursor-pointer"
                  >
                    <option value="3-ply">3-Ply (Single Wall, 15-20 kg)</option>
                    <option value="5-ply">5-Ply (Double Wall, 35-50 kg)</option>
                    <option value="7-ply">7-Ply (Triple Wall, 80-120+ kg)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#62574D] mb-2">
                    Box Style
                  </label>
                  <select
                    value={boxStyle}
                    onChange={(e) => setBoxStyle(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4DED3] bg-[#FAF7F2] text-sm text-[#202A2E] font-semibold focus:bg-white focus:border-[#A65D32] outline-none cursor-pointer"
                  >
                    <option value="rsc">Regular Slotted Carton (RSC)</option>
                    <option value="die-cut">Roll-End Tuck Mailer (Die-Cut)</option>
                    <option value="auto-bottom">Auto Crash-Lock Bottom</option>
                    <option value="telescope">Two-Piece Full Telescope</option>
                  </select>
                </div>
              </div>

              {/* Printing & Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#62574D] mb-2">
                    Printing & Branding
                  </label>
                  <select
                    value={printing}
                    onChange={(e) => setPrinting(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4DED3] bg-[#FAF7F2] text-sm text-[#202A2E] font-semibold focus:bg-white focus:border-[#A65D32] outline-none cursor-pointer"
                  >
                    <option value="unprinted">Plain Kraft (Unprinted)</option>
                    <option value="1-colour">1 Colour Flexo Print</option>
                    <option value="2-colour">2 Colour Flexo Print</option>
                    <option value="4-colour">4 Colour Full Brand Graphics</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#62574D] mb-2">
                    Estimated Batch Quantity
                  </label>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g. 2000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4DED3] bg-[#FAF7F2] text-sm text-[#202A2E] font-semibold focus:bg-white focus:border-[#A65D32] outline-none"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#493629] hover:bg-[#A65D32] text-white text-sm font-bold tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{submitButtonText}</span>
                <ArrowRight className="w-4 h-4 text-[#D1B48C]" />
              </button>
            </form>
          </div>

          {/* Right Live Spec Summary (5 cols) */}
          <div
            ref={previewRef}
            className="lg:col-span-5 bg-[#202A2E] text-white rounded-3xl p-6 sm:p-8 border border-[#344247] shadow-xl space-y-6"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs uppercase tracking-wider font-mono text-[#D1B48C]">
                ENGINEERING SUMMARY
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#E97835]/20 text-[#E97835] font-semibold">
                Live Preview
              </span>
            </div>

            {/* Visual Dimension Callout */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-xs text-white/60 block mb-1">
                Custom Footprint
              </span>
              <div className="font-heading font-black text-2xl text-white">
                {length || 0} &times; {width || 0} &times; {height || 0}{" "}
                <span className="text-sm font-normal text-[#D1B48C]">{unit}</span>
              </div>
            </div>

            {/* Spec Table */}
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                <span className="text-white/60">Selected Architecture:</span>
                <span className="font-semibold text-white uppercase">{boxStyle}</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                <span className="text-white/60">Corrugation Ply:</span>
                <span className="font-semibold text-[#E97835]">{ply.toUpperCase()}</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                <span className="text-white/60">Branding Finish:</span>
                <span className="font-semibold text-white capitalize">{printing}</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                <span className="text-white/60">Batch Order Size:</span>
                <span className="font-semibold text-white">{quantity} units</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                <span className="text-white/60">Prototype Availability:</span>
                <span className="font-semibold text-emerald-400">Within 24 Hours</span>
              </div>
            </div>

            {submitted ? (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>{successMessage}</span>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-[#F5F2EB]/80 leading-relaxed">
                <Sparkles className="w-4 h-4 text-[#D1B48C] inline mr-1.5" />
                {guaranteeNote}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
