import React from "react";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCatalogView from "@/components/products/ProductCatalogView";

export const metadata: Metadata = {
  title: "Packaging Solutions & Products | AAVRIT PACKAGING",
  description:
    "Explore our complete range of 3-ply, 5-ply, 7-ply corrugated boxes, custom printed boxes, precision die-cuts, and heavy-duty industrial shipping cartons.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFFFFF] text-[#202A2E]">
      <Header />
      <main className="flex-1 w-full">
        <ProductCatalogView />
      </main>
      <Footer />
    </div>
  );
}
