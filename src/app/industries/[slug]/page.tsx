import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, PackageCheck } from "lucide-react";
import { notFound } from "next/navigation";

export interface IndustryData {
  slug: string;
  name: string;
  description: string;
  image: string;
  applications: string[];
  features: string[];
}

export const INDUSTRIES_MAP: Record<string, IndustryData> = {
  automotive: {
    slug: "automotive",
    name: "Automotive Industry Packaging",
    description:
      "Protective packaging solutions for automotive components, spare parts, engine components, and export transportation.",
    image: "/home/industries/automotive.jpg",
    applications: [
      "Auto Components",
      "Spare Parts",
      "Engine Components",
      "Metal & Plastic Parts",
    ],
    features: [
      "Heavy-duty 5-ply & 7-ply high burst factor corrugated board",
      "Custom honeycomb cell partitions for gears and machined components",
      "Corrosion-inhibiting liner options and extreme transit stacking load",
    ],
  },
  pharmaceutical: {
    slug: "pharmaceutical",
    name: "Pharmaceutical Industry Packaging",
    description:
      "Reliable secondary packaging for pharmaceutical products, medical supplies, vials, and bottles.",
    image: "/home/industries/pharmaceutical.jpg",
    applications: [
      "Medicine Packaging",
      "Secondary Packaging",
      "Bottle Packaging",
      "Medical Equipment",
    ],
    features: [
      "Hygienic virgin kraft paper construction with clean die-cut edges",
      "Precision-fitted internal partitions preventing glass vial impact",
      "Cold-chain and humidity resistant corrugated board technology",
    ],
  },
  "food-beverage": {
    slug: "food-beverage",
    name: "Food & Beverage Packaging",
    description:
      "Practical packaging for food products, beverages, bakery goods, and everyday consumer snacks.",
    image: "/home/industries/food-beverage.jpg",
    applications: [
      "Food Products",
      "Bakery & Snacks",
      "FMCG",
      "Frozen Products",
    ],
    features: [
      "Food-grade safe board sourcing and odorless non-toxic water-based inks",
      "Die-cut hand holes and ventilation slots for temperature balancing",
      "High crush resistance for automated supermarket and pallet logistics",
    ],
  },
  ecommerce: {
    slug: "ecommerce",
    name: "E-commerce Packaging",
    description:
      "Dependable shipping packaging designed for online order fulfillment, couriers, and reliable delivery.",
    image: "/home/industries/ecommerce.jpg",
    applications: [
      "Courier Boxes",
      "Shipping Cartons",
      "Mailer Boxes",
      "Return Packaging",
    ],
    features: [
      "Self-locking front tuck mailers with adhesive peel-and-seal strips",
      "Vibrant high-resolution custom exterior and interior brand printing",
      "Lightweight E and B-flute board optimizing volumetric shipping costs",
    ],
  },
  electronics: {
    slug: "electronics",
    name: "Electronics Industry Packaging",
    description:
      "Protective packaging for electronic components, appliances, PCBA modules, and fragile accessories.",
    image: "/home/industries/electronics.jpg",
    applications: [
      "Electronic Components",
      "Appliances",
      "Accessories",
      "Fragile Products",
    ],
    features: [
      "Shock-absorbing multi-layer corrugated cushioning against transit vibration",
      "Custom fitted die-cut inserts and partition cell dividers",
      "Drop-tested board specs protecting sensitive circuits and screens",
    ],
  },
  "textile-garments": {
    slug: "textile-garments",
    name: "Textile & Garments Packaging",
    description:
      "Packaging solutions for folded garments, apparel, textile bolts, and high-volume export shipments.",
    image: "/home/industries/textile-garments.jpg",
    applications: [
      "Garment Boxes",
      "Textile Packaging",
      "Export Cartons",
      "Apparel Shippers",
    ],
    features: [
      "Anti-bulge double-wall construction ensuring stable sea container loading",
      "Smooth interior liner board preventing fabric snagging or creasing",
      "Custom export shipping mark flexographic printing compliance",
    ],
  },
  agriculture: {
    slug: "agriculture",
    name: "Agriculture Produce Packaging",
    description:
      "Corrugated packaging for fresh farm produce, fruits, vegetables, and cold-chain agricultural distribution.",
    image: "/home/industries/agriculture.jpg",
    applications: [
      "Fruits",
      "Vegetables",
      "Agricultural Products",
      "Farm Fresh Produce",
    ],
    features: [
      "Telescopic 2-piece ventilated crates for mangoes, apples, and tomatoes",
      "Moisture-barrier coated liners for cold storage and refrigerated freight",
      "Interlocking corner stacking lugs for multi-tier farm transport",
    ],
  },
  engineering: {
    slug: "engineering",
    name: "Engineering & Heavy Industrial Packaging",
    description:
      "Strong industrial packaging for machinery parts, industrial components, and heavy engineering assemblies.",
    image: "/home/industries/engineering.jpg",
    applications: [
      "Machinery Parts",
      "Industrial Components",
      "Heavy Equipment",
      "Precision Castings",
    ],
    features: [
      "Triple-wall 7-ply corrugated board engineered to replace wooden crates",
      "Static load bearing capacities exceeding 1,000 kg stacking weight",
      "Reinforced heavy-duty stitched manufacturer joints for extreme durability",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(INDUSTRIES_MAP).map((slug) => ({ slug }));
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = INDUSTRIES_MAP[slug];

  if (!industry) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#202A2E]">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb / Top Bar */}
        <section className="bg-[#FAF7F2] py-8 border-b border-[#E4DED3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#62574D]">
              <Link href="/" className="hover:text-[#A65D32] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/#industries" className="hover:text-[#A65D32] transition-colors">
                Industries
              </Link>
              <span>/</span>
              <span className="text-[#A65D32]">{industry.name}</span>
            </div>
          </div>
        </section>

        {/* Hero Section of Industry Page */}
        <section className="py-14 sm:py-14 border-b border-[#E4DED3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Left Column */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/20 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                    INDUSTRY PACKAGING SOLUTION
                  </span>
                </div>

                <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-tight mb-5">
                  {industry.name}
                </h1>

                <p className="text-base sm:text-lg text-[#62574D] leading-relaxed mb-8">
                  {industry.description}
                </p>

                {/* Applications Chips */}
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#493629] block mb-3">
                    Key Packaging Applications:
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {industry.applications.map((app, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-[#FAF7F2] border border-[#E4DED3] text-xs sm:text-sm font-semibold text-[#202A2E]"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Feature Specs */}
                <div className="space-y-3 mb-8 pt-6 border-t border-[#E4DED3]">
                  {industry.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-[#493629]">
                      <CheckCircle2 className="w-4 h-4 text-[#A65D32] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Link */}
                <Link
                  href="/#quote"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#493629] text-white text-sm font-semibold hover:bg-[#A65D32] transition-all duration-200 shadow-sm"
                >
                  <span>Request Custom Industry Quote</span>
                  <ArrowRight className="w-4 h-4 text-[#D1B48C]" />
                </Link>
              </div>

              {/* Right Column: Industry Photo */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E4DED3] shadow-lg">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
