import React, { Suspense } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { INDUSTRIES_DATA } from "@/data/industriesData";
import { getAllIndustries, getIndustryBySlug } from "@/lib/industryData";
import IndustryDetailBanner from "@/components/industry/IndustryDetailBanner";
import IndustryOverview from "@/components/industry/IndustryOverview";
import IndustryRequirements from "@/components/industry/IndustryRequirements";
import IndustryBusinesses from "@/components/industry/IndustryBusinesses";
import IndustryApplications from "@/components/industry/IndustryApplications";
import IndustryRelatedProducts from "@/components/industry/IndustryRelatedProducts";
import IndustryFAQs from "@/components/industry/IndustryFAQs";
import IndustryCTA from "@/components/industry/IndustryCTA";

export async function generateStaticParams() {
  const industries = await getAllIndustries();
  const list = industries && industries.length > 0 ? industries : INDUSTRIES_DATA;
  return list.map((ind: any) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = await getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: "Industry Packaging Solutions | AAVRIT PACKAGING",
    };
  }

  const seo = industry.seo || {};
  const metaTitle = seo.metaTitle || seo.title || `${industry.name} Packaging Solutions | AAVRIT PACKAGING`;
  const metaDescription = seo.metaDescription || industry.heroTagline || `Specialized corrugated packaging solutions for the ${industry.name} sector by AAVRIT PACKAGING.`;
  const keywords = seo.keywords || `${industry.name} packaging, corrugated boxes, industrial boxes`;
  const canonical = seo.canonical || `https://aavritpackaging.com/industries/${industry.slug}`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: keywords,
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: industry.image ? [{ url: industry.image }] : undefined,
    },
  };
}

async function IndustryContent({
  paramsPromise,
}: {
  paramsPromise: Promise<{ slug: string }>;
}) {
  const { slug } = await paramsPromise;
  const industry = await getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <>
      {industry.seo?.schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: industry.seo.schemaMarkup }}
        />
      )}

      {/* 1. Common Industry Banner & Breadcrumbs */}
      <IndustryDetailBanner
        industryName={industry.name}
        heroTagline={industry.heroTagline}
      />

      {/* 2. Industry Overview: Left Description + Right Realistic Image */}
      <IndustryOverview
        industryName={industry.name}
        image={industry.image}
        overviewParagraphs={industry.detailedOverview || []}
        challenges={industry.packagingChallenges || []}
        benefits={industry.corrugatedBenefits || []}
      />

      {/* 3. Specific Packaging Requirements */}
      <IndustryRequirements
        industryName={industry.name}
        requirements={industry.packagingRequirements || []}
      />

      {/* 4. Examples of Businesses in This Industry */}
      <IndustryBusinesses
        industryName={industry.name}
        businesses={industry.businessExamples || []}
      />

      {/* 5. Common Packaging Applications */}
      <IndustryApplications
        industryName={industry.name}
        applications={industry.packagingApplications || []}
      />

      {/* 6. Recommended Packaging Products from Existing Catalogue */}
      <IndustryRelatedProducts
        industryName={industry.name}
        relatedSlugs={industry.relatedProductSlugs || []}
      />

      {/* 7. Industry-Specific FAQs */}
      <IndustryFAQs
        industryName={industry.name}
        faqs={industry.faqs || []}
      />

      {/* 8. Industry-Specific Request a Quote CTA */}
      <IndustryCTA industryName={industry.name} />
    </>
  );
}

export default function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#202A2E]">
      <Header />

      <main className="flex-1 w-full">
        <Suspense
          fallback={
            <div className="w-full min-h-[400px] flex items-center justify-center bg-[#FAF7F2]">
              <div className="w-8 h-8 border-3 border-[#A65D32] border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          <IndustryContent paramsPromise={params} />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
