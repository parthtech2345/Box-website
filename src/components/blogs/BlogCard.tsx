"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/data/blogsData";

interface BlogCardProps {
  blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="bg-white rounded-3xl border border-[#E4DED3] overflow-hidden shadow-xs hover:shadow-md hover:border-[#D1B48C] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
    >
      <div>
        {/* Cover Image Container (Clean - NO text overlay on the image) */}
        <div className="relative w-full aspect-[16/10] block overflow-hidden bg-[#FAF7F2]">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            className="object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
          />
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-3">
          {/* Metadata */}
          <div className="flex items-center gap-3 text-[11px] text-[#62574D]">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#A65D32]" />
              {blog.publishedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#A65D32]" />
              {blog.readTime}
            </span>
            <span>•</span>
            <span className="font-semibold text-[#A65D32]">{blog.category}</span>
          </div>

          {/* Title / Heading */}
          <h3 className="font-heading font-bold text-lg sm:text-xl text-[#202A2E] leading-snug group-hover:text-[#A65D32] transition-colors line-clamp-2">
            {blog.title}
          </h3>
        </div>
      </div>

      {/* View Details Action Button */}
      <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#FAF7F2] mt-auto">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF7F2] group-hover:bg-[#E97835] text-[#202A2E] group-hover:text-white border border-[#E4DED3] group-hover:border-[#E97835] text-xs font-bold uppercase tracking-wider transition-all duration-200">
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
