import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  MapPin, Briefcase, Clock, Users, Eye, Heart, Share2, 
  Building, Calendar, DollarSign, Award, CheckCircle, ArrowLeft,
  BookOpen, Zap, Target, Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const JobDetail = () => {
  const { id } = useParams();
  const [isSaved, setIsSaved] = useState(false);

  // Mock job data - in a real app, this would be fetched based on the ID
  const job = {
    id: Number(id),
    title: "Senior Frontend Developer",
    company: "TechFlow",
    logo: "🚀",
    location: "Paris, France",
    type: "CDI",
    salary: "60k - 80k €",
    tags: ["React", "TypeScript", "Next.js", "GraphQL", "Jest"],
    description: "Join our innovative team to build the future of web applications with cutting-edge technologies.",
    fullDescription: `
      <p>Nous recherchons un(e) <strong>Senior Frontend Developer</strong> passionné(e) pour rejoindre notre équipe technique en pleine croissance. Vous serez en charge de développer et maintenir nos applications web de nouvelle génération utilisées par plus de 100 000 utilisateurs quotidiennement.</p>

      <h3>🎯 Vos missions</h3>
      <ul>
        <li>Développer et maintenir des applications React/Next.js performantes et scalables</li>
        <li>Collaborer étroitement avec les équipes UX/UI pour implémenter des interfaces utilisateur exceptionnelles</li>
        <li>Optimiser les performances frontend et l'expérience utilisateur</li>
        <li>Mentorer les développeurs junior et participer aux code reviews</li>
        <li>Contribuer à l'architecture technique et aux choix technologiques</li>
        <li>Participer à l'amélioration continue des process de développement</li>
      </ul>

      <h3>✨ Profil recherché</h3>
      <ul>
        <li>5+ années d'expérience en développement frontend</li>
        <li>Expertise avancée en React, TypeScript et écosystème moderne JavaScript</li>
        <li>Expérience avec Next.js, GraphQL et les outils de test (Jest, Cypress)</li>
        <li>Maîtrise des outils de build modernes (Webpack, Vite) et du versioning Git</li>
        <li>Sensibilité UX/UI et connaissance des principes d'accessibilité web</li>
        <li>Esprit d'équipe et excellentes capacités de communication</li>
        <li>Autonomie et proactivité dans un environnement agile</li>
      </ul>

      <h3>🚀 Ce que nous offrons</h3>
      <ul>
        <li>Salaire attractif : 60k - 80k € selon profil + variable</li>
        <li>Télétravail hybride (2-3 jours/semaine)</li>
        <li>Budget formation de 3000€/an + conférences</li>
        <li>Matériel de qualité (MacBook Pro, écrans 4K)</li>
        <li>Mutuelle premium prise en charge à 100%</li>
        <li>RTT, congés illimités après 2 ans d'ancienneté</li>
        <li>Stock-options et participation aux bénéfices</li>
        <li>Ambiance startup avec des défis techniques stimulants</li>
      </ul>
    `,
    requirements: [
      "5+ années d'expérience en développement frontend",
      "Expertise React, TypeScript, Next.js",
      "Expérience GraphQL et outils de test",
      "Maîtrise Git et outils de build modernes",
      "Sensibilité UX/UI et accessibilité"
    ],
    benefits: [
      "Télétravail hybride flexible",
      "Budget formation 3000€/an",
      "Matériel premium fourni",
      "Mutuelle prise en charge à 100%",
      "Stock-options et participation",
      "Congés illimités après 2 ans"
    ],
    applicants: 45,
    views: 1200,
    featured: true,
    remote: "Hybride",
    experience: "5+ ans",
    postedDate: "Il y a 2 jours",
    deadline: "Dans 15 jours",
    department: "Engineering",
    team: "Frontend Team",
    companySize: "50-200 employés",
    industry: "SaaS",
    website: "https://techflow.com"
  };

  const companyInfo = {
    name: "TechFlow",
    description: "TechFlow révolutionne la gestion de projets avec des outils IA innovants. Nous aidons les équipes à être plus productives grâce à notre plateforme SaaS utilisée par plus de 10 000 entreprises.",
    founded: "2019",
    employees: "120 employés",
    funding: "Série A - 15M€",
    culture: [
      "Innovation continue",
      "Autonomie et responsabilisation", 
      "Équilibre vie privée/travail",
      "Diversité et inclusion"
    ],
    perks: [
      "Team building réguliers",
      "Petit-déjeuner offert",
      "Salle de sport dans les bureaux",
      "Rooftop avec vue sur Paris"
    ]
  };

  const team = [
    { name: "Sarah M.", role: "Head of Engineering", initials: "SM" },
    { name: "Alex D.", role: "Senior Frontend Dev", initials: "AD" },
    { name: "Marie L.", role: "Product Manager", initials: "ML" }
  ];

  const similarJobs = [
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "DataMind",
      salary: "55k - 75k €",
      location: "Lyon"
    },
    {
      id: 3,
      title: "Lead Frontend Developer",
      company: "CloudNative", 
      salary: "70k - 90k €",
      location: "Remote"
    }
  ];

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
                <Link to="/jobs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Offres d'emploi
                </Link>
                <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Entreprises
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Se connecter</Button>
              <Button>S'inscrire</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Button variant="ghost" className="p-0" asChild>
            <Link to="/jobs" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux offres d'emploi
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Header */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{job.logo}</div>
                    <div>
                      <h1 className="text-3xl font-bold text-foreground mb-2">{job.title}</h1>
                      <p className="text-xl text-muted-foreground mb-4">{job.company}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <Globe className="h-4 w-4 mr-1" />
                          {job.remote}
                        </span>
                        <span className="flex items-center">
                          <Award className="h-4 w-4 mr-1" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                  </div>

                  {job.featured && (
                    <Badge className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div>
                      <div className="text-2xl font-bold text-foreground">{job.salary}</div>
                      <div className="text-sm text-muted-foreground">Salaire annuel brut</div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {job.views} vues
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {job.applicants} candidats
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {job.postedDate}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsSaved(!isSaved)}
                      className={isSaved ? "text-red-500 border-red-500" : ""}
                    >
                      <Heart className={`h-4 w-4 mr-2 ${isSaved ? "fill-current" : ""}`} />
                      {isSaved ? "Sauvegardé" : "Sauvegarder"}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Partager
                    </Button>
                    <Button size="lg" className="px-8">
                      Postuler maintenant
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Job Description */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Description du poste
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  className="prose prose-sm max-w-none text-foreground"
                  dangerouslySetInnerHTML={{ __html: job.fullDescription }}
                />
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="h-5 w-5 mr-2" />
                  À propos de {companyInfo.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{companyInfo.description}</p>
                
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-medium text-foreground">Fondé en</div>
                    <div className="text-muted-foreground">{companyInfo.founded}</div>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Équipe</div>
                    <div className="text-muted-foreground">{companyInfo.employees}</div>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Financement</div>
                    <div className="text-muted-foreground">{companyInfo.funding}</div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-medium text-foreground mb-3">Culture d'entreprise</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {companyInfo.culture.map((item, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-3">Avantages</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {companyInfo.perks.map((perk, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <Zap className="h-4 w-4 mr-2 text-primary" />
                        {perk}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-3">Équipe</h4>
                  <div className="flex space-x-4">
                    {team.map((member, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarFallback>{member.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm font-medium text-foreground">{member.name}</div>
                          <div className="text-xs text-muted-foreground">{member.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Apply */}
            <Card>
              <CardContent className="p-6">
                <Button size="lg" className="w-full mb-4">
                  Postuler maintenant
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 inline mr-1" />
                  Candidature en 2 minutes
                </div>
              </CardContent>
            </Card>

            {/* Job Details */}
            <Card>
              <CardHeader>
                <CardTitle>Détails du poste</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type de contrat</span>
                  <span className="font-medium">{job.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Télétravail</span>
                  <span className="font-medium">{job.remote}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Expérience</span>
                  <span className="font-medium">{job.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Département</span>
                  <span className="font-medium">{job.department}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Équipe</span>
                  <span className="font-medium">{job.team}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date limite</span>
                  <span className="font-medium text-orange-600">{job.deadline}</span>
                </div>
              </CardContent>
            </Card>

            {/* Required Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Compétences requises
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {job.requirements.map((req, index) => (
                    <div key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Similar Jobs */}
            <Card>
              <CardHeader>
                <CardTitle>Offres similaires</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {similarJobs.map((similarJob) => (
                  <Link 
                    key={similarJob.id} 
                    to={`/job/${similarJob.id}`}
                    className="block p-3 rounded-lg border hover:bg-accent transition-colors"
                  >
                    <div className="font-medium text-foreground text-sm">{similarJob.title}</div>
                    <div className="text-xs text-muted-foreground">{similarJob.company}</div>
                    <div className="text-xs text-muted-foreground">{similarJob.salary} • {similarJob.location}</div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;