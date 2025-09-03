import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Bed, Bath, Square, Car, Wifi, Dumbbell, Shield, Phone, Mail, MessageCircle, X, Calendar } from "lucide-react";
import TourBooking from "@/components/TourBooking";

const PropertyDetailPage = () => {
  const { id } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showTourBooking, setShowTourBooking] = useState(false);

  const properties = {
    "1": {
      id: "1",
      title: "Lavington Luxury Villa",
      price: "Ksh 96M",
      location: "Lavington, Nairobi",
      bedrooms: 5,
      bathrooms: 4,
      area: "4,000 sq ft",
      type: "Villa",
      status: "For Sale" as const,
      featured: true,
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop"
      ],
      description: "This exceptional villa represents the pinnacle of luxury living in Lavington. Featuring premium finishes throughout, this property offers an unparalleled lifestyle experience."
    },
    "2": {
      id: "2",
      title: "Kilimani Executive Penthouse",
      price: "Ksh 180K/month",
      location: "Kilimani, Nairobi",
      bedrooms: 3,
      bathrooms: 3,
      area: "2,800 sq ft",
      type: "Penthouse",
      status: "For Rent" as const,
      featured: true,
      images: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop"
      ],
      description: "Modern executive penthouse in the heart of Kilimani. Floor-to-ceiling windows offer stunning city views, while premium amenities provide the ultimate urban living experience."
    },
    "3": {
      id: "3",
      title: "Runda Mansion Estate",
      price: "Ksh 150M",
      location: "Runda, Nairobi",
      bedrooms: 6,
      bathrooms: 5,
      area: "6,500 sq ft",
      type: "Mansion",
      status: "For Sale" as const,
      featured: true,
      images: [
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&h=600&fit=crop"
      ],
      description: "Magnificent mansion estate in prestigious Runda. This architectural masterpiece features expansive grounds, luxury finishes, and unmatched privacy for discerning buyers."
    },
    "4": {
      id: "4",
      title: "Karen Luxury Townhouse",
      price: "Ksh 85M",
      location: "Karen, Nairobi",
      bedrooms: 4,
      bathrooms: 4,
      area: "3,500 sq ft",
      type: "Townhouse",
      status: "For Sale" as const,
      featured: false,
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop"
      ],
      description: "Elegant townhouse in the serene Karen neighborhood. Thoughtfully designed with modern amenities while maintaining the area's natural charm and tranquility."
    }
  };

  const property = properties[id as keyof typeof properties];
  const propertyImages = property?.images || [];

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <Link to="/properties" className="text-amber-600 hover:text-amber-700">
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  const amenities = [
    { icon: Car, label: "2 Parking Spaces" },
    { icon: Wifi, label: "High-Speed Internet" },
    { icon: Dumbbell, label: "Private Gym" },
    { icon: Shield, label: "24/7 Security" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <Link to="/properties" className="flex items-center gap-3 text-amber-600 hover:text-amber-700">
            <ArrowLeft className="h-5 w-5" />
            <span className="text-lg font-semibold">Back to Properties</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-[500px]">
                <img 
                  src={propertyImages[selectedImageIndex]} 
                  alt={property.title}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setShowImageModal(true)}
                />
                <Badge 
                  className={`absolute top-4 left-4 ${
                    property.status === 'For Sale' ? 'bg-amber-600' : 'bg-amber-500'
                  }`}
                >
                  {property.status}
                </Badge>
                {property.featured && (
                  <Badge className="absolute top-4 right-4 bg-amber-600">
                    Featured
                  </Badge>
                )}
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="p-4">
                <div className="grid grid-cols-6 gap-2 max-h-32 overflow-y-auto">
                  {propertyImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Property view ${index + 1}`}
                      className={`w-full h-16 object-cover rounded cursor-pointer border-2 ${
                        index === selectedImageIndex ? 'border-amber-600' : 'border-gray-200'
                      }`}
                      onClick={() => setSelectedImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center text-amber-600 text-sm font-medium mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                {property.location}
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-4">{property.title}</h1>
              <div className="text-4xl font-bold text-amber-600 mb-6">{property.price}</div>
              
              {/* Property Stats */}
              <div className="flex gap-6 py-4 border-y border-gray-200 mb-6">
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
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Property Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {property.description}
                </p>
              </div>
              
              {/* Features & Amenities */}
              <div className="mb-6">
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
                    title="Property Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Form */}
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
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
                  <Button 
                    onClick={() => setShowTourBooking(true)}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white border-0"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Tour
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
              </CardContent>
            </Card>

            {/* Agent Contact */}
            <Card className="bg-slate-900 text-white shadow-lg">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" 
                    alt="Agent"
                    className="w-16 h-16 rounded-full mx-auto mb-3"
                  />
                  <h4 className="font-semibold">James Mwangi</h4>
                  <p className="text-amber-400 text-sm">Principal Broker</p>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-amber-400" />
                    <span className="text-sm">0792 530 530</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-amber-400" />
                    <span className="text-sm">james@luxuryestateskenya.com</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900"
                  onClick={() => {
                    const message = `Hi! I'm interested in ${property.title} in ${property.location} priced at ${property.price}. Can we schedule a viewing?`;
                    const whatsappUrl = `https://wa.me/254792530530?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Agent
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Full Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white z-10"
              onClick={() => setShowImageModal(false)}
            >
              <X className="h-6 w-6" />
            </Button>
            <img 
              src={propertyImages[selectedImageIndex]} 
              alt={property.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
      
      {/* Tour Booking Modal */}
      {showTourBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <TourBooking 
            propertyTitle={property.title}
            propertyId={property.id}
            onClose={() => setShowTourBooking(false)}
          />
        </div>
      )}
      
      {/* Sticky Tour CTA - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 md:hidden z-40">
        <Button 
          onClick={() => setShowTourBooking(true)}
          className="w-full bg-amber-600 hover:bg-amber-700 h-12"
        >
          <Calendar className="h-5 w-5 mr-2" />
          Schedule Tour
        </Button>
      </div>
    </div>
  );
};

export default PropertyDetailPage;