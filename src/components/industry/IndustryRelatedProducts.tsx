"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Package } from "lucide-react";
import { ALL_PRODUCTS, ProductItem } from "@/data/productsData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  industryName: string;
  relatedSlugs: string[];
}

export default function IndustryRelatedProducts({ industryName, relatedSlugs }: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  // Match actual products from existing productsData
  const products: ProductItem[] = relatedSlugs
    .map((slug) => ALL_PRODUCTS.find((p) => p.slug === slug))
    .filter((p): p is ProductItem => Boolean(p));

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (products.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header 2-Column Split */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-12 border-b border-[#E4DED3]"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
              <Package className="w-3.5 h-3.5 text-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                CATALOGUE SELECTION
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              Recommended Packaging <br className="hidden sm:inline" />
              <span className="text-[#A65D32]">Products</span>
            </h2>
          </div>

          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              Standard and bespoke corrugated box specifications recommended for {industryName.toLowerCase()}.
            </p>
          </div>
        </div>

        {/* 3-4 Related Product Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((p) => (
            <Link
              key={p.id}
              href={`/products/${p.slug}`}
              className="group flex flex-col bg-white rounded-2xl border border-[#E8D5B8] overflow-hidden shadow-xs hover:border-[#A65D32] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] bg-[#FAF7F2] overflow-hidden">
                <Image
                  src={p.image}
                  alt={`${p.name} - AAVRIT PACKAGING`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between gap-3 bg-white">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#A65D32] block mb-1">
                    {p.categoryName}
                  </span>
                  <h3 className="font-heading font-bold text-base text-[#202A2E] group-hover:text-[#A65D32] transition-colors leading-snug mb-1.5 line-clamp-1">
                    {p.name}
                  </h3>
                  <p className="text-xs text-[#62574D] line-clamp-2 leading-relaxed">
                    {p.shortDescription}
                  </p>
                </div>

                <div className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#FAF7F2] group-hover:bg-[#493629] text-[#493629] group-hover:text-white text-xs font-bold transition-all border border-[#E8D5B8] group-hover:border-[#493629] mt-2">
                  <span>View Product</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#A65D32] group-hover:text-[#D1B48C] transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
