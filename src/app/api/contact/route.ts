import { NextRequest, NextResponse } from "next/server";
import { getAllContactSections, getContactSection } from "@/lib/contactData";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const section = searchParams.get("section");

    if (section) {
      const data = await getContactSection(section);
      return NextResponse.json({ success: true, data });
    }

    const allData = await getAllContactSections();
    return NextResponse.json({ success: true, data: allData });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
