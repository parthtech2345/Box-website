import React, { Suspense } from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ContactHero,
  ContactInfoCards,
  ContactInquiryForm,
  ContactLocationMap,
  WhyContactUs,
  ContactFAQs,
} from "@/components/contact";
import { getAllContactSections, getContactSection } from "@/lib/contactData";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getContactSection("seo");

  const title =
    seo?.metaTitle || "Contact Us | AAVRIT PACKAGING";
  const description =
    seo?.metaDescription ||
    "Connect with AAVRIT PACKAGING for industrial corrugated box inquiries, custom packaging quotations, technical specifications, and factory visits.";
  const keywords = seo?.metaKeywords || "corrugated box manufacturer, contact packaging factory, custom box quotation";
  const canonical = seo?.canonicalLink || "/contact";
  const ogImage = seo?.ogImage || "/contact/Contact Support Workspace.png";
  const ogImageAlt = seo?.ogImageAlt || "AAVRIT PACKAGING Contact Support Workspace";

  return {
    title,
    description,
    keywords,
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

async function ContactPageContent() {
  const sections = await getAllContactSections();

  const heroData = sections?.hero || sections?.banner;
  const infoCardsData = sections?.["info-cards"] || sections?.infoCards;
  const inquiryFormData = sections?.["inquiry-form"] || sections?.inquiryForm;
  const locationMapData = sections?.["location-map"] || sections?.locationMap;
  const whyConnectData = sections?.["why-connect"] || sections?.whyConnect;
  const faqsData = sections?.faqs;
  const seoData = sections?.seo;

  return (
    <>
      {seoData?.schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: seoData.schemaMarkup }}
        />
      )}

      {/* 1. Hero Section & Mascot */}
      <ContactHero data={heroData} />

      {/* 2. Contact Information Cards */}
      <ContactInfoCards data={infoCardsData} />

      {/* 3. Main Inquiry Form & Assistance Panel */}
      <ContactInquiryForm data={inquiryFormData} />

      {/* 4. Google Maps & Office Location */}
      <ContactLocationMap data={locationMapData} />

      {/* 5. Why Contact AAVRIT PACKAGING */}
      <WhyContactUs data={whyConnectData} />

      {/* 6. Contact FAQs */}
      <ContactFAQs data={faqsData} />
    </>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#202A2E] flex flex-col">
      {/* Global Navigation */}
      <Header />

      <main className="flex-1 w-full">
        <Suspense
          fallback={
            <div className="w-full min-h-[500px] flex items-center justify-center bg-[#FAF7F2]">
              <div className="w-8 h-8 border-3 border-[#A65D32] border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          <ContactPageContent />
        </Suspense>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
