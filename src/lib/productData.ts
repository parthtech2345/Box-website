import { getDb } from "./homeData";
import { readFile } from "fs/promises";
import path from "path";
import { MAIN_CATEGORIES, ALL_PRODUCTS, ProductCategoryData, ProductItem } from "@/data/productsData";

export interface ProductSEOData {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  canonicalLink?: string;
  schemaMarkup?: string;
}

export interface ProductBannerData {
  title: string;
  breadcrumbRoot: string;
  breadcrumbCurrent: string;
  backgroundImage: string;
  backgroundImageAlt?: string;
  characterImage: string;
  characterAlt: string;
  characterMediaType?: "image" | "gif" | "video";
  dialogueIcon: string;
  dialogueTitle: string;
  dialogueSubtext: string;
  updatedAt?: string;
}

export const DEFAULT_PRODUCT_BANNER: ProductBannerData = {
  title: "Our Products",
  breadcrumbRoot: "Home",
  breadcrumbCurrent: "Products",
  backgroundImage: "/Product/Kraft Packaging Showcase Banner.png",
  backgroundImageAlt: "AAVRIT PACKAGING - Products Banner",
  characterImage: "/Product/character_qc_inspector.png",
  characterAlt: "Quality Control Specialist - AAVRIT PACKAGING",
  characterMediaType: "image",
  dialogueIcon: "📦",
  dialogueTitle: "Quality Tested Packaging!",
  dialogueSubtext: "High-burst strength & precision corrugated cartons",
};

export async function getProductBanner(): Promise<ProductBannerData> {
  try {
    const db = await getDb();
    if (db) {
      const collection = db.collection("product_banner");
      const found = await collection.findOne({ type: "hero-banner" });
      if (found) {
        const { _id, type, ...clean } = found;
        return clean as ProductBannerData;
      }
    }
  } catch (e) {
    // Graceful fallback
  }

  // Fallback to cache file from Box-admin
  try {
    const cachePath = path.resolve(process.cwd(), "..", "Box-admin", "data", "product_banner_cache.json");
    const content = await readFile(cachePath, "utf-8");
    const json = JSON.parse(content);
    if (json && json.title) {
      return json;
    }
  } catch (e) {
    // Fallback to static
  }

  return DEFAULT_PRODUCT_BANNER;
}

export interface DynamicProductCategory extends ProductCategoryData {
  imageAlt?: string;
  imageName?: string;
  order?: number;
  seo?: ProductSEOData;
}

export interface DynamicProductItem extends ProductItem {
  imageAlt?: string;
  imageName?: string;
  order?: number;
  seo?: ProductSEOData;
}

export async function getAllProductCategories(): Promise<DynamicProductCategory[]> {
  try {
    const db = await getDb();
    if (db) {
      const collection = db.collection("product_categories");
      const docs = await collection.find({}).sort({ order: 1 }).toArray();
      if (docs && docs.length > 0) {
        return docs.map(({ _id, ...rest }) => rest as DynamicProductCategory);
      }
    }
  } catch (e) {
    // Graceful fallback
  }

  // Fallback to cache file from Box-admin
  try {
    const cachePath = path.resolve(process.cwd(), "..", "Box-admin", "data", "product_categories_cache.json");
    const content = await readFile(cachePath, "utf-8");
    const json = JSON.parse(content);
    if (Array.isArray(json) && json.length > 0) {
      return json;
    }
  } catch (e) {
    // Fallback to static
  }

  return MAIN_CATEGORIES;
}

export async function getAllProducts(): Promise<DynamicProductItem[]> {
  try {
    const db = await getDb();
    if (db) {
      const collection = db.collection("products");
      const docs = await collection.find({}).sort({ order: 1 }).toArray();
      if (docs && docs.length > 0) {
        return docs.map(({ _id, ...rest }) => rest as DynamicProductItem);
      }
    }
  } catch (e) {
    // Graceful fallback
  }

  // Fallback to cache file from Box-admin
  try {
    const cachePath = path.resolve(process.cwd(), "..", "Box-admin", "data", "products_cache.json");
    const content = await readFile(cachePath, "utf-8");
    const json = JSON.parse(content);
    if (Array.isArray(json) && json.length > 0) {
      return json;
    }
  } catch (e) {
    // Fallback to static
  }

  return ALL_PRODUCTS;
}

export async function getProductBySlug(slug: string): Promise<DynamicProductItem | null> {
  const all = await getAllProducts();
  const found = all.find((p) => p.slug === slug);
  return found || null;
}
