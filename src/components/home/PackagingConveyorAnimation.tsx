"use client";

import React, { useState, useEffect } from "react";

export default function PackagingConveyorAnimation() {
  // Cycle stages: 
  // 0: Box arrives in front of worker
  // 1: Worker lowers hands, folds & packs box
  // 2: Box is sealed with kraft tape & stamped
  // 3: Box moves forward down the conveyor and next box slides in
  const [stage, setStage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % 4);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-between overflow-hidden bg-[#FAF7F2] select-none p-2 sm:p-4">
      {/* Background Soft Studio Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-[#E8D5B8]/25 blur-3xl pointer-events-none rounded-full" />

      {/* Top Industrial Header Badge */}
      <div className="relative z-30 flex items-center justify-between w-full max-w-md px-3 sm:px-4 py-2 rounded-xl bg-white/95 border border-[#E4DED3] shadow-xs backdrop-blur-xs">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#78846A] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#78846A]" />
          </span>
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#202A2E]">
            Automated Packaging Line
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-semibold text-[#A65D32] bg-[#A65D32]/10 px-2 py-0.5 rounded-full">
          <span>{stage === 0 ? "Box Infeed" : stage === 1 ? "Operator Packing" : stage === 2 ? "Tape Sealing" : "Conveyor Dispatch"}</span>
        </div>
      </div>

      {/* MAIN STAGE: WORKER OPERATING ON THE PACKAGING TABLE (Exact reproduction of uploaded reference) */}
      <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-end">
        {/* Worker & Active Packing Box SVG */}
        <div className="relative w-full max-w-[460px] h-[220px] sm:h-[260px] flex items-end justify-center">
          <svg
            viewBox="0 0 500 300"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 1. OPERATOR / WORKER (Matching uploaded reference exactly, styled in Kraft & Charcoal) */}
            <g id="worker">
              {/* Safety Hardhat Helmet */}
              <path
                d="M210 50C210 28 228 14 250 14C272 14 290 28 290 50H210Z"
                fill="#A65D32"
                stroke="#202A2E"
                strokeWidth="2.5"
              />
              <rect x="202" y="48" width="96" height="8" rx="4" fill="#A65D32" stroke="#202A2E" strokeWidth="2.5" />
              <rect x="244" y="20" width="12" height="22" rx="2" fill="#202A2E" />

              {/* Head & Neck */}
              <path
                d="M226 56H274V84C274 97 263 108 250 108C237 108 226 97 226 84V56Z"
                fill="#FFFFFF"
                stroke="#202A2E"
                strokeWidth="2.5"
              />
              {/* Goatee / Facial Feature */}
              <path d="M246 100L254 100L250 106Z" fill="#202A2E" />
              {/* Eyes & Nose (Concentrated on Packing) */}
              <path d="M236 70C239 73 242 73 244 70" stroke="#202A2E" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M256 70C258 73 261 73 264 70" stroke="#202A2E" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M250 78V84" stroke="#202A2E" strokeWidth="2" strokeLinecap="round" />
              {/* Calm smile */}
              <path d="M245 92C248 94 252 94 255 92" stroke="#202A2E" strokeWidth="2" strokeLinecap="round" />

              {/* Neck & Grid Inner Shirt */}
              <rect x="242" y="108" width="16" height="16" fill="#FFFFFF" stroke="#202A2E" strokeWidth="2.5" />

              {/* Arms with Grid Pattern Shirt (sleeves) */}
              {/* Left Arm Upper */}
              <path
                d="M170 160L216 124L228 136L192 186L170 160Z"
                fill="#FFFFFF"
                stroke="#202A2E"
                strokeWidth="2.5"
              />
              {/* Grid texture on left sleeve */}
              <line x1="184" y1="140" x2="204" y2="164" stroke="#202A2E" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="196" y1="130" x2="216" y2="154" stroke="#202A2E" strokeWidth="1" strokeDasharray="3 3" />

              {/* Right Arm Upper */}
              <path
                d="M330 160L284 124L272 136L308 186L330 160Z"
                fill="#FFFFFF"
                stroke="#202A2E"
                strokeWidth="2.5"
              />
              {/* Grid texture on right sleeve */}
              <line x1="316" y1="140" x2="296" y2="164" stroke="#202A2E" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="304" y1="130" x2="284" y2="154" stroke="#202A2E" strokeWidth="1" strokeDasharray="3 3" />

              {/* Work Uniform Vest (Charcoal & Sage) */}
              <path
                d="M208 124C220 120 236 118 250 118C264 118 280 120 292 124L306 200H194L208 124Z"
                fill="#202A2E"
                stroke="#202A2E"
                strokeWidth="2.5"
              />
              {/* V-Neck & Straps */}
              <path d="M232 118L240 180H260L268 118L250 150L232 118Z" fill="#78846A" />
              <line x1="200" y1="180" x2="300" y2="180" stroke="#A65D32" strokeWidth="6" />

              {/* OPERATOR GLOVES (Terracotta #A65D32 with Dynamic Packing Movements) */}
              <g
                className="transition-transform duration-500 ease-in-out"
                style={{
                  transform:
                    stage === 1
                      ? "translateY(12px) scale(1.02)"
                      : stage === 2
                      ? "translateY(4px)"
                      : "translateY(0px)",
                }}
              >
                {/* Left Glove pressing/holding box flap */}
                <path
                  d="M188 170C182 176 186 196 202 196H222C226 196 228 186 222 180L206 166C198 162 192 164 188 170Z"
                  fill="#A65D32"
                  stroke="#202A2E"
                  strokeWidth="2.5"
                />
                <circle cx="212" cy="184" r="3" fill="#202A2E" />

                {/* Right Glove pressing/holding box flap */}
                <path
                  d="M312 170C318 176 314 196 298 196H278C274 196 272 186 278 180L294 166C302 162 308 164 312 170Z"
                  fill="#A65D32"
                  stroke="#202A2E"
                  strokeWidth="2.5"
                />
                <circle cx="288" cy="184" r="3" fill="#202A2E" />
              </g>
            </g>

            {/* 2. CENTRAL ACTIVE BOX BEING PACKED */}
            <g
              id="active-box"
              className="transition-all duration-700 ease-in-out origin-bottom"
              style={{
                transform:
                  stage === 3
                    ? "translateX(80px) scale(0.96) opacity(0.8)"
                    : stage === 0
                    ? "translateX(-40px) scale(0.96)"
                    : "translateX(0px) scale(1)",
              }}
            >
              {/* Kraft Box Main Body */}
              <rect
                x="200"
                y="180"
                width="100"
                height="80"
                fill="#C49364"
                stroke="#202A2E"
                strokeWidth="2.5"
              />

              {/* Left Open / Folded Flap */}
              <path
                d={
                  stage >= 2
                    ? "M200 180L250 180L240 174L200 174Z"
                    : "M200 180L175 140L195 140L208 180Z"
                }
                fill="#D8A878"
                stroke="#202A2E"
                strokeWidth="2"
                className="transition-all duration-500"
              />

              {/* Right Open / Folded Flap */}
              <path
                d={
                  stage >= 2
                    ? "M300 180L250 180L260 174L300 174Z"
                    : "M300 180L325 140L305 140L292 180Z"
                }
                fill="#D8A878"
                stroke="#202A2E"
                strokeWidth="2"
                className="transition-all duration-500"
              />

              {/* Tape Sealing Animation when packed (Stage >= 2) */}
              {stage >= 2 && (
                <rect
                  x="244"
                  y="174"
                  width="12"
                  height="86"
                  fill="#8C5C35"
                  className="animate-pulse"
                />
              )}

              {/* Shipping Label / Barcode */}
              <rect x="212" y="235" width="22" height="12" fill="#202A2E" rx="1.5" />
              {/* Product Badge / Eco Stamp */}
              <circle cx="282" cy="241" r="7" fill="#FAF7F2" stroke="#202A2E" strokeWidth="1.5" />
              <text x="282" y="244" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#78846A">
                ✓
              </text>
            </g>

            {/* 3. UPCOMING / PREVIOUS INFEED BOX (Left side waiting on conveyor) */}
            <g
              id="infeed-box"
              className="transition-all duration-700 ease-in-out"
              style={{
                transform: stage === 3 ? "translateX(60px)" : "translateX(0px)",
              }}
            >
              <rect
                x="20"
                y="180"
                width="100"
                height="80"
                fill="#C49364"
                stroke="#202A2E"
                strokeWidth="2.5"
              />
              {/* Open Flaps waiting to be filled */}
              <path d="M20 180L0 140L20 140L30 180Z" fill="#D8A878" stroke="#202A2E" strokeWidth="2" />
              <path d="M120 180L135 140L115 140L108 180Z" fill="#D8A878" stroke="#202A2E" strokeWidth="2" />
              <rect x="32" y="235" width="22" height="12" fill="#202A2E" rx="1.5" />
            </g>

            {/* 4. DISPATCHED / FINISHED BOX (Right side moving down conveyor) */}
            <g
              id="outfeed-box"
              className="transition-all duration-700 ease-in-out"
              style={{
                transform: stage === 3 ? "translateX(60px)" : "translateX(0px)",
              }}
            >
              <rect
                x="380"
                y="180"
                width="100"
                height="80"
                fill="#C49364"
                stroke="#202A2E"
                strokeWidth="2.5"
              />
              {/* Fully sealed top flaps */}
              <path d="M380 180H480V176H380Z" fill="#8C5C35" stroke="#202A2E" strokeWidth="1.5" />
              <rect x="392" y="235" width="22" height="12" fill="#202A2E" rx="1.5" />
              <circle cx="462" cy="241" r="7" fill="#FAF7F2" stroke="#202A2E" strokeWidth="1.5" />
              <text x="462" y="244" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#A65D32">
                ♺
              </text>
            </g>

            {/* 5. INDUSTRIAL CONVEYOR BELT (Bed & Rotating Drive Wheels matching theme) */}
            <g id="conveyor-belt">
              {/* Conveyor Top Sliding Belt Surface */}
              <rect
                x="0"
                y="260"
                width="500"
                height="32"
                fill="#493629"
                stroke="#202A2E"
                strokeWidth="3"
              />
              {/* Segmented Industrial Slots */}
              {[...Array(10)].map((_, i) => (
                <line
                  key={i}
                  x1={i * 50}
                  y1="260"
                  x2={i * 50}
                  y2="292"
                  stroke="#202A2E"
                  strokeWidth="2"
                />
              ))}

              {/* Roller Wheels Mechanism */}
              <rect x="0" y="292" width="500" height="8" fill="#202A2E" />
            </g>
          </svg>
        </div>
      </div>

      {/* CONTINUOUS MOVING ELEVATOR / CONVEYOR ROLLERS BED (Bottom Interactive Wheels) */}
      <div className="relative z-20 w-full overflow-hidden bg-[#202A2E] rounded-xl border-2 border-[#202A2E] shadow-md p-2">
        {/* Row of Synchronized Industrial Rotating Wheels */}
        <div className="flex items-center justify-between gap-1 overflow-hidden px-2">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#493629] border-2 border-[#D1B48C] flex items-center justify-center shrink-0 animate-roller-rotate shadow-xs"
            >
              {/* Inner Ball Bearings / Studs */}
              <div className="w-2.5 h-2.5 rounded-full bg-[#FAF7F2] border border-[#202A2E]" />
              <div className="absolute w-full h-[1.5px] bg-[#A65D32]/70" />
              <div className="absolute h-full w-[1.5px] bg-[#A65D32]/70" />
              {/* Outer Screws */}
              <div className="absolute top-0.5 w-1 h-1 rounded-full bg-[#202A2E]" />
              <div className="absolute bottom-0.5 w-1 h-1 rounded-full bg-[#202A2E]" />
            </div>
          ))}
        </div>

        {/* Live Step Progress Indicator */}
        <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-[#E8D5B8]/80 px-2">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#78846A]" />
            Continuous Box Packing Sequence
          </span>
          <span className="font-semibold text-white">
            Box #{stage + 101} • Ready for Logistics
          </span>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes rollerRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-roller-rotate {
          animation: rollerRotate 1.5s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-roller-rotate {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
