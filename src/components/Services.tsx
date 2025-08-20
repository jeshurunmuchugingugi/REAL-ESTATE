import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building, ChefHat, Car, Sparkles, ArrowRight, ChevronUp } from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const mainServices = [
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

  const allServices = [
    ...mainServices,
    {
      icon: Building,
      title: "Office Cleaning",
      description: "Professional commercial cleaning for offices, ensuring a clean and productive work environment for your team."
    },
    {
      icon: Car,
      title: "Furniture Cleaning",
      description: "Specialized furniture cleaning and upholstery care to restore and maintain your valuable furniture pieces."
    }
  ];

  const displayedServices = showAllServices ? allServices : mainServices;

  return (
    <section id="services" className="bg-primary text-primary-foreground py-12 lg:py-16 mb-16 scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-6 h-px bg-accent"></div>
            <span className="text-accent text-sm font-medium uppercase tracking-wide">Our Services</span>
            <div className="w-6 h-px bg-accent"></div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            Premium <span className="text-accent">Cleaning Solutions</span>
          </h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-6">
            Professional cleaning services designed to exceed your expectations.
          </p>
          <Button 
            onClick={() => {
              const categoriesSection = document.querySelector('.service-categories');
              categoriesSection?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
            className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold"
          >
            View All Services <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {mainServices.map((service, index) => (
            <Card key={service.title} className={`group relative ${
              service.isActive 
                ? "bg-gradient-to-br from-background to-accent/5 border border-accent/30 shadow-lg" 
                : "bg-gradient-to-br from-primary/90 to-primary border-primary/30 text-primary-foreground shadow-md"
            } transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
              
              <CardContent className="relative p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                  service.isActive 
                    ? "bg-gradient-to-br from-primary to-accent shadow-md" 
                    : "bg-gradient-to-br from-accent to-accent/80 shadow-md"
                }`}>
                  <service.icon className={`h-8 w-8 ${
                    service.isActive ? "text-primary-foreground" : "text-accent-foreground"
                  }`} />
                </div>
                
                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>
                
                <p className={`text-sm leading-relaxed ${
                  service.isActive ? "text-muted-foreground" : "text-primary-foreground/90"
                }`}>
                  {service.description}
                </p>
                
                <div className={`absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  service.isActive ? "bg-accent text-accent-foreground" : "bg-primary-foreground/20 text-primary-foreground"
                }`}>
                  {index + 1}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 service-categories">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-accent/10">
            <h3 className="text-center text-xl font-bold text-foreground mb-4">All Our Services</h3>
            <div className="flex flex-wrap justify-center gap-3 text-sm font-medium">
              {[
                "House Cleaning", "Office Cleaning", "Kitchen Cleaning", 
                "Furniture Cleaning", "Glass Cleaning"
              ].map((service) => (
                <div key={service} className="flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span className="text-primary">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;