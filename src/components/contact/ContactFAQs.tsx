"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FAQItem {
  question: string;
  answer: string;
}

const CONTACT_FAQS: FAQItem[] = [
  {
    question: "How can I request a packaging quotation?",
    answer:
      "You can submit your requirements through our online inquiry form on this page, or reach out to our team directly via phone (+91 98765 43210) or email (inquiry@aavritpackaging.com) with your box dimensions, required ply construction, and estimated order volume.",
  },
  {
    question: "What information should I provide for a custom packaging inquiry?",
    answer:
      "Providing your internal box dimensions (Length × Width × Height in mm or inches), product gross weight, stacking or transit environment, flute/ply preference (3-Ply, 5-Ply, or 7-Ply), and any custom flexographic branding artwork ensures we can quote quickly and accurately.",
  },
  {
    question: "Can I discuss bulk packaging requirements?",
    answer:
      "Yes. We specialize in high-volume industrial corrugated packaging and enterprise B2B supply agreements. Our manufacturing plant operates multi-station flexo folder-gluers and rotary die-cutters optimized for rapid turnaround and recurring scheduled dispatches.",
  },
  {
    question: "Can I share reference images or packaging specifications?",
    answer:
      "Absolutely. You can attach reference box photographs, technical CAD drawings, or structural specification sheets directly via the file upload field in our inquiry form, or email them to inquiry@aavritpackaging.com.",
  },
  {
    question: "How can I contact the company for product-related questions?",
    answer:
      "You can call our direct customer support desk at +91 98765 43210 during plant operating hours (Monday to Saturday: 9:00 AM – 6:30 PM), send us an email, or visit our manufacturing facility in GIDC Industrial Estate, Gujarat.",
  },
];

export default function ContactFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
            },
          }
        );
      }

      if (itemsRef.current) {
        gsap.fromTo(
          itemsRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: itemsRef.current,
              start: "top 82%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FAF7F2] py-14 sm:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Signature 2-Column Split Header */}
        <div
          ref={headerRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end pb-8 mb-10 border-b border-[#E4DED3]"
        >
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                CLARITY &amp; GUIDANCE
              </span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] tracking-tight leading-tight">
              Frequently Asked <br />
              <span className="text-[#A65D32]">Questions</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] leading-relaxed">
              Find quick answers to common questions about inquiries, product guidance, custom box specifications, and working with AAVRIT PACKAGING.
            </p>
          </div>
        </div>

        {/* 5-Question Accordion List */}
        <div ref={itemsRef} className="max-w-4xl mx-auto space-y-3.5">
          {CONTACT_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen
                    ? "border-[#A65D32]/40 shadow-md ring-1 ring-[#A65D32]/10"
                    : "border-[#E4DED3] hover:border-[#D1B48C] shadow-xs"
                  }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isOpen
                          ? "bg-[#A65D32] text-white"
                          : "bg-[#FAF7F2] text-[#A65D32] border border-[#E4DED3]"
                        }`}
                    >
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="font-heading font-bold text-base sm:text-lg text-[#202A2E]">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${isOpen
                        ? "bg-[#A65D32]/10 text-[#A65D32] rotate-180"
                        : "bg-[#FAF7F2] text-[#62574D]"
                      }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#62574D] leading-relaxed border-t border-[#FAF7F2]">
                    <p className="pl-10">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Quick Help Note */}
        <div className="max-w-4xl mx-auto mt-8 text-center text-xs sm:text-sm text-[#62574D] flex items-center justify-center gap-2">
          <MessageSquare className="w-4 h-4 text-[#A65D32]" />
          <span>
            Have a unique question not listed here?{" "}
            <a
              href="#inquiry-form"
              className="font-bold text-[#A65D32] hover:text-[#874621] underline decoration-[#A65D32]/40"
            >
              Ask our packaging engineers directly
            </a>
            .
          </span>
        </div>
      </div>
    </section>
  );
}
