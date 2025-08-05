import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, MessageCircle, Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-cta text-navy-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für gelebte Inklusion in Ihrem Unternehmen?
          </h2>
          <p className="text-xl text-navy-foreground/90 max-w-3xl mx-auto">
            Starten Sie noch heute den Weg zu einem inklusiveren Arbeitsplatz. 
            Unsere nächsten Termine sind bereits buchbar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - CTAs and Contact */}
          <div className="space-y-8">
            {/* Primary CTAs */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full text-lg py-4 h-auto bg-primary hover:bg-primary-hover text-primary-foreground"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Nächste Termine anzeigen
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full text-lg py-4 h-auto border-navy-foreground text-navy-foreground hover:bg-navy-foreground hover:text-navy"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Unverbindliche Beratung anfragen
              </Button>
            </div>

            {/* Contact Information */}
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-navy-foreground/20">
              <h3 className="text-xl font-semibold mb-4">Direkter Kontakt</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+49 (0) 123 456 789</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>info@inklusionsfuehrerschein.de</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-navy-foreground/20">
                <p className="text-sm text-navy-foreground/80">
                  Montag bis Freitag: 9:00 - 18:00 Uhr<br />
                  Kostenlose Erstberatung verfügbar
                </p>
              </div>
            </Card>

            {/* Quick Info */}
            <div className="bg-white/5 rounded-lg p-6">
              <h4 className="font-semibold mb-3">Nächste Workshop-Termine:</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>München</span>
                  <span>15.-16. März 2024</span>
                </div>
                <div className="flex justify-between">
                  <span>Berlin</span>
                  <span>22.-23. März 2024</span>
                </div>
                <div className="flex justify-between">
                  <span>Hamburg</span>
                  <span>12.-13. April 2024</span>
                </div>
              </div>
              <p className="text-xs text-navy-foreground/70 mt-3">
                * Weitere Termine auf Anfrage verfügbar
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <Card className="p-8 bg-white/95 backdrop-blur-sm text-foreground">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Jetzt informieren
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-foreground">Vorname *</Label>
                  <Input 
                    id="firstName" 
                    placeholder="Ihr Vorname"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-foreground">Nachname *</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Ihr Nachname"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground">E-Mail *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="ihre.email@unternehmen.de"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="company" className="text-foreground">Unternehmen *</Label>
                <Input 
                  id="company" 
                  placeholder="Ihr Unternehmen"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="participants" className="text-foreground">Geplante Teilnehmerzahl</Label>
                <Input 
                  id="participants" 
                  placeholder="z.B. 5 Personen"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground">Ihre Nachricht</Label>
                <Textarea 
                  id="message" 
                  placeholder="Haben Sie spezielle Fragen oder Anforderungen?"
                  className="mt-1"
                  rows={4}
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
              >
                Informationen anfordern
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu. 
                Wir melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection;