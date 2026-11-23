"use client";

import React from "react";
import { ShieldCheck, Calendar, Globe, Printer } from "lucide-react";

export default function PrivacyPolicyBar() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <section className="w-full bg-[#FAF7F2] border-b border-[#E4DED3] sticky top-0 z-30 shadow-xs print:relative print:border-b-2 print:border-black print:bg-white print:top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Metadata badges */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#62574D]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#A65D32] shrink-0" />
              <span>
                <strong className="text-[#202A2E] font-semibold">Document:</strong> Privacy Policy
              </span>
            </div>

            <div className="hidden sm:block w-1 h-1 rounded-full bg-[#D1B48C]" />

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#A65D32] shrink-0" />
              <span>
                <strong className="text-[#202A2E] font-semibold">Last Updated:</strong> November 2026
              </span>
            </div>

            <div className="hidden md:block w-1 h-1 rounded-full bg-[#D1B48C]" />

            <div className="hidden md:flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#A65D32] shrink-0" />
              <span>
                <strong className="text-[#202A2E] font-semibold">Entity:</strong> AAVRIT PACKAGING
              </span>
            </div>
          </div>

          {/* Action: Print Button (Hides in print mode) */}
          <button
            type="button"
            onClick={handlePrint}
            aria-label="Print Privacy Policy Document"
            className="print:hidden inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white hover:bg-[#FAF7F2] text-[#202A2E] text-xs font-semibold border border-[#E4DED3] hover:border-[#A65D32] shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-[#E97835]" />
            <span>Print Policy</span>
          </button>
        </div>
      </div>
    </section>
  );
}
