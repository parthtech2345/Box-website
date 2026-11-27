"use client";

import React, { useRef, useEffect } from "react";
import {
  FileText,
  Compass,
  CheckCircle,
  Truck,
  ArrowRight,
  Package,
  Sparkles,
  Settings,
  ShieldCheck,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ICON_MAP: Record<string, React.ElementType> = {
  FileText,
  Compass,
  CheckCircle,
  Truck,
  Package,
  Sparkles,
  Settings,
  ShieldCheck,
};

const DEFAULT_STEPS = [
  {
    step: "01",
    title: "Requirement & Spec Submission",
    desc: "Share your internal product dimensions, weight, stacking height, and any branding artwork or dieline preferences.",
    icon: "FileText",
  },
  {
    step: "02",
    title: "CAD Engineering & 3D Proof",
    desc: "Our packaging designers compute flute thickness, bursting pressure (B.F.), and generate an accurate 3D preview within 24 hours.",
    icon: "Compass",
  },
  {
    step: "03",
    title: "Physical Prototype Approval",
    desc: "For custom die-cuts and bulk production runs, we produce a physical sample box for hands-on drop-test and fitment confirmation.",
    icon: "CheckCircle",
  },
  {
    step: "04",
    title: "Automated Production & Dispatch",
    desc: "Upon final approval, your custom batch enters automated corrugation, rotary die-cutting, flexo printing, and bundled delivery.",
    icon: "Truck",
  },
];

interface CustomProcessProps {
  data?: {
    badge?: string;
    title?: string;
    subtitle?: string;
    steps?: Array<{
      step: string;
      title: string;
      desc: string;
      icon: string;
    }>;
  };
}

export default function CustomProcess({ data }: CustomProcessProps = {}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const stepsRef = useRef<HTMLDivElement | null>(null);

  const badge = data?.badge || "DEVELOPMENT WORKFLOW";
  const title = data?.title || "From Concept to Cartons: Our 4-Stage Process";
  const subtitle =
    data?.subtitle ||
    "We eliminate guesswork with rigorous sample validation before rolling out high-volume production batches.";

  const stepsList = data?.steps && data.steps.length > 0 ? data.steps : DEFAULT_STEPS;

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (stepsRef.current) {
        gsap.fromTo(
          stepsRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stepsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [stepsList]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header 2-Column Split */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-12 border-b border-[#E4DED3]"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                {badge}
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              {title}
            </h2>
          </div>

          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* 4 Process Cards */}
        <div
          ref={stepsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {stepsList.map((s, idx) => {
            const IconComponent =
              typeof s.icon === "string" && ICON_MAP[s.icon]
                ? ICON_MAP[s.icon]
                : FileText;

            return (
              <div
                key={s.step || idx}
                className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#E8D5B8] flex flex-col justify-between relative group hover:border-[#A65D32] hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Icon container with clean, sharp contrast */}
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#E8D5B8] flex items-center justify-center text-[#A65D32] group-hover:bg-[#A65D32] group-hover:border-[#A65D32] shadow-2xs transition-all duration-200">
                      <IconComponent className="w-5 h-5 text-[#A65D32] group-hover:text-white transition-colors duration-200" />
                    </div>
                    <span className="text-2xl font-mono font-black text-[#A65D32]/25 group-hover:text-[#A65D32] transition-colors">
                      {s.step}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-[#202A2E] group-hover:text-[#A65D32] transition-colors mb-2.5">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#62574D] leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-[#E4DED3]/60 flex items-center gap-1.5 text-xs font-semibold text-[#8C7E72] group-hover:text-[#493629]">
                  <span>Stage {idx + 1} of {stepsList.length}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A65D32] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
