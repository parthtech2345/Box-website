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
  var _mongoClientPromiseWebsite: Promise<MongoClient> | undefined;
}

export async function getMongoClient(): Promise<MongoClient> {
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromiseWebsite) {
      client = new MongoClient(uri, options);
      global._mongoClientPromiseWebsite = client.connect();
    }
    return global._mongoClientPromiseWebsite;
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

// Fetch all home sections from MongoDB, with fallback to Admin cache file
export async function getAllHomeSections(): Promise<Record<string, any>> {
  try {
    const db = await getDb();
    if (db) {
      const collection = db.collection("home_sections");
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
    const cachePath = path.resolve(process.cwd(), "..", "Box-admin", "data", "home_sections_cache.json");
    const content = await readFile(cachePath, "utf-8");
    return JSON.parse(content);
  } catch (e) {
    return {};
  }
}
