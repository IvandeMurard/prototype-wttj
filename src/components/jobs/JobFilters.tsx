import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Filter {
  label: string;
  count: string;
  active: boolean;
}

interface JobFiltersProps {
  filters: Filter[];
}

const JobFilters = ({ filters }: JobFiltersProps) => {
  const colors = [
    "bg-blue-500",
    "bg-green-500", 
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-teal-500"
  ];

  return (
    <div className="bg-card border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-3 items-center">
          {filters.map((filter, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm cursor-pointer transition-colors ${
                filter.active ? 'bg-muted' : 'bg-background hover:bg-muted/50'
              } border`}
            >
              <span>{filter.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-white text-xs font-medium ${colors[index % colors.length]}`}>
                {filter.count}
              </span>
            </div>
          ))}
          <Button variant="outline" className="ml-auto">
            <Filter className="h-4 w-4 mr-2" />
            Tous les filtres
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobFilters;