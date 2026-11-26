import { NextResponse } from "next/server";
import { getAllHomeSections } from "@/lib/homeData";

export async function GET() {
  try {
    const data = await getAllHomeSections();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, data: {}, message: error.message });
  }
}
