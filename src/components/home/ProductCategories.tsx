import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCategory {
  id: string;
  title: string;
  image: string;
  href: string;
}

const CATEGORIES: ProductCategory[] = [
  {
    id: "corrugated-boxes",
    title: "Corrugated Boxes",
    image: "/home/product-categories/corrugated-boxes.png",
    href: "#construction",
  },
  {
    id: "printed-corrugated-boxes",
    title: "Printed Corrugated Boxes",
    image: "/home/product-categories/printed-corrugated-boxes.png",
    href: "#quote",
  },
  {
    id: "die-cut-boxes",
    title: "Die-Cut Boxes",
    image: "/home/product-categories/die-cut-boxes.png",
    href: "#quote",
  },
  {
    id: "industrial-packaging",
    title: "Industrial Packaging",
    image: "/home/product-categories/industrial-packaging.png",
    href: "#construction",
  },
  {
    id: "food-packaging",
    title: "Food Packaging",
    image: "/home/product-categories/food-packaging.png",
    href: "#quote",
  },
  {
    id: "ecommerce-packaging",
    title: "E-commerce Packaging",
    image: "/home/product-categories/ecommerce-packaging.png",
    href: "#quote",
  },
];

export default function ProductCategories() {
  return (
    <section
      id="products"
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 border-b border-[#E4DED3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Premium Editorial 2-Column Split */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 mb-8 sm:mb-12 border-b border-[#E4DED3]">
          {/* Left Column: Eyebrow + Main Big Headline */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/20 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                OUR PACKAGING SOLUTIONS
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              Explore Our <br className="hidden sm:inline" />
              <span className="text-[#A65D32]">Product Categories</span>
            </h2>
          </div>

          {/* Right Column: Context Description with Accent Border */}
          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              Discover our comprehensive range of corrugated packaging solutions,
              engineered with precision to meet diverse industrial, commercial, and shipping requirements.
            </p>
          </div>
        </div>

        {/* 6 Compact Product Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group flex flex-col bg-[#FFFFFF] rounded-xl border border-[#E4DED3] overflow-hidden shadow-xs hover:border-[#D1B48C] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              {/* Image Container with compact aspect ratio (4/3) and NO text overlay */}
              <div className="relative w-full aspect-[4/3] bg-[#FAF7F2] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={`${cat.title} - Natural kraft corrugated cardboard packaging`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  priority={cat.id === "corrugated-boxes" || cat.id === "printed-corrugated-boxes"}
                />
              </div>

              {/* Card Footer: Category Name & View Products Button */}
              <div className="p-4 sm:p-5 flex items-center justify-between gap-3 bg-white border-t border-[#E4DED3]/60">
                <h3 className="font-heading font-bold text-lg sm:text-xl text-[#202A2E] group-hover:text-[#A65D32] transition-colors duration-200">
                  {cat.title}
                </h3>

                {/* View Products Pill Button */}
                <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#493629] text-white text-xs sm:text-sm font-semibold tracking-wide shrink-0 shadow-xs group-hover:bg-[#A65D32] transition-colors duration-200">
                  <span>View Products</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D1B48C] group-hover:translate-x-0.5 transition-transform duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
