"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import BannerEmployeeMascot from "@/components/common/BannerEmployeeMascot";
import { GalleryBannerData, DEFAULT_GALLERY_DATA } from "@/data/galleryData";

interface GalleryHeroProps {
  data?: GalleryBannerData | null;
}

export default function GalleryHero({ data }: GalleryHeroProps = {}) {
  const fallback = DEFAULT_GALLERY_DATA.banner!;
  const titleRef = useRef<HTMLDivElement | null>(null);

  const title = data?.title || fallback.title || "Packaging Gallery";
  const breadcrumbRoot = data?.breadcrumbRoot || fallback.breadcrumbRoot || "Home";
  const breadcrumbCurrent = data?.breadcrumbCurrent || fallback.breadcrumbCurrent || "Gallery";
  const backgroundImage = data?.backgroundImage || fallback.backgroundImage || "/Gallery/gallery_banner_pano.png";
  const backgroundImageAlt =
    data?.backgroundImageAlt ||
    fallback.backgroundImageAlt ||
    "AAVRIT PACKAGING Visual Gallery - Products, Machinery & Manufacturing";
  const characterImage =
    data?.characterImage || fallback.characterImage || "/Gallery/character_gallery_curator.png";
  const characterAlt =
    data?.characterAlt || fallback.characterAlt || "Visual Showcase Curator - AAVRIT PACKAGING";
  const dialogueIcon = data?.dialogueIcon || fallback.dialogueIcon || "📸";
  const dialogueTitle = data?.dialogueTitle || fallback.dialogueTitle || "See Our Work in Action!";
  const dialogueSubtext =
    data?.dialogueSubtext ||
    fallback.dialogueSubtext ||
    "High-finish corrugated cartons, manufacturing & machinery";

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
          src={backgroundImage}
          alt={backgroundImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center pointer-events-none"
        />

        {/* Side Vignette Gradient for Text Contrast (Leaves photo montage on right untouched) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#202A2E]/95 via-[#202A2E]/65 to-transparent w-full sm:w-1/2 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

        {/* Banner Content Layout: Upper Title + Lower Speaking Mascot */}
        <div className="absolute inset-0 flex flex-col justify-between py-6 sm:py-8 pointer-events-none">
          {/* 1. UPPER AREA: Clean Heading & Breadcrumbs */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-auto">
            <div ref={titleRef} className="max-w-lg">
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-1.5 drop-shadow-md">
                {title}
              </h1>

              {/* Breadcrumb Navigation */}
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

          {/* 2. LOWER AREA: Visual Curator Speaking Mascot */}
          <BannerEmployeeMascot
            characterImage={characterImage}
            characterAlt={characterAlt}
            dialogueIcon={dialogueIcon}
            dialogueTitle={dialogueTitle}
            dialogueSubtext={dialogueSubtext}
            characterWidthClass="w-[115px] sm:w-[140px] lg:w-[160px]"
            shadowWidthClass="w-22 sm:w-26 lg:w-30"
          />
        </div>
      </div>
    </section>
  );
}
