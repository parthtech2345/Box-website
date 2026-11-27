import { NextRequest, NextResponse } from "next/server";
import {
  getAllBlogs,
  getBlogBySlug,
  getBlogsBanner,
  getBlogsListingCTA,
  getBlogsSEO,
} from "@/lib/blogData";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const section = searchParams.get("section");
    const slug = searchParams.get("slug");

    if (slug) {
      const article = await getBlogBySlug(slug);
      if (!article) {
        return NextResponse.json({ success: false, message: "Blog not found" }, { status: 404 });
      }
      return NextResponse.json({ success: true, data: article });
    }

    if (section === "banner") {
      const banner = await getBlogsBanner();
      return NextResponse.json({ success: true, data: banner });
    }

    if (section === "cta") {
      const cta = await getBlogsListingCTA();
      return NextResponse.json({ success: true, data: cta });
    }

    if (section === "seo") {
      const seo = await getBlogsSEO();
      return NextResponse.json({ success: true, data: seo });
    }

    if (section === "articles") {
      const articles = await getAllBlogs();
      return NextResponse.json({ success: true, data: articles });
    }

    const [banner, listingCta, seo, articles] = await Promise.all([
      getBlogsBanner(),
      getBlogsListingCTA(),
      getBlogsSEO(),
      getAllBlogs(),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        banner,
        listingCta,
        seo,
        articles,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Failed to fetch blogs data" },
      { status: 500 }
    );
  }
}
