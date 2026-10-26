import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Compass, ShieldCheck, Gem, Sparkles, ArrowRight, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | TimeVex Luxury Watches",
  description:
    "Learn about TimeVex — our watchmaking heritage, dedication to mechanical precision, sapphire materials, and our philosophy of accessible luxury.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Gem,
      title: "Unyielding Material Standards",
      desc: "We exclusively employ 316L surgical stainless steel, scratch-resistant sapphire crystals, and ceramic bezels. No shortcuts, ever.",
    },
    {
      icon: Compass,
      title: "Precision Calibration",
      desc: "Each automatic balance wheel and quartz crystal is calibrated under rigorous multi-position chronometer standards before leaving the atelier.",
    },
    {
      icon: Award,
      title: "Democratic Luxury",
      desc: "Exceptional watches shouldn't be locked behind arbitrary five-figure markups. We bring boutique quality directly to watch enthusiasts.",
    },
  ];

  const faqs = [
    {
      q: "Are TimeVex timepieces water resistant?",
      a: "Yes. All TimeVex watches range from 3 ATM (daily splash proof) up to 20 ATM (diver standard 200m). Each model specifies its exact depth rating in the technical specifications.",
    },
    {
      q: "What does the 1-Year International Warranty cover?",
      a: "Our warranty covers internal mechanical calibres, movement timing defects, quartz battery replacements, and all manufacturing imperfections for a full 365 days.",
    },
    {
      q: "Can I inspect the watch before paying with COD?",
      a: "Absolutely. We offer Cash on Delivery across 27,000+ Indian pincodes. You may inspect the tamper-evident luxury presentation box upon arrival.",
    },
    {
      q: "How do I care for my mechanical automatic watch?",
      a: "Automatic watches wind naturally through the motion of your wrist. If unworn for over 40 hours, gently rotate the crown clockwise 20-25 times to replenish the mainspring reserve.",
    },
  ];

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A66B] block">
            The Atelier & Philosophy
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#F5F1E8] font-normal leading-tight">
            The Art of Timekeeping, <span className="italic gold-gradient-text">Democratized</span>.
          </h1>
          <p className="text-base sm:text-lg text-[#8A8A8F] leading-relaxed">
            TimeVex was born with a singular conviction: fine watchmaking is not merely a method of displaying hours and minutes — it is personal architecture worn on the wrist.
          </p>
        </div>

        {/* Narrative Split Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#141416] border border-white/10 shadow-2xl">
            <Image
              src="https://images.pexels.com/photos/4198424/pexels-photo-4198424.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Watchmaker craftsmanship and precision timepiece mechanics"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C9A66B]">
              Our Genesis
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E8] font-normal">
              Born from a passion for mechanical artistry.
            </h2>
            <p className="text-sm sm:text-base text-[#8A8A8F] leading-relaxed">
              For generations, true watch collectors were divided into two extremes: either settle for plastic disposable mass-market timepieces, or pay prohibitive fortunes for legacy European names.
            </p>
            <p className="text-sm sm:text-base text-[#8A8A8F] leading-relaxed">
              We eliminated the middleman, luxury distributor margins, and unnecessary retail overheads to engineer timepieces with tourbillon skeletons, ceramic rotating bezels, and Japanese automatic calibres — delivered directly to Indian collectors.
            </p>
            <div className="pt-2">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C9A66B] hover:underline"
              >
                <span>Explore Our Watches</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Our Core Values */}
        <div className="py-12 border-y border-white/8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A66B] block mb-2">
              The Guiding Pillars
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F1E8]">
              What We <span className="italic gold-gradient-text">Stand For</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-[#141416] border border-white/8 hover:border-[#C9A66B]/30 transition-all hover:shadow-[0_0_30px_rgba(201,166,107,0.1)] space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C9A66B]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl text-[#F5F1E8]">{v.title}</h4>
                  <p className="text-xs sm:text-sm text-[#8A8A8F] leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A66B] block">
              Common Questions
            </span>
            <h3 className="font-serif text-3xl text-[#F5F1E8]">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#141416] border border-white/8 space-y-2"
              >
                <h4 className="font-serif text-lg text-[#F5F1E8]">{faq.q}</h4>
                <p className="text-xs sm:text-sm text-[#8A8A8F] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
