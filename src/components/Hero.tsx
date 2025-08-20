import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";
import teamImage from "@/assets/team-cleaning.jpg";

const Hero = () => {
  const handleGetQuote = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="bg-background py-16 lg:py-24 mb-16 scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="flex items-center gap-2 text-primary animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm font-medium">The Best Cleaning Services Solution</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Professional Cleaning
              <br />
              <span className="text-primary">Services Provider</span>
            </h1>
            
            <p className="text-muted-foreground text-lg leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Transform your space with our expert cleaning services. We deliver spotless results 
              using eco-friendly products, backed by 15+ years of experience and 100% satisfaction guarantee.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button 
                onClick={handleGetQuote}
                className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold px-8 py-3 transition-all duration-300 hover:scale-105"
              >
                Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 transition-all duration-300 hover:scale-105"
              >
                View All Services
              </Button>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative">
                  <img 
                    src={heroImage} 
                    alt="Professional cleaning service" 
                    className="rounded-2xl w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium">
                    Professional Teams
                  </div>
                </div>
                <div className="bg-accent text-accent-foreground p-4 rounded-2xl text-center">
                  <div className="text-2xl font-bold">Affordable Pricing</div>
                </div>
              </div>
              
              <div className="mt-8">
                <img 
                  src={teamImage} 
                  alt="Cleaning team at work" 
                  className="rounded-2xl w-full h-80 object-cover"
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;