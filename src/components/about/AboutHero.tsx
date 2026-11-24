"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";

export default function AboutHero() {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const workerRef = useRef<HTMLDivElement | null>(null);
  const shadowRef = useRef<HTMLDivElement | null>(null);
  const speechBubbleRef = useRef<HTMLDivElement | null>(null);

  const playGreeting = () => {
    if (!workerRef.current || !shadowRef.current || !speechBubbleRef.current) return;

    // Reset initial states
    gsap.set(workerRef.current, { y: 8, opacity: 0, rotation: 0 });
    gsap.set(shadowRef.current, { opacity: 0, scale: 0.8 });
    gsap.set(speechBubbleRef.current, { scale: 0, opacity: 0, transformOrigin: "bottom left" });

    const tl = gsap.timeline({ delay: 0.25 });

    // Step 1: Employee smoothly fades in standing naturally (NO walking!)
    tl.to(
      [workerRef.current, shadowRef.current],
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      0
    );

    // Step 2: Employee waves his hand ("Hii!")
    tl.to(
      workerRef.current,
      {
        rotation: -3,
        duration: 0.22,
        ease: "sine.inOut",
      },
      0.45
    )
      .to(
        workerRef.current,
        {
          rotation: 3,
          duration: 0.2,
          yoyo: true,
          repeat: 3,
          ease: "sine.inOut",
        },
        0.67
      )
      .to(
        workerRef.current,
        {
          rotation: 0,
          duration: 0.28,
          ease: "power2.out",
        },
        1.3
      );

    // Step 3: Speech bubble pops out directly from employee's mouth as he speaks!
    tl.to(
      speechBubbleRef.current,
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.8)",
      },
      0.65
    );
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Title entrance
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
      );
    }

    playGreeting();
  }, []);

  return (
    <section className="relative w-full bg-[#202A2E] text-white overflow-hidden">
      {/* Full Width Banner matching standard height */}
      <div className="relative w-full h-[340px] sm:h-[380px] lg:h-[420px]">
        {/* Background Real Packaging Display */}
        <Image
          src="/about/Professional Corrugated Packaging Display.png"
          alt="About Us Banner - AAVRIT PACKAGING"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center pointer-events-none"
        />

        {/* Side Vignette Gradient for Text & Employee Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#202A2E]/95 via-[#202A2E]/65 to-transparent w-full sm:w-1/2 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

        {/* Banner Content Layout: Upper Title + Lower Speaking Employee */}
        <div className="absolute inset-0 flex flex-col justify-between py-6 sm:py-8">
          {/* 1. UPPER AREA: Title & Breadcrumbs */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div ref={titleRef} className="max-w-md">
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-1.5 drop-shadow-md">
                About Us
              </h1>

              {/* Breadcrumbs: Home > About Us */}
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
                  About Us
                </span>
              </nav>
            </div>
          </div>

          {/* 2. LOWER AREA: Standing Employee Speaking the Dialogue */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-end gap-3 sm:gap-4 pointer-events-auto">
            {/* Employee Character with Soft Ground Shadow */}
            <div
              className="relative flex flex-col items-center shrink-0 cursor-pointer"
              title="Click to wave & speak again!"
              onClick={playGreeting}
            >
              <div
                ref={workerRef}
                className="relative w-[110px] sm:w-[135px] lg:w-[155px] h-[165px] sm:h-[205px] lg:h-[240px] z-20 pointer-events-none"
              >
                <Image
                  src="/about/worker-mascot-clean.png"
                  alt="AAVRIT PACKAGING Employee Welcoming Visitors"
                  fill
                  priority
                  sizes="(max-width: 640px) 110px, (max-width: 1024px) 135px, 155px"
                  className="object-contain object-bottom drop-shadow-2xl pointer-events-none"
                />
              </div>

              {/* Ground Contact Shadow (Clean, ZERO white halos) */}
              <div
                ref={shadowRef}
                className="w-22 sm:w-28 lg:w-32 h-3.5 bg-black/60 rounded-full blur-[4px] -mt-2 z-10"
              />
            </div>

            {/* SPEECH BUBBLE DIRECTLY CONNECTED TO EMPLOYEE'S MOUTH/HEAD */}
            <div
              ref={speechBubbleRef}
              className="relative mb-24 sm:mb-30 lg:mb-36 max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] select-none"
            >
              {/* Dialogue Balloon Container */}
              <div className="relative px-4 py-3 rounded-2xl bg-[#202A2E]/85 backdrop-blur-md border border-white/20 shadow-2xl text-white">
                {/* Speech Bubble Pointer Tail (Points directly to employee's face/mouth!) */}
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#202A2E]/85 border-l border-b border-white/20 -rotate-45" />

                {/* Spoken Dialogue Text */}
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-base sm:text-lg animate-bounce">👋</span>
                  <h4 className="font-heading font-extrabold text-base sm:text-lg lg:text-xl text-white tracking-wide leading-tight drop-shadow-sm">
                    Let&apos;s Get to Know Us!
                  </h4>
                </div>

                <p className="text-xs sm:text-[13px] font-medium text-[#D1B48C] leading-snug drop-shadow-xs">
                  Discover the passion & precision behind every box
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
