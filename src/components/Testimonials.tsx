import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "Exceptional service! The team was punctual, professional, and left my house spotless. I've been using their services for 6 months now and couldn't be happier.",
      rating: 5,
      location: "Downtown Area"
    },
    {
      name: "Michael Chen", 
      role: "Office Manager",
      content: "Our office has never looked better. The cleaning team is thorough, reliable, and works around our schedule perfectly. Highly recommend for commercial cleaning.",
      rating: 5,
      location: "Business District"
    },
    {
      name: "Jennifer Adams",
      role: "Restaurant Owner", 
      content: "They handle our kitchen deep cleaning monthly and the results are outstanding. Professional, efficient, and they understand the high standards we need.",
      rating: 5,
      location: "Food Service Industry"
    }
  ];

  return (
    <section className="bg-muted/20 py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-primary text-sm font-medium mb-4">— Client Testimonials</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Happy Clients</span>
            <br />
            <span className="text-primary">Say About Us</span>
          </h2>
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">from 200+ reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-xl transition-all duration-300 animate-scale-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Quote className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary font-medium">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-bounce-in" style={{ animationDelay: '0.5s' }}>
            <div className="text-3xl font-bold text-primary">200+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="animate-bounce-in" style={{ animationDelay: '0.7s' }}>
            <div className="text-3xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="animate-bounce-in" style={{ animationDelay: '0.9s' }}>
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="animate-bounce-in" style={{ animationDelay: '1.1s' }}>
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;