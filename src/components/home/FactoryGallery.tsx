"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Eye, Layers, Factory, CheckCircle2 } from "lucide-react";

export default function FactoryGallery() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-[#FFFFFF] py-14 border-b border-[#E4DED3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202A2E]/10 text-[#202A2E] text-xs font-bold uppercase tracking-wider mb-3">
            Facility Tour
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-tight mb-4">
            Take a Look Inside Our Manufacturing Facility
          </h2>
          <p className="text-base sm:text-lg text-[#687378] font-normal leading-relaxed">
            Experience our high-speed corrugating line, flexo printing units, and streamlined dispatch operations in India through high-definition visual tours.
          </p>
        </div>

        {/* Large Featured Video / Gallery Banner */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[300px] sm:min-h-[420px] rounded-2xl overflow-hidden border border-[#D1B48C] shadow-2xl mb-8 group">
          <Image
            src="/images/factory-team-india.png"
            alt="Manufacturing Facility Plant Tour - Indian factory operations"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-[#202A2E]/40 group-hover:bg-[#202A2E]/30 transition-colors" />

          {/* Video Play Interactive Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E97835] hover:bg-[#d46927] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group/btn"
              aria-label="Play Plant Video Preview"
            >
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
            </button>
            <span className="font-heading font-bold text-xl sm:text-2xl text-white mt-4 drop-shadow-md">
              {isPlaying ? "Simulating Virtual Plant Walkthrough..." : "Watch 2-Minute Facility Walkthrough"}
            </span>
            <span className="text-xs sm:text-sm text-[#F5F2EB]/90 mt-1 max-w-md drop-shadow">
              Automated reel unwinding, steam corrugation, die-cutting, and pallet loading.
            </span>
          </div>
        </div>

        {/* 3 Secondary Visual Cards (Factory, QA, Dispatch) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F5F2EB] rounded-xl overflow-hidden border border-[#E4DED3] group">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/images/factory-line-india.png"
                alt="Automated corrugation line"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4">
              <div className="font-heading font-bold text-base text-[#202A2E]">
                High-Speed Corrugation Line
              </div>
              <p className="text-xs text-[#687378] mt-1">
                250 meters/minute continuous single & double-wall fluting.
              </p>
            </div>
          </div>

          <div className="bg-[#F5F2EB] rounded-xl overflow-hidden border border-[#E4DED3] group">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/images/indian-engineer-testing.png"
                alt="Quality assurance testing laboratory"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4">
              <div className="font-heading font-bold text-base text-[#202A2E]">
                Quality Testing & Burst Testing
              </div>
              <p className="text-xs text-[#687378] mt-1">
                Every batch certified for BF, ECT, and moisture before dispatch.
              </p>
            </div>
          </div>

          <div className="bg-[#F5F2EB] rounded-xl overflow-hidden border border-[#E4DED3] group">
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/images/warehouse-dispatch-india.png"
                alt="Palletized warehouse and dispatch logistics"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-4">
              <div className="font-heading font-bold text-base text-[#202A2E]">
                Palletized Warehouse & Dispatch
              </div>
              <p className="text-xs text-[#687378] mt-1">
                Weatherproof indoor loading bays with automated strapping.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
