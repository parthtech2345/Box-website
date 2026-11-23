import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#182023] text-[#F5F2EB] border-t border-[#344247]">
      {/* Main Footer Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-10 w-48">
              <Image
                src="/images/aavrit_logo_dark_bg.svg"
                alt="AAVRIT PACKAGING Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-[#8C989E] leading-relaxed max-w-sm">
              Manufacturers of heavy-duty industrial cartons, 3-ply, 5-ply, 7-ply corrugated boxes,
              custom printed master packaging, and precision die-cut shipping solutions.
            </p>

            {/* Social Media Links */}
            <div className="pt-3">
              <span className="text-xs font-bold text-[#F5F2EB] uppercase tracking-wider block mb-3">
                Follow Us
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="w-9 h-9 rounded-lg bg-[#202A2E] hover:bg-[#E97835] text-[#A6B2B8] hover:text-white border border-[#344247] hover:border-[#E97835] flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  title="YouTube"
                  className="w-9 h-9 rounded-lg bg-[#202A2E] hover:bg-[#E97835] text-[#A6B2B8] hover:text-white border border-[#344247] hover:border-[#E97835] flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  title="X (Twitter)"
                  className="w-9 h-9 rounded-lg bg-[#202A2E] hover:bg-[#E97835] text-[#A6B2B8] hover:text-white border border-[#344247] hover:border-[#E97835] flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-[#202A2E] hover:bg-[#E97835] text-[#A6B2B8] hover:text-white border border-[#344247] hover:border-[#E97835] flex items-center justify-center transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#8C989E]">
              <li>
                <Link href="/" className="hover:text-[#E97835] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E97835] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#E97835] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/custom-packaging" className="hover:text-[#E97835] transition-colors">
                  Custom Packaging
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-[#E97835] transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/machinery" className="hover:text-[#E97835] transition-colors">
                  Machinery & Technology
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-[#E97835] transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#E97835] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-[#E97835] transition-colors">
                  Packaging Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E97835] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-2 text-sm text-[#8C989E]">
              <li>
                <Link href="/products?category=corrugated-boxes" className="hover:text-[#E97835] transition-colors">
                  Corrugated Boxes
                </Link>
              </li>
              <li>
                <Link href="/products?category=printed-corrugated-boxes" className="hover:text-[#E97835] transition-colors">
                  Printed Boxes
                </Link>
              </li>
              <li>
                <Link href="/products?category=die-cut-boxes" className="hover:text-[#E97835] transition-colors">
                  Die-Cut Mailers
                </Link>
              </li>
              <li>
                <Link href="/products?category=industrial-packaging" className="hover:text-[#E97835] transition-colors">
                  Industrial Packaging
                </Link>
              </li>
              <li>
                <Link href="/products?category=food-packaging" className="hover:text-[#E97835] transition-colors">
                  Food Packaging
                </Link>
              </li>
              <li>
                <Link href="/products?category=ecommerce-packaging" className="hover:text-[#E97835] transition-colors">
                  E-commerce Cartons
                </Link>
              </li>
            </ul>
          </div>

          {/* Factory & Direct Contacts */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Plant & Office
            </h4>
            <div className="space-y-2.5 text-sm text-[#8C989E]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E97835] shrink-0 mt-0.5" />
                <span>Plot No. 42, Phase II GIDC Industrial Estate, Gujarat 382445, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E97835] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E97835] shrink-0" />
                <a href="mailto:inquiry@aavritpackaging.com" className="hover:text-white transition-colors">
                  inquiry@aavritpackaging.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Sub-Footer */}
      <div className="border-t border-[#2C383D] py-5 px-4 sm:px-6 lg:px-8 text-xs text-[#8C989E]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>© 2026 AAVRIT PACKAGING. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Supply
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
