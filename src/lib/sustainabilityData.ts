import { MongoClient, Db } from "mongodb";
import { readFile } from "fs/promises";
import path from "path";
import {
  DEFAULT_SUSTAINABILITY_DATA,
  SustainabilityBannerData,
  SustainabilityIntroData,
  SustainabilityDifferenceData,
  SustainabilityManufacturingData,
  SustainabilitySolutionsData,
  SustainabilityWasteReductionData,
  SustainabilityFAQsData,
  SustainabilityCTAData,
  SustainabilitySEOData,
  SustainabilityPageData,
} from "@/data/sustainabilityData";

export { DEFAULT_SUSTAINABILITY_DATA };

export type {
  SustainabilityBannerData,
  SustainabilityIntroData,
  SustainabilityDifferenceData,
  SustainabilityManufacturingData,
  SustainabilitySolutionsData,
  SustainabilityWasteReductionData,
  SustainabilityFAQsData,
  SustainabilityCTAData,
  SustainabilitySEOData,
  SustainabilityPageData,
};

// MongoDB Helper
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

async function getDb(): Promise<Db | null> {
  const uri =
    process.env.MONGODB_URI ||
    "mongodb+srv://developerparth10:E2uL4eU8oJ0XvY7d@cluster0.pbl1x.mongodb.net/Box-website?retryWrites=true&w=majority&appName=Cluster0";

  if (!uri) return null;
  if (cachedDb) return cachedDb;

  try {
    if (!cachedClient) {
      cachedClient = new MongoClient(uri);
      await cachedClient.connect();
    }
    cachedDb = cachedClient.db("Box-website");
    return cachedDb;
  } catch (e) {
    return null;
  }
}

async function readAdminCache(): Promise<SustainabilityPageData | null> {
  const possiblePaths = [
    path.resolve(process.cwd(), "..", "Box-admin", "data", "sustainability_cache.json"),
    path.resolve(process.cwd(), "Box-admin", "data", "sustainability_cache.json"),
    "d:\\parth\\Box\\Box-admin\\data\\sustainability_cache.json",
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

// 1. Banner
export async function getSustainabilityBanner(): Promise<SustainabilityBannerData> {
  try {
    const db = await getDb();
    if (db) {
      const doc = await db.collection("website_sustainability_settings").findOne({ sectionId: "banner" });
      if (doc) {
        const { _id, ...clean } = doc;
        return clean as SustainabilityBannerData;
      }
    }
  } catch (e) {}

  const cache = await readAdminCache();
  if (cache?.banner) return cache.banner;
  return DEFAULT_SUSTAINABILITY_DATA.banner!;
}

// 2. Intro
export async function getSustainabilityIntro(): Promise<SustainabilityIntroData> {
  try {
    const db = await getDb();
    if (db) {
      const doc = await db.collection("website_sustainability_settings").findOne({ sectionId: "intro" });
      if (doc) {
        const { _id, ...clean } = doc;
        return clean as SustainabilityIntroData;
      }
    }
  } catch (e) {}

  const cache = await readAdminCache();
  if (cache?.intro) return cache.intro;
  return DEFAULT_SUSTAINABILITY_DATA.intro!;
}

// 3. Difference
export async function getSustainabilityDifference(): Promise<SustainabilityDifferenceData> {
  try {
    const db = await getDb();
    if (db) {
      const doc = await db.collection("website_sustainability_settings").findOne({ sectionId: "difference" });
      if (doc) {
        const { _id, ...clean } = doc;
        return clean as SustainabilityDifferenceData;
      }
    }
  } catch (e) {}

  const cache = await readAdminCache();
  if (cache?.difference) return cache.difference;
  return DEFAULT_SUSTAINABILITY_DATA.difference!;
}

// 4. Manufacturing
export async function getSustainabilityManufacturing(): Promise<SustainabilityManufacturingData> {
  try {
    const db = await getDb();
    if (db) {
      const doc = await db.collection("website_sustainability_settings").findOne({ sectionId: "manufacturing" });
      if (doc) {
        const { _id, ...clean } = doc;
        return clean as SustainabilityManufacturingData;
      }
    }
  } catch (e) {}

  const cache = await readAdminCache();
  if (cache?.manufacturing) return cache.manufacturing;
  return DEFAULT_SUSTAINABILITY_DATA.manufacturing!;
}

// 5. Solutions
export async function getSustainabilitySolutions(): Promise<SustainabilitySolutionsData> {
  try {
    const db = await getDb();
    if (db) {
      const doc = await db.collection("website_sustainability_settings").findOne({ sectionId: "solutions" });
      if (doc) {
        const { _id, ...clean } = doc;
        return clean as SustainabilitySolutionsData;
      }
    }
  } catch (e) {}

  const cache = await readAdminCache();
  if (cache?.solutions) return cache.solutions;
  return DEFAULT_SUSTAINABILITY_DATA.solutions!;
}

// 6. Waste Reduction
export async function getSustainabilityWasteReduction(): Promise<SustainabilityWasteReductionData> {
  try {
    const db = await getDb();
    if (db) {
      const doc = await db.collection("website_sustainability_settings").findOne({ sectionId: "waste-reduction" });
      if (doc) {
        const { _id, ...clean } = doc;
        return clean as SustainabilityWasteReductionData;
      }
    }
  } catch (e) {}

  const cache = await readAdminCache();
  if (cache?.wasteReduction) return cache.wasteReduction;
  return DEFAULT_SUSTAINABILITY_DATA.wasteReduction!;
}

// 7. FAQs
export async function getSustainabilityFAQs(): Promise<SustainabilityFAQsData> {
  try {
    const db = await getDb();
    if (db) {
      const doc = await db.collection("website_sustainability_settings").findOne({ sectionId: "faqs" });
      if (doc) {
        const { _id, ...clean } = doc;
        return clean as SustainabilityFAQsData;
      }
    }
  } catch (e) {}

  const cache = await readAdminCache();
  if (cache?.faqs) return cache.faqs;
  return DEFAULT_SUSTAINABILITY_DATA.faqs!;
}

// 8. CTA
export async function getSustainabilityCTA(): Promise<SustainabilityCTAData> {
  try {
    const db = await getDb();
    if (db) {
      const doc = await db.collection("website_sustainability_settings").findOne({ sectionId: "cta" });
      if (doc) {
        const { _id, ...clean } = doc;
        return clean as SustainabilityCTAData;
      }
    }
  } catch (e) {}

  const cache = await readAdminCache();
  if (cache?.cta) return cache.cta;
  return DEFAULT_SUSTAINABILITY_DATA.cta!;
}

// 9. SEO
export async function getSustainabilitySEO(): Promise<SustainabilitySEOData> {
  try {
    const db = await getDb();
    if (db) {
      const doc = await db.collection("website_sustainability_settings").findOne({ sectionId: "seo" });
      if (doc) {
        const { _id, ...clean } = doc;
        return clean as SustainabilitySEOData;
      }
    }
  } catch (e) {}

  const cache = await readAdminCache();
  if (cache?.seo) return cache.seo;
  return DEFAULT_SUSTAINABILITY_DATA.seo!;
}
