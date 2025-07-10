import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Upload } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const totalSteps = 12;

  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    
    // Step 2: Location
    location: "",
    remoteWork: "",
    
    // Step 3: Experience Level
    experienceLevel: "",
    yearsExperience: "",
    
    // Step 4: Current Situation
    currentSituation: "",
    
    // Step 5: Tech Stack
    techStack: [],
    
    // Step 6: Role Preferences
    preferredRoles: [],
    
    // Step 7: Company Size
    companySize: "",
    
    // Step 8: Salary Expectations
    salaryMin: "",
    salaryMax: "",
    
    // Step 9: Work Style
    workStyle: [],
    
    // Step 10: Availability
    availability: "",
    
    // Step 11: Bio
    bio: "",
    
    // Step 12: CV Upload
    cvUploaded: false
  });

  const techStackOptions = [
    "JavaScript", "TypeScript", "React", "Vue.js", "Angular", "Node.js",
    "Python", "Java", "C#", "PHP", "Ruby", "Go", "Rust", "Swift",
    "AWS", "Azure", "GCP", "Docker", "Kubernetes", "MongoDB", "PostgreSQL"
  ];

  const roleOptions = [
    "Frontend Developer", "Backend Developer", "Full Stack Developer", 
    "DevOps Engineer", "Data Engineer", "Mobile Developer", "Tech Lead",
    "Engineering Manager", "Product Manager", "UX/UI Designer"
  ];

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      navigate("/jobs");
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayItem = (field: string, item: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(item)
        ? prev[field].filter(i => i !== item)
        : [...prev[field], item]
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Commençons par vos informations personnelles</h2>
              <p className="text-muted-foreground">Ces informations nous aideront à personnaliser votre expérience</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">Prénom</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Nom</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  placeholder="Votre nom"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                placeholder="votre.email@exemple.com"
              />
            </div>
            <div>
              <Label htmlFor="phone">Téléphone (optionnel)</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                placeholder="+33 6 12 34 56 78"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Où souhaitez-vous travailler ?</h2>
              <p className="text-muted-foreground">Indiquez votre localisation préférée</p>
            </div>
            <div>
              <Label htmlFor="location">Localisation</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => updateFormData("location", e.target.value)}
                placeholder="Paris, Lyon, Marseille..."
              />
            </div>
            <div>
              <Label>Travail à distance</Label>
              <RadioGroup
                value={formData.remoteWork}
                onValueChange={(value) => updateFormData("remoteWork", value)}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="full-remote" id="full-remote" />
                  <Label htmlFor="full-remote">100% télétravail</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="hybrid" id="hybrid" />
                  <Label htmlFor="hybrid">Télétravail partiel</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="office" id="office" />
                  <Label htmlFor="office">Présentiel uniquement</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="flexible" id="flexible" />
                  <Label htmlFor="flexible">Flexible</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Votre niveau d'expérience</h2>
              <p className="text-muted-foreground">Cela nous aide à vous proposer des offres adaptées</p>
            </div>
            <div>
              <Label>Niveau d'expérience</Label>
              <RadioGroup
                value={formData.experienceLevel}
                onValueChange={(value) => updateFormData("experienceLevel", value)}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="senior" id="senior" />
                  <Label htmlFor="senior">Senior (5+ ans)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="expert" id="expert" />
                  <Label htmlFor="expert">Expert (8+ ans)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="lead" id="lead" />
                  <Label htmlFor="lead">Lead/Principal (10+ ans)</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="yearsExperience">Années d'expérience exactes</Label>
              <Select onValueChange={(value) => updateFormData("yearsExperience", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez..." />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 16 }, (_, i) => i + 5).map(year => (
                    <SelectItem key={year} value={year.toString()}>
                      {year} {year === 20 ? "ans ou plus" : "ans"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Votre situation actuelle</h2>
              <p className="text-muted-foreground">Cela nous aide à adapter notre approche</p>
            </div>
            <div>
              <Label>Situation actuelle</Label>
              <RadioGroup
                value={formData.currentSituation}
                onValueChange={(value) => updateFormData("currentSituation", value)}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="employed-looking" id="employed-looking" />
                  <Label htmlFor="employed-looking">En poste, en recherche active</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="employed-open" id="employed-open" />
                  <Label htmlFor="employed-open">En poste, ouvert aux opportunités</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="unemployed" id="unemployed" />
                  <Label htmlFor="unemployed">Sans emploi, en recherche</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="freelance" id="freelance" />
                  <Label htmlFor="freelance">Freelance/Consultant</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Votre stack technique</h2>
              <p className="text-muted-foreground">Sélectionnez vos technologies de prédilection</p>
            </div>
            <div>
              <Label>Technologies maîtrisées (sélection multiple)</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                {techStackOptions.map(tech => (
                  <div
                    key={tech}
                    onClick={() => toggleArrayItem("techStack", tech)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      formData.techStack.includes(tech)
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card hover:bg-accent border-border"
                    }`}
                  >
                    <span className="text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Rôles recherchés</h2>
              <p className="text-muted-foreground">Quels types de postes vous intéressent ?</p>
            </div>
            <div>
              <Label>Rôles préférés (sélection multiple)</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                {roleOptions.map(role => (
                  <div
                    key={role}
                    onClick={() => toggleArrayItem("preferredRoles", role)}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      formData.preferredRoles.includes(role)
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card hover:bg-accent border-border"
                    }`}
                  >
                    <span className="font-medium">{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Taille d'entreprise préférée</h2>
              <p className="text-muted-foreground">Dans quel environnement préférez-vous évoluer ?</p>
            </div>
            <div>
              <Label>Taille d'entreprise</Label>
              <RadioGroup
                value={formData.companySize}
                onValueChange={(value) => updateFormData("companySize", value)}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="startup" id="startup" />
                  <Label htmlFor="startup">Startup (1-50 employés)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="scaleup" id="scaleup" />
                  <Label htmlFor="scaleup">Scale-up (51-250 employés)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mid-size" id="mid-size" />
                  <Label htmlFor="mid-size">Moyenne entreprise (251-1000 employés)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="large" id="large" />
                  <Label htmlFor="large">Grande entreprise (1000+ employés)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no-preference" id="no-preference" />
                  <Label htmlFor="no-preference">Pas de préférence</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Vos attentes salariales</h2>
              <p className="text-muted-foreground">Indiquez votre fourchette salariale souhaitée</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="salaryMin">Salaire minimum (k€/an)</Label>
                <Input
                  id="salaryMin"
                  type="number"
                  value={formData.salaryMin}
                  onChange={(e) => updateFormData("salaryMin", e.target.value)}
                  placeholder="65"
                />
              </div>
              <div>
                <Label htmlFor="salaryMax">Salaire maximum (k€/an)</Label>
                <Input
                  id="salaryMax"
                  type="number"
                  value={formData.salaryMax}
                  onChange={(e) => updateFormData("salaryMax", e.target.value)}
                  placeholder="85"
                />
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>💡 En tant que profil senior, votre expérience justifie des salaires attractifs. 
                 N'hésitez pas à viser haut !</p>
            </div>
          </div>
        );

      case 9:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Votre style de travail</h2>
              <p className="text-muted-foreground">Qu'est-ce qui vous motive dans le travail ?</p>
            </div>
            <div>
              <Label>Aspects importants pour vous (sélection multiple)</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                {[
                  "Innovation technique", "Impact produit", "Autonomie", "Mentorat",
                  "Leadership", "Formation continue", "Équilibre vie/travail", "Challenges techniques",
                  "Collaboration", "Culture d'entreprise", "Évolution de carrière", "Projets variés"
                ].map(aspect => (
                  <div
                    key={aspect}
                    onClick={() => toggleArrayItem("workStyle", aspect)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      formData.workStyle.includes(aspect)
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card hover:bg-accent border-border"
                    }`}
                  >
                    <span className="text-sm font-medium">{aspect}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 10:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Votre disponibilité</h2>
              <p className="text-muted-foreground">Quand pouvez-vous commencer un nouveau poste ?</p>
            </div>
            <div>
              <Label>Disponibilité</Label>
              <RadioGroup
                value={formData.availability}
                onValueChange={(value) => updateFormData("availability", value)}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="immediate" id="immediate" />
                  <Label htmlFor="immediate">Immédiatement</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1-month" id="1-month" />
                  <Label htmlFor="1-month">Dans 1 mois</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="2-months" id="2-months" />
                  <Label htmlFor="2-months">Dans 2 mois</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="3-months" id="3-months" />
                  <Label htmlFor="3-months">Dans 3 mois</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="flexible" id="flexible-timing" />
                  <Label htmlFor="flexible-timing">Flexible selon l'opportunité</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 11:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Parlez-nous de vous</h2>
              <p className="text-muted-foreground">Une courte présentation de votre parcours et motivations</p>
            </div>
            <div>
              <Label htmlFor="bio">Biographie professionnelle</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => updateFormData("bio", e.target.value)}
                placeholder="Décrivez votre parcours, vos réalisations marquantes, et ce qui vous motive dans votre carrière..."
                className="min-h-32"
              />
              <div className="text-sm text-muted-foreground mt-2">
                Conseil: Mettez en avant vos réalisations et votre vision technique
              </div>
            </div>
          </div>
        );

      case 12:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Importez votre CV</h2>
              <p className="text-muted-foreground">Dernière étape pour finaliser votre profil</p>
            </div>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                Glissez votre CV ici ou cliquez pour sélectionner
              </h3>
              <p className="text-muted-foreground mb-4">
                Formats acceptés: PDF, DOC, DOCX (max 5MB)
              </p>
              <Button variant="outline">
                Sélectionner un fichier
              </Button>
            </div>
            <div className="text-center">
              <Label className="flex items-center justify-center space-x-2">
                <Checkbox 
                  checked={formData.cvUploaded}
                  onCheckedChange={(checked) => updateFormData("cvUploaded", checked)}
                />
                <span className="text-sm">
                  J'accepte que mon CV soit visible par les recruteurs partenaires
                </span>
              </Label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-foreground">
              Welcome to the <span className="text-primary">Jungle</span>
            </Link>
            <div className="text-sm text-muted-foreground">
              Étape {currentStep} sur {totalSteps}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <Progress value={progressPercentage} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>Début</span>
              <span>{Math.round(progressPercentage)}% complété</span>
              <span>Terminé</span>
            </div>
          </div>

          {/* Step Content */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                Création de votre profil senior
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderStepContent()}

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center space-x-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Précédent</span>
                </Button>

                <Button
                  onClick={nextStep}
                  className="flex items-center space-x-2"
                >
                  <span>{currentStep === totalSteps ? "Terminer" : "Suivant"}</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;