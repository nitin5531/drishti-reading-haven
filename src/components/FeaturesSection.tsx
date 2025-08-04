import { Wifi, Newspaper, Coffee, Thermometer, Wind, Lightbulb, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "High-speed internet connectivity for your research and online studies",
    color: "text-navy-primary"
  },
  {
    icon: Newspaper,
    title: "Daily Newspapers",
    description: "Stay updated with current affairs through our collection of newspapers",
    color: "text-navy-light"
  },
  {
    icon: Coffee,
    title: "Hot & Cold Water",
    description: "Complimentary hot and cold water facilities available throughout the day",
    color: "text-sage"
  },
  {
    icon: Wind,
    title: "Air Conditioning",
    description: "Comfortable climate-controlled environment for year-round studying",
    color: "text-navy-primary"
  },
  {
    icon: Lightbulb,
    title: "Proper Lighting",
    description: "Well-lit spaces designed to reduce eye strain during long study sessions",
    color: "text-navy-light"
  },
  {
    icon: Users,
    title: "Quiet Environment",
    description: "Peaceful atmosphere maintained for focused learning and concentration",
    color: "text-sage"
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Extended operating hours to accommodate different study schedules",
    color: "text-navy-primary"
  },
  {
    icon: Thermometer,
    title: "Clean Facilities",
    description: "Regularly sanitized and well-maintained reading spaces",
    color: "text-navy-light"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Premium <span className="text-primary">Facilities</span> for Your Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the exceptional amenities that make Drishti Reading Room the ideal choice for serious learners
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 border-0">
              <CardContent className="p-6 text-center">
                <feature.icon className={`h-12 w-12 mx-auto mb-4 ${feature.color}`} />
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;