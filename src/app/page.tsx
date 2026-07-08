import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ScannerExperience } from "@/components/ScannerExperience";
import { ProductScreens } from "@/components/ProductScreens";
import { DecisionSystem } from "@/components/DecisionSystem";
import { TrustBeta } from "@/components/TrustBeta";
import { VisualFaq } from "@/components/VisualFaq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-[#0F172A]">
      <Navbar />
      <Hero />
      <ScannerExperience />
      <ProductScreens />
      <DecisionSystem />
      <TrustBeta />
      <VisualFaq />
      <Footer />
    </div>
  );
}
