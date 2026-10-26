import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CategoryGrid() {
  const categories = [
    {
      title: "Men's Watches",
      subtitle: "Bold dials, dive bezels & leather chronographs",
      href: "/shop?gender=men",
      image: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?auto=format&fit=crop&w=900&q=80",
      count: "25 Watches",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Women's Watches",
      subtitle: "Rose gold, pearl & diamond indices",
      href: "/shop?gender=women",
      image: "https://images.unsplash.com/photo-1640416822842-1d1cd0c6b9f1?auto=format&fit=crop&w=900&q=80",
      count: "25 Watches",
      colSpan: "col-span-1 md:col-span-1",
    },
    {
      title: "Luxury Watches",
      subtitle: "Skeleton automatics & premium finish",
      href: "/shop?category=luxury",
      image: "https://images.pexels.com/photos/236915/pexels-photo-236915.jpeg?auto=compress&cs=tinysrgb&w=900",
      count: "10 Watches",
      colSpan: "col-span-1 md:col-span-1",
    },
    {
      title: "Chronographs",
      subtitle: "Triple sub-dials & stopwatch scales",
      href: "/shop?category=chronograph",
      image: "https://images.unsplash.com/photo-1696321408191-62d7363743b4?auto=format&fit=crop&w=900&q=80",
      count: "10 Watches",
      colSpan: "col-span-1 md:col-span-1",
    },
    {
      title: "Smart Watches",
      subtitle: "Touch displays & fitness tracking",
      href: "/shop?category=smart",
      image: "https://images.pexels.com/photos/16084478/pexels-photo-16084478.jpeg?auto=compress&cs=tinysrgb&w=900",
      count: "10 Watches",
      colSpan: "col-span-1 md:col-span-1",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0E0E11] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C9A66B] block mb-2">
            Categories
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F1E8] font-normal">
            Find Your <span className="italic gold-gradient-text">Personal</span> Style
          </h2>
          <p className="text-sm sm:text-base text-[#8A8A8F] mt-3">
            Explore curated collections designed for every occasion, from elegant dinners to daily fitness tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.href}
              className={`group relative rounded-2xl overflow-hidden border border-white/8 hover:border-[#C9A66B]/50 transition-all duration-500 min-h-[320px] flex flex-col justify-end p-6 sm:p-8 ${cat.colSpan}`}
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

              <div className="relative z-10 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#C9A66B] uppercase tracking-widest">
                    {cat.count}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#C9A66B] group-hover:text-black text-white flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8] font-normal group-hover:text-[#C9A66B] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8A8A8F]">{cat.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
