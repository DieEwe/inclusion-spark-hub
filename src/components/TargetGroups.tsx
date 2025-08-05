import { Card } from "@/components/ui/card";
import { Target, Heart, Users, TrendingUp, Shield, Lightbulb } from "lucide-react";

const TargetGroups = () => {
  const targetGroups = [
    {
      icon: Target,
      title: "DEI-Verantwortliche",
      description: "Strategische Führung für Diversity, Equity & Inclusion Initiativen"
    },
    {
      icon: Shield,
      title: "Inklusionsbeauftragte",
      description: "Schwerbehindertenvertretungen und Inklusionsbeauftragte"
    },
    {
      icon: Heart,
      title: "HR-Verantwortliche",
      description: "Personalverantwortliche für inklusive Recruiting- und Onboarding-Prozesse"
    },
    {
      icon: TrendingUp,
      title: "Führungskräfte",
      description: "Führungskräfte mit Verantwortung für Personal oder Unternehmenskultur"
    }
  ];

  const benefits = [
    {
      icon: Lightbulb,
      title: "Praxisnaher Einstieg",
      description: "Direkte Anwendung in der Inklusionsarbeit"
    },
    {
      icon: Users,
      title: "Echte Erfahrungen",
      description: "Verbindung von Fachwissen und authentischen Begegnungen"
    },
    {
      icon: Target,
      title: "Individueller Plan",
      description: "Maßgeschneiderte Umsetzungsstrategien für Ihr Unternehmen"
    },
    {
      icon: Shield,
      title: "Handlungssicherheit",
      description: "Sicherheit im professionellen Umgang mit Behinderung"
    },
    {
      icon: TrendingUp,
      title: "Strategisches Verständnis",
      description: "Tiefgreifendes Verständnis von DEI-Prozessen"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Target Groups */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Für wen ist der Inklusionsführerschein?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Unser Workshop richtet sich an Fach- und Führungskräfte, die Inklusion 
              in ihrem Unternehmen voranbringen möchten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetGroups.map((group, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300 border-0 bg-white">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <group.icon className="w-8 h-8 text-primary" />
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
              Nachhaltige Kompetenzentwicklung für echte Inklusion in Ihrem Unternehmen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
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

export default TargetGroups;