import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const JobFeedback = () => {
  return (
    <Card className="mt-8 bg-blue-50 border-blue-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold mb-2">
              Êtes-vous satisfaits de vos suggestions automatiques de jobs ?
            </h4>
            <p className="text-sm text-muted-foreground">
              Vos feedbacks nous permettent d'améliorer l'expérience Welcome to the Jungle.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90">
              Donner mon avis
            </Button>
            <Button variant="ghost" size="sm">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobFeedback;