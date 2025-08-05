import { Card } from "@/components/ui/card";
import { Video, Users, Euro, Clock } from "lucide-react";

const VideoProductOverview = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Authentische Video-Porträts für echte Inklusion
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Unsere Video-Porträts zeigen Menschen mit Behinderungen in ihrem echten Leben. 
              Professionell produziert und einfühlsam erzählt, schaffen sie Nähe, bauen 
              Berührungsängste ab und fördern Offenheit in Ihrem Unternehmen.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Jedes Video-Paket enthält markenkonformen Content, Einbindungs-Tutorials, 
              passende Textbausteine und eine persönliche Kommunikationsberatung für 
              optimale Wirkung in Ihrer Organisation.
            </p>
          </div>

          {/* Info Box */}
          <div>
            <Card className="p-8 shadow-medium border-0 bg-white">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Service-Details
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Video className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Format</div>
                    <div className="text-muted-foreground">3-5 Min. Video-Porträts</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Einsatzbereich</div>
                    <div className="text-muted-foreground">Interne Kommunikation</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Euro className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Investment</div>
                    <div className="text-muted-foreground">ab 2.500 € pro Video</div>
                    <div className="text-sm text-muted-foreground">inkl. Lizenz & Beratung</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Lieferzeit</div>
                    <div className="text-muted-foreground">4-6 Wochen nach Briefing</div>
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

export default VideoProductOverview;