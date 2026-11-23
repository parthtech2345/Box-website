"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BlogPost } from "@/data/blogsData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface BlogDetailHeroProps {
  blog: BlogPost;
}

export default function BlogDetailHero({ blog }: BlogDetailHeroProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !contentRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full bg-[#202A2E] text-white overflow-hidden">
      {/* Full Width Banner matching exact site banner standard */}
      <div className="relative w-full aspect-[21/9] sm:aspect-[24/9] md:aspect-[2048/768] min-h-[220px] max-h-[380px]">
        <Image
          src="/blog/Modern Packaging Workspace Scene.png"
          alt={`${blog.title} Banner - AAVRIT PACKAGING`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Side Vignette Gradient for Text Contrast (Leaves workspace image on right clear and bright) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#202A2E]/90 via-[#202A2E]/60 to-transparent w-full sm:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

        {/* Banner Content: Clean Heading & Breadcrumbs */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div ref={contentRef} className="max-w-2xl">
              <h1 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-2 drop-shadow-md">
                {blog.title}
              </h1>

              {/* Breadcrumb Navigation: Home > Blogs > Current Article */}
              <nav
                className="flex items-center gap-2 text-xs sm:text-sm text-[#F5F2EB]/90 flex-wrap"
                aria-label="Breadcrumb"
              >
                <Link
                  href="/"
                  className="hover:text-[#E97835] transition-colors drop-shadow-xs"
                >
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-[#D1B48C]" />
                <Link
                  href="/blogs"
                  className="hover:text-[#E97835] transition-colors drop-shadow-xs"
                >
                  Blogs
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-[#D1B48C]" />
                <span className="text-[#D1B48C] font-semibold drop-shadow-xs truncate max-w-xs sm:max-w-md">
                  {blog.title}
                </span>
              </nav>

              <div className="flex items-center gap-3 text-xs text-[#F5F2EB]/80 mt-2.5">
                <span>{blog.publishedDate}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
                <span>•</span>
                <span className="text-[#D1B48C] font-semibold">{blog.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
