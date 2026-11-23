"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail, Sparkles, Leaf } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SustainabilityCTA() {
  const ctaRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ctaRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ctaRef}
      className="w-full bg-[#FAF7F2] py-12 sm:py-14 border-b border-[#E4DED3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#202A2E] rounded-3xl p-8 sm:p-10 lg:p-12 text-white border border-[#344247] shadow-xl relative overflow-hidden">
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-[#78846A]/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-[#A65D32]/20 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Heading and Description */}
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#78846A]/25 border border-[#78846A]/40 mb-1">
                <Leaf className="w-3 h-3 text-[#D1B48C]" />
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#F5F2EB]">
                  RESPONSIBLE COLLABORATION
                </span>
              </div>

              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                Let&apos;s Make Better Packaging Choices Together.
              </h2>

              <p className="text-sm sm:text-base text-[#F5F2EB]/85 font-normal leading-relaxed max-w-xl">
                Looking for packaging solutions that balance product protection, practical design, and responsible material choices? Talk to our team about your requirements.
              </p>
            </div>

            {/* Right Column: CTA Action Buttons */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center lg:items-stretch xl:items-center justify-end gap-3.5">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#E97835] hover:bg-[#d46927] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-center"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F5F2EB] hover:text-white border border-white/20 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 backdrop-blur-xs text-center"
              >
                <Mail className="w-4 h-4 text-[#D1B48C]" />
                <span>Contact Our Team</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
