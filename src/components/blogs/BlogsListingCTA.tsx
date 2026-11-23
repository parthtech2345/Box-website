"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, MessageSquare } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BlogsListingCTA() {
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
      className="w-full bg-[#FAF7F2] py-14 sm:py-16 border-t border-[#E4DED3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#202A2E] rounded-3xl p-8 sm:p-12 text-white border border-[#344247] shadow-xl relative overflow-hidden">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-[#A65D32]/25 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-[#E97835]/20 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-xs mb-1">
                <BookOpen className="w-3.5 h-3.5 text-[#E97835]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#F5F2EB]">
                  CONTINUE LEARNING
                </span>
              </div>

              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                Want to Know More About Packaging?
              </h2>

              <p className="text-xs sm:text-sm lg:text-base text-[#A6B2B8] max-w-2xl leading-relaxed">
                Explore our packaging solutions or connect with our team to discuss your specific requirements. We are here to help you engineer stronger, cost-optimized corrugated containers.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end lg:items-end">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#E97835] hover:bg-[#d46927] text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] w-full sm:w-auto text-center"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-xs transition-all duration-200 w-full sm:w-auto text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
