import React from "react";
import Image from "next/image";
import { Cpu, Printer, Scissors, Wrench, Warehouse, Factory } from "lucide-react";

export default function MachineryInfrastructure() {
  const machinery = [
    {
      title: "Automatic Corrugation Line",
      role: "Board Production",
      desc: "Continuous fingerless corrugator producing single and double-wall boards with automated starch circulation and temperature controls.",
      icon: Cpu,
    },
    {
      title: "Multi-Color Flexo Printer Slotter",
      role: "Printing & Creasing",
      desc: "High-precision 4-color flexographic printing units equipped with ceramic anilox rolls and computer-controlled motorized slotting heads.",
      icon: Printer,
    },
    {
      title: "Heavy-Duty Rotary & Flatbed Die Cutters",
      role: "Precision Cutting",
      desc: "Engineered for intricate lock-bottom mailer boxes, air vents, ergonomic handle cutouts, and custom partition dividers.",
      icon: Scissors,
    },
    {
      title: "Automated Folder Gluer & Wire Stitchers",
      role: "Finishing & Assembly",
      desc: "High-speed cold/hot PVA adhesive gluing combined with heavy-gauge galvanized steel wire stitching for 7-ply export boxes.",
      icon: Wrench,
    },
    {
      title: "Spacious Covered Warehouse & Dispatch Bays",
      role: "Logistics Storage",
      desc: "Weatherproof indoor storage bays equipped with dehumidifiers, motorized forklifts, and raised loading docks for container trucks.",
      icon: Warehouse,
    },
    {
      title: "Environment-Controlled Testing Facility",
      role: "In-House Quality Lab",
      desc: "Equipped with digital burst testers, ring crush (RCT), Cobb testers, moisture analyzers, and box compression testers (BCT).",
      icon: Factory,
    },
  ];

  return (
    <section className="w-full bg-[#F5F2EB] py-14 border-b border-[#E4DED3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202A2E]/10 text-[#202A2E] text-xs font-bold uppercase tracking-wider mb-3">
            Plant Infrastructure
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-tight mb-4">
            Built for Consistent Production
          </h2>
          <p className="text-base sm:text-lg text-[#687378] font-normal leading-relaxed">
            Our modern manufacturing plant in India integrates high-output machinery with skilled personnel to maintain fast turnaround times and exact dimensional tolerances.
          </p>
        </div>

        {/* 6 Machinery Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {machinery.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl border border-[#E4DED3] hover:border-[#D1B48C] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#F5F2EB] group-hover:bg-[#E97835] flex items-center justify-center text-[#202A2E] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-[#E97835] uppercase tracking-wider">
                      {item.role}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#202A2E] mb-2 group-hover:text-[#E97835] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#687378] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F5F2EB] flex items-center justify-between text-xs text-[#687378]">
                  <span>Operational Status</span>
                  <span className="font-semibold text-[#7B8D78] flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#7B8D78] animate-pulse" />
                    Active Production
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
