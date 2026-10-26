"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Tag,
  CheckCircle2,
  X,
} from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";

export default function CartPage() {
  const router = useRouter();
  const [couponInput, setCouponInput] = useState("");
  const [mounted, setMounted] = useState(false);

  const items = useCartStore((state) => state.items);
  const updateQty = useCartStore((state) => state.updateQty);
  const removeItem = useCartStore((state) => state.removeItem);
  const couponCode = useCartStore((state) => state.couponCode);
  const discountPercentage = useCartStore((state) => state.discountPercentage);
  const applyCoupon = useCartStore((state) => state.applyCoupon);
  const removeCoupon = useCartStore((state) => state.removeCoupon);
  const getSubtotal = useCartStore((state) => state.getSubtotal);
  const getDiscountAmount = useCartStore((state) => state.getDiscountAmount);
  const getShippingAmount = useCartStore((state) => state.getShippingAmount);
  const getTotal = useCartStore((state) => state.getTotal);

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

  const subtotal = getSubtotal();
  const discount = getDiscountAmount();
  const shipping = getShippingAmount();
  const total = getTotal();

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const res = applyCoupon(couponInput);
    if (res.success) {
      toast.success(res.message);
      setCouponInput("");
    } else {
      toast.error(res.message);
    }
  };

  const handleRemoveCoupon = () => {
    removeCoupon();
    toast.info("Coupon code removed");
  };

  const freeShippingThreshold = 999;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-white/10 pb-6 mb-8 sm:mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A66B] block mb-1">
            Order Review
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#F5F1E8] font-normal">
            Your Shopping <span className="italic gold-gradient-text">Bag</span>
          </h1>
        </div>

        {items.length === 0 ? (
          <div className="py-24 text-center rounded-3xl bg-[#141416]/50 border border-white/8 p-8 space-y-5 max-w-2xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C9A66B] mx-auto">
              <ShoppingBag className="w-9 h-9" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8]">
              Your bag is currently empty
            </h2>
            <p className="text-sm text-[#8A8A8F] max-w-md mx-auto">
              Discover our signature collection of luxury tourbillons, chronographs, and everyday minimalists crafted with surgical steel.
            </p>
            <div className="pt-2">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C9A66B] hover:bg-[#E6CA85] text-black font-mono text-xs uppercase tracking-widest font-semibold transition-all shadow-lg hover:shadow-[0_0_25px_rgba(201,166,107,0.3)]"
              >
                <span>Explore Watches</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Items List */}
            <div className="lg:col-span-8 space-y-6">
              {/* Free Shipping Meter */}
              <div className="p-4 rounded-2xl bg-[#141416] border border-white/8 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#F5F1E8]">
                    {subtotal >= freeShippingThreshold ? (
                      <span className="text-emerald-400 flex items-center gap-1.5 font-semibold">
                        <CheckCircle2 className="w-4 h-4" />
                        You have unlocked Free Express Insured Shipping!
                      </span>
                    ) : (
                      <span>
                        Add{" "}
                        <strong className="text-[#C9A66B]">
                          {formatPrice(freeShippingThreshold - subtotal)}
                        </strong>{" "}
                        more to qualify for Free Shipping
                      </span>
                    )}
                  </span>
                  <span className="text-[#8A8A8F]">{Math.round(progressToFreeShipping)}%</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#C9A66B] to-emerald-400 rounded-full transition-all duration-500"
                    style={{ width: `${progressToFreeShipping}%` }}
                  />
                </div>
              </div>

              {/* Items Card List */}
              <div className="space-y-4">
                {items.map(({ product, qty }) => (
                  <div
                    key={product.id}
                    className="p-4 sm:p-6 rounded-2xl bg-[#141416] border border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 transition-colors hover:border-white/15"
                  >
                    <div className="flex items-center gap-4">
                      <Link
                        href={`/product/${product.slug}`}
                        className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden bg-black/40 flex-shrink-0"
                      >
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </Link>

                      <div className="space-y-1">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#C9A66B]">
                          {product.brand}
                        </span>
                        <Link href={`/product/${product.slug}`}>
                          <h3 className="font-serif text-base sm:text-lg text-[#F5F1E8] font-medium hover:text-[#C9A66B] transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-xs text-[#8A8A8F]">{product.strap}</p>
                        <p className="font-sans font-semibold text-sm text-[#F5F1E8] sm:hidden pt-1">
                          {formatPrice(product.price)}
                        </p>
                      </div>
                    </div>

                    {/* Qty & Price & Remove */}
                    <div className="flex items-center justify-between w-full sm:w-auto sm:gap-8 pt-3 sm:pt-0 border-t sm:border-t-0 border-white/5">
                      {/* Qty Controls */}
                      <div className="flex items-center rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                        <button
                          onClick={() => updateQty(product.id, qty - 1)}
                          className="p-2 text-[#8A8A8F] hover:text-white hover:bg-white/10"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-mono font-medium text-white">
                          {qty}
                        </span>
                        <button
                          onClick={() => updateQty(product.id, qty + 1)}
                          className="p-2 text-[#8A8A8F] hover:text-white hover:bg-white/10"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Total Item Price */}
                      <div className="text-right">
                        <span className="font-sans font-semibold text-base sm:text-lg text-[#F5F1E8] block">
                          {formatPrice(product.price * qty)}
                        </span>
                        {qty > 1 && (
                          <span className="text-[11px] text-[#8A8A8F] block font-mono">
                            {formatPrice(product.price)} each
                          </span>
                        )}
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => {
                          removeItem(product.id);
                          toast.info(`${product.name} removed from bag`);
                        }}
                        aria-label="Remove item"
                        className="p-2 text-[#8A8A8F] hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping Link */}
              <div className="pt-2">
                <Link
                  href="/shop"
                  className="text-xs font-mono uppercase tracking-wider text-[#8A8A8F] hover:text-[#C9A66B] transition-colors inline-flex items-center gap-1.5"
                >
                  ← Continue Exploring Watches
                </Link>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 rounded-3xl bg-[#141416] border border-white/10 space-y-6 shadow-xl sticky top-28">
                <h2 className="font-serif text-xl text-[#F5F1E8]">Order Summary</h2>

                {/* Coupon Code Input */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#8A8A8F]">
                    <span>Promotional Voucher</span>
                    <span className="text-[#C9A66B]">Try TIME10 or WELCOME5</span>
                  </div>

                  {couponCode ? (
                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#C9A66B]/15 border border-[#C9A66B]/40 text-xs font-mono text-[#C9A66B]">
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4" />
                        <span>Code <strong>{couponCode}</strong> applied ({discountPercentage}% off)</span>
                      </div>
                      <button
                        onClick={handleRemoveCoupon}
                        className="text-[#8A8A8F] hover:text-white"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyCoupon} className="flex gap-2">
                      <input
                        type="text"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                        placeholder="Coupon code"
                        className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white placeholder:text-[#8A8A8F] uppercase focus:outline-none focus:border-[#C9A66B]"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-[#C9A66B] hover:text-black text-xs font-mono text-white transition-colors"
                      >
                        Apply
                      </button>
                    </form>
                  )}
                </div>

                {/* Subtotals & Breakdowns */}
                <div className="space-y-3 pt-4 border-t border-white/5 text-sm">
                  <div className="flex justify-between text-[#8A8A8F]">
                    <span>Bag Subtotal</span>
                    <span className="font-sans text-[#F5F1E8]">{formatPrice(subtotal)}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-400">
                      <span>Voucher Discount</span>
                      <span>- {formatPrice(discount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-[#8A8A8F]">
                    <span>Estimated Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-emerald-400 font-mono text-xs uppercase">FREE</span>
                      ) : (
                        formatPrice(shipping)
                      )}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex justify-between items-baseline">
                    <span className="font-serif text-lg text-[#F5F1E8]">Grand Total</span>
                    <span className="font-sans font-bold text-2xl text-[#C9A66B]">
                      {formatPrice(total)}
                    </span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <button
                  onClick={() => router.push("/checkout")}
                  className="w-full py-4 rounded-full bg-[#F5F1E8] hover:bg-[#C9A66B] text-black font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(201,166,107,0.3)] flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="pt-2 text-center space-y-2">
                  <p className="text-[11px] text-[#8A8A8F] flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C9A66B]" />
                    Guaranteed 256-Bit Encrypted Checkout
                  </p>
                  <p className="text-[10px] text-[#8A8A8F]/70">
                    COD available with zero extra fee across India
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
