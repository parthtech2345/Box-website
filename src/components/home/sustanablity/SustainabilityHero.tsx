"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import BannerEmployeeMascot from "@/components/common/BannerEmployeeMascot";
import { SustainabilityBannerData } from "@/data/sustainabilityData";

interface SustainabilityHeroProps {
  data?: SustainabilityBannerData | null;
}

export default function SustainabilityHero({ data }: SustainabilityHeroProps = {}) {
  const titleRef = useRef<HTMLDivElement | null>(null);

  const bannerImage = data?.backgroundImage || "/Sustanablity/sustainability_banner_pano.png";
  const bannerAlt = data?.backgroundImageAlt || "Sustainable Corrugated Packaging - AAVRIT PACKAGING";
  const title = data?.title || "Sustainability";
  const breadcrumbRoot = data?.breadcrumbRoot || "Home";
  const breadcrumbCurrent = data?.breadcrumbCurrent || "Sustainability";

  const characterImage = data?.characterImage || "/Sustanablity/character_sustainability_officer.png";
  const characterAlt = data?.characterAlt || "Sustainability Specialist - AAVRIT PACKAGING";
  const dialogueIcon = data?.dialogueIcon || "🌱";
  const dialogueTitle = data?.dialogueTitle || "100% Recyclable Kraft!";
  const dialogueSubtext = data?.dialogueSubtext || "Eco-friendly, biodegradable & FSC-aligned production";

  useEffect(() => {
    if (typeof window === "undefined" || !titleRef.current) return;

    gsap.fromTo(
      titleRef.current,
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
    <section className="relative w-full bg-[#202A2E] text-white overflow-hidden">
      {/* Full Width Banner matching exact site banner standard */}
      <div className="relative w-full h-[340px] sm:h-[380px] lg:h-[420px]">
        <Image
          src={bannerImage}
          alt={bannerAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center pointer-events-none"
        />

        {/* Side Vignette Gradient for Text Contrast (Leaves eco imagery on right clear and bright) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#202A2E]/95 via-[#202A2E]/65 to-transparent w-full sm:w-3/5 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

        {/* Banner Content Layout: Upper Title + Lower Speaking Mascot */}
        <div className="absolute inset-0 flex flex-col justify-between py-6 sm:py-8 pointer-events-none">
          {/* 1. UPPER AREA: Clean Heading & Breadcrumbs */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-auto">
            <div ref={titleRef} className="max-w-lg">
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-1.5 drop-shadow-md">
                {title}
              </h1>

              {/* Breadcrumb Navigation: Home > Sustainability */}
              <nav
                className="flex items-center gap-2 text-xs sm:text-sm text-[#F5F2EB]/90"
                aria-label="Breadcrumb"
              >
                <Link
                  href="/"
                  className="hover:text-[#E97835] transition-colors drop-shadow-xs"
                >
                  {breadcrumbRoot}
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-[#D1B48C]" />
                <span className="text-[#D1B48C] font-semibold drop-shadow-xs">
                  {breadcrumbCurrent}
                </span>
              </nav>
            </div>
          </div>

          {/* 2. LOWER AREA: Eco-Packaging Sustainability Specialist Speaking Mascot */}
          <BannerEmployeeMascot
            characterImage={characterImage}
            characterAlt={characterAlt}
            dialogueIcon={dialogueIcon}
            dialogueTitle={dialogueTitle}
            dialogueSubtext={dialogueSubtext}
            characterWidthClass="w-[95px] sm:w-[115px] lg:w-[130px]"
            shadowWidthClass="w-18 sm:w-22 lg:w-26"
          />
        </div>
      </div>
    </section>
  );
}
