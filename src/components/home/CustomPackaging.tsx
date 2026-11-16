import React from "react";
import {
  Search,
  Ruler,
  Layers,
  ShieldAlert,
  DraftingCompass,
  FlaskConical,
  CheckCircle,
  Truck,
  ArrowRight,
} from "lucide-react";

export default function CustomPackaging() {
  const steps = [
    {
      num: "01",
      title: "Understand Product Requirements",
      desc: "Analyze payload fragility, net weight, stacking height, moisture exposure, and shipping route.",
      icon: Search,
    },
    {
      num: "02",
      title: "Collect Dimensions",
      desc: "Exact internal millimeter measurements (L × W × H) calculated to minimize empty void space.",
      icon: Ruler,
    },
    {
      num: "03",
      title: "Select Board and Flute",
      desc: "Determine single, double, or triple wall board structure and optimal flute profile (B, C, or E).",
      icon: Layers,
    },
    {
      num: "04",
      title: "Choose Ply and Strength",
      desc: "Specify exact GSM liner combinations and target Bursting Strength (BF) to withstand static loads.",
      icon: ShieldAlert,
    },
    {
      num: "05",
      title: "Design Packaging Structure",
      desc: "CAD structural drafting of 2D/3D die lines, interlock flaps, partition grids, and ventilation slots.",
      icon: DraftingCompass,
    },
    {
      num: "06",
      title: "Sample and Testing",
      desc: "Physical prototype cut on precision sample table; drop testing, vibration, and compression tests performed.",
      icon: FlaskConical,
    },
    {
      num: "07",
      title: "Customer Approval",
      desc: "Customer fits actual product into the physical sample and approves structural integrity and graphics.",
      icon: CheckCircle,
    },
    {
      num: "08",
      title: "Production and Dispatch",
      desc: "High-speed automated manufacturing run, bundling, palletizing, and direct scheduled plant dispatch.",
      icon: Truck,
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-14 border-b border-[#E4DED3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E97835]/10 text-[#E97835] text-xs font-bold uppercase tracking-wider mb-3">
            Custom Engineering Workflow
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-tight mb-4">
            Designed Around Your Product
          </h2>
          <p className="text-base sm:text-lg text-[#687378] font-normal leading-relaxed">
            From initial concept to final dispatch, our 8-stage custom development process guarantees zero transit damage and maximum supply chain cost efficiency.
          </p>
        </div>

        {/* 8-Step Connected Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-[#F5F2EB] rounded-2xl border border-[#E4DED3] hover:border-[#D1B48C] hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-bold text-2xl text-[#D1B48C] group-hover:text-[#E97835] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white group-hover:bg-[#E97835] flex items-center justify-center text-[#202A2E] group-hover:text-white shadow-sm transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#202A2E] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#687378] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E4DED3]/80 flex items-center gap-1 text-[11px] font-semibold text-[#687378] group-hover:text-[#202A2E]">
                  <span>Phase {idx + 1}</span>
                  <span className="text-[#D1B48C]">•</span>
                  <span>Engineered</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Banner */}
        <div className="p-8 sm:p-10 bg-[#202A2E] rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl text-center sm:text-left">
            <span className="text-xs font-bold text-[#E97835] uppercase tracking-wider block mb-1">
              Have unique dimensions or fragility concerns?
            </span>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Discuss Your Packaging Requirement With Our Engineers
            </h3>
            <p className="text-xs sm:text-sm text-[#F5F2EB]/80 mt-2">
              We provide free sample boxes and CAD box dielines for qualified industrial packaging inquiries.
            </p>
          </div>

          <a
            href="#quote"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E97835] text-white font-semibold text-sm rounded-xl hover:bg-[#d46927] transition-all duration-200 shrink-0 shadow-lg active:scale-95"
          >
            <span>Start Custom Design</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
