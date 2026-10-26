import { Suspense } from "react";
import { Metadata } from "next";
import ShopClient from "@/components/shop/ShopClient";

export const metadata: Metadata = {
  title: "Shop All Luxury & Contemporary Timepieces | TimeVex",
  description:
    "Explore our complete range of automatic tourbillons, chronographs, vintage dress watches, and AMOLED smartwatches. Filter by gender, price, and category with fast pan-India delivery.",
};

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-10 h-10 border-2 border-[#C9A66B] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ShopClient />
    </Suspense>
  );
}
