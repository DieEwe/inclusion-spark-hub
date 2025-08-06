import { Button } from "@/components/ui/button";
import { Play, Video, Heart } from "lucide-react";
import heroVideo from "@/assets/hero-workshop.jpg"; // Reusing the same image

const VideoHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroVideo} 
          alt="Authentische Video-Porträts für Inklusion" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Video className="w-8 h-8" style={{color: 'hsl(214 74% 68%)'}} />
          <span className="font-medium uppercase tracking-wider text-sm" style={{color: 'hsl(214 74% 68%)'}}>
            Professionelle Video-Produktion
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Bewegende Videos. <br />
          <span style={{color: 'hsl(214 74% 68%)'}}>Echte Verbindungen.</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
          Hochwertige Video-Produktionen mit authentischen Geschichten für 
          wirkungsvolle Unternehmenskommunikation und nachhaltigen Kulturwandel.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="font-semibold px-8 py-4 text-lg text-white hover:opacity-90" style={{backgroundColor: 'hsl(214 74% 32%)'}}>
            <Play className="w-5 h-5 mr-2" />
            Video-Showreel ansehen
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy px-8 py-4 text-lg">
            <Video className="w-5 h-5 mr-2" />
            Kostenloses Beratungsgespräch
          </Button>
        </div>

        <div className="flex items-center justify-center gap-8 text-sm opacity-80">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{backgroundColor: 'hsl(214 74% 68%)'}}></div>
            <span>Authentische Video-Porträts</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{backgroundColor: 'hsl(214 74% 68%)'}}></div>
            <span>Journalistisches Storytelling</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{backgroundColor: 'hsl(214 74% 68%)'}}></div>
            <span>Komplette Beratung inklusive</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHeroSection;