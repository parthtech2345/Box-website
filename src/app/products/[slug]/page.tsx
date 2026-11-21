import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Package,
  Layers,
  ArrowRight,
  Phone,
  Mail,
  ChevronRight,
  Truck,
  Leaf,
  Settings,
} from "lucide-react";
import { ALL_PRODUCTS, ProductItem } from "@/data/productsData";
import { PRODUCT_FAQS } from "@/data/productFaqsData";
import {
  FLUTE_PROFILES,
  PAPER_TYPES,
  QUALITY_PARAMETERS,
  ProductFAQ,
} from "@/data/productTechnicalData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductDetailSections from "@/components/products/ProductDetailSections";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return ALL_PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = ALL_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | AAVRIT PACKAGING",
    };
  }

  return {
    title: `${product.name} | AAVRIT PACKAGING`,
    description: product.shortDescription,
    keywords: [
      product.name,
      product.categoryName,
      "corrugated boxes manufacturer",
      "industrial packaging India",
      "custom kraft boxes",
      "Aavrit Packaging",
    ],
    openGraph: {
      title: `${product.name} | AAVRIT PACKAGING`,
      description: product.shortDescription,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 900,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = ALL_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Bespoke 5 FAQs for this product
  const faqs: ProductFAQ[] = PRODUCT_FAQS[product.slug] || [
    {
      question: `What are ${product.name} used for?`,
      answer: product.fullDescription,
    },
    {
      question: `Can ${product.name} be custom sized?`,
      answer: "Yes, all packaging is manufactured to customer length, width, and height requirements.",
    },
    {
      question: "What printing options are supported?",
      answer: "We offer flexographic printing up to 4 colours for brand artwork and handling symbols.",
    },
    {
      question: "What is the minimum order quantity (MOQ)?",
      answer: "MOQ depends on dimension and flute configuration; contact our sales desk for custom quotes.",
    },
    {
      question: "Are your boxes recyclable and eco-friendly?",
      answer: "Yes, our paperboard packaging is 100% recyclable, biodegradable, and sustainable.",
    },
  ];

  // Related products from same category
  const relatedProducts = ALL_PRODUCTS.filter(
    (p) => p.categoryId === product.categoryId && p.id !== product.id
  ).slice(0, 3);

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `https://aavritpackaging.com${product.image}`,
    description: product.shortDescription,
    category: product.categoryName,
    brand: {
      "@type": "Brand",
      name: "AAVRIT PACKAGING",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      price: "Contact for Quote",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#202A2E]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1 w-full">
        {/* ---------------------------------------------------- */}
        {/* 1. PRODUCT DETAIL PAGE BANNER                        */}
        {/* Consistent Showcase Banner across all products      */}
        {/* ---------------------------------------------------- */}
        <section className="relative w-full bg-[#202A2E] text-white overflow-hidden">
          <div className="relative w-full h-[180px] sm:h-[220px] md:h-[260px]">
            <Image
              src="/Product/Kraft Packaging Showcase Banner.png"
              alt="AAVRIT PACKAGING Solutions"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-85"
            />
            {/* Linear dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

            {/* Banner Text Content */}
            <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E97835] mb-2">
                {product.categoryName}
              </span>
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight drop-shadow-md mb-3">
                {product.name}
              </h1>

              {/* Breadcrumb Navigation: Home / Products / Category / Product Name */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-[#E4DED3]">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-[#E97835]" />
                <Link href="/products" className="hover:text-white transition-colors">
                  Products
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-[#E97835]" />
                <Link
                  href={`/products?category=${product.categoryId}`}
                  className="hover:text-white transition-colors"
                >
                  {product.categoryName}
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-[#E97835]" />
                <span className="text-white font-semibold truncate max-w-[180px] sm:max-w-none">
                  {product.name}
                </span>
              </nav>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* 2. MAIN PRODUCT OVERVIEW (Image Left + Info Right)    */}
        {/* ---------------------------------------------------- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* LEFT SIDE: Single high-quality product image */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="relative w-full aspect-[4/3] sm:aspect-square bg-[#FAF7F2] rounded-2xl border border-[#E4DED3] overflow-hidden shadow-sm group">
                <Image
                  src={product.image}
                  alt={`${product.name} - AAVRIT PACKAGING`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#493629] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#E4DED3] shadow-xs">
                  {product.categoryName}
                </div>
              </div>

              {/* Quality Badges */}
              <div className="grid grid-cols-3 gap-3 pt-1">
                <div className="bg-[#FAF7F2] border border-[#E4DED3] rounded-xl p-3 text-center">
                  <Leaf className="w-5 h-5 text-[#A65D32] mx-auto mb-1" />
                  <span className="text-[11px] font-bold text-[#202A2E] block">100% Eco Kraft</span>
                  <span className="text-[10px] text-[#7D7166]">Recyclable</span>
                </div>
                <div className="bg-[#FAF7F2] border border-[#E4DED3] rounded-xl p-3 text-center">
                  <ShieldCheck className="w-5 h-5 text-[#A65D32] mx-auto mb-1" />
                  <span className="text-[11px] font-bold text-[#202A2E] block">High ECT</span>
                  <span className="text-[10px] text-[#7D7166]">Crush Resistant</span>
                </div>
                <div className="bg-[#FAF7F2] border border-[#E4DED3] rounded-xl p-3 text-center">
                  <Settings className="w-5 h-5 text-[#A65D32] mx-auto mb-1" />
                  <span className="text-[11px] font-bold text-[#202A2E] block">Precision Cut</span>
                  <span className="text-[10px] text-[#7D7166]">±0.5mm Accuracy</span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Product Information */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Category label */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#A65D32]">
                  {product.categoryName}
                </span>
              </div>

              {/* Main Heading: Product Name */}
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#202A2E] tracking-tight leading-tight mb-4">
                {product.name}
              </h2>

              {/* Short Intro + Professional Description */}
              <p className="text-base sm:text-lg font-medium text-[#493629] mb-3 leading-snug">
                {product.shortDescription}
              </p>
              <p className="text-sm sm:text-base text-[#62574D] leading-relaxed mb-6">
                {product.fullDescription}
              </p>

              {/* Key Product Highlights */}
              <div className="mb-8 bg-[#FAF7F2]/60 rounded-xl p-4 sm:p-5 border border-[#E4DED3]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#202A2E] mb-3">
                  Key Product Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#493629]">
                      <CheckCircle2 className="w-4 h-4 text-[#A65D32] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#E97835] hover:bg-[#A65D32] text-white text-sm font-bold tracking-wide transition-colors shadow-md cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us for Quote</span>
                </a>

                <a
                  href="mailto:inquiry@aavritpackaging.com"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#FAF7F2] hover:bg-[#E4DED3]/40 text-[#202A2E] text-sm font-semibold border border-[#E4DED3] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#A65D32]" />
                  <span>Email Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- */}
        {/* INTERACTIVE SECTIONS: Specs, Technical, Calc, FAQs  */}
        {/* ---------------------------------------------------- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <ProductDetailSections
            product={product}
            faqs={faqs}
            flutes={FLUTE_PROFILES}
            paperTypes={PAPER_TYPES}
            qualityParameters={QUALITY_PARAMETERS}
          />
        </section>

        {/* ---------------------------------------------------- */}
        {/* RELATED CATEGORY PRODUCTS                            */}
        {/* ---------------------------------------------------- */}
        {relatedProducts.length > 0 && (
          <section className="w-full bg-[#FAF7F2] py-14 border-t border-[#E4DED3]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E4DED3]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#A65D32] block mb-1">
                    MORE IN THIS CATEGORY
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-[#202A2E]">
                    Related {product.categoryName}
                  </h3>
                </div>
                <Link
                  href="/products"
                  className="text-xs sm:text-sm font-bold text-[#A65D32] hover:underline inline-flex items-center gap-1"
                >
                  <span>View All Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedProducts.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/products/${rel.slug}`}
                    className="group bg-white rounded-xl border border-[#E4DED3] overflow-hidden hover:border-[#D1B48C] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative w-full aspect-[4/3] bg-[#FAF7F2] overflow-hidden">
                      <Image
                        src={rel.image}
                        alt={rel.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 bg-white border-t border-[#E4DED3]/60">
                      <h4 className="font-heading font-bold text-base text-[#202A2E] group-hover:text-[#A65D32] transition-colors line-clamp-1 mb-1">
                        {rel.name}
                      </h4>
                      <p className="text-xs text-[#62574D] line-clamp-2 mb-3">
                        {rel.shortDescription}
                      </p>
                      <span className="text-xs font-semibold text-[#A65D32] inline-flex items-center gap-1">
                        <span>View Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
