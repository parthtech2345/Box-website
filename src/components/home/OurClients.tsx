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
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 border-b border-[#E4DED3] relative overflow-hidden"
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
      <div className="relative w-full overflow-hidden py-4">
        {/* Left Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

        {/* Right Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Continuous Scrolling Track */}
        <div
          className="carousel-track flex items-center gap-12 sm:gap-20 w-max"
          style={{ willChange: "transform" }}
        >
          {marqueeLogos.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="logo-item flex-shrink-0 flex items-center justify-center cursor-pointer"
            >
              <div
                className="relative h-12 sm:h-14 w-48 sm:w-56 flex items-center justify-center transition-transform duration-300 hover:scale-105"
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

      {/* Custom CSS Animation Keyframes & Hover Pause */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }

        .carousel-track {
          animation: marquee 32s linear infinite;
        }

        /* Pauses ONLY when the user directly hovers on a logo */
        .carousel-track:has(.logo-item:hover) {
          animation-play-state: paused !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .carousel-track {
            animation: none;
            transform: none;
            overflow-x: auto;
          }
        }
      `}</style>
    </section>
  );
}
