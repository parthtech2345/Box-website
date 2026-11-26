import { NextResponse } from "next/server";
import { getManagementData } from "@/lib/managementData";

export async function GET() {
  try {
    const data = await getManagementData();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, data: {}, message: error.message });
  }
}
