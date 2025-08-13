import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "Basic Clean",
      price: "$99",
      period: "one-time",
      description: "Perfect for regular maintenance cleaning",
      features: [
        "General room cleaning",
        "Bathroom sanitization", 
        "Kitchen surface cleaning",
        "Vacuum and mopping",
        "Trash removal",
        "2-4 hours service"
      ],
      popular: false,
      buttonText: "Book Basic Clean"
    },
    {
      name: "Deep Clean",
      price: "$189",
      period: "one-time", 
      description: "Comprehensive deep cleaning service",
      features: [
        "All Basic Clean services",
        "Inside appliance cleaning",
        "Detailed bathroom scrubbing",
        "Baseboards and windowsills",
        "Light fixture cleaning",
        "4-6 hours service"
      ],
      popular: true,
      buttonText: "Book Deep Clean"
    },
    {
      name: "Premium Package",
      price: "$299",
      period: "one-time",
      description: "Complete home transformation",
      features: [
        "All Deep Clean services",
        "Interior window cleaning",
        "Cabinet interior cleaning",
        "Ceiling fan cleaning",
        "Garage/basement cleaning",
        "6-8 hours service"
      ],
      popular: false,
      buttonText: "Book Premium"
    }
  ];

  return (
    <section className="bg-muted/30 py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-primary text-sm font-medium mb-4">— Our Pricing</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Choose Your <span className="text-primary">Perfect</span>
            <br />
            <span className="text-primary">Cleaning Package</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. All packages include eco-friendly 
            cleaning supplies and 100% satisfaction guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`relative hover:shadow-xl transition-all duration-300 animate-scale-in ${
                pkg.popular ? 'border-2 border-primary scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-muted-foreground">/{pkg.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full font-semibold py-3 ${
                    pkg.popular 
                      ? 'bg-primary hover:bg-primary-dark text-primary-foreground' 
                      : 'bg-accent hover:bg-accent-hover text-accent-foreground'
                  }`}
                >
                  {pkg.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12 animate-fade-in">
          <Card className="bg-background max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Not sure which package to choose?</h3>
              <p className="text-muted-foreground mb-6">
                Our cleaning experts can help you determine the best service for your needs. 
                Contact us for a free consultation and personalized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary-dark text-primary-foreground">
                  Get Free Consultation
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Call (408) 555-0120
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;