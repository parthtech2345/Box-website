import React from "react";
import { CheckCircle2, BookmarkCheck } from "lucide-react";
import { BlogKeyTakeaway } from "@/data/blogsData";

interface BlogKeyTakeawaysProps {
  takeaways: BlogKeyTakeaway[];
}

export default function BlogKeyTakeaways({
  takeaways,
}: BlogKeyTakeawaysProps) {
  return (
    <div className="my-10 bg-white rounded-3xl p-6 sm:p-8 border border-[#E4DED3] shadow-xs">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5 pb-3 border-b border-[#FAF7F2]">
        <div className="w-8 h-8 rounded-lg bg-[#A65D32]/10 text-[#A65D32] flex items-center justify-center shrink-0">
          <BookmarkCheck className="w-4 h-4" />
        </div>
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#A65D32] block">
            SUMMARY &amp; ESSENTIALS
          </span>
          <h3 className="font-heading font-bold text-lg text-[#202A2E]">
            Key Takeaways
          </h3>
        </div>
      </div>

      {/* Grid of Points */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {takeaways.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E4DED3]/80 space-y-1.5"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#78846A] shrink-0" />
              <h4 className="font-heading font-bold text-xs sm:text-sm text-[#202A2E]">
                {item.point}
              </h4>
            </div>
            <p className="text-xs text-[#62574D] leading-relaxed pl-6">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
