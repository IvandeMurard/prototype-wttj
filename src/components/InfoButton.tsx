import { useState } from "react";
import { Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const InfoButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onboardingSteps = [
    "Localisation",
    "Type de poste", 
    "Expérience sur le poste",
    "Salaire",
    "Télétravail",
    "Langue + Visa",
    "Taille d'entreprise",
    "Secteurs",
    "Outils",
    "Inscription",
    "CV"
  ];

  return (
    <>
      {/* Bouton Info */}
      <Button
        onClick={() => setIsOpen(true)}
        variant="ghost"
        size="sm"
        className="fixed top-20 left-6 z-50 w-7 h-7 p-0 rounded-full border border-black/20 bg-background/90 backdrop-blur-sm hover:bg-accent hover:border-black/40 transition-all duration-200"
        aria-label="Informations sur l'onboarding"
      >
        <Info className="h-3.5 w-3.5 text-foreground/70" />
      </Button>

      {/* Encart latéral */}
      {isOpen && (
        <div className="fixed inset-0 z-40">
          {/* Pas d'overlay bloquant, juste un clic pour fermer */}
          <div 
            className="absolute inset-0" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Encart compact */}
          <div className="absolute left-6 top-32 w-72 bg-background border border-border rounded-lg shadow-lg animate-slide-in-right">
            <div className="p-4">
              {/* Header avec bouton fermer */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-foreground mb-1">
                    Cet onboarding nous aide à vous faire gagner du temps.
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    En répondant à quelques questions, vous activez un filtrage intelligent des offres selon votre profil et vos attentes.
                  </p>
                </div>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="sm"
                  className="w-5 h-5 p-0 rounded-full hover:bg-accent ml-2 flex-shrink-0"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>

              {/* Liste des étapes */}
              <div>
                <h4 className="text-xs font-medium text-foreground mb-2">
                  Les étapes à venir :
                </h4>
                <ul className="space-y-1 max-h-48 overflow-y-auto">
                  {onboardingSteps.map((step, index) => (
                    <li 
                      key={index}
                      className="flex items-center text-xs text-muted-foreground"
                    >
                      <div className="w-4 h-4 rounded-full bg-muted flex items-center justify-center mr-2 flex-shrink-0">
                        <span className="text-xs font-medium text-muted-foreground">
                          {index + 1}
                        </span>
                      </div>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoButton;