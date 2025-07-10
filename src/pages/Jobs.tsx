import { useState } from "react";
import { Search, Filter, MapPin, Heart, Eye, Users, X, MessageSquare, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("Product Manager senior");
  const [location, setLocation] = useState("France");
  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [aiQuery, setAiQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  const quickFilters = [
    { label: "Salaire affiché", count: "12.5K", active: true },
    { label: "Télétravail possible", count: "31.5K", active: false },
    { label: "Parentalité flexible", count: "26.7K", active: false },
    { label: "Nomade digital", count: "4K", active: false },
    { label: "Parité salariale", count: "7.7K", active: false },
    { label: "Entrepreneur", count: "5K", active: false }
  ];

  const jobs = [
    {
      id: 1,
      title: "Agile Master (H/F)",
      company: "U TECH",
      location: "Carquefou",
      type: "Télétravail fréquent",
      salary: "47K à 55K €",
      image: "/lovable-uploads/3daf6cc6-782b-406b-ba04-b92c9ec65dc4.png",
      postedDate: "Il y a 14 jours",
      isLiked: false,
      hasApplied: false
    },
    {
      id: 2,
      title: "Scrum Master (F/H)",
      company: "GROUPE SII",
      location: "Nantes",
      type: "Télétravail fréquent",
      salary: "40K à 44K €",
      image: "/lovable-uploads/b4b2cadc-f54e-470f-9c50-8d43e5fe90e6.png",
      postedDate: "Il y a 15 jours",
      isLiked: false,
      hasApplied: false
    },
    {
      id: 3,
      title: "Scrum Master",
      company: "CAPGEMINI INVENT",
      location: "Nantes",
      type: "Télétravail fréquent",
      salary: "",
      image: "/lovable-uploads/f2161f4e-5f19-410a-b01f-03c579527f9f.png",
      postedDate: "Il y a 16 jours",
      isLiked: false,
      hasApplied: false,
      isViewed: true
    }
  ];

  const handleAISubmit = () => {
    if (!aiQuery.trim()) return;
    
    setAiResponse(`Voici une suggestion automatisée pour votre recherche "${aiQuery}". Notre intelligence artificielle a analysé votre profil et recommande de vous concentrer sur les offres de Product Manager Senior avec plus de 5 ans d'expérience à Paris. Vous pourriez également élargir votre recherche aux postes de Lead Product ou Product Owner dans des entreprises tech en croissance.`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Search Bar */}
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex gap-4 items-end">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Recherchez par job, mot-clé ou entreprise"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>
            
            <div className="flex-1 max-w-md">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="France"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10 h-12"
                />
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => setLocation("")}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <select className="h-12 px-4 border border-border rounded-md bg-background text-foreground">
              <option>Type de job</option>
              <option>CDI</option>
              <option>CDD</option>
              <option>Freelance</option>
              <option>Stage</option>
            </select>
          </div>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-3 items-center">
            {quickFilters.map((filter, index) => (
              <Badge
                key={index}
                variant={filter.active ? "default" : "secondary"}
                className="px-3 py-2 text-sm cursor-pointer hover:bg-primary/10"
              >
                {filter.label} {filter.count}
              </Badge>
            ))}
            <Button variant="outline" className="ml-auto">
              <Filter className="h-4 w-4 mr-2" />
              Tous les filtres
            </Button>
          </div>
        </div>
      </div>

      {/* Jobs Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={job.image} 
                    alt={`${job.company} office`}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {job.isViewed && (
                    <Badge className="absolute top-2 right-2 bg-muted text-muted-foreground">
                      Déjà vu
                    </Badge>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{job.company}</p>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                    <span className="mx-2">•</span>
                    {job.type}
                  </div>
                  
                  {job.salary && (
                    <div className="flex items-center text-sm font-medium mb-3">
                      💰 {job.salary}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Heart className={`h-4 w-4 ${job.isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">{job.postedDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feedback Section */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold mb-2">
                  Êtes-vous satisfaits de vos suggestions automatiques de jobs ?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Vos feedbacks nous permettent d'améliorer l'expérience Welcome to the Jungle.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90">
                  Donner mon avis
                </Button>
                <Button variant="ghost" size="sm">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Assistant */}
      <div className="fixed bottom-6 right-6">
        {!showAIAssistant ? (
          <Button
            onClick={() => setShowAIAssistant(true)}
            className="w-16 h-16 rounded-full bg-wttj-yellow hover:bg-wttj-yellow/90 text-foreground shadow-lg"
          >
            <HelpCircle className="h-8 w-8 text-black" />
          </Button>
        ) : (
          <Card className="w-96 max-w-[calc(100vw-2rem)] shadow-2xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-wttj-yellow flex items-center justify-center">
                    <HelpCircle className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="font-semibold">Assistant virtuel</h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAIAssistant(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="mb-4">
                <p className="text-sm font-medium mb-2">Bonjour, comment puis-je vous aider ?</p>
                <div className="bg-muted/50 p-3 rounded-lg text-sm">
                  <p className="font-medium mb-2">Bienvenue sur l'assistant virtuel</p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <span>✈️</span>
                      <span>Trouvez les informations rapidement grâce à l'intelligence artificielle.</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span>🔧</span>
                      <span>Profitez d'un assistant mis à jour régulièrement pour une expérience toujours meilleure.</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Merci d'éviter de partager des informations sensibles. En utilisant ce service, vous acceptez l'utilisation de cookies de personnalisation et de mesure d'audience. <button className="underline">En savoir plus</button>. En cas de refus, ce service ne sera pas accessible. Vous pouvez alors <button className="underline">consulter notre FAQ</button>.
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <Textarea
                  placeholder="Tapez votre question ici..."
                  value={aiQuery}
                  onChange={(e) => setAiQuery(e.target.value)}
                  className="min-h-[80px]"
                />
                <Button 
                  onClick={handleAISubmit}
                  className="w-full bg-foreground text-background hover:bg-foreground/90"
                  disabled={!aiQuery.trim()}
                >
                  Envoyer
                </Button>
                
                {aiResponse && (
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="text-sm">{aiResponse}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Jobs;