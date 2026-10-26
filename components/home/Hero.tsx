"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Clock, CheckCircle2 } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { PRODUCTS } from "@/data/products";

export default function Hero() {
  const heroWatch = PRODUCTS.find((p) => p.id === "tv-m02") || PRODUCTS[0];

  return (
    <section className="relative overflow-hidden pt-8 pb-20 sm:pt-16 sm:pb-32">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A66B]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Pill tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#C9A66B]/30 text-[#C9A66B] text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A66B]" />
              The Autumn 2026 Collection
            </div>

            {/* Main Heading with italic gold word */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#F5F1E8] leading-[1.1]">
              Time <span className="italic font-normal gold-gradient-text">measured</span> in
              centuries, crafted for your wrist.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#8A8A8F] max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Experience our signature watches. From classic automatics to modern smartwatches, curated for those who value every second.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/shop"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F5F1E8] hover:bg-[#C9A66B] text-[#0B0B0D] font-medium text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-[0_0_30px_rgba(201,166,107,0.3)] active:scale-95"
              >
                Explore Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/shop?category=luxury"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent hover:bg-white/5 text-[#F5F1E8] border border-white/20 hover:border-[#C9A66B]/50 font-medium text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center"
              >
                Luxury Watches
              </Link>
            </div>

            {/* 3 Key Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F1E8]">25,000+</p>
                <p className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#8A8A8F] mt-1">
                  Watches Delivered
                </p>
              </div>
              <div className="border-x border-white/10 px-2 sm:px-4">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#C9A66B]">4.9 / 5</p>
                <p className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#8A8A8F] mt-1">
                  Customer Rating
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F1E8]">100%</p>
                <p className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#8A8A8F] mt-1">
                  Original Quality
                </p>
              </div>
            </div>
          </div>

          {/* Right Featured Hero Showcase Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient gold glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#C9A66B]/20 via-transparent to-amber-500/10 rounded-3xl blur-2xl -z-10" />

            <div className="w-full max-w-md bg-[#141416]/90 border border-[#C9A66B]/30 rounded-3xl p-6 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl group hover:border-[#C9A66B]/60 transition-all duration-500">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#C9A66B] uppercase tracking-widest">
                  Featured Watch
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/10 text-white font-mono text-[10px] uppercase tracking-wider">
                  Ref. {heroWatch.id.toUpperCase()}
                </span>
              </div>

              {/* Watch showcase image */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#0A0A0C] my-2">
                <Image
                  src={heroWatch.images[0]}
                  alt={heroWatch.imageAlt || heroWatch.name}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white/90 bg-black/60 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
                  <span>Sapphire Crystal</span>
                  <span className="text-[#C9A66B]">10 ATM Waterproof</span>
                </div>
              </div>

              {/* Watch info */}
              <div className="mt-5 space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#8A8A8F]">
                  {heroWatch.brand}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#F5F1E8] font-medium leading-tight">
                  {heroWatch.name}
                </h3>
                <p className="text-xs text-[#8A8A8F] line-clamp-2">
                  {heroWatch.description}
                </p>
              </div>

              {/* Price and CTA */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#8A8A8F] block font-mono">Special Direct Price</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-sans font-bold text-xl sm:text-2xl text-[#F5F1E8]">
                      {formatPrice(heroWatch.price)}
                    </span>
                    {heroWatch.oldPrice && (
                      <span className="font-sans text-xs text-[#8A8A8F] line-through">
                        {formatPrice(heroWatch.oldPrice)}
                      </span>
                    )}
                  </div>
                </div>

                <Link
                  href={`/product/${heroWatch.slug}`}
                  className="px-5 py-2.5 rounded-full bg-[#C9A66B] hover:bg-[#E6CA85] text-black font-medium text-xs uppercase tracking-wider transition-colors shadow-md flex items-center gap-1.5"
                >
                  Inspect
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
