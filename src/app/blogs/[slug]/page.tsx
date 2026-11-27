import React, { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BlogDetailHero,
  BlogCoverImage,
  BlogTableOfContents,
  BlogKeyTakeaways,
  BlogFAQs,
  RelatedBlogs,
  BlogNavigation,
} from "@/components/blogs";
import {
  getAllBlogs,
  getBlogBySlug,
  getRelatedBlogs,
  getAdjacentBlogs,
  getBlogDetailBanner,
} from "@/lib/blogData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static routes for all initial blogs at build time
export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Generate dynamic SEO metadata
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Article Not Found | AAVRIT PACKAGING",
    };
  }

  return {
    title: `${blog.title} | AAVRIT PACKAGING`,
    description: blog.seo.description,
    keywords: blog.seo.keywords,
    alternates: {
      canonical: blog.seo.canonical || `/blogs/${blog.slug}`,
    },
    openGraph: {
      title: `${blog.title} | AAVRIT PACKAGING`,
      description: blog.seo.description,
      url: `/blogs/${blog.slug}`,
      type: "article",
      publishedTime: blog.publishedDate,
      authors: [blog.author],
      images: [
        {
          url: blog.coverImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
  };
}

// Internal async content component reading URL params behind a Suspense boundary
// This adheres to Next.js Cache Components / Partial Prefetching requirements
async function BlogDetailContent({ params }: PageProps) {
  const { slug } = await params;
  const [blog, detailBanner] = await Promise.all([
    getBlogBySlug(slug),
    getBlogDetailBanner(),
  ]);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = await getRelatedBlogs(blog.relatedBlogSlugs || []);
  const { prev, next } = await getAdjacentBlogs(blog.slug);

  // Structured Data (JSON-LD) for Article and Breadcrumbs
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: blog.title,
        description: blog.excerpt,
        image: blog.coverImage,
        datePublished: blog.publishedDate,
        author: {
          "@type": "Organization",
          name: blog.author,
        },
        publisher: {
          "@type": "Organization",
          name: "AAVRIT PACKAGING",
          logo: {
            "@type": "ImageObject",
            url: "/images/aavrit_logo_light_bg.svg",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blogs",
            item: "/blogs",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: blog.title,
            item: `/blogs/${blog.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-1 w-full">
        {/* 1. Blog Detail Hero (Clean banner with small heading and breadcrumbs) */}
        <BlogDetailHero data={detailBanner} />

        {/* 2. Main Editorial Content Area */}
        <div className="w-full bg-[#FAF7F2] py-12 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Article Heading & Metadata */}
            <div className="mb-8 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#62574D] mb-3">
                <span className="px-3 py-1 rounded-full bg-[#A65D32]/10 text-[#A65D32] border border-[#A65D32]/25 font-bold uppercase tracking-wider text-[11px]">
                  {blog.category}
                </span>
                <span>•</span>
                <span>{blog.publishedDate}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>
              <h1 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#202A2E] leading-tight">
                {blog.title}
              </h1>
            </div>

            {/* Large Cover Image */}
            <BlogCoverImage
              src={blog.coverImage}
              alt={blog.title}
              caption={`${blog.title} — Technical Reference Material`}
            />

            {/* 2-Column Editorial Grid: Left (Article Content) & Right (Sticky TOC) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Main Article Body (8 cols on desktop) */}
              <article className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-[#E4DED3] shadow-xs space-y-10">
                {blog.sections.map((sec) => (
                  <section
                    key={sec.id}
                    id={sec.id}
                    className="scroll-mt-28 space-y-4 pt-2 border-b border-[#FAF7F2] pb-8 last:border-b-0 last:pb-0"
                  >
                    {/* Section Heading */}
                    <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#202A2E] leading-snug">
                      {sec.heading}
                    </h2>

                    {sec.subheading && (
                      <h3 className="font-heading font-semibold text-base text-[#A65D32]">
                        {sec.subheading}
                      </h3>
                    )}

                    {/* Paragraph Content */}
                    <div className="space-y-3.5 text-sm sm:text-base text-[#62574D] leading-relaxed">
                      {sec.content.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    {/* Optional Callout Block */}
                    {sec.callout && (
                      <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border-l-4 border-[#A65D32] space-y-1 my-4">
                        <span className="text-xs font-bold text-[#A65D32] uppercase tracking-wider block">
                          {sec.callout.title}
                        </span>
                        <p className="text-xs sm:text-sm text-[#202A2E] leading-relaxed font-medium">
                          {sec.callout.text}
                        </p>
                      </div>
                    )}

                    {/* Optional Bullet Points */}
                    {sec.bulletPoints && (
                      <div className="space-y-3 my-4">
                        {sec.bulletPoints.map((bp, bpIdx) => (
                          <div
                            key={bpIdx}
                            className="p-3.5 rounded-xl bg-[#FAF7F2]/60 border border-[#E4DED3]/70 space-y-1"
                          >
                            <h4 className="font-heading font-bold text-xs sm:text-sm text-[#202A2E]">
                              {bp.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                              {bp.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Optional Informational Table */}
                    {sec.table && (
                      <div className="overflow-x-auto my-5 rounded-2xl border border-[#E4DED3]">
                        <table className="w-full text-left text-xs sm:text-sm border-collapse">
                          <thead>
                            <tr className="bg-[#FAF7F2] border-b border-[#E4DED3] text-[#202A2E]">
                              {sec.table.headers.map((th, thIdx) => (
                                <th
                                  key={thIdx}
                                  className="p-3 sm:p-3.5 font-bold uppercase tracking-wider text-[11px]"
                                >
                                  {th}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#E4DED3]/60 bg-white">
                            {sec.table.rows.map((row, rIdx) => (
                              <tr
                                key={rIdx}
                                className="hover:bg-[#FAF7F2]/40 transition-colors"
                              >
                                {row.map((cell, cIdx) => (
                                  <td
                                    key={cIdx}
                                    className={`p-3 sm:p-3.5 text-[#62574D] ${
                                      cIdx === 0
                                        ? "font-semibold text-[#202A2E]"
                                        : ""
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </section>
                ))}

                {/* Key Takeaways Section */}
                <BlogKeyTakeaways takeaways={blog.keyTakeaways} />

                {/* Blog-Specific FAQs */}
                <BlogFAQs faqs={blog.faqs} articleTitle={blog.title} />
              </article>

              {/* Right Column: Sticky Table of Contents (4 cols on desktop) */}
              <div className="lg:col-span-4">
                <BlogTableOfContents sections={blog.sections} />
              </div>
            </div>

            {/* Article Navigation (Previous / Next / Back to All) */}
            <BlogNavigation prev={prev} next={next} />

            {/* Related Blogs Section */}
            <RelatedBlogs blogs={relatedBlogs} />
          </div>
        </div>
      </main>
    </>
  );
}

// Page Shell keeping global layout in the App Shell while URL data streams within Suspense
export default function BlogDetailPage({ params }: PageProps) {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#202A2E] flex flex-col">
      {/* 1. Global Navigation in App Shell */}
      <Header />

      {/* 2. Dynamic Article Content wrapped in Suspense */}
      <Suspense
        fallback={
          <div className="flex-1 w-full min-h-[60vh] bg-[#FAF7F2] flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-[#A65D32] border-t-transparent animate-spin" />
          </div>
        }
      >
        <BlogDetailContent params={params} />
      </Suspense>

      {/* 3. Global Footer in App Shell */}
      <Footer />
    </div>
  );
}
