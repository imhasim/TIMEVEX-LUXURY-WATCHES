import { Sparkles, ShieldCheck, Truck, RefreshCw, Droplets, Banknote } from "lucide-react";

export default function Marquee() {
  const items = [
    { label: "Complimentary Express Delivery", icon: Truck },
    { label: "1-Year Official International Warranty", icon: ShieldCheck },
    { label: "7-Day Hassle-Free Returns & Exchanges", icon: RefreshCw },
    { label: "Precision Tested & Water Resistant", icon: Droplets },
    { label: "Cash on Delivery Available Pan-India", icon: Banknote },
    { label: "100% Certified Authentic Movements", icon: Sparkles },
  ];

  return (
    <div className="relative py-4 bg-[#141416]/90 border-y border-white/8 overflow-hidden backdrop-blur-md">
      {/* Subtle edge fades */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#0B0B0D] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#0B0B0D] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
        {/* Render twice for continuous loop */}
        {[...items, ...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-mono tracking-widest uppercase text-[#F5F1E8]/90">
              <Icon className="w-4 h-4 text-[#C9A66B] flex-shrink-0" />
              <span>{item.label}</span>
              <span className="text-[#C9A66B]/50 ml-6">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
