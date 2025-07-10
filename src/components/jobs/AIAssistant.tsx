import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface AIAssistantProps {
  showAIAssistant: boolean;
  setShowAIAssistant: (show: boolean) => void;
}

const AIAssistant = ({ showAIAssistant, setShowAIAssistant }: AIAssistantProps) => {
  const [aiQuery, setAiQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  const handleAISubmit = () => {
    if (!aiQuery.trim()) return;
    
    setAiResponse(`Voici une suggestion automatisée pour votre recherche "${aiQuery}". Notre intelligence artificielle a analysé votre profil et recommande de vous concentrer sur les offres de Product Manager Senior avec plus de 5 ans d'expérience à Paris. Vous pourriez également élargir votre recherche aux postes de Lead Product ou Product Owner dans des entreprises tech en croissance.`);
  };

  return (
    <div className="fixed bottom-6 right-6">
      {!showAIAssistant ? (
        <Button
          onClick={() => setShowAIAssistant(true)}
          className="w-16 h-16 rounded-full bg-wttj-yellow hover:bg-wttj-yellow/90 text-foreground shadow-lg"
        >
          <div className="relative">
            <svg width="40" height="40" viewBox="0 0 32 32" className="text-black">
              <path d="M16 2 L20 12 L30 16 L20 20 L16 30 L12 20 L2 16 L12 12 Z" fill="currentColor" />
              <path d="M24 6 L26 10 L30 12 L26 14 L24 18 L22 14 L18 12 L22 10 Z" fill="currentColor" />
              <path d="M8 22 L9 24 L11 25 L9 26 L8 28 L7 26 L5 25 L7 24 Z" fill="currentColor" />
            </svg>
          </div>
        </Button>
      ) : (
        <Card className="w-96 max-w-[calc(100vw-2rem)] shadow-2xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-wttj-yellow flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 32 32" className="text-black">
                    <path d="M16 2 L20 12 L30 16 L20 20 L16 30 L12 20 L2 16 L12 12 Z" fill="currentColor" />
                    <path d="M24 6 L26 10 L30 12 L26 14 L24 18 L22 14 L18 12 L22 10 Z" fill="currentColor" />
                    <path d="M8 22 L9 24 L11 25 L9 26 L8 28 L7 26 L5 25 L7 24 Z" fill="currentColor" />
                  </svg>
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
  );
};

export default AIAssistant;