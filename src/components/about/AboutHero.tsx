"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function AboutHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      aria-label="About Us Hero Banner"
      className="relative w-full overflow-hidden select-none min-h-[300px] sm:min-h-[340px] lg:h-[380px] flex items-center border-b border-[#E4DED3]"
    >
      {/* 1. Full-Width Background Banner Image (Clean with no highlight / overlay) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about/Professional Corrugated Packaging Display.png"
          alt="Aavrit Packaging professional corrugated packaging display banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* 2. Content Layer Container: Simple "About Us" and Breadcrumbs below */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex flex-col justify-center h-full">
        <div
          className={`flex flex-col items-start transition-all duration-700 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {/* Main Title: About Us */}
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-[#493629] leading-tight tracking-tight mb-2">
            About Us
          </h1>

          {/* Breadcrumb Navigation below About Us */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#62574D]"
          >
            <Link
              href="/"
              className="hover:text-[#A65D32] transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#A65D32]" />
            <span className="text-[#A65D32] font-semibold">About Us</span>
          </nav>
        </div>
      </div>
    </section>
  );
}
