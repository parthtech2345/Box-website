export interface GalleryItem {
  id: string;
  title: string;
  category: "Products & Packaging" | "Custom Packaging" | "Industries" | "Machinery & Technology" | "Manufacturing Process" | "Sustainability";
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

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export const GALLERY_ITEMS: GalleryItem[] = [
  // ==========================================
  // 1. PRODUCTS & PACKAGING
  // ==========================================
  {
    id: "prod-3ply-box",
    title: "3-Ply Single Wall Corrugated Box",
    category: "Products & Packaging",
    description: "Lightweight, dependable corrugated shipping carton engineered for retail distribution and e-commerce mailings.",
    image: "/Product/items/real-3-ply-corrugated-boxes.png",
    aspectRatio: "square",
  },
  {
    id: "prod-5ply-box",
    title: "5-Ply Double Wall Heavy-Duty Box",
    category: "Products & Packaging",
    description: "Dual fluting layers delivering superior compression strength and puncture resistance for industrial goods.",
    image: "/Product/items/real-5-ply-corrugated-boxes.png",
    aspectRatio: "landscape",
    featured: true,
  },
  {
    id: "prod-7ply-box",
    title: "7-Ply Triple Wall Heavy Industrial Shipper",
    category: "Products & Packaging",
    description: "Maximum-caliper heavy-duty container engineered for heavy industrial equipment, automotive engines, and export freight.",
    image: "/Product/items/real-7-ply-corrugated-boxes.png",
    aspectRatio: "square",
  },
  {
    id: "prod-die-cut",
    title: "Precision Die-Cut Cartons",
    category: "Products & Packaging",
    description: "Sharp crease lines and self-locking tabs manufactured with high-precision rotary tooling.",
    image: "/Product/items/die-cut-boxes.png",
    aspectRatio: "portrait",
  },
  {
    id: "prod-mailer-box",
    title: "E-Commerce Self-Locking Mailer Box",
    category: "Products & Packaging",
    description: "Premium presentation mailer box with roll-end tuck-front closure for direct-to-consumer fulfillment.",
    image: "/Product/items/mailer-boxes.png",
    aspectRatio: "square",
  },
  {
    id: "prod-food-pizza",
    title: "Food-Grade Corrugated Pizza Box",
    category: "Products & Packaging",
    description: "Ventilated thermal retaining kraft box maintaining food warmth while preventing steam sogginess.",
    image: "/Product/items/real-corrugated-pizza-boxes.png",
    aspectRatio: "square",
  },
  {
    id: "prod-fruit-box",
    title: "Ventilated Fresh Produce Container",
    category: "Products & Packaging",
    description: "Moisture-resistant kraft carton with side ventilation apertures designed for cold storage and orchard transit.",
    image: "/Product/items/real-ventilated-fruit-produce-boxes.png",
    aspectRatio: "portrait",
  },
  {
    id: "prod-auto-parts",
    title: "Automotive Spare Parts Carton",
    category: "Products & Packaging",
    description: "Rigid multi-wall carton designed to carry dense metallic components without bottom sag.",
    image: "/Product/items/automobile-component-boxes.png",
    aspectRatio: "square",
  },
  {
    id: "prod-heavy-duty",
    title: "Reinforced Master Export Carton",
    category: "Products & Packaging",
    description: "Engineered stacking resilience designed for cross-country logistics and palletized container shipping.",
    image: "/Product/items/heavy-duty-industrial-shipping-box.png",
    aspectRatio: "landscape",
  },
  {
    id: "prod-partitions",
    title: "Protective Corrugated Grid Partitions",
    category: "Products & Packaging",
    description: "Interlocking cellular dividers providing individual cavity protection for delicate components and bottles.",
    image: "/Product/items/real-industrial-partitions-dividers.png",
    aspectRatio: "square",
  },
  {
    id: "prod-pallet-box",
    title: "Heavy-Duty Pallet Gaylord Shipper",
    category: "Products & Packaging",
    description: "Bulk cargo shipping container fitted directly onto wooden or plastic pallets for voluminous transport.",
    image: "/Product/items/real-pallet-gaylord-boxes.png",
    aspectRatio: "portrait",
    featured: true,
  },
  {
    id: "prod-flexo-printed",
    title: "Multi-Colour Flexo Printed Carton",
    category: "Products & Packaging",
    description: "High-definition branded packaging printed with water-based eco-friendly inks for corporate identity.",
    image: "/Product/items/real-flexographic-printed-boxes.png",
    aspectRatio: "square",
  },

  // ==========================================
  // 2. CUSTOM PACKAGING
  // ==========================================
  {
    id: "custom-minimal-kraft",
    title: "Minimal Kraft Packaging Arrangement",
    category: "Custom Packaging",
    description: "Bespoke engineered kraft corrugated packaging designed for direct-to-consumer and branded retail shipments.",
    image: "/custom pack/Minimal Kraft Packaging Arrangement.png",
    aspectRatio: "landscape",
    featured: true,
  },
  {
    id: "custom-pro-display",
    title: "Custom Prototyped Packaging Display",
    category: "Custom Packaging",
    description: "Custom dimension CAD samples and box geometry prototypes fabricated to match exact client product dimensions.",
    image: "/about/Professional Corrugated Packaging Display.png",
    aspectRatio: "portrait",
  },
  {
    id: "custom-auto-bottom",
    title: "Crash-Lock Auto-Bottom Box",
    category: "Custom Packaging",
    description: "Instant pre-glued bottom base designed for rapid manual or semi-automated packaging line fulfillment.",
    image: "/Product/items/auto-bottom-boxes.png",
    aspectRatio: "square",
  },
  {
    id: "custom-self-locking",
    title: "Tamper-Resistant Self-Locking Box",
    category: "Custom Packaging",
    description: "Interlocking side tabs and front flap creating a secure seal without requiring external packing tape.",
    image: "/Product/items/real-returnable-self-locking-shipping-boxes.png",
    aspectRatio: "square",
  },
  {
    id: "custom-handle-box",
    title: "Die-Cut Carry Handle Carton",
    category: "Custom Packaging",
    description: "Integrated hand-hole die cuts facilitating comfortable manual lifting and retail transport.",
    image: "/Product/items/real-corrugated-handle-boxes.png",
    aspectRatio: "square",
  },
  {
    id: "custom-telescope",
    title: "Two-Piece Full Telescope Box",
    category: "Custom Packaging",
    description: "Separate lid and body construction providing double-wall rim strength and convenient product inspection.",
    image: "/Product/items/telescope-boxes.png",
    aspectRatio: "portrait",
  },

  // ==========================================
  // 3. INDUSTRIES
  // ==========================================
  {
    id: "ind-automotive",
    title: "Automotive & Engineering Components",
    category: "Industries",
    description: "Rugged packaging engineered for heavy auto parts, gearboxes, machined castings, and precision fasteners.",
    image: "/home/industries/automotive.jpg",
    aspectRatio: "square",
  },
  {
    id: "ind-ecommerce",
    title: "E-Commerce & Retail Shipping",
    category: "Industries",
    description: "High-volume mailer boxes, crash-lock cartons, and tamper-evident packaging for rapid warehouse packing.",
    image: "/home/industries/ecommerce.jpg",
    aspectRatio: "portrait",
    featured: true,
  },
  {
    id: "ind-food",
    title: "Food & Beverage Packaging",
    category: "Industries",
    description: "Hygienic, food-safe paperboard cartons engineered for bakeries, FMCG goods, and processed food logistics.",
    image: "/home/industries/food-beverage.jpg",
    aspectRatio: "square",
  },
  {
    id: "ind-pharma",
    title: "Pharmaceutical & Healthcare",
    category: "Industries",
    description: "Dust-free, moisture-controlled corrugated shippers tailored for blister packs, syrups, and medical equipment.",
    image: "/home/industries/pharmaceutical.jpg",
    aspectRatio: "landscape",
  },
  {
    id: "ind-agri",
    title: "Agriculture & Fresh Produce",
    category: "Industries",
    description: "Ventilated, stack-resilient fruit and vegetable boxes engineered to endure humid cold-storage transit.",
    image: "/home/industries/agriculture.jpg",
    aspectRatio: "square",
  },
  {
    id: "ind-electronics",
    title: "Electronics & Electrical Hardware",
    category: "Industries",
    description: "Precision-cushioned packaging with anti-static partitions designed to safeguard delicate electronic circuits.",
    image: "/home/industries/electronics.jpg",
    aspectRatio: "square",
  },
  {
    id: "ind-textiles",
    title: "Textiles, Garments & Apparel",
    category: "Industries",
    description: "Large-capacity wardrobe and flat-pack master shipping cartons for international garment export.",
    image: "/home/industries/textile-garments.jpg",
    aspectRatio: "portrait",
  },
  {
    id: "ind-engineering",
    title: "Heavy Engineering & Metal Equipment",
    category: "Industries",
    description: "Multi-ply heavy-duty crates and timber-reinforced corrugated packaging for industrial assemblies.",
    image: "/home/industries/engineering.jpg",
    aspectRatio: "square",
  },

  // ==========================================
  // 4. MACHINERY & TECHNOLOGY
  // ==========================================
  {
    id: "mach-corrugation",
    title: "Automatic Corrugation Production Line",
    category: "Machinery & Technology",
    description: "Continuous corrugator station transforming raw kraft reels into rigid 3-ply and 5-ply fluted sheets.",
    image: "/Machinery/corrugation-machine.png",
    aspectRatio: "landscape",
    featured: true,
  },
  {
    id: "mach-pasting",
    title: "Precision Sheet Pasting & Laminator",
    category: "Machinery & Technology",
    description: "Even-starch adhesive bonding unit producing multi-ply board with high bond strength and flatness.",
    image: "/Machinery/sheet-pasting-machine.png",
    aspectRatio: "square",
  },
  {
    id: "mach-flexo",
    title: "High-Definition Flexo Printer Slotter",
    category: "Machinery & Technology",
    description: "Integrated inline station providing rapid multi-colour printing, scoring, and slotting in a single pass.",
    image: "/Machinery/flexo-printer-slotter.png",
    aspectRatio: "portrait",
  },
  {
    id: "mach-die-cutter",
    title: "Rotary Die-Cutting Machine",
    category: "Machinery & Technology",
    description: "High-precision rotary die-cylinder cutting intricate profiles, ventilation ports, and self-locking tabs.",
    image: "/Machinery/die-cutting-machine.png",
    aspectRatio: "square",
  },
  {
    id: "mach-gluer-stitcher",
    title: "Automated Folder Gluer & Stitching Machine",
    category: "Machinery & Technology",
    description: "Automated joint assembly system delivering accurate hot/cold glue joints and heavy-duty wire staples.",
    image: "/Machinery/folder-gluer-stitcher.png",
    aspectRatio: "landscape",
  },
  {
    id: "mach-slitter-scorer",
    title: "Thin Blade High-Precision Slitter Scorer",
    category: "Machinery & Technology",
    description: "Tungsten-carbide razor blades producing crisp, tear-free crease lines and razor-clean edge trimming.",
    image: "/Machinery/slitter-scorer-machine.png",
    aspectRatio: "square",
  },
  {
    id: "mach-plant-overview",
    title: "Corrugated Manufacturing Line Operations",
    category: "Machinery & Technology",
    description: "Industrial plant floor with high-speed automated conveyors transporting synchronized corrugated sheets.",
    image: "/Machinery/intro-machinery.png",
    aspectRatio: "portrait",
  },
  {
    id: "mach-testing-lab",
    title: "Quality Assurance & Strength Testing Lab",
    category: "Machinery & Technology",
    description: "Calibrated Edge Crush Test (ECT) and Bursting Strength analyzers verifying board compliance.",
    image: "/Machinery/gallery-testing.png",
    aspectRatio: "square",
  },

  // ==========================================
  // 5. MANUFACTURING PROCESS
  // ==========================================
  {
    id: "proc-raw-material",
    title: "Stage 01: Raw Material Reel Selection",
    category: "Manufacturing Process",
    description: "Careful grading and inspection of virgin and recycled kraft paper reels for optimal bursting factor.",
    image: "/home/manufacturing-process/raw-material-selection.png",
    aspectRatio: "square",
  },
  {
    id: "proc-corrugation",
    title: "Stage 02: Flute & Board Formation",
    category: "Manufacturing Process",
    description: "Heated pressure corrugating rolls shaping the fluting medium and bonding top and bottom liners.",
    image: "/home/manufacturing-process/corrugation-board-formation.png",
    aspectRatio: "landscape",
    featured: true,
  },
  {
    id: "proc-printing",
    title: "Stage 03: Precision Flexographic Printing",
    category: "Manufacturing Process",
    description: "Fast-drying, water-based color registration ensuring sharp corporate logos, barcodes, and transit symbols.",
    image: "/home/manufacturing-process/printing-branding.png",
    aspectRatio: "square",
  },
  {
    id: "proc-die-cutting",
    title: "Stage 04: Die-Cutting, Creasing & Slotting",
    category: "Manufacturing Process",
    description: "Computerized cutting dies carving exact box geometries with crisp fold lines for easy erecting.",
    image: "/home/manufacturing-process/die-cutting-slotting.png",
    aspectRatio: "portrait",
  },
  {
    id: "proc-box-assembly",
    title: "Stage 05: Folding, Gluing & Stitching",
    category: "Manufacturing Process",
    description: "High-speed automated folding lines jointing side seams with commercial adhesives and metal staples.",
    image: "/home/manufacturing-process/folding-box-assembly.png",
    aspectRatio: "square",
  },
  {
    id: "proc-dispatch",
    title: "Stage 06: Quality Inspection & Palletized Dispatch",
    category: "Manufacturing Process",
    description: "Final dimensional audits, bundle strapping, and stretch-wrapping for secure warehouse logistics.",
    image: "/home/manufacturing-process/quality-inspection-dispatch.png",
    aspectRatio: "landscape",
  },
  {
    id: "proc-warehouse-team",
    title: "Finished Goods Storage & Dispatch",
    category: "Manufacturing Process",
    description: "Systematic warehouse racking and coordinated fleet loading for on-time delivery across industrial hubs.",
    image: "/images/warehouse-dispatch-india.png",
    aspectRatio: "square",
  },

  // ==========================================
  // 6. SUSTAINABILITY
  // ==========================================
  {
    id: "sust-renewable-earth",
    title: "Renewable Paper-Based Packaging",
    category: "Sustainability",
    description: "100% circular, paper-based substrates supporting natural material recovery and recycling programs.",
    image: "/Sustanablity/Eco-Friendly Packaging and Renewable Earth.png",
    aspectRatio: "landscape",
    featured: true,
  },
  {
    id: "sust-plant-facility",
    title: "Resource-Minded Manufacturing Environment",
    category: "Sustainability",
    description: "Modern facility operations prioritizing efficient electricity use and systematic scrap recovery.",
    image: "/Sustanablity/sustainable-plant.png",
    aspectRatio: "portrait",
  },
  {
    id: "sust-fiber-reels",
    title: "Circular Kraft Paper Reels",
    category: "Sustainability",
    description: "Sustainably sourced kraft papers and testliner reels feeding eco-conscious packaging manufacturing.",
    image: "/Sustanablity/journey-sustainable.png",
    aspectRatio: "square",
  },
  {
    id: "sust-efficient-flute",
    title: "Material-Efficient Flute Profiles",
    category: "Sustainability",
    description: "Engineered flute calipers that optimize strength-to-weight ratios to eliminate packaging excess.",
    image: "/Sustanablity/efficient-usage.png",
    aspectRatio: "square",
  },
  {
    id: "sust-waste-management",
    title: "Scrap Trim Collection & Baling",
    category: "Sustainability",
    description: "Collecting and baling clean production off-cuts to return directly into paper mill pulping streams.",
    image: "/Sustanablity/waste-management.png",
    aspectRatio: "square",
  },
  {
    id: "sust-durability-testing",
    title: "Quality Durability for Waste Prevention",
    category: "Sustainability",
    description: "Rigorous carton strength testing ensuring products reach destinations safely without transit damage.",
    image: "/Sustanablity/quality-production.png",
    aspectRatio: "landscape",
  },
];
