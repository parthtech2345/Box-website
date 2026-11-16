import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, Layers, ShieldCheck, Tag, ShoppingCart, Apple, Package } from "lucide-react";

export default function ProductCategories() {
  const products = [
    {
      title: "Standard Corrugated Shipping Boxes",
      subtitle: "Universal 3-Ply & 5-Ply RSC Cartons",
      description:
        "The backbone of industrial logistics. Regular Slotted Cartons (RSC) precision cut from high-burst kraft board to protect goods in warehouse transit and freight handling.",
      image: "/images/hero-boxes.png",
      ply: "3 & 5 Ply",
      colSpan: "lg:col-span-7",
      aspect: "aspect-[16/10]",
      badge: "Highest Demand",
    },
    {
      title: "Printed Corrugated Packaging",
      subtitle: "Multi-Color Flexo & Retail Ready",
      description:
        "High-definition flexographic direct-to-board printing with brand logos, barcode compliance, and shipping warning iconography.",
      image: "/images/printed-boxes.png",
      ply: "Up to 4 Colors",
      colSpan: "lg:col-span-5",
      aspect: "aspect-[4/3]",
      badge: "Brand Identity",
    },
    {
      title: "Heavy-Duty Industrial 7-Ply Cartons",
      subtitle: "Extreme Load Resistance for Exports",
      description:
        "Triple-wall corrugated containers engineered to replace wooden crates for heavy automotive parts, pumps, solar components, and export sea-freight.",
      image: "/images/heavy-duty-box.png",
      ply: "7 Ply Triple Wall",
      colSpan: "lg:col-span-5",
      aspect: "aspect-[4/3]",
      badge: "Heavy Industrial",
    },
    {
      title: "Food, Produce & Agricultural Boxes",
      subtitle: "Ventilated & Cold-Chain Tested",
      description:
        "Engineered with die-cut air vents, hand holes, and moisture-resistant virgin liners for mangoes, apples, fresh fruits, vegetables, and frozen food distribution.",
      image: "/images/produce-boxes.png",
      ply: "Ventilated Fluting",
      colSpan: "lg:col-span-7",
      aspect: "aspect-[16/10]",
      badge: "Food Safe",
    },
  ];

  return (
    <section id="products" className="w-full bg-[#FFFFFF] py-14 border-b border-[#E4DED3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E97835]/10 text-[#E97835] text-xs font-bold uppercase tracking-wider mb-3">
            Product Portfolio
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-tight mb-4">
            Packaging Solutions for Every Requirement
          </h2>
          <p className="text-base sm:text-lg text-[#687378] font-normal leading-relaxed">
            Explore corrugated packaging solutions designed for different products, industries, and transportation needs across India and international export corridors.
          </p>
        </div>

        {/* Asymmetrical Editorial Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {products.map((item, idx) => (
            <div
              key={idx}
              className={`${item.colSpan} bg-[#F5F2EB] rounded-2xl border border-[#E4DED3] overflow-hidden group hover:border-[#D1B48C] hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
            >
              {/* Product Image */}
              <div className={`relative w-full ${item.aspect} overflow-hidden bg-[#202A2E]/5`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-[#202A2E]/90 text-white text-xs font-semibold rounded-md backdrop-blur-sm">
                    {item.ply}
                  </span>
                  <span className="px-3 py-1 bg-[#E97835] text-white text-xs font-semibold rounded-md shadow-sm">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-xs uppercase font-bold text-[#E97835] tracking-wider mb-1">
                    {item.subtitle}
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#202A2E] mb-3 group-hover:text-[#E97835] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#687378] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E4DED3] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#687378]">
                    Custom GSM & Burst Factor available
                  </span>
                  <a
                    href="#quote"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#202A2E] group-hover:text-[#E97835] transition-colors"
                  >
                    <span>Explore Specifications</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Categories List Strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-6 bg-[#F5F2EB] rounded-2xl border border-[#E4DED3]">
          {[
            { name: "Die-Cut Cartons", icon: Box, desc: "Self-locking mailers" },
            { name: "Industrial Crating", icon: Layers, desc: "Triple-wall containers" },
            { name: "Food & Dairy", icon: Apple, desc: "Ventilated fresh trays" },
            { name: "E-Commerce Mailers", icon: ShoppingCart, desc: "Tear-strip tamper proof" },
            { name: "Printed Brand Boxes", icon: Tag, desc: "Multi-color flexo" },
            { name: "Custom Partitions", icon: Package, desc: "Corrugated cell dividers" },
          ].map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div key={i} className="flex flex-col items-center text-center p-3 rounded-lg hover:bg-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#E97835] mb-2">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-semibold text-xs sm:text-sm text-[#202A2E]">{cat.name}</span>
                <span className="text-[11px] text-[#687378]">{cat.desc}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
