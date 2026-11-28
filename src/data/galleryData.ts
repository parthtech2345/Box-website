export interface GalleryBannerData {
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

export interface GalleryItemDetails {
  id: string;
  title: string;
  image: string;
  category: string;
  description: string;
  keypoints: string[];
  link?: string;
  linkText?: string;
}

export interface GalleryShowcaseData {
  categories: string[];
  items: GalleryItemDetails[];
  updatedAt?: string;
}

export interface GalleryCTAData {
  badge?: string;
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  updatedAt?: string;
}

export interface GallerySEOData {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  canonicalLink?: string;
  ogImage?: string;
  ogImageAlt?: string;
  updatedAt?: string;
}

export interface GalleryPageData {
  banner?: GalleryBannerData;
  showcase?: GalleryShowcaseData;
  cta?: GalleryCTAData;
  seo?: GallerySEOData;
}

export const DEFAULT_GALLERY_CATEGORIES = [
  "Machinery & Technology",
  "Custom Packaging",
  "Products & Packaging",
  "Manufacturing Process",
  "Industries Served",
];

export const DEFAULT_GALLERY_DATA: GalleryPageData = {
  banner: {
    backgroundImage: "/Gallery/gallery_banner_pano.png",
    backgroundImageAlt: "AAVRIT PACKAGING Visual Gallery - Products, Machinery & Manufacturing",
    title: "Packaging Gallery",
    breadcrumbRoot: "Home",
    breadcrumbCurrent: "Gallery",
    characterImage: "/Gallery/character_gallery_curator.png",
    characterAlt: "Visual Showcase Curator - AAVRIT PACKAGING",
    dialogueIcon: "📸",
    dialogueTitle: "See Our Work in Action!",
    dialogueSubtext: "High-finish corrugated cartons, manufacturing & machinery",
  },
  showcase: {
    categories: DEFAULT_GALLERY_CATEGORIES,
    items: [
      // 1. Machinery & Technology
      {
        id: "mach-1",
        title: "Automatic Corrugation Production Line",
        image: "/Machinery/corrugation-machine.png",
        category: "Machinery & Technology",
        description:
          "Continuous industrial corrugator combining virgin kraft paper reels and fluting medium into high-strength 3-ply and 5-ply boards.",
        keypoints: [
          "Continuous multi-reel paper feeding",
          "Steam-pressured flute forming rolls",
          "Precision starch adhesive bonding",
        ],
        link: "/machinery/corrugation-machine",
        linkText: "Explore Machine",
      },
      {
        id: "mach-2",
        title: "High-Definition Flexo Printer Slotter",
        image: "/Machinery/flexo-printer-slotter.png",
        category: "Machinery & Technology",
        description:
          "Inline multi-colour flexographic printing, scoring, and slotting equipment delivering sharp corporate branding and exact fold lines.",
        keypoints: [
          "Multi-colour water-based ink registration",
          "Synchronized rotary scoring & creasing",
          "High-speed precision carton slotting",
        ],
        link: "/machinery/flexo-printer-slotter",
        linkText: "Explore Machine",
      },
      {
        id: "mach-3",
        title: "Rotary Die-Cutting Machine",
        image: "/Machinery/die-cutting-machine.png",
        category: "Machinery & Technology",
        description:
          "High-speed rotary cylinder die-cutter producing complex box geometries, hand holes, ventilation ports, and self-locking tabs.",
        keypoints: [
          "Custom curved cutting dies",
          "Intricate tab & crease formation",
          "Tear-free smooth edge finishing",
        ],
        link: "/machinery/die-cutting-machine",
        linkText: "Explore Machine",
      },
      {
        id: "mach-4",
        title: "Automated Folder Gluer & Stitching Line",
        image: "/Machinery/folder-gluer-stitcher.png",
        category: "Machinery & Technology",
        description:
          "High-efficiency joint assembly system delivering accurate hot/cold adhesive application and reinforced heavy-gauge wire stitching.",
        keypoints: [
          "Dual adhesive & wire stitch options",
          "Accurate squaring and alignment",
          "High-speed bundle counting & stacking",
        ],
        link: "/machinery/folder-gluer-stitcher",
        linkText: "Explore Machine",
      },

      // 2. Custom Packaging
      {
        id: "cust-1",
        title: "Precision Corrugated Box Solutions",
        image: "/custom pack/custom-corrugated-solutions.png",
        category: "Custom Packaging",
        description:
          "Bespoke engineered kraft corrugated cartons and master shippers designed for direct-to-consumer and industrial freight.",
        keypoints: [
          "Tailored internal dimensions for exact fit",
          "High-burst strength kraft board with zero void-fill",
          "Optimized package weight and transport freight",
        ],
        link: "/custom-packaging",
        linkText: "View Custom Packaging",
      },
      {
        id: "cust-2",
        title: "Custom Prototyped Box Formats",
        image: "/about/Professional Corrugated Packaging Display.png",
        category: "Custom Packaging",
        description:
          "Custom dimension CAD samples and box geometries fabricated to match exact client product dimensions and drop-test requirements.",
        keypoints: [
          "24-Hour CAD sample fabrication",
          "Multi-ply board caliper matching",
          "Drop-test and compression verified",
        ],
        link: "/custom-packaging",
        linkText: "View Custom Packaging",
      },
      {
        id: "cust-3",
        title: "Crash-Lock Auto-Bottom Cartons",
        image: "/Product/items/auto-bottom-boxes.png",
        category: "Custom Packaging",
        description:
          "Instant pre-glued bottom base designed for rapid manual or semi-automated packaging line fulfillment with zero tape required.",
        keypoints: [
          "Instant push-open base erection",
          "Eliminates bottom taping labor",
          "High bottom-load carrying capacity",
        ],
        link: "/custom-packaging",
        linkText: "View Custom Packaging",
      },
      {
        id: "cust-4",
        title: "Self-Locking Shipping Boxes",
        image: "/Product/items/real-returnable-self-locking-shipping-boxes.png",
        category: "Custom Packaging",
        description:
          "Interlocking side tabs and roll-over front flaps providing structural reinforcement and tamper-evident transit security.",
        keypoints: [
          "Double-layer reinforced sidewalls",
          "Tool-free self-locking assembly",
          "Premium customer unboxing presentation",
        ],
        link: "/custom-packaging",
        linkText: "View Custom Packaging",
      },

      // 3. Products & Packaging
      {
        id: "prod-1",
        title: "3-Ply Single Wall Corrugated Box",
        image: "/Product/items/real-3-ply-corrugated-boxes.png",
        category: "Products & Packaging",
        description:
          "Lightweight and dependable shipping cartons engineered for retail distribution, consumer goods, and e-commerce packaging.",
        keypoints: [
          "Single flute cushioning barrier",
          "Economical shipping freight weight",
          "100% recyclable paperboard substrate",
        ],
        link: "/products",
        linkText: "Explore Products",
      },
      {
        id: "prod-2",
        title: "5-Ply Double Wall Heavy-Duty Box",
        image: "/Product/items/real-5-ply-corrugated-boxes.png",
        category: "Products & Packaging",
        description:
          "Dual fluting layers delivering superior compression strength, stackability, and puncture resistance for heavier freight.",
        keypoints: [
          "Two fluting layers with center liner",
          "High vertical stacking compression",
          "Ideal for machinery & industrial parts",
        ],
        link: "/products",
        linkText: "Explore Products",
      },
      {
        id: "prod-3",
        title: "7-Ply Triple Wall Export Container",
        image: "/Product/items/real-7-ply-corrugated-boxes.png",
        category: "Products & Packaging",
        description:
          "Maximum-caliper heavy industrial containers designed for automotive parts, machinery exports, and heavy payload transit.",
        keypoints: [
          "Triple wall high-caliper construction",
          "Timber crate alternative with lower weight",
          "Extreme crush and impact resistance",
        ],
        link: "/products",
        linkText: "Explore Products",
      },
      {
        id: "prod-4",
        title: "Precision Die-Cut Mailer Box",
        image: "/Product/items/die-cut-boxes.png",
        category: "Products & Packaging",
        description:
          "Sharp crease lines and self-locking tab closures engineered for direct-to-consumer presentation and unboxing aesthetics.",
        keypoints: [
          "Roll-end tuck-front (RETF) profile",
          "Crisp creases for easy folding",
          "Custom flexo printing compatible",
        ],
        link: "/products",
        linkText: "Explore Products",
      },

      // 4. Manufacturing Process
      {
        id: "proc-1",
        title: "Stage 01: Raw Paper Reel Selection",
        image: "/home/manufacturing-process/raw-material-selection.png",
        category: "Manufacturing Process",
        description:
          "Careful grading and testing of virgin kraft and recycled paper reels for bursting factor and moisture balance.",
        keypoints: [
          "Inward reel moisture & GSM check",
          "Tested for burst factor (BF)",
          "Responsibly sourced renewable fibers",
        ],
        link: "/#manufacturing",
        linkText: "View Process",
      },
      {
        id: "proc-2",
        title: "Stage 02: Flute & Board Formation",
        image: "/home/manufacturing-process/corrugation-board-formation.png",
        category: "Manufacturing Process",
        description:
          "Heated corrugating rollers forming precision fluted mediums and bonding liner papers with starch adhesive.",
        keypoints: [
          "Heated steam corrugating rolls",
          "Even starch glue line distribution",
          "Continuous board web cooling & scoring",
        ],
        link: "/#manufacturing",
        linkText: "View Process",
      },
      {
        id: "proc-3",
        title: "Stage 03: Multi-Colour Flexo Printing",
        image: "/home/manufacturing-process/printing-branding.png",
        category: "Manufacturing Process",
        description:
          "Inline high-speed flexo printing applying water-based inks for sharp brand graphics, handling icons, and barcodes.",
        keypoints: [
          "Non-toxic water-based inks",
          "Accurate multi-color registration",
          "High-contrast barcode clarity",
        ],
        link: "/#manufacturing",
        linkText: "View Process",
      },
      {
        id: "proc-4",
        title: "Stage 04: Quality Inspection & Dispatch",
        image: "/home/manufacturing-process/quality-inspection-dispatch.png",
        category: "Manufacturing Process",
        description:
          "Dimensional auditing, edge crush compliance checks, and stretch-wrapped palletizing ready for industrial shipment.",
        keypoints: [
          "Edge Crush Test (ECT) verification",
          "Squareness and bond strength check",
          "Palletized weather-protective stretch film",
        ],
        link: "/#manufacturing",
        linkText: "View Process",
      },

      // 5. Industries Served
      {
        id: "ind-1",
        title: "Automotive & Heavy Engineering",
        image: "/home/industries/automotive.jpg",
        category: "Industries Served",
        description:
          "High-density multi-ply cartons engineered to carry automotive spares, machined metal parts, and hardware without deformation.",
        keypoints: [
          "Reinforced corners for dense parts",
          "Oil and moisture-repellent board options",
          "Internal partition inserts for gears",
        ],
        link: "/industries/automotive",
        linkText: "View Automotive",
      },
      {
        id: "ind-2",
        title: "E-Commerce & Retail Shipping",
        image: "/home/industries/ecommerce.jpg",
        category: "Industries Served",
        description:
          "Fast-erecting mailer boxes and self-locking cartons built for courier parcel handling resilience and memorable customer unboxing.",
        keypoints: [
          "Rapid assembly for packing stations",
          "Drop-tested for parcel sorting hubs",
          "Custom branded interior printing",
        ],
        link: "/industries",
        linkText: "View Industries",
      },
      {
        id: "ind-3",
        title: "Pharmaceutical & Healthcare Transit",
        image: "/home/industries/pharmaceutical.jpg",
        category: "Industries Served",
        description:
          "Hygienic, moisture-resistant corrugated shippers tailored for pharmaceutical bottles, diagnostic kits, and medical disposables.",
        keypoints: [
          "Clean-room compatible processing",
          "Moisture-controlled corrugated board",
          "Tamper-evident sealing options",
        ],
        link: "/industries/pharmaceutical",
        linkText: "View Pharma",
      },
      {
        id: "ind-4",
        title: "Food & Agricultural Produce",
        image: "/home/industries/food-beverage.jpg",
        category: "Industries Served",
        description:
          "Ventilated, high-compression boxes manufactured for orchard harvesting, cold-storage transit, and commercial food supply chains.",
        keypoints: [
          "Ventilation holes for air circulation",
          "High humidity stacking resistance",
          "Food-grade safe contact boards",
        ],
        link: "/industries",
        linkText: "View Industries",
      },
    ],
  },
  cta: {
    badge: "MANUFACTURING CAPABILITIES",
    title: "Want to Explore Our Packaging Solutions?",
    description:
      "Discover our products and customized packaging solutions designed for different business requirements. From heavy industrial shipping to custom-printed retail mailers, we engineer packaging that protects.",
    primaryButtonText: "Explore Products",
    primaryButtonLink: "/products",
    secondaryButtonText: "Contact Us",
    secondaryButtonLink: "/#contact",
  },
  seo: {
    metaTitle: "Packaging Gallery | Products, Machinery & Manufacturing – AAVRIT PACKAGING",
    metaDescription:
      "Explore AAVRIT PACKAGING's gallery featuring corrugated packaging products, custom packaging, manufacturing machinery, industries, and production processes.",
    metaKeywords:
      "packaging gallery, corrugated packaging showcase, manufacturing machinery photos, custom boxes gallery, industrial cartons display",
    canonicalLink: "/gallery",
    ogImage: "/Gallery/Kraft Packaging Gallery Montage.png",
    ogImageAlt: "AAVRIT PACKAGING Visual Gallery",
  },
};


// Backward-compatibility exports for unused/legacy gallery components
export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  aspectRatio?: "square" | "portrait" | "landscape";
  featured?: boolean;
}

export const GALLERY_CATEGORIES = [
  "All Images",
  "Products & Packaging",
  "Custom Packaging",
  "Industries",
  "Machinery & Technology",
  "Manufacturing Process",
  "Sustainability",
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number] | string;

export const GALLERY_ITEMS: GalleryItem[] = (DEFAULT_GALLERY_DATA.showcase?.items || []).map((i) => ({
  id: i.id,
  title: i.title,
  category: i.category,
  description: i.description,
  image: i.image,
  aspectRatio: "square",
}));
