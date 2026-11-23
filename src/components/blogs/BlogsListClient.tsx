"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { Search, X, SlidersHorizontal, BookOpen } from "lucide-react";
import { BlogPost, BLOG_CATEGORIES } from "@/data/blogsData";
import FeaturedBlogCard from "./FeaturedBlogCard";
import BlogCard from "./BlogCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface BlogsListClientProps {
  blogs: BlogPost[];
  featuredBlog: BlogPost;
}

export default function BlogsListClient({
  blogs,
  featuredBlog,
}: BlogsListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Articles");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const sectionRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  // Filter blogs based on category and search query
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All Articles" || blog.category === selectedCategory;

      if (!searchQuery.trim()) return matchesCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        blog.title.toLowerCase().includes(q) ||
        blog.excerpt.toLowerCase().includes(q) ||
        blog.category.toLowerCase().includes(q) ||
        blog.sections.some(
          (sec) =>
            sec.heading.toLowerCase().includes(q) ||
            sec.content.some((p) => p.toLowerCase().includes(q))
        );

      return matchesCategory && matchesSearch;
    });
  }, [blogs, selectedCategory, searchQuery]);

  // Animate grid items when filtered list updates
  useEffect(() => {
    if (typeof window === "undefined" || !gridRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current?.children || [],
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [filteredBlogs]);

  const handleClearFilters = () => {
    setSelectedCategory("All Articles");
    setSearchQuery("");
  };

  return (
    <section ref={sectionRef} className="w-full bg-[#FAF7F2] py-12 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* =========================================================================
            1. Featured Blog Section (Only visible when no specific search/filter is active)
        ========================================================================= */}
        {selectedCategory === "All Articles" && !searchQuery.trim() && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-[#A65D32] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A65D32]" />
                Spotlight Article
              </span>
            </div>
            <FeaturedBlogCard blog={featuredBlog} />
          </div>
        )}

        {/* =========================================================================
            2. Controls Header: Search & Category Filter Pills
        ========================================================================= */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E4DED3] shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Title & Count */}
            <div>
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#202A2E]">
                All Articles
              </h2>
              <p className="text-xs text-[#62574D] mt-0.5">
                Showing {filteredBlogs.length} of {blogs.length} packaging guides
              </p>
            </div>

            {/* Search Input Field */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C989E]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by topic, keyword, or box type..."
                className="w-full pl-10 pr-9 py-2.5 bg-[#FAF7F2] border border-[#E4DED3] focus:border-[#A65D32] focus:bg-white rounded-full text-xs sm:text-sm text-[#202A2E] placeholder-[#8C989E] focus:outline-hidden transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C989E] hover:text-[#202A2E] p-1 cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills (Horizontal Scroll on Mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-1 border-t border-[#FAF7F2]">
            <span className="text-[11px] font-bold text-[#8C989E] uppercase tracking-wider shrink-0 mr-1 hidden sm:inline-flex items-center gap-1.5">
              <SlidersHorizontal className="w-3 h-3 text-[#A65D32]" />
              Filter:
            </span>

            {BLOG_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-200 shrink-0 cursor-pointer ${isActive
                      ? "bg-[#202A2E] text-white shadow-xs"
                      : "bg-[#FAF7F2] text-[#62574D] hover:bg-[#E4DED3]/60 hover:text-[#202A2E] border border-[#E4DED3]"
                    }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            3. Main 3-Column Editorial Blog Grid
        ========================================================================= */}
        {filteredBlogs.length > 0 ? (
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          /* Empty Search Results State */
          <div className="bg-white rounded-3xl p-10 sm:p-14 text-center border border-[#E4DED3] max-w-lg mx-auto space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] border border-[#E4DED3] text-[#A65D32] flex items-center justify-center mx-auto">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#202A2E]">
              No Matching Articles Found
            </h3>
            <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
              We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo; in{" "}
              {selectedCategory !== "All Articles" ? selectedCategory : "our library"}. Try adjusting your keywords or clearing the active filters.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleClearFilters}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#E97835] hover:bg-[#d46927] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-xs cursor-pointer"
              >
                Reset Search &amp; Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
