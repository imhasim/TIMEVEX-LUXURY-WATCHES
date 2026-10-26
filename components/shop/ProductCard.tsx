"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Eye, Star } from "lucide-react";
import { Product } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const isInWishlist = useWishlistStore((state) => state.isInWishlist(product.id));

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
    toast.success(`${product.name} added to cart`, {
      description: `${formatPrice(product.price)} · Cart updated`,
    });
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const added = toggleWishlist(product);
    if (added) {
      toast.success(`${product.name} added to wishlist`);
    } else {
      toast.info(`${product.name} removed from wishlist`);
    }
  };

  // Calculate discount percentage
  const discountPercent = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <div
      className="group relative rounded-2xl bg-[#141416] border border-white/8 hover:border-[#C9A66B]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,166,107,0.12)] flex flex-col overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <Link href={`/product/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden bg-[#0e0e11]">
        <Image
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.imageAlt || product.name}
          fill
          priority={priority}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.tags?.includes("bestseller") && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#C9A66B] text-black font-mono text-[10px] font-semibold tracking-wider uppercase">
              Bestseller
            </span>
          )}
          {product.tags?.includes("new") && (
            <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white font-mono text-[10px] font-semibold tracking-wider uppercase border border-white/20">
              New Arrival
            </span>
          )}
          {discountPercent > 0 && (
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-400 font-mono text-[10px] font-semibold tracking-wider border border-emerald-500/30">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleToggleWishlist}
          aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all duration-200 z-10 ${
            isInWishlist
              ? "bg-[#C9A66B] text-black shadow-lg"
              : "bg-black/40 text-white/80 hover:text-white hover:bg-black/70 border border-white/10"
          }`}
        >
          <Heart className={`w-4 h-4 ${isInWishlist ? "fill-current" : ""}`} />
        </button>

        {/* Quick Add Overlay on hover for desktop */}
        <div className="absolute bottom-3 inset-x-3 hidden sm:flex items-center gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <button
            onClick={handleAddToCart}
            className="flex-1 py-2.5 px-3 rounded-xl bg-white text-black font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 hover:bg-[#C9A66B] hover:text-black transition-colors shadow-lg active:scale-95"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
          <span className="p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white hover:border-[#C9A66B] transition-colors">
            <Eye className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>

      {/* Info Section */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-[#8A8A8F] mb-1">
            <span className="font-mono tracking-widest uppercase text-[11px] text-[#C9A66B]/90">
              {product.brand}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-[#C9A66B] text-[#C9A66B]" />
              <span className="font-mono text-[11px] text-[#F5F1E8]">
                {product.rating.toFixed(1)}
              </span>
              <span className="text-[10px] text-[#8A8A8F]">({product.reviews})</span>
            </div>
          </div>

          <Link href={`/product/${product.slug}`} className="block group-hover:text-[#C9A66B] transition-colors">
            <h3 className="font-serif text-base sm:text-lg font-medium text-[#F5F1E8] line-clamp-1 leading-snug">
              {product.name}
            </h3>
          </Link>

          <p className="text-[11px] text-[#8A8A8F] line-clamp-1 mt-0.5">
            {product.strap}
          </p>
        </div>

        {/* Price & Mobile Add Button */}
        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-sans font-semibold text-base sm:text-lg text-[#F5F1E8]">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="font-sans text-xs text-[#8A8A8F] line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>

          {/* Mobile direct Add button */}
          <button
            onClick={handleAddToCart}
            aria-label="Add to cart"
            className="sm:hidden p-2 rounded-lg bg-white/10 hover:bg-[#C9A66B] text-white hover:text-black transition-colors"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
