"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { BlogFAQ } from "@/data/blogsData";

interface BlogFAQsProps {
  faqs: BlogFAQ[];
  articleTitle: string;
}

export default function BlogFAQs({ faqs }: BlogFAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="my-12">
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#A65D32]">
            COMMON QUESTIONS
          </span>
        </div>
        <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#202A2E]">
          Frequently Asked Questions
        </h3>
        <p className="text-xs sm:text-sm text-[#62574D] mt-1">
          Helpful answers to common questions related to this article.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "border-[#A65D32]/40 shadow-xs ring-1 ring-[#A65D32]/10"
                  : "border-[#E4DED3] hover:border-[#D1B48C]"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#A65D32] text-white"
                        : "bg-[#FAF7F2] text-[#A65D32] border border-[#E4DED3]"
                    }`}
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-heading font-bold text-sm sm:text-base text-[#202A2E]">
                    {faq.question}
                  </span>
                </div>

                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                    isOpen
                      ? "bg-[#A65D32]/10 text-[#A65D32] rotate-180"
                      : "bg-[#FAF7F2] text-[#62574D]"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#62574D] leading-relaxed border-t border-[#FAF7F2]">
                  <p className="pl-9">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
