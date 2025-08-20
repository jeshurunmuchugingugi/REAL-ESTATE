import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";

const ServiceAreas = () => {
  const areas = [
    {
      region: "Nairobi Central",
      locations: ["CBD", "Westlands", "Kilimani", "Lavington", "Karen"],
      responseTime: "30 mins"
    },
    {
      region: "Nairobi East",
      locations: ["Eastlands", "Embakasi", "Donholm", "Buruburu", "Umoja"],
      responseTime: "45 mins"
    },
    {
      region: "Nairobi West",
      locations: ["Ngong", "Rongai", "Langata", "Kibera", "Dagoretti"],
      responseTime: "45 mins"
    },
    {
      region: "Kiambu County",
      locations: ["Thika", "Ruiru", "Juja", "Limuru", "Kikuyu"],
      responseTime: "1 hour"
    },
    {
      region: "Machakos County",
      locations: ["Machakos Town", "Athi River", "Mavoko", "Kangundo"],
      responseTime: "1.5 hours"
    },
    {
      region: "Kajiado County",
      locations: ["Kitengela", "Isinya", "Ngong Hills", "Magadi Road"],
      responseTime: "1 hour"
    }
  ];

  return (
    <section id="service-areas" className="bg-muted/20 py-12 lg:py-16 mb-2 scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium mb-4">— Service Coverage</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Areas We <span className="text-primary">Proudly Serve</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional cleaning services across Nairobi and surrounding counties. 
            Fast response times and reliable service in your neighborhood.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {areas.map((area, index) => (
            <Card key={area.region} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">{area.region}</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {area.locations.map((location) => (
                      <span key={location} className="text-xs bg-accent/10 text-accent-foreground px-2 py-1 rounded-full">
                        {location}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Response time: {area.responseTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Don't See Your Area?</h3>
          <p className="mb-6 opacity-90">
            We're expanding our services! Contact us to check if we can serve your location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">(408) 555-0120</span>
            </div>
            <span className="hidden sm:block">•</span>
            <span>Available 24/7 for inquiries</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;