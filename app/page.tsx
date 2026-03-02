import Header from "@/components/ui/header";
import HeroHome from "@/components/hero-home";
import FeaturesHome from "@/components/features-home";
import Features from "@/components/features-block";
import UseCases from "@/components/use-cases";
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroHome />
        <FeaturesHome />
        <Features />
        <UseCases />
      </main>
    </div>
  );
}
