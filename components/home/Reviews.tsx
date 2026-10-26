import { Star, CheckCircle, Quote } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Vikramaditya Sengupta",
      location: "Bengaluru, Karnataka",
      watchPurchased: "Sovereign Tourbillon Obsidian",
      rating: 5,
      date: "October 14, 2026",
      quote:
        "The finishing on the Sovereign Tourbillon matches timepieces I have paid ₹50,000 for. The open skeleton balance wheel under sapphire crystal is hypnotizing. Packaging was heirloom-grade.",
    },
    {
      id: 2,
      name: "Ananya Deshmukh",
      location: "Mumbai, Maharashtra",
      watchPurchased: "Celestial Emerald Diamond Pavé",
      rating: 5,
      date: "October 02, 2026",
      quote:
        "Wore this to a festive reception and received compliments throughout the evening. The green sunburst dial against the warm rose gold mesh is breathtakingly royal.",
    },
    {
      id: 3,
      name: "Rohan Singhal",
      location: "New Delhi",
      watchPurchased: "Apex Chronograph Speedmaster",
      rating: 5,
      date: "September 28, 2026",
      quote:
        "Weight, heft, and bezel click are super satisfying. COD delivery took just 2 days to Delhi. Unboxing felt like receiving an authentic luxury Swiss timepiece.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A66B] block mb-2">
            Collector Testimonials
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F1E8] font-normal">
            Echoes of <span className="italic gold-gradient-text">Satisfaction</span>
          </h2>
          <p className="text-sm text-[#8A8A8F] mt-3">
            Real feedback from discerning collectors across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-7 rounded-2xl bg-[#141416] border border-white/8 hover:border-[#C9A66B]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,166,107,0.1)] flex flex-col justify-between relative group"
            >
              <Quote className="w-8 h-8 text-[#C9A66B]/20 absolute top-6 right-6" />

              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A66B] text-[#C9A66B]" />
                  ))}
                </div>

                <p className="text-sm text-[#F5F1E8]/90 italic leading-relaxed mb-6 font-serif text-base">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-sans font-medium text-sm text-[#F5F1E8] flex items-center gap-1.5">
                    {rev.name}
                    <CheckCircle className="w-3.5 h-3.5 text-[#C9A66B]" />
                  </h4>
                  <span className="text-[10px] text-[#8A8A8F] font-mono">{rev.date}</span>
                </div>
                <p className="text-xs text-[#8A8A8F]">{rev.location}</p>
                <span className="font-mono text-[10px] text-[#C9A66B] tracking-wider uppercase block pt-1">
                  Verified Purchase · {rev.watchPurchased}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
