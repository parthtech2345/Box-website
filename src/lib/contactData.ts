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
  var _mongoClientPromiseWebsiteContact: Promise<MongoClient> | undefined;
}

export async function getMongoClient(): Promise<MongoClient> {
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromiseWebsiteContact) {
      client = new MongoClient(uri, options);
      global._mongoClientPromiseWebsiteContact = client.connect();
    }
    return global._mongoClientPromiseWebsiteContact;
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
    const cachePath = path.resolve(process.cwd(), "..", "Box-admin", "data", "contact_cache.json");
    const content = await readFile(cachePath, "utf-8");
    return JSON.parse(content);
  } catch (e) {
    return null;
  }
}

export async function getAllContactSections(): Promise<Record<string, any>> {
  try {
    const db = await getDb();
    if (db) {
      const collection = db.collection("contact_sections");
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
    // Fallback to cache
  }

  const cache = await readAdminCache();
  if (cache) {
    return {
      hero: cache.hero,
      banner: cache.hero,
      "info-cards": cache.infoCards,
      infoCards: cache.infoCards,
      "inquiry-form": cache.inquiryForm,
      inquiryForm: cache.inquiryForm,
      "location-map": cache.locationMap,
      locationMap: cache.locationMap,
      "why-connect": cache.whyConnect,
      whyConnect: cache.whyConnect,
      faqs: cache.faqs,
      seo: cache.seo,
    };
  }

  return {};
}

export async function getContactSection(sectionId: string): Promise<any> {
  try {
    const db = await getDb();
    if (db) {
      const collection = db.collection("contact_sections");
      const found = await collection.findOne({ sectionId });
      if (found) {
        const { _id, ...clean } = found;
        return clean;
      }
    }
  } catch (e) {
    // Fallback to cache
  }

  const cache = await readAdminCache();
  const keyMap: Record<string, string> = {
    banner: "hero",
    hero: "hero",
    "info-cards": "infoCards",
    infoCards: "infoCards",
    "inquiry-form": "inquiryForm",
    inquiryForm: "inquiryForm",
    "location-map": "locationMap",
    locationMap: "locationMap",
    "why-connect": "whyConnect",
    whyConnect: "whyConnect",
    faqs: "faqs",
    seo: "seo",
  };
  const key = keyMap[sectionId] || sectionId;
  return cache?.[key] || null;
}
