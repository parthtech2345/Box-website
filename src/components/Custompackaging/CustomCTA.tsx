"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CustomCTA() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 85%",
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
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={cardRef}
          className="relative rounded-3xl bg-[#202A2E] text-white p-8 sm:p-12 lg:p-16 overflow-hidden border border-[#344247] shadow-2xl"
        >
          {/* Subtle Ambient Warm Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D1B48C]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E97835]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E97835]/20 border border-[#E97835]/30 text-[#E97835] text-xs font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>Fast 24-Hour Prototype Turnaround</span>
              </div>

              <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                Ready to Fabricate Custom Packaging <br className="hidden sm:inline" />
                for Your Brand&apos;s Products?
              </h2>

              <p className="text-sm sm:text-base text-[#F5F2EB]/80 leading-relaxed max-w-2xl font-normal">
                Speak directly with our packaging structural engineers to calculate optimal flute thickness, print proofing, and volume dispatch schedules.
              </p>

              {/* Guarantees */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-[#F5F2EB]/90">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E97835]" />
                  <span>Free Initial CAD Dieline</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E97835]" />
                  <span>GST-Compliant Direct Plant Pricing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E97835]" />
                  <span>All-India Logistics Dispatch</span>
                </div>
              </div>
            </div>

            {/* Right Buttons (4 cols) */}
            <div className="lg:col-span-4 flex flex-col gap-3 sm:flex-row lg:flex-col justify-center">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E97835] hover:bg-[#d46927] text-white text-sm font-bold tracking-wide transition-all shadow-md active:scale-98"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold border border-white/15 transition-all"
              >
                <Phone className="w-4 h-4 text-[#E97835]" />
                <span>+91 98765 43210</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
