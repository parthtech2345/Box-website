"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SustainabilityFAQsData, DEFAULT_SUSTAINABILITY_DATA } from "@/data/sustainabilityData";

interface SustainabilityFAQsProps {
  data?: SustainabilityFAQsData | null;
}

export default function SustainabilityFAQs({ data }: SustainabilityFAQsProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  const fallback = DEFAULT_SUSTAINABILITY_DATA.faqs!;
  const badge = data?.badge || fallback.badge;
  const title = data?.title || fallback.title;
  const highlightText = data?.highlightText || fallback.highlightText;
  const subtitle = data?.subtitle || fallback.subtitle;
  const faqs = (data?.faqs && data.faqs.length > 0 ? data.faqs : fallback.faqs) || [];

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 lg:py-14 border-b border-[#E4DED3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header 2-Column Split */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-10 border-b border-[#E4DED3]">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                {badge}
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              {title} <br className="hidden sm:inline" />
              {highlightText && <span className="text-[#A65D32]">{highlightText}</span>}
            </h2>
          </div>

          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen
                  ? "bg-[#FAF7F2] border-[#78846A]/50 shadow-xs"
                  : "bg-white border-[#E4DED3] hover:border-[#78846A]/40"
                  }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4.5 sm:py-5 px-5 sm:px-6 flex items-center justify-between gap-4 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-[#202A2E] leading-snug">
                    <span className="text-[#A65D32] mr-2 text-sm font-semibold">
                      0{index + 1}.
                    </span>
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-transform duration-300 ${isOpen
                      ? "bg-[#78846A] text-white rotate-180"
                      : "bg-[#FAF7F2] text-[#202A2E] border border-[#E4DED3]"
                      }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#62574D] leading-relaxed border-t border-[#E8E2D7]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
