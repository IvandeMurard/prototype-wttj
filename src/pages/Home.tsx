import { useState } from "react";
import { Search, ChevronDown, MapPin, Briefcase, Star, Eye, Users, TrendingUp, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  const featuredJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechFlow",
      logo: "🚀",
      location: "Paris, France",
      type: "CDI",
      salary: "60k - 80k €",
      tags: ["React", "TypeScript", "Next.js"],
      description: "Join our innovative team to build the future of web applications with cutting-edge technologies.",
      applicants: 45,
      views: 1200,
      featured: true
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "DataMind",
      logo: "🧠",
      location: "Lyon, France",
      type: "CDI",
      salary: "55k - 75k €",
      tags: ["Node.js", "React", "MongoDB"],
      description: "Build scalable data-driven applications in a fast-growing AI startup environment.",
      applicants: 32,
      views: 890,
      featured: true
    },
    {
      id: 3,
      title: "Lead Backend Developer",
      company: "CloudNative",
      logo: "☁️",
      location: "Remote",
      type: "CDI",
      salary: "70k - 90k €",
      tags: ["Python", "AWS", "Kubernetes"],
      description: "Lead our backend architecture and mentor junior developers in a cloud-first company.",
      applicants: 28,
      views: 756,
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <h1 className="text-2xl font-bold text-foreground">
                Welcome to the <span className="text-primary">Jungle</span>
              </h1>
              <nav className="hidden md:flex space-x-6">
                <Link to="/jobs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Offres d'emploi
                </Link>
                <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Entreprises
                </Link>
                <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Salaires
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Se connecter</Button>
              <Button asChild>
                <Link to="/onboarding">S'inscrire</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Trouvez votre prochain <br />
            <span className="text-primary">job de rêve</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Découvrez les meilleures opportunités tech et connectez-vous avec les entreprises 
            les plus innovantes.
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Intitulé de poste, compétences..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Ville, région..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button size="lg" className="px-8">
                Rechercher
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-foreground">Offres à la une</h3>
            <Button variant="outline" asChild>
              <Link to="/jobs">Voir toutes les offres</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{job.logo}</div>
                      <div>
                        <h4 className="font-semibold text-foreground">{job.title}</h4>
                        <p className="text-muted-foreground">{job.company}</p>
                      </div>
                    </div>
                    {job.featured && (
                      <Badge className="bg-primary text-primary-foreground">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">{job.salary}</span>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {job.views}
                      </span>
                      <span className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {job.applicants}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full mt-4" asChild>
                    <Link to={`/job/${job.id}`}>Voir l'offre</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">12,000+</div>
              <p className="text-muted-foreground">Offres d'emploi actives</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
              <p className="text-muted-foreground">Entreprises partenaires</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100,000+</div>
              <p className="text-muted-foreground">Candidats inscrits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Welcome to the Jungle</h4>
              <p className="text-muted-foreground text-sm">
                La plateforme de recrutement qui révolutionne votre recherche d'emploi.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Candidats</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-foreground">Rechercher un emploi</Link></li>
                <li><Link to="#" className="hover:text-foreground">Créer un profil</Link></li>
                <li><Link to="#" className="hover:text-foreground">Conseils carrière</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Entreprises</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-foreground">Publier une offre</Link></li>
                <li><Link to="#" className="hover:text-foreground">Solutions RH</Link></li>
                <li><Link to="#" className="hover:text-foreground">Marque employeur</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Support</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="#" className="hover:text-foreground">Centre d'aide</Link></li>
                <li><Link to="#" className="hover:text-foreground">Contact</Link></li>
                <li><Link to="#" className="hover:text-foreground">Confidentialité</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2024 Welcome to the Jungle. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;