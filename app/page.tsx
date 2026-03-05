import HeroHome from "@/components/hero-home";
import Cta from "@/components/cta";
import FeaturesHome from "@/components/features-home";
import Features from "@/components/features-block";
import UseCases from "@/components/use-cases";

export default function Home() {
  return (
    <>
      <HeroHome />
      <FeaturesHome />
      <Features />
      <UseCases />
      <Cta />
    </>
  );
}
