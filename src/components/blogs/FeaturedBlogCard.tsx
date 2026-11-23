"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/data/blogsData";

interface FeaturedBlogCardProps {
  blog: BlogPost;
}

export default function FeaturedBlogCard({ blog }: FeaturedBlogCardProps) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="block w-full bg-white rounded-3xl border border-[#E4DED3] p-5 sm:p-7 shadow-xs hover:shadow-md hover:border-[#D1B48C] transition-all duration-300 group overflow-hidden cursor-pointer"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left: Large Featured Cover Image (Clean - NO text on image) */}
        <div className="lg:col-span-7 relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-[#FAF7F2]">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 650px"
            className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
          />
        </div>

        {/* Right: Featured Content */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div>
            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs mb-3">
              <span className="px-3 py-1 rounded-full bg-[#A65D32]/10 text-[#A65D32] border border-[#A65D32]/25 font-bold text-[11px] uppercase tracking-wider">
                {blog.category}
              </span>
              <span className="text-[#62574D] flex items-center gap-1 text-[11px]">
                <Calendar className="w-3 h-3 text-[#A65D32]" />
                {blog.publishedDate}
              </span>
              <span className="text-[#62574D] flex items-center gap-1 text-[11px]">
                <Clock className="w-3 h-3 text-[#A65D32]" />
                {blog.readTime}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-[#202A2E] leading-snug group-hover:text-[#A65D32] transition-colors">
              {blog.title}
            </h2>

            {/* Excerpt */}
            <p className="text-xs sm:text-sm text-[#62574D] mt-2.5 leading-relaxed line-clamp-3">
              {blog.excerpt}
            </p>
          </div>

          {/* Action Link: View Details Button */}
          <div className="pt-2">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E97835] group-hover:bg-[#d46927] text-white text-xs font-bold tracking-wider uppercase shadow-xs group-hover:shadow-md transition-all duration-200">
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
