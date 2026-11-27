import React, { Suspense } from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BlogsHero,
  BlogsListClient,
  BlogsListingCTA,
} from "@/components/blogs";
import {
  getAllBlogs,
  getFeaturedBlog,
  getBlogsBanner,
  getBlogsListingCTA,
  getBlogsSEO,
} from "@/lib/blogData";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getBlogsSEO();

  const title =
    seo?.metaTitle || "Packaging Insights & Knowledge | AAVRIT PACKAGING";
  const description =
    seo?.metaDescription ||
    "Explore educational guides, technical articles, and practical insights on corrugated box structures, GSM calculations, manufacturing, and industry packaging solutions.";
  const canonical = seo?.canonicalLink || "/blogs";
  const ogImage = seo?.ogImage || "/blog/Modern Packaging Workspace Scene.png";
  const ogImageAlt =
    seo?.ogImageAlt || "AAVRIT PACKAGING Packaging Insights & Knowledge";

  return {
    title,
    description,
    keywords: seo?.metaKeywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
  };
}

async function BlogsPageContent() {
  const [blogs, featuredBlog, bannerData, listingCtaData, seo] =
    await Promise.all([
      getAllBlogs(),
      getFeaturedBlog(),
      getBlogsBanner(),
      getBlogsListingCTA(),
      getBlogsSEO(),
    ]);

  return (
    <>
      {seo?.schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: seo.schemaMarkup }}
        />
      )}

      {/* 2. Hero Section with requested banner */}
      <BlogsHero data={bannerData} />

      {/* 3. Interactive Listing with Search & Category Filters */}
      <BlogsListClient blogs={blogs} featuredBlog={featuredBlog} />

      {/* 4. Listing CTA Section */}
      <BlogsListingCTA data={listingCtaData} />
    </>
  );
}

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#202A2E] flex flex-col">
      {/* 1. Global Navigation */}
      <Header />

      <main className="flex-1 w-full">
        <Suspense
          fallback={
            <div className="flex-1 w-full min-h-[60vh] bg-[#FAF7F2] flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-2 border-[#A65D32] border-t-transparent animate-spin" />
            </div>
          }
        >
          <BlogsPageContent />
        </Suspense>
      </main>

      {/* 5. Global Footer */}
      <Footer />
    </div>
  );
}
