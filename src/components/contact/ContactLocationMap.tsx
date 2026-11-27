"use client";

import React, { useRef, useEffect } from "react";
import { MapPin, Navigation, Compass, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ContactLocationMapProps {
  data?: {
    badge?: string;
    title?: string;
    subtitle?: string;
    embedUrl?: string;
    googleMapsUrl?: string;
    plantName?: string;
    address?: string;
    transitHighlights?: string[];
  };
}

export default function ContactLocationMap({ data }: ContactLocationMapProps = {}) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const googleMapsUrl =
    data?.googleMapsUrl ||
    "https://maps.google.com/?q=Plot+No.+42,+Phase+II+GIDC+Industrial+Estate,+Gujarat+382445,+India";

  const embedUrl =
    data?.embedUrl ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117502.83605481745!2d72.50284759999999!3d22.998059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85c2e17e4e13%3A0xb304b4f5358045b!2sGIDC%20Phase%20II%2C%20Vatva%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  const highlights = data?.transitHighlights || [
    "Direct arterial connectivity to National Highway freight corridors.",
    "Equipped with heavy commercial vehicle loading and unloading bays.",
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-14 sm:py-14 border-b border-[#E4DED3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header 2-Column Split */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 mb-10 border-b border-[#E4DED3]">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32]">
                {data?.badge || "PLANT ACCESSIBILITY"}
              </span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#202A2E] leading-[1.1] tracking-tight">
              {data?.title || (
                <>
                  Find Our <br className="hidden sm:inline" />
                  <span className="text-[#A65D32]">Manufacturing Plant</span>
                </>
              )}
            </h2>
          </div>

          <div className="max-w-md lg:border-l-2 lg:border-[#D1B48C]/60 lg:pl-6 pb-1">
            <p className="text-sm sm:text-base text-[#62574D] font-normal leading-relaxed">
              {data?.subtitle || "Visit our manufacturing facility or use the interactive map below for route planning and dispatch logistics."}
            </p>
          </div>
        </div>

        {/* Map & Address Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Interactive Map (8 cols) */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden border border-[#E4DED3] shadow-md bg-[#FAF7F2] min-h-[360px] sm:min-h-[420px] relative">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AAVRIT PACKAGING Plant Location Map"
              className="w-full h-full min-h-[360px] sm:min-h-[420px]"
            />
          </div>

          {/* Plant Location & Transit Details (4 cols) */}
          <div className="lg:col-span-4 bg-[#FAF7F2] rounded-3xl p-6 sm:p-7 border border-[#E4DED3] flex flex-col justify-between shadow-2xs space-y-6">
            <div className="space-y-5">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E4DED3] text-[#A65D32] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C989E] block">
                    REGISTERED LOCATION
                  </span>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#202A2E]">
                    {data?.plantName || "AAVRIT PACKAGING"}
                  </h3>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E4DED3] text-xs sm:text-sm text-[#62574D] leading-relaxed">
                <strong className="text-[#202A2E] block mb-1">Factory Address:</strong>
                {data?.address || "Plot No. 42, Phase II GIDC Industrial Estate, Gujarat 382445, India."}
              </div>

              {/* Transit Highlights */}
              <div className="space-y-2.5 text-xs text-[#62574D]">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Navigation className="w-4 h-4 text-[#A65D32] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Get Directions Link Button */}
            <div className="pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#202A2E] hover:bg-[#E97835] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
