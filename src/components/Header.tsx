import { Search, User, Bell, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/f2161f4e-5f19-410a-b01f-03c579527f9f.png" 
                  alt="Welcome to the Jungle" 
                  className="h-12"
                />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-foreground hover:text-wttj-yellow font-medium">
              Trouver un job
            </a>
            <a href="#" className="text-foreground hover:text-wttj-yellow font-medium">
              Trouver une entreprise
            </a>
            <a href="#" className="text-foreground hover:text-wttj-yellow font-medium">
              Média
            </a>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Cherchez un job, une..."
                className="pl-10 w-64 border border-black/20"
              />
            </div>
            
            <Button variant="outline" className="hidden sm:flex">
              Employeurs
            </Button>
            
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;