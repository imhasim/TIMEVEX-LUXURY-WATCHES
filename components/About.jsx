export default function About() {
  const points = [
    "TimeVex sells good watches at low prices.",
    "We have watches for men and women.",
    "Prices start from ₹300 and go up to ₹10,000.",
    "You can find leather, steel, and smart watches.",
    "Every watch looks good and feels nice to wear.",
    "Wear it to office, party, or gym.",
    "A watch is not just for time, it is your style.",
    "It is easy to search and find the right watch.",
    "A watch is a great gift for someone you love.",
    "All our watches are checked before we send them.",
    "We add new watches to our store often.",
    "Our watches are made to last for a long time.",
    "Pick a simple watch or a bold watch, the choice is yours.",
    "We want every customer to be happy with their watch.",
    "TimeVex: every second looks good.",
  ];

  return (
    <section className="py-20 sm:py-28 relative bg-[#0E0E11] border-t border-white/5 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A66B]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F1E8] font-normal tracking-tight">
            About TimeVex
          </h2>
          {/* Small gold line */}
          <div className="w-16 h-0.5 bg-[#C9A66B] mx-auto mt-4 rounded-full" />
        </div>

        {/* 15 Cards Grid: 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {points.map((text, idx) => {
            const num = String(idx + 1).padStart(2, "0");
            return (
              <div
                key={num}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#141416] border border-white/8 hover:border-[#C9A66B]/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(201,166,107,0.12)] hover:-translate-y-0.5"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-[#C9A66B] font-semibold mb-3 block">
                  {num}
                </span>
                <p className="text-sm sm:text-base text-[#F5F1E8]/90 group-hover:text-white leading-relaxed font-sans">
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
