"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BlogDetailBannerData } from "@/lib/blogData";

export default function BlogDetailHero({ data }: { data?: BlogDetailBannerData }) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const title = data?.title || "Blog Details";
  const breadcrumbRoot = data?.breadcrumbRoot || "Home";
  const breadcrumbCurrent = data?.breadcrumbCurrent || "Blog Details";
  const backgroundImage = data?.backgroundImage || "/blog/blog_banner_pano.png";
  const backgroundImageAlt = data?.backgroundImageAlt || "Blog Details Banner - AAVRIT PACKAGING";

  useEffect(() => {
    if (typeof window === "undefined" || !contentRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
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
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full bg-[#202A2E] text-white overflow-hidden">
      {/* Full Width Banner matching exact site banner standard */}
      <div className="relative w-full h-[320px] sm:h-[360px] lg:h-[400px]">
        <Image
          src={backgroundImage}
          alt={backgroundImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Side Vignette Gradient for Text Contrast (Leaves workspace image on right clear and bright) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#202A2E]/85 via-[#202A2E]/55 to-transparent w-full sm:w-1/2" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

        {/* Banner Content: Clean Small Heading & Breadcrumbs Only */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div ref={contentRef} className="max-w-lg">
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-2 drop-shadow-md">
                {title}
              </h1>

              {/* Breadcrumb Navigation: Home > Blogs > Blog Details */}
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
                <Link
                  href="/blogs"
                  className="hover:text-[#E97835] transition-colors drop-shadow-xs"
                >
                  Blogs
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-[#D1B48C]" />
                <span className="text-[#D1B48C] font-semibold drop-shadow-xs">
                  {breadcrumbCurrent}
                </span>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
