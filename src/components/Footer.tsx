import { Phone, Mail, MapPin } from "lucide-react";

const logoUrl = "/lovable-uploads/192cc841-66f7-4b3c-af65-ce0c89dc0aff.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              <a href="tel:9319226409" className="flex items-center space-x-3 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" />
                <span>9319226409</span>
              </a>
              <a href="mailto:drishtireadingroom@gmail.com" className="flex items-center space-x-3 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4" />
                <span>drishtireadingroom@gmail.com</span>
              </a>
            </div>
          </div>
          
          {/* Address */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Visit Us</h4>
            <div className="flex items-start space-x-3 mb-3">
              <MapPin className="h-4 w-4 mt-1" />
              <address className="not-italic text-primary-foreground/80">
                C-328, Gali No 12,<br />
                Near Mother Dairy,<br />
                30 Ft Road, Ganga Vihar<br />
                Delhi 110094
              </address>
            </div>
            <a 
              href="https://maps.app.goo.gl/oGTsf2gV9fMiTDCJ6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground underline transition-colors"
            >
              Get Directions →
            </a>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Location Map</h4>
            <div className="w-full h-32 bg-primary-foreground/10 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.8742474284554!2d77.1816889292463!3d28.66982798715425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb27c21ae1b5%3A0x41f2e1b6a4b6d5e9!2sC-328%2C%20Gali%20Number%2012%2C%2030%20Feet%20Rd%2C%20Block%20C%2C%20Ganga%20Vihar%2C%20Delhi%2C%20110094!5e0!3m2!1sen!2sin!4v1704901234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Drishti Reading Room Location"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 Drishti Reading Room. All rights reserved. | Designed for student success.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;