export interface SustainabilityBannerData {
  backgroundImage?: string;
  backgroundImageAlt?: string;
  title?: string;
  breadcrumbRoot?: string;
  breadcrumbCurrent?: string;
  characterImage?: string;
  characterAlt?: string;
  dialogueIcon?: string;
  dialogueTitle?: string;
  dialogueSubtext?: string;
  updatedAt?: string;
}

export interface SustainabilityIntroHighlight {
  title: string;
  description: string;
  icon?: string;
}

export interface SustainabilityIntroData {
  badge?: string;
  title?: string;
  highlightText?: string;
  paragraphs?: string[];
  image?: string;
  imageAlt?: string;
  highlights?: SustainabilityIntroHighlight[];
  updatedAt?: string;
}

export interface SustainabilityDiffCard {
  code: string;
  title: string;
  description: string;
  tag: string;
  icon?: string;
  color?: string;
  bgLight?: string;
}

export interface SustainabilityDifferenceData {
  badge?: string;
  title?: string;
  highlightText?: string;
  subtitle?: string;
  cards?: SustainabilityDiffCard[];
  updatedAt?: string;
}

export interface SustainabilityStageItem {
  step: string;
  title: string;
  description: string;
  image?: string;
  alt?: string;
  icon?: string;
}

export interface SustainabilityManufacturingData {
  badge?: string;
  title?: string;
  highlightText?: string;
  subtitle?: string;
  stages?: SustainabilityStageItem[];
  updatedAt?: string;
}

export interface SustainabilitySolutionItem {
  title: string;
  badge: string;
  description: string;
  image: string;
  alt: string;
  icon?: string;
  benefit: string;
  link: string;
}

export interface SustainabilitySolutionsData {
  badge?: string;
  title?: string;
  highlightText?: string;
  subtitle?: string;
  solutions?: SustainabilitySolutionItem[];
  updatedAt?: string;
}

export interface SustainabilityWasteMethodItem {
  num: string;
  title: string;
  summary: string;
  impact: string;
  icon?: string;
}

export interface SustainabilityWasteReductionData {
  badge?: string;
  title?: string;
  highlightText?: string;
  subtitle?: string;
  methods?: SustainabilityWasteMethodItem[];
  updatedAt?: string;
}

export interface SustainabilityFAQItem {
  question: string;
  answer: string;
}

export interface SustainabilityFAQsData {
  badge?: string;
  title?: string;
  highlightText?: string;
  subtitle?: string;
  faqs?: SustainabilityFAQItem[];
  updatedAt?: string;
}

export interface SustainabilityCTAData {
  badge?: string;
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  updatedAt?: string;
}

export interface SustainabilitySEOData {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  canonicalLink?: string;
  ogImage?: string;
  ogImageAlt?: string;
  updatedAt?: string;
}

export interface SustainabilityPageData {
  banner?: SustainabilityBannerData;
  intro?: SustainabilityIntroData;
  difference?: SustainabilityDifferenceData;
  manufacturing?: SustainabilityManufacturingData;
  solutions?: SustainabilitySolutionsData;
  wasteReduction?: SustainabilityWasteReductionData;
  faqs?: SustainabilityFAQsData;
  cta?: SustainabilityCTAData;
  seo?: SustainabilitySEOData;
}

export const DEFAULT_SUSTAINABILITY_DATA: SustainabilityPageData = {
  banner: {
    backgroundImage: "/Sustanablity/sustainability_banner_pano.png",
    backgroundImageAlt: "Sustainable Corrugated Packaging - AAVRIT PACKAGING",
    title: "Sustainability",
    breadcrumbRoot: "Home",
    breadcrumbCurrent: "Sustainability",
    characterImage: "/Sustanablity/character_sustainability_officer.png",
    characterAlt: "Sustainability Specialist - AAVRIT PACKAGING",
    dialogueIcon: "🌱",
    dialogueTitle: "100% Recyclable Kraft!",
    dialogueSubtext: "Eco-friendly, biodegradable & FSC-aligned production",
  },
  intro: {
    badge: "RESPONSIBLE PACKAGING",
    title: "Why Sustainability",
    highlightText: "Matters in Packaging",
    paragraphs: [
      "Packaging plays an important role in protecting products during storage and transportation. However, the materials used, the way packaging is designed, and the manufacturing process also matter.",
      "Corrugated cardboard packaging offers a practical packaging option that can support material recovery and recycling systems when properly collected and processed. By focusing on smart dimensional planning and responsibly sourced paperboards, businesses can safeguard their goods while minimizing unnecessary material consumption.",
    ],
    image: "/Sustanablity/intro-sustainable-packaging.png",
    imageAlt: "Natural kraft corrugated cardboard packaging arrangement",
    highlights: [
      {
        title: "Thoughtful Material Selection",
        description:
          "Selecting appropriate paper grades and renewable fiber weights matched to actual structural load requirements.",
        icon: "Layers",
      },
      {
        title: "Responsible Packaging Design",
        description:
          "Optimizing box dimensions to fit goods securely, eliminating excess volume, void-fill, and shipping weight.",
        icon: "Scissors",
      },
      {
        title: "Resource-Conscious Manufacturing",
        description:
          "Systematic segregation and recovery of paper trimmings to feed circular paper reprocessing streams.",
        icon: "Recycle",
      },
    ],
  },
  difference: {
    badge: "STRUCTURAL & RESOURCE ADVANTAGES",
    title: "Why Corrugated Packaging",
    highlightText: "Makes a Difference",
    subtitle:
      "Corrugated board provides a balance of cushioning strength, structural stiffness, and material efficiency without relying on complex composite plastics.",
    cards: [
      {
        code: "A",
        title: "Recyclable Paper-Based Material",
        description:
          "Corrugated packaging is primarily made from paper-based materials and can enter established paper recycling systems when collected and processed appropriately.",
        tag: "Circular Recovery",
        icon: "Recycle",
        color: "#78846A",
        bgLight: "#FAF7F2",
      },
      {
        code: "B",
        title: "Reusable Packaging",
        description:
          "Suitable corrugated boxes can be reused for storage, handling, or transportation, depending on their condition and intended use.",
        tag: "Extended Utility",
        icon: "Repeat",
        color: "#A65D32",
        bgLight: "#FAF7F2",
      },
      {
        code: "C",
        title: "Right-Sized Packaging",
        description:
          "Choosing suitable box dimensions can help avoid unnecessary packaging material and improve packaging efficiency across shipping and warehousing.",
        tag: "Material Efficiency",
        icon: "Maximize2",
        color: "#E97835",
        bgLight: "#FAF7F2",
      },
      {
        code: "D",
        title: "Practical Product Protection",
        description:
          "Appropriately designed corrugated packaging helps protect products during storage and transportation, reducing the risk of damage and product loss.",
        tag: "Damage Prevention",
        icon: "ShieldCheck",
        color: "#202A2E",
        bgLight: "#FAF7F2",
      },
    ],
  },
  manufacturing: {
    badge: "PRACTICAL PRODUCTION METHODOLOGY",
    title: "Building Responsibility",
    highlightText: "Into Every Stage",
    subtitle:
      "Responsible packaging manufacturing relies on disciplined workflows—from raw material planning to final inspection—ensuring materials are used effectively and scrap is captured for circular recovery.",
    stages: [
      {
        step: "01",
        title: "Responsible Material Selection",
        description:
          "Selecting suitable paper grades and board materials according to specific packaging requirements, balancing structural performance with paper-based sustainability.",
        image: "/Sustanablity/material-selection.png",
        alt: "Selecting paper grades and kraft paper reels for corrugated board",
        icon: "Layers",
      },
      {
        step: "02",
        title: "Efficient Material Usage",
        description:
          "Designing appropriate box dimensions and calculating precise board specifications to minimize unnecessary off-cut trim and optimize raw material yield.",
        image: "/Sustanablity/efficient-usage.png",
        alt: "Precision board cutting and corrugated flute cross-section",
        icon: "SlidersHorizontal",
      },
      {
        step: "03",
        title: "Manufacturing Waste Management",
        description:
          "Collecting, separating, and managing paper and cardboard production waste for systematic recovery and paper mill recycling reprocessing.",
        image: "/Sustanablity/waste-management.png",
        alt: "Cardboard scrap collection and paper recovery process",
        icon: "Recycle",
      },
      {
        step: "04",
        title: "Quality-Focused Production",
        description:
          "Enforcing strict box construction and quality checks to ensure packaging performs reliably according to its intended storage and shipping application.",
        image: "/Sustanablity/quality-production.png",
        alt: "Quality inspection and box durability checks",
        icon: "CheckCircle2",
      },
    ],
  },
  solutions: {
    badge: "RESPONSIBLE PACKAGING OPTIONS",
    title: "Smarter Packaging Choices",
    highlightText: "for Different Needs",
    subtitle:
      "Every product has distinct structural demands. By tailoring dimensions, ply grades, and paperboards, packaging provides dependable protection with responsible material usage.",
    solutions: [
      {
        title: "Custom-Sized Packaging",
        badge: "Dimension Optimization",
        description:
          "Packaging dimensions engineered specifically according to the product's size and protection requirements, preventing oversized shipping and extra cushioning.",
        image: "/Sustanablity/box-display.png",
        alt: "Custom-sized corrugated box packaging assortment",
        icon: "Box",
        benefit: "Reduces void space & shipping freight",
        link: "/custom-packaging",
      },
      {
        title: "Suitable Ply Selection",
        badge: "Structural Caliper",
        description:
          "Choosing an appropriate 3 Ply, 5 Ply, or 7 Ply construction based on product weight, stacking, and transportation needs, avoiding material over-specification.",
        image: "/Sustanablity/ply-5ply.png",
        alt: "Corrugated flute board layers 3-ply and 5-ply construction",
        icon: "Layers",
        benefit: "Tailors paper caliper to load",
        link: "/products",
      },
      {
        title: "Paper-Based Packaging",
        badge: "Mono-Material Format",
        description:
          "Using suitable kraft and other paper-based board options according to the required application, simplifying waste streams compared to non-recyclable multi-material composites.",
        image: "/Sustanablity/journey-sustainable.png",
        alt: "Kraft paperboard materials and corrugated boxes",
        icon: "FileText",
        benefit: "Compatible with paper recycling",
        link: "/products",
      },
      {
        title: "Reusable Packaging Options",
        badge: "Extended Lifecycle",
        description:
          "Where suitable, boxes can be designed with heavy-duty construction for multiple handling, internal transit, or storage uses, depending on their condition.",
        image: "/Sustanablity/sustainable-plant.png",
        alt: "Durable corrugated storage containers and warehouse packing",
        icon: "RefreshCw",
        benefit: "Multi-cycle operational utility",
        link: "/industries",
      },
    ],
  },
  wasteReduction: {
    badge: "PRACTICAL WASTE MINIMIZATION",
    title: "Small Packaging Decisions.",
    highlightText: "Meaningful Impact.",
    subtitle:
      "Sustainable packaging does not require complex compromises. Making deliberate decisions during box dimensioning, board engineering, and trim handling generates noticeable efficiencies.",
    methods: [
      {
        num: "01",
        title: "Right-Sized Boxes",
        summary:
          "Select dimensions that suit the product instead of using unnecessarily oversized packaging.",
        impact:
          "Eliminates dead volume, lowers transport emissions, and removes the need for plastic filler cushioning.",
        icon: "Ruler",
      },
      {
        num: "02",
        title: "Appropriate Board Construction",
        summary:
          "Select suitable ply and flute combinations according to the required protection.",
        impact:
          "Avoids heavy over-calipering by matching paper weight and flute profiles precisely to stacking loads.",
        icon: "Shield",
      },
      {
        num: "03",
        title: "Efficient Material Planning",
        summary:
          "Plan box layouts and material usage carefully to help minimize avoidable production waste.",
        impact:
          "Precision die-cutting nesting and CAD slot planning maximize sheet yield from master paper reels.",
        icon: "Compass",
      },
      {
        num: "04",
        title: "Responsible Waste Handling",
        summary:
          "Separate paper and cardboard waste for appropriate collection and recovery wherever facilities are available.",
        impact:
          "Clean corrugated off-cuts are compressed into dense bales and returned to pulp mills for continuous re-pulping.",
        icon: "TrendingDown",
      },
    ],
  },
  faqs: {
    badge: "CLARITY & GUIDANCE",
    title: "Frequently Asked Questions",
    highlightText: "About Sustainable Packaging",
    subtitle:
      "Clear, practical answers about paper-based materials, box recyclability, and responsible packaging design.",
    faqs: [
      {
        question: "Are corrugated cardboard boxes recyclable?",
        answer:
          "Yes. Corrugated cardboard is primarily composed of renewable paper fibers and is one of the most widely recovered packaging materials globally. In regions with paper recycling infrastructure, clean corrugated boxes can be placed in paper recycling streams where they are pulped, cleaned, and remanufactured into fresh paperboard.",
      },
      {
        question: "Can corrugated boxes be reused?",
        answer:
          "Many corrugated boxes can be reused multiple times for storage, internal handling, or secondary transit, provided they have maintained their structural integrity and are free from severe crushing, moisture damage, or structural tears.",
      },
      {
        question: "How can custom-sized packaging help reduce material waste?",
        answer:
          "Custom-sized packaging matches the exact dimensions of the packed goods. This eliminates empty void space inside the carton, significantly reduces or removes the need for plastic void-fillers, and allows more packages to fit onto each shipping pallet, optimizing logistics efficiency.",
      },
      {
        question: "What is the difference between recycled kraft and virgin kraft paper?",
        answer:
          "Virgin kraft paper is manufactured directly from sustainably harvested wood pulp fibers, resulting in long, uniform fibers that offer high tensile strength and puncture resistance. Recycled kraft is made from recovered cardboard and paper, which offers a lower raw material footprint while providing sufficient strength for a wide range of standard commercial boxes.",
      },
      {
        question: "How can businesses choose more responsible packaging solutions?",
        answer:
          "Businesses can begin by conducting a packaging audit: right-sizing box dimensions to fit products tightly, selecting the minimum appropriate ply specification (such as 3-ply instead of 5-ply where load allows), opting for mono-material paper-based tape and labeling, and consolidating carton varieties to streamline inventory and scrap.",
      },
    ],
  },
  cta: {
    badge: "RESPONSIBLE COLLABORATION",
    title: "Let's Make Better Packaging Choices Together.",
    description:
      "Looking for packaging solutions that balance product protection, practical design, and responsible material choices? Talk to our team about your requirements.",
    primaryButtonText: "Explore Our Products",
    primaryButtonLink: "/products",
    secondaryButtonText: "Contact Our Team",
    secondaryButtonLink: "/#contact",
  },
  seo: {
    metaTitle: "Sustainable Corrugated Packaging | AAVRIT PACKAGING",
    metaDescription:
      "Explore responsible corrugated packaging solutions, paper-based materials, efficient packaging design, and sustainable manufacturing practices at AAVRIT PACKAGING.",
    metaKeywords: "sustainable packaging, eco friendly corrugated boxes, biodegradable kraft, recyclable packaging boxes, green manufacturing",
    canonicalLink: "/sustainability",
    ogImage: "/Sustanablity/Eco-Friendly Packaging and Renewable Earth.png",
    ogImageAlt: "AAVRIT PACKAGING Sustainable Packaging",
  },
};
