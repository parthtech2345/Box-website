"use client";

import React, { useRef, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ContactInfoCardsProps {
  data?: {
    cards?: Array<{
      title: string;
      value: string;
      subtext: string;
      href?: string;
      actionText?: string;
      icon: string;
    }>;
  };
}

const DEFAULT_INFO_LIST = [
  {
    title: "Direct Phone Line",
    value: "+91 98765 43210",
    subtext: "Technical inquiries & rapid quotes",
    href: "tel:+919876543210",
    actionText: "Call Now",
    icon: Phone,
  },
  {
    title: "Official Email Desk",
    value: "inquiry@aavritpackaging.com",
    subtext: "Send purchase RFPs & specifications",
    href: "mailto:inquiry@aavritpackaging.com",
    actionText: "Send Email",
    icon: Mail,
  },
  {
    title: "Plant & Head Office",
    value: "Plot No. 42, Phase II GIDC",
    subtext: "Gujarat 382445, India",
    href: "https://maps.google.com/?q=Plot+No.+42,+Phase+II+GIDC+Industrial+Estate,+Gujarat+382445,+India",
    actionText: "View on Map",
    target: "_blank",
    icon: MapPin,
  },
  {
    title: "Business Hours",
    value: "Mon – Sat: 9:00 AM – 6:30 PM",
    subtext: "Sunday: Closed (Dispatch on request)",
    icon: Clock,
  },
];

function getCardLucideIcon(iconName: string) {
  switch (iconName) {
    case "Phone":
      return Phone;
    case "Mail":
      return Mail;
    case "MapPin":
      return MapPin;
    case "Clock":
      return Clock;
    default:
      return Phone;
  }
}

export default function ContactInfoCards({ data }: ContactInfoCardsProps = {}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const infoList = (data?.cards && data.cards.length > 0)
    ? data.cards.map((c) => ({
        ...c,
        icon: getCardLucideIcon(c.icon),
        target: c.href?.startsWith("http") ? "_blank" : undefined,
      }))
    : DEFAULT_INFO_LIST;

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current || !gridRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".contact-info-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [infoList]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#FFFFFF] py-12 sm:py-14 border-b border-[#E4DED3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {infoList.map((item, idx) => {
            const Icon = item.icon;
            const CardContent = (
              <>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E4DED3] text-[#A65D32] flex items-center justify-center group-hover:bg-[#A65D32] group-hover:text-white transition-all duration-300 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  {item.href && (
                    <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#A65D32] group-hover:text-[#E97835] transition-colors">
                      <span>{item.actionText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  )}
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C989E] block mb-1">
                    {item.title}
                  </span>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#202A2E] group-hover:text-[#A65D32] transition-colors leading-snug mb-1">
                    {item.value}
                  </h3>
                  <p className="text-xs text-[#62574D] leading-relaxed">
                    {item.subtext}
                  </p>
                </div>
              </>
            );

            if (item.href) {
              return (
                <a
                  key={idx}
                  href={item.href}
                  target={item.target}
                  rel={item.target ? "noopener noreferrer" : undefined}
                  className="contact-info-card group bg-[#FAF7F2] rounded-2xl border border-[#E4DED3] hover:border-[#A65D32] p-5 sm:p-6 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 block cursor-pointer"
                >
                  {CardContent}
                </a>
              );
            }

            return (
              <div
                key={idx}
                className="contact-info-card group bg-[#FAF7F2] rounded-2xl border border-[#E4DED3] p-5 sm:p-6 shadow-2xs flex flex-col justify-between"
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
