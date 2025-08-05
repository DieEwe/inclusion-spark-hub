import { Card } from "@/components/ui/card";
import { Shield, Target, Award, Network, CheckCircle, Users } from "lucide-react";

const ResultsSection = () => {
  const results = [
    {
      icon: Shield,
      title: "Persönliche Sicherheit",
      description: "Professioneller und selbstbewusster Umgang mit Menschen mit Behinderung in allen beruflichen Situationen."
    },
    {
      icon: Target,
      title: "Konkrete Umsetzungsschritte",
      description: "Drei klar definierte, messbare Handlungsschritte für die Implementierung in Ihrem Unternehmen."
    },
    {
      icon: Award,
      title: "Offizielles Zertifikat",
      description: "Anerkanntes Zertifikat als Nachweis Ihrer Inklusionskompetenz für interne und externe Kommunikation."
    },
    {
      icon: CheckCircle,
      title: "Öffentliches Siegel",
      description: "Auszeichnung als 'Inklusives Unternehmen' für Ihre Website und Kommunikationsmaterialien."
    },
    {
      icon: Network,
      title: "Aktives Netzwerk",
      description: "Dauerhafter Zugang zu unserem Mentor:innen-Netzwerk für kontinuierliche Unterstützung."
    },
    {
      icon: Users,
      title: "Team-Kompetenz",
      description: "Aufbau nachhaltiger Inklusionskompetenzen im gesamten Team durch gemeinsame Erfahrungen."
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Konkrete Ergebnisse & nachhaltiger Mehrwert
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Unser Workshop endet nicht mit einem Zertifikat – Sie erhalten messbare 
            Kompetenzen und langfristige Unterstützung für echte Veränderung.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <Card key={index} className="p-6 border-0 bg-white shadow-soft hover:shadow-medium transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <result.icon className="w-6 h-6 text-primary" />
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
                  Langfristige Unterstützung garantiert
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Unser Engagement endet nicht mit dem Workshop. Sie erhalten:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">6 Monate kostenlose Nachberatung</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Zugang zur digitalen Ressourcenbibliothek</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Quartalsweise Alumni-Veranstaltungen</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Hotline für dringende Fragen</span>
                  </li>
                </ul>
              </div>
              <div className="bg-accent/30 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-lg font-semibold text-foreground mb-2">
                    Erfolgsrate
                  </div>
                  <div className="text-muted-foreground text-sm">
                    unserer Teilnehmer:innen setzen mindestens 2 der 3 geplanten 
                    Maßnahmen innerhalb von 6 Monaten erfolgreich um.
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

export default ResultsSection;