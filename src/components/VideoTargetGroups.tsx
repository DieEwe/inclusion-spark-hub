import { Card } from "@/components/ui/card";
import { Target, Heart, Users, TrendingUp, Shield, Lightbulb } from "lucide-react";

const VideoTargetGroups = () => {
  const targetGroups = [
    {
      icon: Target,
      title: "DEI & HR-Teams",
      description: "Für authentische Diversity-Kommunikation und Sensibilisierung"
    },
    {
      icon: Shield,
      title: "Unternehmenskommunikation",
      description: "Für interne Kampagnen und Employer Branding"
    },
    {
      icon: Heart,
      title: "Führungskräfte",
      description: "Für Townhalls, Schulungen und Kulturwandel"
    },
    {
      icon: TrendingUp,
      title: "Change Manager",
      description: "Für nachhaltige Transformationsprozesse"
    }
  ];

  const benefits = [
    {
      icon: Lightbulb,
      title: "Berührungsängste abbauen",
      description: "Authentische Geschichten schaffen Nähe und Verständnis"
    },
    {
      icon: Users,
      title: "Echte Identifikation",
      description: "Mitarbeitende erleben Vielfalt als Bereicherung"
    },
    {
      icon: Target,
      title: "Sofort einsetzbar",
      description: "Komplettpaket mit Logo, Tutorials und Textbausteinen"
    },
    {
      icon: Shield,
      title: "Professionelle Qualität",
      description: "Journalistische Standards und einfühlsame Umsetzung"
    },
    {
      icon: TrendingUp,
      title: "Messbare Wirkung",
      description: "Nachhaltige Veränderung der Unternehmenskultur"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Target Groups */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Für wen sind Video-Porträts geeignet?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Unsere Videos unterstützen alle, die authentische Inklusion in 
              ihrem Unternehmen vorantreiben möchten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetGroups.map((group, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300 border-0 bg-white">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'hsl(214 74% 32% / 0.1)'}}>
                  <group.icon className="w-8 h-8" style={{color: 'hsl(214 74% 32%)'}} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {group.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {group.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ihr Mehrwert im Überblick
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Authentische Video-Kommunikation für nachhaltige Inklusion in Ihrem Unternehmen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: 'hsl(214 74% 32% / 0.1)'}}>
                  <benefit.icon className="w-6 h-6" style={{color: 'hsl(214 74% 32%)'}} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTargetGroups;