import { Phone, Mail, MapPin } from "lucide-react";

const logoUrl = "/lovable-uploads/192cc841-66f7-4b3c-af65-ce0c89dc0aff.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logoUrl} alt="Drishti Reading Room" className="h-10 w-10" />
              <h3 className="text-xl font-bold">Drishti Reading Room</h3>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Providing a peaceful and comfortable environment for students to achieve their academic goals since our establishment in Ganga Vihar.
            </p>
          </div>
          
          {/* Quick Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>9319226409</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span>drishtireadingroom@gmail.com</span>
              </div>
            </div>
          </div>
          
          {/* Address */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Visit Us</h4>
            <div className="flex items-start space-x-3">
              <MapPin className="h-4 w-4 mt-1" />
              <address className="not-italic text-primary-foreground/80">
                C-328, Gali No 12,<br />
                Near Mother Dairy,<br />
                30 Ft Road, Ganga Vihar<br />
                Delhi 110094
              </address>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Drishti Reading Room. All rights reserved. | Designed for student success.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;