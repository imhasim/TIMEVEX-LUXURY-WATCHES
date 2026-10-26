import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";

export default function FeaturedCollection() {
  const featured = getFeaturedProducts().slice(0, 3);

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A66B] block">
              Our Watches
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F1E8] font-normal">
              The <span className="italic gold-gradient-text">Signature</span> Collection
            </h2>
            <p className="text-sm sm:text-base text-[#8A8A8F] max-w-xl">
              Each piece is individually calibrated, featuring surgical 316L steel, sapphire crystal coatings, and hand-finished dials.
            </p>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm font-mono tracking-wider uppercase text-[#C9A66B] hover:text-[#E6CA85] transition-colors group"
          >
            <span>View All Watches</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Showcase Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((product, idx) => (
            <ProductCard key={product.id} product={product} priority={idx === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
