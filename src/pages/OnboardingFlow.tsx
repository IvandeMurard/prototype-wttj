import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalTrigger } from "@/components/ui/modal";
import { MapPin, Briefcase, TrendingUp, DollarSign, Home, Globe, Building2, Layers, Code, User, Upload, FileText, ChevronLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface OnboardingData {
  localisation: string;
  typePoste: string;
  experience: string;
  salaire: { montant: string; devise: string };
  teletravail: string;
  langues: string[];
  visa: boolean;
  tailleEntreprise: string;
  secteurActivite: string;
  technologies: string[];
  nom: string;
  email: string;
  telephone: string;
  cv: File | null;
}

const TOTAL_STEPS = 12;

const stepTitles = [
  "Localisation",
  "Type de Poste", 
  "Expérience sur le Poste",
  "Salaire",
  "Télétravail",
  "Langues parlées + Visa",
  "Taille d'entreprise privilégiée",
  "Secteur d'activité privilégié", 
  "Technologies maitrisées",
  "Page d'inscription",
  "Chargement du CV",
  "Résumé"
];

const stepIcons = [
  MapPin, Briefcase, TrendingUp, DollarSign, Home, Globe, Building2, Layers, Code, User, Upload, FileText
];

const OnboardingFlow = () => {
  const { step } = useParams<{ step: string }>();
  const navigate = useNavigate();
  const currentStep = parseInt(step || "1");

  const [formData, setFormData] = useState<OnboardingData>(() => {
    const saved = localStorage.getItem("onboarding-data");
    return saved ? JSON.parse(saved) : {
      localisation: "",
      typePoste: "",
      experience: "",
      salaire: { montant: "", devise: "€" },
      teletravail: "",
      langues: [],
      visa: false,
      tailleEntreprise: "",
      secteurActivite: "",
      technologies: [],
      nom: "",
      email: "",
      telephone: "",
      cv: null
    };
  });

  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    if (currentStep < 1 || currentStep > TOTAL_STEPS) {
      navigate("/onboarding/1");
    }
  }, [currentStep, navigate]);

  const saveData = () => {
    localStorage.setItem("onboarding-data", JSON.stringify(formData));
  };

  const updateFormData = (field: keyof OnboardingData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    saveData();
    if (currentStep === TOTAL_STEPS) {
      setShowSummary(true);
    } else {
      navigate(`/onboarding/${currentStep + 1}`);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      navigate(`/onboarding/${currentStep - 1}`);
    }
  };

  const skipStep = () => {
    if (currentStep >= 4 && currentStep < TOTAL_STEPS) {
      navigate(`/onboarding/${currentStep + 1}`);
    }
  };

  const canSkip = currentStep >= 4 && currentStep < TOTAL_STEPS;
  const isRequired = currentStep <= 3;

  const renderStepContent = () => {
    const Icon = stepIcons[currentStep - 1];

    switch (currentStep) {
      case 1: // Localisation
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Icon className="mx-auto h-16 w-16 text-wttj-yellow mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-2">Localisation</h2>
              <p className="text-muted-foreground">Où souhaitez-vous travailler ?</p>
            </div>
            <div className="space-y-4">
              <Label htmlFor="localisation">Ville ou région préférée</Label>
              <Input
                id="localisation"
                value={formData.localisation}
                onChange={(e) => updateFormData("localisation", e.target.value)}
                placeholder="Paris, Lyon, Remote..."
                className="h-12"
              />
            </div>
          </div>
        );

      case 2: // Type de Poste
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Icon className="mx-auto h-16 w-16 text-wttj-yellow mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-2">Type de Poste</h2>
              <p className="text-muted-foreground">Quel type de poste recherchez-vous ?</p>
            </div>
            <div className="space-y-4">
              <Label htmlFor="typePoste">Intitulé du poste souhaité</Label>
              <Input
                id="typePoste"
                value={formData.typePoste}
                onChange={(e) => updateFormData("typePoste", e.target.value)}
                placeholder="Développeur Full Stack, Product Manager..."
                className="h-12"
              />
            </div>
          </div>
        );

      case 3: // Expérience
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Icon className="mx-auto h-16 w-16 text-wttj-yellow mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-2">Expérience sur le Poste</h2>
              <p className="text-muted-foreground">Combien d'années d'expérience avez-vous ?</p>
            </div>
            <div className="space-y-4">
              <Label htmlFor="experience">Nombre d'années d'expérience</Label>
              <Input
                id="experience"
                type="number"
                min="0"
                max="50"
                value={formData.experience}
                onChange={(e) => updateFormData("experience", e.target.value)}
                placeholder="5"
                className="h-12 text-center text-2xl"
              />
              <p className="text-sm text-muted-foreground text-center">années</p>
            </div>
          </div>
        );

      case 4: // Salaire
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Icon className="mx-auto h-16 w-16 text-wttj-yellow mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-2">Salaire</h2>
              <p className="text-muted-foreground">Quelles sont vos attentes salariales ?</p>
            </div>
            <div className="space-y-4">
              <Label>Salaire souhaité (brut annuel)</Label>
              <div className="flex gap-2">
                <Input
                  value={formData.salaire.montant}
                  onChange={(e) => updateFormData("salaire", { ...formData.salaire, montant: e.target.value })}
                  placeholder="45000"
                  className="h-12"
                  type="number"
                />
                <Select
                  value={formData.salaire.devise}
                  onValueChange={(value) => updateFormData("salaire", { ...formData.salaire, devise: value })}
                >
                  <SelectTrigger className="w-24 h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="€">€</SelectItem>
                    <SelectItem value="$">$</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 5: // Télétravail
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Icon className="mx-auto h-16 w-16 text-wttj-yellow mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-2">Télétravail</h2>
              <p className="text-muted-foreground">Quelle est votre préférence ?</p>
            </div>
            <RadioGroup
              value={formData.teletravail}
              onValueChange={(value) => updateFormData("teletravail", value)}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="full-remote" id="full-remote" />
                <Label htmlFor="full-remote">100% télétravail</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hybrid" id="hybrid" />
                <Label htmlFor="hybrid">Hybride (2-3 jours/semaine)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="onsite" id="onsite" />
                <Label htmlFor="onsite">Présentiel uniquement</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="flexible" id="flexible" />
                <Label htmlFor="flexible">Flexible</Label>
              </div>
            </RadioGroup>
          </div>
        );

      case 6: // Langues + Visa
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Icon className="mx-auto h-16 w-16 text-wttj-yellow mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-2">Langues parlées + Visa</h2>
              <p className="text-muted-foreground">Vos compétences linguistiques</p>
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <Label>Langues parlées</Label>
                <div className="grid grid-cols-2 gap-2">
                  {["Français", "Anglais", "Espagnol", "Allemand", "Italien", "Autre"].map((langue) => (
                    <div key={langue} className="flex items-center space-x-2">
                      <Checkbox
                        id={langue}
                        checked={formData.langues.includes(langue)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            updateFormData("langues", [...formData.langues, langue]);
                          } else {
                            updateFormData("langues", formData.langues.filter(l => l !== langue));
                          }
                        }}
                      />
                      <Label htmlFor={langue}>{langue}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="visa"
                  checked={formData.visa}
                  onCheckedChange={(checked) => updateFormData("visa", checked)}
                />
                <Label htmlFor="visa">J'ai besoin d'un visa de travail</Label>
              </div>
            </div>
          </div>
        );

      case 7: // Taille entreprise
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Icon className="mx-auto h-16 w-16 text-wttj-yellow mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-2">Taille d'entreprise privilégiée</h2>
              <p className="text-muted-foreground">Dans quel type d'entreprise souhaitez-vous évoluer ?</p>
            </div>
            <RadioGroup
              value={formData.tailleEntreprise}
              onValueChange={(value) => updateFormData("tailleEntreprise", value)}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="startup" id="startup" />
                <Label htmlFor="startup">Startup (1-50 employés)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="scale-up" id="scale-up" />
                <Label htmlFor="scale-up">Scale-up (51-250 employés)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium">Entreprise moyenne (251-1000 employés)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="large" id="large" />
                <Label htmlFor="large">Grande entreprise (1000+ employés)</Label>
              </div>
            </RadioGroup>
          </div>
        );

      case 8: // Secteur activité
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Icon className="mx-auto h-16 w-16 text-wttj-yellow mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-2">Secteur d'activité privilégié</h2>
              <p className="text-muted-foreground">Dans quel secteur voulez-vous travailler ?</p>
            </div>
            <div className="space-y-4">
              <Label htmlFor="secteur">Secteur d'activité</Label>
              <Select
                value={formData.secteurActivite}
                onValueChange={(value) => updateFormData("secteurActivite", value)}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Sélectionnez un secteur" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tech">Tech / Software</SelectItem>
                  <SelectItem value="fintech">Fintech</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="healthtech">Healthtech</SelectItem>
                  <SelectItem value="edtech">Edtech</SelectItem>
                  <SelectItem value="media">Média / Communication</SelectItem>
                  <SelectItem value="consulting">Consulting</SelectItem>
                  <SelectItem value="industry">Industrie</SelectItem>
                  <SelectItem value="other">Autre</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 9: // Technologies
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Icon className="mx-auto h-16 w-16 text-wttj-yellow mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-2">Technologies maitrisées</h2>
              <p className="text-muted-foreground">Quelles technologies maîtrisez-vous ?</p>
            </div>
            <div className="space-y-4">
              <Label>Technologies et compétences</Label>
              <div className="grid grid-cols-2 gap-2">
                {["React", "Vue.js", "Angular", "Node.js", "Python", "Java", "Go", "TypeScript", "PHP", "Ruby", "Swift", "Kotlin"].map((tech) => (
                  <div key={tech} className="flex items-center space-x-2">
                    <Checkbox
                      id={tech}
                      checked={formData.technologies.includes(tech)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          updateFormData("technologies", [...formData.technologies, tech]);
                        } else {
                          updateFormData("technologies", formData.technologies.filter(t => t !== tech));
                        }
                      }}
                    />
                    <Label htmlFor={tech}>{tech}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 10: // Inscription
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Icon className="mx-auto h-16 w-16 text-wttj-yellow mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-2">Page d'inscription</h2>
              <p className="text-muted-foreground">Créez votre compte</p>
            </div>
            <div className="space-y-6">
              <Button 
                variant="outline" 
                className="w-full h-12 border-2 hover:bg-wttj-yellow/10"
                onClick={() => {/* Google sign-in interface only */}}
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continuer avec Google
              </Button>
              
              <div className="text-center text-muted-foreground">ou</div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="nom">Nom complet</Label>
                  <Input
                    id="nom"
                    value={formData.nom}
                    onChange={(e) => updateFormData("nom", e.target.value)}
                    placeholder="Jean Dupont"
                    className="h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    placeholder="jean.dupont@email.com"
                    className="h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="telephone">Téléphone</Label>
                  <Input
                    id="telephone"
                    type="tel"
                    value={formData.telephone}
                    onChange={(e) => updateFormData("telephone", e.target.value)}
                    placeholder="+33 6 12 34 56 78"
                    className="h-12"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 11: // CV Upload
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Icon className="mx-auto h-16 w-16 text-wttj-yellow mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-2">Chargement du CV</h2>
              <p className="text-muted-foreground">Ajoutez votre CV (PDF, DOC acceptés)</p>
            </div>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <Button variant="outline" className="mb-2">
                  Choisir un fichier
                </Button>
                <p className="text-sm text-muted-foreground">
                  Formats acceptés : PDF, DOC, DOCX (max 5MB)
                </p>
                {formData.cv && (
                  <p className="text-sm text-wttj-yellow mt-2">
                    ✓ Fichier sélectionné : {formData.cv.name}
                  </p>
                )}
              </div>
            </div>
          </div>
        );

      case 12: // Résumé (Modal)
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Icon className="mx-auto h-16 w-16 text-wttj-yellow mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-2">Récapitulatif</h2>
              <p className="text-muted-foreground">Vérifiez vos informations avant de finaliser</p>
            </div>
            <div className="text-center">
              <Modal open={showSummary} onOpenChange={setShowSummary}>
                <ModalTrigger asChild>
                  <Button className="bg-wttj-yellow text-black hover:bg-wttj-yellow-dark">
                    Voir le résumé complet
                  </Button>
                </ModalTrigger>
                <ModalContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <ModalHeader>
                    <ModalTitle>Résumé de votre profil</ModalTitle>
                  </ModalHeader>
                  <div className="space-y-6 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Informations générales</h3>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium">Nom:</span> {formData.nom}</p>
                          <p><span className="font-medium">Email:</span> {formData.email}</p>
                          <p><span className="font-medium">Téléphone:</span> {formData.telephone}</p>
                          <p><span className="font-medium">Localisation:</span> {formData.localisation}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Préférences de poste</h3>
                        <div className="space-y-2 text-sm">
                          <p><span className="font-medium">Type de poste:</span> {formData.typePoste}</p>
                          <p><span className="font-medium">Salaire:</span> {formData.salaire.montant} {formData.salaire.devise}</p>
                          <p><span className="font-medium">Télétravail:</span> {formData.teletravail}</p>
                          <p><span className="font-medium">Taille entreprise:</span> {formData.tailleEntreprise}</p>
                          <p><span className="font-medium">Secteur:</span> {formData.secteurActivite}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Expérience</h3>
                      <p className="text-sm">{formData.experience}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Langues</h3>
                        <div className="flex flex-wrap gap-1">
                          {formData.langues.map((langue) => (
                            <span key={langue} className="bg-wttj-yellow/20 px-2 py-1 rounded text-xs">
                              {langue}
                            </span>
                          ))}
                        </div>
                        {formData.visa && (
                          <p className="text-xs text-muted-foreground mt-2">Besoin d'un visa de travail</p>
                        )}
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Technologies</h3>
                        <div className="flex flex-wrap gap-1">
                          {formData.technologies.map((tech) => (
                            <span key={tech} className="bg-wttj-yellow/20 px-2 py-1 rounded text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 pt-6">
                      <Button 
                        className="flex-1 bg-wttj-yellow text-black hover:bg-wttj-yellow-dark"
                        onClick={() => navigate("/jobs")}
                      >
                        Finaliser et voir les offres
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setShowSummary(false)}
                      >
                        Modifier
                      </Button>
                    </div>
                  </div>
                </ModalContent>
              </Modal>
            </div>
          </div>
        );

      default:
        return <div>Étape non trouvée</div>;
    }
  };

  if (currentStep < 1 || currentStep > TOTAL_STEPS) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Header avec progress bar */}
      <div className="bg-white border-b border-border">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            {currentStep > 1 && (
              <Button variant="ghost" size="sm" onClick={prevStep}>
                <ChevronLeft className="h-4 w-4 mr-1" />
                Retour
              </Button>
            )}
            <div className="text-sm text-muted-foreground">
              Étape {currentStep} sur {TOTAL_STEPS}
            </div>
          </div>
          <Progress 
            value={(currentStep / TOTAL_STEPS) * 100} 
            className="h-2"
          />
        </div>
      </div>

      {/* Contenu principal */}
      <div className="flex-1">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-card rounded-lg border border-border p-8">
            {renderStepContent()}
            
            {/* Boutons de navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
              <div>
                {canSkip && (
                  <Button variant="outline" onClick={skipStep} className="border-2 hover:bg-muted">
                    Passer
                  </Button>
                )}
              </div>
              <Button 
                onClick={nextStep}
                className="bg-wttj-yellow text-black hover:bg-wttj-yellow-dark px-8"
                disabled={isRequired && (
                  (currentStep === 1 && !formData.localisation) ||
                  (currentStep === 2 && !formData.typePoste) ||
                  (currentStep === 3 && !formData.experience)
                )}
              >
                {currentStep === TOTAL_STEPS ? "Terminer" : "Valider"}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OnboardingFlow;