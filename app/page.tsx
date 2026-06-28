import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { BrandsStrip } from "@/components/sections/brands-strip";
import { WhyUs } from "@/components/sections/why-us";
import { BranchCards } from "@/components/sections/branch-cards";
import { Reviews } from "@/components/sections/reviews";
import { CtaBand } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <BrandsStrip />
      <WhyUs />
      <BranchCards />
      <Reviews />
      <CtaBand />
    </>
  );
}
