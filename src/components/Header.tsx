"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. Top Information Strip */}
      <div className="bg-[#202A2E] text-[#F5F2EB] text-xs py-2 px-4 border-b border-[#202A2E]/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Left Side: Phone & Email */}
          <div className="flex items-center gap-4 text-[#F5F2EB]/90 text-[11px] sm:text-xs">
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
              <span>inquiry@aavritpackaging.com</span>
            </a>
          </div>

          {/* Right Side: Factory Address / Location only */}
          <div className="flex items-center gap-1.5 text-[#F5F2EB]/80 text-[11px] sm:text-xs">
            <MapPin className="w-3.5 h-3.5 text-[#D1B48C]" />
            <span>Plot No. 42, Phase II GIDC, Gujarat, India</span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <nav
        className={`w-full bg-[#FFFFFF] transition-all duration-300 ${isScrolled
            ? "shadow-md py-3.5 border-b border-[#E4DED3]"
            : "py-4 border-b border-[#E4DED3]/80"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-7">
          {/* Official AAVRIT PACKAGING Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <div className="relative h-10 sm:h-11 w-44 sm:w-52">
              <Image
                src="/images/aavrit_logo_light_bg.svg"
                alt="AAVRIT PACKAGING Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Navigation Links - Immediately next to Logo with equivalent gap */}
          <div className="hidden lg:flex items-center gap-7 text-[14px] font-semibold text-[#202A2E]">
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
                className="h-10 inline-flex items-center gap-1 px-1 hover:text-[#E97835] transition-colors"
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${productsOpen ? "rotate-180 text-[#E97835]" : ""
                    }`}
                />
              </button>

              {/* Mega-menu dropdown */}
              <div
                className={`absolute top-full -left-20 w-[680px] bg-white rounded-xl shadow-2xl border border-[#E4DED3] p-6 grid grid-cols-2 gap-4 transition-all duration-200 origin-top ${productsOpen
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

          {/* Right Action: Request a Quote CTA pushed to the right */}
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
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#202A2E] hover:bg-[#F5F2EB] transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Out / Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E4DED3] bg-white px-4 pt-4 pb-6 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-3 font-semibold text-[#202A2E]">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-[#E97835]"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#E97835]"
              >
                About Us
              </Link>
              <Link
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#E97835]"
              >
                Products & Categories
              </Link>
              <Link
                href="#construction"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#E97835]"
              >
                Box Construction (3/5/7 Ply)
              </Link>
              <Link
                href="#industries"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#E97835]"
              >
                Industries We Serve
              </Link>
              <Link
                href="#manufacturing"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#E97835]"
              >
                Manufacturing Process
              </Link>
              <Link
                href="#quality"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#E97835]"
              >
                Quality Assurance
              </Link>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#E97835]"
              >
                Contact
              </Link>
            </div>

            <div className="pt-4 border-t border-[#E4DED3] flex flex-col gap-3">
              <a
                href="#quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-[#E97835] text-white font-semibold rounded-lg shadow-sm"
              >
                Request a Quote
              </a>
              <div className="text-xs text-[#687378] text-center">
                Need urgent assistance? Call: +91 98765 43210
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
