"use client";

import React from "react";
import Image from "next/image";
import {
  User,
  Quote,
  ShieldCheck,
  Building2,
  Users,
  Briefcase,
  Sparkles,
} from "lucide-react";
import {
  OWNER_PROFILE,
  MANAGEMENT_TEAM,
} from "./teamData";

export default function LeadershipTeam() {
  return (
    <section
      id="leadership-team"
      className="relative py-14 md:py-14 bg-[#FAF7F2] text-[#202A2E] overflow-hidden"
      aria-label="Owner and Management Team"
    >
      {/* Subtle Kraft Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #493629 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =========================================================================
            PART ONE: OWNER / FOUNDER SPOTLIGHT
        ========================================================================= */}
        <div className="mb-24 lg:mb-32">
          <div className="relative rounded-3xl bg-white border border-[#E8D5B8] p-8 sm:p-12 lg:p-16 shadow-xl overflow-hidden">
            {/* Ambient Kraft Warm Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8D5B8]/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#A65D32]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
              {/* Left Column (7 cols): Editorial Content & Quote */}
              <div className="lg:col-span-7 space-y-6">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8D5B8]/40 border border-[#A65D32]/30 text-[#A65D32] text-xs font-bold uppercase tracking-widest">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>MEET OUR LEADERSHIP</span>
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#493629] tracking-tight leading-tight">
                  Leadership That{" "}
                  <span className="text-[#A65D32]">Drives Our Vision.</span>
                </h2>

                {/* Bio Paragraphs */}
                <div className="space-y-4 text-base sm:text-lg text-[#62574D] leading-relaxed font-normal">
                  {OWNER_PROFILE.bioParagraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Featured Quote Callout */}
                <div className="relative pl-6 border-l-2 border-[#A65D32] py-2 bg-[#FAF7F2] rounded-r-xl pr-4">
                  <Quote className="w-6 h-6 text-[#A65D32]/40 absolute -top-3 left-4" />
                  <p className="italic text-[#493629] text-sm sm:text-base font-medium leading-relaxed">
                    &ldquo;{OWNER_PROFILE.quote}&rdquo;
                  </p>
                </div>

                {/* Owner Identity Row */}
                <div className="pt-4 border-t border-[#E8D5B8] flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#493629]">
                      {OWNER_PROFILE.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#A65D32] uppercase tracking-wider">
                      {OWNER_PROFILE.designation} &bull; {OWNER_PROFILE.companyName}
                    </p>
                  </div>

                  {OWNER_PROFILE.isPlaceholder && (
                    <span className="px-3 py-1 rounded-full bg-[#E8D5B8]/60 text-[10px] font-bold text-[#493629] uppercase tracking-wider border border-[#493629]/15">
                      Verified Owner Profile Ready
                    </span>
                  )}
                </div>
              </div>

              {/* Right Column (5 cols): Owner Portrait or Ready Placeholder Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md">
                  {/* Decorative Kraft Layered Offset Frame behind */}
                  <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#A65D32]/25 to-[#E8D5B8]/40 -rotate-1 pointer-events-none" />

                  {/* Main Portrait Container */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-b from-[#FAF7F2] to-[#E8D5B8]/50 border-2 border-[#E8D5B8] shadow-2xl flex flex-col items-center justify-center p-6 text-center">
                    {OWNER_PROFILE.photoUrl ? (
                      <Image
                        src={OWNER_PROFILE.photoUrl}
                        alt={`${OWNER_PROFILE.name} - ${OWNER_PROFILE.designation}`}
                        fill
                        className="object-cover object-center"
                      />
                    ) : (
                      /* Sophisticated Ready Industrial Monogram / Profile Placeholder */
                      <div className="space-y-4 max-w-xs">
                        <div className="w-24 h-24 mx-auto rounded-full bg-[#493629] text-[#E8D5B8] flex items-center justify-center shadow-lg border-4 border-white">
                          <Building2 className="w-10 h-10" />
                        </div>
                        <div>
                          <div className="inline-block px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/30 text-[#A65D32] text-[11px] font-bold uppercase tracking-wider mb-2">
                            Executive Leadership
                          </div>
                          <h4 className="text-lg font-bold text-[#493629]">
                            Managing Director
                          </h4>
                          <p className="text-xs text-[#62574D] mt-1 leading-relaxed">
                            Official company founder photograph frame ready for
                            client-supplied authentic portrait.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Bottom Floating Badge */}
                    <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md border border-[#E8D5B8] rounded-xl p-3 shadow-md flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#A65D32]" />
                      <span className="text-xs font-bold text-[#493629] tracking-wider uppercase">
                        {OWNER_PROFILE.companyName} Leadership
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PART TWO: OUR MANAGEMENT TEAM
        ========================================================================= */}
        <div>
          {/* Section Introduction */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8D5B8]/40 border border-[#A65D32]/30 text-[#A65D32] text-xs font-bold uppercase tracking-widest mb-4">
              <Users className="w-3.5 h-3.5" />
              <span>THE PEOPLE BEHIND OUR WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#493629] tracking-tight leading-tight mb-4">
              Meet Our Management Team
            </h2>
            <p className="text-base sm:text-lg text-[#62574D] leading-relaxed">
              A dedicated team working together to keep our operations organized,
              our processes moving and our commitments on track.
            </p>
          </div>

          {/* Four-Column Management Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {MANAGEMENT_TEAM.map((member) => (
              <div
                key={member.id}
                className="group relative rounded-2xl bg-white border border-[#E8D5B8] overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#A65D32]/50 transition-all duration-500 flex flex-col"
              >
                {/* Portrait Image Container (Clean photo, no text overlay) */}
                <div className="relative w-full aspect-[4/5] bg-[#E8D5B8]/30 overflow-hidden">
                  <Image
                    src={member.photoUrl}
                    alt={member.photoAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Member Info Panel */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-lg font-bold text-[#493629] group-hover:text-[#A65D32] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#62574D] mt-0.5">
                      {member.designation}
                    </p>
                  </div>

                  {/* Subtle Terracotta Underline Transition */}
                  <div className="pt-3.5 mt-3.5 border-t border-[#E8D5B8]/70 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[11px] text-[#A65D32] font-semibold uppercase tracking-wider">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>Packaging Operations</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#A65D32] scale-75 group-hover:scale-125 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Development / Editable Notice */}

        </div>
      </div>
    </section>
  );
}
