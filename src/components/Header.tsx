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
  ArrowRight,
} from "lucide-react";
import { MAIN_CATEGORIES } from "@/data/productsData";

export default function Header() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = isHomepage && !isScrolled;

  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        isTransparent
          ? "absolute top-0 left-0 bg-transparent"
          : "sticky top-0 bg-[#FFFFFF] shadow-md border-b border-[#E4DED3]"
      }`}
    >
      {/* 1. Top Information Strip */}
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

            {/* Products Dropdown Trigger */}
            <div
              className="relative group h-10 flex items-center"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <Link
                href="/products"
                className="h-10 inline-flex items-center gap-1 px-1 hover:text-[#E97835] transition-colors cursor-pointer"
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    productsOpen ? "rotate-180 text-[#E97835]" : ""
                  }`}
                />
              </Link>

              {/* Clean 2-Column Text-Only Dropdown (Reference Style) */}
              <div
                className={`absolute top-full -left-6 w-[440px] bg-white text-[#202A2E] rounded-2xl shadow-xl border border-[#E4DED3] p-5 transition-all duration-200 origin-top z-50 ${
                  productsOpen
                    ? "opacity-100 scale-100 visible"
                    : "opacity-0 scale-95 invisible pointer-events-none"
                }`}
              >
                {/* Eyebrow Label */}
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#A65D32] mb-3 px-1">
                  Packaging Categories
                </div>

                {/* 2 Columns of Clean Category Names */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                  {MAIN_CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/products?category=${cat.id}`}
                      onClick={() => setProductsOpen(false)}
                      className="px-3 py-2.5 rounded-lg text-sm font-semibold text-[#202A2E] hover:text-[#A65D32] hover:bg-[#FAF7F2] transition-colors duration-150 block truncate"
                    >
                      {cat.title}
                    </Link>
                  ))}
                </div>

                {/* Bottom View All Link */}
                <div className="pt-3 mt-3 border-t border-[#E4DED3]/70 flex items-center justify-between px-1">
                  <span className="text-xs text-[#62574D]">
                    Browse full product catalog
                  </span>
                  <Link
                    href="/products"
                    onClick={() => setProductsOpen(false)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A65D32] hover:text-[#493629] transition-colors group/viewall"
                  >
                    <span>View All Products</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/viewall:translate-x-0.5 transition-transform" />
                  </Link>
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
          <div className="lg:hidden bg-white text-[#202A2E] border-t border-[#E4DED3] px-4 pt-3 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-[#202A2E] hover:text-[#E97835]"
            >
              About Us
            </Link>

            {/* Mobile Products Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between py-2 text-base font-semibold text-[#202A2E] hover:text-[#E97835]"
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileProductsOpen ? "rotate-180 text-[#E97835]" : ""
                  }`}
                />
              </button>

              {mobileProductsOpen && (
                <div className="pl-3 pr-1 py-2 space-y-1 bg-[#FAF7F2] rounded-xl my-1 border border-[#E4DED3]">
                  <Link
                    href="/products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 text-xs font-bold text-[#A65D32]"
                  >
                    All Products (30)
                  </Link>
                  {MAIN_CATEGORIES.map((c) => (
                    <Link
                      key={c.id}
                      href={`/products?category=${c.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 text-xs text-[#62574D] hover:text-[#202A2E]"
                    >
                      {c.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

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
