import { ShieldCheck, RefreshCw, Lock, Sparkles } from "lucide-react";

export default function Perks() {
  const perks = [
    {
      icon: ShieldCheck,
      title: "Comprehensive 1-Year Warranty",
      description: "Covers internal mechanical movements, battery replacement, and manufacturing perfection.",
    },
    {
      icon: RefreshCw,
      title: "7-Day No-Questions Return",
      description: "Try it on your wrist in person. If it doesn’t speak to you, we arrange an instant doorstep pickup.",
    },
    {
      icon: Lock,
      title: "Encrypted & COD Security",
      description: "Pay securely via 256-bit encrypted UPI, Cards, or choose Cash on Delivery at your door.",
    },
    {
      icon: Sparkles,
      title: "100% Certified Authentic",
      description: "Each timepiece comes with a unique reference serial card and authenticity hologram.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A66B] block mb-2">
            The TimeVex Assurance
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E8] font-normal">
            Confidence in Every <span className="italic gold-gradient-text">Detail</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, index) => {
            const Icon = perk.icon;
            return (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-2xl bg-[#141416] border border-white/8 hover:border-[#C9A66B]/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(201,166,107,0.1)] group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:bg-[#C9A66B]/10 group-hover:border-[#C9A66B]/40 flex items-center justify-center text-[#C9A66B] transition-colors mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg text-[#F5F1E8] font-medium mb-2 group-hover:text-[#C9A66B] transition-colors">
                    {perk.title}
                  </h3>
                  <p className="text-xs text-[#8A8A8F] leading-relaxed">
                    {perk.description}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-white/5">
                  <span className="font-mono text-[10px] text-[#C9A66B] tracking-wider uppercase">
                    Guaranteed Purity
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
