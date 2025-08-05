import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Video, MessageCircle, Calendar } from "lucide-react";

const VideoCTASection = () => {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für authentische Video-Kommunikation?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Lassen Sie uns gemeinsam echte Geschichten erzählen, die Ihre 
            Unternehmenskultur nachhaltig prägen.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 bg-white/10 border-white/20 text-white">
            <Video className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-lg font-semibold mb-3">Portfolio ansehen</h3>
            <p className="text-white/80 text-sm mb-4">
              Überzeugen Sie sich von der Qualität unserer Video-Porträts
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy w-full">
              Portfolio öffnen
            </Button>
          </Card>

          <Card className="p-6 bg-white/10 border-white/20 text-white">
            <MessageCircle className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-lg font-semibold mb-3">Kostenlose Beratung</h3>
            <p className="text-white/80 text-sm mb-4">
              30 Minuten unverbindliches Gespräch über Ihre Video-Ideen
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy w-full">
              Beratung anfragen
            </Button>
          </Card>

          <Card className="p-6 bg-white/10 border-white/20 text-white">
            <Calendar className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-lg font-semibold mb-3">Projekt starten</h3>
            <p className="text-white/80 text-sm mb-4">
              Direkt ein erstes Video-Porträt für Ihr Unternehmen beauftragen
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-navy w-full">
              Projekt beauftragen
            </Button>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-white/60 mb-6">
            Sie haben Fragen zu unserem Produktionsprozess oder möchten mehr über 
            Einsatzmöglichkeiten erfahren?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-navy font-semibold px-8">
              <Video className="w-5 h-5 mr-2" />
              Portfolio & Preise ansehen
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy px-8">
              <MessageCircle className="w-5 h-5 mr-2" />
              Kostenlose Erstberatung
            </Button>
          </div>

          <div className="mt-8 text-sm text-white/60">
            <p>Kontakt: Torben Dreyer • torben@authentische-videos.de • +49 123 456 789</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCTASection;