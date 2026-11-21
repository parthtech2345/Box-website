"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // 1. Reset scroll to top on every route/page navigation
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Set scroll restoration to manual so browser doesn't restore previous scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // If navigating to a page without a specific hash anchor, always start at the very top
    if (!window.location.hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [pathname]);

  // 2. Track scroll position for button visibility and circular progress ring
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (docHeight > 0) {
        const progress = Math.min(Math.max((scrollY / docHeight) * 100, 0), 100);
        setScrollProgress(progress);
      }

      // Show button once user scrolls down 300px
      setIsVisible(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Circular progress calculations for 44px circle
  const size = 48;
  const strokeWidth = 3;
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#202A2E] text-white shadow-lg hover:shadow-2xl border border-[#3A464C] hover:border-[#E97835] transition-all duration-300 cursor-pointer active:scale-95"
      >
        {/* SVG Circular Scroll Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
        >
          {/* Subtle Track */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth={strokeWidth}
          />
          {/* Active Packaging Orange Progress */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="#E97835"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-150"
          />
        </svg>

        {/* Center Content: Upward Arrow with packaging lift animation */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <ArrowUp className="w-5 h-5 text-white group-hover:text-[#E97835] group-hover:-translate-y-1 transition-all duration-200" />
        </div>

        {/* Tooltip on hover */}
        <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#202A2E] text-white text-[11px] font-bold tracking-wider uppercase border border-[#3A464C] shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          Top
        </span>
      </button>
    </div>
  );
}
