export interface CoreValueItem {
  id: string;
  number: string;
  title: string;
  description: string;
  layerName: string;
  layerRole: string;
}

/**
 * 5-Ply Authentic Corrugated Board Structure
 * (Top Liner, Fluted Core, Center Liner, Fluted Core, Bottom Liner)
 */
export const CORE_VALUES_DATA: CoreValueItem[] = [
  {
    id: "value-1",
    number: "01",
    title: "Quality First",
    description:
      "We focus on maintaining quality and consistency throughout our packaging processes.",
    layerName: "Top Outer Liner",
    layerRole: "Shielding Surface & Puncture Resistance",
  },
  {
    id: "value-2",
    number: "02",
    title: "Customer Commitment",
    description:
      "We understand customer requirements and work towards practical packaging solutions.",
    layerName: "Primary Fluted Core",
    layerRole: "Dynamic Shock Cushioning & Vertical Load Strength",
  },
  {
    id: "value-3",
    number: "03",
    title: "Integrity & Trust",
    description:
      "We believe in transparent communication and dependable business relationships.",
    layerName: "Center Bonding Liner",
    layerRole: "Tensile Strength & Rigidity Distribution",
  },
  {
    id: "value-4",
    number: "04",
    title: "Continuous Improvement",
    description:
      "We continuously look for opportunities to improve our processes and working methods.",
    layerName: "Reinforced Fluted Wave",
    layerRole: "Calibrated Fluting & Impact Resistance",
  },
  {
    id: "value-5",
    number: "05",
    title: "Responsible Practices",
    description:
      "We aim to make considered choices in packaging design, material stewardship and environmental responsibility.",
    layerName: "Bottom Base Liner",
    layerRole: "Stable Foundation & 100% Recyclable Recovery",
  },
];
