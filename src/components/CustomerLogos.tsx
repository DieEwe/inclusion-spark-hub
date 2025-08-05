import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const CustomerLogos = () => {
  // Placeholder company names - in real implementation these would be actual client logos
  const companies = [
    "TechCorp Solutions",
    "Global Industries",
    "Innovation Labs",
    "Future Systems",
    "NextGen Consulting",
    "Digital Dynamics"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vertrauen von führenden Unternehmen
          </h2>
          <p className="text-lg text-muted-foreground">
            Über 150 Unternehmen haben bereits erfolgreich teilgenommen
          </p>
        </div>

        {/* Company Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mb-16">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="w-full h-16 bg-muted/30 rounded-lg flex items-center justify-center group hover:bg-muted/50 transition-colors duration-300"
            >
              <span className="text-muted-foreground font-medium text-sm text-center px-2 group-hover:text-foreground transition-colors duration-300">
                {company}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <Card className="max-w-4xl mx-auto p-8 border-0 bg-white shadow-medium">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-primary mb-4" />
              <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                "Der Inklusionsführerschein hat unser Unternehmen nachhaltig verändert. 
                Die Kombination aus theoretischem Wissen und echten Begegnungen war 
                augenöffnend. Unsere Führungskräfte gehen jetzt viel selbstbewusster 
                und kompetenter mit dem Thema Inklusion um."
              </blockquote>
              <div>
                <div className="font-semibold text-foreground">Dr. Maria Schneider</div>
                <div className="text-muted-foreground">Head of Diversity & Inclusion, TechCorp Solutions</div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block bg-accent/20 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-sm text-muted-foreground mb-2">Durchschnittliche Bewertung</div>
                <div className="text-sm text-muted-foreground">aus 247 Bewertungen</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-lg font-semibold text-foreground mb-1">Unternehmen</div>
            <div className="text-muted-foreground">haben bereits teilgenommen</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">2.500+</div>
            <div className="text-lg font-semibold text-foreground mb-1">Teilnehmer:innen</div>
            <div className="text-muted-foreground">erfolgreich ausgebildet</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">96%</div>
            <div className="text-lg font-semibold text-foreground mb-1">Weiterempfehlung</div>
            <div className="text-muted-foreground">würden erneut teilnehmen</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;