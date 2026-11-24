"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import Card3DTilt from "@/components/ui/Card3DTilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CustomCard {
  title: string;
  description: string;
  image: string;
  tag: string;
}

const CUSTOM_DATA: CustomCard[] = [
  {
    title: "Minimal Kraft Packaging Arrangement",
    description: "Bespoke engineered kraft corrugated packaging designed for direct-to-consumer presentation and branded retail shipments.",
    image: "/custom pack/Minimal Kraft Packaging Arrangement.png",
    tag: "Bespoke Kraft",
  },
  {
    title: "Custom Prototyped Box Formats",
    description: "Custom dimension CAD samples and box geometries fabricated to match exact client product dimensions and drop-test thresholds.",
    image: "/about/Professional Corrugated Packaging Display.png",
    tag: "CAD Prototyping",
  },
  {
    title: "Crash-Lock Auto-Bottom Cartons",
    description: "Instant pre-glued bottom base designed for rapid manual or semi-automated packaging line fulfillment with zero tape.",
    image: "/Product/items/auto-bottom-boxes.png",
    tag: "Auto-Lock",
  },
  {
    title: "Self-Locking Shipping Boxes",
    description: "Interlocking side tabs and roll-over front flaps providing structural reinforcement and tamper-evident transit security.",
    image: "/Product/items/real-returnable-self-locking-shipping-boxes.png",
    tag: "Self-Locking",
  },
];

interface GalleryCustomProps {
  onSelectImage: (image: { title: string; category: string; description: string; image: string }) => void;
}

export default function GalleryCustom({ onSelectImage }: GalleryCustomProps) {
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
                BESPOKE PACKAGING ENGINEERING
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              Custom Packaging <br className="hidden sm:inline" />
              <span className="text-[#A65D32]">Prototyping & Design</span>
            </h2>
          </div>

          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              Tailored box geometries, interlocking tabs, and internal protective partitions created to match specific customer product specifications.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CUSTOM_DATA.map((item, idx) => (
            <Card3DTilt key={idx} className="h-full rounded-2xl">
              <div
                onClick={() => onSelectImage({ ...item, category: "Custom Packaging" })}
                className="gallery-card group h-full bg-white rounded-2xl border border-[#E4DED3] hover:border-[#A65D32] overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
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
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#202A2E] bg-white/90 px-2 py-0.5 rounded border border-[#E4DED3]">
                        {item.tag}
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
            </Card3DTilt>
          ))}
        </div>
      </div>
    </section>
  );
}
