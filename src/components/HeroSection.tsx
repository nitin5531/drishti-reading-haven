import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-navy-light">Drishti</span> Reading Room
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Your perfect study destination in Ganga Vihar. Experience peace, comfort, and all the amenities you need for productive learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="https://maps.app.goo.gl/oGTsf2gV9fMiTDCJ6" target="_blank" rel="noopener noreferrer">Visit Us Today</a>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              Learn More
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 text-white/90">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-navy-light" />
              <span>Ganga Vihar, Delhi</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-navy-light" />
              <span>Open Daily</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;