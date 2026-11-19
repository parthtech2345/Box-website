export interface FactoryMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
  phaseLabel: string;
  tag: string;
  isFinal?: boolean;
}

export const FACTORY_GROWTH_MILESTONES: FactoryMilestone[] = [
  {
    id: "milestone-2008",
    year: "2008",
    phaseLabel: "Phase 01 • The Inception",
    title: "Where It All Began",
    description:
      "AAVRIT PACKAGING started its journey with a small packaging manufacturing setup, built on a vision of delivering dependable packaging solutions.",
    tag: "Founding Era",
  },
  {
    id: "milestone-2012-2015",
    year: "2012–2015",
    phaseLabel: "Phase 02 • Capacity Growth",
    title: "Expanding Our Production",
    description:
      "As customer requirements grew, the company focused on expanding its production capabilities and strengthening manufacturing operations.",
    tag: "Capacity Scaling",
  },
  {
    id: "milestone-2016-2019",
    year: "2016–2019",
    phaseLabel: "Phase 03 • Technology Upgrade",
    title: "Embracing Modern Machinery",
    description:
      "A continued focus on manufacturing improvements and advanced machinery helped strengthen production processes and operational efficiency.",
    tag: "Automation & Fluting",
  },
  {
    id: "milestone-2020-2023",
    year: "2020–2023",
    phaseLabel: "Phase 04 • Portfolio Diversification",
    title: "Growing Our Packaging Range",
    description:
      "The company continued developing its packaging offerings to serve a wider range of customer requirements and applications.",
    tag: "Multi-Industry Reach",
  },
  {
    id: "milestone-2024-present",
    year: "2024–Present",
    phaseLabel: "Phase 05 • Future Commitment",
    title: "Moving Forward Together",
    description:
      "AAVRIT PACKAGING continues its journey with a commitment to dependable packaging, manufacturing excellence and long-term customer relationships.",
    tag: "Present Achievement",
    isFinal: true,
  },
];
