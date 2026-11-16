import React from "react";
import Image from "next/image";
import { ShieldCheck, CheckCircle2, Gauge, Scale, Box, Layers, Ruler } from "lucide-react";

export default function QualityAssurance() {
  const tests = [
    {
      name: "Bursting Strength Test (BS / BF)",
      desc: "Hydraulic pressure testing in kg/cm² verifying board resistance against interior product puncture.",
      icon: Gauge,
      standard: "IS: 1060 Standard",
    },
    {
      name: "Edge Crush Test (ECT)",
      desc: "Compressive load test along the fluting edge directly verifying real-world warehouse stackability.",
      icon: Layers,
      standard: "TAPPI T 811",
    },
    {
      name: "GSM & Caliper Verification",
      desc: "Digital quadrant scale measuring exact grammage of outer liners, fluting, and inner paper layers.",
      icon: Scale,
      standard: "IS: 1397 / ISO 536",
    },
    {
      name: "Box Compression Test (BCT)",
      desc: "Top-to-bottom hydraulic crushing test establishing safe pallet stacking limits under load.",
      icon: Box,
      standard: "ASTM D642",
    },
    {
      name: "Cobb Sizing & Moisture Content",
      desc: "Water absorption rate testing over 60 seconds to ensure high humidity resistance during transit.",
      icon: ShieldCheck,
      standard: "ISO 535 Cobb Method",
    },
    {
      name: "Precise Dimension & Flap Inspection",
      desc: "Digital vernier caliper measurement of crease lines, slot depths, and squareness to avoid jamming.",
      icon: Ruler,
      standard: "Zero Slit Tolerance",
    },
  ];

  return (
    <section id="quality" className="w-full bg-[#FFFFFF] py-14 border-b border-[#E4DED3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B8D78]/20 text-[#7B8D78] text-xs font-bold uppercase tracking-wider mb-3">
            Laboratory & Verification
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-tight mb-4">
            Quality That Goes Beyond the Surface
          </h2>
          <p className="text-base sm:text-lg text-[#687378] font-normal leading-relaxed">
            Our quality control protocols cover every phase from inbound raw kraft paper inspection to in-process corrugation calibration and final batch drop testing.
          </p>
        </div>

        {/* Asymmetrical Layout: Quality Testing Lab Photo with Indian Engineer + 6 Test Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">

          {/* Real Indian QA Engineer Testing Photo (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#D1B48C] shadow-xl group">
              <Image
                src="/images/indian-engineer-testing.png"
                alt="Indian packaging quality assurance engineer operating digital burst tester in modern plant lab"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#202A2E]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#E97835] block mb-1">
                  In-House Quality Control Laboratory
                </span>
                <h4 className="font-heading font-bold text-lg text-white">
                  Continuous Batch Testing by Certified Indian Packaging Technicians
                </h4>
                <p className="text-xs text-[#F5F2EB]/80 mt-1">
                  Every production reel comes with a Certificate of Analysis (COA) for Burst Factor and GSM.
                </p>
              </div>
            </div>
          </div>

          {/* 6 Structured Testing Capabilities (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tests.map((test, idx) => {
              const Icon = test.icon;
              return (
                <div
                  key={idx}
                  className="p-5 bg-[#F5F2EB] rounded-xl border border-[#E4DED3] hover:border-[#D1B48C] hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-lg bg-white group-hover:bg-[#E97835] text-[#202A2E] group-hover:text-white transition-colors shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold text-[#687378] uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-[#E4DED3]">
                        {test.standard}
                      </span>
                    </div>

                    <h4 className="font-heading font-bold text-base text-[#202A2E] mb-1.5 group-hover:text-[#E97835] transition-colors">
                      {test.name}
                    </h4>
                    <p className="text-xs text-[#687378] leading-relaxed">
                      {test.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#E4DED3] flex items-center gap-1.5 text-[11px] font-semibold text-[#7B8D78]">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Lab Certified Batch
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
