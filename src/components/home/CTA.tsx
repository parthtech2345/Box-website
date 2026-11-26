"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, MessageSquare, ShieldCheck, Sparkles, PhoneCall } from "lucide-react";

export default function CTA({ data }: { data?: any } = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const badgeText = data?.badge || "READY TO GET STARTED?";
  const titleText = data?.title || "Let's Build the Right Box For Your Business";
  const subtitleText = data?.subtitle || data?.description || "Get in touch with our team for standard boxes, custom dimensions, printed packaging, or ongoing commercial supply.";
  const primaryButtonText = data?.primaryButtonText || "Request a Quote";
  const primaryButtonLink = data?.primaryButtonLink || "/contact";
  const secondaryButtonText = data?.secondaryButtonText || "+91 98765 43210";
  const ctaMedia = data?.mediaUrl && typeof data.mediaUrl === "string" && data.mediaUrl.trim() !== ""
    ? data.mediaUrl
    : "/home/cta/animated-welcoming-businessman.gif";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="relative w-full bg-[#FFFFFF] text-[#202A2E] py-14 sm:py-14 lg:py-14 overflow-hidden border-b border-[#E4DED3]"
      aria-label="Ready to Get Started"
    >
      {/* Background Decorative Ambient Accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#E8D5B8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#A65D32]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Cardboard Fold Line SVG Path */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 1200 600"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M -100 200 C 300 100, 700 500, 1300 250"
          stroke="#E4DED3"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
        <path
          d="M -50 400 C 400 300, 800 600, 1350 450"
          stroke="#A65D32"
          strokeWidth="1"
          strokeOpacity="0.25"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* =========================================================================
              LEFT SIDE (50%): Eyebrow, Large Heading, Pitch, Dual CTA Buttons
          ========================================================================= */}
          <div
            className={`lg:col-span-6 flex flex-col justify-center transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/20 mb-4 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                {badgeText}
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.15] tracking-tight mb-5">
              {titleText}
            </h2>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#62574D] font-normal leading-relaxed mb-8 max-w-2xl">
              {subtitleText}
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              {/* Primary CTA: Request a Quote */}
              <Link
                href={primaryButtonLink}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-[#A65D32] text-white text-base font-semibold hover:bg-[#8e4f2b] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 group active:scale-[0.98]"
              >
                <span>{primaryButtonText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA: Call */}
              <a
                href={`tel:${secondaryButtonText}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-[#FAF7F2] text-[#493629] text-base font-semibold border border-[#D1B48C]/60 hover:bg-[#F2ECE1] hover:border-[#A65D32] hover:text-[#202A2E] transition-all duration-200 active:scale-[0.98]"
              >
                <span>{secondaryButtonText}</span>
              </a>
            </div>

            {/* Compact Supporting Value Line */}
            <div className="flex flex-wrap items-center gap-y-2 text-xs sm:text-sm text-[#62574D] font-medium border-t border-[#E4DED3] pt-5">
              <span>Custom Sizes</span>
              <span className="mx-2.5 text-[#A65D32]">•</span>
              <span>Multiple Ply Options</span>
              <span className="mx-2.5 text-[#A65D32]">•</span>
              <span>Tailored Packaging</span>
            </div>
          </div>

          {/* =========================================================================
              RIGHT SIDE (50%): Packaging Specialist Animated GIF & Direct Inquiry Callout
          ========================================================================= */}
          <div
            className={`lg:col-span-6 relative transition-all duration-700 delay-150 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
          >
            {/* Clean Frameless Container - No square border */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg group bg-[#FAF7F2]">
              {/* Subtle ambient terracotta glow behind */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#A65D32]/10 via-transparent to-[#D1B48C]/15 rounded-2xl blur-xl pointer-events-none" />

              {/* Full-Bleed Animated GIF with Proportional Ratio */}
              <div className="relative w-full aspect-[560/360] overflow-hidden">
                <Image
                  src={ctaMedia}
                  alt="Aavrit Packaging customer specialist welcoming inquiries"
                  fill
                  unoptimized
                  className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
                  priority
                />
              </div>

              {/* Attractive Bottom Floating Action Bar */}
              <div className="p-3.5 sm:p-4 bg-white/95 backdrop-blur-md border-t border-[#E4DED3] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#A65D32]/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#A65D32]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#78846A]">
                      Direct Support Line
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-[#202A2E]">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#A65D32] text-white text-xs font-semibold hover:bg-[#8e4f2b] transition-colors shadow-sm"
                >
                  <span>Connect Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
