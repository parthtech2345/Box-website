"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";

interface MachineryDetailBannerProps {
  name: string;
  category: string;
  shortDescription: string;
}

export default function MachineryDetailBanner({
  name,
  category,
  shortDescription,
}: MachineryDetailBannerProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !contentRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section className="relative w-full bg-[#202A2E] text-white overflow-hidden">
      {/* Full Width Banner matching exact site banner standard */}
      <div className="relative w-full h-[320px] sm:h-[360px] lg:h-[400px]">
        <Image
          src="/Machinery/machinery_banner_pano.png"
          alt={`${name} Banner - AAVRIT PACKAGING`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Side Vignette Gradient for Text Contrast (Leaves machinery on the right clear and untouched) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#202A2E]/90 via-[#202A2E]/60 to-transparent w-full sm:w-1/2" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

        {/* Content: Left-aligned Title & Breadcrumbs */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div ref={contentRef} className="max-w-xl">
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-2 drop-shadow-md">
                {name}
              </h1>

              {/* Breadcrumb Effect: Home > Machinery & Technology > {name} */}
              <nav
                className="flex items-center gap-2 text-xs sm:text-sm text-[#F5F2EB]/90 mb-2 flex-wrap"
                aria-label="Breadcrumb"
              >
                <Link
                  href="/"
                  className="hover:text-[#E97835] transition-colors drop-shadow-xs"
                >
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-[#D1B48C]" />
                <Link
                  href="/machinery"
                  className="hover:text-[#E97835] transition-colors drop-shadow-xs"
                >
                  Machinery & Technology
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-[#D1B48C]" />
                <span className="text-[#D1B48C] font-semibold drop-shadow-xs">
                  {name}
                </span>
              </nav>

              <p className="text-xs sm:text-sm text-[#F5F2EB]/85 leading-relaxed hidden sm:block">
                {shortDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
