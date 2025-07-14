import { Search, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface JobSearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  location: string;
  setLocation: (location: string) => void;
}

const JobSearchBar = ({ searchQuery, setSearchQuery, location, setLocation }: JobSearchBarProps) => {
  return (
    <div className="bg-card border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex gap-4 items-end">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Product Designer Senior"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 border border-black/30"
              />
            </div>
          </div>
          
          <div className="flex-1 max-w-md">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="France"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10 h-12 border border-black/30"
              />
              <Button 
                variant="ghost" 
                size="sm" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => setLocation("")}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <select className="h-12 px-4 border border-black/20 rounded-md bg-background text-foreground">
            <option>Type de job</option>
            <option>CDI</option>
            <option>CDD</option>
            <option>Freelance</option>
            <option>Stage</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default JobSearchBar;