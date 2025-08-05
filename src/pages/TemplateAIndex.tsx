import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const TemplateAIndex = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="min-h-screen flex items-center justify-center bg-gradient-section">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8">
            Template A
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Wählen Sie Ihre gewünschte Schnack-Variante
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/template-a/schnack-1">
              <Button size="lg" className="w-48 h-14 text-lg">
                Schnack 1
              </Button>
            </Link>
            <Link to="/template-a/schnack-2">
              <Button size="lg" variant="outline" className="w-48 h-14 text-lg">
                Schnack 2
              </Button>
            </Link>
            <Link to="/template-a/schnack-3">
              <Button size="lg" variant="outline" className="w-48 h-14 text-lg">
                Schnack 3
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TemplateAIndex;