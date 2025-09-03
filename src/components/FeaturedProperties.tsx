import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedProperties = () => {
  const properties = [
    {
      id: "1",
      title: "Lavington Luxury Villa",
      price: "Ksh 96M",
      location: "Lavington, Nairobi",
      bedrooms: 5,
      bathrooms: 4,
      area: "4,000 sq ft",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
      type: "Villa",
      status: "For Sale" as const,
      featured: true
    },
    {
      id: "2", 
      title: "Kilimani Executive Penthouse",
      price: "Ksh 180K/month",
      location: "Kilimani, Nairobi",
      bedrooms: 3,
      bathrooms: 3,
      area: "2,800 sq ft",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
      type: "Penthouse",
      status: "For Rent" as const,
      featured: true
    },
    {
      id: "3",
      title: "Runda Mansion Estate",
      price: "Ksh 150M",
      location: "Runda, Nairobi",
      bedrooms: 6,
      bathrooms: 5,
      area: "6,500 sq ft",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
      type: "Mansion",
      status: "For Sale" as const,
      featured: true
    }
  ];

  return (
    <section id="properties" className="pt-8 pb-5 bg-white">
      <div className="w-full">
        <div className="text-center mb-8 px-6 lg:px-12 xl:px-16">
          <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full mb-2 text-sm font-medium">
            EXCLUSIVE LISTINGS
          </div>
          <h2 className="text-5xl lg:text-6xl font-light text-slate-900 mb-4">
            Featured <span className="font-bold text-amber-600">Luxury Properties</span>
          </h2>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto font-medium mb-6">
            Handpicked exclusive properties in Nairobi's most prestigious neighborhoods
          </p>
          <Link to="/properties">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-16 py-6 text-xl font-bold border-0 transform hover:scale-105 transition-all duration-300 shadow-lg">
              View All Exclusive Listings
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 px-2">
          {properties.map((property) => (
            <Link key={property.id} to={`/property/${property.id}`} className="group cursor-pointer">
              <div className="relative overflow-hidden h-[350px]">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {property.status}
                  </span>
                </div>
                
                {/* Property Details Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm text-amber-300 font-medium mb-2">{property.location}</div>
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-amber-300 transition-colors">
                    {property.title}
                  </h3>
                  <div className="text-3xl font-bold text-amber-400 mb-4">{property.price}</div>
                  <div className="flex items-center gap-4 text-lg font-medium mb-4">
                    <span>{property.bedrooms} beds</span>
                    <span>•</span>
                    <span>{property.bathrooms} baths</span>
                    <span>•</span>
                    <span>{property.area}</span>
                  </div>
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 text-lg font-bold transform hover:scale-105 transition-all duration-300">
                    View Details
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>


      </div>
    </section>
  );
};

export default FeaturedProperties;