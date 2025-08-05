import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MainHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-primary">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
          Wählen Sie Ihr Template
        </h1>
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Entdecken Sie unsere professionellen Website-Templates für verschiedene Anwendungsbereiche
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/template-a">
            <Button size="lg" className="w-48 h-14 text-lg">
              Template A
            </Button>
          </Link>
          <Link to="/template-b">
            <Button size="lg" variant="outline" className="w-48 h-14 text-lg border-white text-white hover:bg-white hover:text-navy">
              Template B
            </Button>
          </Link>
          <Link to="/template-c">
            <Button size="lg" variant="outline" className="w-48 h-14 text-lg border-white text-white hover:bg-white hover:text-navy">
              Template C
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MainHero;