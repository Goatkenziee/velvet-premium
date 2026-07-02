import { Hero } from "@/components/sections/hero";
import { Trending } from "@/components/sections/trending";
import { Categories } from "@/components/sections/categories";
import { NewReleases } from "@/components/sections/new-releases";
import { PremiumCTA } from "@/components/sections/premium-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Trending />
      <Categories />
      <NewReleases />
      <PremiumCTA />
    </>
  );
}
