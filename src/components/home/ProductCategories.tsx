"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Card3DTilt from "@/components/ui/Card3DTilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    href: "/products?category=corrugated-boxes",
  },
  {
    id: "printed-corrugated-boxes",
    title: "Printed Corrugated Boxes",
    image: "/home/product-categories/printed-corrugated-boxes.png",
    href: "/products?category=printed-corrugated-boxes",
  },
  {
    id: "die-cut-boxes",
    title: "Die-Cut Boxes",
    image: "/home/product-categories/die-cut-boxes.png",
    href: "/products?category=die-cut-boxes",
  },
  {
    id: "industrial-packaging",
    title: "Industrial Packaging",
    image: "/home/product-categories/industrial-packaging.png",
    href: "/products?category=industrial-packaging",
  },
  {
    id: "food-packaging",
    title: "Food Packaging",
    image: "/home/product-categories/food-packaging.png",
    href: "/products?category=food-packaging",
  },
  {
    id: "ecommerce-packaging",
    title: "E-commerce Packaging",
    image: "/home/product-categories/ecommerce-packaging.png",
    href: "/products?category=ecommerce-packaging",
  },
];

export default function ProductCategories() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Header reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 2. Staggered Wave Entrance for 6 Category Cards
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          cards,
          { opacity: 0, y: 45, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
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

  return (
    <section
      id="products"
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Premium Editorial 2-Column Split */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 sm:pb-10 mb-8 sm:mb-12 border-b border-[#E4DED3]"
        >
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

        {/* 6 Compact Product Category Cards Grid with GSAP Stagger */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {CATEGORIES.map((cat) => (
            <Card3DTilt key={cat.id} className="h-full rounded-xl">
              <Link
                href={cat.href}
                className="group flex flex-col h-full bg-[#FFFFFF] rounded-xl border border-[#E4DED3] overflow-hidden shadow-xs hover:border-[#D1B48C] hover:shadow-lg transition-all duration-300 cursor-pointer block"
              >
                {/* Image Container with compact aspect ratio (4/3) and NO text overlay */}
                <div className="relative w-full aspect-[4/3] bg-[#FAF7F2] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={`${cat.title} - Natural kraft corrugated cardboard packaging`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Card Footer: Category Name, Explore Label & Arrow Action Button */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 gap-4 bg-[#FFFFFF] border-t border-[#E4DED3]/60">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#202A2E] group-hover:text-[#A65D32] transition-colors leading-snug">
                    {cat.title}
                  </h3>

                  <div className="flex items-center justify-between pt-2 border-t border-[#E4DED3]/40">
                    <span className="text-xs font-semibold text-[#8C7E72] group-hover:text-[#202A2E] transition-colors">
                      Explore Category
                    </span>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF7F2] group-hover:bg-[#493629] text-[#A65D32] group-hover:text-white transition-all duration-200 border border-[#E4DED3] group-hover:border-[#493629]">
                      <span className="text-xs font-bold">Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#A65D32] group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            </Card3DTilt>
          ))}
        </div>
      </div>
    </section>
  );
}
