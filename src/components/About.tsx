import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, Clock, Trophy } from "lucide-react";
import teamImage from "@/assets/team-cleaning.jpg";

const About = () => {
  // EDIT STATISTICS: Update these numbers to reflect current business metrics
  const stats = [
    { number: "6500+", label: "Projects Completed" }, // Change number and label as needed
    { number: "60+", label: "Expert Cleaners" },
    { number: "99%", label: "Satisfied Customers" }
  ];

  // EDIT FEATURES: Modify icons, titles, and descriptions to highlight different services
  // Available icons: DollarSign, Users, Clock, Trophy, Star, Shield, etc. from lucide-react
  const features = [
    {
      icon: DollarSign, // Change icon here
      title: "Affordable Pricing", // Update feature title
      description: "Competitive rates with transparent pricing. No hidden fees, just honest value for exceptional service." // Update description
    },
    {
      icon: Users,
      title: "Professional Team", 
      description: "Trained, insured, and background-checked professionals who treat your space with respect and care."
    },
    {
      icon: Clock,
      title: "15+ Years Experience",
      description: "Proven track record of excellence with thousands of satisfied customers and consistent quality results."
    },
    {
      icon: Trophy,
      title: "100% Satisfaction",
      description: "We guarantee your complete satisfaction. If you're not happy, we'll make it right at no extra cost."
    }
  ];

  return (
    <section id="about" className="bg-background py-16 lg:py-20 mb-2 scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-xl min-h-[400px] mx-auto lg:mx-0 lg:mr-[-2rem] mb-[-3rem]">
              <img 
                src={teamImage} 
                alt="Professional cleaning team" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl border-4 border-accent/30 shadow-xl"></div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg animate-bounce-in" style={{ animationDelay: '0.8s' }}>
                <span className="text-accent-foreground font-bold">✓</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-primary rounded-full shadow-lg animate-bounce-in" style={{ animationDelay: '1.0s' }}></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-accent rounded-full shadow-lg animate-bounce-in" style={{ animationDelay: '1.2s' }}></div>
            </div>
          </div>

          {/* EDIT CONTENT SECTION: Main about us text and heading */}
          <div className="space-y-6">
            {/* EDIT: Section label - change "About Us" if needed */}
            <p className="text-primary text-sm font-medium animate-fade-in" style={{ animationDelay: '0.4s' }}>— About Us</p>
            
            {/* EDIT: Main heading - update company positioning statement */}
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Your Top Choice <span className="text-primary">for</span>
              <br />
              <span className="text-primary">Cleaning Services</span>
            </h2>
            
            {/* EDIT: Company description - update with current business story */}
            <p className="text-muted-foreground leading-relaxed mb-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              With over 15 years of experience, we've built our reputation on delivering 
              exceptional cleaning services that exceed expectations. Our trained professionals 
              use eco-friendly products and proven techniques to ensure your space is spotless, 
              healthy, and welcoming.
            </p>

            {/* EDIT STATISTICS: Numbers are pulled from stats array above */}
            <div className="flex gap-8  py-2 animate-fade-in" style={{ animationDelay: '1.0s' }}>
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center mt-0 animate-bounce-in" style={{ animationDelay: `${1.2 + index * 0.2}s` }}>
                  <div className="text-4xl lg:text-5xl font-bold text-primary">{stat.number}</div>
                  <div className="text-base text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* EDIT CEO INFO: Update name and title as needed */}
            <div className="space-y-2 mt-0 animate-fade-in" style={{ animationDelay: '1.8s' }}>
              <div className="text-primary font-semibold italic">Jenny Alexander</div> {/* Change CEO name here */}
              <div className="text-sm text-muted-foreground">CEO & Founder</div> {/* Change title here */}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;