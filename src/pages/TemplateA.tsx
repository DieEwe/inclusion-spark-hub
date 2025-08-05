import HeroSection from "@/components/HeroSection";
import ProductOverview from "@/components/ProductOverview";
import TargetGroups from "@/components/TargetGroups";
import WorkshopContent from "@/components/WorkshopContent";
import MentorsSection from "@/components/MentorsSection";
import ResultsSection from "@/components/ResultsSection";
import CustomerLogos from "@/components/CustomerLogos";
import CTASection from "@/components/CTASection";

const TemplateA = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProductOverview />
      <TargetGroups />
      <WorkshopContent />
      <MentorsSection />
      <ResultsSection />
      <CustomerLogos />
      <CTASection />
    </div>
  );
};

export default TemplateA;