import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, Clock, Trophy } from "lucide-react";
import teamImage from "@/assets/team-cleaning.jpg";

const About = () => {
  const stats = [
    { number: "6500+", label: "Project Completed" },
    { number: "60+", label: "Expert Cleaner" },
    { number: "99%", label: "Satisfied Customer" }
  ];

  const features = [
    {
      icon: DollarSign,
      title: "Affordable Price",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      icon: Users,
      title: "Professional Team", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      icon: Clock,
      title: "15+ Years Experience",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      icon: Trophy,
      title: "Award Winning",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }
  ];

  return (
    <section id="about" className="bg-background py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <img 
                src={teamImage} 
                alt="Professional cleaning team" 
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 rounded-full border-8 border-accent/20"></div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold">✓</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-primary rounded-full"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-accent rounded-full"></div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-primary text-sm font-medium">— About Us</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Your Top Choice <span className="text-primary">for</span>
              <br />
              <span className="text-primary">Cleaning Services</span>
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>

            {/* Stats */}
            <div className="flex gap-8 py-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <div className="text-primary font-semibold italic">Jenny Alexander</div>
              <div className="text-sm text-muted-foreground">Jenny Alexander • CEO</div>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="mt-16">
          <p className="text-center text-primary text-sm font-medium mb-4">— Why Choose Us</p>
          <h3 className="text-center text-2xl lg:text-3xl font-bold mb-12">
            Choose Our <span className="text-primary">Green</span>
            <br />
            <span className="text-primary">Friendly Solutions</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;