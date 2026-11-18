"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, MessageSquare, ShieldCheck, Sparkles, PhoneCall } from "lucide-react";

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* =========================================================================
              LEFT SIDE (55%): Eyebrow, Large Heading, Pitch, Dual CTA Buttons
          ========================================================================= */}
          <div
            className={`lg:col-span-7 flex flex-col justify-center transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/20 mb-4 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                READY TO GET STARTED?
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.15] tracking-tight mb-5">
              Let&apos;s Build the Right Box <br className="hidden sm:inline" />
              <span className="text-[#A65D32] relative inline-block">
                for Your Business.
                {/* Restrained decorative underline */}
                <span className="absolute left-0 bottom-[-4px] w-full h-[2.5px] bg-[#A65D32] rounded-full" />
              </span>
            </h2>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#62574D] font-normal leading-relaxed mb-8 max-w-2xl">
              From everyday packaging to specialized industrial solutions, we create corrugated
              boxes designed around your product, protection and business needs.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              {/* Primary CTA: Request a Quote */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg bg-[#A65D32] text-white text-base font-semibold hover:bg-[#8e4f2b] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 group active:scale-[0.98]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary CTA: Explore Our Products */}
              <Link
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-[#FAF7F2] text-[#493629] text-base font-semibold border border-[#D1B48C]/60 hover:bg-[#F2ECE1] hover:border-[#A65D32] hover:text-[#202A2E] transition-all duration-200 active:scale-[0.98]"
              >
                <span>Explore Our Products</span>
              </Link>
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
              RIGHT SIDE (45%): Packaging Specialist Animation & Direct Inquiry Callout
          ========================================================================= */}
          <div
            className={`lg:col-span-5 relative transition-all duration-700 delay-150 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
          >
            {/* Studio frame container */}
            <div className="relative rounded-2xl p-4 sm:p-5 bg-gradient-to-b from-[#FAF7F2] to-[#F2ECE1] border border-[#E4DED3] shadow-xl group">
              {/* Outer Terracotta Soft Radial Aura */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#A65D32]/15 via-transparent to-[#D1B48C]/20 rounded-2xl blur-xl pointer-events-none" />

              {/* Character Illustration Stage */}
              <div className="relative w-full h-[380px] sm:h-[430px] lg:h-[460px] rounded-xl overflow-hidden flex items-end justify-center">
                {/* Subtle Kraft Grid Texture in Background */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(#A65D32 0.75px, transparent 0.75px), radial-gradient(#493629 0.75px, #FAF7F2 0.75px)",
                    backgroundSize: "24px 24px",
                    backgroundPosition: "0 0, 12px 12px",
                  }}
                />

                {/* Floating Animated Speech Bubble */}
                <div className="absolute top-4 left-4 right-4 sm:left-6 sm:right-auto z-30 animate-bounce">
                  <div className="relative bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-[#A65D32]/30 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#A65D32]/10 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4 text-[#A65D32]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#202A2E] leading-tight">
                        Have an inquiry or custom size?
                      </p>
                      <p className="text-[11px] text-[#A65D32] font-semibold mt-0.5">
                        We&apos;re here to help — Call us anytime!
                      </p>
                    </div>
                    {/* Speech bubble pointer */}
                    <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-white border-b border-r border-[#A65D32]/30 rotate-45" />
                  </div>
                </div>

                {/* Packaging Specialist Employee Image */}
                <div className="relative w-full h-[88%] max-h-[400px] z-20 flex items-end justify-center">
                  <Image
                    src="/home/cta/packaging-representative.png"
                    alt="Aavrit Packaging customer specialist ready to assist with box inquiries"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-contain object-bottom transition-transform duration-500 hover:scale-[1.02]"
                    priority
                  />
                </div>

                {/* Floating Direct Call Card at Bottom */}
                <a
                  href="tel:+919876543210"
                  className="absolute bottom-3 left-3 right-3 z-30 p-3 sm:p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E4DED3] hover:border-[#A65D32] shadow-lg flex items-center justify-between group/call transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#A65D32] text-white flex items-center justify-center shadow-md group-hover/call:scale-105 transition-transform">
                      <PhoneCall className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#62574D]">
                        Instant Technical Desk
                      </span>
                      <p className="text-sm font-bold text-[#202A2E] group-hover/call:text-[#A65D32] transition-colors">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex text-xs font-semibold px-2.5 py-1 rounded-md bg-[#A65D32]/10 text-[#A65D32]">
                    Call Now
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
