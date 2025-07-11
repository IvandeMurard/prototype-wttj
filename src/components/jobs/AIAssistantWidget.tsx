import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const AIAssistantWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const assistantOptions = [
    "Optimiser ma recherche d'emploi",
    "Analyser les tendances du marché", 
    "Conseils pour mon profil"
  ];

  const handleOptionClick = (option: string) => {
    // Handle option selection here
    console.log("Selected option:", option);
    setIsOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-2">
      <div className="flex justify-center">
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full max-w-lg">
          <CollapsibleTrigger asChild>
            <Button
              variant="outline"
              className="relative bg-background hover:bg-blue-50 border-2 border-blue-500 text-blue-700 font-medium py-3 px-6 rounded-xl w-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Un assistant IA vous accompagne</span>
              </div>
              
              {/* Blue halo effect */}
              <div className="absolute inset-0 rounded-xl bg-blue-500/10 -z-10 blur-sm"></div>
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="mt-2">
            <Card className="border-blue-200 shadow-xl">
              <CardContent className="p-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-blue-700 mb-3 text-center">
                    Comment puis-je vous aider ?
                  </h3>
                  <div className="grid gap-2">
                    {assistantOptions.map((option, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        onClick={() => handleOptionClick(option)}
                        className="justify-start text-left h-auto py-3 px-4 hover:bg-blue-50 hover:text-blue-700 border border-transparent hover:border-blue-200 rounded-lg transition-all duration-200"
                      >
                        <span className="text-sm">{option}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default AIAssistantWidget;