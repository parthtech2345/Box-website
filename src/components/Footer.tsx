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

            <div className="pt-2 text-xs text-[#8C989E] space-y-1">
              <div>
                <strong className="text-[#F5F2EB]">GST:</strong> 24ABCDE1234F1Z5
              </div>
              <div>
                <strong className="text-[#F5F2EB]">ISO Certification:</strong> ISO 9001:2015 Compliant
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
                <Link href="#contact" className="hover:text-[#E97835] transition-colors">
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
