import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Visit <span className="text-primary">Drishti Reading Room</span> Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Ganga Vihar, we're here to provide you with the perfect study environment
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gradient-card shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-xl">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span>Our Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">
                  C-328, Gali No 12,<br />
                  Near Mother Dairy,<br />
                  30 Ft Road, Ganga Vihar<br />
                  Delhi 110094
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-xl">
                  <Phone className="h-6 w-6 text-primary" />
                  <span>Contact Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground">9319226409</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground">drishtireadingroom@gmail.com</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-xl">
                  <Clock className="h-6 w-6 text-primary" />
                  <span>Operating Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Monday - Sunday<br />
                  6:00 AM - 10:00 PM<br />
                  <span className="text-muted-foreground text-sm">Extended hours for exams</span>
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-hero p-8 rounded-2xl text-center text-white">
            <h3 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h3>
            <p className="text-white/90 mb-8 text-lg leading-relaxed">
              Join hundreds of successful students who have made Drishti Reading Room their study home. 
              Experience the difference that a proper learning environment can make.
            </p>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
              >
                Call Now: 9319226409
              </Button>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  Send Email
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;