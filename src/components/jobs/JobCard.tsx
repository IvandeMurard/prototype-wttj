import { Link } from "react-router-dom";
import { MapPin, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary?: string;
  image: string;
  postedDate: string;
  isLiked: boolean;
  hasApplied: boolean;
  isViewed?: boolean;
}

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
      <CardContent className="p-0">
        <Link to={`/job/${job.id}`}>
          <div className="relative">
            <img 
              src={job.image} 
              alt={`${job.company} office`}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            {job.isViewed && (
              <Badge className="absolute top-2 right-2 bg-muted text-muted-foreground">
                Déjà vu
              </Badge>
            )}
          </div>
          
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
              {job.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">{job.company}</p>
            
            <div className="flex items-center text-sm text-muted-foreground mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              {job.location}
              <span className="mx-2">•</span>
              {job.type}
            </div>
            
            {job.salary && (
              <div className="flex items-center text-sm font-medium mb-3">
                💰 {job.salary}
              </div>
            )}
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Heart className={`h-4 w-4 ${job.isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">{job.postedDate}</p>
            </div>
            
            <div className="mt-3 pt-3 border-t">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Voir l'offre
              </Button>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default JobCard;