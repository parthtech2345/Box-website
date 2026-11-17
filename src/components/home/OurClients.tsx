"use client";

import React from "react";
import Image from "next/image";
import { CLIENT_PARTNERS } from "@/data/clients";

export default function OurClients() {
  // Duplicate array to achieve an infinite seamless continuous loop
  const marqueeLogos = [...CLIENT_PARTNERS, ...CLIENT_PARTNERS, ...CLIENT_PARTNERS];

  return (
    <section
      id="clients"
      className="w-full bg-[#FFFFFF] py-14 sm:py-16 border-b border-[#E4DED3] relative overflow-hidden"
      aria-label="Trusted by Businesses"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        {/* Section Header: Matching 2-Column Split */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#E4DED3]">
          {/* Left Column: Eyebrow + Main Big Headline */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/20 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                OUR CLIENTS
              </span>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#202A2E] leading-tight">
              Trusted by <span className="text-[#A65D32]">Businesses</span>
            </h2>
          </div>

          {/* Right Column: Context Description */}
          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              Building reliable packaging partnerships across industries.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Carousel Container with Gradient Edge Fades */}
      <div className="relative w-full overflow-hidden group">
        {/* Left Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

        {/* Right Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Continuous Scrolling Track (Pauses on group hover or individual logo hover) */}
        <div
          className="flex items-center gap-8 sm:gap-12 w-max animate-marquee group-hover:[animation-play-state:paused]"
          style={{ willChange: "transform" }}
        >
          {marqueeLogos.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0 flex items-center justify-center px-4 py-2"
            >
              <div
                className="relative h-12 sm:h-14 w-48 sm:w-56 flex items-center justify-center transition-all duration-300 filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-105 cursor-pointer"
                title={`${client.name} • ${client.industry} (${client.location})`}
              >
                <Image
                  src={client.logo}
                  alt={client.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 190px, 224px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS Animation Keyframes for Continuous Smooth Infinite Scroll */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }

        .animate-marquee {
          animation: marquee 32s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
            transform: none;
            overflow-x: auto;
          }
        }
      `}</style>
    </section>
  );
}
