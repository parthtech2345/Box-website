"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ArrowUp,
  ShieldCheck,
  Lock,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";

interface SectionMeta {
  id: string;
  number: string;
  title: string;
}

const SECTIONS: SectionMeta[] = [
  { id: "introduction", number: "1", title: "Introduction & Scope" },
  { id: "information-collected", number: "2", title: "Information We Collect" },
  { id: "how-we-use-data", number: "3", title: "How We Use Your Information" },
  { id: "design-confidentiality", number: "4", title: "Packaging Design & CAD Confidentiality" },
  { id: "cookies-analytics", number: "5", title: "Cookies & Website Analytics" },
  { id: "third-party-sharing", number: "6", title: "Third-Party Sharing & Disclosures" },
  { id: "data-security", number: "7", title: "Data Storage & Security Measures" },
  { id: "data-retention", number: "8", title: "Data Retention Schedule" },
  { id: "your-rights", number: "9", title: "Your Data Rights" },
  { id: "external-services", number: "10", title: "External Links & Services" },
  { id: "b2b-scope", number: "11", title: "B2B Commercial Scope" },
  { id: "policy-updates", number: "12", title: "Policy Revisions & Updates" },
  { id: "contact-privacy", number: "13", title: "Data Protection & Contact" },
];

export default function PrivacyContent() {
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
              Privacy Sections:{" "}
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
            aria-label="Mobile Privacy Table of Contents"
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
                <ShieldCheck className="w-4 h-4 text-[#A65D32]" />
                <span>Privacy Framework</span>
              </h2>
              <span className="text-[11px] text-[#A65D32] font-semibold bg-[#FAF7F2] px-2 py-0.5 rounded-full border border-[#E4DED3]">
                13 Sections
              </span>
            </div>

            <nav
              aria-label="Desktop Privacy Table of Contents"
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

            {/* Terms Link & Quick Helper Notice */}
            <div className="mt-4 pt-3.5 border-t border-[#E4DED3] text-[11px] text-[#7D7166] flex items-center justify-between">
              <Link
                href="/terms-and-conditions"
                className="hover:text-[#E97835] transition-colors flex items-center gap-1 font-semibold"
              >
                <span>Terms of Supply</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
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

        {/* Right Column: Complete Privacy Content */}
        <article className="lg:col-span-8 bg-white rounded-2xl border border-[#E4DED3] p-6 sm:p-10 lg:p-12 shadow-xs text-[#202A2E] leading-relaxed print:p-0 print:border-none print:shadow-none print:bg-transparent">
          {/* Document Header */}
          <div className="pb-8 mb-8 border-b border-[#E4DED3] print:border-b-2 print:border-black">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#A65D32] bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E4DED3] mb-3">
              Data Protection & Privacy
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[#202A2E] tracking-tight mb-2">
              Privacy Policy
            </h1>
            <p className="text-sm text-[#62574D]">
              Effective & Last Revised: <span className="font-semibold text-[#202A2E]">November 2026</span> | AAVRIT PACKAGING
            </p>
          </div>

          <div className="space-y-12 divide-y divide-[#E4DED3]/70 print:divide-y print:divide-black">
            {/* 1. Introduction & Scope */}
            <section id="introduction" className="scroll-mt-28 pt-8 first:pt-0">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">1.</span>
                <span>Introduction & Scope</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  At AAVRIT PACKAGING, we recognize the importance of commercial privacy, data security, and confidentiality. This Privacy Policy outlines how AAVRIT PACKAGING (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects, maintains, processes, and safeguards corporate information, personal identifiers, and technical packaging drawings submitted by visitors and commercial clients.
                </p>
                <p>
                  This policy applies to information collected through our official website, product inquiry forms, custom packaging calculator interfaces, email correspondence, and telephone interactions.
                </p>
              </div>
            </section>

            {/* 2. Information We Collect */}
            <section id="information-collected" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">2.</span>
                <span>Information We Collect</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  We collect information necessary to evaluate industrial packaging requirements, formulate accurate commercial quotations, and manufacture corrugated boxes to exact specifications:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
                  <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#E4DED3] text-xs">
                    <strong className="text-[#202A2E] block mb-1">Corporate & Contact Details:</strong>
                    Company name, contact person name, official business email, phone/WhatsApp number, and plant/warehouse dispatch location.
                  </div>
                  <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#E4DED3] text-xs">
                    <strong className="text-[#202A2E] block mb-1">Technical Specifications:</strong>
                    Box internal/external dimensions, board ply (3/5/7-ply), flute profiles, payload weights, stacking parameters, and intended transit modes.
                  </div>
                  <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#E4DED3] text-xs">
                    <strong className="text-[#202A2E] block mb-1">Commercial Identifiers:</strong>
                    GSTIN (Goods and Services Tax Identification Number), billing entities, and trade references for commercial credit evaluations.
                  </div>
                  <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#E4DED3] text-xs">
                    <strong className="text-[#202A2E] block mb-1">Design & Artwork Assets:</strong>
                    Vector artwork, brand logos, dielines, and printing stereo layout files provided for flexographic printing.
                  </div>
                </div>
              </div>
            </section>

            {/* 3. How We Use Your Information */}
            <section id="how-we-use-data" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">3.</span>
                <span>How We Use Your Information</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  The information provided to AAVRIT PACKAGING is utilized strictly for professional manufacturing, supply chain, and business communication purposes:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-[#62574D]">
                  <li>Calculating engineering cost estimates, board deckle utilization, and formal commercial quotations.</li>
                  <li>Fabricating structural CAD sample cartons, wooden die-cutting tooling, and photopolymer printing stereo plates.</li>
                  <li>Processing, manufacturing, quality testing, and dispatching confirmed corrugated box purchase orders.</li>
                  <li>Coordinating freight logistics, e-way bill generation, and transport carrier delivery to your designated warehouse.</li>
                  <li>Providing customer support, batch quality certificates, and responding to technical packaging queries.</li>
                </ul>
              </div>
            </section>

            {/* 4. Packaging Design & CAD Confidentiality */}
            <section id="design-confidentiality" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">4.</span>
                <span>Packaging Design & CAD Confidentiality</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  We understand that your custom packaging structural designs, internal partitioning geometries, and branded graphics may represent valuable proprietary trade secrets.
                </p>
                <div className="p-4 bg-[#FAF7F2] border border-[#E4DED3] rounded-xl text-xs text-[#202A2E] flex items-start gap-3">
                  <Lock className="w-5 h-5 text-[#A65D32] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="block text-sm font-semibold text-[#202A2E]">
                      Non-Disclosure & Trade Protection
                    </strong>
                    <p className="text-[#62574D] leading-relaxed">
                      AAVRIT PACKAGING never sells, licenses, or publicly discloses client dieline CAD drawings, proprietary cushioning specifications, or custom product molds to third-party competitors. We gladly execute formal Non-Disclosure Agreements (NDAs) for sensitive corporate accounts prior to prototyping.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Cookies & Website Analytics */}
            <section id="cookies-analytics" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">5.</span>
                <span>Cookies & Website Analytics</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  Our Website uses functional and performance cookies to maintain session preferences, analyze traffic patterns, and optimize user experience.
                </p>
                <p>
                  We do not use invasive tracking or third-party advertising networks that harvest personal data across the web. You may disable non-essential cookies via your web browser settings without impacting your ability to browse our catalog or submit inquiry forms.
                </p>
              </div>
            </section>

            {/* 6. Third-Party Sharing & Disclosures */}
            <section id="third-party-sharing" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">6.</span>
                <span>Third-Party Sharing & Disclosures</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p className="font-semibold text-[#202A2E]">
                  AAVRIT PACKAGING does not sell, rent, or trade your contact or business data to external marketing agencies or brokers.
                </p>
                <p>
                  Information is shared strictly with authorized partners solely to the extent required to execute your packaging order:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-[#62574D]">
                  <li>
                    <strong>Freight & Logistics Carriers:</strong> Delivery address, contact person, and phone number for truck transport, transit tracking, and consignment hand-over.
                  </li>
                  <li>
                    <strong>Statutory Authorities:</strong> GSTIN, invoice details, and transport consignor/consignee data required for mandatory Government E-Way bills and tax compliance under Indian law.
                  </li>
                </ul>
              </div>
            </section>

            {/* 7. Data Storage & Security Measures */}
            <section id="data-security" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">7.</span>
                <span>Data Storage & Security Measures</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  We maintain technical, administrative, and physical security measures to protect your commercial details against unauthorized access, loss, alteration, or interception.
                </p>
                <p>
                  All data transmitted across our website is encrypted using industry-standard Transport Layer Security (TLS/HTTPS). Internal access to client artwork and quotation databases is restricted strictly to authorized production and sales engineering personnel.
                </p>
              </div>
            </section>

            {/* 8. Data Retention Schedule */}
            <section id="data-retention" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">8.</span>
                <span>Data Retention Schedule</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  We retain commercial inquiry information, CAD specifications, and order records for the duration required to support ongoing re-orders, repeat batch manufacturing, warranty verification, and statutory commercial accounting periods (as mandated under Indian tax legislation).
                </p>
                <p>
                  Inquiry records that do not transition into confirmed orders are archived periodically and securely expunged in accordance with our operational retention schedules.
                </p>
              </div>
            </section>

            {/* 9. Your Data Rights */}
            <section id="your-rights" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">9.</span>
                <span>Your Data Rights</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  As a commercial client or prospective partner, you maintain the right to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-[#62574D]">
                  <li>Request verification of the corporate contact details we maintain on file.</li>
                  <li>Request correction of outdated dispatch addresses, phone numbers, or corporate registrations.</li>
                  <li>Request the deletion of non-essential inquiry data or obsolete CAD prototype iterations where no statutory retention obligations apply.</li>
                </ul>
              </div>
            </section>

            {/* 10. External Links & Services */}
            <section id="external-services" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">10.</span>
                <span>External Links & Services</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  Our Website includes external links to services such as Google Maps for factory location navigation and third-party logistics portals.
                </p>
                <p>
                  Once you navigate away from our website domain, our Privacy Policy no longer applies. We encourage reviewing the respective privacy disclosures of any external site you visit.
                </p>
              </div>
            </section>

            {/* 11. B2B Commercial Scope */}
            <section id="b2b-scope" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">11.</span>
                <span>B2B Commercial Scope</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  AAVRIT PACKAGING is a business-to-business (B2B) industrial packaging manufacturer. Our services and digital interfaces are intended solely for businesses, purchasing agents, and adults over the age of 18. We do not knowingly solicit or collect data from minors.
                </p>
              </div>
            </section>

            {/* 12. Policy Revisions & Updates */}
            <section id="policy-updates" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">12.</span>
                <span>Policy Revisions & Updates</span>
              </h2>
              <div className="space-y-3 text-sm text-[#493629]">
                <p>
                  We may periodically update this Privacy Policy to reflect evolving industrial data standards, technical platform enhancements, or applicable statutory mandates.
                </p>
                <p>
                  The effective revision date will always be visible at the top of this document. Continued engagement with our services following publication constitutes acknowledgment of the revised provisions.
                </p>
              </div>
            </section>

            {/* 13. Data Protection & Contact */}
            <section id="contact-privacy" className="scroll-mt-28 pt-8">
              <h2 className="text-lg sm:text-xl font-heading font-bold text-[#202A2E] flex items-center gap-2 mb-3">
                <span className="text-[#A65D32]">13.</span>
                <span>Data Protection & Contact</span>
              </h2>

              <div className="p-6 sm:p-7 rounded-2xl bg-[#FAF7F2] border border-[#E4DED3] space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#202A2E] mb-1">
                    Privacy Inquiries & Grievance Desk
                  </h3>
                  <p className="text-xs sm:text-sm text-[#62574D]">
                    If you have questions regarding this Privacy Policy, your corporate information, or CAD file security, please contact our administrative desk:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-[#202A2E]">
                  <div className="p-3 bg-white rounded-xl border border-[#E4DED3]">
                    <div className="flex items-center gap-2 text-[#A65D32] font-bold mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#E97835]" />
                      <span>Corporate Plant</span>
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
                      <span>Privacy Officer</span>
                    </div>
                    <a
                      href="mailto:inquiry@aavritpackaging.com"
                      className="text-[#62574D] hover:text-[#E97835] font-semibold block transition-colors truncate"
                    >
                      inquiry@aavritpackaging.com
                    </a>
                  </div>
                </div>

                <div className="pt-2 print:hidden flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#E97835] hover:bg-[#A65D32] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <span>Contact Privacy Desk</span>
                  </Link>

                  <Link
                    href="/terms-and-conditions"
                    className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white hover:bg-[#FAF7F2] text-[#202A2E] text-xs sm:text-sm font-semibold border border-[#E4DED3] transition-colors"
                  >
                    <span>View Terms & Conditions</span>
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
