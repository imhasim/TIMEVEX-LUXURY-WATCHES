import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-4">
      <div className="text-center max-w-lg space-y-6">
        <div className="w-20 h-20 rounded-full bg-[#C9A66B]/15 border border-[#C9A66B]/40 flex items-center justify-center text-[#C9A66B] mx-auto">
          <Clock className="w-10 h-10 animate-pulse" />
        </div>

        <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#C9A66B] block">
          404 · Temporal Disconnect
        </span>

        <h1 className="font-serif text-4xl sm:text-6xl text-[#F5F1E8] font-normal leading-tight">
          This Moment Has <span className="italic gold-gradient-text">Eluded</span> Us.
        </h1>

        <p className="text-sm sm:text-base text-[#8A8A8F] leading-relaxed">
          The timepiece or horizon you are seeking cannot be located in our current chronometer archives. Return to our signature collections.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C9A66B] hover:bg-[#E6CA85] text-black font-mono text-xs uppercase tracking-widest font-semibold transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <span>Return to Sanctuary</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/shop"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#141416] hover:bg-white/10 text-[#F5F1E8] border border-white/15 font-mono text-xs uppercase tracking-widest transition-colors flex items-center justify-center"
          >
            Browse Watches
          </Link>
        </div>
      </div>
    </div>
  );
}
