export interface ProductSEOData {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  canonicalLink?: string;
  schemaMarkup?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  categoryName: string;
  image: string;
  fallbackImage: string;
  imageAlt?: string;
  imageName?: string;
  order?: number;
  shortDescription: string;
  fullDescription: string;
  specifications: {
    plyRating?: string;
    fluteType?: string;
    burstingStrength?: string;
    loadCapacity?: string;
    customPrinting?: string;
    moistureResistance?: string;
    closureType?: string;
    applications?: string[];
    [key: string]: string | string[] | undefined;
  };
  keyFeatures: string[];
  faqs?: { question: string; answer: string }[];
  technicalGuide?: {
    recommendedPly?: string;
    plyGuideTitle?: string;
    plyGuideSubtitle?: string;
    recommendedFlute?: string;
    flutesSubtitle?: string;
    sizingGuideTitle?: string;
    sizingGuideSubtitle?: string;
    internalDimensionsNote?: string;
    moqNote?: string;
    contactPhone?: string;
    callButtonText?: string;
  };
  seo?: ProductSEOData;
}

export interface ProductCategoryData {
  id: string;
  title: string;
  slug: string;
  image: string;
  imageAlt?: string;
  imageName?: string;
  order?: number;
  description: string;
  itemCount: number;
  seo?: ProductSEOData;
}

export const MAIN_CATEGORIES: ProductCategoryData[] = [
  {
    id: "corrugated-boxes",
    title: "Corrugated Boxes",
    slug: "corrugated-boxes",
    image: "/home/product-categories/corrugated-boxes.png",
    description: "Standard slotted cartons and heavy-duty multi-ply boxes engineered for structural stacking and high load endurance.",
    itemCount: 5,
  },
  {
    id: "printed-corrugated-boxes",
    title: "Printed Corrugated Boxes",
    slug: "printed-corrugated-boxes",
    image: "/home/product-categories/printed-corrugated-boxes.png",
    description: "High-definition 1 to 4 colour flexographic printed boxes with sharp branded graphics, handling icons, and eco barcodes.",
    itemCount: 5,
  },
  {
    id: "die-cut-boxes",
    title: "Die-Cut Boxes",
    slug: "die-cut-boxes",
    image: "/home/product-categories/die-cut-boxes.png",
    description: "Precision CNC die-cut cartons featuring roll-end tuck-tops, carry handles, auto-lock bases, and custom shapes.",
    itemCount: 5,
  },
  {
    id: "industrial-packaging",
    title: "Industrial Packaging",
    slug: "industrial-packaging",
    image: "/home/product-categories/industrial-packaging.png",
    description: "Engineered heavy-duty corrugated packaging, internal partition grids, and pallet master containers for components.",
    itemCount: 5,
  },
  {
    id: "food-packaging",
    title: "Food Packaging",
    slug: "food-packaging",
    image: "/home/product-categories/food-packaging.png",
    description: "Food-grade, ventilated produce trays, hygienic bakery cartons, and moisture-resistant secondary FMCG boxes.",
    itemCount: 5,
  },
  {
    id: "ecommerce-packaging",
    title: "E-commerce Packaging",
    slug: "ecommerce-packaging",
    image: "/home/product-categories/ecommerce-packaging.png",
    description: "Tamper-evident courier boxes, self-locking mailers, and tear-strip shipping cartons built for modern fulfillment.",
    itemCount: 5,
  },
];

export const ALL_PRODUCTS: ProductItem[] = [
  // ==========================================
  // Category 1: Corrugated Boxes
  // ==========================================
  {
    id: "3-ply-corrugated-boxes",
    name: "3 Ply Corrugated Boxes",
    slug: "3-ply-corrugated-boxes",
    categoryId: "corrugated-boxes",
    categoryName: "Corrugated Boxes",
    image: "/Product/items/real-3-ply-corrugated-boxes.png",
    fallbackImage: "/home/product-categories/corrugated-boxes.png",
    shortDescription: "Versatile single-wall corrugated boxes crafted from high-burst kraft liner, ideal for lightweight industrial and commercial dispatch.",
    fullDescription: "Aavrit Packaging 3-Ply Corrugated Boxes are manufactured using premium virgin and high-grade recycled kraft paper. Engineered with precision B-flute or C-flute architecture, these boxes deliver exceptional rigidity, puncture resistance, and neat fold lines. Perfect for e-commerce deliveries, consumer goods, apparel, and lightweight industrial merchandise.",
    specifications: {
      plyRating: "3-Ply (Single Wall)",
      fluteType: "B-Flute / C-Flute",
      burstingStrength: "8 – 14 kg/cm²",
      loadCapacity: "Up to 15 kg",
      customPrinting: "Up to 4-Colour Flexo Available",
      moistureResistance: "Standard / Hydrophobic sizing available",
      closureType: "Adhesive Tape / Top-Bottom Flap Closure",
      applications: ["E-commerce Fulfillment", "Textiles & Garments", "Retail Goods", "Light Electronics"],
    },
    keyFeatures: [
      "Optimal strength-to-weight ratio for economical freight charges",
      "Clean creasing and slotting for rapid automated or manual packing",
      "100% recyclable and bio-degradable kraft board",
      "High ECT (Edge Crush Test) value for uniform stacking stability",
    ],
  },
  {
    id: "5-ply-corrugated-boxes",
    name: "5 Ply Corrugated Boxes",
    slug: "5-ply-corrugated-boxes",
    categoryId: "corrugated-boxes",
    categoryName: "Corrugated Boxes",
    image: "/Product/items/real-5-ply-corrugated-boxes.png",
    fallbackImage: "/home/product-categories/corrugated-boxes.png",
    shortDescription: "Heavy-duty double-wall cartons providing superior stacking resilience and puncture protection for commercial cargo.",
    fullDescription: "Our 5-Ply Double Wall Corrugated Boxes combine dual fluting (typically BC-flute or AB-flute) to provide maximum cushioning and vertical stack-load capacity. Built to withstand inter-state shipping, warehouse double-stacking, and rigorous cargo handling across transit corridors.",
    specifications: {
      plyRating: "5-Ply (Double Wall)",
      fluteType: "BC-Flute / AB-Flute",
      burstingStrength: "14 – 22 kg/cm²",
      loadCapacity: "Up to 35 kg",
      customPrinting: "Multi-Colour Flexo Branding",
      moistureResistance: "High-grade sizing & water-repellent coating options",
      closureType: "Heavy-Duty Taping / Stitching / Strapping",
      applications: ["Industrial Hardware", "Home Appliances", "Automotive Parts", "Export Secondary Cargo"],
    },
    keyFeatures: [
      "Dual fluting absorbs mechanical shock and transit vibration",
      "Superior compressive strength prevents box crushing during long-haul storage",
      "Compatible with automatic case erectors and tape sealing lines",
      "Customizable GSM combinations tailored to specific payload weights",
    ],
  },
  {
    id: "7-ply-corrugated-boxes",
    name: "7 Ply Corrugated Boxes",
    slug: "7-ply-corrugated-boxes",
    categoryId: "corrugated-boxes",
    categoryName: "Corrugated Boxes",
    image: "/Product/items/real-7-ply-corrugated-boxes.png",
    fallbackImage: "/home/product-categories/corrugated-boxes.png",
    shortDescription: "Industrial-grade triple-wall cartons engineered to replace wooden crates for heavy machinery and international shipments.",
    fullDescription: "Manufactured on our advanced heavy-duty corrugation lines, Aavrit 7-Ply Triple Wall Cartons offer unbeatable structural integrity. Built with three synchronized fluting mediums (e.g. AAC or BCA), these boxes are capable of replacing wooden crates while saving significant tare weight and eliminating phytosanitary fumigation bottlenecks.",
    specifications: {
      plyRating: "7-Ply (Triple Wall)",
      fluteType: "BCA / AAC Flute Combination",
      burstingStrength: "24 – 38 kg/cm²",
      loadCapacity: "Up to 100 kg+",
      customPrinting: "High-contrast industrial warning & brand print",
      moistureResistance: "Wax or polymer laminated barrier options",
      closureType: "Steel wire stitching & heavy polypropylene strapping",
      applications: ["Machinery Spares", "Pump & Valve Assemblies", "Automobile Engines", "Heavy Export Shipments"],
    },
    keyFeatures: [
      "Crate-level structural protection with a fraction of timber weight",
      "ISPM-15 compliant without fumigation delays",
      "Extreme puncture resistance against sharp internal metal parts",
      "Engineered for intermodal containerization and rough sea transit",
    ],
  },
  {
    id: "regular-slotted-cartons",
    name: "Regular Slotted Cartons (RSC)",
    slug: "regular-slotted-cartons",
    categoryId: "corrugated-boxes",
    categoryName: "Corrugated Boxes",
    image: "/Product/items/regular-slotted-cartons.png",
    fallbackImage: "/home/product-categories/corrugated-boxes.png",
    shortDescription: "The industry-standard packaging carton with all flaps having equal length, minimizing paper waste and maximizing efficiency.",
    fullDescription: "Regular Slotted Cartons (RSC) represent the most efficient and universal box design in modern logistics. The outer flaps meet smoothly at the center for effortless tape sealing. Engineered on precision flexo folder gluers (FFG) ensuring millimeter accuracy, square corners, and high throughput packing.",
    specifications: {
      plyRating: "3-Ply / 5-Ply / 7-Ply Available",
      fluteType: "B, C, or BC Flute",
      burstingStrength: "Customized to requirement",
      loadCapacity: "10 kg – 50 kg",
      customPrinting: "Single / Multi-Colour Flexography",
      moistureResistance: "Standard moisture-resistant sizing",
      closureType: "Center-meeting flaps; BOPP tape sealed",
      applications: ["Bulk Warehousing", "FMCG Distribution", "Apparel & Footwear", "Pharmaceutical Master Cartons"],
    },
    keyFeatures: [
      "Zero waste manufacturing design for high cost-efficiency",
      "Ships flat (knocked down) to optimize warehouse storage",
      "Rapid manual folding and high compatibility with robotic case sealers",
      "Available with custom printed handling instructions and barcodes",
    ],
  },
  {
    id: "telescope-boxes",
    name: "Telescope Boxes",
    slug: "telescope-boxes",
    categoryId: "corrugated-boxes",
    categoryName: "Corrugated Boxes",
    image: "/Product/items/telescope-boxes.png",
    fallbackImage: "/home/product-categories/corrugated-boxes.png",
    shortDescription: "Two-piece full or partial telescope boxes featuring a separate lid and tray for superior corner strength and easy access.",
    fullDescription: "Aavrit Telescope Boxes feature an independent lid that slides smoothly over an underlying tray base. This dual-wall overlap on the perimeter gives phenomenal stacking resistance, making them ideal for heavy fruits, porcelain, industrial precision instruments, and luxury unboxing applications.",
    specifications: {
      plyRating: "3-Ply or 5-Ply Construction",
      fluteType: "B-Flute / C-Flute / E-Flute",
      burstingStrength: "12 – 24 kg/cm²",
      loadCapacity: "Up to 30 kg",
      customPrinting: "Premium Flexo / Screen Graphics",
      moistureResistance: "Available with wax-impregnated or poly-coated liners",
      closureType: "Friction-fit lid / Strap secure",
      applications: ["Bulk Fresh Produce", "Ceramics & Sanitaryware", "Footwear & Textiles", "Precision Scientific Instruments"],
    },
    keyFeatures: [
      "Overlapping perimeter walls deliver doubled rim crush strength",
      "Effortless top-opening inspection without tearing seal tape",
      "Self-locking pre-formed corner styles available",
      "High display appeal for retail wholesale packaging",
    ],
  },

  // ==========================================
  // Category 2: Printed Corrugated Boxes
  // ==========================================
  {
    id: "1-colour-printed-boxes",
    name: "1 Colour Printed Boxes",
    slug: "1-colour-printed-boxes",
    categoryId: "printed-corrugated-boxes",
    categoryName: "Printed Corrugated Boxes",
    image: "/Product/items/1-colour-printed.png",
    fallbackImage: "/home/product-categories/printed-corrugated-boxes.png",
    shortDescription: "Cost-effective single-color flexographic printing for company logos, compliance symbols, and handling directives on kraft board.",
    fullDescription: "Ideal for clean, minimalist corporate identity and regulatory compliance. Our high-precision single-color flexo units utilize water-based eco-friendly inks that dry quickly and bind durably to virgin kraft paper without fading or smudging.",
    specifications: {
      plyRating: "3-Ply to 7-Ply",
      fluteType: "All Flute Profiles",
      customPrinting: "1-Colour Flexographic (Black, Dark Brown, White, or Brand Shade)",
      inkType: "Water-based eco-friendly non-toxic inks",
      printResolution: "Sharp vector reproduction for QR & Barcodes",
      closureType: "Slotted / Die-cut Flaps",
      applications: ["Industrial Logistics", "Standard Dispatch Cartons", "Compliance Labeling", "E-commerce Outers"],
    },
    keyFeatures: [
      "Most economical custom printed solution for master cartons",
      "High scan accuracy for barcodes and inventory tracking data",
      "Fast production turnaround with minimal plate setup time",
      "Eco-friendly non-toxic water-based inks comply with green norms",
    ],
  },
  {
    id: "2-colour-printed-boxes",
    name: "2 Colour Printed Boxes",
    slug: "2-colour-printed-boxes",
    categoryId: "printed-corrugated-boxes",
    categoryName: "Printed Corrugated Boxes",
    image: "/Product/items/2-colour-printed.png",
    fallbackImage: "/home/product-categories/printed-corrugated-boxes.png",
    shortDescription: "High-contrast two-tone flexo printed packaging that highlights your brand logo, tagline, and essential product specifications.",
    fullDescription: "Pairing contrasting hues like terracotta orange and deep chocolate brown on natural kraft corrugated paper creates a memorable brand impression. Precise cylinder registration ensures perfect alignment of text, borders, and brand iconography.",
    specifications: {
      plyRating: "3-Ply / 5-Ply",
      fluteType: "B, C, or E Flute",
      customPrinting: "2-Colour High Precision Flexo",
      inkType: "Fast-curing flexo inks with abrasion resistance",
      closureType: "RSC / Die-cut Mailer",
      applications: ["Consumer Appliances", "Branded FMCG Shipping", "Subscription Boxes", "Direct-to-Consumer Orders"],
    },
    keyFeatures: [
      "Striking two-tone aesthetic elevates perceived brand value",
      "Accurate plate registration ensures sharp overlap-free outlines",
      "Scratch-resistant print withstands warehouse pallet abrasion",
      "Available on natural brown kraft or premium white bleached top liner",
    ],
  },
  {
    id: "4-colour-printed-boxes",
    name: "4 Colour Printed Boxes",
    slug: "4-colour-printed-boxes",
    categoryId: "printed-corrugated-boxes",
    categoryName: "Printed Corrugated Boxes",
    image: "/Product/items/real-4-colour-printed-boxes.png",
    fallbackImage: "/home/product-categories/printed-corrugated-boxes.png",
    shortDescription: "Vibrant full-color graphic packaging designed for supermarket shelf displays, electronic outers, and premium retail presentation.",
    fullDescription: "Equipped with multi-station flexo printing units with computer-controlled ink viscosity and chambered doctor blade systems. We reproduce colorful product artwork, photographic elements, and rich typography on virgin kraft or coated white paperboard.",
    specifications: {
      plyRating: "3-Ply / 5-Ply / Micro-Flute",
      fluteType: "E-Flute / B-Flute / C-Flute",
      customPrinting: "CMYK 4-Colour Full Graphic Flexo",
      printFinish: "Matte or Gloss overprint varnish (OPV)",
      closureType: "Auto-bottom / Display Tuck / RSC",
      applications: ["Retail Shelf Packaging", "Consumer Electronics", "Packaged Foods", "Gift & Promotional Kits"],
    },
    keyFeatures: [
      "Photo-quality graphics and rich color saturation",
      "Protective OPV varnish prevents smearing and moisture dulling",
      "Enhances brand distinction on wholesale and retail shelves",
      "Consistent color density across high-volume production runs",
    ],
  },
  {
    id: "flexographic-printed-boxes",
    name: "Flexographic Printed Boxes",
    slug: "flexographic-printed-boxes",
    categoryId: "printed-corrugated-boxes",
    categoryName: "Printed Corrugated Boxes",
    image: "/Product/items/real-flexographic-printed-boxes.png",
    fallbackImage: "/home/product-categories/printed-corrugated-boxes.png",
    shortDescription: "High-speed flexographic corrugated boxes optimized for large-scale industrial manufacturing and FMCG packaging lines.",
    fullDescription: "Our inline flexo printer-slotter-die-cutter lines deliver incredible speed and uniform quality. Capable of handling board widths up to 2.4 meters, delivering razor-sharp text, consistent ink laydown, and rapid drying for immediate palletization.",
    specifications: {
      plyRating: "3-Ply, 5-Ply, 7-Ply",
      fluteType: "B, C, BC Flute",
      customPrinting: "High-speed 1 to 4 colour flexo",
      lineSpeed: "Up to 250 boxes/minute",
      closureType: "Inline Glued or Stitched",
      applications: ["High-Volume FMCG", "Contract Packaging", "Beverage Secondary Boxes", "Bulk Logistics"],
    },
    keyFeatures: [
      "Engineered for enterprise scale with lowest unit production cost",
      "Automated inspection cameras eliminate defective prints",
      "High rub-resistance for long distance transport",
      "Uniform scoring for flawless automated case assembly",
    ],
  },
  {
    id: "branded-shipping-boxes",
    name: "Branded Shipping Boxes",
    slug: "branded-shipping-boxes",
    categoryId: "printed-corrugated-boxes",
    categoryName: "Printed Corrugated Boxes",
    image: "/Product/items/branded-shipping-boxes.png",
    fallbackImage: "/home/product-categories/printed-corrugated-boxes.png",
    shortDescription: "Turn standard shipping boxes into mobile billboards with branded typography, custom tapes, and social tags.",
    fullDescription: "Transform every customer shipment into an unboxing experience. Aavrit Branded Shipping Boxes combine tough structural corrugated liners with striking exterior graphic designs and optional inside-lid printing.",
    specifications: {
      plyRating: "3-Ply / 5-Ply",
      fluteType: "B-Flute / E-Flute",
      customPrinting: "Inside & Outside Flexo Printing Available",
      finish: "Natural Kraft Matte or Premium White Coated",
      closureType: "Roll-end tuck or center seam",
      applications: ["DTC Brands", "E-commerce Unboxing", "Fashion Outlets", "Premium Food Deliveries"],
    },
    keyFeatures: [
      "Reinforces brand authenticity and builds customer excitement",
      "Inside-box printing for coupons, return notes, or thank you cards",
      "Durable against conveyor scuffs and delivery van handling",
      "Custom sizes tailored to eliminate void filler waste",
    ],
  },

  // ==========================================
  // Category 3: Die-Cut Boxes
  // ==========================================
  {
    id: "die-cut-boxes",
    name: "Custom Die-Cut Boxes",
    slug: "die-cut-boxes",
    categoryId: "die-cut-boxes",
    categoryName: "Die-Cut Boxes",
    image: "/Product/items/die-cut-boxes.png",
    fallbackImage: "/home/product-categories/die-cut-boxes.png",
    shortDescription: "Precision CNC cut boxes crafted with custom contour folding lines, tabs, and lock points without requiring packaging tape.",
    fullDescription: "Manufactured using state-of-the-art flatbed and rotary die cutters. Every crease, slot, and tab is pressed with laser-leveled steel rule dies, ensuring snap-together assembly and zero loose flaps.",
    specifications: {
      plyRating: "3-Ply / 5-Ply / Micro E-Flute",
      fluteType: "E, B, C Flute",
      cuttingPrecision: "± 0.5 mm tolerance",
      closureType: "Interlocking Self-Lock Tabs",
      customPrinting: "Up to 4-Colour Flexo",
      applications: ["Specialty Merchandise", "Electronics Enclosures", "Cosmetics Kits", "Custom Machinery Parts"],
    },
    keyFeatures: [
      "Exact snug fit minimizes internal product movement",
      "Clean burr-free edges for comfortable end-user handling",
      "Eliminates the need for exterior adhesive tape in many styles",
      "Rapid assembly reduces labor overhead in packing stations",
    ],
  },
  {
    id: "mailer-boxes",
    name: "Corrugated Mailer Boxes",
    slug: "mailer-boxes",
    categoryId: "die-cut-boxes",
    categoryName: "Die-Cut Boxes",
    image: "/Product/items/mailer-boxes.png",
    fallbackImage: "/home/product-categories/die-cut-boxes.png",
    shortDescription: "Roll-End Tuck-Top (RETT) mailers with three-layer sidewall protection and self-locking front closure for premium merchandise.",
    fullDescription: "The gold standard for subscription kits and e-commerce shipments. When folded, the roll-end side wings create sturdy triple-thick side walls that resist top crushing while presenting a clean rectangular reveal upon opening.",
    specifications: {
      plyRating: "3-Ply Single Wall",
      fluteType: "E-Flute (Fine) / B-Flute (Heavy)",
      burstingStrength: "9 – 16 kg/cm²",
      closureType: "Tuck-front with dual side wing locks",
      customPrinting: "Interior & Exterior Graphic Flexo",
      applications: ["Subscription Clubs", "Cosmetics & Skincare", "Tech Accessories", "Apparel & Shoes"],
    },
    keyFeatures: [
      "Triple-wall side rails protect against transit impacts",
      "Smooth friction-tuck tabs open seamlessly without box tearing",
      "Ultra-flat inner surface suitable for custom foam or molded pulp inserts",
      "Ships flat in space-saving bundles",
    ],
  },
  {
    id: "self-locking-boxes",
    name: "Self-Locking Boxes",
    slug: "self-locking-boxes",
    categoryId: "die-cut-boxes",
    categoryName: "Die-Cut Boxes",
    image: "/Product/items/real-self-locking-boxes.png",
    fallbackImage: "/home/product-categories/die-cut-boxes.png",
    shortDescription: "Tape-free assemble boxes featuring interlocking tabs and bottom folds that lock securely under weight.",
    fullDescription: "Engineered to drastically speed up fulfillment assembly. These boxes click together with firm finger pressure and remain securely locked throughout vibration and shipping cycles without using glue or plastic adhesive tapes.",
    specifications: {
      plyRating: "3-Ply / 5-Ply",
      fluteType: "B / C / E Flute",
      assemblyMethod: "100% Tape-Free Mechanical Interlock",
      loadCapacity: "Up to 20 kg",
      applications: ["E-commerce Warehousing", "Automotive Spare Parts", "Medical Diagnostics", "Hardware Tools"],
    },
    keyFeatures: [
      "Saves up to 60% packing time compared to tape-sealed RSC cartons",
      "Plastic-free closure supports corporate zero-waste sustainability initiatives",
      "Solid bottom lock prevents heavier payloads from dislodging the floor",
      "Smooth modern appearance with clean perimeter lines",
    ],
  },
  {
    id: "handle-boxes",
    name: "Corrugated Handle Boxes",
    slug: "handle-boxes",
    categoryId: "die-cut-boxes",
    categoryName: "Die-Cut Boxes",
    image: "/Product/items/real-corrugated-handle-boxes.png",
    fallbackImage: "/home/product-categories/die-cut-boxes.png",
    shortDescription: "Portable die-cut packaging equipped with integrated or plastic snap handles for effortless consumer carrying.",
    fullDescription: "Designed for take-home convenience and retail retail gifts. We produce integrated die-cut handle cutouts with folded comfort rims or reinforce top panels for heavy-duty plastic handle insertions.",
    specifications: {
      plyRating: "3-Ply / 5-Ply",
      fluteType: "B-Flute / BC-Flute",
      handleType: "Integrated die-cut kraft handle / Molded ergonomic clip handle",
      loadCapacity: "8 kg – 18 kg",
      customPrinting: "Branded retail flexography",
      applications: ["Sweet & Confectionery Gift Packs", "Bottled Beverages", "Light Tools", "Retail Takeaway"],
    },
    keyFeatures: [
      "Eliminates the need for external secondary shopping bags",
      "Ergonomic handle cutouts prevent finger strain under full load",
      "Reinforced top score lines distribute carrying tension across the carton body",
      "High visual appeal for festive and seasonal retail gifting",
    ],
  },
  {
    id: "auto-bottom-boxes",
    name: "Auto-Bottom Crash Lock Boxes",
    slug: "auto-bottom-boxes",
    categoryId: "die-cut-boxes",
    categoryName: "Die-Cut Boxes",
    image: "/Product/items/auto-bottom-boxes.png",
    fallbackImage: "/home/product-categories/die-cut-boxes.png",
    shortDescription: "Pre-glued folding cartons whose base snaps into place automatically when pushed open, cutting assembly time to seconds.",
    fullDescription: "Our crash lock auto-bottom boxes feature factory pre-glued diagonal base flaps. Warehouse pickers simply push opposite corners together and the base instantly locks into a flat, rigid floor ready for product insertion.",
    specifications: {
      plyRating: "3-Ply / Micro-Flute",
      fluteType: "E-Flute / B-Flute",
      assemblySpeed: "Under 2 seconds per box",
      closureType: "Auto-Lock Base + Top Tuck Flap",
      applications: ["High-Velocity E-Commerce", "Cosmetics Warehouses", "Pharmaceutical Fulfillment", "Electronics"],
    },
    keyFeatures: [
      "Fastest assembly design in the packaging industry",
      "Heavy-duty bottom glue seams resist vertical breakout",
      "Compact flat storage saves valuable warehouse staging area",
      "Available with adhesive strip closures for tamper-resistant sealing",
    ],
  },

  // ==========================================
  // Category 4: Industrial Packaging
  // ==========================================
  {
    id: "heavy-duty-industrial-boxes",
    name: "Heavy-Duty Industrial Boxes",
    slug: "heavy-duty-industrial-boxes",
    categoryId: "industrial-packaging",
    categoryName: "Industrial Packaging",
    image: "/Product/items/heavy-duty-industrial-shipping-box.png",
    fallbackImage: "/home/product-categories/industrial-packaging.png",
    shortDescription: "Reinforced multi-wall corrugated containers engineered to carry dense, heavy equipment components and casting parts.",
    fullDescription: "Heavy-duty corrugated containers designed specifically for foundries, precision machine shops, and equipment manufacturers. Fabricated with high-grammage virgin kraft liners and heavy fluting mediums to provide massive stacking and impact resilience.",
    specifications: {
      plyRating: "5-Ply / 7-Ply Heavy Duty",
      fluteType: "BC / AAC Triple Flute",
      burstingStrength: "20 – 35 kg/cm²",
      loadCapacity: "50 kg to 200 kg",
      closureType: "Steel wire stitching with corner angle reinforcements",
      applications: ["Castings & Forgings", "Electric Motors & Pumps", "Fasteners & Hardware", "Industrial Automation Parts"],
    },
    keyFeatures: [
      "Engineered to withstand intense point-load pressures",
      "Reinforced corner seams prevent bursting under heavy transit shocks",
      "Treated with water-resistant sizing against warehouse humidity",
      "Significant weight savings over wooden crates lowers freight cost",
    ],
  },
  {
    id: "engineering-component-boxes",
    name: "Engineering Component Boxes",
    slug: "engineering-component-boxes",
    categoryId: "industrial-packaging",
    categoryName: "Industrial Packaging",
    image: "/Product/items/engineering-component-boxes.png",
    fallbackImage: "/home/product-categories/industrial-packaging.png",
    shortDescription: "Custom fitted packaging solutions designed with internal protective buffers for delicate machined components.",
    fullDescription: "High-precision mechanical gears, shafts, bearings, and hydraulic components require packaging that keeps critical surfaces scratch-free. We supply engineering boxes integrated with custom die-cut inner supports, honeycomb cushions, or anti-corrosion barrier coatings.",
    specifications: {
      plyRating: "5-Ply / 7-Ply",
      internalProtection: "Die-cut corrugated cradles & foam inserts",
      corrosionProtection: "VCI paper compatibility & anti-oil barrier",
      applications: ["Precision Bearing Sets", "Hydraulic Valves & Cylinders", "Aerospace Metal Spares", "CNC Machined Assemblies"],
    },
    keyFeatures: [
      "Custom internal fixtures immobilize parts during rough transit",
      "VCI and oil-repellent liner treatments protect bare metal surfaces",
      "Stackable up to 5-high without sidewall deformation",
      "Reusable for closed-loop vendor replenishment lines",
    ],
  },
  {
    id: "automobile-component-boxes",
    name: "Automobile Component Boxes",
    slug: "automobile-component-boxes",
    categoryId: "industrial-packaging",
    categoryName: "Industrial Packaging",
    image: "/Product/items/automobile-component-boxes.png",
    fallbackImage: "/home/product-categories/industrial-packaging.png",
    shortDescription: "Automotive OEM tier-1 compliant shipping boxes designed for shock absorption, oil resistance, and automated kitting.",
    fullDescription: "Engineered to satisfy stringent automotive packaging standards (including AIAG and VDA recommendations). These boxes hold brake discs, alternators, shock absorbers, and wire harnesses safely across long logistics corridors.",
    specifications: {
      plyRating: "5-Ply Heavy Wall",
      fluteType: "BC Flute",
      oilResistance: "Polymer-coated liner preventing oil bleed-through",
      loadCapacity: "30 kg to 80 kg",
      applications: ["Brake Drums & Rotors", "Clutch Assemblies", "Headlight Enclosures", "Suspension Hardware"],
    },
    keyFeatures: [
      "Strict dimensional uniformity for automated robotic pack lines",
      "Barrier coated to prevent greasy component oils from weakening board",
      "High Edge Crush Resistance (ECT) for container floor stacking",
      "Available with custom printed inventory barcodes and part numbering",
    ],
  },
  {
    id: "pallet-boxes",
    name: "Corrugated Pallet Boxes (Gaylords)",
    slug: "pallet-boxes",
    categoryId: "industrial-packaging",
    categoryName: "Industrial Packaging",
    image: "/Product/items/real-pallet-gaylord-boxes.png",
    fallbackImage: "/home/product-categories/industrial-packaging.png",
    shortDescription: "Large-capacity bulk pallet containers tailored to standard 1200x1000mm and 1200x800mm industrial pallet footprints.",
    fullDescription: "Aavrit Bulk Pallet Boxes (often termed Gaylords or Octabins) are mammoth triple-wall corrugated containers fitted directly onto wooden or plastic pallets. Ideal for loose plastic granules, raw chemicals, automotive stampings, and export freight.",
    specifications: {
      plyRating: "7-Ply Heavy Triple Wall",
      footprint: "Standard 1200x1000 mm / 1200x800 mm or custom sizes",
      loadCapacity: "Up to 500 kg+",
      internalVolume: "Up to 1.5 cubic meters",
      applications: ["Plastic Resin Pellets", "Bulk Automotive Stampings", "Preforms & Caps", "Air & Ocean Cargo Consolidation"],
    },
    keyFeatures: [
      "Replaces multiple smaller cartons with a single bulk unit",
      "Collapsible design returns flat for return logistics",
      "Option for integrated drop-down side door for easy unloading",
      "Enormous top load capacity for double-stacking in warehouses",
    ],
  },
  {
    id: "industrial-partitions",
    name: "Industrial Partitions & Dividers",
    slug: "industrial-partitions",
    categoryId: "industrial-packaging",
    categoryName: "Industrial Packaging",
    image: "/Product/items/real-industrial-partitions-dividers.png",
    fallbackImage: "/home/product-categories/industrial-packaging.png",
    shortDescription: "Interlocking corrugated slot dividers that separate individual components to prevent metal-on-metal or glass contact.",
    fullDescription: "Custom engineered partition matrixes made from sturdy corrugated board or solid fiberboard. Individual compartments cushion each component, preventing abrasions, denting, and rattle during transit.",
    specifications: {
      plyRating: "3-Ply / 5-Ply or Heavy Solid Board",
      cellConfiguration: "Custom 4 to 48 cells per matrix",
      heightRange: "50 mm to 600 mm",
      applications: ["Glass Bottles & Vials", "Pistons & Precision Bushings", "Electronic Transformers", "Painted Automotive Trim"],
    },
    keyFeatures: [
      "Pre-assembled collapsible cells open immediately for fast box insertion",
      "Prevents product-to-product contact and scratching during transit",
      "Custom cell dimensions matched to exact product diameters",
      "100% recyclable alternative to polystyrene and bubble wrap",
    ],
  },

  // ==========================================
  // Category 5: Food Packaging
  // ==========================================
  {
    id: "food-boxes",
    name: "Food-Grade Corrugated Boxes",
    slug: "food-boxes",
    categoryId: "food-packaging",
    categoryName: "Food Packaging",
    image: "/Product/items/food-boxes.png",
    fallbackImage: "/home/product-categories/food-packaging.png",
    shortDescription: "Hygienic secondary packaging boxes manufactured from certified non-toxic kraft paper for processed food products.",
    fullDescription: "Produced in our clean manufacturing facility using certified food-safe adhesives and odor-free, non-toxic water-based inks. Engineered to transport packaged biscuits, noodles, confectionery, and dairy dry goods without odor contamination.",
    specifications: {
      plyRating: "3-Ply / 5-Ply",
      foodSafetyStandards: "Non-toxic food grade certified raw materials",
      odorLevel: "Zero residual ink odor or adhesive smell",
      closureType: "Center seam RSC",
      applications: ["Biscuits & Confectionery", "Spices & Condiments", "Cereal & Grains", "Packaged Snacks"],
    },
    keyFeatures: [
      "100% compliant with food safety packaging guidelines",
      "Cleanroom inspected to ensure zero foreign matter contamination",
      "High tensile burst strength prevents bulging on store shelves",
      "Crisp flexographic printing showcases food brand quality",
    ],
  },
  {
    id: "bakery-boxes",
    name: "Corrugated Bakery & Cake Boxes",
    slug: "bakery-boxes",
    categoryId: "food-packaging",
    categoryName: "Food Packaging",
    image: "/Product/items/bakery-boxes.png",
    fallbackImage: "/home/product-categories/food-packaging.png",
    shortDescription: "Sturdy grease-resistant bakery boxes with easy-access fold down front walls and elegant locking tabs.",
    fullDescription: "Unlike flimsy paperboard cake boxes, our corrugated bakery boxes provide structural rigidity that protects tiered celebratory cakes, heavy pastry batches, and artisanal bread from being crushed during courier transport.",
    specifications: {
      plyRating: "3-Ply Micro E-Flute / F-Flute",
      interiorCoating: "Grease-resistant barrier lining available",
      closureType: "Front drop-down flap with tuck-in lock tabs",
      customPrinting: "Full exterior pastel or rich flexo branding",
      applications: ["Celebration Cakes", "Artisanal Bread", "Cupcake Sets", "Pastry Collections"],
    },
    keyFeatures: [
      "Drop-down front flap enables smooth horizontal cake removal",
      "Greaseproof interior barrier prevents unsightly butter/oil spots",
      "E-flute corrugated rigidity prevents top lid sagging onto decorations",
      "Flat pack storage saves crucial bakery counter space",
    ],
  },
  {
    id: "pizza-boxes",
    name: "Corrugated Pizza Boxes",
    slug: "pizza-boxes",
    categoryId: "food-packaging",
    categoryName: "Food Packaging",
    image: "/Product/items/real-corrugated-pizza-boxes.png",
    fallbackImage: "/home/product-categories/food-packaging.png",
    shortDescription: "Steam-vented kraft corrugated pizza boxes designed to keep crusts crisp and retain piping hot temperatures.",
    fullDescription: "Designed for commercial pizzerias and restaurant delivery chains. Engineered with strategic rear steam vents that release moisture vapor to prevent soggy crusts while retaining delicious baking heat during motorcycle delivery runs.",
    specifications: {
      plyRating: "3-Ply E-Flute / B-Flute",
      heatRetention: "Excellent thermal insulation up to 45 minutes",
      ventilation: "Precision punched dual rear steam vents",
      standardSizes: "7 inch, 9 inch, 12 inch, 14 inch, 16 inch square",
      applications: ["Quick Service Restaurants", "Pizza Delivery Chains", "Garlic Bread & Finger Food Kits"],
    },
    keyFeatures: [
      "Strategic steam vents keep crust crisp without heat loss",
      "Food-safe certified liners with zero chemical leaching",
      "Strong corners prevent lid collapse when stacked 5-high in delivery bags",
      "Custom vibrant lid branding printed with vegetable oil inks",
    ],
  },
  {
    id: "fruit-boxes",
    name: "Ventilated Fruit & Produce Boxes",
    slug: "fruit-boxes",
    categoryId: "food-packaging",
    categoryName: "Food Packaging",
    image: "/Product/items/real-ventilated-fruit-produce-boxes.png",
    fallbackImage: "/home/product-categories/food-packaging.png",
    shortDescription: "Moisture-resistant agricultural harvest boxes with ventilation slots and stacking lugs for cold-storage shipping.",
    fullDescription: "Agricultural packaging engineered specifically for the fresh fruit and vegetable export industry. Featuring multi-point ventilation slots for cold-chain forced air circulation, hydrophobic kraft coatings to endure high humidity, and interlock stacking tabs.",
    specifications: {
      plyRating: "5-Ply Heavy Duty Agricultural Board",
      moistureTreatment: "Wax cascade or hydrophobic sizing on all liners",
      ventilationSlots: "Precision airflow cutouts along sidewalls",
      stackingLoad: "Engineered for 8-high pallet stacking in 2°C cold storage",
      applications: ["Mango & Apple Exports", "Citrus & Oranges", "Grapes & Berries", "Exotic Vegetables & Herbs"],
    },
    keyFeatures: [
      "Retains up to 90% compressive strength in 95% relative humidity cold storage",
      "Side airflow cutouts accelerate cooling rates in pre-cooling chambers",
      "Interlocking corner lugs prevent pallet shifting on bumpy farm roads",
      "Smooth inner liners prevent fruit skin abrasion and bruising",
    ],
  },
  {
    id: "fmcg-boxes",
    name: "FMCG Master Shipper Cartons",
    slug: "fmcg-boxes",
    categoryId: "food-packaging",
    categoryName: "Food Packaging",
    image: "/Product/items/real-fmcg-master-shipper-cartons.png",
    fallbackImage: "/home/product-categories/food-packaging.png",
    shortDescription: "High-volume master shipper cartons built for automated FMCG beverage, confectionery, and grocery pack lines.",
    fullDescription: "High-speed consumer goods manufacturing requires carton boxes with flawless score lines, exact square cutouts, and uniform glue joints. Our FMCG cartons run seamlessly on high-speed case erectors without jamming or line pauses.",
    specifications: {
      plyRating: "3-Ply / 5-Ply",
      fluteType: "B-Flute / C-Flute",
      manufacturingSpeed: "High volume dedicated manufacturing runs",
      applications: ["Bottled Beverages", "Dry Packed Groceries", "Personal Care & Soaps", "Edible Oils"],
    },
    keyFeatures: [
      "Rigid dimensional tolerance ensures zero line halts on automatic case packers",
      "High crush resistance for multi-tier warehouse pallet racking",
      "Custom barcode and batch numbering zones with high ink contrast",
      "100% recyclable, bio-sourced, and sustainable kraft material",
    ],
  },

  // ==========================================
  // Category 6: E-commerce Packaging
  // ==========================================
  {
    id: "courier-boxes",
    name: "Tamper-Evident Courier Boxes",
    slug: "courier-boxes",
    categoryId: "ecommerce-packaging",
    categoryName: "E-commerce Packaging",
    image: "/Product/items/real-tamper-evident-courier-boxes.png",
    fallbackImage: "/home/product-categories/ecommerce-packaging.png",
    shortDescription: "Secure e-commerce delivery cartons with high-bond adhesive peel strips and integrated easy-open tear tabs.",
    fullDescription: "Built to eliminate courier transit theft and reduce packing time. Features a pressure-sensitive hot melt adhesive strip that bonds permanently upon closure. Recipients easily open the carton via an integrated perforated tear strip.",
    specifications: {
      plyRating: "3-Ply Rigid Kraft",
      fluteType: "B-Flute / E-Flute",
      sealingMethod: "High-bond peel & seal adhesive strip",
      openingMethod: "Perforated tear tape",
      security: "Tamper-evident structural tear design",
      applications: ["Direct-to-Consumer (DTC)", "High-Value Electronics", "Fashion & Apparel", "Cosmetics Delivery"],
    },
    keyFeatures: [
      "No packing tape or glue required at the fulfillment bench",
      "Immediate visual evidence if unauthorized opening is attempted",
      "Perforated red or kraft tear-strip gives a frustration-free unboxing",
      "Compact flat packing minimizes staging footprint",
    ],
  },
  {
    id: "shipping-boxes",
    name: "Standard E-commerce Shipping Boxes",
    slug: "shipping-boxes",
    categoryId: "ecommerce-packaging",
    categoryName: "E-commerce Packaging",
    image: "/Product/items/real-standard-ecommerce-shipping-boxes.png",
    fallbackImage: "/home/product-categories/ecommerce-packaging.png",
    shortDescription: "Optimized dimensional shipping cartons sized to minimize volumetric freight penalties on parcel networks.",
    fullDescription: "Specifically calibrated to major parcel carrier billing weight tiers. These sturdy brown shipping boxes provide optimal interior volume while avoiding expensive DIM weight penalties on courier networks.",
    specifications: {
      plyRating: "3-Ply / 5-Ply",
      fluteType: "B-Flute / C-Flute",
      weightOptimization: "Calibrated to prevent volumetric weight surcharges",
      burstingStrength: "10 – 18 kg/cm²",
      applications: ["Online Retail Hubs", "Marketplace Sellers", "Logistics 3PL Providers", "Book & Media Dispatch"],
    },
    keyFeatures: [
      "Standardized modular sizes match parcel locker and van dimensions",
      "Durable kraft exterior liner resists conveyor belt scuffing",
      "Strong compression rating withstands stacking in courier delivery vans",
      "Quick assembly for high-volume picking operations",
    ],
  },
  {
    id: "ecommerce-mailer-boxes",
    name: "E-commerce Mailer Boxes",
    slug: "ecommerce-mailer-boxes",
    categoryId: "ecommerce-packaging",
    categoryName: "E-commerce Packaging",
    image: "/Product/items/mailer-boxes.png",
    fallbackImage: "/home/product-categories/ecommerce-packaging.png",
    shortDescription: "Premium presentation mailer boxes engineered with clean aesthetic folds for subscription and luxury online deliveries.",
    fullDescription: "Upgrade your online customer experience. Our corrugated mailer boxes combine neat front tuck wings, sharp clean score lines, and high-quality kraft or white board finishes for an unforgettable first impression upon opening.",
    specifications: {
      plyRating: "3-Ply Single Wall",
      fluteType: "E-Flute / B-Flute",
      customPrinting: "Full exterior & interior high-def print options",
      applications: ["Subscription Boxes", "Jewelry & Watch Outers", "Designer Footwear", "Gourmet Coffee & Tea Deliveries"],
    },
    keyFeatures: [
      "Creates an engaging unboxing experience that customers share online",
      "Smooth interior surface ideal for custom tissue paper and branded stickers",
      "Precision cut tuck-in flaps keep the lid securely closed in transit",
      "100% recyclable, compostable, and plastic-free",
    ],
  },
  {
    id: "ecommerce-cartons",
    name: "Heavy-Duty E-commerce Cartons",
    slug: "ecommerce-cartons",
    categoryId: "ecommerce-packaging",
    categoryName: "E-commerce Packaging",
    image: "/Product/items/heavy-duty-ecommerce-shipping-box.png",
    fallbackImage: "/home/product-categories/ecommerce-packaging.png",
    shortDescription: "Multi-item order consolidation master cartons designed to safely ship combined online shopping baskets.",
    fullDescription: "Engineered for 3PL warehouses and multi-brand marketplaces that pack mixed-merchandise orders into a single consolidated parcel. Reinforced sidewalls protect delicate glassware, books, and electronics packed together.",
    specifications: {
      plyRating: "5-Ply Double Wall",
      fluteType: "BC-Flute",
      burstingStrength: "16 – 22 kg/cm²",
      loadCapacity: "Up to 30 kg",
      applications: ["Supermarket Grocery Delivery", "Multi-Item Marketplace Orders", "Home Goods Fulfillment"],
    },
    keyFeatures: [
      "Thick double-wall protection cushions against multi-item collisions",
      "High puncture resistance protects against sharp product edges",
      "Pre-printed address label, barcode, and return label alignment guides",
      "Reliable performance through automated sortation chutes",
    ],
  },
  {
    id: "self-locking-shipping-boxes",
    name: "Returnable Self-Locking Shipping Boxes",
    slug: "self-locking-shipping-boxes",
    categoryId: "ecommerce-packaging",
    categoryName: "E-commerce Packaging",
    image: "/Product/items/real-returnable-self-locking-shipping-boxes.png",
    fallbackImage: "/home/product-categories/ecommerce-packaging.png",
    shortDescription: "Dual adhesive strip returnable shipping boxes that allow customers to reuse the original box for hassle-free returns.",
    fullDescription: "The ultimate solution for apparel and footwear e-commerce where returns are common. Engineered with two separate adhesive tape strips and a central tear-strip. The customer opens via the tear-strip, and if needed, seals the box back up with the second adhesive strip.",
    specifications: {
      plyRating: "3-Ply / 5-Ply",
      adhesiveStrips: "Dual hot-melt peel & seal strips (Send + Return)",
      openingTab: "Perforated easy-pull center tear strip",
      sustainability: "Reusable box saves secondary packaging in return cycle",
      applications: ["Fashion & Footwear E-commerce", "Apparel Try-at-Home Services", "Electronics Warranty Swaps"],
    },
    keyFeatures: [
      "Encourages sustainable return loops without needing new boxes",
      "Increases customer loyalty with effortless return convenience",
      "Secure adhesive withstands both forward and reverse transit trips",
      "Eliminates messy customer re-taping with packaging tape",
    ],
  },
];
