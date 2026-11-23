"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import { MachineGalleryImage } from "@/data/machineryData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface MachineryGalleryProps {
  gallery: MachineGalleryImage[];
  machineName: string;
}

export default function MachineryGallery({
  gallery,
  machineName,
}: MachineryGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<MachineGalleryImage | null>(
    null
  );
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 25 },
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

      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!gallery || gallery.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAF7F2] py-14 sm:py-14 lg:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className="max-w-2xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
              PLANT PHOTOGRAPHY
            </span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#202A2E] leading-tight mb-3">
            Equipment <span className="text-[#A65D32]">Image Gallery</span>
          </h2>

          <p className="text-sm sm:text-base text-[#62574D] leading-relaxed">
            Visual inspection views of the {machineName} in our production environment. Click any image to view in high resolution.
          </p>
        </div>

        {/* 3-Image Gallery Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {gallery.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(img)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden border border-[#E4DED3] bg-white shadow-xs hover:border-[#A65D32] hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF7F2]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#202A2E] flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-4 h-4 text-[#A65D32]" />
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white border-t border-[#E4DED3]/60">
                <span className="text-xs font-bold text-[#202A2E] group-hover:text-[#A65D32] transition-colors block">
                  {img.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#202A2E] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full bg-black">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 sm:p-5 flex items-center justify-between bg-[#202A2E] text-white">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {selectedImage.caption}
                </h4>
                <p className="text-xs text-[#D1B48C]">{machineName}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
