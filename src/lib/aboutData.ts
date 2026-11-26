import { getDb } from "./homeData";
import { readFile } from "fs/promises";
import path from "path";

// Fetch all about sections from MongoDB, with fallback to Admin cache file
export async function getAllAboutSections(): Promise<Record<string, any>> {
  try {
    const db = await getDb();
    if (db) {
      const collection = db.collection("about_sections");
      const docs = await collection.find({}).toArray();
      if (docs && docs.length > 0) {
        const result: Record<string, any> = {};
        docs.forEach((doc) => {
          if (doc.sectionId) {
            const { _id, ...clean } = doc;
            result[doc.sectionId] = clean;
          }
        });
        return result;
      }
    }
  } catch (e) {
    // Graceful fallback
  }

  // Fallback to cache file from Box-admin if available
  try {
    const cachePath = path.resolve(process.cwd(), "..", "Box-admin", "data", "about_sections_cache.json");
    const content = await readFile(cachePath, "utf-8");
    return JSON.parse(content);
  } catch (e) {
    return {};
  }
}
