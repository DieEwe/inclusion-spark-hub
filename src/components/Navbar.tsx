import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            Templates
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/template-a" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Template A
            </Link>
            <Link 
              to="/template-b" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Template B
            </Link>
            <Link 
              to="/template-c" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Template C
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;