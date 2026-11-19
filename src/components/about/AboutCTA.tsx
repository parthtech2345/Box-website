"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Package,
  Sparkles,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";

export default function AboutCTA() {
  return (
    <section
      id="about-cta"
      className="relative w-full py-12 sm:py-14 lg:py-14 bg-white text-[#202A2E] border-t border-[#E4DED3] overflow-hidden"
      aria-label="Call to Action: Packaging Partnership"
    >
      {/* Background Subtle Kraft Ambient Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-[#E8D5B8]/20 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#A65D32]/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 text-[#A65D32] text-[11px] font-bold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#A65D32]" />
          <span>LET&apos;S WORK TOGETHER</span>
        </div>

        {/* Main Heading */}
        <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] tracking-tight leading-[1.15] mb-4">
          Your Packaging Needs.{" "}
          <span className="text-[#A65D32]">Our Commitment.</span>
        </h2>

        {/* Supporting Description */}
        <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed max-w-2xl mx-auto mb-8">
          Let&apos;s discuss your packaging requirements and explore practical,
          dependable corrugated packaging solutions engineered specifically for
          your business.
        </p>

        {/* Action Buttons & Phone Support */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          {/* Primary Button */}
          <Link
            href="/#quote"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#A65D32] hover:bg-[#8F4E28] text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary Button */}
          <Link
            href="/#products"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-[#D1B48C] hover:border-[#A65D32] bg-[#FAF7F2] hover:bg-white text-[#493629] font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer"
          >
            <Package className="w-4 h-4 text-[#A65D32]" />
            <span>Explore Products</span>
          </Link>

          {/* Direct Phone Support */}
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-[#E4DED3] bg-white hover:bg-[#FAF7F2] text-[#493629] text-xs sm:text-sm font-bold transition-all duration-200"
          >
            <PhoneCall className="w-4 h-4 text-[#A65D32]" />
            <span>+91 98765 43210</span>
          </a>
        </div>

        {/* Supporting Trust Factors Line */}
        <div className="pt-6 border-t border-[#E4DED3] flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs font-medium text-[#62574D]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#A65D32]" />
            Thoughtful Design
          </span>
          <span className="hidden sm:inline text-[#D1B48C]">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#A65D32]" />
            Reliable Packaging
          </span>
          <span className="hidden sm:inline text-[#D1B48C]">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#A65D32]" />
            Business-Focused Solutions
          </span>
        </div>
      </div>
    </section>
  );
}
