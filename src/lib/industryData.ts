import { MongoClient, Db } from "mongodb";
import { readFile } from "fs/promises";
import path from "path";
import { INDUSTRIES_DATA, IndustryDetailData } from "@/data/industriesData";

const uri = process.env.MONGODB_URI || "mongodb://box-website:Qwaszx%40123@127.0.0.1:27017/box-website?authSource=box-website";
const options = {
  serverSelectionTimeoutMS: 2000,
  connectTimeoutMS: 2000,
};

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromiseWebsiteIndustries: Promise<MongoClient> | undefined;
}

export async function getMongoClient(): Promise<MongoClient> {
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromiseWebsiteIndustries) {
      client = new MongoClient(uri, options);
      global._mongoClientPromiseWebsiteIndustries = client.connect();
    }
    return global._mongoClientPromiseWebsiteIndustries;
  } else {
    if (!clientPromise) {
      client = new MongoClient(uri, options);
      clientPromise = client.connect();
    }
    return clientPromise;
  }
}

export async function getDb(): Promise<Db | null> {
  try {
    const mongoClient = await getMongoClient();
    return mongoClient.db("box-website");
  } catch (error) {
    return null;
  }
}

async function readAdminCache(): Promise<any | null> {
  try {
    const cachePath = path.resolve(process.cwd(), "..", "Box-admin", "data", "industries_cache.json");
    const content = await readFile(cachePath, "utf-8");
    return JSON.parse(content);
  } catch (e) {
    return null;
  }
}

// 1. Get All Industries
export async function getAllIndustries(): Promise<any[]> {
  try {
    const db = await getDb();
    if (db) {
      const docs = await db.collection("industries").find({}).toArray();
      if (docs && docs.length > 0) {
        return docs.map(({ _id, ...clean }) => clean);
      }
    }
  } catch (e) {
    // Fallback to cache
  }

  const cache = await readAdminCache();
  if (cache?.items && cache.items.length > 0) {
    return cache.items;
  }

  return INDUSTRIES_DATA;
}

// 2. Get Single Industry by Slug
export async function getIndustryBySlug(slug: string): Promise<any | null> {
  try {
    const db = await getDb();
    if (db) {
      const found = await db.collection("industries").findOne({ slug });
      if (found) {
        const { _id, ...clean } = found;
        return clean;
      }
    }
  } catch (e) {
    // Fallback to cache
  }

  const cache = await readAdminCache();
  if (cache?.items && cache.items.length > 0) {
    const match = cache.items.find((i: any) => i.slug === slug);
    if (match) return match;
  }

  return INDUSTRIES_DATA.find((i) => i.slug === slug) || null;
}

// 3. Get Industries Banner & Mascot
export async function getIndustriesBanner(): Promise<any> {
  const defaultBanner = {
    title: "Industries",
    breadcrumbRoot: "Home",
    breadcrumbCurrent: "Industries",
    backgroundImage: "/Industries/industries_banner_pano.png",
    backgroundImageAlt: "Industries We Serve Banner - AAVRIT PACKAGING",
    characterImage: "/Industries/character_logistics_manager.png",
    characterAlt: "Logistics & Supply Chain Director - AAVRIT PACKAGING",
    dialogueIcon: "🏭",
    dialogueTitle: "Built for Your Industry!",
    dialogueSubtext: "Heavy-duty supply chain packaging for FMCG, Pharma & Auto",
  };

  try {
    const db = await getDb();
    if (db) {
      const found = await db.collection("industry_sections").findOne({ sectionId: "banner" });
      if (found) {
        const { _id, ...clean } = found;
        return clean;
      }
    }
  } catch (e) {
    // Fallback
  }

  const cache = await readAdminCache();
  if (cache?.banner) {
    return cache.banner;
  }

  return defaultBanner;
}

// 4. Get Industries Landing Content (Intro, Why Choose Us, CTA)
export async function getIndustriesLanding(): Promise<any> {
  const defaultLanding = {
    intro: {
      badge: "SECTOR SPECIALIZATION",
      title: "Engineered Packaging for Demanding Supply Chains",
      description1: "From high-speed automated bottling lines to heavy-duty automotive engine transport, standard off-the-shelf corrugated boxes fail under specialized industrial stresses.",
      description2: "At Aavrit Packaging, we formulate bespoke corrugated compositions, calibrated flute geometries, and sector-compliant surface barrier liners engineered around your product's exact weight, transit duration, and storage climate.",
      image: "/home/industries/automotive.jpg",
      bullets: [
        "Calibrated Edge Crush (ECT) & Bursting Test endurance",
        "Automated CNC internal grid partitions & shock pads",
        "Food-grade, ESD anti-static & VCI corrosion protection",
        "Pallet-optimized footprints lowering shipping freight costs",
      ],
    },
    whyChooseUs: {
      badge: "THE AAVRIT ADVANTAGE",
      title: "Why Leading Industries Trust Aavrit Packaging",
      subtitle: "We combine precision German corrugation engineering with rapid local turnaround to protect your margins and eliminate transit damage.",
      reasons: [
        {
          icon: "Ruler",
          title: "Customized Packaging Solutions",
          description: "Every box is designed around the exact physical dimensions, fragility, and stacking parameters of your product.",
        },
        {
          icon: "ShieldCheck",
          title: "Reliable Product Protection",
          description: "Multi-ply board architectures engineered to withstand drop impacts, transit vibrations, and warehouse compression.",
        },
        {
          icon: "Maximize2",
          title: "Flexible Box Sizes & Specs",
          description: "From lightweight single-wall 3-ply mailers to heavy-duty 7-ply export bulk containers without tooling limits.",
        },
        {
          icon: "Printer",
          title: "Printing & Branding Options",
          description: "High-definition 1 to 4 colour flexographic printing for company branding, handling warnings, and scan-ready barcodes.",
        },
        {
          icon: "Truck",
          title: "Transport-Optimized Formats",
          description: "Dimensions calculated to tile seamlessly inside trucks and ocean shipping containers, cutting freight costs.",
        },
        {
          icon: "Layers",
          title: "Industry-Specific Engineering",
          description: "Food-safe adhesives, anti-static ESD coatings, moisture barriers, and custom partitions tailored to sector needs.",
        },
      ],
    },
    cta: {
      title: "Need Custom Packaging Engineered for Your Industry?",
      subtitle: "Speak with our industrial packaging designers to evaluate flute specifications, request CAD dieline samples, or schedule a bulk plant audit.",
      phone: "+91 98765 43210",
      email: "industrial@aavritpackaging.com",
    },
  };

  try {
    const db = await getDb();
    if (db) {
      const found = await db.collection("industry_sections").findOne({ sectionId: "landing" });
      if (found) {
        const { _id, ...clean } = found;
        return clean;
      }
    }
  } catch (e) {
    // Fallback
  }

  const cache = await readAdminCache();
  if (cache?.landing) {
    return cache.landing;
  }

  return defaultLanding;
}
