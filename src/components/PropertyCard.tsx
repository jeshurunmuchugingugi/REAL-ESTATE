import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Bed, Bath, Square, Eye, Calendar } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import TourBooking from "./TourBooking";

interface PropertyCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  type: string;
  status: "For Sale" | "For Rent" | "Sold";
  featured?: boolean;
}

const PropertyCard = (props: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showTourBooking, setShowTourBooking] = useState(false);

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        <img 
          src={props.image} 
          alt={props.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Status Badge */}
        <Badge 
          className={`absolute top-4 left-4 ${
            props.status === 'For Sale' ? 'bg-amber-600' : 
            props.status === 'For Rent' ? 'bg-amber-500' : 'bg-gray-500'
          }`}
        >
          {props.status}
        </Badge>
        
        {/* Featured Badge */}
        {props.featured && (
          <Badge className="absolute top-4 right-4 bg-amber-500">
            Featured
          </Badge>
        )}
        
        {/* Like Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-4 right-4 bg-white/80 hover:bg-white"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </Button>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl text-gray-900 group-hover:text-amber-600 transition-colors">
              {props.title}
            </h3>
            <div className="flex items-center text-gray-500 text-base font-medium mt-2">
              <MapPin className="h-4 w-4 mr-1" />
              {props.location}
            </div>
          </div>
          
          <div className="flex items-center justify-between text-base font-medium text-gray-600">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1" />
                {props.bedrooms}
              </div>
              <div className="flex items-center">
                <Bath className="h-4 w-4 mr-1" />
                {props.bathrooms}
              </div>
              <div className="flex items-center">
                <Square className="h-4 w-4 mr-1" />
                {props.area}
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-amber-600">{props.price}</div>
                <div className="text-base font-medium text-gray-500">{props.type}</div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button 
                onClick={() => setShowTourBooking(true)}
                className="flex-1 bg-amber-600 hover:bg-amber-700 border-0 text-lg font-bold py-3 transform hover:scale-105 transition-all duration-300"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book Tour
              </Button>
              <Link to={`/property/${props.id}`} className="flex-1">
                <Button variant="outline" className="w-full text-lg font-bold py-3 transform hover:scale-105 transition-all duration-300">
                  <Eye className="h-4 w-4 mr-2" />
                  Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
      
      {showTourBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <TourBooking 
            propertyTitle={props.title}
            propertyId={props.id}
            onClose={() => setShowTourBooking(false)}
          />
        </div>
      )}
    </Card>
  );
};

export default PropertyCard;