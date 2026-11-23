"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface FAQItem {
  question: string;
  answer: string;
}

export default function SustainabilityFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement | null>(null);

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

  const faqs: FAQItem[] = [
    {
      question: "Are corrugated cardboard boxes recyclable?",
      answer:
        "Yes. Corrugated cardboard is primarily composed of renewable paper fibers and is one of the most widely recovered packaging materials globally. In regions with paper recycling infrastructure, clean corrugated boxes can be placed in paper recycling streams where they are pulped, cleaned, and remanufactured into fresh paperboard.",
    },
    {
      question: "Can corrugated boxes be reused?",
      answer:
        "Many corrugated boxes can be reused multiple times for storage, internal handling, or secondary transit, provided they have maintained their structural integrity and are free from severe crushing, moisture damage, or structural tears.",
    },
    {
      question: "How can custom-sized packaging help reduce material waste?",
      answer:
        "Custom-sized packaging matches the exact dimensions of the packed goods. This eliminates empty void space inside the carton, significantly reduces or removes the need for plastic void-fillers, and allows more packages to fit onto each shipping pallet, optimizing logistics efficiency.",
    },
    {
      question: "What is the difference between recycled kraft and virgin kraft paper?",
      answer:
        "Virgin kraft paper is manufactured directly from sustainably harvested wood pulp fibers, resulting in long, uniform fibers that offer high tensile strength and puncture resistance. Recycled kraft is made from recovered cardboard and paper, which offers a lower raw material footprint while providing sufficient strength for a wide range of standard commercial boxes.",
    },
    {
      question: "How can businesses choose more responsible packaging solutions?",
      answer:
        "Businesses can begin by conducting a packaging audit: right-sizing box dimensions to fit products tightly, selecting the minimum appropriate ply specification (such as 3-ply instead of 5-ply where load allows), opting for mono-material paper-based tape and labeling, and consolidating carton varieties to streamline inventory and scrap.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-14 sm:py-16 lg:py-20 border-b border-[#E4DED3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header 2-Column Split */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-10 border-b border-[#E4DED3]">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                CLARITY & GUIDANCE
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              Frequently Asked Questions <br className="hidden sm:inline" />
              <span className="text-[#A65D32]">About Sustainable Packaging</span>
            </h2>
          </div>

          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              Clear, practical answers about paper-based materials, box recyclability, and responsible packaging design.
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
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
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
                    className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-transform duration-300 ${
                      isOpen
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
