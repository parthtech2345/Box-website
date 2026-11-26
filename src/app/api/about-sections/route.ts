import { NextResponse } from "next/server";
import { getAllAboutSections } from "@/lib/aboutData";

export async function GET() {
  try {
    const data = await getAllAboutSections();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, data: {}, message: error.message });
  }
}
