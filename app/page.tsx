import Header from "@/components/ui/header";
import HeroHome from "@/components/hero-home";
import Cta from "@/components/cta";
import FeaturesHome from "@/components/features-home";
import Features from "@/components/features-block";
import UseCases from "@/components/use-cases";
import Footer from "@/components/ui/footer";
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroHome />
        <FeaturesHome />
        <Features />
        <UseCases />
        <Cta />
        <Footer />
      </main>

    </div>
  );
}
