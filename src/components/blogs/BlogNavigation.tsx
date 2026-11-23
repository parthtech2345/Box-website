import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Grid } from "lucide-react";
import { BlogPost } from "@/data/blogsData";

interface BlogNavigationProps {
  prev: BlogPost | null;
  next: BlogPost | null;
}

export default function BlogNavigation({ prev, next }: BlogNavigationProps) {
  return (
    <nav
      aria-label="Article navigation"
      className="my-10 pt-8 border-t border-[#E4DED3] grid grid-cols-1 sm:grid-cols-3 gap-4 items-center"
    >
      {/* Previous Article */}
      <div>
        {prev ? (
          <Link
            href={`/blogs/${prev.slug}`}
            className="group flex flex-col p-4 rounded-2xl bg-white border border-[#E4DED3] hover:border-[#D1B48C] transition-all"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C989E] flex items-center gap-1 mb-1">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              Previous Article
            </span>
            <span className="font-heading font-bold text-xs text-[#202A2E] group-hover:text-[#A65D32] transition-colors line-clamp-1">
              {prev.title}
            </span>
          </Link>
        ) : (
          <div className="p-4 rounded-2xl bg-white/40 border border-[#E4DED3]/40 opacity-40">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C989E] block mb-1">
              Previous Article
            </span>
            <span className="text-xs text-[#8C989E]">No earlier articles</span>
          </div>
        )}
      </div>

      {/* Back to All Blogs Button (Center) */}
      <div className="text-center">
        <Link
          href="/blogs"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF7F2] hover:bg-[#E4DED3]/60 text-[#202A2E] border border-[#E4DED3] text-xs font-bold uppercase tracking-wider transition-all"
        >
          <Grid className="w-3.5 h-3.5 text-[#A65D32]" />
          <span>All Articles</span>
        </Link>
      </div>

      {/* Next Article */}
      <div className="text-right">
        {next ? (
          <Link
            href={`/blogs/${next.slug}`}
            className="group flex flex-col p-4 rounded-2xl bg-white border border-[#E4DED3] hover:border-[#D1B48C] transition-all"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C989E] flex items-center justify-end gap-1 mb-1">
              Next Article
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="font-heading font-bold text-xs text-[#202A2E] group-hover:text-[#A65D32] transition-colors line-clamp-1">
              {next.title}
            </span>
          </Link>
        ) : (
          <div className="p-4 rounded-2xl bg-white/40 border border-[#E4DED3]/40 opacity-40">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C989E] block mb-1">
              Next Article
            </span>
            <span className="text-xs text-[#8C989E]">Latest article reached</span>
          </div>
        )}
      </div>
    </nav>
  );
}
