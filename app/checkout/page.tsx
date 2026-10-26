"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ShieldCheck,
  Truck,
  CreditCard,
  QrCode,
  Banknote,
  ArrowRight,
  Lock,
  ChevronLeft,
} from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { checkoutSchema, CheckoutFormData } from "@/lib/validators";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";

export default function CheckoutPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const getSubtotal = useCartStore((state) => state.getSubtotal);
  const getDiscountAmount = useCartStore((state) => state.getDiscountAmount);
  const getShippingAmount = useCartStore((state) => state.getShippingAmount);
  const getTotal = useCartStore((state) => state.getTotal);
  const couponCode = useCartStore((state) => state.couponCode);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      paymentMethod: "cod",
    },
  });

  const selectedPayment = watch("paymentMethod");

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

  // If cart is empty, prompt user to add items
  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="text-center max-w-md p-8 rounded-3xl bg-[#141416] border border-white/10 space-y-4">
          <h2 className="font-serif text-2xl text-[#F5F1E8]">Your bag is currently empty</h2>
          <p className="text-xs text-[#8A8A8F]">
            Please add at least one timepiece to your bag before proceeding to checkout.
          </p>
          <Link
            href="/shop"
            className="inline-block px-6 py-3 rounded-full bg-[#C9A66B] text-black font-mono text-xs uppercase tracking-wider font-semibold"
          >
            Browse Watches
          </Link>
        </div>
      </div>
    );
  }

  const subtotal = getSubtotal();
  const discount = getDiscountAmount();
  const shipping = getShippingAmount();
  const total = getTotal();

  const onSubmit = async (data: CheckoutFormData) => {
    setIsSubmitting(true);

    // Simulate order placement
    setTimeout(() => {
      const orderId = `TVX-${Math.floor(100000 + Math.random() * 900000)}`;
      const orderData = {
        orderId,
        date: new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        customer: data,
        items: items,
        subtotal,
        discount,
        shipping,
        total,
        couponCode,
        deliveryEstimate: "3 to 5 business days",
      };

      // Store order details in localStorage for order success page
      localStorage.setItem("timevex-latest-order", JSON.stringify(orderData));

      // Clear cart
      clearCart();

      toast.success("Order Placed Successfully!", {
        description: `Order ID: ${orderId}`,
      });

      router.push("/order-success");
    }, 1200);
  };

  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <Link
              href="/cart"
              className="text-xs font-mono uppercase tracking-wider text-[#8A8A8F] hover:text-[#C9A66B] flex items-center gap-1.5 transition-colors mb-2"
            >
              <ChevronLeft className="w-4 h-4" /> Return to Bag
            </Link>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#F5F1E8] font-normal">
              Secure <span className="italic gold-gradient-text">Checkout</span>
            </h1>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
            <Lock className="w-3.5 h-3.5" /> 256-Bit SSL Encrypted
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Customer Address & Payment Method Form */}
            <div className="lg:col-span-7 space-y-8">
              {/* Shipping Address */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#141416] border border-white/10 space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <span className="w-7 h-7 rounded-full bg-[#C9A66B] text-black font-mono text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  <h2 className="font-serif text-xl text-[#F5F1E8]">Shipping Details</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="font-mono text-xs text-[#8A8A8F] uppercase">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register("fullName")}
                      placeholder="e.g. Vikramaditya Sengupta"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-[#F5F1E8] placeholder:text-[#8A8A8F] focus:outline-none focus:border-[#C9A66B]"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-400">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-[#8A8A8F] uppercase">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="vikram@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-[#F5F1E8] placeholder:text-[#8A8A8F] focus:outline-none focus:border-[#C9A66B]"
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-[#8A8A8F] uppercase">
                      10-Digit Mobile (For Delivery SMS) *
                    </label>
                    <input
                      type="tel"
                      maxLength={10}
                      {...register("phone")}
                      placeholder="9876543210"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-[#F5F1E8] placeholder:text-[#8A8A8F] focus:outline-none focus:border-[#C9A66B]"
                    />
                    {errors.phone && (
                      <p className="text-xs text-rose-400">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Street Address */}
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="font-mono text-xs text-[#8A8A8F] uppercase">
                      Street Address & Landmark *
                    </label>
                    <input
                      type="text"
                      {...register("address")}
                      placeholder="Flat 402, Royal Palms, MG Road"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-[#F5F1E8] placeholder:text-[#8A8A8F] focus:outline-none focus:border-[#C9A66B]"
                    />
                    {errors.address && (
                      <p className="text-xs text-rose-400">{errors.address.message}</p>
                    )}
                  </div>

                  {/* City */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-[#8A8A8F] uppercase">
                      City *
                    </label>
                    <input
                      type="text"
                      {...register("city")}
                      placeholder="Bengaluru"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-[#F5F1E8] placeholder:text-[#8A8A8F] focus:outline-none focus:border-[#C9A66B]"
                    />
                    {errors.city && (
                      <p className="text-xs text-rose-400">{errors.city.message}</p>
                    )}
                  </div>

                  {/* State */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-[#8A8A8F] uppercase">
                      State *
                    </label>
                    <input
                      type="text"
                      {...register("state")}
                      placeholder="Karnataka"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-[#F5F1E8] placeholder:text-[#8A8A8F] focus:outline-none focus:border-[#C9A66B]"
                    />
                    {errors.state && (
                      <p className="text-xs text-rose-400">{errors.state.message}</p>
                    )}
                  </div>

                  {/* Pincode */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-[#8A8A8F] uppercase">
                      Pincode (6 digits) *
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      {...register("pincode")}
                      placeholder="560001"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-[#F5F1E8] placeholder:text-[#8A8A8F] focus:outline-none focus:border-[#C9A66B]"
                    />
                    {errors.pincode && (
                      <p className="text-xs text-rose-400">{errors.pincode.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#141416] border border-white/10 space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <span className="w-7 h-7 rounded-full bg-[#C9A66B] text-black font-mono text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  <h2 className="font-serif text-xl text-[#F5F1E8]">Payment Method</h2>
                </div>

                <div className="space-y-3">
                  {/* COD */}
                  <label
                    onClick={() => setValue("paymentMethod", "cod")}
                    className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                      selectedPayment === "cod"
                        ? "bg-[#C9A66B]/15 border-[#C9A66B] ring-1 ring-[#C9A66B]/30"
                        : "bg-white/5 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Banknote className="w-5 h-5 text-[#C9A66B]" />
                      <div>
                        <span className="font-medium text-sm text-[#F5F1E8] block">
                          Cash on Delivery (COD)
                        </span>
                        <span className="text-xs text-[#8A8A8F]">
                          Inspect package at doorstep & pay cash or UPI to delivery agent
                        </span>
                      </div>
                    </div>
                    <input
                      type="radio"
                      value="cod"
                      {...register("paymentMethod")}
                      className="accent-[#C9A66B]"
                    />
                  </label>

                  {/* UPI */}
                  <label
                    onClick={() => setValue("paymentMethod", "upi")}
                    className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                      selectedPayment === "upi"
                        ? "bg-[#C9A66B]/15 border-[#C9A66B] ring-1 ring-[#C9A66B]/30"
                        : "bg-white/5 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <QrCode className="w-5 h-5 text-[#C9A66B]" />
                      <div>
                        <span className="font-medium text-sm text-[#F5F1E8] block">
                          Instant UPI / Dynamic QR
                        </span>
                        <span className="text-xs text-[#8A8A8F]">
                          Pay via Google Pay, PhonePe, Paytm, or BHIM UPI
                        </span>
                      </div>
                    </div>
                    <input
                      type="radio"
                      value="upi"
                      {...register("paymentMethod")}
                      className="accent-[#C9A66B]"
                    />
                  </label>

                  {/* Card */}
                  <label
                    onClick={() => setValue("paymentMethod", "card")}
                    className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                      selectedPayment === "card"
                        ? "bg-[#C9A66B]/15 border-[#C9A66B] ring-1 ring-[#C9A66B]/30"
                        : "bg-white/5 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-5 h-5 text-[#C9A66B]" />
                      <div>
                        <span className="font-medium text-sm text-[#F5F1E8] block">
                          Credit / Debit Card
                        </span>
                        <span className="text-xs text-[#8A8A8F]">
                          Visa, Mastercard, RuPay & American Express
                        </span>
                      </div>
                    </div>
                    <input
                      type="radio"
                      value="card"
                      {...register("paymentMethod")}
                      className="accent-[#C9A66B]"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Right: Order Summary Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-7 rounded-3xl bg-[#141416] border border-white/10 space-y-6 sticky top-28 shadow-xl">
                <h3 className="font-serif text-xl text-[#F5F1E8]">Order Details ({items.length} items)</h3>

                {/* Mini Item List */}
                <div className="max-h-60 overflow-y-auto divide-y divide-white/5 pr-1 space-y-3">
                  {items.map(({ product, qty }) => (
                    <div key={product.id} className="pt-3 first:pt-0 flex items-center gap-3">
                      <div className="relative w-12 h-14 rounded-lg overflow-hidden bg-black/40 flex-shrink-0">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-xs text-[#F5F1E8] truncate">
                          {product.name}
                        </h4>
                        <span className="text-[11px] text-[#8A8A8F] block font-mono">
                          Qty: {qty} × {formatPrice(product.price)}
                        </span>
                      </div>
                      <span className="font-sans font-semibold text-xs text-[#F5F1E8]">
                        {formatPrice(product.price * qty)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Subtotals */}
                <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs sm:text-sm">
                  <div className="flex justify-between text-[#8A8A8F]">
                    <span>Subtotal</span>
                    <span className="font-sans text-[#F5F1E8]">{formatPrice(subtotal)}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-400">
                      <span>Voucher Discount ({couponCode})</span>
                      <span>- {formatPrice(discount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-[#8A8A8F]">
                    <span>Insured Express Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-emerald-400 font-mono text-xs uppercase">FREE</span>
                      ) : (
                        formatPrice(shipping)
                      )}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex justify-between items-baseline">
                    <span className="font-serif text-lg text-[#F5F1E8]">Total Payable</span>
                    <span className="font-sans font-bold text-2xl text-[#C9A66B]">
                      {formatPrice(total)}
                    </span>
                  </div>
                </div>

                {/* Submit Order Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#C9A66B] hover:bg-[#E6CA85] text-black font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(201,166,107,0.3)] flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Securing Your Timepiece...</span>
                  ) : (
                    <>
                      <span>Place Order · {formatPrice(total)}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="pt-2 text-center space-y-2 text-[11px] text-[#8A8A8F]">
                  <p className="flex items-center justify-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-[#C9A66B]" />
                    Estimated Dispatch: Next Business Day
                  </p>
                  <p className="text-[10px] text-[#8A8A8F]/70">
                    Includes TimeVex Authenticity Certificate & Velvet Presentation Box
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
