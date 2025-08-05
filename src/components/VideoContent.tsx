import { Card } from "@/components/ui/card";
import { Video, Users, Clapperboard, MessageSquare, CheckCircle } from "lucide-react";

const VideoContent = () => {
  const services = [
    {
      icon: Video,
      title: "Authentische Video-Porträts",
      description: "Kurzporträts aus dem echten Leben von Menschen mit Behinderungen",
      features: [
        "3-5 Minuten professionelle Videos",
        "Berührungsängste abbauen und Nähe schaffen",
        "Für interne Kommunikation und Schulungen",
        "Markenkonformes Logo & Intro/Outro",
        "Tutorials für einfache Einbindung"
      ]
    },
    {
      icon: Users,
      title: "Spotlight-Momente",
      description: "Mitarbeitende erzählen freiwillig ihre eigene Geschichte",
      features: [
        "Sicher begleiteter Prozess mit Freigabe",
        "Vertrauen und Offenheit im Unternehmen",
        "Story-Entwicklung gemeinsam mit Teilnehmenden",
        "Optional mit Coaching & Kommunikationsberatung",
        "Für Social Media & Employer Branding"
      ]
    },
    {
      icon: Clapperboard,
      title: "Produktions- & Begleitservice",
      description: "Vollumfassende Betreuung von der Idee bis zur Umsetzung",
      features: [
        "Auswahlprozess für passende Stimmen",
        "Individuelle Storyentwicklung",
        "Journalistischer Storytelling-Ansatz",
        "Nachbereitung & Kommunikationsstrategien",
        "1h Kommunikationsberatung inklusive"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Unsere Video-Services im Detail
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Von authentischen Porträts bis zu Mitarbeiter-Spotlight-Momenten – 
            professionell produziert und einfühlsam umgesetzt.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="p-8 border-0 bg-white shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Einsatzmöglichkeiten */}
        <Card className="p-8 border-0 bg-white shadow-medium">
          <div className="text-center mb-8">
            <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Vielfältige Einsatzmöglichkeiten
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Unsere Videos unterstützen Sie in verschiedenen Kommunikationssituationen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-accent/10 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Interne Kommunikation</h4>
              <p className="text-sm text-muted-foreground">Intranet, Newsletter, Townhalls</p>
            </div>
            <div className="text-center p-4 bg-accent/10 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Schulungen & Events</h4>
              <p className="text-sm text-muted-foreground">Workshops, Aktionstage, Onboarding</p>
            </div>
            <div className="text-center p-4 bg-accent/10 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Employer Branding</h4>
              <p className="text-sm text-muted-foreground">Social Media, Karriereseiten</p>
            </div>
            <div className="text-center p-4 bg-accent/10 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Führungskommunikation</h4>
              <p className="text-sm text-muted-foreground">Präsentationen, Kampagnen</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default VideoContent;