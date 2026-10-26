"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag, ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";

export default function MostLoved() {
  const addItem = useCartStore((state) => state.addItem);

  // Top 4 ranked pieces
  const topRanked = [
    PRODUCTS.find((p) => p.id === "tv-m11") || PRODUCTS[10], // Heritage Slim Classic (Men)
    PRODUCTS.find((p) => p.id === "tv-w03") || PRODUCTS[27], // Charm Bangle Gold (Women)
    PRODUCTS.find((p) => p.id === "tv-m12") || PRODUCTS[11], // Oceanic Navy Diver (Men)
    PRODUCTS.find((p) => p.id === "tv-w11") || PRODUCTS[35], // Petite White Elegance (Women)
  ];

  const handleQuickAdd = (product: (typeof topRanked)[0]) => {
    addItem(product, 1);
    toast.success(`${product.name} added to your cart`, {
      description: `${formatPrice(product.price)} · Ready for checkout`,
    });
  };

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A66B] block mb-2">
              Buyer&apos;s Hall of Fame
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F1E8] font-normal">
              Most <span className="italic gold-gradient-text">Loved</span> Watches
            </h2>
          </div>
          <p className="text-sm text-[#8A8A8F] max-w-md">
            The four most popular watches from our collection, as voted by our community of over 25,000 customers.
          </p>
        </div>

        {/* 4 Ranked Items List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topRanked.map((watch, index) => {
            const rank = `0${index + 1}`;
            return (
              <div
                key={watch.id}
                className="group relative bg-[#141416] border border-white/8 hover:border-[#C9A66B]/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,166,107,0.12)] flex items-center gap-5 sm:gap-6"
              >
                {/* Big Rank Number */}
                <span className="font-mono text-3xl sm:text-4xl font-extralight text-white/20 group-hover:text-[#C9A66B]/60 transition-colors flex-shrink-0">
                  {rank}
                </span>

                {/* Watch Thumbnail */}
                <Link
                  href={`/product/${watch.slug}`}
                  className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden bg-black/40 flex-shrink-0"
                >
                  <Image
                    src={watch.images[0]}
                    alt={watch.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                {/* Information */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#C9A66B]">
                      {watch.brand}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-[#8A8A8F]">
                      <Star className="w-3 h-3 fill-[#C9A66B] text-[#C9A66B]" />
                      <span>{watch.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  <Link href={`/product/${watch.slug}`}>
                    <h3 className="font-serif text-base sm:text-lg text-[#F5F1E8] font-medium truncate group-hover:text-[#C9A66B] transition-colors">
                      {watch.name}
                    </h3>
                  </Link>

                  <p className="text-xs text-[#8A8A8F] truncate mt-0.5">
                    {watch.strap}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="font-sans font-semibold text-base sm:text-lg text-[#F5F1E8]">
                        {formatPrice(watch.price)}
                      </span>
                      {watch.oldPrice && (
                        <span className="text-xs text-[#8A8A8F] line-through">
                          {formatPrice(watch.oldPrice)}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => handleQuickAdd(watch)}
                      className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#C9A66B] hover:text-black text-white text-xs font-mono tracking-wider uppercase transition-colors flex items-center gap-1.5"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
