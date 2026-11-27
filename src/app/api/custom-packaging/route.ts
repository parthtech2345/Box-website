import { NextResponse } from "next/server";
import { getAllCustomPackagingSections } from "@/lib/customPackagingData";

export async function GET() {
  try {
    const data = await getAllCustomPackagingSections();
    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch custom packaging sections" },
      { status: 500 }
    );
  }
}
