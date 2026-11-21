import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { INDUSTRIES_DATA } from "@/data/industriesData";
import IndustryDetailBanner from "@/components/industry/IndustryDetailBanner";
import IndustryOverview from "@/components/industry/IndustryOverview";
import IndustryRequirements from "@/components/industry/IndustryRequirements";
import IndustryBusinesses from "@/components/industry/IndustryBusinesses";
import IndustryApplications from "@/components/industry/IndustryApplications";
import IndustryRelatedProducts from "@/components/industry/IndustryRelatedProducts";
import IndustryFAQs from "@/components/industry/IndustryFAQs";
import IndustryCTA from "@/components/industry/IndustryCTA";

export async function generateStaticParams() {
  return INDUSTRIES_DATA.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA.find((ind) => ind.slug === slug);

  if (!industry) {
    return {
      title: "Industry Packaging Solutions | AAVRIT PACKAGING",
    };
  }

  return {
    title: industry.seo.title,
    description: industry.seo.metaDescription,
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA.find((ind) => ind.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#202A2E]">
      <Header />

      <main className="flex-1 w-full">
        {/* 1. Common Industry Banner & Breadcrumbs */}
        <IndustryDetailBanner
          industryName={industry.name}
          heroTagline={industry.heroTagline}
        />

        {/* 2. Industry Overview: Left Description + Right Realistic Image */}
        <IndustryOverview
          industryName={industry.name}
          image={industry.image}
          overviewParagraphs={industry.detailedOverview}
          challenges={industry.packagingChallenges}
          benefits={industry.corrugatedBenefits}
        />

        {/* 3. Specific Packaging Requirements */}
        <IndustryRequirements
          industryName={industry.name}
          requirements={industry.packagingRequirements}
        />

        {/* 4. Examples of Businesses in This Industry */}
        <IndustryBusinesses
          industryName={industry.name}
          businesses={industry.businessExamples}
        />

        {/* 5. Common Packaging Applications */}
        <IndustryApplications
          industryName={industry.name}
          applications={industry.packagingApplications}
        />

        {/* 6. Recommended Packaging Products from Existing Catalogue */}
        <IndustryRelatedProducts
          industryName={industry.name}
          relatedSlugs={industry.relatedProductSlugs}
        />

        {/* 7. Industry-Specific FAQs (5 Questions) */}
        <IndustryFAQs
          industryName={industry.name}
          faqs={industry.faqs}
        />

        {/* 8. Industry-Specific Request a Quote CTA */}
        <IndustryCTA industryName={industry.name} />
      </main>

      <Footer />
    </div>
  );
}
