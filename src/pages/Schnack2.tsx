import Navbar from "@/components/Navbar";

const Schnack2 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Schnack 2</h1>
          <p className="text-lg text-muted-foreground">Coming Soon</p>
        </div>
      </div>
    </div>
  );
};

export default Schnack2;