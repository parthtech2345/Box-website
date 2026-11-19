export interface ShowcaseProject {
  id: string;
  category: string;
  title: string;
  description: string;
  applicationLabel: string;
  imageSrc: string;
  imageAlt: string;
  isIllustrative: boolean;
  technicalDetails: {
    recommendedFlute: string;
    targetProtection: string;
    typicalUsage: string;
    sustainabilityNote: string;
  };
}

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "automotive-packaging",
    category: "AUTOMOTIVE PACKAGING",
    title: "Automotive Component Packaging",
    description:
      "Corrugated packaging concepts designed for organizing and transporting automotive components, spare parts and industrial supplies.",
    applicationLabel: "Automotive Parts & Components",
    imageSrc: "/about/manufacturing-experience/automotive-component-packaging.png",
    imageAlt:
      "Industrial kraft corrugated box with custom partitions organizing precision automotive parts",
    isIllustrative: true,
    technicalDetails: {
      recommendedFlute: "BC-Flute Double Wall (Heavy Duty)",
      targetProtection: "High impact resistance & organized mechanical partitions",
      typicalUsage: "Engine parts, brake assemblies, gears & industrial sub-assemblies",
      sustainabilityNote: "100% recyclable virgin kraft liner with high burst factor",
    },
  },
  {
    id: "food-beverage-packaging",
    category: "FOOD & BEVERAGE",
    title: "Food & Beverage Packaging",
    description:
      "Practical corrugated packaging applications for food products, bakery items and FMCG distribution.",
    applicationLabel: "Food Products & FMCG",
    imageSrc: "/about/manufacturing-experience/food-beverage-packaging.png",
    imageAlt:
      "Food-grade kraft corrugated bulk transport cartons in clean distribution facility",
    isIllustrative: true,
    technicalDetails: {
      recommendedFlute: "B-Flute / C-Flute Single Wall with ventilation die-cuts",
      targetProtection: "Stacking compression strength & moisture balance",
      typicalUsage: "Processed foods, bakery supplies, canned goods & FMCG packs",
      sustainabilityNote: "Food-contact safe starch adhesive and unbleached kraft board",
    },
  },
  {
    id: "ecommerce-shipping",
    category: "E-COMMERCE PACKAGING",
    title: "E-commerce Shipping Solutions",
    description:
      "Shipping cartons and packaging formats designed for product storage, order fulfilment and delivery operations.",
    applicationLabel: "Shipping & Distribution",
    imageSrc: "/about/manufacturing-experience/ecommerce-shipping-solutions.png",
    imageAlt:
      "Sturdy e-commerce parcel shipping cartons arranged in modern fulfillment warehouse",
    isIllustrative: true,
    technicalDetails: {
      recommendedFlute: "E-Flute Micro / B-Flute Postal Cartons",
      targetProtection: "Courier transit crush protection & tamper-evident flap seals",
      typicalUsage: "Omnichannel fulfillment, parcel deliveries & retail shipping",
      sustainabilityNote: "Lightweight corrugated design optimizing volumetric courier charges",
    },
  },
  {
    id: "electrical-equipment",
    category: "ELECTRICAL PACKAGING",
    title: "Electrical Equipment Packaging",
    description:
      "Corrugated packaging concepts for organizing and protecting electrical products, components and accessories during handling.",
    applicationLabel: "Electrical Products & Accessories",
    imageSrc: "/about/manufacturing-experience/electrical-equipment-packaging.png",
    imageAlt:
      "Precision electrical equipment and components secured in custom kraft corrugated inserts",
    isIllustrative: true,
    technicalDetails: {
      recommendedFlute: "C-Flute / Double Wall with anti-static cushion inserts",
      targetProtection: "Vibration dampening, edge drop absorption & scratch prevention",
      typicalUsage: "Distribution boxes, electrical panels, switchgear & wire modules",
      sustainabilityNote: "Biodegradable cellular corrugated replacing plastic EPS foam",
    },
  },
];
