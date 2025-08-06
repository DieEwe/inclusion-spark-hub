// src/pages/template-a/videos.tsx
import TemplateAWrapper from "@/components/templates/TemplateAWrapper";
import VideoHeroSection from "@/components/VideoHeroSection";
import VideoProductOverview from "@/components/VideoProductOverview";
import VideoResultsSection from "@/components/VideoResultsSection";
import VideoCustomerLogos from "@/components/VideoCustomerLogos";
import VideoCTASection from "@/components/VideoCTASection";
import MentorsSection from "@/components/MentorsSection"; // explizit, da zentral

const VideosPage = () => {
  return (
    <TemplateAWrapper>
      <VideoHeroSection />
      <VideoProductOverview />
      <VideoResultsSection />
      <MentorsSection />
      <VideoCustomerLogos />
      <VideoCTASection />
    </TemplateAWrapper>
  );
};

export default VideosPage;
