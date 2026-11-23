"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ZoomIn, CheckCircle2, ArrowRight } from "lucide-react";
import GalleryHero from "./GalleryHero";
import GalleryCTA from "./GalleryCTA";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface GalleryItemDetails {
  id: string;
  title: string;
  image: string;
  category: string;
  description: string;
  keypoints: string[];
  link?: string;
  linkText?: string;
}

interface GallerySectionData {
  category: string;
  items: GalleryItemDetails[];
}

const GALLERY_SECTIONS: GallerySectionData[] = [
  // 1. Machinery & Technology
  {
    category: "Machinery & Technology",
    items: [
      {
        id: "mach-1",
        title: "Automatic Corrugation Production Line",
        image: "/Machinery/corrugation-machine.png",
        category: "Machinery & Technology",
        description: "Continuous industrial corrugator combining virgin kraft paper reels and fluting medium into high-strength 3-ply and 5-ply boards.",
        keypoints: [
          "Continuous multi-reel paper feeding",
          "Steam-pressured flute forming rolls",
          "Precision starch adhesive bonding",
        ],
        link: "/machinery/corrugation-machine",
        linkText: "Explore Machine",
      },
      {
        id: "mach-2",
        title: "High-Definition Flexo Printer Slotter",
        image: "/Machinery/flexo-printer-slotter.png",
        category: "Machinery & Technology",
        description: "Inline multi-colour flexographic printing, scoring, and slotting equipment delivering sharp corporate branding and exact fold lines.",
        keypoints: [
          "Multi-colour water-based ink registration",
          "Synchronized rotary scoring & creasing",
          "High-speed precision carton slotting",
        ],
        link: "/machinery/flexo-printer-slotter",
        linkText: "Explore Machine",
      },
      {
        id: "mach-3",
        title: "Rotary Die-Cutting Machine",
        image: "/Machinery/die-cutting-machine.png",
        category: "Machinery & Technology",
        description: "High-speed rotary cylinder die-cutter producing complex box geometries, hand holes, ventilation ports, and self-locking tabs.",
        keypoints: [
          "Custom curved cutting dies",
          "Intricate tab & crease formation",
          "Tear-free smooth edge finishing",
        ],
        link: "/machinery/die-cutting-machine",
        linkText: "Explore Machine",
      },
      {
        id: "mach-4",
        title: "Automated Folder Gluer & Stitching Line",
        image: "/Machinery/folder-gluer-stitcher.png",
        category: "Machinery & Technology",
        description: "High-efficiency joint assembly system delivering accurate hot/cold adhesive application and reinforced heavy-gauge wire stitching.",
        keypoints: [
          "Dual adhesive & wire stitch options",
          "Accurate squaring and alignment",
          "High-speed bundle counting & stacking",
        ],
        link: "/machinery/folder-gluer-stitcher",
        linkText: "Explore Machine",
      },
    ],
  },

  // 2. Custom Packaging
  {
    category: "Custom Packaging",
    items: [
      {
        id: "cust-1",
        title: "Minimal Kraft Packaging Arrangement",
        image: "/custom pack/Minimal Kraft Packaging Arrangement.png",
        category: "Custom Packaging",
        description: "Bespoke engineered kraft corrugated packaging designed for direct-to-consumer presentation and branded retail shipments.",
        keypoints: [
          "Tailored internal dimensions for exact fit",
          "Natural kraft aesthetic with zero void-fill",
          "Optimized package weight and transport freight",
        ],
        link: "/custom-packaging",
        linkText: "View Custom Packaging",
      },
      {
        id: "cust-2",
        title: "Custom Prototyped Box Formats",
        image: "/about/Professional Corrugated Packaging Display.png",
        category: "Custom Packaging",
        description: "Custom dimension CAD samples and box geometries fabricated to match exact client product dimensions and drop-test requirements.",
        keypoints: [
          "24-Hour CAD sample fabrication",
          "Multi-ply board caliper matching",
          "Drop-test and compression verified",
        ],
        link: "/custom-packaging",
        linkText: "View Custom Packaging",
      },
      {
        id: "cust-3",
        title: "Crash-Lock Auto-Bottom Cartons",
        image: "/Product/items/auto-bottom-boxes.png",
        category: "Custom Packaging",
        description: "Instant pre-glued bottom base designed for rapid manual or semi-automated packaging line fulfillment with zero tape required.",
        keypoints: [
          "Instant push-open base erection",
          "Eliminates bottom taping labor",
          "High bottom-load carrying capacity",
        ],
        link: "/custom-packaging",
        linkText: "View Custom Packaging",
      },
      {
        id: "cust-4",
        title: "Self-Locking Shipping Boxes",
        image: "/Product/items/self-locking-shipping-boxes.png",
        category: "Custom Packaging",
        description: "Interlocking side tabs and roll-over front flaps providing structural reinforcement and tamper-evident transit security.",
        keypoints: [
          "Double-layer reinforced sidewalls",
          "Tool-free self-locking assembly",
          "Premium customer unboxing presentation",
        ],
        link: "/custom-packaging",
        linkText: "View Custom Packaging",
      },
    ],
  },

  // 3. Products & Packaging
  {
    category: "Products & Packaging",
    items: [
      {
        id: "prod-1",
        title: "3-Ply Single Wall Corrugated Box",
        image: "/Product/items/3-ply-corrugated-boxes.png",
        category: "Products & Packaging",
        description: "Lightweight and dependable shipping cartons engineered for retail distribution, consumer goods, and e-commerce packaging.",
        keypoints: [
          "Single flute cushioning barrier",
          "Economical shipping freight weight",
          "100% recyclable paperboard substrate",
        ],
        link: "/products",
        linkText: "Explore Products",
      },
      {
        id: "prod-2",
        title: "5-Ply Double Wall Heavy-Duty Box",
        image: "/Product/items/5-ply-corrugated-boxes.png",
        category: "Products & Packaging",
        description: "Dual fluting layers delivering superior compression strength, stackability, and puncture resistance for heavier freight.",
        keypoints: [
          "Two fluting layers with center liner",
          "High vertical stacking compression",
          "Ideal for machinery & industrial parts",
        ],
        link: "/products",
        linkText: "Explore Products",
      },
      {
        id: "prod-3",
        title: "7-Ply Triple Wall Export Container",
        image: "/Product/items/7-ply-corrugated-boxes.png",
        category: "Products & Packaging",
        description: "Maximum-caliper heavy industrial containers designed for automotive parts, machinery exports, and heavy payload transit.",
        keypoints: [
          "Triple wall high-caliper construction",
          "Timber crate alternative with lower weight",
          "Extreme crush and impact resistance",
        ],
        link: "/products",
        linkText: "Explore Products",
      },
      {
        id: "prod-4",
        title: "Precision Die-Cut Mailer Box",
        image: "/Product/items/die-cut-boxes.png",
        category: "Products & Packaging",
        description: "Sharp crease lines and self-locking tab closures engineered for direct-to-consumer presentation and unboxing aesthetics.",
        keypoints: [
          "Roll-end tuck-front (RETF) profile",
          "Crisp creases for easy folding",
          "Custom flexo printing compatible",
        ],
        link: "/products",
        linkText: "Explore Products",
      },
    ],
  },

  // 4. Manufacturing Process
  {
    category: "Manufacturing Process",
    items: [
      {
        id: "proc-1",
        title: "Stage 01: Raw Paper Reel Selection",
        image: "/home/manufacturing-process/raw-material-selection.png",
        category: "Manufacturing Process",
        description: "Careful grading and testing of virgin kraft and recycled paper reels for bursting factor and moisture balance.",
        keypoints: [
          "Inward reel moisture & GSM check",
          "Tested for burst factor (BF)",
          "Responsibly sourced renewable fibers",
        ],
        link: "/#manufacturing",
        linkText: "View Process",
      },
      {
        id: "proc-2",
        title: "Stage 02: Flute & Board Formation",
        image: "/home/manufacturing-process/corrugation-board-formation.png",
        category: "Manufacturing Process",
        description: "Heated corrugating rollers forming precision fluted mediums and bonding liner papers with starch adhesive.",
        keypoints: [
          "Heated steam corrugating rolls",
          "Even starch glue line distribution",
          "Continuous board web cooling & scoring",
        ],
        link: "/#manufacturing",
        linkText: "View Process",
      },
      {
        id: "proc-3",
        title: "Stage 03: Multi-Colour Flexo Printing",
        image: "/home/manufacturing-process/printing-branding.png",
        category: "Manufacturing Process",
        description: "Inline high-speed flexo printing applying water-based inks for sharp brand graphics, handling icons, and barcodes.",
        keypoints: [
          "Non-toxic water-based inks",
          "Accurate multi-color registration",
          "High-contrast barcode clarity",
        ],
        link: "/#manufacturing",
        linkText: "View Process",
      },
      {
        id: "proc-4",
        title: "Stage 04: Quality Inspection & Dispatch",
        image: "/home/manufacturing-process/quality-inspection-dispatch.png",
        category: "Manufacturing Process",
        description: "Dimensional auditing, edge crush compliance checks, and stretch-wrapped palletizing ready for industrial shipment.",
        keypoints: [
          "Edge Crush Test (ECT) verification",
          "Squareness and bond strength check",
          "Palletized weather-protective stretch film",
        ],
        link: "/#manufacturing",
        linkText: "View Process",
      },
    ],
  },

  // 5. Industries We Serve
  {
    category: "Industries Served",
    items: [
      {
        id: "ind-1",
        title: "Automotive & Heavy Engineering",
        image: "/home/industries/automotive.jpg",
        category: "Industries Served",
        description: "High-density multi-ply cartons engineered to carry automotive spares, machined metal parts, and hardware without deformation.",
        keypoints: [
          "Reinforced corners for dense parts",
          "Oil and moisture-repellent board options",
          "Internal partition inserts for gears",
        ],
        link: "/industries/automotive",
        linkText: "View Automotive",
      },
      {
        id: "ind-2",
        title: "E-Commerce & Retail Shipping",
        image: "/home/industries/ecommerce.jpg",
        category: "Industries Served",
        description: "Fast-erecting mailer boxes and self-locking cartons built for courier parcel handling resilience and memorable customer unboxing.",
        keypoints: [
          "Rapid assembly for packing stations",
          "Drop-tested for parcel sorting hubs",
          "Custom branded interior printing",
        ],
        link: "/industries",
        linkText: "View Industries",
      },
      {
        id: "ind-3",
        title: "Pharmaceutical & Healthcare Transit",
        image: "/home/industries/pharmaceutical.jpg",
        category: "Industries Served",
        description: "Hygienic, moisture-resistant corrugated shippers tailored for pharmaceutical bottles, diagnostic kits, and medical disposables.",
        keypoints: [
          "Clean-room compatible processing",
          "Moisture-controlled corrugated board",
          "Tamper-evident sealing options",
        ],
        link: "/industries/pharmaceutical",
        linkText: "View Pharma",
      },
      {
        id: "ind-4",
        title: "Food & Agricultural Produce",
        image: "/home/industries/food-beverage.jpg",
        category: "Industries Served",
        description: "Ventilated, high-compression boxes manufactured for orchard harvesting, cold-storage transit, and commercial food supply chains.",
        keypoints: [
          "Ventilation holes for air circulation",
          "High humidity stacking resistance",
          "Food-grade safe contact boards",
        ],
        link: "/industries",
        linkText: "View Industries",
      },
    ],
  },
];

export default function GalleryClient() {
  const [selectedImage, setSelectedImage] = useState<GalleryItemDetails | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // GSAP Scroll Animations on Gallery Page
  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const sections = containerRef.current?.querySelectorAll(".gallery-section-block");
      sections?.forEach((sec) => {
        const header = sec.querySelector(".section-header");
        const cards = sec.querySelectorAll(".gallery-card");

        if (header) {
          gsap.fromTo(
            header,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sec,
                start: "top 85%",
              },
            }
          );
        }

        if (cards && cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sec,
                start: "top 80%",
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Close lightbox on Escape key
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <>
      {/* 1. Hero Banner */}
      <GalleryHero />

      {/* Main Clean Gallery Section */}
      <section
        ref={containerRef}
        className="w-full bg-[#FFFFFF] py-12 sm:py-14 border-b border-[#E4DED3]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
          {GALLERY_SECTIONS.map((sec, idx) => (
            <div key={idx} className="gallery-section-block space-y-6">
              {/* Category Heading matching Theme */}
              <div className="section-header flex items-center gap-3 pb-3 border-b border-[#E4DED3]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#A65D32]" />
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#202A2E] tracking-tight">
                  {sec.category}
                </h2>
              </div>

              {/* Clean Image Grid: Image + Heading Only */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                {sec.items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedImage(item)}
                    className="gallery-card group bg-[#FAF7F2] rounded-2xl border border-[#E4DED3] hover:border-[#A65D32] overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between transform hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative w-full aspect-[4/3] bg-white overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-contain p-2 group-hover:scale-106 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#202A2E]/70 hover:bg-[#E97835] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Image Heading Only */}
                    <div className="p-4 sm:p-4.5 bg-white border-t border-[#E4DED3]/60">
                      <h3 className="font-heading font-bold text-sm sm:text-base text-[#202A2E] group-hover:text-[#A65D32] transition-colors leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <GalleryCTA />

      {/* Lightbox Modal matching Website Theme (2-Column Split: Image Left, Details & Keypoints Right) */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#202A2E]/75 backdrop-blur-sm p-4 sm:p-6 transition-all duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF7F2] border border-[#E4DED3] rounded-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button top-right */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white hover:bg-[#202A2E] text-[#62574D] hover:text-white border border-[#E4DED3] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Body: 2-Column Split (Image Left, Description & Keypoints Right) */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
              {/* LEFT COLUMN: Clean Image Display */}
              <div className="md:col-span-6 p-5 sm:p-7 flex items-center justify-center bg-white border-b md:border-b-0 md:border-r border-[#E4DED3]">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#E4DED3]/80 p-3">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* RIGHT COLUMN: Details, Narrative & Keypoints */}
              <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-5 bg-[#FAF7F2]">
                <div className="space-y-3.5 pr-6">
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A65D32]">
                      {selectedImage.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#202A2E] leading-tight tracking-tight">
                    {selectedImage.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#62574D] leading-relaxed">
                    {selectedImage.description}
                  </p>

                  {/* Keypoints Box */}
                  <div className="pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#202A2E] block mb-2">
                      Key Highlights:
                    </span>
                    <ul className="space-y-2 bg-white rounded-xl p-3 sm:p-3.5 border border-[#E4DED3]">
                      {selectedImage.keypoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#62574D] leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#A65D32] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Link / Action */}
                {selectedImage.link && (
                  <div className="pt-2">
                    <Link
                      href={selectedImage.link}
                      onClick={() => setSelectedImage(null)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#202A2E] hover:bg-[#E97835] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs"
                    >
                      <span>{selectedImage.linkText || "Learn More"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
