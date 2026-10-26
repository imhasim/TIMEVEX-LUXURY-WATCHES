"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  SlidersHorizontal,
  Search,
  X,
  RotateCcw,
  ChevronDown,
  Sparkles,
  Check,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";
import { formatPrice } from "@/lib/utils";

const CATEGORIES = [
  { label: "All Categories", value: "all" },
  { label: "Luxury", value: "luxury" },
  { label: "Chronograph", value: "chronograph" },
  { label: "Analog", value: "analog" },
  { label: "Smart", value: "smart" },
  { label: "Digital", value: "digital" },
];


const SORT_OPTIONS = [
  { label: "Featured & Popular", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Customer Rating", value: "rating" },
  { label: "Newest Arrivals", value: "newest" },
];

export default function ShopClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read gender from URL query param (Navbar controls this)
  const genderParam = searchParams.get("gender");
  const gender = genderParam === "men" || genderParam === "women" ? genderParam : "all";

  // URL Params State
  const initialCategory = searchParams.get("category") || "all";
  const initialSearch = searchParams.get("search") || "";
  const initialSort = searchParams.get("sort") || "featured";
  const initialMaxPrice = Number(searchParams.get("maxPrice")) || 10000;

  const [category, setCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice);
  const [sortBy, setSortBy] = useState(initialSort);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

  // Sync state with URL params
  useEffect(() => {
    const params = new URLSearchParams();
    if (gender !== "all") params.set("gender", gender);
    if (category !== "all") params.set("category", category);
    if (searchQuery.trim()) params.set("search", searchQuery.trim());
    if (sortBy !== "featured") params.set("sort", sortBy);
    if (maxPrice < 10000) params.set("maxPrice", maxPrice.toString());

    const newRelativePathQuery =
      window.location.pathname + (params.toString() ? `?${params.toString()}` : "");
    router.replace(newRelativePathQuery, { scroll: false });
  }, [gender, category, searchQuery, maxPrice, sortBy, router]);

  // Reset all filters except gender which comes from navbar
  const handleResetFilters = () => {
    setCategory("all");
    setSearchQuery("");
    setMaxPrice(10000);
    setSortBy("featured");
    setVisibleCount(12);
  };

  // Filtered and Sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Gender filter: STRICT "men" or "women" only
      if (gender === "men" && item.gender !== "men") {
        return false;
      }
      if (gender === "women" && item.gender !== "women") {
        return false;
      }
      // Category filter
      if (category !== "all" && item.category !== category) {
        return false;
      }
      // Price filter
      if (item.price > maxPrice) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesBrand = item.brand.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesCat = item.category.toLowerCase().includes(q);
        if (!matchesName && !matchesBrand && !matchesDesc && !matchesCat) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "newest") {
        const aNew = a.tags?.includes("new") ? 1 : 0;
        const bNew = b.tags?.includes("new") ? 1 : 0;
        return bNew - aNew;
      }
      // Default: featured first, then bestseller
      const aScore = (a.featured ? 2 : 0) + (a.tags?.includes("bestseller") ? 1 : 0);
      const bScore = (b.featured ? 2 : 0) + (b.tags?.includes("bestseller") ? 1 : 0);
      return bScore - aScore;
    });
  }, [gender, category, maxPrice, searchQuery, sortBy]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  // Dynamic heading based on current gender selection from navbar
  const headingTitle =
    gender === "men"
      ? "Men's Watches"
      : gender === "women"
      ? "Women's Watches"
      : "All Watches";

  return (
    <div className="min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Page Title */}
        <div className="border-b border-white/10 pb-8 mb-8 sm:mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A66B] block mb-2">
                OUR COLLECTION
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl text-[#F5F1E8] font-normal">
                {headingTitle}
              </h1>
              <p className="text-sm text-[#8A8A8F] mt-2 max-w-xl">
                Explore analog, chronograph, digital and smart watches from ₹300 to ₹10,000.
              </p>
            </div>

            {/* Quick Live Search Bar & Controls */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="flex-1 md:w-72 relative">
                <Search className="w-4 h-4 text-[#8A8A8F] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search watches..."
                  className="w-full pl-10 pr-9 py-2.5 rounded-full bg-[#141416] border border-white/10 focus:border-[#C9A66B] text-xs sm:text-sm text-[#F5F1E8] placeholder:text-[#8A8A8F] focus:outline-none transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8A8A8F] hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-[#141416] border border-white/10 text-xs sm:text-sm text-[#F5F1E8] rounded-full pl-4 pr-9 py-2.5 focus:outline-none focus:border-[#C9A66B] cursor-pointer"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-[#141416] text-[#F5F1E8]">
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#8A8A8F] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Mobile Filter Trigger Button */}
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden p-2.5 rounded-full bg-[#141416] border border-white/10 text-[#F5F1E8] hover:border-[#C9A66B]"
                aria-label="Open Filters"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Body Grid (Sidebar Filters + Products Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Left Filter Sidebar */}
          <aside className="hidden lg:block space-y-8 pr-4">
            {/* Filter Header & Reset */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="font-mono text-xs uppercase tracking-widest text-[#F5F1E8] flex items-center gap-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#C9A66B]" />
                Filters
              </span>
              <button
                onClick={handleResetFilters}
                className="text-xs font-mono text-[#8A8A8F] hover:text-[#C9A66B] flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                Reset All
              </button>
            </div>

            {/* Price Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono uppercase text-[#F5F1E8] tracking-wider">
                  Max Price
                </span>
                <span className="font-mono text-[#C9A66B] font-semibold">
                  {formatPrice(maxPrice)}
                </span>
              </div>
              <input
                type="range"
                min="300"
                max="10000"
                step="200"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#C9A66B]"
              />
              <div className="flex items-center justify-between text-[11px] font-mono text-[#8A8A8F]">
                <span>₹300</span>
                <span>₹10,000</span>
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase text-[#F5F1E8] tracking-wider">
                Category
              </h3>
              <div className="space-y-1.5">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setCategory(cat.value)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                      category === cat.value
                        ? "bg-[#C9A66B]/15 text-[#C9A66B] font-medium border border-[#C9A66B]/30"
                        : "text-[#8A8A8F] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{cat.label}</span>
                    {category === cat.value && <Check className="w-3.5 h-3.5 text-[#C9A66B]" />}
                  </button>
                ))}
              </div>
            </div>


            {/* Quality Standard Note */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#C9A66B] block">
                TimeVex Quality
              </span>
              <p className="text-xs text-[#8A8A8F] leading-relaxed">
                All watches include 1-Year Pan-India warranty, secure gift box packaging, and doorstep cash on delivery.
              </p>
            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="lg:col-span-3">
            {/* Active Filters Bar */}
            <div className="flex items-center justify-between mb-6 text-xs text-[#8A8A8F]">
              <span className="font-mono">
                Showing <strong className="text-[#F5F1E8]">{displayedProducts.length}</strong> of{" "}
                <strong className="text-[#F5F1E8]">{filteredProducts.length}</strong> watches
              </span>
              {(category !== "all" || maxPrice < 10000 || searchQuery) && (
                <button
                  onClick={handleResetFilters}
                  className="text-[#C9A66B] hover:underline font-mono"
                >
                  Clear Active Filters
                </button>
              )}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 ? (
              <div className="py-20 text-center rounded-3xl bg-[#141416]/50 border border-white/10 p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C9A66B] mx-auto">
                  <Sparkles className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-[#F5F1E8]">No watches found</h3>
                <p className="text-xs sm:text-sm text-[#8A8A8F] max-w-md mx-auto">
                  Try adjusting your price ceiling, removing category filters, or clearing search keywords.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleResetFilters}
                    className="px-6 py-3 rounded-full bg-[#C9A66B] text-black font-medium text-xs font-mono uppercase tracking-wider hover:bg-[#E6CA85] transition-colors"
                  >
                    Reset All Filters
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* 3-column desktop, 2 column mobile grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                  {displayedProducts.map((product, idx) => (
                    <ProductCard key={product.id} product={product} priority={idx < 4} />
                  ))}
                </div>

                {/* Load More Button */}
                {visibleCount < filteredProducts.length && (
                  <div className="mt-12 text-center">
                    <button
                      onClick={() => setVisibleCount((prev) => prev + 9)}
                      className="px-8 py-3.5 rounded-full bg-[#141416] hover:bg-white/10 text-[#F5F1E8] border border-white/15 hover:border-[#C9A66B]/50 font-mono text-xs uppercase tracking-wider transition-all duration-300 shadow-md"
                    >
                      Load More Watches ({filteredProducts.length - visibleCount} remaining)
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer / Bottom Sheet */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="w-full sm:max-w-md bg-[#141416] border-t sm:border border-[#C9A66B]/30 rounded-t-3xl sm:rounded-3xl max-h-[85vh] overflow-y-auto p-6 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-serif text-xl text-[#F5F1E8]">Filter Watches</span>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 text-[#8A8A8F] hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Price Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono uppercase text-[#F5F1E8]">Max Price</span>
                <span className="font-mono text-[#C9A66B] font-semibold">{formatPrice(maxPrice)}</span>
              </div>
              <input
                type="range"
                min="300"
                max="10000"
                step="200"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#C9A66B]"
              />
            </div>

            {/* Categories */}
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase text-[#8A8A8F] block">Category</span>
              <div className="grid grid-cols-2 gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setCategory(cat.value)}
                    className={`px-3 py-2 rounded-xl text-xs text-left transition-colors ${
                      category === cat.value
                        ? "bg-[#C9A66B] text-black font-semibold"
                        : "bg-white/5 text-[#8A8A8F]"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>


            <div className="pt-4 border-t border-white/10 flex items-center gap-3">
              <button
                onClick={handleResetFilters}
                className="flex-1 py-3 rounded-full bg-white/5 text-[#8A8A8F] hover:text-white text-xs font-mono uppercase"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 py-3 rounded-full bg-[#C9A66B] text-black font-medium text-xs font-mono uppercase"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
