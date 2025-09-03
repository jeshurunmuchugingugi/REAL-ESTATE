import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { X, MapPin, Bed, Bath, Square, Car, Wifi, Dumbbell, Shield, Phone, Mail, MessageCircle } from "lucide-react";

interface PropertyDetailsProps {
  property: {
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
  };
  isOpen: boolean;
  onClose: () => void;
}

const PropertyDetails = ({ property, isOpen, onClose }: PropertyDetailsProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Sample additional images for the property
  const propertyImages = [
    property.image,
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&h=600&fit=crop"
  ];

  // Auto-scroll images every 4 seconds
  useEffect(() => {
    if (!isOpen) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isOpen, propertyImages.length]);

  const amenities = [
    { icon: Car, label: "2 Parking Spaces" },
    { icon: Wifi, label: "High-Speed Internet" },
    { icon: Dumbbell, label: "Private Gym" },
    { icon: Shield, label: "24/7 Security" }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0">
        <div className="relative">
          {/* Image Gallery */}
          <div className="relative h-96 bg-gray-900">
            <img 
              src={propertyImages[currentImageIndex]} 
              alt={property.title}
              className="w-full h-full object-cover"
            />
            
            {/* Status Badge */}
            <Badge 
              className={`absolute top-4 left-4 ${
                property.status === 'For Sale' ? 'bg-green-600' : 
                property.status === 'For Rent' ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              {property.status}
            </Badge>
            
            {/* Featured Badge */}
            {property.featured && (
              <Badge className="absolute top-4 right-16 bg-amber-600">
                Featured
              </Badge>
            )}
            
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
            
            {/* Image Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {propertyImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Property Details */}
          <div className="p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Details */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <div className="flex items-center text-amber-600 text-sm font-medium mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {property.location}
                  </div>
                  <h1 className="text-3xl font-bold text-slate-900 mb-4">{property.title}</h1>
                  <div className="text-4xl font-bold text-amber-600 mb-6">{property.price}</div>
                </div>
                
                {/* Property Stats */}
                <div className="flex gap-6 py-4 border-y border-gray-200">
                  <div className="flex items-center gap-2">
                    <Bed className="h-5 w-5 text-gray-600" />
                    <span className="font-medium">{property.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="h-5 w-5 text-gray-600" />
                    <span className="font-medium">{property.bathrooms} Bathrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="h-5 w-5 text-gray-600" />
                    <span className="font-medium">{property.area}</span>
                  </div>
                </div>
                
                {/* Description */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Property Description</h3>
                  <p className="text-gray-600 leading-relaxed">
                    This exceptional {property.type.toLowerCase()} represents the pinnacle of luxury living in {property.location}. 
                    Featuring premium finishes throughout, this property offers an unparalleled lifestyle experience. 
                    The open-plan design seamlessly integrates indoor and outdoor living spaces, perfect for both 
                    intimate gatherings and grand entertaining. Every detail has been carefully curated to provide 
                    the ultimate in comfort and sophistication.
                  </p>
                </div>
                
                {/* Features & Amenities */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Features & Amenities</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <amenity.icon className="h-5 w-5 text-amber-600" />
                        <span className="text-gray-700">{amenity.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Additional Features */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Additional Features</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    <div>• Designer kitchen with premium appliances</div>
                    <div>• Master suite with walk-in closet</div>
                    <div>• Entertainment terrace with city views</div>
                    <div>• Smart home automation system</div>
                    <div>• Private garden and landscaping</div>
                    <div>• Backup generator and water system</div>
                  </div>
                </div>
                
                {/* Location Map */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Location</h3>
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.234567890123!2d36.7219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0x519daa1b2721dd0!2sLavington%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890123!5m2!1sen!2ske"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Property Location"
                    ></iframe>
                  </div>
                  <div className="mt-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-amber-600" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Sidebar */}
              <div className="space-y-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Schedule a Private Viewing</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
                    />
                    <textarea
                      placeholder="Message (optional)"
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500 resize-none"
                    />
                    <div className="space-y-2">
                      <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white border-0">
                        Request Viewing
                      </Button>
                      <Button 
                        variant="outline"
                        className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                        onClick={() => {
                          const message = `Hi! I'd like to schedule a private viewing for ${property.title} in ${property.location}. When would be a good time?`;
                          const whatsappUrl = `https://wa.me/254792530530?text=${encodeURIComponent(message)}`;
                          window.open(whatsappUrl, '_blank');
                        }}
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        WhatsApp for Quick Response
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Agent Contact */}
                <div className="bg-slate-900 text-white rounded-xl p-6">
                  <div className="text-center mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" 
                      alt="Agent"
                      className="w-16 h-16 rounded-full mx-auto mb-3"
                    />
                    <h4 className="font-semibold">James Mwangi</h4>
                    <p className="text-amber-400 text-sm">Principal Broker</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-amber-400" />
                      <span className="text-sm">0792 530 530</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-amber-400" />
                      <span className="text-sm">james@luxuryestateskenya.com</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    <Button variant="outline" className="w-full border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900">
                      Contact Agent
                    </Button>
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white border-0"
                      onClick={() => {
                        const message = `Hi! I'm interested in ${property.title} in ${property.location} priced at ${property.price}. Can we schedule a viewing?`;
                        const whatsappUrl = `https://wa.me/254792530530?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp Agent
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyDetails;