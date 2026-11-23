"use client";

import React, { useState, useRef, useEffect } from "react";
import { MachineFAQ } from "@/data/machineryData";
import { ChevronDown, HelpCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface MachineryFAQsProps {
  faqs: MachineFAQ[];
  machineName: string;
}

export default function MachineryFAQs({
  faqs,
  machineName,
}: MachineryFAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const accordionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 25 },
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

      if (accordionRef.current) {
        gsap.fromTo(
          accordionRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: accordionRef.current,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 lg:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
              TECHNICAL QUESTIONS
            </span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#202A2E] leading-tight mb-3">
            Frequently Asked <span className="text-[#A65D32]">Questions</span>
          </h2>

          <p className="text-sm sm:text-base text-[#62574D] leading-relaxed">
            Common technical inquiries regarding the operation, capabilities, and packaging role of the {machineName}.
          </p>
        </div>

        {/* 5-Question Accordion */}
        <div
          ref={accordionRef}
          className="space-y-3.5"
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                  ? "bg-[#FAF7F2] border-[#A65D32] shadow-sm"
                  : "bg-[#FFFFFF] border-[#E4DED3] hover:border-[#D1B48C]"
                  }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-[#202A2E] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                      ? "bg-[#A65D32] text-white rotate-180"
                      : "bg-[#FAF7F2] text-[#62574D] border border-[#E4DED3]"
                      }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-[#62574D] leading-relaxed border-t border-[#E4DED3]/60 mt-1">
                    <p className="pt-3">{faq.answer}</p>
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
