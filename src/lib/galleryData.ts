import { MongoClient, Db } from "mongodb";
import { readFile } from "fs/promises";
import path from "path";
import {
  DEFAULT_GALLERY_DATA,
  DEFAULT_GALLERY_CATEGORIES,
  GalleryBannerData,
  GalleryItemDetails,
  GalleryShowcaseData,
  GalleryCTAData,
  GallerySEOData,
  GalleryPageData,
} from "@/data/galleryData";

export { DEFAULT_GALLERY_DATA, DEFAULT_GALLERY_CATEGORIES };

export type {
  GalleryBannerData,
  GalleryItemDetails,
  GalleryShowcaseData,
  GalleryCTAData,
  GallerySEOData,
  GalleryPageData,
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

async function readAdminCache(): Promise<GalleryPageData | null> {
  const possiblePaths = [
    path.resolve(process.cwd(), "..", "Box-admin", "data", "gallery_cache.json"),
    path.resolve(process.cwd(), "Box-admin", "data", "gallery_cache.json"),
    "d:\\parth\\Box\\Box-admin\\data\\gallery_cache.json",
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
export async function getGalleryBanner(): Promise<GalleryBannerData> {
  try {
    const db = await getDb();
    if (db) {
      const doc = await db.collection("website_gallery_settings").findOne({ sectionId: "banner" });
      if (doc) {
        const { _id, ...clean } = doc;
        return clean as GalleryBannerData;
      }
    }
  } catch (e) {}

  const cache = await readAdminCache();
  if (cache?.banner) return cache.banner;
  return DEFAULT_GALLERY_DATA.banner!;
}

// 2. Showcase / Items
export async function getGalleryShowcase(): Promise<GalleryShowcaseData> {
  try {
    const db = await getDb();
    if (db) {
      const doc = await db.collection("website_gallery_settings").findOne({ sectionId: "showcase" });
      if (doc) {
        const { _id, ...clean } = doc;
        return clean as GalleryShowcaseData;
      }
    }
  } catch (e) {}

  const cache = await readAdminCache();
  if (cache?.showcase) return cache.showcase;
  return DEFAULT_GALLERY_DATA.showcase!;
}

// 3. CTA
export async function getGalleryCTA(): Promise<GalleryCTAData> {
  try {
    const db = await getDb();
    if (db) {
      const doc = await db.collection("website_gallery_settings").findOne({ sectionId: "cta" });
      if (doc) {
        const { _id, ...clean } = doc;
        return clean as GalleryCTAData;
      }
    }
  } catch (e) {}

  const cache = await readAdminCache();
  if (cache?.cta) return cache.cta;
  return DEFAULT_GALLERY_DATA.cta!;
}

// 4. SEO
export async function getGallerySEO(): Promise<GallerySEOData> {
  try {
    const db = await getDb();
    if (db) {
      const doc = await db.collection("website_gallery_settings").findOne({ sectionId: "seo" });
      if (doc) {
        const { _id, ...clean } = doc;
        return clean as GallerySEOData;
      }
    }
  } catch (e) {}

  const cache = await readAdminCache();
  if (cache?.seo) return cache.seo;
  return DEFAULT_GALLERY_DATA.seo!;
}

// Full Page Fetcher
export async function getAllGalleryData(): Promise<GalleryPageData> {
  const [banner, showcase, cta, seo] = await Promise.all([
    getGalleryBanner(),
    getGalleryShowcase(),
    getGalleryCTA(),
    getGallerySEO(),
  ]);

  return {
    banner,
    showcase,
    cta,
    seo,
  };
}
