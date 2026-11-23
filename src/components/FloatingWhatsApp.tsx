"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { ALL_PRODUCTS } from "@/data/productsData";

const WHATSAPP_PHONE = "919876543210"; // +91 98765 43210

export default function FloatingWhatsApp() {
  const pathname = usePathname();

  // Dynamic message based on current page
  const { message, isProductPage, productName } = useMemo(() => {
    if (pathname && pathname.startsWith("/products/")) {
      const slug = pathname.replace("/products/", "").split("/")[0]?.trim();
      const product = ALL_PRODUCTS.find((p) => p.slug === slug);
      if (product) {
        return {
          message: `Hello, I am interested in your ${product.name}. Please share specifications and quotation.`,
          isProductPage: true,
          productName: product.name,
        };
      }
    }

    return {
      message:
        "Hello, I am interested in corrugated boxes. I would like to discuss my packaging requirement.",
      isProductPage: false,
      productName: null,
    };
  }, [pathname]);

  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <aside
      aria-label="WhatsApp quick contact"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
    >
      {/* Dynamic Floating Tooltip */}
      <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white text-[#202A2E] text-xs font-semibold shadow-xl border border-[#E4DED3] opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 pointer-events-none select-none max-w-[240px]">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
        </span>
        <span className="truncate">
          {isProductPage && productName
            ? `Inquire about ${productName}`
            : "Chat on WhatsApp with our engineers"}
        </span>
      </div>

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer ring-4 ring-[#25D366]/20 hover:ring-[#25D366]/40"
      >
        {/* Subtle Online Dot */}
        <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
        </span>

        {/* Official WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 fill-current drop-shadow-sm"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 2C6.495 2 2 6.494 2 12.029c0 1.97.57 3.81 1.558 5.36L2 22l4.773-1.524a10.007 10.007 0 005.258 1.488c5.536 0 10.03-4.494 10.03-10.035C22.061 6.494 17.567 2 12.031 2zm0 18.358c-1.745 0-3.37-.53-4.73-1.442l-.339-.228-2.825.902.919-2.753-.222-.352a8.316 8.316 0 01-1.282-4.456c0-4.606 3.748-8.353 8.354-8.353 4.607 0 8.355 3.747 8.355 8.353 0 4.607-3.748 8.353-8.355 8.353zm4.582-6.262c-.251-.126-1.484-.733-1.714-.816-.23-.084-.397-.126-.565.126-.168.251-.649.816-.795.984-.147.168-.293.189-.544.063-.251-.126-1.06-.391-2.02-1.246-.747-.666-1.252-1.489-1.399-1.74-.146-.251-.016-.387.11-.512.113-.113.251-.293.377-.44.125-.146.168-.251.251-.418.084-.168.042-.314-.021-.44-.063-.126-.565-1.36-.775-1.863-.204-.49-.412-.423-.565-.431-.146-.008-.314-.008-.481-.008-.168 0-.44.063-.67.314-.23.251-.88 8.6-.88 2.098 0 1.238.901 2.434 1.027 2.602.126.168 1.772 2.706 4.293 3.794.6.259 1.069.414 1.435.53.603.192 1.152.165 1.586.1.483-.072 1.484-.607 1.693-1.193.21-.586.21-1.089.147-1.193-.063-.105-.23-.168-.481-.293z" />
        </svg>
      </a>
    </aside>
  );
}
