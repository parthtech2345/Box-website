import { getDb } from "./homeData";
import { readFile } from "fs/promises";
import path from "path";
import { DEFAULT_WHATSAPP_CONFIG, WhatsAppConfig } from "@/data/whatsappData";

export type { WhatsAppConfig };
export { DEFAULT_WHATSAPP_CONFIG };

export async function getManagementData(): Promise<any> {
  // 1. Try to read from MongoDB
  try {
    const db = await getDb();
    if (db) {
      const collection = db.collection("site_management");
      const doc = await collection.findOne({ type: "global" });
      if (doc) {
        const { _id, type, ...clean } = doc;
        return clean;
      }
    }
  } catch (e) {
    // Graceful fallback
  }

  // 2. Fallback to cache file from Box-admin if available
  try {
    const cachePath = path.resolve(process.cwd(), "..", "Box-admin", "data", "site_management_cache.json");
    const content = await readFile(cachePath, "utf-8");
    return JSON.parse(content);
  } catch (e) {
    return { whatsapp: DEFAULT_WHATSAPP_CONFIG };
  }
}
