export interface MachineStep {
  step: string;
  title: string;
  description: string;
}

export interface MachineRolePoint {
  title: string;
  description: string;
}

export interface MachineFAQ {
  question: string;
  answer: string;
}

export interface MachineGalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface MachineItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  purpose: string;
  roleSummary: string;
  image: string;
  highlights: string[];
  workingSteps: MachineStep[];
  rolePoints: MachineRolePoint[];
  gallery: MachineGalleryImage[];
  faqs: MachineFAQ[];
  seo: {
    title: string;
    description: string;
  };
}

export const MACHINERY_DATA: MachineItem[] = [
  {
    id: "machine-01",
    slug: "corrugation-machine",
    name: "Automatic Corrugation Machine",
    category: "Board Production & Fluting",
    shortDescription:
      "Continuous industrial corrugator combining kraft paper reels and fluting medium to form high-strength corrugated board sheets.",
    fullDescription:
      "The automatic corrugation machine is the primary manufacturing unit in our plant. It unrolls multiple rolls of industrial kraft paper, heats and conditions the medium, passes it through high-precision fluting rollers to shape the wave structure, applies starch adhesive, and bonds it with flat liner boards to produce uniform 3-ply, 5-ply, and 7-ply corrugated board.",
    purpose:
      "To produce continuous, flat, and dimensionally stable corrugated cardboard sheets with consistent flute geometry, bonding integrity, and high edge-crush resistance.",
    roleSummary:
      "The corrugation line establishes the structural foundation of every box, determining its stacking strength, cushioning properties, and load-bearing endurance.",
    image: "/Machinery/corrugation-machine.png",
    highlights: [
      "Continuous multi-reel unwind stands with pneumatic tension control",
      "Steam-heated corrugating rolls for uniform wave formation",
      "Starch-based eco-friendly adhesive circulation system",
      "In-line automated cutoff and stacking for clean sheet delivery",
    ],
    workingSteps: [
      {
        step: "01",
        title: "Paper Reel Unwinding & Pre-Heating",
        description:
          "Heavy kraft paper rolls are mounted on unwind stands and passed through steam pre-heaters to balance moisture and temperature.",
      },
      {
        step: "02",
        title: "Flute Medium Shaping",
        description:
          "The inner paper layer is fed between heated corrugated rollers that press it into regular fluted wave profiles (B, C, or E flute).",
      },
      {
        step: "03",
        title: "Starch Adhesive Application",
        description:
          "Starch adhesive is precisely applied along the tips of each flute crest using calibrated applicator rolls.",
      },
      {
        step: "04",
        title: "Liner Bonding Under Pressure",
        description:
          "Flat top and bottom liner sheets are pressed firmly against the glued flute tips to form the corrugated web.",
      },
      {
        step: "05",
        title: "Drying & Curing Section",
        description:
          "The continuous board travels across a steam-heated drying bed to cure the starch bond and establish rigid board flatness.",
      },
      {
        step: "06",
        title: "Sheet Shearing & Stacking",
        description:
          "Rotary cut-off knives shear the continuous board into specified sheet dimensions before automatic stacking.",
      },
    ],
    rolePoints: [
      {
        title: "Foundational Board Rigidity",
        description:
          "Produces the raw corrugated sheets that determine the compressive strength and impact resistance of all finished cartons.",
      },
      {
        title: "Flexible Ply & Flute Production",
        description:
          "Supports single-wall (3-ply), double-wall (5-ply), and triple-wall (7-ply) configurations tailored to light retail or heavy export needs.",
      },
      {
        title: "Flat Surface for Downstream Converting",
        description:
          "Produces consistently flat, warp-free sheets that feed smoothly into high-speed printing and die-cutting machines.",
      },
      {
        title: "Certified Burst & Edge Strength",
        description:
          "Maintains uniform glue lines across the entire board width, preventing layer delamination under humid or high-load transit conditions.",
      },
    ],
    gallery: [
      {
        src: "/Machinery/corrugation-machine.png",
        alt: "Automatic Corrugation Machine - Infeed View",
        caption: "Machine Infeed & Flute Section",
      },
      {
        src: "/Machinery/gallery-corrugation-paper.png",
        alt: "Kraft Paper Rolls on Mill Reel Stand",
        caption: "Reel Loading & Pre-Heating Stand",
      },
      {
        src: "/Machinery/gallery-plant-view.webp",
        alt: "Plant Corrugation Line Operation",
        caption: "Continuous Board Delivery",
      },
    ],
    faqs: [
      {
        question: "What is an automatic corrugation machine used for?",
        answer:
          "An automatic corrugation machine is used to manufacture corrugated cardboard sheets by bonding fluted wave paper between flat liner sheets under heat and pressure.",
      },
      {
        question: "How does the machine create the fluting in corrugated board?",
        answer:
          "The fluting paper is fed through high-precision corrugating rolls with gear-like profiles under steam heat, which molds the paper into consistent wave-like arches.",
      },
      {
        question: "What type of adhesive is applied during corrugation?",
        answer:
          "We use a natural, water-based corn-starch adhesive that is biodegradable, non-toxic, and creates a high-strength chemical bond when heated.",
      },
      {
        question: "Can this machine produce different board thicknesses?",
        answer:
          "Yes. Depending on the roll sets and paper configurations, the line produces 3-ply (single wall), 5-ply (double wall), and heavy-duty 7-ply (triple wall) sheets.",
      },
      {
        question: "How does corrugation quality affect the final box?",
        answer:
          "Consistent flute height and complete glue coverage prevent board crushing, ensuring the finished box delivers its full rated stacking and compression strength.",
      },
    ],
    seo: {
      title: "Automatic Corrugation Machine | AAVRIT PACKAGING",
      description:
        "Learn about the automatic corrugation machine used at AAVRIT PACKAGING to produce 3-ply, 5-ply, and 7-ply corrugated board sheets with consistent flute geometry.",
    },
  },
  {
    id: "machine-02",
    slug: "sheet-pasting-machine",
    name: "Automatic Sheet Pasting Machine",
    category: "Flute Lamination & Ply Bonding",
    shortDescription:
      "Precision lamination unit designed to bond single-face corrugated sheets with printed top liners or multiple board layers.",
    fullDescription:
      "Our automatic sheet pasting machine is dedicated to laminating single-face fluted rolls or sheets with custom-printed kraft paper, duplex paper, or additional corrugated plies. It utilizes finely ground chrome glue rollers to meter a thin, uniform adhesive film across flute crests, ensuring flat, bubble-free lamination for premium printed packaging and heavy multi-wall cartons.",
    purpose:
      "To laminate separate board layers with exact alignment and uniform glue coverage without compressing the delicate flute profile.",
    roleSummary:
      "Enables the production of high-graphic branded boxes and heavy-duty 5-ply/7-ply boards that require multi-sheet adhesive consolidation.",
    image: "/Machinery/sheet-pasting-machine.png",
    highlights: [
      "Precision adhesive metering rollers to avoid over-gluing",
      "Adjustable pressure nip rollers configured for flute protection",
      "Dual sheet registration guides for accurate layer alignment",
      "Continuous output conveyor with weighted curing press",
    ],
    workingSteps: [
      {
        step: "01",
        title: "Layer Feeding & Alignment",
        description:
          "The single-face corrugated base sheet and top liner sheet are loaded into front-stop registration guides.",
      },
      {
        step: "02",
        title: "Adhesive Film Metering",
        description:
          "Chrome applicator rollers pick up adhesive from a tray and apply a micro-thin layer onto the exposed flute arches.",
      },
      {
        step: "03",
        title: "Top Sheet Lamination",
        description:
          "The top liner (kraft or printed duplex) is matched precisely against the glued corrugated sheet at the nip point.",
      },
      {
        step: "04",
        title: "Gentle Compression Bonding",
        description:
          "Rubber-coated pressure rollers press the two substrates together with calibrated force to avoid crushing the flutes.",
      },
      {
        step: "05",
        title: "Takeoff & Curing Stacking",
        description:
          "Laminated sheets travel onto the delivery table and are stacked under flat weights for uniform bond stabilization.",
      },
    ],
    rolePoints: [
      {
        title: "High-Graphic Packaging Lamination",
        description:
          "Allows pre-printed premium duplex sheets to be laminated over corrugated backing for consumer and display boxes.",
      },
      {
        title: "Reinforced Multi-Ply Construction",
        description:
          "Facilitates manual and semi-automatic assembly of extra-thick 5-ply and 7-ply boards for industrial shipping containers.",
      },
      {
        title: "Warp and Bubble Prevention",
        description:
          "Even adhesive spread prevents board warping, bubbling, and surface imperfections that could affect appearance.",
      },
      {
        title: "Custom Short-Run Flexibility",
        description:
          "Ideal for short and medium batch custom box sizes where specialized board combinations are required.",
      },
    ],
    gallery: [
      {
        src: "/Machinery/sheet-pasting-machine.png",
        alt: "Sheet Pasting Machine - Roller Section",
        caption: "Adhesive Metering & Pasting Station",
      },
      {
        src: "/Machinery/gallery-plant-overview.png",
        alt: "Plant Assembly Floor",
        caption: "Lamination Preparation Area",
      },
      {
        src: "/Machinery/gallery-operators.png",
        alt: "Operators Managing Sheet Pasting",
        caption: "Quality Alignment Inspection",
      },
    ],
    faqs: [
      {
        question: "What is the primary function of a sheet pasting machine?",
        answer:
          "It bonds single-face corrugated board with flat paper liners or additional plies to build finished 3-ply, 5-ply, or laminated display sheets.",
      },
      {
        question: "How does the machine avoid crushing the flutes?",
        answer:
          "The compression rollers are precisely adjusted with micrometer screws to match board thickness, providing bonding pressure without flattening the fluting arches.",
      },
      {
        question: "What types of paper can be pasted onto the corrugated sheet?",
        answer:
          "It handles virgin kraft paper, recycled liners, white top liners, and high-gloss multi-color printed duplex boards.",
      },
      {
        question: "Why is uniform adhesive distribution important?",
        answer:
          "Excess adhesive causes paper sogginess and warping, while insufficient adhesive causes delamination. Uniform metering guarantees a durable, flat board.",
      },
      {
        question: "Which industries commonly use pasted laminated boxes?",
        answer:
          "Consumer electronics, footwear, pharmaceuticals, and retail FMCG brands that require sharp exterior branding combined with corrugated protection.",
      },
    ],
    seo: {
      title: "Automatic Sheet Pasting Machine | AAVRIT PACKAGING",
      description:
        "Explore how our automatic sheet pasting machine achieves durable flute bonding and top-liner lamination for corrugated cartons and branded boxes.",
    },
  },
  {
    id: "machine-03",
    slug: "flexo-printer-slotter",
    name: "Multi-Color Flexo Printer Slotter",
    category: "Printing, Branding & Creasing",
    shortDescription:
      "High-speed flexographic printing and slotting equipment that prints graphics, scores fold creases, and cuts box flaps in a single pass.",
    fullDescription:
      "Our multi-color flexo printer slotter combines flexographic printing, precision panel creasing, and slot cutting into a synchronized production line. Corrugated sheets are fed via vacuum lead-edge feeders through inking stations where ceramic anilox rollers transfer water-based inks onto photopolymer plates. Rotary slotting blades and creasing wheels then shape the box body, ensuring ready-to-fold blanks with clean registration.",
    purpose:
      "To print brand graphics, warning labels, and barcodes while simultaneously cutting flaps and scoring crease lines for standard shipping cartons.",
    roleSummary:
      "Serves as the primary converting machine for Regular Slotted Cartons (RSC), delivering clean brand presentation and accurate dimensional creases.",
    image: "/Machinery/flexo-printer-slotter.png",
    highlights: [
      "High-precision ceramic anilox rollers for consistent ink density",
      "Quick-lock photopolymer stereo plate mounting system",
      "Motorized computerized slotting and creasing adjustment",
      "Vacuum suction lead-edge feeder for smooth sheet transport",
    ],
    workingSteps: [
      {
        step: "01",
        title: "Vacuum Lead-Edge Sheet Feeding",
        description:
          "Corrugated blanks are picked up by vacuum suction rollers and fed into the machine with accurate registration.",
      },
      {
        step: "02",
        title: "Inking via Ceramic Anilox Rolls",
        description:
          "Water-based non-toxic inks are metered through doctor blades and ceramic anilox rolls to form an even ink film.",
      },
      {
        step: "03",
        title: "Flexographic Impression Printing",
        description:
          "Mounted flexible photopolymer plates transfer branding, text, barcodes, and symbols onto the moving sheet.",
      },
      {
        step: "04",
        title: "Scoring & Panel Creasing",
        description:
          "Dual creasing wheels press along the sheet to create defined, crack-free fold lines for the top and bottom flaps.",
      },
      {
        step: "05",
        title: "Rotary Slotting & Tab Cutting",
        description:
          "Synchronized circular slotting knives slice the vertical box flaps and trim the manufacturer's joining tab.",
      },
      {
        step: "06",
        title: "Batch Stacking & Delivery",
        description:
          "The fully printed, scored, and slotted box blanks are gathered onto the delivery conveyor for folding and jointing.",
      },
    ],
    rolePoints: [
      {
        title: "High-Efficiency Single-Pass Production",
        description:
          "Executes printing, creasing, and slotting in one workflow, minimizing handling and maximizing dimensional consistency.",
      },
      {
        title: "Branding & Transit Information",
        description:
          "Prints high-contrast company logos, product details, QR codes, and international handling symbols on outer shipping boxes.",
      },
      {
        title: "Clean Fold Lines for Easy Packing",
        description:
          "Generates sharp, uniform creasing lines that allow packaging operators or automatic case erectors to fold boxes quickly.",
      },
      {
        title: "Eco-Friendly Water-Based Inks",
        description:
          "Utilizes quick-drying, non-toxic water-based inks compliant with food packaging and environmental sustainability standards.",
      },
    ],
    gallery: [
      {
        src: "/Machinery/flexo-printer-slotter.png",
        alt: "Multi-Color Flexo Printer Slotter View",
        caption: "Printing & Rotary Slotting Unit",
      },
      {
        src: "/Machinery/gallery-operators.png",
        alt: "Machine Operator Checking Print Registration",
        caption: "Print Quality & Color Calibration",
      },
      {
        src: "/Machinery/gallery-testing.png",
        alt: "Barcode and Print Clarity Inspection",
        caption: "Quality Assurance & Print Audit",
      },
    ],
    faqs: [
      {
        question: "What operations does a flexo printer slotter perform?",
        answer:
          "It prints graphics and text onto corrugated board, scores the horizontal crease lines, and cuts the vertical flap slots in a single continuous pass.",
      },
      {
        question: "What types of boxes are produced on this machine?",
        answer:
          "It is primarily used for Regular Slotted Cartons (RSC), Half Slotted Cartons (HSC), full overlap shipping boxes, and master transit cartons.",
      },
      {
        question: "What kind of ink is used in flexographic box printing?",
        answer:
          "We use water-based, non-hazardous inks that penetrate kraft paper fibers cleanly, dry rapidly, and are safe for food and e-commerce packaging.",
      },
      {
        question: "How does the machine maintain accurate color registration?",
        answer:
          "Independent printing cylinders with computerized fine-tuning align each color plate to ensure sharp borders without color bleeding.",
      },
      {
        question: "How do crease wheels prevent paper tearing?",
        answer:
          "The creasing rings have profiled radii that gently compress the flutes without fracturing the outer liner paper, ensuring clean 90-degree folds.",
      },
    ],
    seo: {
      title: "Multi-Color Flexo Printer Slotter | AAVRIT PACKAGING",
      description:
        "Discover how our Multi-Color Flexo Printer Slotter delivers high-speed printing, creasing, and slotting for durable corrugated shipping cartons.",
    },
  },
  {
    id: "machine-04",
    slug: "die-cutting-machine",
    name: "Rotary & Flatbed Die-Cutting Machine",
    category: "Precision Die-Cutting & Punching",
    shortDescription:
      "Precision punching machinery utilizing custom steel-rule dies to cut complex box shapes, locking tabs, and ventilation holes.",
    fullDescription:
      "Our rotary and flatbed die-cutting machines handle complex box styles beyond standard rectangular cartons. Using custom-engineered die boards with laser-cut steel knives and creasing rules, the machine presses through corrugated board with high tonnage to stamp out self-locking mailer boxes, display trays, hand-holes, perforated tear-strips, and protective internal partitions.",
    purpose:
      "To produce custom-shaped corrugated packaging, locking tabs, and precision inserts that cannot be fabricated with conventional slotting knives.",
    roleSummary:
      "Crucial for modern e-commerce mailers, retail display trays, agricultural produce boxes, and automotive protective dividers.",
    image: "/Machinery/die-cutting-machine.png",
    highlights: [
      "Custom laser-cut steel rule die tooling for intricate geometries",
      "High-pressure platen impression for clean, burr-free edges",
      "Integrated waste-stripping section to remove interior cutouts",
      "Consistent ±0.5mm cutting tolerance across long production runs",
    ],
    workingSteps: [
      {
        step: "01",
        title: "Die Tooling Mounting & Calibration",
        description:
          "The custom wooden die board fitted with sharp steel knives, rubber ejectors, and scoring rules is secured into the press.",
      },
      {
        step: "02",
        title: "Sheet Feeding & Positioning",
        description:
          "Printed or plain corrugated blanks are fed into the machine and aligned against micro-adjustable side guides.",
      },
      {
        step: "03",
        title: "Platen Compression & Cutting",
        description:
          "The moving platen applies uniform pressure across the die, shearing through the board and stamping precise fold scores.",
      },
      {
        step: "04",
        title: "Automatic Waste Stripping",
        description:
          "Internal offcut pieces such as handle holes, corner notches, and ventilation slits are detached from the blank.",
      },
      {
        step: "05",
        title: "Finished Blank Delivery",
        description:
          "Clean-cut, ready-to-assemble die-cut box blanks are delivered in organized stacks for inspection and dispatch.",
      },
    ],
    rolePoints: [
      {
        title: "Custom Shapes & Locking Tabs",
        description:
          "Enables self-locking tuck-top mailer boxes and crash-lock auto-bottom cartons that assemble without adhesive tape.",
      },
      {
        title: "Ventilation and Handle Openings",
        description:
          "Punches clean hand-holes for ergonomic lifting and precision ventilation holes for fresh produce and agricultural boxes.",
      },
      {
        title: "Internal Partition Manufacturing",
        description:
          "Fabricates slotted dividers and custom board partitions that keep glass bottles, engineering components, and fragile goods safe.",
      },
      {
        title: "Zero-Burr Sharp Edge Quality",
        description:
          "Maintains sharp edge cuts and accurate scoring lines that ensure smooth assembly on automated client packaging lines.",
      },
    ],
    gallery: [
      {
        src: "/Machinery/die-cutting-machine.png",
        alt: "Die-Cutting Machine Operation View",
        caption: "Die-Cutting Platen & Feed Station",
      },
      {
        src: "/Machinery/gallery-plant-view.webp",
        alt: "Die-Cut Blanks on Factory Floor",
        caption: "Precision Box Blank Output",
      },
      {
        src: "/Machinery/gallery-operators.png",
        alt: "Operators Setting Up Die Board",
        caption: "Custom Die Setup & Calibration",
      },
    ],
    faqs: [
      {
        question: "What is a die-cutting machine and why is it needed?",
        answer:
          "A die-cutting machine uses shaped steel blades mounted on a wooden board to stamp out custom box shapes, locking tabs, and curves that standard straight slotters cannot produce.",
      },
      {
        question: "Which box styles require die-cutting?",
        answer:
          "Roll-end tuck mailers, self-locking gift boxes, pizza boxes, fruit trays with ventilation holes, and custom partition inserts.",
      },
      {
        question: "How does the machine create both cuts and folds at the same time?",
        answer:
          "The die board contains two types of rules: sharp cutting blades that cut through the cardboard, and blunt creasing rules that score fold lines without tearing the paper.",
      },
      {
        question: "What is the cutting accuracy of this machine?",
        answer:
          "The equipment maintains tolerances within ±0.5mm, ensuring that interlocking tabs and slots fit together securely every time.",
      },
      {
        question: "What is waste stripping in die-cutting?",
        answer:
          "Waste stripping is the removal of excess offcut cardboard, such as the punch-outs from handle holes and corner cutaways, so the customer receives clean blanks.",
      },
    ],
    seo: {
      title: "Rotary & Flatbed Die-Cutting Machine | AAVRIT PACKAGING",
      description:
        "Learn how our precision die-cutting equipment manufactures custom-shaped mailer boxes, self-locking cartons, and protective internal partitions.",
    },
  },
  {
    id: "machine-05",
    slug: "folder-gluer-stitcher",
    name: "Automatic Folder Gluer & Stitching Machine",
    category: "Box Jointing, Gluing & Stitching",
    shortDescription:
      "Automated box finishing line that folds flat blanks, squares box geometry, and secures manufacturer joints with adhesive or steel stitching.",
    fullDescription:
      "The automatic folder gluer and stitching line represents the final converting step for corrugated cartons. Flat slotted or die-cut blanks are fed into the machine, where glue nozzles apply PVA or hot-melt adhesive along the manufacturer's tab. Synchronized folding belts fold the side panels inward, a squaring section eliminates box distortion (fish-tailing), and an optional wire-stitching head applies heavy-duty staples for industrial crates.",
    purpose:
      "To transform flat corrugated blanks into folded, glued, or stitched cartons that erect easily and maintain strong structural joint integrity.",
    roleSummary:
      "Delivers the final structural joint of the box, ensuring the carton withstands heavy stacking pressure, vibration, and handling without splitting open.",
    image: "/Machinery/folder-gluer-stitcher.png",
    highlights: [
      "High-speed electronic cold adhesive and hot-melt glue dispensing",
      "Computerized squaring section to prevent fish-tailing and skew",
      "Heavy-duty wire stitching head for 5-ply and 7-ply export boxes",
      "Automated counter-ejector for organized bundle strapping",
    ],
    workingSteps: [
      {
        step: "01",
        title: "Hopper Loading & Continuous Feed",
        description:
          "Slotted box blanks are placed in the infeed hopper and drawn individually into the folding track by timed belts.",
      },
      {
        step: "02",
        title: "Joint Tab Adhesive Application",
        description:
          "High-pressure nozzles apply a continuous, measured bead of PVA cold glue or hot-melt adhesive to the manufacturer's joining tab.",
      },
      {
        step: "03",
        title: "Progressive Panel Folding",
        description:
          "Graduated folding belts fold the two outer panels inward by 180 degrees along the pre-scored crease lines.",
      },
      {
        step: "04",
        title: "Squaring & Fish-Tail Correction",
        description:
          "Mechanical squaring pushers align the leading and trailing edges, ensuring corners are square and parallel.",
      },
      {
        step: "05",
        title: "Wire Stitching (For Heavy Plies)",
        description:
          "For heavy 7-ply industrial cartons, a high-speed stitching head drives rust-resistant steel wire staples along the joint.",
      },
      {
        step: "06",
        title: "Compression Curing & Batch Stacking",
        description:
          "Cartons pass under an extended compression conveyor to cure the joint before automatic counter-ejection into bundles.",
      },
    ],
    rolePoints: [
      {
        title: "Structural Joint Reliability",
        description:
          "Ensures the manufacturer's joint—the single most stressed part of an assembled box—holds firmly under high stacking weight.",
      },
      {
        title: "Dual Fastening Options: Glue & Stitch",
        description:
          "Offers clean adhesive joints for retail and food packaging, or galvanized wire stitching for export machinery and heavy industrial freight.",
      },
      {
        title: "Square Geometry for Automated Erecting",
        description:
          "Squaring mechanisms guarantee boxes are perfectly rectangular, allowing them to open smoothly on automated packing lines.",
      },
      {
        title: "Neat Bundling for Efficient Logistics",
        description:
          "Pre-counts finished boxes into bundles (e.g. 20 or 25 units) ready for strapping, palletizing, and clean warehouse storage.",
      },
    ],
    gallery: [
      {
        src: "/Machinery/folder-gluer-stitcher.png",
        alt: "Automatic Folder Gluer Operation",
        caption: "Folding Belts & Jointing Track",
      },
      {
        src: "/Machinery/gallery-operators.png",
        alt: "Operators Monitoring Folding Line",
        caption: "Joint Quality & Compression Check",
      },
      {
        src: "/Machinery/gallery-quality-inspection.png",
        alt: "Counted Bundles Exiting Compression Section",
        caption: "Automated Counter-Ejector & Bundling",
      },
    ],
    faqs: [
      {
        question: "What is the role of an automatic folder gluer in box production?",
        answer:
          "It takes flat, cut cardboard blanks, folds them into cartons along scored creases, and seals the manufacturer's joint with glue or wire staples.",
      },
      {
        question: "When is wire stitching used instead of adhesive?",
        answer:
          "Wire stitching is typically specified for heavy 5-ply and 7-ply boxes, cold-storage containers, and heavy export packaging where moisture or high loads could challenge glue bonds.",
      },
      {
        question: "What is 'fish-tailing' and how does the machine prevent it?",
        answer:
          "'Fish-tailing' occurs when a box folds unevenly, causing misaligned flaps. The machine uses motorized squaring rollers to press edges parallel before the glue sets.",
      },
      {
        question: "What kind of glue is used in the folder gluer?",
        answer:
          "We use industrial PVA cold emulsion glue and specialized hot-melt adhesives that form fiber-tearing bonds within seconds under compression.",
      },
      {
        question: "How are the completed boxes delivered from this machine?",
        answer:
          "Finished flat-folded boxes pass through an extended compression belt to set the bond, then an electronic counter stacks them into neat bundles for strapping.",
      },
    ],
    seo: {
      title: "Automatic Folder Gluer & Stitching Machine | AAVRIT PACKAGING",
      description:
        "Explore how our Automatic Folder Gluer and Wire Stitching line delivers strong, square manufacturer joints for commercial and heavy-duty corrugated cartons.",
    },
  },
  {
    id: "machine-06",
    slug: "slitter-scorer-machine",
    name: "Thin Blade Slitter Scorer Machine",
    category: "Sheet Slitting, Scoring & Creasing",
    shortDescription:
      "High-precision converting machine equipped with ultra-thin tungsten carbide blades and scoring wheels for burr-free sheet cutting and creasing.",
    fullDescription:
      "Our thin blade slitter scorer machine prepares raw corrugated board sheets for converting operations. Utilizing motorized razor-sharp circular tungsten carbide blades with continuous grinding stones, it slices through board without crushing the delicate internal flute arches. Concurrent profile scoring wheels create crisp longitudinal creases that ensure clean, crack-free folding during box assembly.",
    purpose:
      "To trim master board edges cleanly, split wide sheets into exact blank widths, and produce deep, uniform creases without flute deformation.",
    roleSummary:
      "Guarantees that corrugated sheets enter subsequent printing, slotting, and die-cutting stages with 100% flute strength and pristine edge quality.",
    image: "/Machinery/slitter-scorer-machine.png",
    highlights: [
      "Ultra-thin tungsten carbide blades for zero-crush cutting",
      "Automatic pneumatic blade sharpening during operation",
      "Multi-stage scoring wheels for crack-free crease formation",
      "Motorized quick-positioning heads for rapid job changeover",
    ],
    workingSteps: [
      {
        step: "01",
        title: "Master Sheet Infeed",
        description:
          "Corrugated master sheets are aligned and fed smoothly through powered rubber-coated drive rollers.",
      },
      {
        step: "02",
        title: "Initial Pre-Creasing",
        description:
          "Upper and lower pre-scoring rings gently compress the paper surface along intended fold lines to prevent surface cracking.",
      },
      {
        step: "03",
        title: "Deep Profile Scoring",
        description:
          "Secondary profiled scoring wheels deepen the crease, molding the flutes into a sharp, permanent fold hinge.",
      },
      {
        step: "04",
        title: "Thin-Blade Precision Slitting",
        description:
          "Motorized circular razor-thin tungsten blades slice cleanly through the board, producing smooth, burr-free edges.",
      },
      {
        step: "05",
        title: "Sheet Separation & Outfeed",
        description:
          "Trimmed sheets and side scrap trims are cleanly separated, delivering dimensional blanks to the output table.",
      },
    ],
    rolePoints: [
      {
        title: "Preserves 100% of Edge Crush Strength",
        description:
          "Traditional thick blades crush flute edges, reducing board strength. Thin blades slice cleanly without deforming flute walls.",
      },
      {
        title: "Burr-Free and Dust-Free Cut Edges",
        description:
          "Produces clean edges without loose paper fibers or cardboard dust, ensuring smooth operation in downstream printing machines.",
      },
      {
        title: "Crack-Free Deep Creasing",
        description:
          "Ensures deep, accurate creases so boxes fold neatly without tearing the kraft paper liner, even in dry weather.",
      },
      {
        title: "Flexible Dimensions for All Ply Ratings",
        description:
          "Handles delicate 3-ply micro-flutes as well as thick, dense 7-ply heavy industrial board with equal dimensional precision.",
      },
    ],
    gallery: [
      {
        src: "/Machinery/slitter-scorer-machine.png",
        alt: "Thin Blade Slitter Scorer View",
        caption: "Tungsten Blade & Scoring Station",
      },
      {
        src: "/Machinery/gallery-plant-view.webp",
        alt: "Clean Slit Sheets on Production Bed",
        caption: "Accurate Sheet Sizing Output",
      },
      {
        src: "/Machinery/gallery-plant-overview.png",
        alt: "Raw Board Sizing Area",
        caption: "Master Board Converting Station",
      },
    ],
    faqs: [
      {
        question: "Why are thin tungsten blades used instead of traditional knives?",
        answer:
          "Thin tungsten blades are less than 1.5mm thick, allowing them to slice cleanly through cardboard without crushing the fluting structure or generating paper dust.",
      },
      {
        question: "How does the machine prevent the blades from dulling?",
        answer:
          "The machine features automated pneumatic grinding stones that periodically sharpen the rotating blades during production without stopping the line.",
      },
      {
        question: "What is the difference between pre-creasing and deep scoring?",
        answer:
          "Pre-creasing conditions the outer paper fibers, while deep scoring sets the permanent hinge line, preventing the kraft paper from cracking during box folding.",
      },
      {
        question: "Can this machine handle heavy 5-ply and 7-ply corrugated sheets?",
        answer:
          "Yes. Blade pressure and scoring clearances are adjustable to cleanly process 3-ply, 5-ply, and heavy-duty 7-ply board configurations.",
      },
      {
        question: "How does sheet slitting accuracy benefit the customer?",
        answer:
          "Exact sheet dimensions ensure finished boxes match customer interior measurements perfectly and stack evenly on shipping pallets.",
      },
    ],
    seo: {
      title: "Thin Blade Slitter Scorer Machine | AAVRIT PACKAGING",
      description:
        "Learn how our Thin Blade Slitter Scorer produces clean-cut edges and deep, crack-free creases that preserve 100% of corrugated board strength.",
    },
  },
];
