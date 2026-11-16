import React from "react";
import { Leaf, Recycle, Trees, Droplets, SunMedium } from "lucide-react";

export default function Sustainability() {
  const pillars = [
    {
      title: "100% Recyclable Paper Packaging",
      desc: "All our corrugated boxes are manufactured from natural, biodegradable cellulose fibers that naturally decompose and can be recycled 7+ times.",
      icon: Recycle,
    },
    {
      title: "Responsible Mill Sourcing",
      desc: "We partner strictly with Indian paper mills utilizing renewable agro-residue fibers and FSC-controlled virgin pulp woodlots.",
      icon: Trees,
    },
    {
      title: "Bio-Based Starch Adhesives",
      desc: "Our corrugating corrugator fluting uses non-toxic, food-grade natural corn and tapioca starch glues with zero harmful volatile chemicals.",
      icon: Droplets,
    },
    {
      title: "Energy & Scrap Minimization",
      desc: "100% of internal board trim waste, slot cutouts, and corner trimmings are bundled on-site and sent back to paper repulping mills.",
      icon: SunMedium,
    },
  ];

  return (
    <section className="w-full bg-[#F5F2EB] py-14 border-b border-[#E4DED3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading with Sage Green Accent */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7B8D78]/20 text-[#7B8D78] text-xs font-bold uppercase tracking-wider mb-3">
            <Leaf className="w-3.5 h-3.5" /> Eco-Responsible Manufacturing
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-tight mb-4">
            Packaging with a More Responsible Approach
          </h2>
          <p className="text-base sm:text-lg text-[#687378] font-normal leading-relaxed">
            Corrugated packaging is inherently one of the world's most recycled, circular materials. Here is how our production practices protect both your goods and our shared natural resources.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pil, idx) => {
            const Icon = pil.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl border border-[#E4DED3] hover:border-[#7B8D78] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#7B8D78]/15 group-hover:bg-[#7B8D78] flex items-center justify-center text-[#7B8D78] group-hover:text-white transition-colors duration-200 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#202A2E] mb-2.5">
                    {pil.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#687378] leading-relaxed">
                    {pil.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F5F2EB] text-[11px] font-semibold text-[#7B8D78]">
                  • Circular Economy Certified
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
