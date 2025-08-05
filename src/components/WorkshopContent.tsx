import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Users, Brain, MessageSquare, Target, CheckSquare } from "lucide-react";

const WorkshopContent = () => {
  const day1Content = [
    {
      icon: Brain,
      title: "Disability Basics",
      description: "Begrifflichkeiten, Haltung und rechtliche Grundlagen der Inklusion",
      duration: "3 Stunden"
    },
    {
      icon: Target,
      title: "Unconscious Bias",
      description: "Unbewusste Vorurteile im Unternehmenskontext erkennen und überwinden",
      duration: "2 Stunden"
    },
    {
      icon: Users,
      title: "Begegnungen",
      description: "Authentische Gespräche mit Mentor:innen mit Behinderung",
      duration: "3 Stunden"
    }
  ];

  const day2Content = [
    {
      icon: MessageSquare,
      title: "Praxis-Simulationen",
      description: "Bewerbungsgespräche, Onboarding und barrierefreie Kommunikation",
      duration: "3 Stunden"
    },
    {
      icon: CheckSquare,
      title: "Canvas-Arbeit",
      description: "Reflexion und Transfer in die eigene Unternehmenspraxis",
      duration: "2 Stunden"
    },
    {
      icon: Target,
      title: "Handlungsideen",
      description: "Entwicklung konkreter Umsetzungsschritte mit Peer-Feedback",
      duration: "3 Stunden"
    }
  ];

  const toolkit = [
    "Sprachhilfen für professionelle Kommunikation",
    "Argumentationshilfen für Führungsgespräche",
    "Checklisten für barrierefreie Arbeitsplätze",
    "Handlungsansätze für verschiedene Situationen",
    "Netzwerk von Expert:innen und Mentor:innen"
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Workshop-Inhalte & Ablauf
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Zwei intensive Tage mit praxisorientierten Inhalten, echten Begegnungen 
            und nachhaltigen Ergebnissen für Ihr Unternehmen.
          </p>
        </div>

        <Tabs defaultValue="day1" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="day1" className="text-lg py-3">Tag 1</TabsTrigger>
            <TabsTrigger value="day2" className="text-lg py-3">Tag 2</TabsTrigger>
            <TabsTrigger value="toolkit" className="text-lg py-3">Toolkit</TabsTrigger>
          </TabsList>

          <TabsContent value="day1" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Tag 1: Grundlagen & Begegnungen
              </h3>
              <p className="text-muted-foreground">
                Wissensvermittlung und erste authentische Erfahrungen
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {day1Content.map((item, index) => (
                <Card key={index} className="p-6 border-0 bg-white shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="text-sm text-primary font-medium">
                    {item.duration}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="day2" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Tag 2: Praxis & Transfer
              </h3>
              <p className="text-muted-foreground">
                Simulation, Reflexion und konkrete Handlungsplanung
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {day2Content.map((item, index) => (
                <Card key={index} className="p-6 border-0 bg-white shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="text-sm text-primary font-medium">
                    {item.duration}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="toolkit" className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Ihr Werkzeugkasten für die Praxis
              </h3>
              <p className="text-muted-foreground">
                Praktische Hilfsmittel für den Arbeitsalltag
              </p>
            </div>
            <Card className="p-8 border-0 bg-white shadow-soft max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    Was Sie erhalten:
                  </h4>
                  <ul className="space-y-3">
                    {toolkit.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckSquare className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-accent/50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Nachhaltige Unterstützung
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Nach dem Workshop erhalten Sie Zugang zu unserem Mentor:innen-Netzwerk 
                    und können bei Fragen jederzeit auf unsere Expert:innen zurückgreifen. 
                    So stellen wir nachhaltigen Transfer in die Praxis sicher.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default WorkshopContent;