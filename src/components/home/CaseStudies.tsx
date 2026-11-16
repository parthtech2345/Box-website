import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CaseStudies() {
  const cases = [
    {
      industry: "Automotive Transmission Exporter",
      requirement: "Replace expensive wooden shipping crates for 350 kg automotive gearbox assemblies.",
      challenge:
        "High cost of heat-treated wooden crates and sea-freight moisture corrosion during multi-week container shipping.",
      solution:
        "Designed a heavy-duty 7-ply triple-wall corrugated bulk bin with internal moisture barrier liners and high-density fluting.",
      result: "Achieved 38% packaging cost reduction and 100% rust-free delivery across overseas shipments.",
      image: "/images/heavy-duty-box.png",
      tag: "Heavy Engineering",
    },
    {
      industry: "Pan-India E-Commerce Fashion Platform",
      requirement: "Fast-packing, tamper-evident die-cut mailer cartons for apparel and footwear fulfillment.",
      challenge:
        "Transit pilferage and slow warehouse packing speeds using manual adhesive tape dispensers.",
      solution:
        "Engineered self-locking die-cut kraft mailers with dual peel-and-seal adhesive strips and perforated tear-open zippers.",
      result: "Reduced average fulfillment packing time by 42% and eliminated unauthorized en-route package opening.",
      image: "/images/printed-boxes.png",
      tag: "E-Commerce",
    },
    {
      industry: "Premium Alphonso Mango Export Syndicate",
      requirement: "High-humidity cold storage transport boxes for air-freight and sea-freight produce export.",
      challenge:
        "Box softening and side-wall collapse caused by condensation in sub-zero refrigerated reefer containers.",
      solution:
        "Engineered 5-ply ventilated master cartons with moisture-resistant sizing chemicals and custom aeration slots.",
      result: "Maintained structural rigidity throughout 14-day cold transit with zero fruit bruising complaints.",
      image: "/images/produce-boxes.png",
      tag: "Fresh Produce",
    },
  ];

  return (
    <section className="w-full bg-[#F5F2EB] py-14 border-b border-[#E4DED3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E97835]/10 text-[#E97835] text-xs font-bold uppercase tracking-wider mb-3">
            Real-World Impact
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-tight mb-4">
            Packaging Solutions in Action
          </h2>
          <p className="text-base sm:text-lg text-[#687378] font-normal leading-relaxed">
            See how our packaging engineering team solved structural, moisture, and logistic challenges across Indian manufacturing and export sectors.
          </p>
        </div>

        {/* 3 Editorial Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((cs, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E4DED3] overflow-hidden hover:border-[#D1B48C] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Case Study Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#202A2E]/5">
                  <Image
                    src={cs.image}
                    alt={cs.industry}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#202A2E]/90 text-white text-xs font-semibold rounded-md backdrop-blur-sm">
                      {cs.tag}
                    </span>
                  </div>
                </div>

                {/* Case Content */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-[#202A2E] mb-3 group-hover:text-[#E97835] transition-colors">
                    {cs.industry}
                  </h3>

                  <div className="space-y-3 text-xs sm:text-sm text-[#687378]">
                    <div>
                      <strong className="text-[#202A2E] block">Requirement:</strong>
                      <span>{cs.requirement}</span>
                    </div>

                    <div>
                      <strong className="text-[#202A2E] block">Challenge:</strong>
                      <span>{cs.challenge}</span>
                    </div>

                    <div>
                      <strong className="text-[#202A2E] block">Engineering Solution:</strong>
                      <span>{cs.solution}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Result Pill */}
              <div className="p-6 pt-0">
                <div className="p-3.5 bg-[#F5F2EB] rounded-xl border border-[#E4DED3] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7B8D78] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#202A2E] block">
                      Verified Result
                    </span>
                    <span className="text-xs text-[#202A2E] font-semibold leading-snug">
                      {cs.result}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
