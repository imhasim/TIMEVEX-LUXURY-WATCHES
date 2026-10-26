"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Heart,
  ShoppingBag,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  CheckCircle2,
  ChevronRight,
  Share2,
  MapPin,
} from "lucide-react";
import { Product, getRelatedProducts } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { formatPrice } from "@/lib/utils";
import ProductCard from "@/components/shop/ProductCard";
import { toast } from "sonner";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const router = useRouter();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState("");
  const [pincodeStatus, setPincodeStatus] = useState<string | null>(null);

  const addItem = useCartStore((state) => state.addItem);
  const toggleWishlist = useWishlistStore((state) => state.toggleWishlist);
  const isInWishlist = useWishlistStore((state) => state.isInWishlist(product.id));

  const related = getRelatedProducts(product.id, 4);

  const discountPercent = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast.success(`${quantity}x ${product.name} added to cart`, {
      description: `${formatPrice(product.price * quantity)} · View your bag anytime`,
    });
  };

  const handleBuyNow = () => {
    addItem(product, quantity);
    router.push("/checkout");
  };

  const handleToggleWishlist = () => {
    const added = toggleWishlist(product);
    if (added) {
      toast.success(`${product.name} added to your wishlist`);
    } else {
      toast.info(`${product.name} removed from your wishlist`);
    }
  };

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(pincode.trim())) {
      toast.error("Please enter a valid 6-digit Indian pincode");
      return;
    }
    setPincodeStatus("Eligible for Free Express Doorstep Delivery by Wednesday!");
    toast.success("Delivery available to pincode " + pincode);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.info("Link copied to clipboard");
    }
  };

  return (
    <div className="py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-mono text-[#8A8A8F] mb-8 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
          <Link href="/shop" className="hover:text-white transition-colors">
            Shop
          </Link>
          <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
          <Link
            href={`/shop?gender=${product.gender}`}
            className="hover:text-white capitalize transition-colors"
          >
            {product.gender}&apos;s
          </Link>
          <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="text-[#C9A66B] truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Main Product Section: Gallery + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Featured Image */}
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-[#141416] border border-white/10 group shadow-2xl">
              <Image
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.imageAlt || product.name}
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Badges on main image */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.tags?.includes("bestseller") && (
                  <span className="px-3 py-1 rounded-full bg-[#C9A66B] text-black font-mono text-xs font-semibold uppercase tracking-wider">
                    Bestseller
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="px-3 py-1 rounded-full bg-emerald-500/30 backdrop-blur-md text-emerald-300 border border-emerald-500/40 font-mono text-xs font-semibold">
                    {discountPercent}% OFF
                  </span>
                )}
              </div>

              {/* Wishlist and Share Floating Buttons */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <button
                  onClick={handleShare}
                  aria-label="Share product"
                  className="p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-black/80 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <button
                  onClick={handleToggleWishlist}
                  aria-label="Wishlist toggle"
                  className={`p-2.5 rounded-full backdrop-blur-md transition-colors ${
                    isInWishlist
                      ? "bg-[#C9A66B] text-black shadow-lg"
                      : "bg-black/60 text-white/80 hover:text-white hover:bg-black/80 border border-white/10"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isInWishlist ? "fill-current" : ""}`} />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden bg-[#141416] border-2 transition-all ${
                      selectedImageIndex === idx
                        ? "border-[#C9A66B] ring-2 ring-[#C9A66B]/30"
                        : "border-white/10 hover:border-white/30 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#8A8A8F] mb-2">
                <span className="uppercase tracking-[0.25em] text-[#C9A66B]">
                  {product.brand}
                </span>
                <span className="uppercase tracking-widest">{product.category} Series</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F1E8] font-normal leading-tight">
                {product.name}
              </h1>

              {/* Rating and Reviews */}
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-[#C9A66B] text-[#C9A66B]"
                          : "text-white/20"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-mono text-sm text-[#F5F1E8] font-semibold">
                  {product.rating.toFixed(1)}
                </span>
                <span className="text-xs text-[#8A8A8F]">
                  ({product.reviews} verified collectors)
                </span>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="p-5 rounded-2xl bg-[#141416] border border-white/8 space-y-2">
              <div className="flex items-baseline gap-4">
                <span className="font-sans font-bold text-3xl sm:text-4xl text-[#F5F1E8]">
                  {formatPrice(product.price)}
                </span>
                {product.oldPrice && (
                  <span className="font-sans text-base sm:text-lg text-[#8A8A8F] line-through">
                    {formatPrice(product.oldPrice)}
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="text-xs font-mono text-emerald-400 font-medium">
                    You save {formatPrice(product.oldPrice! - product.price)} ({discountPercent}%)
                  </span>
                )}
              </div>
              <p className="text-xs text-[#8A8A8F]">
                Inclusive of all taxes. Free express insured shipping. COD available.
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#8A8A8F] leading-relaxed">
              {product.description}
            </p>

            {/* Quantity Selector & Add to Bag / Buy Now */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs uppercase text-[#8A8A8F]">Quantity:</span>
                <div className="flex items-center rounded-xl bg-[#141416] border border-white/10 overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3.5 py-2 text-sm text-[#8A8A8F] hover:text-white hover:bg-white/5 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-sm font-mono font-medium text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                    className="px-3.5 py-2 text-sm text-[#8A8A8F] hover:text-white hover:bg-white/5 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={handleAddToCart}
                  className="w-full sm:flex-1 py-4 px-6 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#C9A66B] hover:text-black transition-all duration-300 flex items-center justify-center gap-2 shadow-lg active:scale-95"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </button>

                <button
                  onClick={handleBuyNow}
                  className="w-full sm:flex-1 py-4 px-6 rounded-full bg-[#C9A66B] text-black font-mono text-xs uppercase tracking-widest font-semibold hover:bg-[#E6CA85] transition-all duration-300 shadow-[0_0_25px_rgba(201,166,107,0.25)] flex items-center justify-center gap-2 active:scale-95"
                >
                  Buy Now
                </button>
              </div>
            </div>

            {/* Pincode Estimator */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#F5F1E8]">
                <MapPin className="w-4 h-4 text-[#C9A66B]" />
                <span>Delivery Availability Check</span>
              </div>
              <form onSubmit={handleCheckPincode} className="flex gap-2 max-w-sm">
                <input
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter 6-digit Pincode"
                  className="flex-1 px-4 py-2 rounded-xl bg-[#141416] border border-white/10 text-xs font-mono text-white placeholder:text-[#8A8A8F] focus:outline-none focus:border-[#C9A66B]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[#C9A66B] hover:text-black text-xs font-mono text-white transition-colors"
                >
                  Check
                </button>
              </form>
              {pincodeStatus && (
                <p className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {pincodeStatus}
                </p>
              )}
            </div>

            {/* Trust Assurances */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-center">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <Truck className="w-4 h-4 text-[#C9A66B] mx-auto" />
                <span className="font-mono text-[10px] uppercase text-[#F5F1E8] block">Free Express</span>
                <span className="text-[10px] text-[#8A8A8F] block">2-4 Business Days</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <ShieldCheck className="w-4 h-4 text-[#C9A66B] mx-auto" />
                <span className="font-mono text-[10px] uppercase text-[#F5F1E8] block">1-Year Warranty</span>
                <span className="text-[10px] text-[#8A8A8F] block">Official Movement</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <RotateCcw className="w-4 h-4 text-[#C9A66B] mx-auto" />
                <span className="font-mono text-[10px] uppercase text-[#F5F1E8] block">7-Day Returns</span>
                <span className="text-[10px] text-[#8A8A8F] block">Doorstep Pickup</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications Table */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A66B] block mb-2">
              Horological Specifications
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8] mb-6">
              Engineering & Movement Details
            </h2>

            <div className="divide-y divide-white/5 border-y border-white/10">
              {product.specs.map((spec, idx) => (
                <div key={idx} className="py-3.5 grid grid-cols-3 sm:grid-cols-4 gap-4 text-xs sm:text-sm">
                  <span className="font-mono text-[#8A8A8F] uppercase tracking-wider">
                    {spec.label}
                  </span>
                  <span className="col-span-2 sm:col-span-3 text-[#F5F1E8] font-medium">
                    {spec.value}
                  </span>
                </div>
              ))}
              <div className="py-3.5 grid grid-cols-3 sm:grid-cols-4 gap-4 text-xs sm:text-sm">
                <span className="font-mono text-[#8A8A8F] uppercase tracking-wider">Strap Type</span>
                <span className="col-span-2 sm:col-span-3 text-[#F5F1E8] font-medium">
                  {product.strap}
                </span>
              </div>
              <div className="py-3.5 grid grid-cols-3 sm:grid-cols-4 gap-4 text-xs sm:text-sm">
                <span className="font-mono text-[#8A8A8F] uppercase tracking-wider">Packaging</span>
                <span className="col-span-2 sm:col-span-3 text-[#F5F1E8] font-medium">
                  TimeVex Velvet-Lined Collector Presentation Box with Warranty Certificate
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Creations */}
        {related.length > 0 && (
          <div className="mt-24 pt-12 border-t border-white/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A66B] block mb-1">
                  Complementary Pieces
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8]">
                  You May Also <span className="italic gold-gradient-text">Admire</span>
                </h3>
              </div>
              <Link
                href="/shop"
                className="text-xs font-mono uppercase tracking-wider text-[#C9A66B] hover:underline"
              >
                Browse All
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
