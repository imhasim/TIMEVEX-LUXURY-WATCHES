"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import confetti from "canvas-confetti";
import {
  CheckCircle2,
  Package,
  Truck,
  ShieldCheck,
  ArrowRight,
  Clock,
  Printer,
  Download,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { CartItem } from "@/store/cartStore";

interface OrderData {
  orderId: string;
  date: string;
  customer: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    paymentMethod: string;
  };
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  couponCode: string | null;
  deliveryEstimate: string;
}

export default function OrderSuccessPage() {
  const [order, setOrder] = useState<OrderData | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Trigger celebratory gold and dark luxury confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#C9A66B", "#E6CA85", "#FFFFFF", "#9B783E"],
      });
    } catch {
      // ignore
    }

    const saved = localStorage.getItem("timevex-latest-order");
    if (saved) {
      try {
        setOrder(JSON.parse(saved));
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#C9A66B] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Fallback demo order if visited directly
  const displayOrder: OrderData = order || {
    orderId: "TVX-849201",
    date: new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
    customer: {
      fullName: "Watch Collector",
      email: "collector@timevex.com",
      phone: "9876543210",
      address: "104 Heritage Boulevard",
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "560001",
      paymentMethod: "cod",
    },
    items: [],
    subtotal: 9499,
    discount: 950,
    shipping: 0,
    total: 8549,
    couponCode: "TIME10",
    deliveryEstimate: "3 to 5 business days",
  };

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Card Header */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#141416] border border-[#C9A66B]/30 text-center space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
          {/* Subtle gold radial backdrop */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#C9A66B]/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="w-20 h-20 rounded-full bg-[#C9A66B]/20 border border-[#C9A66B]/50 flex items-center justify-center text-[#C9A66B] mx-auto animate-in zoom-in duration-500">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A66B] block">
              Order Confirmed & Allocated
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-[#F5F1E8] font-normal">
              Thank You for Your <span className="italic gold-gradient-text">Acquisition</span>
            </h1>
            <p className="text-sm sm:text-base text-[#8A8A8F] max-w-md mx-auto">
              Your timepiece has entered precision inspection and will be prepared in our velvet collector presentation box.
            </p>
          </div>

          {/* Reference & Order Details Banner */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-mono text-left">
            <div>
              <span className="text-[#8A8A8F] block text-[10px] uppercase">Order Number</span>
              <span className="text-[#C9A66B] font-bold text-sm">{displayOrder.orderId}</span>
            </div>
            <div className="border-l border-white/10 pl-4 sm:pl-8">
              <span className="text-[#8A8A8F] block text-[10px] uppercase">Placed On</span>
              <span className="text-[#F5F1E8]">{displayOrder.date}</span>
            </div>
            <div className="border-l border-white/10 pl-4 sm:pl-8">
              <span className="text-[#8A8A8F] block text-[10px] uppercase">Payment</span>
              <span className="text-[#F5F1E8] uppercase">{displayOrder.customer.paymentMethod}</span>
            </div>
            <div className="border-l border-white/10 pl-4 sm:pl-8">
              <span className="text-[#8A8A8F] block text-[10px] uppercase">Delivery Expectation</span>
              <span className="text-emerald-400 font-semibold">{displayOrder.deliveryEstimate}</span>
            </div>
          </div>
        </div>

        {/* Breakdown & Customer Address Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Purchased Items */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#141416] border border-white/10 space-y-4">
            <h2 className="font-serif text-xl text-[#F5F1E8] flex items-center gap-2">
              <Package className="w-5 h-5 text-[#C9A66B]" />
              Timepieces In This Order
            </h2>

            {displayOrder.items.length > 0 ? (
              <div className="divide-y divide-white/5 space-y-3">
                {displayOrder.items.map(({ product, qty }) => (
                  <div key={product.id} className="pt-3 first:pt-0 flex items-center gap-4">
                    <div className="relative w-14 h-16 rounded-xl overflow-hidden bg-black/40 flex-shrink-0">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm text-[#F5F1E8] truncate">
                        {product.name}
                      </h4>
                      <p className="text-[11px] text-[#8A8A8F] font-mono">
                        Qty: {qty} · {product.strap}
                      </p>
                    </div>
                    <span className="font-sans font-semibold text-sm text-[#F5F1E8]">
                      {formatPrice(product.price * qty)}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-[#8A8A8F]">1x Timepiece allocated</p>
            )}

            <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
              <div className="flex justify-between text-[#8A8A8F]">
                <span>Total Paid</span>
                <span className="font-sans font-bold text-base text-[#C9A66B]">
                  {formatPrice(displayOrder.total)}
                </span>
              </div>
            </div>
          </div>

          {/* Shipping Destination */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#141416] border border-white/10 space-y-4">
            <h2 className="font-serif text-xl text-[#F5F1E8] flex items-center gap-2">
              <Truck className="w-5 h-5 text-[#C9A66B]" />
              Delivery Destination
            </h2>

            <div className="space-y-2 text-xs text-[#8A8A8F] leading-relaxed">
              <p className="font-medium text-sm text-[#F5F1E8]">
                {displayOrder.customer.fullName}
              </p>
              <p>{displayOrder.customer.address}</p>
              <p>
                {displayOrder.customer.city}, {displayOrder.customer.state} -{" "}
                <span className="font-mono text-white">{displayOrder.customer.pincode}</span>
              </p>
              <p className="font-mono pt-1">
                Phone: <span className="text-white">{displayOrder.customer.phone}</span>
              </p>
              <p className="font-mono">
                Email: <span className="text-white">{displayOrder.customer.email}</span>
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1 text-xs">
              <span className="font-mono text-[10px] uppercase text-[#C9A66B] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                White-Glove Courier Service
              </span>
              <p className="text-[11px] text-[#8A8A8F]">
                Tracking details will be communicated via SMS once your timepiece passes final chronometer inspection.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/shop"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C9A66B] hover:bg-[#E6CA85] text-black font-mono text-xs uppercase tracking-widest font-semibold transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            onClick={() => window.print()}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#141416] hover:bg-white/10 text-[#F5F1E8] border border-white/15 font-mono text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
          >
            <Printer className="w-4 h-4" />
            <span>Print Receipt</span>
          </button>
        </div>
      </div>
    </div>
  );
}
