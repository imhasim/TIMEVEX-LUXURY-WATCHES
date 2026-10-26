"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Search, Heart, ShoppingBag, Menu, X, Compass } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import SearchModal from "./SearchModal";

const navLinks = [
  { name: "Shop All", href: "/shop" },
  { name: "Men", href: "/shop?gender=men" },
  { name: "Women", href: "/shop?gender=women" },
  { name: "Luxury", href: "/shop?category=luxury" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function NavLinksDesktop() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const gender = searchParams.get("gender");
  const category = searchParams.get("category");

  const isLinkActive = (href: string) => {
    if (href === "/shop") {
      return pathname === "/shop" && !gender && !category;
    }
    if (href === "/shop?gender=men") {
      return pathname === "/shop" && gender === "men";
    }
    if (href === "/shop?gender=women") {
      return pathname === "/shop" && gender === "women";
    }
    if (href === "/shop?category=luxury") {
      return pathname === "/shop" && category === "luxury";
    }
    return pathname === href;
  };

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navLinks.map((link) => {
        const isActive = isLinkActive(link.href);
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`text-sm font-medium tracking-wide transition-all relative py-1 ${
              isActive
                ? "text-[#C9A66B]"
                : "text-[#8A8A8F] hover:text-[#F5F1E8]"
            }`}
          >
            {link.name}
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A66B] rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

function NavLinksDesktopFallback() {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`text-sm font-medium tracking-wide transition-all relative py-1 ${
            pathname === link.href
              ? "text-[#C9A66B]"
              : "text-[#8A8A8F] hover:text-[#F5F1E8]"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

function NavLinksMobile({ onClose }: { onClose: () => void }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const gender = searchParams.get("gender");
  const category = searchParams.get("category");

  const isLinkActive = (href: string) => {
    if (href === "/shop") {
      return pathname === "/shop" && !gender && !category;
    }
    if (href === "/shop?gender=men") {
      return pathname === "/shop" && gender === "men";
    }
    if (href === "/shop?gender=women") {
      return pathname === "/shop" && gender === "women";
    }
    if (href === "/shop?category=luxury") {
      return pathname === "/shop" && category === "luxury";
    }
    return pathname === href;
  };

  return (
    <div className="flex flex-col space-y-3">
      {navLinks.map((link) => {
        const isActive = isLinkActive(link.href);
        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={onClose}
            className={`text-lg font-serif py-1 border-b border-white/5 transition-colors flex items-center justify-between ${
              isActive
                ? "text-[#C9A66B] font-semibold"
                : "text-[#F5F1E8] hover:text-[#C9A66B]"
            }`}
          >
            <span>{link.name}</span>
            {isActive && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A66B]" />
            )}
          </Link>
        );
      })}
    </div>
  );
}

function NavLinksMobileFallback({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col space-y-3">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={onClose}
          className="text-lg font-serif text-[#F5F1E8] hover:text-[#C9A66B] py-1 border-b border-white/5 transition-colors"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Cart and Wishlist count
  const cartItemsCount = useCartStore((state) => state.getTotalItemsCount());
  const wishlistItems = useWishlistStore((state) => state.items);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B0B0D]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3"
            : "bg-gradient-to-b from-[#0B0B0D] to-[#0B0B0D]/60 backdrop-blur-sm border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-[#8A8A8F] hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Brand Logo */}
          <Link href="/" className="flex flex-col items-start group">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-[#F5F1E8] group-hover:text-[#C9A66B] transition-colors">
              TIME<span className="text-[#C9A66B]">VEX</span>
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#8A8A8F] -mt-1 group-hover:text-[#F5F1E8] transition-colors">
              LUXURY WATCHES
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <Suspense fallback={<NavLinksDesktopFallback />}>
            <NavLinksDesktop />
          </Suspense>

          {/* Right Action Icons (Search, Wishlist, Cart) */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchModalOpen(true)}
              aria-label="Search watches"
              className="p-2 text-[#8A8A8F] hover:text-[#F5F1E8] hover:bg-white/5 rounded-full transition-colors relative"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Link with Badge */}
            <Link
              href="/wishlist"
              aria-label="View Wishlist"
              className="p-2 text-[#8A8A8F] hover:text-[#F5F1E8] hover:bg-white/5 rounded-full transition-colors relative"
            >
              <Heart className="w-5 h-5" />
              {mounted && wishlistItems.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#C9A66B] text-black font-mono text-[10px] font-bold rounded-full flex items-center justify-center animate-in zoom-in">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* Cart Link with Badge */}
            <Link
              href="/cart"
              aria-label="View Shopping Cart"
              className="p-2 text-[#8A8A8F] hover:text-[#F5F1E8] hover:bg-white/5 rounded-full transition-colors relative"
            >
              <ShoppingBag className="w-5 h-5" />
              {mounted && cartItemsCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-white text-black font-mono text-[10px] font-bold rounded-full flex items-center justify-center animate-in zoom-in">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B0B0D]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
            <Suspense fallback={<NavLinksMobileFallback onClose={() => setMobileMenuOpen(false)} />}>
              <NavLinksMobile onClose={() => setMobileMenuOpen(false)} />
            </Suspense>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#8A8A8F]">
              <span className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#C9A66B]" />
                Pan-India Free Express Shipping
              </span>
              <span className="text-[#C9A66B] font-mono">100% Authentic</span>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </>
  );
}
