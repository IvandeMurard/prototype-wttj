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
import { MapPin, Briefcase, TrendingUp, Euro, Home, Globe, Building2, Layers, Code, User, Upload, FileText, ChevronLeft, Pencil } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface OnboardingData {
  localisation: string;
  typePoste: string;
  experience: string;
  salaire: { montant: string; devise: string };
  teletravail: string[];
  langues: string[];
  visa: boolean;
  tailleEntreprise: string[];
  secteurActivite: string[];
  technologies: string[];
  nom: string;
  email: string;
  telephone: string;
  cv: File | null;
}

const TOTAL_STEPS = 11;

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
  MapPin, Briefcase, TrendingUp, Euro, Home, Globe, Building2, Layers, Code, User, Upload, FileText
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
      teletravail: [],
      langues: [],
      visa: false,
      tailleEntreprise: [],
      secteurActivite: [],
      technologies: [],
      nom: "",
      email: "",
      telephone: "",
      cv: null
    };
  });

  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    if (currentStep < 1 || currentStep > 12) {
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
    if (currentStep === 12) {
      navigate("/jobs");
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
                min="5"
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
              
              {/* Messages informatifs */}
              <div className="space-y-3 text-sm text-muted-foreground mt-6">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Nous ne partageons jamais cela avec les entreprises</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Nous l'utilisons uniquement pour filtrer les rôles et vous faire gagner du temps</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Si vous n'êtes pas sûr, nous recommandons un montant inférieur pour ne pas exclure de belles opportunités</span>
                </div>
              </div>

              {/* Pop-up d'information sur l'égalité salariale */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mt-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="18" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="2"/>
                      <path d="M8 20 A 12 12 0 0 1 32 20" fill="#ec4899" stroke="#ec4899" strokeWidth="2"/>
                      <path d="M32 20 A 12 12 0 0 1 8 20" fill="#06b6d4" stroke="#06b6d4" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Les femmes sur Welcome to the Jungle fixent leur salaire minimum attendu 15% en dessous des hommes pour tous les postes.
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Nous affichons donc cette bannière comme un encouragement à augmenter votre minimum.
                    </p>
                  </div>
                </div>
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
              <p className="text-muted-foreground">Quelles sont vos préférences ? (Plusieurs choix possibles)</p>
            </div>
            <div className="space-y-4">
              {[
                { value: "full-remote", label: "100% télétravail" },
                { value: "hybrid", label: "Hybride (2-3 jours/semaine)" },
                { value: "onsite", label: "Présentiel uniquement" },
                { value: "flexible", label: "Flexible" }
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.value}
                    checked={formData.teletravail.includes(option.value)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        updateFormData("teletravail", [...formData.teletravail, option.value]);
                      } else {
                        updateFormData("teletravail", formData.teletravail.filter(t => t !== option.value));
                      }
                    }}
                  />
                  <Label htmlFor={option.value}>{option.label}</Label>
                </div>
              ))}
            </div>
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
              <p className="text-muted-foreground">Dans quels types d'entreprise souhaitez-vous évoluer ? (Plusieurs choix possibles)</p>
            </div>
            <div className="space-y-4">
              {[
                { value: "startup", label: "Startup (1-50 employés)" },
                { value: "scale-up", label: "Scale-up (51-250 employés)" },
                { value: "medium", label: "Entreprise moyenne (251-1000 employés)" },
                { value: "large", label: "Grande entreprise (1000+ employés)" }
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.value}
                    checked={formData.tailleEntreprise.includes(option.value)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        updateFormData("tailleEntreprise", [...formData.tailleEntreprise, option.value]);
                      } else {
                        updateFormData("tailleEntreprise", formData.tailleEntreprise.filter(t => t !== option.value));
                      }
                    }}
                  />
                  <Label htmlFor={option.value}>{option.label}</Label>
                </div>
              ))}
            </div>
          </div>
        );

      case 8: // Secteur activité
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Icon className="mx-auto h-16 w-16 text-wttj-yellow mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-2">Secteurs d'activité privilégiés</h2>
              <p className="text-muted-foreground">Dans quels secteurs voulez-vous travailler ? (Plusieurs choix possibles)</p>
            </div>
            <div className="space-y-4">
              <Label>Secteurs d'activité</Label>
              <div className="space-y-4">
                {[
                  { value: "tech", label: "Tech / Software" },
                  { value: "fintech", label: "Fintech" },
                  { value: "ecommerce", label: "E-commerce" },
                  { value: "healthtech", label: "Healthtech" },
                  { value: "edtech", label: "Edtech" },
                  { value: "media", label: "Média / Communication" },
                  { value: "consulting", label: "Consulting" },
                  { value: "industry", label: "Industrie" },
                  { value: "other", label: "Autre" }
                ].map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <Checkbox
                      id={option.value}
                      checked={formData.secteurActivite.includes(option.value)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          updateFormData("secteurActivite", [...formData.secteurActivite, option.value]);
                        } else {
                          updateFormData("secteurActivite", formData.secteurActivite.filter(s => s !== option.value));
                        }
                      }}
                    />
                    <Label htmlFor={option.value}>{option.label}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 9: // Technologies
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Icon className="mx-auto h-16 w-16 text-wttj-yellow mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-2">Outils et technologies</h2>
              <p className="text-muted-foreground">Quels outils maîtrisez-vous ?</p>
            </div>
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Sélectionnez vos outils *</Label>
              <Select
                value={formData.technologies[0] || ""}
                onValueChange={(value) => {
                  if (value && !formData.technologies.includes(value)) {
                    updateFormData("technologies", [...formData.technologies, value]);
                  }
                }}
              >
                <SelectTrigger className="h-14 text-lg border-2 border-wttj-yellow focus:border-wttj-yellow-dark focus:ring-2 focus:ring-wttj-yellow/20">
                  <SelectValue placeholder="Choisissez dans la liste..." />
                </SelectTrigger>
                <SelectContent className="bg-white border-2 border-border shadow-xl z-50 max-h-80 overflow-y-auto">
                  {/* Outils de conception */}
                  <div className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide bg-gray-50">
                    Outils de conception
                  </div>
                  <SelectItem value="figma">Figma</SelectItem>
                  <SelectItem value="sketch">Sketch</SelectItem>
                  <SelectItem value="adobe-xd">Adobe XD</SelectItem>
                  <SelectItem value="canva">Canva</SelectItem>
                  
                  {/* Outils de gestion */}
                  <div className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide bg-gray-50 mt-2">
                    Outils de gestion
                  </div>
                  <SelectItem value="jira">Jira</SelectItem>
                  <SelectItem value="trello">Trello</SelectItem>
                  <SelectItem value="notion">Notion</SelectItem>
                  <SelectItem value="asana">Asana</SelectItem>
                  <SelectItem value="monday">Monday.com</SelectItem>
                  
                  {/* Outils d'analyse */}
                  <div className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide bg-gray-50 mt-2">
                    Outils d'analyse
                  </div>
                  <SelectItem value="google-analytics">Google Analytics</SelectItem>
                  <SelectItem value="mixpanel">Mixpanel</SelectItem>
                  <SelectItem value="hotjar">Hotjar</SelectItem>
                  <SelectItem value="tableau">Tableau</SelectItem>
                  
                  {/* Outils marketing */}
                  <div className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide bg-gray-50 mt-2">
                    Outils marketing
                  </div>
                  <SelectItem value="hubspot">HubSpot</SelectItem>
                  <SelectItem value="salesforce">Salesforce</SelectItem>
                  <SelectItem value="mailchimp">Mailchimp</SelectItem>
                  <SelectItem value="google-ads">Google Ads</SelectItem>
                  
                  {/* Technologies de développement */}
                  <div className="px-2 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide bg-gray-50 mt-2">
                    Technologies de développement
                  </div>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="vue">Vue.js</SelectItem>
                  <SelectItem value="angular">Angular</SelectItem>
                  <SelectItem value="nodejs">Node.js</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="java">Java</SelectItem>
                  <SelectItem value="sql">SQL</SelectItem>
                </SelectContent>
              </Select>
              
              {/* Affichage des outils sélectionnés */}
              {formData.technologies.length > 0 && (
                <div className="mt-6 p-4 bg-wttj-yellow/10 rounded-lg border-2 border-wttj-yellow/30">
                  <Label className="text-lg font-semibold mb-3 block">Outils sélectionnés :</Label>
                  <div className="flex flex-wrap gap-3">
                    {formData.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-wttj-yellow px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 text-black"
                      >
                        {tech.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        <button
                          onClick={() => {
                            updateFormData("technologies", formData.technologies.filter(t => t !== tech));
                          }}
                          className="text-black hover:text-red-600 font-bold text-lg"
                          aria-label={`Supprimer ${tech}`}
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}
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
            
            {/* Layout en deux colonnes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Colonne gauche - Formulaire nom/prénom/mail */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">Informations personnelles</h3>
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
              
              {/* Colonne droite - Connexion Google */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">Connexion rapide</h3>
                <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <Button 
                    variant="outline" 
                    className="w-full h-14 border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 transition-colors"
                    onClick={() => {/* Google sign-in interface only */}}
                  >
                    <div className="flex items-center justify-center">
                      <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <span className="text-gray-700 font-medium">Continuer avec Google</span>
                    </div>
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Connexion rapide et sécurisée
                  </p>
                </div>
                
                <div className="text-center text-muted-foreground text-sm mt-6">
                  ou remplissez le formulaire ci-contre
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
              <h2 className="text-3xl font-bold text-foreground mb-2">Des offres qui vous correspondent, vraiment</h2>
              <p className="text-muted-foreground">Notre IA analyse votre CV pour vous proposer uniquement les opportunités alignées avec votre profil.</p>
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
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-foreground mb-2">Récapitulatif de votre profil</h2>
              <p className="text-muted-foreground">Vérifiez vos informations avant de finaliser</p>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  className="p-4 rounded-lg border border-border hover:border-wttj-yellow hover:bg-wttj-yellow/5 cursor-pointer transition-all group"
                  onClick={() => navigate("/onboarding/10")}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">Informations générales</h3>
                    <Pencil className="h-4 w-4 text-muted-foreground group-hover:text-wttj-yellow" />
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Nom:</span> {formData.nom}</p>
                    <p><span className="font-medium">Email:</span> {formData.email}</p>
                    <p><span className="font-medium">Téléphone:</span> {formData.telephone}</p>
                    <p><span className="font-medium">Localisation:</span> {formData.localisation}</p>
                  </div>
                </div>
                
                <div 
                  className="p-4 rounded-lg border border-border hover:border-wttj-yellow hover:bg-wttj-yellow/5 cursor-pointer transition-all group"
                  onClick={() => navigate("/onboarding/2")}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">Type de poste</h3>
                    <Pencil className="h-4 w-4 text-muted-foreground group-hover:text-wttj-yellow" />
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Type de poste:</span> {formData.typePoste}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  className="p-4 rounded-lg border border-border hover:border-wttj-yellow hover:bg-wttj-yellow/5 cursor-pointer transition-all group"
                  onClick={() => navigate("/onboarding/4")}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">Salaire</h3>
                    <Pencil className="h-4 w-4 text-muted-foreground group-hover:text-wttj-yellow" />
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Salaire:</span> {formData.salaire.montant} {formData.salaire.devise}</p>
                  </div>
                </div>

                <div 
                  className="p-4 rounded-lg border border-border hover:border-wttj-yellow hover:bg-wttj-yellow/5 cursor-pointer transition-all group"
                  onClick={() => navigate("/onboarding/5")}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">Télétravail</h3>
                    <Pencil className="h-4 w-4 text-muted-foreground group-hover:text-wttj-yellow" />
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Préférences:</span> {Array.isArray(formData.teletravail) ? formData.teletravail.join(", ") : "Non défini"}</p>
                  </div>
                </div>
              </div>
              
              <div 
                className="p-4 rounded-lg border border-border hover:border-wttj-yellow hover:bg-wttj-yellow/5 cursor-pointer transition-all group"
                onClick={() => navigate("/onboarding/3")}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg">Expérience</h3>
                  <Pencil className="h-4 w-4 text-muted-foreground group-hover:text-wttj-yellow" />
                </div>
                <p className="text-sm">{formData.experience} années d'expérience</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  className="p-4 rounded-lg border border-border hover:border-wttj-yellow hover:bg-wttj-yellow/5 cursor-pointer transition-all group"
                  onClick={() => navigate("/onboarding/7")}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">Taille entreprise</h3>
                    <Pencil className="h-4 w-4 text-muted-foreground group-hover:text-wttj-yellow" />
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Préférences:</span> {Array.isArray(formData.tailleEntreprise) ? formData.tailleEntreprise.join(", ") : "Non défini"}</p>
                  </div>
                </div>

                <div 
                  className="p-4 rounded-lg border border-border hover:border-wttj-yellow hover:bg-wttj-yellow/5 cursor-pointer transition-all group"
                  onClick={() => navigate("/onboarding/8")}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">Secteur d'activité</h3>
                    <Pencil className="h-4 w-4 text-muted-foreground group-hover:text-wttj-yellow" />
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Secteurs:</span> {Array.isArray(formData.secteurActivite) ? formData.secteurActivite.join(", ") : "Non défini"}</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  className="p-4 rounded-lg border border-border hover:border-wttj-yellow hover:bg-wttj-yellow/5 cursor-pointer transition-all group"
                  onClick={() => navigate("/onboarding/6")}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">Langues</h3>
                    <Pencil className="h-4 w-4 text-muted-foreground group-hover:text-wttj-yellow" />
                  </div>
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
                
                <div 
                  className="p-4 rounded-lg border border-border hover:border-wttj-yellow hover:bg-wttj-yellow/5 cursor-pointer transition-all group"
                  onClick={() => navigate("/onboarding/9")}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">Technologies</h3>
                    <Pencil className="h-4 w-4 text-muted-foreground group-hover:text-wttj-yellow" />
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {formData.technologies.map((tech) => (
                      <span key={tech} className="bg-wttj-yellow/20 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Étape non trouvée</div>;
    }
  };

  if (currentStep < 1 || currentStep > 12) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Header avec progress bar - masqué sur la page de résumé */}
      {currentStep !== 12 && (
        <div className="bg-white border-b border-border">
          <div className="max-w-2xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-4">
              {currentStep > 1 && (
                <Button variant="ghost" size="sm" onClick={prevStep} className="border border-black/30 hover:border-black/50 px-3">
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
      )}

      {/* Contenu principal */}
      <div className="flex-1">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="bg-card rounded-lg border border-border p-8">
            {renderStepContent()}
            
            {/* Boutons de navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
              <div>
                {canSkip && (
                  <Button variant="outline" onClick={skipStep} className="border-2 border-black hover:bg-muted">
                    Passer
                  </Button>
                )}
              </div>
              <Button 
                onClick={nextStep}
                className="bg-black text-white hover:bg-gray-800 px-8"
                disabled={isRequired && (
                  (currentStep === 1 && !formData.localisation) ||
                  (currentStep === 2 && !formData.typePoste) ||
                  (currentStep === 3 && !formData.experience)
                )}
              >
                {currentStep === 12 ? "Finaliser et voir les offres" : "Valider"}
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