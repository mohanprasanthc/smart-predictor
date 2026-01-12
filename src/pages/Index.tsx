import HeroSection from "@/components/HeroSection";
import MetricsSection from "@/components/MetricsSection";
import ChartsSection from "@/components/ChartsSection";
import MethodologySection from "@/components/MethodologySection";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MetricsSection />
      <ChartsSection />
      <MethodologySection />
      <TechStack />
      <Footer />
    </div>
  );
};

export default Index;
