import React from "react";
import Image from "next/image";
import {
  Scroll,
  Microscope,
  Waves,
  Printer,
  Scissors,
  Layers,
  FolderSync,
  ShieldCheck,
  PackageCheck,
  Truck,
} from "lucide-react";

export default function ManufacturingProcess() {
  const steps = [
    { num: "01", name: "Raw Material", desc: "Virgin & recycled kraft paper rolls sourced from premier Indian paper mills.", icon: Scroll },
    { num: "02", name: "Paper Testing", desc: "Batch testing for GSM, Burst Factor, moisture content, and Cobb sizing.", icon: Microscope },
    { num: "03", name: "Corrugation", desc: "High-speed fluting roll corrugator bonding liners with starch adhesive.", icon: Waves },
    { num: "04", name: "Printing", desc: "Multi-color flexographic precision printing on outer kraft linerboard.", icon: Printer },
    { num: "05", name: "Slotting", desc: "Computerized rotary slotting cutting flaps, crease lines, and glue tabs.", icon: Scissors },
    { num: "06", name: "Die Cutting", desc: "Flatbed and rotary die-cut machines for complex mailers & handles.", icon: Layers },
    { num: "07", name: "Folding / Gluing", desc: "High-speed automated folder-gluers and heavy-duty wire stitchers.", icon: FolderSync },
    { num: "08", name: "Quality Check", desc: "Dimensional caliper check, glue bond peel test, and drop test sample.", icon: ShieldCheck },
    { num: "09", name: "Bundling", desc: "Automated strapping, compression bundling, and plastic stretch wrapping.", icon: PackageCheck },
    { num: "10", name: "Dispatch", desc: "Palletized truck loading and scheduled logistics dispatch across India.", icon: Truck },
  ];

  return (
    <section id="manufacturing" className="w-full bg-[#FFFFFF] py-14 border-b border-[#E4DED3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E97835]/10 text-[#E97835] text-xs font-bold uppercase tracking-wider mb-3">
              Plant Operations
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-tight">
              From Paper to Precision Packaging
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base text-[#687378] leading-relaxed">
              Our streamlined 10-stage manufacturing sequence ensures that every square meter of board meets strict industrial compression and aesthetic criteria.
            </p>
          </div>
        </div>

        {/* Plant Floor Real Visual Banner */}
        <div className="relative w-full aspect-[21/9] min-h-[260px] sm:min-h-[340px] rounded-2xl overflow-hidden border border-[#D1B48C]/40 shadow-xl mb-14 group">
          <Image
            src="/images/factory-line-india.png"
            alt="Inside modern Indian corrugated box manufacturing plant with automated line and technicians"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#202A2E]/85 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#E97835] block mb-1">
                Automated 5-Ply & 7-Ply Corrugation Facility
              </span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                Equipped with High-Speed Continuous Board Line in India
              </h3>
            </div>
            <div className="px-4 py-2 bg-[#202A2E]/90 backdrop-blur-md rounded-lg border border-[#D1B48C]/40 text-xs text-[#D1B48C] font-semibold">
              Daily Capacity: 150,000+ Boxes
            </div>
          </div>
        </div>

        {/* 10-Step Timeline Process Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="p-5 bg-[#F5F2EB] rounded-xl border border-[#E4DED3] hover:border-[#D1B48C] hover:bg-white transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-heading font-bold text-lg text-[#E97835]">
                      {st.num}
                    </span>
                    <div className="p-1.5 rounded-md bg-white group-hover:bg-[#E97835] text-[#202A2E] group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="font-heading font-bold text-base text-[#202A2E] mb-1.5">
                    {st.name}
                  </h4>
                  <p className="text-[11px] text-[#687378] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#E4DED3] text-[10px] uppercase font-bold text-[#D1B48C]">
                  Stage {st.num}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
