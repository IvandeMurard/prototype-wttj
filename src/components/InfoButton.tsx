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
        className="fixed top-6 left-6 z-50 w-8 h-8 p-0 rounded-full border border-border/50 bg-background/80 backdrop-blur-sm hover:bg-accent transition-all duration-200"
        aria-label="Informations sur l'onboarding"
      >
        <Info className="h-4 w-4 text-muted-foreground" />
      </Button>

      {/* Encart latéral */}
      {isOpen && (
        <div className="fixed inset-0 z-40">
          {/* Pas d'overlay bloquant, juste un clic pour fermer */}
          <div 
            className="absolute inset-0" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Encart latéral */}
          <div className="absolute left-0 top-0 h-full w-80 bg-background border-r border-border shadow-lg animate-slide-in-right">
            <div className="p-6 h-full overflow-y-auto">
              {/* Header avec bouton fermer */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-6" /> {/* Espaceur pour centrer le titre */}
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="sm"
                  className="w-6 h-6 p-0 rounded-full hover:bg-accent"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Contenu */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Cet onboarding nous aide à vous faire gagner du temps.
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    En répondant à quelques questions, vous activez un filtrage intelligent des offres selon votre profil et vos attentes.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">
                    Les étapes à venir :
                  </h4>
                  <ul className="space-y-2">
                    {onboardingSteps.map((step, index) => (
                      <li 
                        key={index}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center mr-3 flex-shrink-0">
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
        </div>
      )}
    </>
  );
};

export default InfoButton;