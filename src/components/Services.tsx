import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, MapPin, Users, Star, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const listingBenefits = [
    {
      icon: Star,
      title: "Premium Marketing",
      description: "Professional photography, virtual tours, and targeted marketing campaigns to showcase your property to qualified buyers.",
      isActive: true
    },
    {
      icon: Users,
      title: "Expert Negotiation", 
      description: "Our experienced brokers handle all negotiations to secure the best possible price and terms for your property sale."
    },
    {
      icon: Home,
      title: "Market Analysis",
      description: "Comprehensive market analysis and competitive pricing strategies to position your property for quick sale."
    }
  ];

  const offices = [
    {
      name: "Lavington Office",
      address: "Lavington Shopping Centre, Nairobi",
      phone: "0792 530 530",
      email: "lavington@luxuryestateskenya.com"
    },
    {
      name: "Kilimani Branch",
      address: "Yaya Centre, Kilimani, Nairobi", 
      phone: "0798 260 260",
      email: "kilimani@luxuryestateskenya.com"
    },
    {
      name: "Karen Office",
      address: "Karen Shopping Centre, Karen",
      phone: "0701 234 567", 
      email: "karen@luxuryestateskenya.com"
    }
  ];

  return (
    <section id="services" className="relative py-12 lg:py-16 mb-16 scroll-mt-20 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=800&fit=crop" 
          alt="Luxury House" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 via-amber-800/70 to-amber-700/80"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 lg:px-12 xl:px-16 text-white">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-amber-300"></div>
            <span className="text-amber-300 text-lg font-medium uppercase tracking-wide">List With Us</span>
            <div className="w-12 h-px bg-amber-300"></div>
          </div>
          <h2 className="text-6xl lg:text-7xl font-bold mb-8">
            Sell Your <span className="text-amber-300 animate-pulse">Luxury Property</span>
          </h2>
          <p className="text-2xl text-amber-100 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Partner with Kenya's premier luxury real estate brokerage for maximum exposure and top-dollar results.
          </p>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-300 hover:bg-amber-200 text-amber-900 font-bold px-16 py-6 text-2xl transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            List Your Property <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {listingBenefits.map((benefit, index) => (
            <Card key={benefit.title} className={`group relative ${
              benefit.isActive 
                ? "bg-gradient-to-br from-white to-amber-50 border border-amber-200 shadow-lg" 
                : "bg-gradient-to-br from-amber-500 to-amber-600 border-amber-400 text-white shadow-md"
            } transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
              
              <CardContent className="relative p-10 text-center">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                  benefit.isActive 
                    ? "bg-gradient-to-br from-amber-600 to-amber-500 shadow-md" 
                    : "bg-gradient-to-br from-amber-300 to-amber-200 shadow-md"
                }`}>
                  <benefit.icon className={`h-10 w-10 ${
                    benefit.isActive ? "text-white" : "text-amber-900"
                  }`} />
                </div>
                
                <h3 className="text-3xl font-bold mb-6">
                  {benefit.title}
                </h3>
                
                <p className={`text-lg leading-relaxed font-medium ${
                  benefit.isActive ? "text-gray-600" : "text-amber-100"
                }`}>
                  {benefit.description}
                </p>
                
                <div className={`absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  benefit.isActive ? "bg-amber-500 text-white" : "bg-amber-200 text-amber-900"
                }`}>
                  {index + 1}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 shadow-lg border border-amber-100">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Visit Our Offices</h3>
            <p className="text-xl text-gray-600 mb-10 font-medium">Experience luxury real estate service at our premium locations across Nairobi</p>
            <Link to="/offices">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-16 py-6 text-xl font-bold transform hover:scale-105 transition-all duration-300 shadow-lg">
                <MapPin className="h-6 w-6 mr-3" />
                View All Office Locations
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.slice(0, 3).map((office) => (
              <div key={office.name} className="text-center p-6 bg-amber-50 rounded-xl border border-amber-200">
                <MapPin className="h-8 w-8 text-amber-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-4">{office.name}</h4>
                <p className="text-lg text-gray-600 font-medium">{office.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;