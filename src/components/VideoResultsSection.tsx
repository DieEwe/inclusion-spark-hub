import { Card } from "@/components/ui/card";
import { Video, Target, Award, Network, CheckCircle, Users } from "lucide-react";

const VideoResultsSection = () => {
  const results = [
    {
      icon: Video,
      title: "Professionelle Videos",
      description: "Hochwertige 3-5 Minuten Videos mit markenkonformem Logo, Intro und Outro für sofortigen Einsatz."
    },
    {
      icon: Target,
      title: "Komplette Einbindung",
      description: "Tutorials, Textbausteine und Kommunikationsleitfaden für optimale Platzierung in Ihrem Unternehmen."
    },
    {
      icon: Award,
      title: "Interne Nutzungslizenz",
      description: "Unbegrenzte Nutzung für Intranet, Newsletter, Schulungen und interne Veranstaltungen."
    },
    {
      icon: CheckCircle,
      title: "Messbare Wirkung",
      description: "Spürbare Veränderung in der Unternehmenskultur durch authentische Geschichten und echte Begegnungen."
    },
    {
      icon: Network,
      title: "Kommunikationsberatung",
      description: "1 Stunde persönliche Beratung für strategische Platzierung und erfolgreiche Anschlussmaßnahmen."
    },
    {
      icon: Users,
      title: "Kulturwandel",
      description: "Nachhaltige Sensibilisierung und Abbau von Berührungsängsten im gesamten Unternehmen."
    }
  ];

  return (
    <section className="py-20" style={{background: 'linear-gradient(135deg, hsl(214 74% 96%) 0%, hsl(214 74% 98%) 100%)'}}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: 'hsl(214 74% 22%)'}}>
            Was Sie erhalten – vollständiges Paket
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professionelle Video-Porträts mit allem, was Sie für erfolgreiche 
            Inklusions-Kommunikation in Ihrem Unternehmen benötigen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <Card key={index} className="p-6 border-0 bg-white shadow-soft hover:shadow-medium transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300" style={{backgroundColor: 'hsl(214 74% 32% / 0.1)'}} data-group-hover="bg-primary/20">
                  <result.icon className="w-6 h-6" style={{color: 'hsl(214 74% 32%)'}} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {result.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {result.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16">
          <Card className="p-8 border-0 bg-white shadow-medium">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Garantierte Wirkung und Qualität
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Unsere Video-Porträts werden nach journalistischen Standards produziert:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{color: 'hsl(214 74% 32%)'}} />
                    <span className="text-muted-foreground">Einfühlsame Interviewführung in vertrauensvoller Atmosphäre</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{color: 'hsl(214 74% 32%)'}} />
                    <span className="text-muted-foreground">Professionelle Bildqualität und authentischer Storytelling-Ansatz</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{color: 'hsl(214 74% 32%)'}} />
                    <span className="text-muted-foreground">Sichere Freigabeprozesse und respektvolle Darstellung</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" style={{color: 'hsl(214 74% 32%)'}} />
                    <span className="text-muted-foreground">Markenkonformes Design und sofort einsetzbare Materialien</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg p-6" style={{backgroundColor: 'hsl(214 74% 32% / 0.1)'}}>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{color: 'hsl(214 74% 32%)'}}>95%</div>
                  <div className="text-lg font-semibold text-foreground mb-2">
                    Kundenzufriedenheit
                  </div>
                  <div className="text-muted-foreground text-sm">
                    unserer Kunden setzen weitere Video-Projekte um und berichten 
                    von messbarer Veränderung in der Unternehmenskultur.
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoResultsSection;