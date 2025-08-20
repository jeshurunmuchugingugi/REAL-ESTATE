import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building, ChefHat, Car, Sparkles, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "House Cleaning",
      description: "Complete residential cleaning including bedrooms, bathrooms, living areas, and kitchens. We ensure every corner is spotless and sanitized.",
      isActive: true
    },
    {
      icon: Sparkles,
      title: "Glass Cleaning", 
      description: "Professional window and glass surface cleaning for crystal-clear results. We use streak-free techniques for perfect visibility."
    },
    {
      icon: ChefHat,
      title: "Kitchen Cleaning",
      description: "Deep kitchen sanitization including appliances, countertops, and cabinets. We eliminate grease, grime, and bacteria for a hygienic cooking space."
    }
  ];

  return (
    <section id="services" className="bg-primary text-primary-foreground py-12 lg:py-16 mb-16 scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-medium mb-4">— Our Services</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Explore Our
            <br />
            <span className="text-accent">Cleaning Services</span>
          </h2>
          <Button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold mt-6"
          >
            View All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className={`${
              service.isActive 
                ? "bg-background text-foreground" 
                : "bg-primary-light border-primary-light text-primary-foreground"
            } transition-all duration-300 hover:scale-105`}>
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  service.isActive ? "bg-primary" : "bg-accent"
                }`}>
                  <service.icon className={`h-8 w-8 ${
                    service.isActive ? "text-primary-foreground" : "text-accent-foreground"
                  }`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className={`text-sm leading-relaxed ${
                  service.isActive ? "text-muted-foreground" : "text-primary-foreground/80"
                }`}>
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service categories strip */}
        <div className="mt-16 bg-primary-dark rounded-2xl p-6">
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
            <span className="flex items-center gap-2">
              <span className="text-accent">+</span> House Cleaning
            </span>
            <span className="flex items-center gap-2">
              <span className="text-accent">+</span> Office Cleaning
            </span>
            <span className="flex items-center gap-2">
              <span className="text-accent">+</span> Kitchen Cleaning
            </span>
            <span className="flex items-center gap-2">
              <span className="text-accent">+</span> Furniture Cleaning
            </span>
            <span className="flex items-center gap-2">
              <span className="text-accent">+</span> Glass Cleaning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;