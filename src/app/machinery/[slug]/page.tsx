import React, { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  getAllMachinery,
  getMachineBySlug,
  getMachineryBanner,
  getMachineryCTA,
} from "@/lib/machineryData";

import MachineryDetailBanner from "@/components/machinery/MachineryDetailBanner";
import MachineryOverview from "@/components/machinery/MachineryOverview";
import MachineryHowItWorks from "@/components/machinery/MachineryHowItWorks";
import MachineryRole from "@/components/machinery/MachineryRole";
import MachineryGallery from "@/components/machinery/MachineryGallery";
import MachineryFAQs from "@/components/machinery/MachineryFAQs";
import MachineryDetailCTA from "@/components/machinery/MachineryDetailCTA";

interface MachineryDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const machines = await getAllMachinery();
  return machines.map((machine) => ({
    slug: machine.slug,
  }));
}

export async function generateMetadata({
  params,
}: MachineryDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const machine = await getMachineBySlug(slug);

  if (!machine) {
    return {
      title: "Machine Not Found | AAVRIT PACKAGING",
    };
  }

  const title = machine.seo?.title || `${machine.name} | AAVRIT PACKAGING`;
  const description =
    machine.seo?.description || machine.shortDescription || machine.fullDescription;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: machine.image,
          width: 1200,
          height: 630,
          alt: machine.name,
        },
      ],
    },
  };
}

async function MachineryDetailContent({
  params,
}: MachineryDetailPageProps) {
  const { slug } = await params;
  const [machine, banner, cta] = await Promise.all([
    getMachineBySlug(slug),
    getMachineryBanner(),
    getMachineryCTA(),
  ]);

  if (!machine) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#202A2E]">
      <Header />
      <main className="flex-1 w-full">
        {/* 1. Common Machinery Banner with Breadcrumbs */}
        <MachineryDetailBanner
          name={machine.name}
          category={machine.category}
          shortDescription={machine.shortDescription}
          bannerData={banner}
        />

        {/* 2. Main Machinery Overview: Description Left + Image Right */}
        <MachineryOverview machine={machine} />

        {/* 3. How This Machine Works: 5–6 Checkpoints */}
        <MachineryHowItWorks
          steps={machine.workingSteps}
          machineName={machine.name}
        />

        {/* 4. Role in Corrugated Box Manufacturing */}
        <MachineryRole
          rolePoints={machine.rolePoints}
          machineName={machine.name}
        />

        {/* 5. Machine Image Gallery (Front, Working, Processing with Lightbox) */}
        <MachineryGallery
          gallery={machine.gallery}
          machineName={machine.name}
        />

        {/* 6. Machine-Specific FAQs (5 relevant questions) */}
        <MachineryFAQs
          faqs={machine.faqs}
          machineName={machine.name}
        />

        {/* 7. Final Contact CTA */}
        <MachineryDetailCTA data={cta?.detail} />
      </main>
      <Footer />
    </div>
  );
}

export default function MachineryDetailPage(props: MachineryDetailPageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="w-8 h-8 border-3 border-[#E97835] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <MachineryDetailContent {...props} />
    </Suspense>
  );
}
