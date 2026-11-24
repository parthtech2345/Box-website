"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TermsHero() {
  const contentRef = useRef<HTMLDivElement | null>(null);

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
    <section className="relative w-full bg-[#202A2E] text-white overflow-hidden print:hidden">
      {/* Full Width Banner matching exact site banner standard using the contact workspace banner */}
      <div className="relative w-full h-[320px] sm:h-[360px] lg:h-[400px]">
        <Image
          src="/contact/contact_banner_pano.png"
          alt="AAVRIT PACKAGING Operations & Terms Workspace"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Side Vignette Gradient for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#202A2E]/90 via-[#202A2E]/65 to-transparent w-full sm:w-2/3" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

        {/* Banner Content: Clean Heading & Breadcrumbs */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div ref={contentRef} className="max-w-2xl">
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-2 drop-shadow-md">
                Terms & Conditions
              </h1>

              <p className="text-sm sm:text-base text-[#F5F2EB]/85 font-medium leading-relaxed mb-4 max-w-xl">
                Please read these terms and conditions carefully before using the AAVRIT PACKAGING website or submitting an inquiry for our packaging products and services.
              </p>

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
        </div>
      </div>
    </section>
  );
}
