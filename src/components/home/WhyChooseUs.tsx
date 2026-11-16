import React from "react";
import Image from "next/image";
import { Check, Layers, Cpu, ShieldCheck, Factory, Truck, Users } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Customized Packaging Solutions",
      desc: "Tailored board caliper, flute profiles, and custom die lines matched precisely to your product's weight and fragility.",
      icon: Layers,
    },
    {
      title: "Multiple Ply Options (3, 5 & 7 Ply)",
      desc: "From lightweight e-commerce boxes to heavy-duty export containers engineered to withstand up to 1,500 kg stacking loads.",
      icon: Cpu,
    },
    {
      title: "Quality-Focused Manufacturing",
      desc: "Every batch tested in our in-house lab for Bursting Factor (BF), Edge Crush Test (ECT), and Grams per Square Meter (GSM).",
      icon: ShieldCheck,
    },
    {
      title: "Consistent Production Processes",
      desc: "Fully automated German & Taiwanese corrugation machinery ensuring zero dimensional deviation across high-volume runs.",
      icon: Factory,
    },
    {
      title: "Industry-Specific Packaging",
      desc: "Dedicated design protocols for automotive components, pharmaceuticals, fresh farm produce, textiles, and electronics.",
      icon: Truck,
    },
    {
      title: "Customer-Focused Technical Service",
      desc: "Direct access to our packaging engineers for drop testing, transit simulation, and corrugated cost-optimization audits.",
      icon: Users,
    },
  ];

  return (
    <section id="about" className="w-full bg-[#F5F2EB] py-14 border-b border-[#E4DED3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7B8D78]/20 text-[#7B8D78] text-xs font-bold uppercase tracking-wider mb-3">
              The Aavrit Packaging Advantage
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-tight">
              Strength in Every Layer.
              <span className="block text-[#E97835]">Confidence in Every Delivery.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-base text-[#687378] leading-relaxed">
              We combine heavy industrial corrugating power with precision paper engineering to give Indian and global enterprises packaging that never fails during transit.
            </p>
          </div>
        </div>

        {/* Asymmetrical Layout: Left Feature Cards + Right Factory Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Side: 6 Key Capabilities (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {points.map((pt, i) => {
              const Icon = pt.icon;
              return (
                <div
                  key={i}
                  className="p-6 bg-white rounded-xl border border-[#E4DED3] hover:border-[#D1B48C] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#F5F2EB] flex items-center justify-center text-[#E97835] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-[#202A2E] mb-2">
                      {pt.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#687378] leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#F5F2EB] flex items-center gap-1.5 text-[11px] font-semibold text-[#7B8D78]">
                    <Check className="w-3.5 h-3.5" /> Verified Standard
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Factory & Indian Technicians Visual (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#D1B48C] shadow-lg group">
              <Image
                src="/images/factory-team-india.png"
                alt="Indian factory technicians and operators at corrugated box manufacturing line"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#202A2E]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                <span className="font-bold text-[#D1B48C] text-sm block">
                  Dedicated Indian Manufacturing Workforce
                </span>
                <span>Operating high-speed corrugating and printing lines in our factory</span>
              </div>
            </div>

            {/* Industrial Stat Banner */}
            <div className="p-6 bg-[#202A2E] text-white rounded-2xl border border-[#202A2E] flex items-center justify-between">
              <div>
                <div className="font-heading font-bold text-2xl text-[#D1B48C]">
                  Zero Compromise on Paper Quality
                </div>
                <div className="text-xs text-[#F5F2EB]/80 mt-1">
                  100% sourced from certified Indian paper mills and virgin kraft suppliers.
                </div>
              </div>
              <a
                href="#manufacturing"
                className="px-4 py-2 bg-[#E97835] text-white text-xs font-semibold rounded-lg shrink-0 hover:bg-[#d46927] transition-colors"
              >
                Tour Plant
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
