import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/data/blogsData";

interface RelatedBlogsProps {
  blogs: BlogPost[];
}

export default function RelatedBlogs({ blogs }: RelatedBlogsProps) {
  if (!blogs || blogs.length === 0) return null;

  return (
    <section className="my-14 pt-10 border-t border-[#E4DED3]">
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#A65D32] block mb-1">
            CONTINUE READING
          </span>
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#202A2E]">
            Related Articles
          </h3>
        </div>
        <Link
          href="/blogs"
          className="text-xs font-bold text-[#A65D32] hover:text-[#874621] inline-flex items-center gap-1 group"
        >
          <span>View All Blogs</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((b) => (
          <Link
            key={b.id}
            href={`/blogs/${b.slug}`}
            className="bg-white rounded-3xl border border-[#E4DED3] overflow-hidden shadow-xs hover:shadow-md hover:border-[#D1B48C] transition-all group flex flex-col justify-between cursor-pointer"
          >
            {/* Card Content Top */}
            <div>
              {/* Card Image (Clean with NO text overlay on the image) */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#FAF7F2]">
                <Image
                  src={b.coverImage}
                  alt={b.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Heading */}
              <div className="p-5 space-y-2">
                <h4 className="font-heading font-bold text-base sm:text-lg text-[#202A2E] leading-snug group-hover:text-[#A65D32] transition-colors line-clamp-2">
                  {b.title}
                </h4>
              </div>
            </div>

            {/* View Details Action Button */}
            <div className="px-5 pb-5 pt-3 border-t border-[#FAF7F2] mt-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF7F2] group-hover:bg-[#E97835] text-[#202A2E] group-hover:text-white border border-[#E4DED3] group-hover:border-[#E97835] text-xs font-bold uppercase tracking-wider transition-all duration-200">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
