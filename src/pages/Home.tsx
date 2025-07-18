import { useState } from "react";
import { Search, User, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Modal, ModalContent, ModalTrigger, ModalHeader, ModalTitle, ModalDescription } from "@/components/ui/modal";
import heroIllustration from "@/assets/hero-illustration.png";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/b4b2cadc-f54e-470f-9c50-8d43e5fe90e6.png" 
                  alt="Welcome to the Jungle"
                  className="h-8 w-auto"
                />
              </div>
              <nav className="hidden md:flex space-x-6">
                <Link to="/job-offers" className="text-foreground hover:text-muted-foreground transition-colors font-medium">
                  Trouver un job
                </Link>
                <Link to="#" className="text-foreground hover:text-muted-foreground transition-colors font-medium">
                  Trouver une entreprise
                </Link>
                <Link to="#" className="text-foreground hover:text-muted-foreground transition-colors font-medium">
                  Média
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Cherchez un job, une entreprise..." 
                  className="pl-10 w-64 border-border"
                />
              </div>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Employeurs
              </Button>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Candidatures</span>
                <span>Opportunités</span>
                <span>Se connecter</span>
                <User className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Modal */}
      <section className="py-2 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <img 
                src={heroIllustration} 
                alt="Illustration équipe tech" 
                className="w-full max-w-md h-auto"
              />
            </div>
            
            <div className="space-y-6 text-center">
              <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                PROFIL TECH<br />
                5+ ANNÉES D'EXPÉRIENCE
              </h2>
              <p className="text-lg text-muted-foreground mx-auto max-w-md">
                Il est temps de viser plus haut.<br />
                Découvrez des opportunités taillées pour les profils expérimentés.
              </p>
              
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
                  asChild
                >
                  <Link to="/onboarding/1">
                    Démarrer l'onboarding
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The job is yours section */}
      <section className="py-20 bg-wttj-yellow">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <h3 className="text-5xl lg:text-6xl font-bold text-foreground">
              THE JOB IS YOURS
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Plus de 83742 jobs vous attendent, trouvez celui fait pour vous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mt-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Cherchez un job par intitulé de poste, mot-clé ou entreprise" 
                  className="pl-10 h-12 text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90 h-12 px-8"
                asChild
              >
                <Link to="/job-offers">
                  Trouver un job
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer placeholder */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Welcome to the Jungle. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;