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
                  <img 
                    src="/lovable-uploads/b51adb95-49e7-4d3f-befc-f77ca0de7382.png"
                    alt="Pennylane logo"
                    className="w-12 h-12 rounded-full"
                  />
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
                  
                  <div className={`transition-all duration-500 ease-in-out ${showFullDescription ? 'max-h-none opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="space-y-4 pt-4">
                      <p>européen. Nous sommes convaincus que la technologie peut transformer radicalement la façon dont les entreprises gèrent leurs finances.</p>
                      
                      <p>Rejoindre Pennylane, c'est intégrer une équipe passionnée qui révolutionne le secteur de la comptabilité grâce à l'innovation et à l'automatisation intelligente.</p>
                      
                      <Button 
                        variant="ghost" 
                        className="p-0 h-auto text-primary"
                        onClick={() => setShowFullDescription(false)}
                      >
                        Voir moins ▲
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Organization Chart */}
            <Card className={`mb-8 transition-all duration-500 ease-in-out ${showFullDescription ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-2'}`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-6 bg-blue-500 mr-3"></div>
                  <h2 className="text-xl font-bold">Organisation des équipes</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Product Team */}
                  <div className="border rounded-lg p-4 bg-blue-50">
                    <h3 className="font-semibold text-lg mb-3 text-blue-800">Product</h3>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded border">
                        <h4 className="font-medium">VP Product</h4>
                        <div className="flex flex-wrap gap-1 mt-2">
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Strategy</span>
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Analytics</span>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded border border-yellow-300">
                        <h4 className="font-medium">Senior Product Manager</h4>
                        <p className="text-xs text-blue-600 font-medium">← Votre poste</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Product Strategy</span>
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">User Research</span>
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Data Analysis</span>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <h4 className="font-medium">Product Manager</h4>
                        <div className="flex flex-wrap gap-1 mt-2">
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Roadmap</span>
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">A/B Testing</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Engineering Team */}
                  <div className="border rounded-lg p-4 bg-green-50">
                    <h3 className="font-semibold text-lg mb-3 text-green-800">Engineering</h3>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded border">
                        <h4 className="font-medium">CTO</h4>
                        <div className="flex flex-wrap gap-1 mt-2">
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Architecture</span>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Tech Strategy</span>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <h4 className="font-medium">Lead Frontend</h4>
                        <div className="flex flex-wrap gap-1 mt-2">
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">React</span>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">TypeScript</span>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Next.js</span>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <h4 className="font-medium">Lead Backend</h4>
                        <div className="flex flex-wrap gap-1 mt-2">
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Node.js</span>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">PostgreSQL</span>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">AWS</span>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <h4 className="font-medium">Senior Developers (4)</h4>
                        <div className="flex flex-wrap gap-1 mt-2">
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Full Stack</span>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">DevOps</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Data & Design Team */}
                  <div className="border rounded-lg p-4 bg-purple-50">
                    <h3 className="font-semibold text-lg mb-3 text-purple-800">Data & Design</h3>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded border">
                        <h4 className="font-medium">Lead Data Scientist</h4>
                        <div className="flex flex-wrap gap-1 mt-2">
                          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Python</span>
                          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">ML</span>
                          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">BigQuery</span>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <h4 className="font-medium">Senior UX/UI Designer</h4>
                        <div className="flex flex-wrap gap-1 mt-2">
                          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Figma</span>
                          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Design System</span>
                          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">User Research</span>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <h4 className="font-medium">Data Analysts (2)</h4>
                        <div className="flex flex-wrap gap-1 mt-2">
                          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">SQL</span>
                          <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Looker</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Funding Timeline */}
            <Card className={`mb-8 transition-all duration-500 ease-in-out ${showFullDescription ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-2'}`}>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-6 bg-green-500 mr-3"></div>
                  <h2 className="text-xl font-bold">Historique de financement</h2>
                </div>
                
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  
                  <div className="space-y-8">
                    {/* Series B */}
                    <div className="relative flex items-start">
                      <div className="absolute left-2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow"></div>
                      <div className="ml-12">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold text-green-800">Série B</h3>
                            <span className="text-sm text-green-600">Mars 2024</span>
                          </div>
                          <p className="text-2xl font-bold text-green-800 mb-2">€40M</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-white px-3 py-1 rounded-full text-xs font-medium border">Balderton Capital</span>
                            <span className="bg-white px-3 py-1 rounded-full text-xs font-medium border">Partech</span>
                            <span className="bg-white px-3 py-1 rounded-full text-xs font-medium border">DST Global</span>
                          </div>
                          <p className="text-sm text-green-700">
                            <strong>Objectifs :</strong> Expansion européenne, développement IA, croissance équipe Product & Tech
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Series A */}
                    <div className="relative flex items-start">
                      <div className="absolute left-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow"></div>
                      <div className="ml-12">
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold text-blue-800">Série A</h3>
                            <span className="text-sm text-blue-600">Juin 2022</span>
                          </div>
                          <p className="text-2xl font-bold text-blue-800 mb-2">€15M</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-white px-3 py-1 rounded-full text-xs font-medium border">Partech</span>
                            <span className="bg-white px-3 py-1 rounded-full text-xs font-medium border">Alven</span>
                            <span className="bg-white px-3 py-1 rounded-full text-xs font-medium border">Business Angels</span>
                          </div>
                          <p className="text-sm text-blue-700">
                            <strong>Objectifs :</strong> Développement produit, recrutement tech, acquisition clients
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Seed */}
                    <div className="relative flex items-start">
                      <div className="absolute left-2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow"></div>
                      <div className="ml-12">
                        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold text-orange-800">Seed</h3>
                            <span className="text-sm text-orange-600">Janvier 2021</span>
                          </div>
                          <p className="text-2xl font-bold text-orange-800 mb-2">€4M</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-white px-3 py-1 rounded-full text-xs font-medium border">Alven</span>
                            <span className="bg-white px-3 py-1 rounded-full text-xs font-medium border">Kima Ventures</span>
                            <span className="bg-white px-3 py-1 rounded-full text-xs font-medium border">FJ Labs</span>
                          </div>
                          <p className="text-sm text-orange-700">
                            <strong>Objectifs :</strong> MVP, première équipe, validation marché
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="mt-8 grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-gray-800">€59M</p>
                    <p className="text-sm text-gray-600">Total levé</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-gray-800">610</p>
                    <p className="text-sm text-gray-600">Employés</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-gray-800">€400M</p>
                    <p className="text-sm text-gray-600">Valorisation</p>
                  </div>
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
                  <img 
                    src="/lovable-uploads/b51adb95-49e7-4d3f-befc-f77ca0de7382.png"
                    alt="Pennylane logo"
                    className="w-12 h-12 rounded-full"
                  />
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