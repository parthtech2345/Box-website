"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is a corrugated box?",
      a: "A corrugated box is an engineered structural container made of corrugated fiberboard. Unlike plain flat cardboard (paperboard), corrugated board consists of an arched fluted wave paper sandwiched firmly between two or more flat linerboards, providing high compression strength, impact cushioning, and rigidity for logistics.",
    },
    {
      q: "What is the difference between 3-ply and 5-ply boxes?",
      a: "A 3-ply box (Single Wall) has 2 outer paper liners with 1 fluted wave in the center, typically supporting loads up to 15-20 kg (ideal for e-commerce and retail items). A 5-ply box (Double Wall) incorporates 3 liners and 2 separate fluted layers (e.g., B+C flute combinations), engineered for heavy master shipping and stacking up to 50-60 kg.",
    },
    {
      q: "Can boxes be manufactured in custom sizes?",
      a: "Yes, 100% of our production can be customized to your exact internal dimensions (Length × Width × Height in millimeters). Our CAD packaging engineers design custom box die-lines and deliver physical prototypes before starting mass factory production.",
    },
    {
      q: "Which flute is suitable for my product?",
      a: "Flute choice depends on your product's specific protection needs: B-Flute (~3mm thickness) offers high puncture resistance and flat surface for crisp printing; C-Flute (~4mm) provides maximum top-to-bottom compression for heavy stacking; E-Flute (~1.5mm) is ultra-compact for delicate cosmetics, mailers, and premium retail displays.",
    },
    {
      q: "Do you provide printed boxes?",
      a: "Yes. We operate multi-color computerized flexographic printer-slotters capable of high-speed printing on natural kraft or bleached white top liners. We can print your brand logo, barcodes, QR codes, handling warnings, and custom promotional artwork.",
    },
    {
      q: "How can I request a quotation?",
      a: "You can request a quotation directly through our quote form on this website, email us at inquiry@boxpackaging.in, or call our Indian sales desk at +91 98765 43210. Provide your required box dimensions, ply preference (3/5/7-ply), target payload weight, and estimated monthly quantity for a quotation within 24 hours.",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-14 border-b border-[#E4DED3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E97835]/10 text-[#E97835] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-tight mb-4">
            Questions About Corrugated Packaging
          </h2>
          <p className="text-base text-[#687378] leading-relaxed">
            Clear, technical answers to help you choose the right board specification, flute profile, and print option for your supply chain.
          </p>
        </div>

        {/* Elegant Accordion Interface */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-[#E4DED3] rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className={`w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors ${isOpen ? "bg-[#F5F2EB]" : "bg-white hover:bg-[#F5F2EB]/50"
                    }`}
                >
                  <span className="font-heading font-bold text-lg sm:text-xl text-[#202A2E]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white border border-[#E4DED3] flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 bg-[#E97835] text-white border-[#E97835]" : "text-[#202A2E]"
                      }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-6 bg-white border-t border-[#E4DED3] text-sm sm:text-base text-[#687378] leading-relaxed animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 bg-[#F5F2EB] rounded-2xl border border-[#E4DED3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading font-bold text-lg text-[#202A2E]">
              Have a technical question not answered here?
            </h4>
            <p className="text-xs text-[#687378] mt-0.5">
              Speak directly with an application packaging engineer.
            </p>
          </div>
          <a
            href="tel:+919876543210"
            className="px-5 py-2.5 bg-[#202A2E] text-white text-xs font-semibold rounded-lg hover:bg-[#E97835] transition-colors shrink-0"
          >
            Call Technical Support
          </a>
        </div>

      </div>
    </section>
  );
}
