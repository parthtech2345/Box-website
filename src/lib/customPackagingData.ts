import { MongoClient, Db } from "mongodb";
import { readFile } from "fs/promises";
import path from "path";

const uri = process.env.MONGODB_URI || "mongodb://box-website:Qwaszx%40123@127.0.0.1:27017/box-website?authSource=box-website";
const options = {
  serverSelectionTimeoutMS: 2000,
  connectTimeoutMS: 2000,
};

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromiseWebsiteCustomPackaging: Promise<MongoClient> | undefined;
}

export async function getMongoClient(): Promise<MongoClient> {
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromiseWebsiteCustomPackaging) {
      client = new MongoClient(uri, options);
      global._mongoClientPromiseWebsiteCustomPackaging = client.connect();
    }
    return global._mongoClientPromiseWebsiteCustomPackaging;
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

// Fetch all custom packaging sections from MongoDB, with fallback to Admin cache file and static defaults
export async function getAllCustomPackagingSections(): Promise<Record<string, any>> {
  try {
    const db = await getDb();
    if (db) {
      const collection = db.collection("custom_packaging");
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
    // Graceful fallback to cache
  }

  // Fallback to cache file from Box-admin if available
  try {
    const cachePath = path.resolve(process.cwd(), "..", "Box-admin", "data", "custom_packaging_cache.json");
    const content = await readFile(cachePath, "utf-8");
    return JSON.parse(content);
  } catch (e) {
    // Return empty object; components will use their default constants
    return {};
  }
}

export async function getCustomPackagingSection(sectionId: string): Promise<any | null> {
  const all = await getAllCustomPackagingSections();
  return all[sectionId] || null;
}
