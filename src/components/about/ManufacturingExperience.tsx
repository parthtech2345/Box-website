"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Layers,
  ShieldCheck,
  CheckCircle2,
  X,
  Sparkles,
  Info,
} from "lucide-react";
import {
  SHOWCASE_PROJECTS,
  ShowcaseProject,
} from "./showcaseData";

export default function ManufacturingExperience() {
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(
    null
  );

  // Duplicate items array for seamless 100% infinite continuous loop
  const duplicatedProjects = [...SHOWCASE_PROJECTS, ...SHOWCASE_PROJECTS];

  return (
    <section
      id="manufacturing-experience"
      className="relative py-14 sm:py-14 lg:py-14 bg-white text-[#202A2E] border-b border-[#E4DED3] overflow-hidden"
      aria-label="Manufacturing Experience Project Showcase"
    >
      {/* Subtle Kraft card ambient lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-[#E8D5B8]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#A65D32]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================================
            1. SECTION HEADER (Exact 2-Column Split Theme matching other sections)
        ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 sm:pb-8 mb-8 sm:mb-12 border-b border-[#E4DED3]">
          {/* Left Column: Eyebrow + Main Big Headline */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                OUR MANUFACTURING EXPERIENCE
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.15] tracking-tight">
              Packaging Solutions,{" "}
              <span className="text-[#A65D32]">Made with Purpose.</span>
            </h2>
          </div>

          {/* Right Column: Context Description with Accent Border */}
          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              Explore illustrative packaging applications demonstrating how
              different products and industries are served with precision-engineered
              corrugated packaging solutions.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. CONTINUOUS SMOOTH MARQUEE SLIDER (Auto-scrolls slowly, pauses on hover)
      ========================================================================= */}
      <div className="relative w-full overflow-hidden select-none py-2 group/slider">
        {/* Continuous Track */}
        <div className="animate-infinite-scroll pause-hover">
          {duplicatedProjects.map((project, idx) => (
            <div
              key={`${project.id}-${idx}`}
              className="w-[320px] sm:w-[380px] lg:w-[400px] shrink-0 px-3 sm:px-4"
            >
              <div
                onClick={() => setSelectedProject(project)}
                className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-[#FAF7F2] text-[#202A2E] shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E4DED3] hover:border-[#A65D32]/50 cursor-pointer"
              >
                {/* --- Image Section (100% clean photo, zero text overlay) --- */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#2A1F18]">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 640px) 320px, 400px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* --- Lower Information Panel --- */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-[#FAF7F2]">
                  <div>
                    {/* Category pill above title */}
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded bg-[#A65D32]/10 border border-[#A65D32]/25 text-[10px] font-bold text-[#A65D32] uppercase tracking-wider mb-2">
                      {project.category}
                    </div>

                    {/* Project Title placed cleanly below image */}
                    <h3 className="text-base sm:text-lg font-bold text-[#202A2E] tracking-tight leading-snug group-hover:text-[#A65D32] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed line-clamp-2 mb-3 font-normal">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Divider */}
                    <div className="h-px w-full bg-[#E8D5B8]/70 my-2.5" />

                    {/* Footer Action Row */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32] shrink-0" />
                        <span className="text-[11px] sm:text-xs font-semibold text-[#493629] truncate">
                          {project.applicationLabel}
                        </span>
                      </div>

                      <div className="inline-flex items-center gap-1 text-xs font-bold text-[#A65D32] group-hover:text-[#493629] transition-colors shrink-0 py-1 pl-2">
                        <span>VIEW DETAILS</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          3. ACCESSIBLE PROJECT DETAILS MODAL
      ========================================================================= */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#FAF7F2] text-[#202A2E] rounded-2xl overflow-hidden shadow-2xl border border-[#E8D5B8] transition-all transform scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close details"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative w-full aspect-[16/9] bg-[#2A1F18]">
              <Image
                src={selectedProject.imageSrc}
                alt={selectedProject.imageAlt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6">
                <div>
                  <div className="inline-block px-2.5 py-1 rounded bg-[#A65D32] text-white text-[11px] font-bold uppercase tracking-wider mb-2">
                    {selectedProject.category}
                  </div>
                  <h3
                    id="modal-title"
                    className="text-2xl sm:text-3xl font-black text-white tracking-tight"
                  >
                    {selectedProject.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              {/* Illustrative Notice */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#E8D5B8]/30 border border-[#A65D32]/25 text-[#493629]">
                <Info className="w-5 h-5 text-[#A65D32] shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed">
                  <strong>Illustrative Application Concept:</strong> This showcase
                  demonstrates our corrugated packaging engineering capability
                  for {selectedProject.applicationLabel}. It illustrates structural
                  design formats rather than customer-proprietary orders.
                </p>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#62574D] mb-2">
                  Application Overview
                </h4>
                <p className="text-sm sm:text-base text-[#202A2E] leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-[#E8D5B8]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#A65D32] uppercase mb-1">
                    <Layers className="w-4 h-4" />
                    <span>Board Specification</span>
                  </div>
                  <p className="text-xs text-[#202A2E] font-medium">
                    {selectedProject.technicalDetails.recommendedFlute}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E8D5B8]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#A65D32] uppercase mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Protection Focus</span>
                  </div>
                  <p className="text-xs text-[#202A2E] font-medium">
                    {selectedProject.technicalDetails.targetProtection}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E8D5B8]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#A65D32] uppercase mb-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Typical Applications</span>
                  </div>
                  <p className="text-xs text-[#202A2E] font-medium">
                    {selectedProject.technicalDetails.typicalUsage}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E8D5B8]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#A65D32] uppercase mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>Eco Impact</span>
                  </div>
                  <p className="text-xs text-[#202A2E] font-medium">
                    {selectedProject.technicalDetails.sustainabilityNote}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-lg bg-[#493629] hover:bg-[#A65D32] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
