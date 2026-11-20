export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface FluteInfo {
  name: string;
  fluteProfile: string;
  thickness: string;
  characteristics: string;
  bestFor: string;
}

export interface PaperTypeInfo {
  name: string;
  description: string;
  grade: string;
}

export interface QualityParameter {
  abbr: string;
  name: string;
  definition: string;
}

export const FLUTE_PROFILES: FluteInfo[] = [
  {
    name: "A Flute",
    fluteProfile: "4.5 mm – 5.0 mm",
    thickness: "~33 flutes / foot",
    characteristics: "Thickest single-flute profile with superior compression cushioning and energy absorption.",
    bestFor: "Fragile items, heavy transit cushioning, and protective internal padding.",
  },
  {
    name: "B Flute",
    fluteProfile: "2.5 mm – 3.0 mm",
    thickness: "~47 flutes / foot",
    characteristics: "Dense flute spacing offering exceptional crush resistance and a flatter surface for sharp flexo printing.",
    bestFor: "Canned goods, eCommerce mailers, retail packaging, and point-of-sale displays.",
  },
  {
    name: "C Flute",
    fluteProfile: "3.5 mm – 4.0 mm",
    thickness: "~39 flutes / foot",
    characteristics: "The most versatile all-around shipping flute, balancing compression crush strength and stacking capability.",
    bestFor: "Shipping master cartons, general FMCG cargo, and inter-warehouse dispatch.",
  },
  {
    name: "E Flute",
    fluteProfile: "1.2 mm – 1.6 mm",
    thickness: "~90 flutes / foot",
    characteristics: "Fine micro-flute offering an ultra-flat print surface and clean folding score lines for intricate die-cuts.",
    bestFor: "Cosmetic cartons, pizza boxes, luxury direct-to-consumer mailers, and small electronics.",
  },
  {
    name: "F Flute",
    fluteProfile: "0.8 mm – 1.0 mm",
    thickness: "~128 flutes / foot",
    characteristics: "Extra-fine micro-flute replacing folding solid paperboard with stiffer structural corrugated integrity.",
    bestFor: "Fast-food packaging, bakery containers, and luxury gift retail presentations.",
  },
  {
    name: "BC Flute",
    fluteProfile: "6.0 mm – 7.0 mm",
    thickness: "Double Wall Combination",
    characteristics: "Dual-flute synergy pairing B-flute puncture resistance on the outside with C-flute stacking cushioning inside.",
    bestFor: "Heavy-duty shipping cartons, home appliances, automotive spares, and export goods.",
  },
  {
    name: "EB Flute",
    fluteProfile: "4.0 mm – 4.5 mm",
    thickness: "Double Wall Fine Combination",
    characteristics: "High-grade combination providing rigid structural protection while maintaining crisp print reproduction.",
    bestFor: "Heavy retail gift outers, consumer hardware, and branded subscription master packs.",
  },
  {
    name: "AB Flute",
    fluteProfile: "7.0 mm – 8.0 mm",
    thickness: "Double Wall Heavy Combination",
    characteristics: "Heavy-duty dual-wall configuration with maximum top-to-bottom compression endurance.",
    bestFor: "Palletized bulk containers, heavy machinery equipment, and international export cargo.",
  },
];

export const PAPER_TYPES: PaperTypeInfo[] = [
  {
    name: "Virgin Kraft Paper",
    description: "Manufactured directly from pure unbleached wood pulp fibers. Offers the highest tensile tear resistance and natural moisture endurance.",
    grade: "Premium Virgin Grade",
  },
  {
    name: "Recycled Kraft Paper",
    description: "Environmentally sustainable kraft board made from recovered corrugated waste. Highly cost-effective and 100% circular.",
    grade: "Eco Circular Grade",
  },
  {
    name: "Test Paper (Testliner)",
    description: "Two-layer paperboard with a recycled base sheet and a refined top surface, optimized for smooth flexo ink absorption.",
    grade: "Commercial Grade",
  },
  {
    name: "White Top Kraft Liner",
    description: "Bleached virgin white outer facing over natural kraft, engineered for photo-quality multi-color branding and retail display.",
    grade: "High-Graphics Retail Grade",
  },
  {
    name: "Fluting Medium",
    description: "Formed wave corrugation paper treated with starch sizing to impart resilient spring-back and high Edge Crush resistance.",
    grade: "Semi-Chemical / Recycled",
  },
];

export const QUALITY_PARAMETERS: QualityParameter[] = [
  {
    abbr: "GSM",
    name: "Grams per Square Meter",
    definition: "Defines the weight and density of each paper layer (e.g. 120 GSM to 350 GSM). Higher GSM indicates thicker, heavier paper.",
  },
  {
    abbr: "BF",
    name: "Burst Factor",
    definition: "Indicates the intrinsic burst strength of paper fibers relative to its weight, reflecting pure pulp fiber bonding.",
  },
  {
    abbr: "Burst Strength",
    name: "Bursting Pressure",
    definition: "The hydrostatic pressure in kg/cm² or kPa required to rupture the corrugated board face under direct impact.",
  },
  {
    abbr: "ECT",
    name: "Edge Crush Test",
    definition: "Measures the cross-directional compressive force the box wall can bear before crushing, determining warehouse stacking limits.",
  },
  {
    abbr: "Cobb Value",
    name: "Water Absorption",
    definition: "Measures the quantity of water absorbed by the paper surface over 60 seconds. Lower Cobb values resist transit moisture and humidity.",
  },
  {
    abbr: "BCT",
    name: "Box Compression Test",
    definition: "The ultimate top-to-bottom load capacity a fully assembled box can withstand before sidewalls buckle in pallet racks.",
  },
];
