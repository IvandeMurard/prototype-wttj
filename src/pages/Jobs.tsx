import { useState } from "react";
import { Search, Filter, MapPin, Briefcase, Star, Eye, Users, ChevronDown, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const [filters, setFilters] = useState({
    contractType: [],
    experience: [],
    remote: [],
    salary: [],
    company: []
  });

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechFlow",
      logo: "🚀",
      location: "Paris, France",
      type: "CDI",
      salary: "60k - 80k €",
      tags: ["React", "TypeScript", "Next.js"],
      description: "Join our innovative team to build the future of web applications with cutting-edge technologies. We are looking for a passionate senior developer to lead our frontend architecture.",
      applicants: 45,
      views: 1200,
      featured: true,
      remote: "Hybride",
      experience: "5+ ans",
      postedDate: "Il y a 2 jours"
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
      description: "Build scalable data-driven applications in a fast-growing AI startup environment. Perfect opportunity for a senior developer wanting to work on cutting-edge AI projects.",
      applicants: 32,
      views: 890,
      featured: true,
      remote: "Télétravail",
      experience: "5+ ans",
      postedDate: "Il y a 1 jour"
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
      description: "Lead our backend architecture and mentor junior developers in a cloud-first company. Shape the technical vision of our microservices platform.",
      applicants: 28,
      views: 756,
      featured: false,
      remote: "100% télétravail",
      experience: "7+ ans",
      postedDate: "Il y a 3 jours"
    },
    {
      id: 4,
      title: "Senior React Developer",
      company: "FinTech Pro",
      logo: "💰",
      location: "Marseille, France",
      type: "CDI",
      salary: "58k - 78k €",
      tags: ["React", "Redux", "TypeScript", "Jest"],
      description: "Develop the next generation of financial applications used by millions of users. Work with a passionate team on complex trading platforms.",
      applicants: 67,
      views: 1500,
      featured: false,
      remote: "Présentiel",
      experience: "5+ ans",
      postedDate: "Il y a 4 jours"
    },
    {
      id: 5,
      title: "DevOps Engineer Senior",
      company: "ScaleUp Tech",
      logo: "⚡",
      location: "Toulouse, France",
      type: "CDI",
      salary: "65k - 85k €",
      tags: ["Docker", "Kubernetes", "Terraform", "AWS"],
      description: "Build and maintain our cloud infrastructure at scale. Lead the implementation of DevOps best practices across multiple product teams.",
      applicants: 41,
      views: 923,
      featured: true,
      remote: "Hybride",
      experience: "6+ ans",
      postedDate: "Il y a 5 jours"
    },
    {
      id: 6,
      title: "Technical Lead - Full Stack",
      company: "Innovation Labs",
      logo: "🔬",
      location: "Nantes, France",
      type: "CDI",
      salary: "75k - 95k €",
      tags: ["Vue.js", "Node.js", "PostgreSQL", "Leadership"],
      description: "Lead a team of 5 developers while staying hands-on with code. Drive technical decisions in a fast-paced R&D environment.",
      applicants: 23,
      views: 654,
      featured: false,
      remote: "Hybride",
      experience: "8+ ans",
      postedDate: "Il y a 1 semaine"
    }
  ];

  const filterOptions = {
    contractType: ["CDI", "CDD", "Freelance", "Stage"],
    experience: ["5+ ans", "6+ ans", "7+ ans", "8+ ans", "10+ ans"],
    remote: ["Présentiel", "Hybride", "100% télétravail"],
    salary: ["50k - 60k €", "60k - 70k €", "70k - 80k €", "80k+ €"],
    company: ["Startup", "Scale-up", "PME", "Grande entreprise"]
  };

  const toggleFilter = (category: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  const clearFilters = () => {
    setFilters({
      contractType: [],
      experience: [],
      remote: [],
      salary: [],
      company: []
    });
  };

  const getActiveFiltersCount = () => {
    return Object.values(filters).reduce((acc, curr) => acc + curr.length, 0);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-2xl font-bold text-foreground">
                Welcome to the <span className="text-primary">Jungle</span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link to="/jobs" className="text-primary font-medium">
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

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80">
            <div className="sticky top-8">
              <Card>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold flex items-center">
                      <SlidersHorizontal className="h-5 w-5 mr-2" />
                      Filtres
                    </h3>
                    {getActiveFiltersCount() > 0 && (
                      <Button variant="ghost" size="sm" onClick={clearFilters}>
                        Effacer ({getActiveFiltersCount()})
                      </Button>
                    )}
                  </div>

                  <div className="space-y-6">
                    {/* Search */}
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Recherche</Label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          placeholder="Titre, compétences..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    {/* Location */}
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Localisation</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          placeholder="Ville, région..."
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    {/* Contract Type */}
                    <Collapsible defaultOpen>
                      <CollapsibleTrigger className="flex items-center justify-between w-full">
                        <Label className="text-sm font-medium">Type de contrat</Label>
                        <ChevronDown className="h-4 w-4" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-2 space-y-2">
                        {filterOptions.contractType.map(type => (
                          <Label key={type} className="flex items-center space-x-2 cursor-pointer">
                            <Checkbox
                              checked={filters.contractType.includes(type)}
                              onCheckedChange={() => toggleFilter("contractType", type)}
                            />
                            <span className="text-sm">{type}</span>
                          </Label>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Experience */}
                    <Collapsible defaultOpen>
                      <CollapsibleTrigger className="flex items-center justify-between w-full">
                        <Label className="text-sm font-medium">Expérience</Label>
                        <ChevronDown className="h-4 w-4" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-2 space-y-2">
                        {filterOptions.experience.map(exp => (
                          <Label key={exp} className="flex items-center space-x-2 cursor-pointer">
                            <Checkbox
                              checked={filters.experience.includes(exp)}
                              onCheckedChange={() => toggleFilter("experience", exp)}
                            />
                            <span className="text-sm">{exp}</span>
                          </Label>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Remote Work */}
                    <Collapsible defaultOpen>
                      <CollapsibleTrigger className="flex items-center justify-between w-full">
                        <Label className="text-sm font-medium">Télétravail</Label>
                        <ChevronDown className="h-4 w-4" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-2 space-y-2">
                        {filterOptions.remote.map(remote => (
                          <Label key={remote} className="flex items-center space-x-2 cursor-pointer">
                            <Checkbox
                              checked={filters.remote.includes(remote)}
                              onCheckedChange={() => toggleFilter("remote", remote)}
                            />
                            <span className="text-sm">{remote}</span>
                          </Label>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Salary */}
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full">
                        <Label className="text-sm font-medium">Salaire</Label>
                        <ChevronDown className="h-4 w-4" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-2 space-y-2">
                        {filterOptions.salary.map(salary => (
                          <Label key={salary} className="flex items-center space-x-2 cursor-pointer">
                            <Checkbox
                              checked={filters.salary.includes(salary)}
                              onCheckedChange={() => toggleFilter("salary", salary)}
                            />
                            <span className="text-sm">{salary}</span>
                          </Label>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Jobs List */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  Offres d'emploi pour profils seniors
                </h1>
                <p className="text-muted-foreground mt-1">
                  {jobs.length} offres trouvées
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Plus récentes</SelectItem>
                    <SelectItem value="salary-high">Salaire décroissant</SelectItem>
                    <SelectItem value="salary-low">Salaire croissant</SelectItem>
                    <SelectItem value="relevant">Plus pertinentes</SelectItem>
                  </SelectContent>
                </Select>

                {/* Mobile Filter Toggle */}
                <Button
                  variant="outline"
                  onClick={() => setFiltersOpen(!filtersOpen)}
                  className="lg:hidden"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filtres
                  {getActiveFiltersCount() > 0 && (
                    <Badge variant="secondary" className="ml-2">
                      {getActiveFiltersCount()}
                    </Badge>
                  )}
                </Button>
              </div>
            </div>

            {/* Jobs Grid */}
            <div className="space-y-6">
              {jobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="text-3xl">{job.logo}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
                              {job.title}
                            </h3>
                            {job.featured && (
                              <Badge className="bg-primary text-primary-foreground">
                                <Star className="h-3 w-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                          </div>
                          <p className="text-lg text-muted-foreground mb-2">{job.company}</p>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                            <span className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </span>
                            <span className="flex items-center">
                              <Briefcase className="h-4 w-4 mr-1" />
                              {job.type}
                            </span>
                            <span>{job.remote}</span>
                            <span>{job.experience}</span>
                            <span>{job.postedDate}</span>
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
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <span className="text-lg font-semibold text-foreground">{job.salary}</span>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            {job.views} vues
                          </span>
                          <span className="flex items-center">
                            <Users className="h-3 w-3 mr-1" />
                            {job.applicants} candidats
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          Sauvegarder
                        </Button>
                        <Button size="sm" asChild>
                          <Link to={`/job/${job.id}`}>Voir l'offre</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Charger plus d'offres
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;