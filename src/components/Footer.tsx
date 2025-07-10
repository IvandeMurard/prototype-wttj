import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et réseaux sociaux */}
          <div className="col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                <div className="w-6 h-6 bg-wttj-yellow rounded-full"></div>
              </div>
              <span className="font-bold text-lg text-white">Welcome to the Jungle</span>
            </div>
            
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-wttj-yellow">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-wttj-yellow">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-wttj-yellow">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-wttj-yellow">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-wttj-yellow">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* À propos */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">À PROPOS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-wttj-yellow">Concept</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wttj-yellow">Qui sommes-nous ?</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wttj-yellow">Offres d'emploi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wttj-yellow">Offres de stage</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wttj-yellow">Centre d'aide</a></li>
            </ul>
          </div>

          {/* Nous rencontrer */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">NOUS RENCONTRER</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-wttj-yellow">Human After All</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wttj-yellow">Presse</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wttj-yellow">Jobs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wttj-yellow">Tarifs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wttj-yellow">Besoin d'aide ?</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wttj-yellow">Assistance entreprise</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">LA NEWSLETTER QUI FAIT LE TAF</h3>
            <p className="text-gray-300 text-sm mb-4">
              Une fois par semaine, des histoires, des jobs et des conseils dans votre boite mail.
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Email"
                className="rounded-r-none border-gray-600 bg-black text-white"
              />
              <Button className="rounded-l-none bg-wttj-yellow text-black hover:bg-wttj-yellow-dark">
                Je m'abonne
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Vous pouvez vous désabonner à tout moment. On n'est pas susceptibles, promis. Pour en savoir plus sur notre politique de protection des données, <a href="#" className="underline">cliquez-ici</a>.
            </p>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-gray-400 text-sm mr-4">© Solutions</span>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                Employeurs
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                Mon espace employeur
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;