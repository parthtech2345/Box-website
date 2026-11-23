"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, PackageCheck, Send } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContactCTA() {
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

  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formElement = document.getElementById("inquiry-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={ctaRef}
      className="w-full bg-[#FAF7F2] py-12 sm:py-14 border-b border-[#E4DED3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#202A2E] rounded-3xl p-8 sm:p-12 lg:p-14 text-white border border-[#344247] shadow-xl relative overflow-hidden">
          {/* Ambient Warm Gradient Glows */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#A65D32]/25 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#E97835]/20 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-xs mb-1">
                <PackageCheck className="w-3.5 h-3.5 text-[#E97835]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#F5F2EB]">
                  START A CONVERSATION
                </span>
              </div>

              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                Have a Packaging Requirement in Mind?
              </h2>

              <p className="text-sm sm:text-base text-[#A6B2B8] max-w-2xl leading-relaxed">
                Let&apos;s discuss your requirements and find the right packaging solution for your business. From custom CAD structural designs to high-volume corrugated dispatches, our team is ready to assist.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end lg:items-end">
              <a
                href="#inquiry-form"
                onClick={handleScrollToForm}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#E97835] hover:bg-[#d46927] text-white font-bold text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] w-full sm:w-auto text-center cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send an Inquiry</span>
              </a>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm tracking-wider uppercase backdrop-blur-xs transition-all duration-200 w-full sm:w-auto text-center"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
