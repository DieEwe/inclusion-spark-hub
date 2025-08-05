import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Play, Award } from "lucide-react";
import mentor1 from "@/assets/mentor-1.jpg"; // Reusing for producer image

const ProducerSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ihr Produzent – Expertise mit Herz
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Torben Dreyer verbindet journalistische Professionalität mit 
            einfühlsamer Interviewführung für authentische Video-Porträts.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-0 bg-white shadow-soft">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={mentor1} 
                  alt="Torben Dreyer - Videoproduzent & Journalist"
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                <Button 
                  size="sm" 
                  className="absolute bottom-6 left-6"
                >
                  <Play className="w-4 h-4 mr-1" />
                  Portfolio ansehen
                </Button>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Torben Dreyer
                  </h3>
                  <div className="text-primary font-medium text-lg mb-4">
                    Videoproduzent & Journalist
                  </div>
                  
                  {/* Quote */}
                  <Quote className="w-6 h-6 text-primary mb-3" />
                  <blockquote className="text-muted-foreground italic leading-relaxed mb-6">
                    "Echte Geschichten entstehen in einem Raum des Vertrauens. 
                    Meine Aufgabe ist es, diesen Raum zu schaffen und die 
                    Geschichten mit Respekt und Professionalität zu erzählen."
                  </blockquote>
                </div>

                {/* Expertise */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">ARD-Fernsehreporter</div>
                      <div className="text-sm text-muted-foreground">Langjährige Erfahrung in sensibler Berichterstattung</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">NDR-Volontariat & Studium</div>
                      <div className="text-sm text-muted-foreground">Fundierte journalistische Ausbildung</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">Pressesprecher Greenpeace</div>
                      <div className="text-sm text-muted-foreground">Expertise in gesellschaftlichem Wandel</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">Inklusions-Spezialist</div>
                      <div className="text-sm text-muted-foreground">Schwerpunkt Diversity-Kommunikation</div>
                    </div>
                  </div>
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-3 py-1 bg-accent/60 text-accent-foreground text-xs rounded-full">
                    Einfühlsame Interviewführung
                  </span>
                  <span className="px-3 py-1 bg-accent/60 text-accent-foreground text-xs rounded-full">
                    Storytelling
                  </span>
                  <span className="px-3 py-1 bg-accent/60 text-accent-foreground text-xs rounded-full">
                    Inklusion & Nachhaltigkeit
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Lernen Sie Torben Dreyer und seine Arbeitsweise kennen
          </p>
          <Button variant="outline" size="lg">
            Persönliches Gespräch vereinbaren
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProducerSection;