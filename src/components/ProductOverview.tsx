import { Card } from "@/components/ui/card";
import { Clock, Users, Euro, UserCheck } from "lucide-react";

const ProductOverview = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Praktische Inklusionsarbeit für nachhaltigen Wandel
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Der Inklusionsführerschein ist ein zweitägiger, interaktiver Workshop für Unternehmen, 
              der quartalsweise stattfindet. Ziel ist es, Grundlagen der Inklusionsarbeit zu vermitteln, 
              eigene Perspektiven zu reflektieren und durch den Austausch mit Menschen mit Behinderung 
              nachhaltige Handlungskompetenz zu entwickeln.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unser praxisorientierter Ansatz verbindet Fachwissen mit echten Begegnungen und 
              individueller Reflexion. Sie erhalten nicht nur theoretisches Wissen, sondern 
              entwickeln konkrete Handlungsstrategien für Ihr Unternehmen.
            </p>
          </div>

          {/* Info Box */}
          <div>
            <Card className="p-8 shadow-medium border-0 bg-white">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Workshop-Details
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Dauer</div>
                    <div className="text-muted-foreground">2 Tage Präsenz</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Teilnehmerzahl</div>
                    <div className="text-muted-foreground">Max. 25 Personen</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Euro className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Preis</div>
                    <div className="text-muted-foreground">998 € pro Person</div>
                    <div className="text-sm text-muted-foreground">inkl. Materialien & Zertifikat</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Empfehlung</div>
                    <div className="text-muted-foreground">Mindestens 2 Personen pro Unternehmen</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;