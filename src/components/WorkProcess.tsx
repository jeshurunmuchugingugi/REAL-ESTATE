import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const WorkProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Get a Free Quote",
      description: "Get in touch with our team for a free, no-obligation quote about your cleaning needs",
      icon: "📋"
    },
    {
      number: "02", 
      title: "Book Your Service",
      description: "Choose your preferred date and time. Our professional cleaners are ready to serve you",
      icon: "📅"
    },
    {
      number: "03",
      title: "Professional Cleaning", 
      description: "Sit back and relax while our expert team transforms your space with premium cleaning",
      icon: "✨"
    },
    {
      number: "04",
      title: "Quality Inspection",
      description: "We conduct a thorough quality check to ensure everything meets our high standards",
      icon: "🔍"
    }
  ];

  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-primary text-sm font-medium mb-4">— Work Process</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Simple</span>
            <br />
            <span className="text-primary">Cleaning Process</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've streamlined our process to make getting professional cleaning services 
            as easy as possible for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card 
                className={`text-center hover:shadow-lg transition-all duration-300 animate-slide-in-right border-2 hover:border-primary/20`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4 mt-2">{step.icon}</div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Check mark */}
                  <div className="flex justify-center">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                </CardContent>
              </Card>

              {/* Arrow (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="bg-primary text-primary-foreground max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Experience Professional Cleaning?
              </h3>
              <p className="text-primary-foreground/80 mb-8 text-lg">
                Join hundreds of satisfied customers who trust us with their cleaning needs. 
                Get your free quote today and see the difference professional cleaning makes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold px-8 py-3">
                  Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3"
                >
                  Call Now: (408) 555-0120
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;