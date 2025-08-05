import Navbar from "@/components/Navbar";
import VideoHeroSection from "@/components/VideoHeroSection";
import VideoProductOverview from "@/components/VideoProductOverview";
import VideoTargetGroups from "@/components/VideoTargetGroups";
import VideoContent from "@/components/VideoContent";
import ProducerSection from "@/components/ProducerSection";
import VideoResultsSection from "@/components/VideoResultsSection";
import VideoCustomerLogos from "@/components/VideoCustomerLogos";
import VideoCTASection from "@/components/VideoCTASection";

const Schnack2 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <VideoHeroSection />
      <VideoProductOverview />
      <VideoTargetGroups />
      <VideoContent />
      <ProducerSection />
      <VideoResultsSection />
      <VideoCustomerLogos />
      <VideoCTASection />
    </div>
  );
};

export default Schnack2;