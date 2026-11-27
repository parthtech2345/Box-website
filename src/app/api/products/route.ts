import { NextResponse } from "next/server";
import { getAllProductCategories, getAllProducts, getProductBanner } from "@/lib/productData";

export async function GET() {
  try {
    const [categories, products, banner] = await Promise.all([
      getAllProductCategories(),
      getAllProducts(),
      getProductBanner(),
    ]);

    return NextResponse.json({
      success: true,
      banner,
      categories,
      products,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
