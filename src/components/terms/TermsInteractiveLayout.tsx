"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ArrowUp,
  FileCheck2,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";

interface SectionMeta {
  id: string;
  number: string;
  title: string;
}

const SECTIONS: SectionMeta[] = [
  { id: "introduction", number: "1", title: "Introduction" },
  { id: "website-usage", number: "2", title: "Website Usage" },
  { id: "product-information", number: "3", title: "Product Information & Descriptions" },
  { id: "specifications-customization", number: "4", title: "Product Specifications & Customization" },
  { id: "inquiries-quotations", number: "5", title: "Inquiries & Quotations" },
  { id: "orders-confirmation", number: "6", title: "Orders & Confirmation" },
  { id: "pricing-payments", number: "7", title: "Pricing & Payments" },
  { id: "production-delivery", number: "8", title: "Production & Delivery" },
  { id: "changes-cancellations", number: "9", title: "Changes & Cancellations" },
  { id: "quality-acceptance", number: "10", title: "Quality & Product Acceptance" },
  { id: "intellectual-property", number: "11", title: "Intellectual Property" },
  { id: "customer-artwork", number: "12", title: "Customer-Provided Content & Artwork" },
  { id: "website-availability", number: "13", title: "Website Availability" },
  { id: "limitation-liability", number: "14", title: "Limitation of Liability" },
  { id: "third-party-links", number: "15", title: "Third-Party Links" },
  { id: "privacy", number: "16", title: "Privacy" },
  { id: "changes-terms", number: "17", title: "Changes to These Terms" },
  { id: "governing-law", number: "18", title: "Governing Law & Jurisdiction" },
  { id: "contact-information", number: "19", title: "Contact Information" },
];

export default function TermsInteractiveLayout() {
  const [activeSection, setActiveSection] = useState<string>("introduction");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Active section scroll spy
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    });

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      {/* Mobile Collapsible Navigation Accordion */}
      <div className="lg:hidden mb-8 print:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          className="w-full flex items-center justify-between p-4 rounded-xl bg-white border border-[#E4DED3] text-[#202A2E] shadow-xs"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E97835]" />
            <span className="text-sm font-bold">
              Table of Contents:{" "}
              <span className="text-[#A65D32] font-semibold">
                {SECTIONS.find((s) => s.id === activeSection)?.title || "Select Section"}
              </span>
            </span>
          </div>
          <ChevronDown
            className={`w-4 h-4 text-[#7D7166] transition-transform duration-200 ${mobileMenuOpen ? "rotate-180" : ""
              }`}
          />
        </button>

        {mobileMenuOpen && (
          <nav
            aria-label="Mobile Table of Contents"
            className="mt-2 p-3 bg-white border border-[#E4DED3] rounded-xl shadow-lg max-h-80 overflow-y-auto space-y-1 animate-fadeIn"
          >
            {SECTIONS.map((sec) => (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollToSection(sec.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center gap-2 ${activeSection === sec.id
                    ? "bg-[#FAF7F2] text-[#E97835] font-bold border-l-3 border-[#E97835]"
                    : "text-[#62574D] hover:bg-[#FAF7F2] hover:text-[#202A2E]"
                  }`}
              >
                <span className="text-[11px] text-[#A65D32] font-bold w-5">
                  {sec.number}.
                </span>
                <span className="truncate">{sec.title}</span>
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* Main Grid: Left TOC (Desktop) + Right Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        {/* Left Sticky Sidebar (Desktop Only, hidden on print) */}
        <aside className="hidden lg:block lg:col-span-4 sticky top-20 print:hidden">
          <div className="bg-white rounded-2xl border border-[#E4DED3] p-5 shadow-xs">
            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#E4DED3]">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#202A2E] flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-[#A65D32]" />
                <span>Table of Contents</span>
              </h2>
              <span className="text-[11px] text-[#A65D32] font-semibold bg-[#FAF7F2] px-2 py-0.5 rounded-full border border-[#E4DED3]">
                19 Sections
              </span>
            </div>

            <nav
              aria-label="Desktop Table of Contents"
              className="space-y-0.5 max-h-[calc(100vh-140px)] overflow-y-auto pr-1 text-xs select-none"
            >
              {SECTIONS.map((sec) => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => scrollToSection(sec.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 cursor-pointer ${activeSection === sec.id
                      ? "bg-[#FAF7F2] text-[#E97835] font-bold shadow-2xs translate-x-1"
                      : "text-[#62574D] hover:bg-[#FAF7F2]/60 hover:text-[#202A2E]"
                    }`}
                >
                  <span
                    className={`text-[11px] font-bold w-5 shrink-0 ${activeSection === sec.id ? "text-[#E97835]" : "text-[#A65D32]"
                      }`}
                  >
                    {sec.number}.
                  </span>
                  <span className="truncate">{sec.title}</span>
                </button>
              ))}
            </nav>

            {/* Quick Helper Notice */}
            <div className="mt-4 pt-3.5 border-t border-[#E4DED3] text-[11px] text-[#7D7166] flex items-center justify-between">
              <span>AAVRIT PACKAGING Terms</span>
              <button
                type="button"
                onClick={scrollToTop}
                className="hover:text-[#E97835] transition-colors flex items-center gap-1 font-semibold cursor-pointer"
              >
                <ArrowUp className="w-3 h-3" />
                <span>Back to top</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Right Column: Complete Terms Content */}
        <article className="lg:col-span-8 bg-white rounded-2xl border border-[#E4DED3] p-6 sm:p-10 lg:p-12 shadow-xs text-[#202A2E] leading-relaxed print:p-0 print:border-none print:shadow-none print:bg-transparent">
          {/* Document Header (for print & digital) */}
          <div className="pb-8 mb-8 border-b border-[#E4DED3] print:border-b-2 print:border-black">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#A65D32] bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E4DED3] mb-3">
              Official Corporate Terms
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[#202A2E] tracking-tight mb-2">
              Terms & Conditions
            </h1>
            <p className="text-sm text-[#62574D]">
              Effective & Last Revised: <span className="font-semibold text-[#202A2E]">November 2026</span> | AAVRIT PACKAGING
            </p>
          </div>

          <div className="space-y-12 divide-y divide-[#E4DED3]/70 print:divide-y print:divide-black">
            {/* 1. Introduction */}
            <section id="introduction" className="scroll-mt-28 pt-8 first:pt-0">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">1.</span>
                <span>Introduction</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  These Terms & Conditions (&quot;Terms&quot;) govern your access to and use of the AAVRIT PACKAGING website, digital portals, catalog resources, and online quotation request interfaces (collectively referred to as the &quot;Website&quot;).
                </p>
                <p>
                  By accessing, browsing, or utilizing this Website, you acknowledge that you have read, understood, and agreed to be bound by these Terms, together with our Privacy Policy. If you do not agree with any part of these Terms, you must discontinue using this Website.
                </p>
                <p className="font-semibold text-[#202A2E] bg-[#FAF7F2] p-3.5 rounded-xl border border-[#E4DED3]">
                  Clarification on Inquiries: Submitting an inquiry, requesting an engineering estimate, or generating an illustrative carton size estimate through this Website does not automatically constitute a confirmed contract of sale or binding order. A binding order is established only upon formal written quotation acceptance, commercial sign-off, and company order confirmation.
                </p>
              </div>
            </section>

            {/* 2. Website Usage */}
            <section id="website-usage" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">2.</span>
                <span>Website Usage</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  The Website is intended for legitimate commercial entities, procurement officers, brand managers, and individuals seeking industrial corrugated packaging manufacturing and supply services. By using this Website, you agree to:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#62574D]">
                  <li>Use the Website solely for lawful business inquiries and legitimate commercial evaluation.</li>
                  <li>Provide accurate, genuine, and current corporate details, delivery locations, and contact information when submitting inquiry forms.</li>
                  <li>Refrain from attempting unauthorized access, penetration testing, server disruption, or interference with the normal operation of the Website.</li>
                  <li>Avoid transmitting or uploading any malicious software, automated scrapers, viruses, or harmful scripts.</li>
                  <li>Respect all intellectual property, design assets, and proprietary technical data published on the Website.</li>
                </ul>
              </div>
            </section>

            {/* 3. Product Information and Descriptions */}
            <section id="product-information" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">3.</span>
                <span>Product Information & Descriptions</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  AAVRIT PACKAGING provides photographs, engineering schematics, technical descriptions, and general flute classifications across our products (including 3-Ply, 5-Ply, and 7-Ply corrugated boxes, die-cut mailers, heavy-duty industrial shippers, and custom partitions).
                </p>
                <p>
                  All photographic visuals represent studio sample configurations. Actual carton appearance, kraft paper texture, surface shade, and flexographic print tone may naturally vary based on mill raw paper lot batches, virgin vs recycled kraft ratios, humidity conditions, and specific board deckle runs.
                </p>
                <p>
                  Product descriptions and standard dimensional references are provided to assist clients in evaluating packaging feasibility. Display of a packaging format on this Website does not guarantee perpetual inventory or immediate availability, as custom industrial packaging is manufactured to order. All final specifications must be mutually confirmed prior to order acceptance.
                </p>
              </div>
            </section>

            {/* 4. Product Specifications and Customization */}
            <section id="specifications-customization" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">4.</span>
                <span>Product Specifications & Customization</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  Corrugated packaging performance depends on precise structural and environmental engineering variables. Specifications must be defined and confirmed across:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-2">
                  <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E4DED3] text-xs">
                    <strong className="text-[#202A2E] block mb-0.5">Dimensional Accuracy:</strong>
                    Internal vs external dimensions (Length × Width × Height in mm/inches).
                  </div>
                  <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E4DED3] text-xs">
                    <strong className="text-[#202A2E] block mb-0.5">Board Structure & Ply:</strong>
                    Single Wall (3-Ply), Double Wall (5-Ply), or Triple Wall (7-Ply).
                  </div>
                  <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E4DED3] text-xs">
                    <strong className="text-[#202A2E] block mb-0.5">Flute Geometry:</strong>
                    E, B, C, Broad, or combination flute profiles engineered for crush resistance.
                  </div>
                  <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E4DED3] text-xs">
                    <strong className="text-[#202A2E] block mb-0.5">Paper Quality & GSM:</strong>
                    Kraft top liner, semi-chemical corrugating medium, and bottom liner grammage.
                  </div>
                  <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E4DED3] text-xs">
                    <strong className="text-[#202A2E] block mb-0.5">Print & Artwork:</strong>
                    1 to 4 colour water-based flexographic printing, warning marks, and barcodes.
                  </div>
                  <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#E4DED3] text-xs">
                    <strong className="text-[#202A2E] block mb-0.5">Application Load & Stacking:</strong>
                    Payload weight, stacking factor, moisture exposure, and transit mode.
                  </div>
                </div>

                <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold mb-0.5">[Company Verification Required]</strong>
                    <span>
                      Standard manufacturing dimensional tolerances (e.g. ±1.5mm to ±3mm for slotted cartons and ±0.5mm for rotary die-cut boxes) and GSM mass variance limits follow Indian Corrugated Box Manufacturers Association (ICBMA) standards or mutually accepted customer Technical Data Sheets (TDS).
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Inquiries and Quotations */}
            <section id="inquiries-quotations" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">5.</span>
                <span>Inquiries & Quotations</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  Visitors may submit packaging requirements through our web forms, email, or WhatsApp communication channels. All quotations are calculated based on the specific parameters supplied (board composition, quantity, delivery geography, and printing artwork).
                </p>
                <p>
                  Our technical team may contact you to request additional technical details, sample cartons, or product dimensions to ensure structural suitability. An inquiry submission does not guarantee quotation issuance or order acceptance.
                </p>
                <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold mb-0.5">[Company Verification Required]</strong>
                    <span>
                      Official written quotations are valid for the specific duration indicated on the quotation document (typically 15 to 30 calendar days) due to market fluctuations in paper kraft reel commodity pricing and prevailing fuel surcharges.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Orders and Confirmation */}
            <section id="orders-confirmation" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">6.</span>
                <span>Orders & Confirmation</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  An order is deemed officially confirmed only after completion of the formal acceptance procedure. This requires:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-[#62574D]">
                  <li>Issuance of a formal Purchase Order (PO) by the customer referencing the approved quotation.</li>
                  <li>Written sign-off on structural CAD sample drawings and flexographic print layout proofs.</li>
                  <li>Fulfillment of agreed commercial terms, credit approval, or advance deposit requirements.</li>
                  <li>Written order acceptance acknowledgment transmitted by AAVRIT PACKAGING.</li>
                </ul>

                <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold mb-0.5">[Company Verification Required]</strong>
                    <span>
                      Official order confirmation processes, authorized signatory procedures, and Minimum Order Quantities (MOQ) per production run are confirmed per client account prior to production scheduling.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. Pricing and Payments */}
            <section id="pricing-payments" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">7.</span>
                <span>Pricing & Payments</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  Unit packaging pricing is determined by paper grade, flute combination, dimensional volume, tooling dies, printing plate (stereo) costs, and total manufacturing batch volume.
                </p>
                <p>
                  All commercial quotations explicitly specify applicable Goods and Services Tax (GST), freight, unloading, and insurance terms. One-time development charges (such as rotary die tooling and photopolymer printing stereo plates) are itemized separately where applicable.
                </p>

                <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold mb-0.5">[Company Verification Required]</strong>
                    <span>
                      Payment methods, commercial advance percentages for first-time orders (e.g. 50% advance with balance against dispatch or approved credit terms for established corporate contracts), and authorized banking coordinates are provided strictly via official proforma invoice.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* 8. Production and Delivery */}
            <section id="production-delivery" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">8.</span>
                <span>Production & Delivery</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  Manufacturing lead times commence strictly upon receipt of approved artwork stereos, dimensional sign-off, and the confirmed commercial advance.
                </p>
                <p>
                  Delivery arrangements (Ex-Factory, FOR Destination, or Door-Delivery) are executed in accordance with the specific commercial contract. Unloading at customer destination facilities is the customer&apos;s responsibility unless contracted otherwise.
                </p>
                <p>
                  AAVRIT PACKAGING is not liable for manufacturing or transit delays arising from Force Majeure events outside reasonable control, including raw material paper mill supply outages, grid energy failure, natural calamities, transportation strikes, or highway restrictions.
                </p>

                <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold mb-0.5">[Company Verification Required]</strong>
                    <span>
                      Standard manufacturing lead times (typically 7 to 14 business days from technical sample sign-off) and dispatch commitments are confirmed upon purchase order verification.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* 9. Changes and Cancellations */}
            <section id="changes-cancellations" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">9.</span>
                <span>Changes & Cancellations</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  Requests to modify dimensions, flute grade, paper GSM, artwork, or order quantity must be submitted in writing as early as possible.
                </p>
                <p>
                  Because corrugated packaging is customized to client dimensions and branding, orders cannot be cancelled once corrugation, paper slitting, or printing plate fabrication has commenced without compensating for actual production and material costs incurred.
                </p>

                <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold mb-0.5">[Company Verification Required]</strong>
                    <span>
                      Specific cancellation review procedures, scrap salvage credits for unprinted raw paper reels, and refund/adjustment timelines must be confirmed by company management in accordance with applicable commercial contracts.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* 10. Quality and Product Acceptance */}
            <section id="quality-acceptance" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">10.</span>
                <span>Quality & Product Acceptance</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  Packaging quality is evaluated strictly against the technical parameters defined in the confirmed order specifications (Bursting Factor, Edge Crush Test, Box Compression Test, and dimensional tolerances).
                </p>
                <p>
                  Upon receipt of shipments, customers must inspect consignments for bundle count, external transit damage, and general specifications. Any apparent transit damage should be noted immediately on the transporter&apos;s Proof of Delivery (POD) document.
                </p>

                <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold mb-0.5">[Company Verification Required]</strong>
                    <span>
                      Discrepancies, structural defects, or non-conformance reports must be submitted in writing within the designated notice window (typically within 7 calendar days of delivery) accompanied by photographic evidence and batch identification for joint QA review.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* 11. Intellectual Property */}
            <section id="intellectual-property" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">11.</span>
                <span>Intellectual Property</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  All content published on this Website—including text, photographs, product renderings, diagrams, engineering guides, logos, software scripts, and interface designs—is the proprietary property of AAVRIT PACKAGING and is protected under applicable Indian and international copyright and trademark laws.
                </p>
                <p>
                  Visitors may not copy, scrape, reproduce, republish, distribute, or create derivative works from Website content without prior express written permission from AAVRIT PACKAGING.
                </p>
                <p>
                  All customer-provided logos, brand graphics, and registered trademarks displayed in sample showcases or printed on client orders remain the exclusive intellectual property of the respective customer.
                </p>
              </div>
            </section>

            {/* 12. Customer-Provided Content and Artwork */}
            <section id="customer-artwork" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">12.</span>
                <span>Customer-Provided Content & Artwork</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  Customers submitting graphics, brand logos, statutory declarations (such as FSSAI licenses, MRP details, manufacturer addresses), barcodes (EAN/UPC), and text for carton printing warrant that:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#62574D]">
                  <li>They possess full legal authority, copyright ownership, or licensing rights to reproduce such artwork.</li>
                  <li>The submitted material does not infringe on any third-party trademark, patent, or intellectual property right.</li>
                  <li>The text and packaging claims comply with all relevant Indian trade and labeling regulations.</li>
                </ul>
                <p>
                  The customer agrees to indemnify, defend, and hold harmless AAVRIT PACKAGING against any third-party claims, legal expenses, or statutory penalties arising from the reproduction of customer-provided artwork.
                </p>
              </div>
            </section>

            {/* 13. Website Availability */}
            <section id="website-availability" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">13.</span>
                <span>Website Availability</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  While AAVRIT PACKAGING endeavors to maintain 24/7 accessibility and continuous operation of this Website, uninterrupted service cannot be guaranteed.
                </p>
                <p>
                  The Website may undergo scheduled maintenance, infrastructure upgrades, security updates, or experience unforeseen hosting downtime. AAVRIT PACKAGING is not liable for any temporary unavailability, transmission latency, or communication disruptions.
                </p>
              </div>
            </section>

            {/* 14. Limitation of Liability */}
            <section id="limitation-liability" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">14.</span>
                <span>Limitation of Liability</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  Website materials, product calculators, and informational resources are provided on an &quot;as is&quot; and &quot;as available&quot; basis for general guidance.
                </p>
                <p>
                  To the fullest extent permissible by applicable law, AAVRIT PACKAGING disclaims all warranties, express or implied, regarding website functionality, fitness for a particular purpose, or accuracy of informational content. Nothing in these Terms shall limit or exclude liability for willful misconduct, fraud, or statutory consumer protections that cannot be excluded under applicable Indian laws.
                </p>

                <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold mb-0.5">[Company Verification Required]</strong>
                    <span>
                      Any commercial limitation of liability regarding physical manufacturing orders, shipment discrepancies, or indirect commercial damages must be finalized in the individual written supply agreement and reviewed by corporate legal counsel.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* 15. Third-Party Links */}
            <section id="third-party-links" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">15.</span>
                <span>Third-Party Links</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  This Website may include hyperlinks to external third-party services, including Google Maps, logistics tracking platforms, or industry standards organizations.
                </p>
                <p>
                  These third-party platforms operate under their own independent terms and privacy protocols. AAVRIT PACKAGING does not control and accepts no responsibility for third-party content, cookies, or privacy practices.
                </p>
              </div>
            </section>

            {/* 16. Privacy */}
            <section id="privacy" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">16.</span>
                <span>Privacy</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  Personal and corporate information submitted through our website inquiry forms, quotation requests, and email correspondence is managed in accordance with our Privacy Policy.
                </p>
                <p>
                  We treat your product designs, structural packaging dimensions, and corporate contact details with confidentiality. For complete details regarding our data collection, security measures, and privacy practices, please review our official policy:
                </p>
                <div className="pt-1">
                  <Link
                    href="/privacy-policy"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#E97835] hover:text-[#A65D32] underline underline-offset-4 transition-colors"
                  >
                    <span>Read AAVRIT PACKAGING Privacy Policy</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </section>

            {/* 17. Changes to These Terms */}
            <section id="changes-terms" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">17.</span>
                <span>Changes to These Terms</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  AAVRIT PACKAGING reserves the right to revise or amend these Terms & Conditions periodically to reflect changes in our operational procedures, technical offerings, manufacturing standards, or statutory legal requirements.
                </p>
                <p>
                  Any updates become effective immediately upon publication on this page, with an updated revision date indicated at the top of this document. Continued use of the Website following amendments indicates acceptance of the updated terms.
                </p>
              </div>
            </section>

            {/* 18. Governing Law and Jurisdiction */}
            <section id="governing-law" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">18.</span>
                <span>Governing Law & Jurisdiction</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  These Terms & Conditions, together with all commercial inquiries and transactions facilitated via this Website, shall be governed by, construed, and enforced in accordance with the substantive laws of India.
                </p>

                <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2.5">
                  <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold mb-0.5">[Company Verification Required]</strong>
                    <span>
                      The specific judicial district and competent courts having exclusive jurisdiction over any dispute or claim arising under these terms (e.g., courts located in Gujarat, India) must be reviewed and formally designated by company legal counsel before final publication.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* 19. Contact Information */}
            <section id="contact-information" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">19.</span>
                <span>Contact Information</span>
              </h2>

              <div className="p-6 sm:p-7 rounded-2xl bg-[#FAF7F2] border border-[#E4DED3] space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#202A2E] mb-1">
                    Questions About These Terms?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#62574D]">
                    If you have questions about these Terms & Conditions or require clarification regarding packaging inquiries and orders, please contact our team.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-[#202A2E]">
                  <div className="p-3 bg-white rounded-xl border border-[#E4DED3]">
                    <div className="flex items-center gap-2 text-[#A65D32] font-bold mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#E97835]" />
                      <span>Plant & Office</span>
                    </div>
                    <span className="text-[#62574D] leading-tight block">
                      Plot No. 42, Phase II GIDC Industrial Estate, Gujarat 382445, India
                    </span>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-[#E4DED3]">
                    <div className="flex items-center gap-2 text-[#A65D32] font-bold mb-1">
                      <Phone className="w-3.5 h-3.5 text-[#E97835]" />
                      <span>Phone Line</span>
                    </div>
                    <a
                      href="tel:+919876543210"
                      className="text-[#62574D] hover:text-[#E97835] font-semibold block transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-[#E4DED3]">
                    <div className="flex items-center gap-2 text-[#A65D32] font-bold mb-1">
                      <Mail className="w-3.5 h-3.5 text-[#E97835]" />
                      <span>Email Inquiries</span>
                    </div>
                    <a
                      href="mailto:inquiry@aavritpackaging.com"
                      className="text-[#62574D] hover:text-[#E97835] font-semibold block transition-colors truncate"
                    >
                      inquiry@aavritpackaging.com
                    </a>
                  </div>
                </div>

                <div className="pt-2 print:hidden">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E97835] hover:bg-[#A65D32] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
