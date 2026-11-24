"use client";

import React, { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";

export interface BannerEmployeeMascotProps {
  characterImage: string;
  characterAlt: string;
  dialogueIcon: string;
  dialogueTitle: string;
  dialogueSubtext: string;
  characterWidthClass?: string;
  characterHeightClass?: string;
  shadowWidthClass?: string;
  bubbleMaxWidthClass?: string;
  waveDirection?: "left" | "right";
  delay?: number;
}

export default function BannerEmployeeMascot({
  characterImage,
  characterAlt,
  dialogueIcon,
  dialogueTitle,
  dialogueSubtext,
  characterWidthClass = "w-[115px] sm:w-[140px] lg:w-[160px]",
  characterHeightClass = "h-[165px] sm:h-[205px] lg:h-[240px]",
  shadowWidthClass = "w-22 sm:w-28 lg:w-32",
  bubbleMaxWidthClass = "max-w-[240px] sm:max-w-[280px] lg:max-w-[320px]",
  waveDirection = "left",
  delay = 0.25,
}: BannerEmployeeMascotProps) {
  const workerRef = useRef<HTMLDivElement | null>(null);
  const shadowRef = useRef<HTMLDivElement | null>(null);
  const speechBubbleRef = useRef<HTMLDivElement | null>(null);

  const playGreeting = useCallback(() => {
    if (!workerRef.current || !shadowRef.current || !speechBubbleRef.current) return;

    // Reset initial states
    gsap.set(workerRef.current, { y: 8, opacity: 0, rotation: 0 });
    gsap.set(shadowRef.current, { opacity: 0, scale: 0.8 });
    gsap.set(speechBubbleRef.current, { scale: 0, opacity: 0, transformOrigin: "bottom left" });

    const tl = gsap.timeline({ delay });

    // Step 1: Employee smoothly fades in standing naturally (NO walking/sliding)
    tl.to(
      [workerRef.current, shadowRef.current],
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      0
    );

    // Step 2: Employee waves naturally ("Hii!")
    const sign = waveDirection === "left" ? -1 : 1;
    tl.to(
      workerRef.current,
      {
        rotation: sign * 3,
        duration: 0.22,
        ease: "sine.inOut",
      },
      0.45
    )
      .to(
        workerRef.current,
        {
          rotation: -sign * 3,
          duration: 0.2,
          yoyo: true,
          repeat: 3,
          ease: "sine.inOut",
        },
        0.67
      )
      .to(
        workerRef.current,
        {
          rotation: 0,
          duration: 0.28,
          ease: "power2.out",
        },
        1.3
      );

    // Step 3: Speech bubble pops out directly from employee's mouth as dialogue!
    tl.to(
      speechBubbleRef.current,
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.8)",
      },
      0.65
    );
  }, [delay, waveDirection]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    playGreeting();
  }, [playGreeting]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-end gap-3 sm:gap-4 pointer-events-auto">
      {/* Employee Character with Soft Ground Shadow */}
      <div
        className="relative flex flex-col items-center shrink-0 cursor-pointer group"
        title="Click to wave & speak again!"
        onClick={playGreeting}
      >
        <div
          ref={workerRef}
          className={`relative ${characterWidthClass} ${characterHeightClass} z-20 pointer-events-none transition-transform duration-300 group-hover:scale-105`}
        >
          <Image
            src={characterImage}
            alt={characterAlt}
            fill
            priority
            sizes="(max-width: 640px) 115px, (max-width: 1024px) 140px, 160px"
            className="object-contain object-bottom drop-shadow-2xl pointer-events-none select-none"
          />
        </div>

        {/* Ground Contact Shadow (Clean, ZERO white halos) */}
        <div
          ref={shadowRef}
          className={`${shadowWidthClass} h-3.5 bg-black/60 rounded-full blur-[4px] -mt-2 z-10 pointer-events-none`}
        />
      </div>

      {/* SPEECH BUBBLE DIRECTLY CONNECTED TO EMPLOYEE'S MOUTH/HEAD */}
      <div
        ref={speechBubbleRef}
        className={`relative mb-24 sm:mb-30 lg:mb-36 ${bubbleMaxWidthClass} select-none`}
      >
        {/* Dialogue Balloon Container */}
        <div className="relative px-4 py-3 rounded-2xl bg-[#202A2E]/85 backdrop-blur-md border border-white/20 shadow-2xl text-white">
          {/* Speech Bubble Pointer Tail (Points directly to employee's face/mouth!) */}
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-[#202A2E]/85 border-l border-b border-white/20 -rotate-45" />

          {/* Spoken Dialogue Text */}
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-base sm:text-lg animate-bounce">{dialogueIcon}</span>
            <h4 className="font-heading font-extrabold text-base sm:text-lg lg:text-xl text-white tracking-wide leading-tight drop-shadow-sm">
              {dialogueTitle}
            </h4>
          </div>

          <p className="text-xs sm:text-[13px] font-medium text-[#D1B48C] leading-snug drop-shadow-xs">
            {dialogueSubtext}
          </p>
        </div>
      </div>
    </div>
  );
}
