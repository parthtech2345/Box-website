"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ZoomIn, Package } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ProductCard {
  title: string;
  description: string;
  image: string;
  tag: string;
}

const PRODUCTS_DATA: ProductCard[] = [
  {
    title: "3-Ply Single Wall Corrugated Box",
    description: "Lightweight and dependable shipping cartons engineered for retail distribution, consumer goods, and e-commerce packaging.",
    image: "/Product/items/3-ply-corrugated-boxes.png",
    tag: "Single Wall",
  },
  {
    title: "5-Ply Double Wall Heavy-Duty Box",
    description: "Dual fluting layers delivering superior compression strength, stackability, and puncture resistance for heavier freight.",
    image: "/Product/items/5-ply-corrugated-boxes.png",
    tag: "Double Wall",
  },
  {
    title: "7-Ply Triple Wall Export Container",
    description: "Maximum-caliper heavy industrial containers designed for automotive parts, machinery exports, and heavy payload transit.",
    image: "/Product/items/7-ply-corrugated-boxes.png",
    tag: "Triple Wall",
  },
  {
    title: "Precision Die-Cut Mailer Box",
    description: "Sharp crease lines and self-locking tab closures engineered for direct-to-consumer presentation and unboxing aesthetics.",
    image: "/Product/items/die-cut-boxes.png",
    tag: "Die-Cut",
  },
];

interface GalleryProductsProps {
  onSelectImage: (image: { title: string; category: string; description: string; image: string }) => void;
}

export default function GalleryProducts({ onSelectImage }: GalleryProductsProps) {
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
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header 2-Column Split */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-10 border-b border-[#E4DED3]">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                CORRUGATED BOX PRODUCTS
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              Products & <br className="hidden sm:inline" />
              <span className="text-[#A65D32]">Packaging Range</span>
            </h2>
          </div>

          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              From lightweight 3-ply mailers to reinforced 7-ply export containers, explore our core corrugated packaging formats engineered for strength.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS_DATA.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onSelectImage({ ...item, category: "Products & Packaging" })}
              className="gallery-card group bg-[#FAF7F2] rounded-2xl border border-[#E4DED3] hover:border-[#A65D32] overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full aspect-[4/3] bg-white overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-4 group-hover:scale-106 transition-transform duration-500 ease-out"
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
          ))}
        </div>
      </div>
    </section>
  );
}
