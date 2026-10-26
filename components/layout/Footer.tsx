import Link from "next/link";
import { ShieldCheck, Truck, RefreshCw, Award, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#08080A] border-t border-white/8 text-[#8A8A8F] pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Perks Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-white/5">
          <div className="flex items-center gap-3">
            <Truck className="w-5 h-5 text-[#C9A66B]" />
            <div>
              <h5 className="font-sans font-medium text-xs text-[#F5F1E8]">Complimentary Shipping</h5>
              <p className="text-[11px] text-[#8A8A8F]">All orders above ₹999 across India</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C9A66B]" />
            <div>
              <h5 className="font-sans font-medium text-xs text-[#F5F1E8]">1-Year Official Warranty</h5>
              <p className="text-[11px] text-[#8A8A8F]">Authenticity & craftsmanship guarantee</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <RefreshCw className="w-5 h-5 text-[#C9A66B]" />
            <div>
              <h5 className="font-sans font-medium text-xs text-[#F5F1E8]">7-Day Hassle-Free Returns</h5>
              <p className="text-[11px] text-[#8A8A8F]">Easy pickup & exchange</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-[#C9A66B]" />
            <div>
              <h5 className="font-sans font-medium text-xs text-[#F5F1E8]">Cash on Delivery</h5>
              <p className="text-[11px] text-[#8A8A8F]">Inspect at doorstep & pay securely</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-wider text-[#F5F1E8]">
                TIME<span className="text-[#C9A66B]">VEX</span>
              </span>
            </Link>
            <p className="text-sm text-[#8A8A8F] max-w-sm leading-relaxed">
              TimeVex celebrates the art of fine watchmaking. Bringing timeless mechanical craft and modern digital innovation to watch lovers across India at accessible price points.
            </p>
            <div className="pt-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#C9A66B] block mb-1">
                Concierge Support
              </span>
              <p className="text-xs text-[#F5F1E8]">Mon – Sat: 10:00 AM – 7:00 PM IST</p>
              <p className="text-xs text-[#8A8A8F]">concierge@timevex.com · +91 98765 43210</p>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#F5F1E8] mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/shop?category=luxury" className="hover:text-[#C9A66B] transition-colors">
                  Luxury Watches
                </Link>
              </li>
              <li>
                <Link href="/shop?category=chronograph" className="hover:text-[#C9A66B] transition-colors">
                  Chronographs
                </Link>
              </li>
              <li>
                <Link href="/shop?gender=men" className="hover:text-[#C9A66B] transition-colors">
                  Men&apos;s Watches
                </Link>
              </li>
              <li>
                <Link href="/shop?gender=women" className="hover:text-[#C9A66B] transition-colors">
                  Women&apos;s Watches
                </Link>
              </li>
              <li>
                <Link href="/shop?category=smart" className="hover:text-[#C9A66B] transition-colors">
                  Smartwatches
                </Link>
              </li>
              <li>
                <Link href="/shop?category=digital" className="hover:text-[#C9A66B] transition-colors">
                  Digital Watches
                </Link>
              </li>
            </ul>
          </div>

          {/* The Maison */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#F5F1E8] mb-4">
              Our Brand
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#C9A66B] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about#craftsmanship" className="hover:text-[#C9A66B] transition-colors">
                  Craftsmanship & Specs
                </Link>
              </li>
              <li>
                <Link href="/about#sustainability" className="hover:text-[#C9A66B] transition-colors">
                  Ethical Sourcing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C9A66B] transition-colors">
                  Flagship Store
                </Link>
              </li>
            </ul>
          </div>

          {/* Client Service */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#F5F1E8] mb-4">
              Client Service
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/contact" className="hover:text-[#C9A66B] transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-[#C9A66B] transition-colors">
                  View Bag
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-[#C9A66B] transition-colors">
                  Saved Watches
                </Link>
              </li>
              <li>
                <Link href="/about#faq" className="hover:text-[#C9A66B] transition-colors">
                  Warranty & Servicing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A8A8F] gap-4">
          <p>© {new Date().getFullYear()} TimeVex Watches Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Secured with 256-Bit SSL</span>
            <span>COD Available Across 27,000+ Pincodes</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
