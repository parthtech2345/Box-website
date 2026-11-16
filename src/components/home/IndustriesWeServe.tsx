import React from "react";
import {
  Car,
  Pill,
  Utensils,
  ShoppingBag,
  Cpu,
  Shirt,
  Wheat,
  FlaskConical,
  Wrench,
  Sun,
  ArrowRight,
} from "lucide-react";

export default function IndustriesWeServe() {
  const industries = [
    {
      name: "Automotive & Heavy Engineering",
      desc: "Heavy-duty 5 & 7-ply master shippers with custom honeycomb or corrugated partitions for transmission units, pistons, and brakes.",
      icon: Car,
      tag: "Heavy-Duty",
    },
    {
      name: "Pharmaceutical & Healthcare",
      desc: "Hygienic, dust-free virgin kraft boxes for blister packs, syrup vials, and cold-chain medical device transport.",
      icon: Pill,
      tag: "High Hygiene",
    },
    {
      name: "Food & Beverage",
      desc: "Moisture-resistant ventilated produce cartons for mangoes, fruits, processed snacks, bakery, and beverage cans.",
      icon: Utensils,
      tag: "Ventilated",
    },
    {
      name: "E-Commerce & Retail",
      desc: "Self-locking die-cut mailer boxes with tamper-evident peel-and-seal adhesive strips and vibrant branded unboxing graphics.",
      icon: ShoppingBag,
      tag: "Tamper Proof",
    },
    {
      name: "Electronics & Appliances",
      desc: "Anti-static, high-cushioning corrugated enclosures designed to protect LED displays, PCBA circuit boards, and home appliances.",
      icon: Cpu,
      tag: "Shock Absorbing",
    },
    {
      name: "Textile & Garments",
      desc: "High-volume wardrobe and garment export cartons designed for stacking without side-wall bulging during container shipping.",
      icon: Shirt,
      tag: "High Volume",
    },
    {
      name: "Agriculture & Fresh Farm Produce",
      desc: "Telescopic top-and-bottom ventilated boxes engineered to withstand high humidity cold-storage environments in India.",
      icon: Wheat,
      tag: "Cold Chain",
    },
    {
      name: "Chemical & Lubricants",
      desc: "Reinforced UN-certified hazardous master boxes designed to securely immobilize jerry cans, drums, and agrochemical bottles.",
      icon: FlaskConical,
      tag: "Rigid Wall",
    },
    {
      name: "Industrial Hardware & Fasteners",
      desc: "High burst-factor small footprint bins engineered for heavy metal nuts, bolts, bearings, and precision tools.",
      icon: Wrench,
      tag: "High Density",
    },
    {
      name: "Solar & Clean Energy Equipment",
      desc: "Large format edge-protected corrugated crates for delicate photovoltaic solar panels, inverters, and battery storage.",
      icon: Sun,
      tag: "Large Format",
    },
  ];

  return (
    <section id="industries" className="w-full bg-[#F5F2EB] py-14 border-b border-[#E4DED3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202A2E]/10 text-[#202A2E] text-xs font-bold uppercase tracking-wider mb-3">
            Sector Capabilities
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-tight mb-4">
            Packaging for Every Industry
          </h2>
          <p className="text-base sm:text-lg text-[#687378] font-normal leading-relaxed">
            Every product category demands a specific box density, stacking rating, and moisture protection. Here is how we engineer solutions across major industrial verticals.
          </p>
        </div>

        {/* 10-Sector Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl border border-[#E4DED3] hover:border-[#D1B48C] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#F5F2EB] group-hover:bg-[#E97835] flex items-center justify-center text-[#202A2E] group-hover:text-white transition-colors duration-200 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#202A2E]/5 text-[#687378] group-hover:bg-[#E97835]/10 group-hover:text-[#E97835] transition-colors">
                      {ind.tag}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-[#202A2E] mb-2.5 group-hover:text-[#E97835] transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#687378] leading-relaxed">
                    {ind.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#F5F2EB] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#D1B48C]">
                    Custom Spec Sheet Available
                  </span>
                  <a
                    href="#quote"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#202A2E] group-hover:text-[#E97835] transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
