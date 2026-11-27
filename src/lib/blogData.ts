import { MongoClient, Db } from "mongodb";
import { readFile } from "fs/promises";
import path from "path";
import {
  BLOGS_DATA,
  BlogPost,
  BlogFAQ,
  BlogKeyTakeaway,
  BlogContentSection,
} from "@/data/blogsData";

export type { BlogPost, BlogFAQ, BlogKeyTakeaway, BlogContentSection };

export interface BlogBannerData {
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
}

export interface BlogDetailBannerData {
  title?: string;
  breadcrumbRoot?: string;
  breadcrumbCurrent?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
}

export interface BlogListingCTAData {
  badge?: string;
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export interface BlogSEOData {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  canonicalLink?: string;
  ogImage?: string;
  ogImageAlt?: string;
  schemaMarkup?: string;
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
  var _mongoClientPromiseWebsiteBlog: Promise<MongoClient> | undefined;
}

export async function getMongoClient(): Promise<MongoClient> {
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromiseWebsiteBlog) {
      client = new MongoClient(uri, options);
      global._mongoClientPromiseWebsiteBlog = client.connect();
    }
    return global._mongoClientPromiseWebsiteBlog;
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
    const cachePath = path.resolve(process.cwd(), "..", "Box-admin", "data", "blogs_cache.json");
    const content = await readFile(cachePath, "utf-8");
    return JSON.parse(content);
  } catch (e) {
    return null;
  }
}

// 1. Get All Blogs
export async function getAllBlogs(): Promise<BlogPost[]> {
  try {
    const db = await getDb();
    if (db) {
      const docs = await db.collection("blogs").find({}).toArray();
      if (docs && docs.length > 0) {
        return docs.map(({ _id, ...clean }) => clean as BlogPost);
      }
    }
  } catch (e) {
    // Fallback to cache
  }

  const cache = await readAdminCache();
  if (cache?.articles && cache.articles.length > 0) {
    return cache.articles;
  }

  return BLOGS_DATA;
}

// 2. Get Single Blog by Slug
export async function getBlogBySlug(slug: string): Promise<BlogPost | undefined> {
  try {
    const db = await getDb();
    if (db) {
      const found = await db.collection("blogs").findOne({ slug });
      if (found) {
        const { _id, ...clean } = found;
        return clean as BlogPost;
      }
    }
  } catch (e) {
    // Fallback to cache
  }

  const cache = await readAdminCache();
  if (cache?.articles) {
    const found = cache.articles.find((a: any) => a.slug === slug);
    if (found) return found;
  }

  return BLOGS_DATA.find((b) => b.slug === slug);
}

// 3. Get Featured Blog
export async function getFeaturedBlog(): Promise<BlogPost> {
  const blogs = await getAllBlogs();
  return blogs.find((b) => b.featured) || blogs[0];
}

// 4. Get Related Blogs
export async function getRelatedBlogs(slugs: string[]): Promise<BlogPost[]> {
  const blogs = await getAllBlogs();
  return blogs.filter((b) => slugs.includes(b.slug));
}

// 5. Get Adjacent Blogs (Previous & Next)
export async function getAdjacentBlogs(currentSlug: string): Promise<{
  prev: BlogPost | null;
  next: BlogPost | null;
}> {
  const blogs = await getAllBlogs();
  const index = blogs.findIndex((b) => b.slug === currentSlug);
  if (index === -1) return { prev: null, next: null };
  const prev = index > 0 ? blogs[index - 1] : null;
  const next = index < blogs.length - 1 ? blogs[index + 1] : null;
  return { prev, next };
}

// 6. Get Hero Banner Data
export async function getBlogsBanner(): Promise<BlogBannerData> {
  try {
    const db = await getDb();
    if (db) {
      const doc = await db.collection("blogs_settings").findOne({ sectionId: "banner" });
      if (doc) {
        const { _id, ...clean } = doc;
        return clean;
      }
    }
  } catch (e) {
    // Fallback
  }

  const cache = await readAdminCache();
  return (
    cache?.banner || {
      title: "Blogs & Insights",
      breadcrumbRoot: "Home",
      breadcrumbCurrent: "Blogs",
      backgroundImage: "/blog/blog_banner_pano.png",
      backgroundImageAlt: "Blogs Banner - AAVRIT PACKAGING",
      characterImage: "/blog/character_blog_author.png",
      characterAlt: "Packaging Technical Author - AAVRIT PACKAGING",
      dialogueIcon: "📚",
      dialogueTitle: "Packaging Insights & Trends!",
      dialogueSubtext: "Technical guides, GSM calculations & industry knowledge",
    }
  );
}

// 7. Get Listing CTA Banner Data
export async function getBlogsListingCTA(): Promise<BlogListingCTAData> {
  try {
    const db = await getDb();
    if (db) {
      const doc = await db.collection("blogs_settings").findOne({ sectionId: "cta" });
      if (doc) {
        const { _id, ...clean } = doc;
        return clean;
      }
    }
  } catch (e) {
    // Fallback
  }

  const cache = await readAdminCache();
  return (
    cache?.listingCta || {
      badge: "CONTINUE LEARNING",
      title: "Want to Know More About Packaging?",
      description:
        "Explore our packaging solutions or connect with our team to discuss your specific requirements. We are here to help you engineer stronger, cost-optimized corrugated containers.",
      primaryButtonText: "Explore Products",
      primaryButtonLink: "/products",
      secondaryButtonText: "Contact Us",
      secondaryButtonLink: "/contact",
    }
  );
}

// 8. Get Blogs SEO Data
export async function getBlogsSEO(): Promise<BlogSEOData> {
  try {
    const db = await getDb();
    if (db) {
      const doc = await db.collection("blogs_settings").findOne({ sectionId: "seo" });
      if (doc) {
        const { _id, ...clean } = doc;
        return clean;
      }
    }
  } catch (e) {
    // Fallback
  }

  const cache = await readAdminCache();
  return (
    cache?.seo || {
      metaTitle: "Packaging Insights & Knowledge | AAVRIT PACKAGING",
      metaDescription:
        "Explore educational guides, technical articles, and practical insights on corrugated box structures, GSM calculations, manufacturing, and industry packaging solutions.",
      metaKeywords:
        "corrugated boxes blog, packaging knowledge, corrugated board manufacturing, paper GSM guide, box selection tips",
      canonicalLink: "/blogs",
      ogImage: "/blog/Modern Packaging Workspace Scene.png",
      ogImageAlt: "AAVRIT PACKAGING Packaging Insights & Knowledge",
    }
  );
}

// 9. Get Blog Detail Banner Data
export async function getBlogDetailBanner(): Promise<BlogDetailBannerData> {
  try {
    const db = await getDb();
    if (db) {
      const doc = await db.collection("blogs_settings").findOne({ sectionId: "detail-banner" });
      if (doc) {
        const { _id, ...clean } = doc;
        return clean;
      }
    }
  } catch (e) {
    // Fallback
  }

  const cache = await readAdminCache();
  return (
    cache?.detailBanner || {
      title: "Blog Details",
      breadcrumbRoot: "Home",
      breadcrumbCurrent: "Blog Details",
      backgroundImage: "/blog/blog_banner_pano.png",
      backgroundImageAlt: "Blog Details Banner - AAVRIT PACKAGING",
    }
  );
}
