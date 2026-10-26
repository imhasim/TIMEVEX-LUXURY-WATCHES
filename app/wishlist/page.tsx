"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { useWishlistStore } from "@/store/wishlistStore";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";
import { Product } from "@/data/products";

export default function WishlistPage() {
  const [mounted, setMounted] = useState(false);
  const items = useWishlistStore((state) => state.items);
  const removeItem = useWishlistStore((state) => state.removeItem);
  const clearWishlist = useWishlistStore((state) => state.clearWishlist);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#C9A66B] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const handleMoveToCart = (product: Product) => {
    addItem(product, 1);
    removeItem(product.id);
    toast.success(`${product.name} moved to your bag!`);
  };

  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-white/10 pb-6 mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A66B] block mb-1">
              Your Curated Vault
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#F5F1E8] font-normal">
              Saved <span className="italic gold-gradient-text">Timepieces</span>
            </h1>
          </div>

          {items.length > 0 && (
            <button
              onClick={() => {
                clearWishlist();
                toast.info("Wishlist cleared");
              }}
              className="text-xs font-mono uppercase tracking-wider text-[#8A8A8F] hover:text-rose-400 transition-colors"
            >
              Clear Entire Vault
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="py-24 text-center rounded-3xl bg-[#141416]/50 border border-white/8 p-8 space-y-5 max-w-2xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C9A66B] mx-auto">
              <Heart className="w-9 h-9" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8]">
              Your vault is currently empty
            </h2>
            <p className="text-sm text-[#8A8A8F] max-w-md mx-auto">
              Save the timepieces you admire while browsing. They will be preserved here for whenever you are ready to acquire them.
            </p>
            <div className="pt-2">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C9A66B] hover:bg-[#E6CA85] text-black font-mono text-xs uppercase tracking-widest font-semibold transition-all shadow-lg hover:shadow-[0_0_25px_rgba(201,166,107,0.3)]"
              >
                <span>Browse Timepieces</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl bg-[#141416] border border-white/8 p-4 flex flex-col justify-between group hover:border-[#C9A66B]/40 transition-all hover:shadow-[0_0_30px_rgba(201,166,107,0.1)]"
              >
                <div>
                  <Link
                    href={`/product/${product.slug}`}
                    className="relative block aspect-[4/5] rounded-xl overflow-hidden bg-black/40 mb-3"
                  >
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#C9A66B]">
                    {product.brand}
                  </span>
                  <Link href={`/product/${product.slug}`}>
                    <h3 className="font-serif text-base text-[#F5F1E8] font-medium truncate hover:text-[#C9A66B] transition-colors mt-0.5">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-[#8A8A8F] truncate mt-0.5">{product.strap}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="font-sans font-semibold text-base text-[#F5F1E8]">
                      {formatPrice(product.price)}
                    </span>
                    {product.oldPrice && (
                      <span className="text-xs text-[#8A8A8F] line-through">
                        {formatPrice(product.oldPrice)}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleMoveToCart(product)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#C9A66B] hover:text-black transition-colors flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Move to Bag
                    </button>

                    <button
                      onClick={() => {
                        removeItem(product.id);
                        toast.info(`${product.name} removed from vault`);
                      }}
                      aria-label="Remove from wishlist"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-rose-500/10 text-[#8A8A8F] hover:text-rose-400 border border-white/10 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
