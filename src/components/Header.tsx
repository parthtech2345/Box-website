"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Package,
  Layers,
  ShieldCheck,
  Factory,
  ArrowRight,
  Boxes,
  Truck,
  Leaf,
  ExternalLink,
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // On homepage: transparent until scrolled past top hero zone
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if header should be transparent (homepage when not scrolled)
  const isTransparent = isHomepage && !isScrolled;

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        isTransparent
          ? "absolute top-0 left-0 bg-transparent"
          : "sticky top-0 bg-[#FFFFFF] shadow-md border-b border-[#E4DED3]"
      }`}
    >
      {/* 1. Top Information Strip (Dark translucent on transparent hero, solid dark otherwise) */}
      <div
        className={`text-xs py-2 px-4 transition-colors duration-300 ${
          isTransparent
            ? "bg-black/40 backdrop-blur-xs text-[#F5F2EB]/90 border-b border-white/10"
            : "bg-[#202A2E] text-[#F5F2EB] border-b border-[#202A2E]/20"
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Left Side: Phone & Email */}
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 hover:text-[#E97835] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E97835]" />
              <span className="font-semibold text-white">+91 98765 43210</span>
            </a>
            <span className="text-[#D1B48C]/40">•</span>
            <a
              href="mailto:inquiry@aavritpackaging.com"
              className="flex items-center gap-1.5 hover:text-[#E97835] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#E97835]" />
              <span className="text-white/90">inquiry@aavritpackaging.com</span>
            </a>
          </div>

          {/* Right Side: Factory Address / Location only */}
          <div className="flex items-center gap-1.5 text-white/80 text-[11px] sm:text-xs">
            <MapPin className="w-3.5 h-3.5 text-[#D1B48C]" />
            <span>Plot No. 42, Phase II GIDC, Gujarat, India</span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isTransparent
            ? "bg-transparent py-4 text-white"
            : "bg-[#FFFFFF] py-3.5 text-[#202A2E]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-7">
          {/* Official AAVRIT PACKAGING Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <div className="relative h-10 sm:h-11 w-44 sm:w-52">
              <Image
                src={
                  isTransparent
                    ? "/images/aavrit_logo_dark_bg.svg"
                    : "/images/aavrit_logo_light_bg.svg"
                }
                alt="AAVRIT PACKAGING Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <div
            className={`hidden lg:flex items-center gap-7 text-[14px] font-semibold transition-colors duration-300 ${
              isTransparent ? "text-white" : "text-[#202A2E]"
            }`}
          >
            <Link
              href="/about"
              className="h-10 inline-flex items-center px-1 hover:text-[#E97835] transition-colors"
            >
              About Us
            </Link>

            {/* Products Mega-Menu trigger */}
            <div
              className="relative group h-10 flex items-center"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                className="h-10 inline-flex items-center gap-1 px-1 hover:text-[#E97835] transition-colors cursor-pointer"
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    productsOpen ? "rotate-180 text-[#E97835]" : ""
                  }`}
                />
              </button>

              {/* Mega-menu dropdown */}
              <div
                className={`absolute top-full -left-20 w-[680px] bg-white text-[#202A2E] rounded-xl shadow-2xl border border-[#E4DED3] p-6 grid grid-cols-2 gap-4 transition-all duration-200 origin-top z-50 ${
                  productsOpen
                    ? "opacity-100 scale-100 visible"
                    : "opacity-0 scale-95 invisible pointer-events-none"
                }`}
              >
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-wider font-bold text-[#687378] pb-1 border-b border-[#E4DED3]">
                    Core Categories
                  </div>
                  <Link
                    href="#products"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#F5F2EB] transition-colors group/item"
                  >
                    <div className="p-2 rounded bg-[#F5F2EB] group-hover/item:bg-[#E97835] group-hover/item:text-white transition-colors">
                      <Package className="w-5 h-5 text-[#202A2E] group-hover/item:text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#202A2E] group-hover/item:text-[#E97835]">
                        Standard Corrugated Boxes
                      </div>
                      <p className="text-xs text-[#687378] mt-0.5">
                        RSC & shipping master cartons in 3-ply and 5-ply.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="#products"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#F5F2EB] transition-colors group/item"
                  >
                    <div className="p-2 rounded bg-[#F5F2EB] group-hover/item:bg-[#E97835] group-hover/item:text-white transition-colors">
                      <Layers className="w-5 h-5 text-[#202A2E] group-hover/item:text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#202A2E] group-hover/item:text-[#E97835]">
                        Heavy-Duty 7-Ply Cartons
                      </div>
                      <p className="text-xs text-[#687378] mt-0.5">
                        Engineered for heavy automotive & machinery export.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="#products"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#F5F2EB] transition-colors group/item"
                  >
                    <div className="p-2 rounded bg-[#F5F2EB] group-hover/item:bg-[#E97835] group-hover/item:text-white transition-colors">
                      <Boxes className="w-5 h-5 text-[#202A2E] group-hover/item:text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#202A2E] group-hover/item:text-[#E97835]">
                        Printed & Branded Boxes
                      </div>
                      <p className="text-xs text-[#687378] mt-0.5">
                        High-speed multi-color flexo graphics on kraft board.
                      </p>
                    </div>
                  </Link>
                </div>

                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-wider font-bold text-[#687378] pb-1 border-b border-[#E4DED3]">
                    Specialized Solutions
                  </div>
                  <Link
                    href="#products"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#F5F2EB] transition-colors group/item"
                  >
                    <div className="p-2 rounded bg-[#F5F2EB] group-hover/item:bg-[#E97835] group-hover/item:text-white transition-colors">
                      <ShieldCheck className="w-5 h-5 text-[#202A2E] group-hover/item:text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#202A2E] group-hover/item:text-[#E97835]">
                        Die-Cut & Self-Locking Mailers
                      </div>
                      <p className="text-xs text-[#687378] mt-0.5">
                        Precision die-cut e-commerce and retail packaging.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="#products"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#F5F2EB] transition-colors group/item"
                  >
                    <div className="p-2 rounded bg-[#F5F2EB] group-hover/item:bg-[#E97835] group-hover/item:text-white transition-colors">
                      <Truck className="w-5 h-5 text-[#202A2E] group-hover/item:text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#202A2E] group-hover/item:text-[#E97835]">
                        Food & Agricultural Ventilated Boxes
                      </div>
                      <p className="text-xs text-[#687378] mt-0.5">
                        Moisture-resistant, ventilated produce export boxes.
                      </p>
                    </div>
                  </Link>

                  <div className="p-3 bg-[#F5F2EB] rounded-lg mt-2 border border-[#E4DED3]">
                    <div className="flex items-center justify-between text-xs font-bold text-[#202A2E]">
                      <span>Custom Dimensions Required?</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#E97835]" />
                    </div>
                    <p className="text-[11px] text-[#687378] mt-1">
                      Our CAD packaging engineers design custom die lines within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="#industries"
              className="h-10 inline-flex items-center px-1 hover:text-[#E97835] transition-colors"
            >
              Industries We Serve
            </Link>
            <Link
              href="#manufacturing"
              className="h-10 inline-flex items-center px-1 hover:text-[#E97835] transition-colors"
            >
              Manufacturing
            </Link>
            <Link
              href="#quality"
              className="h-10 inline-flex items-center px-1 hover:text-[#E97835] transition-colors"
            >
              Quality
            </Link>
            <Link
              href="#contact"
              className="h-10 inline-flex items-center px-1 hover:text-[#E97835] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Right Action: Request a Quote CTA */}
          <div className="hidden lg:flex items-center ml-auto">
            <a
              href="#quote"
              className="h-10 inline-flex items-center justify-center gap-2 px-5 bg-[#E97835] text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-[#d46927] hover:shadow transition-all duration-200 active:scale-[0.98] shrink-0"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center ml-auto">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isTransparent ? "text-white hover:bg-white/10" : "text-[#202A2E] hover:bg-black/5"
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white text-[#202A2E] border-t border-[#E4DED3] px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-[#202A2E] hover:text-[#E97835]"
            >
              About Us
            </Link>
            <Link
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-[#202A2E] hover:text-[#E97835]"
            >
              Products
            </Link>
            <Link
              href="#industries"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-[#202A2E] hover:text-[#E97835]"
            >
              Industries We Serve
            </Link>
            <Link
              href="#manufacturing"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-[#202A2E] hover:text-[#E97835]"
            >
              Manufacturing
            </Link>
            <Link
              href="#quality"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-[#202A2E] hover:text-[#E97835]"
            >
              Quality
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-[#202A2E] hover:text-[#E97835]"
            >
              Contact
            </Link>
            <a
              href="#quote"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-2.5 bg-[#E97835] text-white font-semibold rounded-lg"
            >
              Request a Quote
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
