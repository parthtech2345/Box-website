import { NextRequest, NextResponse } from "next/server";
import {
  getAllIndustries,
  getIndustryBySlug,
  getIndustriesBanner,
  getIndustriesLanding,
} from "@/lib/industryData";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const slug = searchParams.get("slug");

  try {
    if (slug) {
      const item = await getIndustryBySlug(slug);
      if (!item) {
        return NextResponse.json({ success: false, message: "Industry not found" }, { status: 404 });
      }
      return NextResponse.json({ success: true, data: item });
    }

    if (type === "banner") {
      const banner = await getIndustriesBanner();
      return NextResponse.json({ success: true, data: banner });
    }

    if (type === "landing") {
      const landing = await getIndustriesLanding();
      return NextResponse.json({ success: true, data: landing });
    }

    const industries = await getAllIndustries();
    return NextResponse.json({ success: true, data: industries });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
