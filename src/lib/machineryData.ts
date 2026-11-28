import { MongoClient, Db } from "mongodb";
import { readFile } from "fs/promises";
import path from "path";
import {
  MACHINERY_DATA,
  MachineItem,
  MachineStep,
  MachineRolePoint,
  MachineGalleryImage,
  MachineFAQ,
} from "@/data/machineryData";

export type {
  MachineItem,
  MachineStep,
  MachineRolePoint,
  MachineGalleryImage,
  MachineFAQ,
};

export interface MachineryBannerData {
  title?: string;
  breadcrumbRoot?: string;
  breadcrumbCurrent?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  characterImage?: string;
  characterAlt?: string;
  dialogueIcon?: string;
  dialogueTitle?: string;
  dialogueSubtext?: string;
  detailBannerImage?: string;
  detailCharacterImage?: string;
  detailDialogueIcon?: string;
  detailDialogueSubtext?: string;
}

export interface MachineryIntroFeature {
  icon?: string;
  title?: string;
  desc?: string;
}

export interface MachineryIntroData {
  badge?: string;
  title?: string;
  highlightText?: string;
  description1?: string;
  description2?: string;
  image?: string;
  imageAlt?: string;
  cardTitle?: string;
  cardBadge?: string;
  cardStat1Value?: string;
  cardStat1Label?: string;
  cardStat2Value?: string;
  cardStat2Label?: string;
  cardStat3Value?: string;
  cardStat3Label?: string;
  cardFootnote?: string;
  features?: MachineryIntroFeature[];
}

export interface MachineryGridHeaderData {
  badge?: string;
  title?: string;
  highlightText?: string;
  subtitle?: string;
}

export interface MachineryWhyMattersBlock {
  icon?: string;
  title?: string;
  description?: string;
}

export interface MachineryWhyMattersData {
  badge?: string;
  title?: string;
  highlightText?: string;
  subtitle?: string;
  blocks?: MachineryWhyMattersBlock[];
}

export interface MachineryCTAItem {
  badge?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  phone?: string;
  phoneLink?: string;
}

export interface MachineryCTAData {
  listing?: MachineryCTAItem;
  detail?: MachineryCTAItem;
}

export interface MachinerySEOData {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  canonicalLink?: string;
  ogImage?: string;
  ogImageAlt?: string;
}

const uri =
  process.env.MONGODB_URI ||
  "mongodb://box-website:Qwaszx%40123@127.0.0.1:27017/box-website?authSource=box-website";
const options = {
  serverSelectionTimeoutMS: 2000,
  connectTimeoutMS: 2000,
};

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromiseWebsiteMachinery: Promise<MongoClient> | undefined;
}

export async function getMongoClient(): Promise<MongoClient> {
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromiseWebsiteMachinery) {
      client = new MongoClient(uri, options);
      global._mongoClientPromiseWebsiteMachinery = client.connect();
    }
    return global._mongoClientPromiseWebsiteMachinery;
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
  const possiblePaths = [
    path.resolve(process.cwd(), "..", "Box-admin", "data", "machinery_cache.json"),
    path.resolve(process.cwd(), "Box-admin", "data", "machinery_cache.json"),
    "d:\\parth\\Box\\Box-admin\\data\\machinery_cache.json",
  ];

  for (const cachePath of possiblePaths) {
    try {
      const content = await readFile(cachePath, "utf-8");
      if (content) return JSON.parse(content);
    } catch (e) {
      // try next
    }
  }
  return null;
}

// 1. Get All Machinery Items
export async function getAllMachinery(): Promise<MachineItem[]> {
  try {
    const db = await getDb();
    if (db) {
      const docs = await db.collection("website_machinery_items").find({}).toArray();
      if (docs && docs.length > 0) {
        return docs.map(({ _id, ...clean }) => clean as MachineItem);
      }
    }
  } catch (e) {
    // Fallback to cache
  }

  const cache = await readAdminCache();
  if (cache?.items && cache.items.length > 0) {
    return cache.items;
  }

  return MACHINERY_DATA;
}

// 2. Get Single Machine by Slug
export async function getMachineBySlug(slug: string): Promise<MachineItem | undefined> {
  try {
    const db = await getDb();
    if (db) {
      const found = await db.collection("website_machinery_items").findOne({ slug });
      if (found) {
        const { _id, ...clean } = found;
        return clean as MachineItem;
      }
    }
  } catch (e) {
    // Fallback to cache
  }

  const cache = await readAdminCache();
  if (cache?.items) {
    const found = cache.items.find((m: any) => m.slug === slug);
    if (found) return found;
  }

  return MACHINERY_DATA.find((m) => m.slug === slug);
}

// 3. Get Machinery Banner
export async function getMachineryBanner(): Promise<MachineryBannerData | null> {
  try {
    const db = await getDb();
    if (db) {
      const doc = await db.collection("website_machinery_settings").findOne({ sectionId: "banner" });
      if (doc) {
        const { _id, ...clean } = doc;
        return clean as MachineryBannerData;
      }
    }
  } catch (e) {
    // Fallback
  }

  const cache = await readAdminCache();
  if (cache?.banner) return cache.banner;

  return null;
}

// 4. Get Machinery Intro
export async function getMachineryIntro(): Promise<MachineryIntroData | null> {
  try {
    const db = await getDb();
    if (db) {
      const doc = await db.collection("website_machinery_settings").findOne({ sectionId: "intro" });
      if (doc) {
        const { _id, ...clean } = doc;
        return clean as MachineryIntroData;
      }
    }
  } catch (e) {
    // Fallback
  }

  const cache = await readAdminCache();
  if (cache?.intro) return cache.intro;

  return null;
}

// 5. Get Grid Header
export async function getMachineryGridHeader(): Promise<MachineryGridHeaderData | null> {
  try {
    const db = await getDb();
    if (db) {
      const doc = await db.collection("website_machinery_settings").findOne({ sectionId: "grid-header" });
      if (doc) {
        const { _id, ...clean } = doc;
        return clean as MachineryGridHeaderData;
      }
    }
  } catch (e) {
    // Fallback
  }

  const cache = await readAdminCache();
  if (cache?.gridHeader) return cache.gridHeader;

  return null;
}

// 6. Get Why Machinery Matters
export async function getMachineryWhyMatters(): Promise<MachineryWhyMattersData | null> {
  try {
    const db = await getDb();
    if (db) {
      const doc = await db.collection("website_machinery_settings").findOne({ sectionId: "why-matters" });
      if (doc) {
        const { _id, ...clean } = doc;
        return clean as MachineryWhyMattersData;
      }
    }
  } catch (e) {
    // Fallback
  }

  const cache = await readAdminCache();
  if (cache?.whyMatters) return cache.whyMatters;

  return null;
}

// 7. Get Machinery CTA
export async function getMachineryCTA(): Promise<MachineryCTAData | null> {
  try {
    const db = await getDb();
    if (db) {
      const doc = await db.collection("website_machinery_settings").findOne({ sectionId: "cta" });
      if (doc) {
        const { _id, ...clean } = doc;
        return clean as MachineryCTAData;
      }
    }
  } catch (e) {
    // Fallback
  }

  const cache = await readAdminCache();
  if (cache?.cta) return cache.cta;

  return null;
}

// 8. Get Machinery SEO
export async function getMachinerySEO(): Promise<MachinerySEOData | null> {
  try {
    const db = await getDb();
    if (db) {
      const doc = await db.collection("website_machinery_settings").findOne({ sectionId: "seo" });
      if (doc) {
        const { _id, ...clean } = doc;
        return clean as MachinerySEOData;
      }
    }
  } catch (e) {
    // Fallback
  }

  const cache = await readAdminCache();
  if (cache?.seo) return cache.seo;

  return null;
}
