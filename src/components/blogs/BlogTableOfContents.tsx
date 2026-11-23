"use client";

import React, { useState, useEffect } from "react";
import { List, ChevronDown } from "lucide-react";
import { BlogContentSection } from "@/data/blogsData";

interface BlogTableOfContentsProps {
  sections: BlogContentSection[];
}

export default function BlogTableOfContents({
  sections,
}: BlogTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveId(id);
      setMobileOpen(false);
    }
  };

  return (
    <aside className="w-full">
      {/* Mobile Collapsible TOC */}
      <div className="lg:hidden mb-8 bg-white rounded-2xl border border-[#E4DED3] p-4 shadow-xs">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#202A2E] cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <List className="w-4 h-4 text-[#A65D32]" />
            Table of Contents
          </span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              mobileOpen ? "rotate-180 text-[#A65D32]" : ""
            }`}
          />
        </button>

        {mobileOpen && (
          <nav className="mt-3 pt-3 border-t border-[#FAF7F2] space-y-1">
            {sections.map((sec, idx) => (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollTo(sec.id)}
                className={`w-full text-left py-1.5 px-2.5 rounded-lg text-xs transition-colors cursor-pointer block truncate ${
                  activeId === sec.id
                    ? "font-bold text-[#A65D32] bg-[#A65D32]/10"
                    : "text-[#62574D] hover:text-[#202A2E]"
                }`}
              >
                {idx + 1}. {sec.heading.replace(/^\d+\.\s*/, "")}
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop Sticky Sidebar TOC */}
      <div className="hidden lg:block sticky top-28 bg-white rounded-3xl p-6 border border-[#E4DED3] shadow-xs">
        <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#FAF7F2]">
          <List className="w-4 h-4 text-[#A65D32]" />
          <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-[#202A2E]">
            Table of Contents
          </h3>
        </div>

        <nav className="space-y-1 text-xs">
          {sections.map((sec, idx) => {
            const isActive = activeId === sec.id;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollTo(sec.id)}
                className={`w-full text-left py-2 px-3 rounded-xl transition-all duration-150 cursor-pointer block leading-snug ${
                  isActive
                    ? "font-bold text-[#A65D32] bg-[#A65D32]/10 border-l-3 border-[#A65D32]"
                    : "text-[#62574D] hover:text-[#202A2E] hover:bg-[#FAF7F2]"
                }`}
              >
                <span className="text-[11px] font-mono mr-1 opacity-70">
                  {String(idx + 1).padStart(2, "0")}.
                </span>{" "}
                {sec.heading.replace(/^\d+\.\s*/, "")}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
