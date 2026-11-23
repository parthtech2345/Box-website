"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ProcessCard {
  title: string;
  description: string;
  image: string;
  step: string;
}

const PROCESS_DATA: ProcessCard[] = [
  {
    title: "Stage 01: Raw Material Paper Reel Selection",
    description: "Careful grading and testing of virgin kraft and recycled paper reels for bursting factor and moisture balance.",
    image: "/home/manufacturing-process/raw-material-selection.png",
    step: "Step 01",
  },
  {
    title: "Stage 02: Flute & Corrugated Board Formation",
    description: "Heated corrugating rollers forming precision fluted mediums and bonding liner papers with eco-friendly starch adhesive.",
    image: "/home/manufacturing-process/corrugation-board-formation.png",
    step: "Step 02",
  },
  {
    title: "Stage 03: Multi-Colour Flexographic Printing",
    description: "Inline high-speed flexo printing applying water-based inks for sharp brand graphics, handling icons, and barcodes.",
    image: "/home/manufacturing-process/printing-branding.png",
    step: "Step 03",
  },
  {
    title: "Stage 04: Quality Inspection & Palletized Dispatch",
    description: "Dimensional auditing, edge crush compliance checks, and stretch-wrapped palletizing ready for industrial shipment.",
    image: "/home/manufacturing-process/quality-inspection-dispatch.png",
    step: "Step 04",
  },
];

interface GalleryManufacturingProps {
  onSelectImage: (image: { title: string; category: string; description: string; image: string }) => void;
}

export default function GalleryManufacturing({ onSelectImage }: GalleryManufacturingProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current || !cardsRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll(".gallery-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAF7F2] py-14 sm:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header 2-Column Split */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-10 border-b border-[#E4DED3]">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                CONVERSION WORKFLOW & QUALITY
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              Manufacturing Process <br className="hidden sm:inline" />
              <span className="text-[#A65D32]">& Plant Operations</span>
            </h2>
          </div>

          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              From raw kraft paper reels through corrugation, rotary die-cutting, automated assembly, and palletized dispatch.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_DATA.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onSelectImage({ ...item, category: "Manufacturing Process" })}
              className="gallery-card group bg-white rounded-2xl border border-[#E4DED3] hover:border-[#A65D32] overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full aspect-[4/3] bg-[#FAF7F2] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#202A2E]/70 hover:bg-[#E97835] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A65D32] bg-white/90 px-2.5 py-0.5 rounded-full border border-[#E4DED3] font-semibold">
                      {item.step}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-heading font-bold text-base text-[#202A2E] mb-2 group-hover:text-[#A65D32] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
