import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

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
    },
    {
      name: "David Wilson",
      role: "Property Manager",
      content: "Managing multiple properties, I need reliable cleaning services. This team consistently delivers quality work and excellent customer service.",
      rating: 5,
      location: "Residential Complex"
    },
    {
      name: "Lisa Martinez",
      role: "Busy Parent",
      content: "As a working mom, their cleaning service is a lifesaver. They're trustworthy, thorough, and work around my family's schedule perfectly.",
      rating: 5,
      location: "Suburban Area"
    },
    {
      name: "Robert Taylor",
      role: "Small Business Owner",
      content: "They've been cleaning our retail store for over a year. Professional, affordable, and always leave the place spotless for our customers.",
      rating: 5,
      location: "Shopping District"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentTestimonials = () => {
    const start = currentIndex * testimonialsPerPage;
    return testimonials.slice(start, start + testimonialsPerPage);
  };

  return (
    <section id="testimonials" className="bg-muted/20 py-12 lg:py-16 mb-16 scroll-mt-20">
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

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {testimonials.slice(pageIndex * testimonialsPerPage, (pageIndex + 1) * testimonialsPerPage).map((testimonial, index) => (
                      <Card 
                        key={pageIndex * testimonialsPerPage + index} 
                        className="relative hover:shadow-xl transition-all duration-300 h-fit"
                      >
                <CardContent className="p-6 pt-10">
                  <div className="absolute top-2 left-6">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Quote className="h-3 w-3 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground italic text-sm leading-relaxed line-clamp-4">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="border-t pt-3">
                      <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary font-medium">{testimonial.location}</p>
                    </div>
                  </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {totalPages > 1 && (
            <>
              <button 
                onClick={prevPage}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextPage}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors shadow-lg"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
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