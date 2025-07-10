import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Users, Star, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

const JobDetail = () => {
  const { id } = useParams();
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Data for the Pennylane Product Manager position
  const job = {
    id: 1,
    title: "Product Manager",
    company: "pennylane",
    companyDescription: "Plateforme de gestion financière et comptable",
    employees: "501-1000 employés",
    salary: "€50-85k",
    level: "Niveau senior",
    location: "Paris",
    workType: "Télétravail partiel",
    tags: ["B2B", "Fintech", "Comptabilité", "SaaS", "Comptabilité", "Automatisation"],
    description: `Daveo est un cabinet de conseil spécialisé dans les domaines du product management, de la technologie et du cloud. Fondé en 2008, Daveo a bâti sa réputation sur une culture d'entreprise forte axée sur la réussite collective. Voici quelques points clés à propos de Daveo :

• Innovation et Collaboration : Daveo allie amour de l'innovation et état d'esprit collaboratif pour offrir des solutions de pointe à ses clients.

• Expertise : Daveo est un pure player du product management, de la tech et du cloud public AWS et GCP. L'entreprise est présente dans plusieurs villes, dont Paris, Lille, Lyon, Bordeaux et Nantes.

• Accompagnement à 360° : Daveo propose un accompagnement complet à ses clients, en mettant en avant ses compétences en matière d'innovation, de technologie et de gestion de produits.

En somme, Daveo est un acteur dynamique qui allie expertise...`
  };

  const companyStats = {
    logo: "daveo",
    employees: "230 collaborateurs", 
    founded: "Créée en 2008",
    revenue: "Chiffre d'affaires: 28M"
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Yellow Background */}
      <div className="bg-wttj-yellow min-h-[400px] relative">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Back Button */}
          <Button variant="ghost" className="mb-6 p-0 text-black hover:bg-black/10" asChild>
            <Link to="/jobs" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour
            </Link>
          </Button>

          {/* Job Header Card */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Job Info */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-black mb-6">{job.title}</h1>
              
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">💰</span>
                </div>
                <Badge className="bg-green-500 text-white text-sm font-medium px-3 py-1">
                  {job.salary}
                </Badge>
              </div>

              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">⚡</span>
                </div>
                <span className="text-black font-medium">{job.level}</span>
              </div>

              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="h-6 w-6 text-black" />
                <Badge className="bg-green-500 text-white text-sm font-medium px-3 py-1">
                  {job.location}
                </Badge>
              </div>

              <div className="text-black font-medium">{job.workType}</div>
            </div>

            {/* Right Column - Company Info */}
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">p</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{job.company}</h3>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">{job.companyDescription}</p>
                
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Users className="h-4 w-4 mr-2" />
                  {job.employees}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tags.map((tag, index) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className={`text-xs ${index === 0 ? 'bg-green-500 text-white' : ''}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    Ouvert aux candidatures
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Star className="h-4 w-4 mr-2" />
                    Suivre {job.company}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Job Description */}
          <div className="lg:col-span-2">
            {/* Job Post Section */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-1 h-6 bg-wttj-yellow mr-3"></div>
                  <h2 className="text-xl font-bold">Le poste</h2>
                </div>
                
                <h3 className="font-semibold mb-4">Descriptif du poste</h3>
                
                <div className="text-muted-foreground space-y-4">
                  <p>Vous cherchez un environnement professionnel stimulant basé sur l'autonomie et la confiance ?</p>
                  
                  <p>Pennylane vous offre l'opportunité de grandir au sein d'une entreprise en pleine croissance.</p>
                  
                  <p>Ici, votre expertise contribuera directement à aider les entrepreneurs à reprendre le contrôle de leurs finances. Découvrez un lieu où vos compétences seront valorisées et où vous pourrez façonner l'avenir de la gestion financière.</p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Notre vision</h4>
                    <p>Notre ambition est de devenir le logiciel de pilotage financier préféré des PMEs européennes.</p>
                  </div>
                  
                  <p>Nous aidons les entrepreneurs à se débarrasser des tâches chronophages liées à la comptabilité et à la finance, tout en leur donnant accès à des informations financières clés pour les aider à prendre les meilleures décisions pour leur entreprise.</p>
                  
                  <p>Parallèlement, nous aidons les cabinets d'expertise-comptable, en leur permettant de passer moins de temps sur des tâches redondantes et répétitives, et plus de temps sur la partie conseil et accompagnement de leurs clients.</p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">À propos de Pennylane</h4>
                    <p>Pennylane est une des FinTech à la plus forte croissance en France, et souhaite bientôt adresser le marché...</p>
                  </div>
                  
                  {!showFullDescription && (
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto text-primary"
                      onClick={() => setShowFullDescription(true)}
                    >
                      Voir plus ▼
                    </Button>
                  )}
                  
                  {showFullDescription && (
                    <>
                      <div className="space-y-4">
                        <p>européen. Nous sommes convaincus que la technologie peut transformer radicalement la façon dont les entreprises gèrent leurs finances.</p>
                        
                        <p>Rejoindre Pennylane, c'est intégrer une équipe passionnée qui révolutionne le secteur de la comptabilité grâce à l'innovation et à l'automatisation intelligente.</p>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        className="p-0 h-auto text-primary"
                        onClick={() => setShowFullDescription(false)}
                      >
                        Voir moins ▲
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Profile Match */}
          <div>
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center mr-3">
                    <span className="text-white font-bold">◆</span>
                  </div>
                  <div>
                    <h3 className="font-bold">Est-ce que mon profil correspond ?</h3>
                    <Badge className="bg-wttj-yellow text-black text-xs font-medium mt-1">
                      NOUVEAU
                    </Badge>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-6">
                  Découvrez vos points forts par rapport à cette offre
                </p>
                
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">IA</span>
                    <div className="ml-1">
                      <div className="w-1 h-1 bg-white rounded-full mb-1"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground text-center mb-6">
                  Notre analyse de compatibilité alimentée par l'IA compare votre CV à une offre d'emploi afin que vous sachiez si vos compétences et expériences sont alignées avec le poste.
                </p>
                
                <div className="space-y-3">
                  <Button className="w-full bg-black text-white hover:bg-gray-800">
                    Charger mon CV
                  </Button>
                  <Button variant="outline" className="w-full text-sm">
                    OU sélectionnez un CV depuis votre profil
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Company Details */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-6 bg-wttj-yellow mr-3"></div>
                  <h2 className="text-xl font-bold">L'entreprise</h2>
                </div>
                
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">p</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">PENNYLANE</h3>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Building className="h-4 w-4 mr-2" />
                    Expertise comptable, FinTech / InsurTech, SaaS / Cloud...
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      610 collaborateurs
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <span className="mr-2">📅</span>
                      Créée en 2020
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <span className="mr-2">👥</span>
                      Âge moyen : 32 ans
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">⚧</span>
                      35%
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">⚧</span>
                      65%
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Voir le site ↗
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 relative">
                    Voir toutes les offres
                    <span className="ml-2 bg-wttj-yellow text-black text-xs font-bold px-2 py-1 rounded">57</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;