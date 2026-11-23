import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BlogsHero,
  BlogsListClient,
} from "@/components/blogs";
import { getAllBlogs, getFeaturedBlog } from "@/data/blogsData";

export const metadata: Metadata = {
  title: "Packaging Insights & Knowledge | AAVRIT PACKAGING",
  description:
    "Explore educational guides, technical articles, and practical insights on corrugated box structures, GSM calculations, manufacturing, and industry packaging solutions.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Packaging Insights & Knowledge | AAVRIT PACKAGING",
    description:
      "Explore educational guides, technical articles, and practical insights on corrugated box structures, GSM calculations, manufacturing, and industry packaging solutions.",
    url: "/blogs",
    images: [
      {
        url: "/blog/Modern Packaging Workspace Scene.png",
        width: 1200,
        height: 630,
        alt: "AAVRIT PACKAGING Packaging Insights & Knowledge",
      },
    ],
  },
};

export default function BlogsPage() {
  const blogs = getAllBlogs();
  const featuredBlog = getFeaturedBlog();

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#202A2E] flex flex-col">
      {/* 1. Global Navigation */}
      <Header />

      <main className="flex-1 w-full">
        {/* 2. Hero Section with requested banner */}
        <BlogsHero />

        {/* 3. Interactive Listing with Search & Category Filters */}
        <BlogsListClient blogs={blogs} featuredBlog={featuredBlog} />
      </main>

      {/* 5. Global Footer */}
      <Footer />
    </div>
  );
}
