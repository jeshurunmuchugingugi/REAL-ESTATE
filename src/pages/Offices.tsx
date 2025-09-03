import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Phone, Mail, Clock, Car, Wifi, Coffee, Users, Award, Shield, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Offices = () => {
  const offices = [
    {
      id: 1,
      name: "Lavington Headquarters",
      address: "Lavington Shopping Centre, Ground Floor, Suite 12",
      location: "Lavington, Nairobi",
      coordinates: "-1.2921, 36.7219",
      phone: "0792 530 530",
      email: "lavington@luxuryestateskenya.com",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 4:00 PM",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      buildingImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      description: "Our flagship office located in the heart of Lavington, offering premium real estate services with state-of-the-art facilities.",
      detailedInfo: "Strategically positioned in Lavington Shopping Centre, our headquarters spans 2,500 sq ft of premium office space. The location offers excellent accessibility with major transport links and is surrounded by upscale residential areas.",
      teamSize: "15 Real Estate Professionals",
      established: "Since 2012",
      specialties: ["Luxury Residential Sales", "Commercial Properties", "Investment Advisory", "Property Management"],
      amenities: ["Free Parking (50 spaces)", "High-Speed WiFi", "Coffee Lounge", "Private Consultation Rooms", "Conference Hall", "24/7 Security"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8193!2d36.7219!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0x519daa1b2721dd0!2sLavington%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890"
    },
    {
      id: 2,
      name: "Kilimani Branch",
      address: "Yaya Centre, 2nd Floor, Office 204",
      location: "Kilimani, Nairobi",
      coordinates: "-1.2966, 36.7836", 
      phone: "0798 260 260",
      email: "kilimani@luxuryestateskenya.com",
      hours: "Mon-Fri: 8:30 AM - 5:30 PM, Sat: 9:00 AM - 3:00 PM",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      buildingImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
      description: "Modern office space in Yaya Centre, serving the vibrant Kilimani community with contemporary facilities.",
      detailedInfo: "Located in the prestigious Yaya Centre, this 1,800 sq ft office serves as our central Kilimani hub. The location provides easy access to major business districts and residential complexes in the area.",
      teamSize: "8 Real Estate Professionals",
      established: "Since 2015",
      specialties: ["Urban Apartments", "Penthouse Sales", "Rental Services", "Corporate Relocations"],
      amenities: ["Secure Parking (30 spaces)", "High-Speed Internet", "Meeting Rooms", "Client Lounge", "Reception Area", "CCTV Security"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8193!2d36.7836!3d-1.2966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6bf7445dc1%3A0x940b62a3c8efde4f!2sYaya%20Centre!5e0!3m2!1sen!2ske!4v1234567890"
    },
    {
      id: 3,
      name: "Karen Office",
      address: "Karen Shopping Centre, Upper Level, Unit 15",
      location: "Karen, Nairobi",
      coordinates: "-1.3197, 36.6859",
      phone: "0701 234 567", 
      email: "karen@luxuryestateskenya.com",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM, Sat: 10:00 AM - 2:00 PM",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      buildingImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
      description: "Elegant office serving Karen's exclusive residential market with personalized luxury service.",
      detailedInfo: "Situated in Karen Shopping Centre, this 1,200 sq ft boutique office caters to Karen's affluent residential market. The serene location offers a perfect setting for high-end property consultations.",
      teamSize: "6 Real Estate Professionals",
      established: "Since 2018",
      specialties: ["Luxury Villas", "Gated Communities", "Land Sales", "Estate Planning"],
      amenities: ["Valet Parking (20 spaces)", "Premium WiFi", "Executive Lounge", "Garden View Terrace", "Private Offices", "Refreshment Area"],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8193!2d36.6859!3d-1.3197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f14b84cc8a73b%3A0x1b2b2b2b2b2b2b2b!2sKaren%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/50 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-white/20">
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <ArrowLeft className="h-5 w-5 text-amber-600" />
              <span className="text-lg font-semibold text-gray-900">Back to Home</span>
            </Link>
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-amber-300 rounded-full opacity-80"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">Luxury Estates Kenya</div>
                <div className="text-sm text-amber-600 font-medium">PREMIER BROKERAGE</div>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=400&fit=crop)' }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl font-light mb-2">
              Our <span className="font-bold text-amber-400">Office Locations</span>
            </h1>
            <p className="text-lg text-gray-200">Visit us at our premium locations across Nairobi</p>
          </div>
        </div>
      </div>

      <div className="w-full px-4 py-12">
        <div className="grid gap-12">
          {offices.map((office, index) => (
            <Card key={office.id} className="overflow-hidden shadow-xl">
              <div className={`grid lg:grid-cols-2 gap-0 min-h-[600px] ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={office.image} 
                    alt={office.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Content */}
                <CardContent className={`p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="h-5 w-5 text-amber-600" />
                      <span className="text-amber-600 font-medium text-sm">{office.established}</span>
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">{office.name}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">{office.description}</p>
                    <p className="text-base text-gray-500 leading-relaxed mb-6">{office.detailedInfo}</p>
                    
                    <div className="flex items-center gap-6 text-base text-gray-600 mb-6">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-amber-600" />
                        <span>{office.teamSize}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-amber-600" />
                        <span>Licensed & Insured</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {office.specialties.map((specialty, idx) => (
                          <span key={idx} className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-lg font-medium text-gray-900">{office.address}</div>
                        <div className="text-base text-gray-600">{office.location}</div>
                        <div className="text-sm text-gray-500">Coordinates: {office.coordinates}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-amber-600" />
                      <span className="text-lg text-gray-900">{office.phone}</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-amber-600" />
                      <span className="text-lg text-gray-900">{office.email}</span>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-amber-600 mt-1" />
                      <span className="text-base text-gray-900">{office.hours}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Office Amenities & Features</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {office.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-base text-gray-600">
                          {amenity.includes('Parking') && <Car className="h-4 w-4 text-amber-600" />}
                          {amenity.includes('WiFi') && <Wifi className="h-4 w-4 text-amber-600" />}
                          {amenity.includes('Coffee') && <Coffee className="h-4 w-4 text-amber-600" />}
                          {!amenity.includes('Parking') && !amenity.includes('WiFi') && !amenity.includes('Coffee') && 
                           <div className="w-2 h-2 bg-amber-600 rounded-full"></div>}
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      className="bg-amber-600 hover:bg-amber-700 text-white"
                      onClick={() => {
                        const message = `Hi! I'd like to schedule a visit to your ${office.name} office. When would be a good time?`;
                        const whatsappUrl = `https://wa.me/254792530530?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                    >
                      Schedule Visit
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                      onClick={() => {
                        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address + ', ' + office.location)}`;
                        window.open(googleMapsUrl, '_blank');
                      }}
                    >
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </div>
              
              {/* Building Image & Map Section */}
              <div className="grid lg:grid-cols-2 gap-8 p-12 bg-gradient-to-br from-amber-50 to-gray-50">
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <h3 className="text-2xl font-bold text-gray-900">Building Exterior</h3>
                    </div>
                    <img 
                      src={office.buildingImage} 
                      alt={`${office.name} Building`}
                      className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                    <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                      <p className="text-base text-gray-600">Professional office space designed for luxury real estate consultations</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="h-5 w-5 text-amber-600" />
                      <h3 className="text-2xl font-bold text-gray-900">Location & Directions</h3>
                    </div>
                    <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden mb-4">
                      <iframe
                        src={office.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title={`${office.name} Location`}
                      ></iframe>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                        onClick={() => {
                          const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address + ', ' + office.location)}`;
                          window.open(googleMapsUrl, '_blank');
                        }}
                      >
                        Open in Maps
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-amber-600 hover:bg-amber-700 text-white"
                        onClick={() => {
                          const message = `Hi! I need directions to your ${office.name} office. Can you help?`;
                          const whatsappUrl = `https://wa.me/254792530530?text=${encodeURIComponent(message)}`;
                          window.open(whatsappUrl, '_blank');
                        }}
                      >
                        <Calendar className="h-4 w-4 mr-1" />
                        Get Help
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offices;