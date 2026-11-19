export interface PrincipleStage {
  number: string;
  label: string;
  heading: string;
  description: string;
  bulletPoints: string[];
  imageSrc: string;
  imageAlt: string;
  accentMetric: {
    value: string;
    label: string;
  };
}

export const WORKING_PRINCIPLES: PrincipleStage[] = [
  {
    number: "01",
    label: "OUR PRODUCTION PHILOSOPHY",
    heading: "Thoughtful Manufacturing. Practical Solutions.",
    description:
      "We believe good packaging begins with understanding the product and its requirements. Our production approach focuses on thoughtful design, suitable material selection and careful manufacturing practices to create practical corrugated packaging solutions.",
    bulletPoints: [
      "Optimal flute geometry matched to load-bearing dynamics",
      "Sustainable kraft paperboard sourcing with high tensile strength",
      "Resource-efficient die-cutting and precise slotting operations",
    ],
    imageSrc: "/about/working-principles/production-philosophy.png",
    imageAlt:
      "Corrugated cardboard manufacturing machinery fluting raw kraft paper in modern plant",
    accentMetric: {
      value: "Precision Fluting",
      label: "Balanced Structural Strength",
    },
  },
  {
    number: "02",
    label: "OUR CUSTOMER APPROACH",
    heading: "Understanding Needs. Building Relationships.",
    description:
      "Every packaging requirement is different. We value clear communication, understanding customer expectations and working towards suitable packaging solutions for different products and applications.",
    bulletPoints: [
      "Collaborative dimensioning and load-testing consultations",
      "Transparent recommendations tailored to transit environments",
      "Responsive turnaround on customized box specifications",
    ],
    imageSrc: "/about/working-principles/customer-approach.png",
    imageAlt:
      "Packaging consultation worktable with kraft box prototypes, calipers, and technical plans",
    accentMetric: {
      value: "Consultative",
      label: "Solution-First Partnership",
    },
  },
  {
    number: "03",
    label: "OUR QUALITY COMMITMENT",
    heading: "Attention to Detail at Every Stage.",
    description:
      "We recognize the importance of packaging consistency and product protection. Our approach emphasizes attention to materials, dimensions, construction and inspection according to the requirements of each packaging solution.",
    bulletPoints: [
      "Uniform scoring and accurate 90° fold integrity",
      "Edge crush and bursting strength awareness across batches",
      "Dimensional adherence to prevent transit shifting and product damage",
    ],
    imageSrc: "/about/working-principles/quality-commitment.png",
    imageAlt:
      "Quality inspection workstation checking corrugated flute layers, fold edges, and box thickness",
    accentMetric: {
      value: "Rigorous Checks",
      label: "Every Batch Inspected",
    },
  },
];
