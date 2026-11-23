"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MachineryCTA() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAF7F2] py-10 sm:py-12 lg:py-14 border-t border-[#E4DED3] overflow-hidden"
      aria-label="Machinery Consultation Call to Action"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={cardRef}
          className="relative rounded-2xl bg-white border border-[#E4DED3] p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
        >
          {/* Subtle Ambient Warm Background Accents */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#D1B48C]/15 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#A65D32]/5 rounded-full blur-2xl pointer-events-none -ml-12 -mb-12" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            {/* Left Content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/20 text-[#A65D32] text-[11px] font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3 h-3 text-[#A65D32]" />
                <span>PACKAGING & PLANT EXPERTISE</span>
              </div>

              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#202A2E] leading-tight mb-2.5">
                Looking for Reliable{" "}
                <span className="text-[#A65D32]">Packaging Solutions?</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                Explore our manufacturing capabilities and discuss your packaging
                requirements with our engineering and production team.
              </p>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-2.5 shrink-0">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#A65D32] hover:bg-[#8F4E28] text-white text-xs sm:text-sm font-bold tracking-wide uppercase transition-all shadow-xs hover:shadow-md active:scale-98"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FAF7F2] hover:bg-white text-[#493629] text-xs sm:text-sm font-semibold border border-[#D1B48C]/70 hover:border-[#A65D32] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#A65D32]" />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
