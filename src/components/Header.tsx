import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const logoUrl = "/lovable-uploads/192cc841-66f7-4b3c-af65-ce0c89dc0aff.png";

const Header = () => {
  return (
    <header className="bg-card shadow-soft border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={logoUrl} alt="Drishti Reading Room" className="h-12 w-12" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Drishti Reading Room</h1>
              <p className="text-sm text-muted-foreground">Your peaceful study sanctuary</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>9319226409</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>drishtireadingroom@gmail.com</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;