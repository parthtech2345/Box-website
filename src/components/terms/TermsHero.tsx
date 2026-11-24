"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import BannerEmployeeMascot from "@/components/common/BannerEmployeeMascot";

export default function TermsHero() {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !contentRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section className="relative w-full bg-[#202A2E] text-white overflow-hidden print:hidden">
      {/* Full Width Banner matching exact site banner standard */}
      <div className="relative w-full h-[340px] sm:h-[380px] lg:h-[420px]">
        <Image
          src="/contact/contact_banner_pano.png"
          alt="AAVRIT PACKAGING Operations & Terms Workspace"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center pointer-events-none"
        />

        {/* Side Vignette Gradient for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#202A2E]/95 via-[#202A2E]/65 to-transparent w-full sm:w-2/3 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

        {/* Banner Content Layout: Upper Title + Lower Speaking Mascot */}
        <div className="absolute inset-0 flex flex-col justify-between py-6 sm:py-8 pointer-events-none">
          {/* Upper Area: Title & Breadcrumbs */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-auto">
            <div ref={contentRef} className="max-w-xl">
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-1.5 drop-shadow-md">
                Terms & Conditions
              </h1>

              {/* Breadcrumb Navigation: Home > Terms & Conditions */}
              <nav
                className="flex items-center gap-2 text-xs sm:text-sm text-[#F5F2EB]/90"
                aria-label="Breadcrumb"
              >
                <Link
                  href="/"
                  className="hover:text-[#E97835] transition-colors drop-shadow-xs"
                >
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-[#D1B48C]" />
                <span className="text-[#D1B48C] font-semibold drop-shadow-xs">
                  Terms & Conditions
                </span>
              </nav>
            </div>
          </div>

          {/* Lower Area: Operations & Terms Specialist Speaking Mascot */}
          <BannerEmployeeMascot
            characterImage="/contact/character_contact_support.png"
            characterAlt="Operations & Terms Specialist - AAVRIT PACKAGING"
            dialogueIcon="📋"
            dialogueTitle="Transparent B2B Terms!"
            dialogueSubtext="Clear manufacturing specs, quality guarantees & SLAs"
            characterWidthClass="w-[110px] sm:w-[135px] lg:w-[155px]"
            shadowWidthClass="w-20 sm:w-24 lg:w-28"
          />
        </div>
      </div>
    </section>
  );
}
