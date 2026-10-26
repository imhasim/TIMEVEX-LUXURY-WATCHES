"use client";

import { useState } from "react";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      toast.success("Welcome to the TimeVex Collectors Club!", {
        description: "Your 10% secret voucher code has been dispatched to your inbox.",
      });
      setEmail("");
    }, 600);
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-[#0D0D10] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#C9A66B]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A66B] block mb-3">
          The TimeVex Dispatch
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F1E8] font-normal leading-tight mb-4">
          Privileged Access to <span className="italic gold-gradient-text">Rare</span> Editions
        </h2>

        <p className="text-sm sm:text-base text-[#8A8A8F] max-w-lg mx-auto mb-8 leading-relaxed">
          Join our watch community. Receive private previews of limited edition drops, watch guide articles, and an exclusive 10% welcome coupon.
        </p>

        {subscribed ? (
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-sm animate-in zoom-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>You are enrolled. Use code <strong>WELCOME5</strong> or <strong>TIME10</strong> at checkout!</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <div className="relative w-full">
              <Mail className="w-4 h-4 text-[#8A8A8F] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full pl-11 pr-4 py-3.5 rounded-full bg-[#141416] border border-white/10 focus:border-[#C9A66B] text-sm text-[#F5F1E8] placeholder:text-[#8A8A8F] focus:outline-none transition-colors shadow-inner"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#F5F1E8] hover:bg-[#C9A66B] text-black font-medium text-xs font-mono uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(201,166,107,0.3)] flex-shrink-0 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
            >
              {loading ? "Joining..." : "Join Circle"}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <p className="text-[11px] text-[#8A8A8F] mt-4 font-mono">
          We honor your sanctuary. Unsubscribe with a single click at any time.
        </p>
      </div>
    </section>
  );
}
