import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import CategoryGrid from "@/components/home/CategoryGrid";
import MostLoved from "@/components/home/MostLoved";
import About from "@/components/About";
import FeatureBanner from "@/components/home/FeatureBanner";
import Perks from "@/components/home/Perks";
import Reviews from "@/components/home/Reviews";
import Newsletter from "@/components/home/Newsletter";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Marquee />
      <FeaturedCollection />
      <CategoryGrid />
      <MostLoved />
      <About />
      <FeatureBanner />
      <Perks />
      <Reviews />
      <Newsletter />
      <FinalCTA />
    </div>
  );
}
