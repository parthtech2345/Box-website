"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Leaf,
  Layers,
  Settings,
  ChevronDown,
  ArrowRight,
  Phone,
  HelpCircle,
  FileText,
  Calculator,
  Sliders,
  CheckCircle2,
  Package,
  Award,
  Sparkles,
} from "lucide-react";
import { ProductItem } from "@/data/productsData";
import { ProductFAQ, FluteInfo, PaperTypeInfo, QualityParameter } from "@/data/productTechnicalData";

interface ProductDetailSectionsProps {
  product: ProductItem;
  faqs: ProductFAQ[];
  flutes: FluteInfo[];
  paperTypes: PaperTypeInfo[];
  qualityParameters: QualityParameter[];
}

export default function ProductDetailSections({
  product,
  faqs,
  flutes,
  paperTypes,
  qualityParameters,
}: ProductDetailSectionsProps) {
  // Dimension Calculator State
  const [length, setLength] = useState<string>("300");
  const [width, setWidth] = useState<string>("200");
  const [height, setHeight] = useState<string>("150");
  const [unit, setUnit] = useState<"mm" | "cm" | "inch">("mm");

  // FAQ Accordion State (first FAQ open by default)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  // Determine which ply is recommended for this product
  const recommendedPly = React.useMemo(() => {
    const name = product.name.toLowerCase();
    const specs = JSON.stringify(product.specifications).toLowerCase();
    if (name.includes("7 ply") || specs.includes("7 ply")) return "7 Ply";
    if (name.includes("3 ply") || specs.includes("3 ply") || name.includes("mailer") || name.includes("pizza")) return "3 Ply";
    if (name.includes("gaylord") || name.includes("pallet")) return "7 Ply";
    return "5 Ply"; // standard default for shipping & commercial
  }, [product]);

  // Determine relevant flutes and best recommended flute
  const { relevantFlutes, primaryFlute } = React.useMemo(() => {
    const rawFlutes = product.specifications.flute || product.specifications.fluteType;
    let primary = "B Flute";

    if (rawFlutes) {
      const flutesList = Array.isArray(rawFlutes)
        ? rawFlutes.join(" ").toUpperCase()
        : String(rawFlutes).toUpperCase();

      if (flutesList.includes("E")) primary = "E Flute";
      else if (flutesList.includes("BC")) primary = "BC Flute";
      else if (flutesList.includes("B")) primary = "B Flute";
      else if (flutesList.includes("C")) primary = "C Flute";
      else if (flutesList.includes("AB")) primary = "AB Flute";

      const matched = flutes.filter((f) => {
        const code = f.name.split(" ")[0].toUpperCase();
        return flutesList.includes(code);
      });

      return {
        relevantFlutes: matched.length > 0 ? matched : flutes.slice(0, 4),
        primaryFlute: primary,
      };
    }

    return {
      relevantFlutes: flutes.slice(0, 4),
      primaryFlute: "B Flute",
    };
  }, [product, flutes]);

  return (
    <div className="w-full flex flex-col gap-16 lg:gap-20">
      {/* ---------------------------------------------------- */}
      {/* SECTION 3: Dynamic Product Specifications Table     */}
      {/* ---------------------------------------------------- */}
      <section className="w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-[#E4DED3]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A65D32] mb-1">
              <FileText className="w-4 h-4" />
              <span>Engineering Data Sheet</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#202A2E]">
              Product Specifications
            </h2>
          </div>
          <span className="text-xs text-[#7D7166] bg-[#FAF7F2] border border-[#E4DED3] px-3 py-1.5 rounded-lg w-fit">
            Custom engineered to exact client specifications
          </span>
        </div>

        <div className="bg-[#FFFFFF] border border-[#E4DED3] rounded-2xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#FAF7F2] border-b border-[#E4DED3] text-[#493629]">
                  <th className="py-3.5 px-4 sm:px-6 font-bold uppercase tracking-wider text-xs w-1/3">
                    Specification
                  </th>
                  <th className="py-3.5 px-4 sm:px-6 font-bold uppercase tracking-wider text-xs w-2/3">
                    Details & Configurable Options
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4DED3]/60 text-[#202A2E]">
                {Object.entries(product.specifications).map(([key, value], idx) => {
                  if (!value) return null;
                  const label = key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase());
                  const displayVal = Array.isArray(value) ? value.join(" / ") : value;
                  const isRecommendedRow = key.toLowerCase().includes("flute") || key.toLowerCase().includes("ply");

                  return (
                    <tr
                      key={key}
                      className={idx % 2 === 0 ? "bg-white hover:bg-[#FAF7F2]/60" : "bg-[#FAF7F2]/30 hover:bg-[#FAF7F2]/80"}
                    >
                      <td className="py-3.5 px-4 sm:px-6 font-semibold text-[#493629] whitespace-nowrap">
                        {label}
                      </td>
                      <td className="py-3.5 px-4 sm:px-6 font-medium text-[#62574D] flex flex-wrap items-center justify-between gap-2">
                        <span>{displayVal}</span>
                        {isRecommendedRow && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#E97835] bg-[#E97835]/10 border border-[#E97835]/30 px-2 py-0.5 rounded-full">
                            <Sparkles className="w-3 h-3" />
                            <span>Recommended Standard</span>
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="bg-[#FAF7F2] px-4 sm:px-6 py-3 border-t border-[#E4DED3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#7D7166]">
            <span>* All GSM, BF, and dimensions are manufactured as per individual order requirements.</span>
            <span className="font-semibold text-[#493629]">
              Custom technical combinations available on request
            </span>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 4: Understanding Corrugated Box Specifications */}
      {/* ---------------------------------------------------- */}
      <section className="w-full">
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#A65D32] block mb-1">
            B2B TECHNICAL GUIDE
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#202A2E] mb-2">
            Understanding Corrugated Box Specifications
          </h2>
          <p className="text-sm text-[#62574D] max-w-3xl">
            Corrugated packaging performance depends on structural ply construction, fluting geometry, and raw paper liner grades. Explore our manufacturing capabilities below with recommended configurations highlighted.
          </p>
        </div>

        {/* Sub-section A: Ply Construction with Recommended Badge */}
        <div className="mb-10">
          <h3 className="text-base font-bold text-[#202A2E] mb-4 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#A65D32]" />
            <span>A. Corrugated Ply Construction Options</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 3 Ply */}
            <div
              className={`bg-[#FAF7F2] rounded-xl p-5 transition-all relative ${
                recommendedPly === "3 Ply"
                  ? "border-2 border-[#E97835] shadow-sm bg-white"
                  : "border border-[#E4DED3] hover:border-[#D1B48C]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="inline-block px-2.5 py-1 rounded bg-[#A65D32]/10 text-[#A65D32] text-xs font-bold">
                  Single Wall
                </span>
                {recommendedPly === "3 Ply" && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white bg-[#E97835] px-2 py-0.5 rounded-full shadow-xs">
                    <Award className="w-3 h-3" />
                    <span>Recommended</span>
                  </span>
                )}
              </div>
              <h4 className="font-heading font-bold text-lg text-[#202A2E] mb-1">3 Ply Construction</h4>
              <p className="text-xs text-[#62574D] leading-relaxed mb-3">
                1 fluted medium sandwiched between 2 kraft liners. Ideal for lightweight products, retail packaging, and standard e-commerce shipping up to 15 kg.
              </p>
              <span className="text-[11px] font-semibold text-[#8C7E72] block">Payload: Lightweight / Standard</span>
            </div>

            {/* 5 Ply */}
            <div
              className={`bg-[#FAF7F2] rounded-xl p-5 transition-all relative ${
                recommendedPly === "5 Ply"
                  ? "border-2 border-[#E97835] shadow-sm bg-white"
                  : "border border-[#E4DED3] hover:border-[#D1B48C]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="inline-block px-2.5 py-1 rounded bg-[#A65D32]/10 text-[#A65D32] text-xs font-bold">
                  Double Wall
                </span>
                {recommendedPly === "5 Ply" && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white bg-[#E97835] px-2 py-0.5 rounded-full shadow-xs">
                    <Award className="w-3 h-3" />
                    <span>Recommended</span>
                  </span>
                )}
              </div>
              <h4 className="font-heading font-bold text-lg text-[#202A2E] mb-1">5 Ply Construction</h4>
              <p className="text-xs text-[#62574D] leading-relaxed mb-3">
                2 fluted mediums and 3 kraft liners. Engineered for heavier products, multi-tier warehouse stacking, appliances, and export transit up to 45 kg.
              </p>
              <span className="text-[11px] font-semibold text-[#8C7E72] block">Payload: Medium to Heavy Industrial</span>
            </div>

            {/* 7 Ply */}
            <div
              className={`bg-[#FAF7F2] rounded-xl p-5 transition-all relative ${
                recommendedPly === "7 Ply"
                  ? "border-2 border-[#E97835] shadow-sm bg-white"
                  : "border border-[#E4DED3] hover:border-[#D1B48C]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="inline-block px-2.5 py-1 rounded bg-[#A65D32]/10 text-[#A65D32] text-xs font-bold">
                  Triple Wall
                </span>
                {recommendedPly === "7 Ply" && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white bg-[#E97835] px-2 py-0.5 rounded-full shadow-xs">
                    <Award className="w-3 h-3" />
                    <span>Recommended</span>
                  </span>
                )}
              </div>
              <h4 className="font-heading font-bold text-lg text-[#202A2E] mb-1">7 Ply Construction</h4>
              <p className="text-xs text-[#62574D] leading-relaxed mb-3">
                3 fluted mediums and 4 kraft liners. Industrial-grade structural integrity designed to replace heavy wooden crates for automotive and engineering parts.
              </p>
              <span className="text-[11px] font-semibold text-[#8C7E72] block">Payload: Heavy Duty & Ocean Export</span>
            </div>

            {/* 9 Ply */}
            <div className="bg-[#FAF7F2] border border-[#E4DED3] rounded-xl p-5 hover:border-[#D1B48C] transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-block px-2.5 py-1 rounded bg-[#A65D32]/10 text-[#A65D32] text-xs font-bold">
                  Ultra Heavy
                </span>
              </div>
              <h4 className="font-heading font-bold text-lg text-[#202A2E] mb-1">9 Ply Construction</h4>
              <p className="text-xs text-[#62574D] leading-relaxed mb-3">
                Configurable multi-wall construction for specialized bulk gaylord pallets and oversized industrial equipment, subject to manufacturing run requirements.
              </p>
              <span className="text-[11px] font-semibold text-[#8C7E72] block">Payload: Custom Heavy Machinery</span>
            </div>
          </div>
        </div>

        {/* Sub-section B: Flute Types with Recommended Badge */}
        <div className="mb-10">
          <h3 className="text-base font-bold text-[#202A2E] mb-4 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#A65D32]" />
            <span>B. Recommended Flute Profiles for this Product</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relevantFlutes.map((flute) => {
              const isRecommended = flute.name.toLowerCase().includes(primaryFlute.toLowerCase());
              return (
                <div
                  key={flute.name}
                  className={`bg-[#FFFFFF] rounded-xl p-4 sm:p-5 flex flex-col justify-between transition-all ${
                    isRecommended
                      ? "border-2 border-[#E97835] shadow-xs"
                      : "border border-[#E4DED3]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-heading font-bold text-base text-[#202A2E]">
                          {flute.name}
                        </h4>
                        {isRecommended && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white bg-[#E97835] px-2 py-0.5 rounded-full shadow-xs">
                            <Sparkles className="w-3 h-3" />
                            <span>Recommended</span>
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#FAF7F2] border border-[#E4DED3] text-[#A65D32]">
                        {flute.fluteProfile}
                      </span>
                    </div>
                    <p className="text-xs text-[#62574D] leading-relaxed mb-2">
                      {flute.characteristics}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-[#E4DED3]/60 text-[11px] text-[#7D7166]">
                    <strong className="text-[#493629]">Best for:</strong> {flute.bestFor}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sub-section C: Paper Grades & Quality Parameters */}
        <div className="bg-[#FAF7F2] border border-[#E4DED3] rounded-2xl p-6 sm:p-8">
          <h3 className="text-base font-bold text-[#202A2E] mb-4 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#A65D32]" />
            <span>C. Paper & Board Quality Parameters</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Paper Grades */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#A65D32] mb-3">
                Liner & Medium Paper Grades
              </h4>
              <div className="space-y-3">
                {paperTypes.slice(0, 4).map((paper, idx) => (
                  <div key={paper.name} className="bg-white p-3.5 rounded-xl border border-[#E4DED3]">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#202A2E]">{paper.name}</span>
                        {idx === 0 && (
                          <span className="text-[9px] font-bold text-white bg-[#2E7D32] px-1.5 py-0.5 rounded">
                            Recommended
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-semibold text-[#A65D32] bg-[#A65D32]/10 px-2 py-0.5 rounded">
                        {paper.grade}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#62574D] leading-relaxed">{paper.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Parameters */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#A65D32] mb-3">
                Standard Quality Testing Parameters
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {qualityParameters.map((param) => (
                  <div key={param.abbr} className="bg-white p-3 rounded-xl border border-[#E4DED3]">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-xs font-bold text-[#A65D32] bg-[#FAF7F2] border border-[#E4DED3] px-1.5 py-0.5 rounded">
                        {param.abbr}
                      </span>
                      <span className="text-xs font-bold text-[#202A2E] truncate">{param.name}</span>
                    </div>
                    <p className="text-[11px] text-[#62574D] leading-snug">{param.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 5: Box Size & Dimension Calculator           */}
      {/* ---------------------------------------------------- */}
      <section className="w-full bg-[#FAF7F2] border border-[#E4DED3] rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E4DED3]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A65D32] mb-1">
              <Calculator className="w-4 h-4" />
              <span>Tailored Sizing Guide</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#202A2E]">
              Custom Box Sizes & Dimensions
            </h2>
          </div>
          <span className="text-xs text-[#62574D]">
            All boxes are custom manufactured to your payload requirements: <strong>Length × Width × Height</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Inputs Column */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#493629] uppercase mb-1">
                  Length (L)
                </label>
                <input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  placeholder="300"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4DED3] bg-white text-sm text-[#202A2E] focus:outline-none focus:border-[#A65D32]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#493629] uppercase mb-1">
                  Width (W)
                </label>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  placeholder="200"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4DED3] bg-white text-sm text-[#202A2E] focus:outline-none focus:border-[#A65D32]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#493629] uppercase mb-1">
                  Height (H)
                </label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="150"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4DED3] bg-white text-sm text-[#202A2E] focus:outline-none focus:border-[#A65D32]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#493629] uppercase mb-1">
                  Unit
                </label>
                <select
                  value={unit}
                  onChange={(e) => setUnit(e.target.value as "mm" | "cm" | "inch")}
                  aria-label="Dimension Unit"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E4DED3] bg-white text-sm text-[#202A2E] focus:outline-none focus:border-[#A65D32]"
                >
                  <option value="mm">Millimeters (mm)</option>
                  <option value="cm">Centimeters (cm)</option>
                  <option value="inch">Inches (in)</option>
                </select>
              </div>
            </div>

            <div className="bg-white border border-[#E4DED3] rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#2E7D32] shrink-0" />
                <p className="text-xs sm:text-sm text-[#202A2E]">
                  Custom packaging for <strong>{product.name}</strong> is available in your specified size:{" "}
                  <span className="font-mono font-bold text-[#A65D32]">
                    {length || 0} × {width || 0} × {height || 0} {unit}
                  </span>
                </p>
              </div>
              <a
                href="tel:+919876543210"
                className="shrink-0 px-4 py-2 rounded-lg bg-[#E97835] hover:bg-[#A65D32] text-white text-xs font-bold tracking-wide transition-colors"
              >
                Call with this Size
              </a>
            </div>
          </div>

          {/* Sizing Information Note */}
          <div className="lg:col-span-4 bg-white/70 border border-[#E4DED3] rounded-xl p-4 text-xs text-[#62574D] space-y-2">
            <h4 className="font-bold text-[#202A2E] uppercase text-[11px] tracking-wider">
              Internal vs External Dimensions
            </h4>
            <p>
              When specifying dimensions, our team confirms internal cavity dimensions (for product fit) and outer dimensions (for pallet stacking efficiency).
            </p>
            <p className="text-[11px] text-[#7D7166]">
              Minimum order quantities (MOQ) depend on sheet size and total square meterage.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 7: Product-Specific FAQs (5 Bespoke Items)   */}
      {/* ---------------------------------------------------- */}
      <section className="w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-[#E4DED3]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A65D32] mb-1">
              <HelpCircle className="w-4 h-4" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#202A2E]">
              {product.name} FAQs
            </h2>
          </div>
          <span className="text-xs text-[#7D7166]">
            5 tailored engineering answers for {product.name}
          </span>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] border border-[#E4DED3] rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left hover:bg-[#FAF7F2]/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-[#202A2E]">
                    {idx + 1}. {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#A65D32] shrink-0 transition-transform duration-200 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#62574D] leading-relaxed border-t border-[#E4DED3]/40 bg-[#FAF7F2]/20">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
