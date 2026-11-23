"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Compass, CheckCircle2, ShieldCheck, HeartHandshake } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SustainabilityVision() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current || !cardRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const coreFocus = [
    {
      title: "Understanding Product Demands",
      desc: "Tailoring box strength to actual logistical and environmental stresses.",
    },
    {
      title: "Responsible Substrate Choices",
      desc: "Prioritizing recyclable paperboard fibers over non-separable composites.",
    },
    {
      title: "Continuous Process Efficiency",
      desc: "Refining manufacturing setups to lower scrap volume and energy use.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAF7F2] py-14 sm:py-16 lg:py-20 border-b border-[#E4DED3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={cardRef}
          className="relative rounded-3xl overflow-hidden bg-[#202A2E] text-white border border-[#344247] shadow-xl"
        >
          {/* Subtle Ambient Industrial / Eco Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src="/Sustanablity/sustainable-plant.png"
              alt="Sustainable packaging facility overview"
              fill
              sizes="100vw"
              className="object-cover object-center opacity-30 mix-blend-luminosity scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#202A2E] via-[#202A2E]/95 to-[#202A2E]/80" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#78846A]/20 via-transparent to-transparent" />
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-4xl">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#78846A]/25 border border-[#78846A]/40 mb-4 backdrop-blur-xs">
              <Compass className="w-3.5 h-3.5 text-[#D1B48C]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5F2EB]">
                OUR LONG-TERM PERSPECTIVE
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight tracking-tight mb-4">
              Moving Towards a More Responsible Packaging Future
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-[#F5F2EB]/90 font-normal leading-relaxed mb-8 max-w-3xl">
              We believe better packaging decisions begin with understanding the needs of every product and making thoughtful choices about materials, design, and manufacturing. Our focus is to keep improving how packaging solutions are designed and produced.
            </p>

            {/* 3 Core Focus Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              {coreFocus.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs hover:border-[#78846A]/60 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D1B48C]" />
                    <h3 className="font-heading font-bold text-sm text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#F5F2EB]/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
