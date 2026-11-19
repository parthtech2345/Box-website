export interface JourneyMilestone {
  id: string;
  year: string;
  phaseTitle: string;
  headline: string;
  description: string;
  keyHighlight: string;
  statBadge: string;
  image: string;
}

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    id: "establishment",
    year: "2008",
    phaseTitle: "The Inception",
    headline: "Foundations of Quality Packaging",
    description:
      "Aavrit Packaging started in 2008 with a simple ambition: to manufacture dependable, high-integrity corrugated cartons tailored to the essential protection requirements of local industries while building genuine relationships with every client.",
    keyHighlight: "Manual corrugation lines & foundational quality standards",
    statBadge: "Inception & Core Setup",
    image: "/about/growth-journey/journey-2008-inception.png",
  },
  {
    id: "expansion",
    year: "2013",
    phaseTitle: "Capacity Expansion",
    headline: "Scaling Production & Infrastructure",
    description:
      "Expanded plant footprint and introduced semi-automated flute laminating lines, enabling steady delivery of 3-ply and 5-ply cartons across emerging FMCG, engineering, and automotive component sectors.",
    keyHighlight: "3x daily throughput capacity & semi-automated slitting",
    statBadge: "Semi-Automated Line",
    image: "/about/growth-journey/journey-2013-expansion.png",
  },
  {
    id: "modernization",
    year: "2018",
    phaseTitle: "Technological Shift",
    headline: "High-Speed Automated Corrugation",
    description:
      "Invested in continuous high-speed corrugators, multi-color rotary die-cutters, and stringent in-house bursting strength QA testing units for high-volume commercial clients.",
    keyHighlight: "Continuous corrugator line & multi-color flexo printing",
    statBadge: "Precision Machinery",
    image: "/about/growth-journey/journey-2018-automation.png",
  },
  {
    id: "sustainable-today",
    year: "2024 – Present",
    phaseTitle: "Future-Ready Plant",
    headline: "Sustainable Engineering & Pan-India Reach",
    description:
      "Today, Aavrit Packaging leads with 100% recyclable virgin and test kraft engineering, serving over 500 enterprise clients with dependable, precision-engineered corrugated packaging across India.",
    keyHighlight: "100% recyclable kraft stewardship & pan-India logistics",
    statBadge: "Present & Future",
    image: "/about/growth-journey/journey-2024-sustainable.png",
  },
];
