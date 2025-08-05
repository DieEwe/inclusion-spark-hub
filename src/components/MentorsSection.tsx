import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Play } from "lucide-react";
import mentor1 from "@/assets/mentor-1.jpg";
import mentor2 from "@/assets/mentor-2.jpg";
import mentor3 from "@/assets/mentor-3.jpg";

const MentorsSection = () => {
  const mentors = [
    {
      name: "Dr. Sarah Weber",
      image: mentor1,
      specialty: "Barrierefreie Kommunikation",
      quote: "Inklusion bedeutet, dass jeder Mensch seine Potenziale voll entfalten kann – auch und gerade im Arbeitsumfeld.",
      expertise: ["Organisationsentwicklung", "Change Management", "Diversity Strategien"]
    },
    {
      name: "Michael Rodriguez",
      image: mentor2,
      specialty: "Unternehmenskultur & Leadership",
      quote: "Echte Inklusion entsteht, wenn Vielfalt nicht nur toleriert, sondern als Bereicherung verstanden wird.",
      expertise: ["Führungskräfteentwicklung", "Team Building", "Inklusive Recruiting-Prozesse"]
    },
    {
      name: "Lisa Hoffmann",
      image: mentor3,
      specialty: "Arbeitsplatzgestaltung",
      quote: "Die besten Lösungen entstehen, wenn wir Menschen mit Behinderung von Anfang an in die Planung einbeziehen.",
      expertise: ["Workplace Design", "Assistive Technologien", "Barrierefreie IT"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Unsere Mentor:innen – aus Erfahrung wirkungsvoll
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Menschen mit Behinderung begleiten den gesamten Workshop und geben persönliche 
            Einblicke in Herausforderungen, Potenziale und echte Barrieren.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <Card key={index} className="overflow-hidden border-0 bg-white shadow-soft hover:shadow-medium transition-all duration-300 group">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={mentor.image} 
                  alt={`${mentor.name} - ${mentor.specialty}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Button 
                  size="sm" 
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Play className="w-4 h-4 mr-1" />
                  Interview
                </Button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {mentor.name}
                  </h3>
                  <div className="text-primary font-medium">
                    {mentor.specialty}
                  </div>
                </div>

                {/* Quote */}
                <div className="mb-4">
                  <Quote className="w-5 h-5 text-primary mb-2" />
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "{mentor.quote}"
                  </blockquote>
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-accent/60 text-accent-foreground text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Lernen Sie alle Mentor:innen und ihre Geschichten kennen
          </p>
          <Button variant="outline" size="lg">
            Alle Mentor:innen ansehen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;