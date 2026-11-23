import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";

    let name = "";
    let company = "";
    let email = "";
    let phone = "";
    let inquiryType = "Product Inquiry";
    let category = "";
    let boxType = "";
    let quantity = "";
    let message = "";
    let fileName = "";

    if (contentType.includes("application/json")) {
      const body = await request.json();
      name = body.name?.trim() || "";
      company = body.company?.trim() || "";
      email = body.email?.trim() || "";
      phone = body.phone?.trim() || "";
      inquiryType = body.inquiryType?.trim() || "Product Inquiry";
      category = body.category?.trim() || "";
      boxType = body.boxType?.trim() || "";
      quantity = body.quantity?.trim() || "";
      message = body.message?.trim() || "";
      fileName = body.fileName?.trim() || "";
    } else if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      name = (formData.get("name") as string)?.trim() || "";
      company = (formData.get("company") as string)?.trim() || "";
      email = (formData.get("email") as string)?.trim() || "";
      phone = (formData.get("phone") as string)?.trim() || "";
      inquiryType = (formData.get("inquiryType") as string)?.trim() || "Product Inquiry";
      category = (formData.get("category") as string)?.trim() || "";
      boxType = (formData.get("boxType") as string)?.trim() || "";
      quantity = (formData.get("quantity") as string)?.trim() || "";
      message = (formData.get("message") as string)?.trim() || "";

      const file = formData.get("file") as File | null;
      if (file && file.size > 0) {
        fileName = file.name;
      }
    }

    // Validation
    const errors: Record<string, string> = {};

    if (!name || name.length < 2) {
      errors.name = "Full name is required (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    const phoneRegex = /^[0-9+\s\-()]{7,20}$/;
    if (!phone || !phoneRegex.test(phone)) {
      errors.phone = "Please enter a valid phone number (at least 7 digits).";
    }

    if (!message || message.length < 5) {
      errors.message = "Please include a message describing your packaging requirements.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          errors,
          message: "Please fill in all required fields correctly.",
        },
        { status: 400 }
      );
    }

    // Simulated log for inquiry records
    console.log("=== NEW PACKAGING INQUIRY RECEIVED ===", {
      timestamp: new Date().toISOString(),
      name,
      company,
      email,
      phone,
      inquiryType,
      category,
      boxType,
      quantity,
      messageLength: message.length,
      referenceFile: fileName || "None",
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your packaging inquiry has been received. Our technical team will review your specifications and contact you within 24 hours.",
        inquiryId: `INQ-${Date.now().toString().slice(-6)}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your inquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}
