"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ArrowRight } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { formatPrice } from "@/lib/utils";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
      setResults([]);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setQuery(text);
    if (!text.trim()) {
      setResults([]);
      return;
    }
    const q = text.toLowerCase();
    const filtered = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.gender.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
    setResults(filtered.slice(0, 8));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#141416] border border-[#C9A66B]/30 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
          <Search className="w-5 h-5 text-[#C9A66B]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search timepieces by name, brand, category (e.g. chronograph, men, luxury)..."
            className="flex-1 bg-transparent text-[#F5F1E8] placeholder:text-[#8A8A8F] text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => {
                setQuery("");
                setResults([]);
              }}
              className="text-[#8A8A8F] hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-mono uppercase bg-white/10 hover:bg-white/20 text-[#8A8A8F] hover:text-white rounded"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {query.trim() === "" ? (
            <div className="py-8 text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-[#8A8A8F] mb-3">
                Suggested Searches
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Chronograph", "Skeleton Tourbillon", "Rose Gold", "Smartwatch", "Under ₹1000", "Men Diver"].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        setQuery(tag);
                        const q = tag.toLowerCase();
                        setResults(
                          PRODUCTS.filter(
                            (p) =>
                              p.name.toLowerCase().includes(q) ||
                              p.category.toLowerCase().includes(q) ||
                              p.gender.toLowerCase().includes(q)
                          ).slice(0, 8)
                        );
                      }}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#C9A66B]/50 hover:bg-[#C9A66B]/10 text-xs text-[#F5F1E8] transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center">
              <p className="font-serif text-lg text-[#F5F1E8] mb-1">
                No timepieces found for &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-[#8A8A8F]">
                Try adjusting your search terms or browse our collections.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center justify-between px-2 pb-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A8A8F]">
                  Found {results.length} timepieces
                </span>
                <Link
                  href={`/shop?search=${encodeURIComponent(query)}`}
                  onClick={onClose}
                  className="text-xs text-[#C9A66B] hover:underline flex items-center gap-1"
                >
                  View all in Shop <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors group"
                >
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-black/40 flex-shrink-0">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-mono text-[10px] tracking-widest text-[#C9A66B] uppercase block">
                      {product.brand} · {product.category}
                    </span>
                    <h4 className="font-serif text-sm font-medium text-[#F5F1E8] truncate group-hover:text-[#C9A66B] transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#8A8A8F] truncate">{product.strap}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-sans font-semibold text-sm text-[#F5F1E8] block">
                      {formatPrice(product.price)}
                    </span>
                    {product.oldPrice && (
                      <span className="font-sans text-[11px] text-[#8A8A8F] line-through block">
                        {formatPrice(product.oldPrice)}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
