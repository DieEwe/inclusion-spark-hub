import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-workshop.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Inclusive business workshop with diverse participants"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center lg:text-left">
        <div className="max-w-4xl mx-auto lg:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Inklusion beginnt mit Verständnis – der{" "}
            <span className="text-primary">Inklusionsführerschein</span>{" "}
            für Unternehmen
          </h1>
          
          <h2 className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-light max-w-3xl">
            Ein zweitägiger Präsenz-Workshop für praktische Inklusionsarbeit – 
            mit realen Perspektiven, reflektierter Haltung und konkreten Handlungsideen.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 h-auto"
            >
              Jetzt buchen
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-navy"
            >
              Mehr erfahren
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;