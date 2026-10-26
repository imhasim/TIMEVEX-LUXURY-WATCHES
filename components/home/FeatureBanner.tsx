import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function FeatureBanner() {
  const highlights = [
    "Surgical 316L Stainless Steel & PVD Gold plating",
    "Anti-reflective synthetic Sapphire Crystal",
    "Precision-regulated Japanese & Swiss mechanical calibres",
    "Hand-stitched genuine calfskin and Italian alligator leather",
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#141416] via-[#16161A] to-[#121215] border border-[#C9A66B]/30 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
          {/* Radial gold background glow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#C9A66B]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A66B] block">
                The Anatomy of Perfection
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F1E8] font-normal leading-tight">
                Crafted to outlast <span className="italic gold-gradient-text">trends</span> and time.
              </h2>

              <p className="text-sm sm:text-base text-[#8A8A8F] leading-relaxed max-w-xl">
                Every TimeVex watch is an ode to meticulous engineering. From the micro-machined gear teeth to the diamond-polished indices, we refuse to compromise on material integrity.
              </p>

              {/* Bullet highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {highlights.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#C9A66B]/20 text-[#C9A66B] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs text-[#F5F1E8]/90">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#C9A66B] hover:bg-[#E6CA85] text-black font-medium text-xs font-mono uppercase tracking-widest transition-all shadow-lg hover:shadow-[0_0_25px_rgba(201,166,107,0.3)]"
                >
                  Discover Our Craftsmanship
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Macro Timepiece Photo */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-full min-h-[380px]">
              <Image
                src="https://images.pexels.com/photos/16987178/pexels-photo-16987178.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="TimeVex Watch Craftsmanship in Presentation Box"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent via-transparent to-[#141416]/80 lg:to-[#141416]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
