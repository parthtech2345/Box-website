"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export interface HeroSlide {
  id: string;
  number: string;
  category: string;
  line1: React.ReactNode;
  line2: React.ReactNode;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  image: string;
  imageAlt: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    number: "01",
    category: "PACKAGING SOLUTIONS",
    line1: <span>Packaging That <span className="text-[#A65D32]">Protects</span>.</span>,
    line2: <span>Business That Moves.</span>,
    description:
      "Reliable corrugated packaging solutions designed to protect your products and support your business at every stage.",
    primaryCta: {
      label: "Explore Products",
      href: "#products",
    },
    secondaryCta: {
      label: "Request a Quote",
      href: "#quote",
    },
    image: "/home/Newbanner1.png",
    imageAlt: "AAVRIT PACKAGING main corrugated packaging solutions banner",
  },
  {
    id: "slide-2",
    number: "02",
    category: "STRENGTH IN EVERY LAYER",
    line1: <span>The Right <span className="text-[#A65D32]">Strength</span></span>,
    line2: <span>for Every Shipment.</span>,
    description:
      "Explore 3-ply, 5-ply and 7-ply corrugated boxes engineered for diverse weight capacities, handling demands, and transit conditions.",
    primaryCta: {
      label: "Discover Box Options",
      href: "#construction",
    },
    secondaryCta: {
      label: "Get a Quote",
      href: "#quote",
    },
    image: "/home/newbanner2.png",
    imageAlt: "AAVRIT PACKAGING 3-ply, 5-ply and 7-ply corrugated boxes banner",
  },
  {
    id: "slide-3",
    number: "03",
    category: "CUSTOM-MADE PACKAGING",
    line1: <span>Your Product. <span className="text-[#A65D32]">Your Size</span>.</span>,
    line2: <span>Your Packaging.</span>,
    description:
      "Custom dimensions, precision die-cuts, and high-definition flexographic printing tailored specifically around your product requirements.",
    primaryCta: {
      label: "Explore Custom Solutions",
      href: "#quote",
    },
    secondaryCta: {
      label: "Enquire Now",
      href: "#quote",
    },
    image: "/home/newbanner3.png",
    imageAlt: "AAVRIT PACKAGING custom sizes and printed boxes banner",
  },
  {
    id: "slide-4",
    number: "04",
    category: "HEAVY-DUTY PACKAGING",
    line1: <span>Built for <span className="text-[#A65D32]">Bulk</span>.</span>,
    line2: <span>Ready for Business.</span>,
    description:
      "Heavy-duty industrial packaging, triple-wall export containers, and high-capacity supply support for enterprises across India.",
    primaryCta: {
      label: "Our Manufacturing",
      href: "#manufacturing",
    },
    secondaryCta: {
      label: "Contact Us",
      href: "#contact",
    },
    image: "/home/newbanner4.png",
    imageAlt: "AAVRIT PACKAGING heavy-duty industrial packaging banner",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Autoplay timer with pause on hover (3 seconds)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const current = HERO_SLIDES[currentSlide];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="AAVRIT PACKAGING Homepage Hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full overflow-hidden select-none min-h-[460px] sm:min-h-[500px] lg:h-[540px] flex items-center border-b border-[#E4DED3] bg-[#e7d5c0]"
    >
      {/* 1. Full-Width Exact Approved Banner Images with Seamless Cross-Fade */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.imageAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}

      {/* 2. Content Layer Container: Left-Aligned Text over the Clean Warm Kraft-Beige Left Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 w-full flex flex-col justify-center h-full">
        <div className="max-w-lg lg:max-w-xl flex flex-col items-start">
          
          {/* Category Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-[#493629]/10 text-[#493629] text-[11px] font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
            <span>{current.category}</span>
          </div>

          {/* Heading: Deep Kraft Brown (#493629) with Muted Terracotta (#A65D32) Highlights */}
          <h1
            key={`headline-${currentSlide}`}
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#493629] leading-[1.12] tracking-tight mb-3"
          >
            <span className="block">{current.line1}</span>
            <span className="block">{current.line2}</span>
          </h1>

          {/* Description: Warm Charcoal Grey (#62574D) */}
          <p
            key={`desc-${currentSlide}`}
            className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed mb-6 max-w-md"
          >
            {current.description}
          </p>

          {/* Action CTAs: Deep Kraft Brown (#493629) & Transparent Secondary */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6 sm:mb-8">
            {/* Primary CTA: Deep Kraft Brown bg, white text */}
            <Link
              href={current.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#493629] hover:bg-[#5a4333] text-white font-semibold text-xs sm:text-sm rounded-lg shadow-sm transition-all duration-200 active:scale-[0.98]"
            >
              <span>{current.primaryCta.label}</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </Link>

            {/* Secondary CTA: Transparent bg, Deep Kraft Brown border and text */}
            <Link
              href={current.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-transparent text-[#493629] border border-[#493629] hover:bg-[#493629]/10 font-semibold text-xs sm:text-sm rounded-lg transition-all duration-200 active:scale-[0.98]"
            >
              <span>{current.secondaryCta.label}</span>
            </Link>
          </div>

          {/* Bottom Navigation Strip: Left-aligned with indicators above the arrows */}
          <div className="flex flex-col items-start gap-3 w-full pt-2">
            {/* Slide Indicators */}
            <div className="flex items-center gap-2">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}: ${slide.category}`}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    currentSlide === idx
                      ? "w-6 bg-[#A65D32]"
                      : "w-2 bg-[#493629]/30 hover:bg-[#493629]/60"
                  }`}
                />
              ))}
            </div>

            {/* Circular Prev/Next Controls placed directly below the slider indicators */}
            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="w-8 h-8 rounded-full border border-[#493629]/40 bg-white/70 hover:bg-white text-[#493629] flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Slide"
                className="w-8 h-8 rounded-full border border-[#493629]/40 bg-white/70 hover:bg-white text-[#493629] flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
