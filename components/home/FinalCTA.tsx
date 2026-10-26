import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-[#0D0D10] to-[#08080A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="w-12 h-12 rounded-full bg-[#C9A66B]/10 border border-[#C9A66B]/30 flex items-center justify-center text-[#C9A66B] mx-auto">
          <Compass className="w-6 h-6" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F1E8] font-normal leading-tight max-w-2xl mx-auto">
          Your journey into <span className="italic gold-gradient-text">masterful</span> watchmaking begins today.
        </h2>

        <p className="text-base text-[#8A8A8F] max-w-lg mx-auto">
          Browse our complete catalog of men&apos;s, women&apos;s, chronograph, and smart watches with free delivery and cash on delivery.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/shop"
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#C9A66B] hover:bg-[#E6CA85] text-black font-medium text-xs font-mono uppercase tracking-widest transition-all duration-300 shadow-[0_0_30px_rgba(201,166,107,0.3)] flex items-center justify-center gap-2"
          >
            Shop the Full Collection
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-[#F5F1E8] border border-white/15 font-medium text-xs font-mono uppercase tracking-widest transition-all duration-300 flex items-center justify-center"
          >
            Speak to Concierge
          </Link>
        </div>
      </div>
    </section>
  );
}
