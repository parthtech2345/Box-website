"use client";

import React, { useState, useEffect } from "react";
import AboutHero from "@/components/about/AboutHero";
import CompanyHistory from "@/components/about/CompanyHistory";
import GrowthJourney from "@/components/about/GrowthJourney";
import CoreValues from "@/components/about/CoreValues";
import VisionMission from "@/components/about/VisionMission";
import ManufacturingExperience from "@/components/about/ManufacturingExperience";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import WorkingPrinciples from "@/components/about/WorkingPrinciples";
import AboutFAQ from "@/components/about/AboutFAQ";

export default function AboutSectionsController() {
  const [sections, setSections] = useState<Record<string, any>>({});

  useEffect(() => {
    let isMounted = true;
    async function fetchLiveSections() {
      try {
        const res = await fetch("/api/about-sections");
        const json = await res.json();
        if (isMounted && json.success && json.data) {
          setSections(json.data);
        }
      } catch (e) {
        // Fallback to static defaults silently
      }
    }
    fetchLiveSections();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {/* Section 1: Hero Banner */}
      <AboutHero data={sections["about-hero"]} />

      {/* Section 2: Company History */}
      <CompanyHistory data={sections["company-history"]} />

      {/* Section 3: Our Growth Journey */}
      <GrowthJourney data={sections["growth-journey"]} />

      {/* Section 4: Our Core Values */}
      <CoreValues data={sections["core-values"]} />

      {/* Section 5: Our Vision & Mission */}
      <VisionMission data={sections["vision-mission"]} />

      {/* Section 6: Manufacturing Experience / Project Showcase Slider */}
      <ManufacturingExperience data={sections["manufacturing-experience"]} />

      {/* Section 7: Owner & Management Team */}
      <LeadershipTeam data={sections["leadership-team"]} />

      {/* Section 8: Production Philosophy, Customer Approach & Quality Commitment */}
      <WorkingPrinciples data={sections["working-principles"]} />

      {/* Section 9: Frequently Asked Questions (FAQ) */}
      <AboutFAQ data={sections["about-faq"]} />
    </>
  );
}
