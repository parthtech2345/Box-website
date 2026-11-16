"use client";

import React, { useState } from "react";
import { Layers, Info, Check, ArrowRight } from "lucide-react";

export default function BoxConstruction() {
  const [activePly, setActivePly] = useState<"3ply" | "5ply" | "7ply">("5ply");

  const plyData = {
    "3ply": {
      name: "3-Ply Single Wall Corrugated Board",
      layers: "2 Liners + 1 Fluted Medium",
      capacity: "Up to 15-20 kg Carrying Load",
      usage: "E-commerce mailers, footwear boxes, retail shelf packaging, lightweight FMCG.",
      structure: [
        { type: "liner", label: "Top Outer Kraft Liner (140 - 250 GSM)" },
        { type: "flute", label: "Fluted Wave Medium (B / C / E Flute, 120 - 150 GSM)" },
        { type: "liner", label: "Bottom Inner Liner (120 - 180 GSM)" },
      ],
      caliper: "1.5 mm - 4.0 mm",
      bf: "18 - 24 BF",
    },
    "5ply": {
      name: "5-Ply Double Wall Corrugated Board",
      layers: "3 Liners + 2 Fluted Mediums (B+C or B+E Flute)",
      capacity: "Up to 45-60 kg Stacking Load",
      usage: "Standard master shippers, pharmaceutical export, consumer appliances, industrial spare parts.",
      structure: [
        { type: "liner", label: "Top Outer Heavy Kraft Liner (180 - 300 GSM)" },
        { type: "flute", label: "Outer Flute Medium (B-Flute for puncture resistance)" },
        { type: "liner", label: "Center Intermediate Liner (140 - 200 GSM)" },
        { type: "flute", label: "Inner Flute Medium (C-Flute for stacking compression)" },
        { type: "liner", label: "Bottom Inner Kraft Liner (140 - 220 GSM)" },
      ],
      caliper: "6.0 mm - 7.5 mm",
      bf: "22 - 32 BF",
    },
    "7ply": {
      name: "7-Ply Triple Wall Corrugated Board",
      layers: "4 Liners + 3 Fluted Mediums",
      capacity: "Up to 500 - 1,200 kg Extreme Load",
      usage: "Heavy automotive gearboxes, metal castings, solar inverters, export sea-freight crates.",
      structure: [
        { type: "liner", label: "Top Outer Virgin Kraft Liner (250 - 400 GSM)" },
        { type: "flute", label: "First Flute Medium (A or C Flute)" },
        { type: "liner", label: "Second Liner (180 - 250 GSM)" },
        { type: "flute", label: "Second Flute Medium (B Flute)" },
        { type: "liner", label: "Third Liner (180 - 250 GSM)" },
        { type: "flute", label: "Third Flute Medium (C Flute)" },
        { type: "liner", label: "Bottom Heavy Liner (200 - 350 GSM)" },
      ],
      caliper: "12.0 mm - 15.0 mm",
      bf: "28 - 40+ BF",
    },
  };

  const technicalMetrics = [
    {
      term: "Ply",
      definition: "The number of paper layers (liners + fluting) bonded together to form the board.",
    },
    {
      term: "Flute",
      definition: "The wave-shaped arched paper inside that provides compression strength, cushioning, and insulation.",
    },
    {
      term: "GSM",
      definition: "Grams per Square Meter – Measures paper substance and weight density across liners and fluting.",
    },
    {
      term: "BF (Burst Factor)",
      definition: "Bursting strength of paper indicating the pressure in kg/cm² a sheet can withstand before rupture.",
    },
    {
      term: "ECT (Edge Crush Test)",
      definition: "A standardized measure of cross-directional crushing resistance directly predicting box stacking strength.",
    },
  ];

  return (
    <section id="construction" className="w-full bg-[#202A2E] text-white py-14 border-b border-[#202A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D1B48C]/15 text-[#D1B48C] text-xs font-bold uppercase tracking-wider mb-3">
            Technical Engineering
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            Understanding What Makes a Strong Box
          </h2>
          <p className="text-base sm:text-lg text-[#F5F2EB]/80 font-normal leading-relaxed">
            The strength of corrugated packaging is an exact science of liner substance, fluting geometry, and adhesive bonding. Explore our layer architectures below.
          </p>
        </div>

        {/* Interactive Ply Selector Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {(["3ply", "5ply", "7ply"] as const).map((plyKey) => (
            <button
              key={plyKey}
              type="button"
              onClick={() => setActivePly(plyKey)}
              className={`px-6 py-3 rounded-xl font-heading font-bold text-lg transition-all duration-200 flex items-center gap-2 ${activePly === plyKey
                  ? "bg-[#E97835] text-white shadow-lg shadow-[#E97835]/30 scale-105"
                  : "bg-white/5 text-[#F5F2EB]/70 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
            >
              <Layers className="w-5 h-5" />
              <span>{plyKey.toUpperCase()} Single/Multi Wall</span>
            </button>
          ))}
        </div>

        {/* Interactive Exploded Cross Section Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">

          {/* Exploded Board Layer Graphic (7 cols) */}
          <div className="lg:col-span-7 bg-[#273338] rounded-2xl p-6 sm:p-8 border border-[#D1B48C]/30 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#E97835]">
                  Cross-Section Architecture
                </span>
                <h3 className="font-heading font-bold text-2xl text-white">
                  {plyData[activePly].name}
                </h3>
              </div>
              <span className="px-3 py-1 bg-[#D1B48C]/20 text-[#D1B48C] text-xs font-semibold rounded-md border border-[#D1B48C]/30">
                {plyData[activePly].layers}
              </span>
            </div>

            {/* Visual Cross-Section Layer Representation */}
            <div className="space-y-2 py-4">
              {plyData[activePly].structure.map((layer, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-lg border transition-all duration-300 flex items-center justify-between ${layer.type === "liner"
                      ? "bg-[#D1B48C]/90 text-[#202A2E] font-semibold border-[#D1B48C] shadow-sm"
                      : "bg-[#202A2E] text-[#D1B48C] font-mono text-sm border-dashed border-[#D1B48C]/50 pl-8 relative"
                    }`}
                >
                  <div className="flex items-center gap-2.5">
                    {layer.type === "flute" && (
                      <span className="text-[#E97835] font-bold text-lg select-none">
                        ∿∿∿
                      </span>
                    )}
                    <span className="text-xs sm:text-sm">{layer.label}</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-black/10 font-bold">
                    {layer.type === "liner" ? "Linerboard" : "Fluting"}
                  </span>
                </div>
              ))}
            </div>

            {/* Specifications Strip */}
            <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <span className="text-[#687378] block">Board Thickness</span>
                <span className="text-white font-bold text-sm">{plyData[activePly].caliper}</span>
              </div>
              <div>
                <span className="text-[#687378] block">Burst Factor (BF)</span>
                <span className="text-[#D1B48C] font-bold text-sm">{plyData[activePly].bf}</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[#687378] block">Weight Range</span>
                <span className="text-[#E97835] font-bold text-sm">{plyData[activePly].capacity}</span>
              </div>
            </div>
          </div>

          {/* Right Side: Engineering Applications & Advice (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <h4 className="font-heading font-bold text-xl text-[#D1B48C] mb-3">
                Recommended Applications
              </h4>
              <p className="text-sm text-[#F5F2EB]/90 leading-relaxed mb-4">
                {plyData[activePly].usage}
              </p>

              <div className="space-y-2 text-xs text-[#F5F2EB]/80">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#7B8D78]" />
                  <span>Tested against severe Indian transport shock & vibration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#7B8D78]" />
                  <span>Stacking strength calculated per ISO compression standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#7B8D78]" />
                  <span>Available with water-resistant wax or polymer barrier coatings</span>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="#quote"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#E97835] hover:text-white transition-colors"
                >
                  <span>Request Custom Flute Spec Sheet</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Flute Type Guide */}
            <div className="p-5 bg-[#273338] rounded-xl border border-white/10 text-xs">
              <div className="font-bold text-white mb-2 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-[#E97835]" />
                <span>Common Flute Types in Our Plant</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center pt-2">
                <div className="p-2 rounded bg-black/20">
                  <span className="font-bold text-[#D1B48C] block text-sm">B-Flute</span>
                  <span className="text-[10px] text-[#687378]">3mm • High Puncture Resistance</span>
                </div>
                <div className="p-2 rounded bg-black/20">
                  <span className="font-bold text-[#D1B48C] block text-sm">C-Flute</span>
                  <span className="text-[10px] text-[#687378]">4mm • Superior Stacking Load</span>
                </div>
                <div className="p-2 rounded bg-black/20">
                  <span className="font-bold text-[#D1B48C] block text-sm">E-Flute</span>
                  <span className="text-[10px] text-[#687378]">1.5mm • Fine Graphics / Mailers</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Section 4 Footer: Glossary of Technical Terms */}
        <div className="pt-8 border-t border-white/10">
          <div className="text-xs uppercase tracking-wider font-bold text-[#D1B48C] mb-4">
            Industrial Corrugation Terminology (GSM, BF, ECT Explained)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {technicalMetrics.map((metric, i) => (
              <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-[#D1B48C]/40 transition-colors">
                <span className="font-heading font-bold text-base text-[#E97835] block mb-1">
                  {metric.term}
                </span>
                <p className="text-xs text-[#F5F2EB]/70 leading-normal">
                  {metric.definition}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
