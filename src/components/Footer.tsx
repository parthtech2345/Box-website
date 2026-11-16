import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Boxes,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Leaf,
  Globe,
  Clock,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer id="contact" className="w-full bg-[#202A2E] text-white pt-16 pb-12 border-t border-[#202A2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            
            {/* Col 1: Brand & Overview (4 cols) */}
            <div className="lg:col-span-4 flex flex-col">
              <Link href="/" className="flex items-center gap-3 mb-5 group">
                <div className="relative h-12 w-56">
                  <Image
                    src="/images/aavrit_logo_dark_bg.svg"
                    alt="AAVRIT PACKAGING Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </Link>

              <p className="text-xs sm:text-sm text-[#F5F2EB]/80 leading-relaxed mb-6">
                AAVRIT PACKAGING is an Indian corrugated box manufacturing enterprise operating high-capacity continuous corrugation lines. Inspired by the Sanskrit word for complete protection and enclosure, we engineer heavy-duty 3, 5, and 7-ply cartons that guarantee protection across domestic and export corridors.
              </p>

              <div className="flex items-center gap-3 text-xs text-[#D1B48C]">
                <ShieldCheck className="w-4 h-4 text-[#7B8D78]" />
                <span>Certified Indian Paper Mill Sourcing</span>
              </div>
            </div>

            {/* Col 2: Core Products (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="font-heading font-bold text-lg text-white mb-4 uppercase tracking-wider text-xs">
                Product Categories
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#F5F2EB]/80">
                <li>
                  <Link href="#products" className="hover:text-[#E97835] transition-colors">
                    Standard Corrugated Boxes (RSC)
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="hover:text-[#E97835] transition-colors">
                    Heavy-Duty 7-Ply Export Cartons
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="hover:text-[#E97835] transition-colors">
                    Multi-Color Flexo Printed Boxes
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="hover:text-[#E97835] transition-colors">
                    Die-Cut Self-Locking Mailers
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="hover:text-[#E97835] transition-colors">
                    Ventilated Fruit & Produce Packaging
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="hover:text-[#E97835] transition-colors">
                    Corrugated Partitions & Pads
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Technical & Industries (2 cols) */}
            <div className="lg:col-span-2">
              <h4 className="font-heading font-bold text-lg text-white mb-4 uppercase tracking-wider text-xs">
                Engineering & Tech
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#F5F2EB]/80">
                <li>
                  <Link href="#construction" className="hover:text-[#E97835] transition-colors">
                    3, 5 & 7-Ply Analysis
                  </Link>
                </li>
                <li>
                  <Link href="#construction" className="hover:text-[#E97835] transition-colors">
                    Flute Types (B, C, E)
                  </Link>
                </li>
                <li>
                  <Link href="#quality" className="hover:text-[#E97835] transition-colors">
                    Burst Factor (BF) Testing
                  </Link>
                </li>
                <li>
                  <Link href="#quality" className="hover:text-[#E97835] transition-colors">
                    Edge Crush Test (ECT)
                  </Link>
                </li>
                <li>
                  <Link href="#manufacturing" className="hover:text-[#E97835] transition-colors">
                    Plant Operations Timeline
                  </Link>
                </li>
                <li>
                  <Link href="#industries" className="hover:text-[#E97835] transition-colors">
                    Automotive & Solar Specs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Factory & Contact Placeholders (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="font-heading font-bold text-lg text-white mb-4 uppercase tracking-wider text-xs">
                Plant & Corporate Office
              </h4>
              <div className="space-y-3 text-xs text-[#F5F2EB]/80">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#E97835] shrink-0 mt-0.5" />
                  <span>
                    Plot No. 42-45, Phase II GIDC / MIDC Industrial Corridor, Gujarat / Maharashtra, India
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#E97835] shrink-0" />
                  <span>+91 98765 43210 / +91 98765 43211</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#E97835] shrink-0" />
                  <span>inquiry@boxpackaging.in</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#D1B48C] shrink-0" />
                  <span>Mon – Sat: 8:30 AM – 7:30 PM IST</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Legal Strip */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#687378]">
            <div>
              © 2026 AAVRIT PACKAGING. All rights reserved. Protection in Every Layer.
            </div>

            <div className="flex items-center gap-6">
              <span className="hover:text-white transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span>•</span>
              <span className="hover:text-white transition-colors cursor-pointer">
                Terms of Supply
              </span>
              <span>•</span>
              <span className="hover:text-white transition-colors cursor-pointer">
                Quality Warranty
              </span>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating WhatsApp / Instant Contact Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 transition-transform duration-200 hover:scale-105 active:scale-95 group"
        aria-label="Direct WhatsApp Consultation"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline text-xs font-bold pr-1">Chat With Packaging Desk</span>
      </a>
    </>
  );
}
