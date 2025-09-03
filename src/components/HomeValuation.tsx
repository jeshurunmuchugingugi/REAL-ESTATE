import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Home, User, Phone, Mail, TrendingUp } from "lucide-react";

const HomeValuation = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    address: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    name: "",
    phone: "",
    email: ""
  });
  const [estimate, setEstimate] = useState<number | null>(null);

  const generateEstimate = () => {
    // Simple estimation logic based on property details
    const basePrice = {
      villa: 80000000,
      penthouse: 120000000,
      duplex: 60000000,
      mansion: 150000000,
      townhouse: 70000000
    }[formData.propertyType] || 80000000;

    const bedroomMultiplier = parseInt(formData.bedrooms) * 0.15 + 0.7;
    const areaMultiplier = parseInt(formData.area) / 3000;
    
    const estimated = Math.round(basePrice * bedroomMultiplier * areaMultiplier);
    setEstimate(estimated);
    setStep(3);
  };

  const handleSubmit = () => {
    const message = `Hi! I used your property valuation tool. My property: ${formData.address}, ${formData.propertyType}, ${formData.bedrooms}BR, ${formData.area}sqft. Estimated at Ksh ${estimate?.toLocaleString()}. Please provide a detailed CMA. Contact: ${formData.name}, ${formData.phone}, ${formData.email}`;
    window.open(`https://wa.me/254792530530?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
              FREE PROPERTY VALUATION
            </div>
            <h2 className="text-4xl font-light text-slate-900 mb-4">
              What's Your <span className="font-bold text-amber-600">Property Worth?</span>
            </h2>
            <p className="text-xl text-slate-600">Get an instant estimate + detailed market analysis</p>
          </div>

          <Card className="shadow-2xl border-0">
            <CardContent className="p-8">
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-6">Property Details</h3>
                  
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="Property Address (e.g., Lavington, Nairobi)"
                      className="pl-12 h-12 text-lg"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Select value={formData.propertyType} onValueChange={(value) => setFormData({...formData, propertyType: value})}>
                      <SelectTrigger className="h-12">
                        <Home className="h-4 w-4 mr-2" />
                        <SelectValue placeholder="Property Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="villa">Villa</SelectItem>
                        <SelectItem value="penthouse">Penthouse</SelectItem>
                        <SelectItem value="duplex">Duplex</SelectItem>
                        <SelectItem value="mansion">Mansion</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={formData.bedrooms} onValueChange={(value) => setFormData({...formData, bedrooms: value})}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Bedrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Bedroom</SelectItem>
                        <SelectItem value="2">2 Bedrooms</SelectItem>
                        <SelectItem value="3">3 Bedrooms</SelectItem>
                        <SelectItem value="4">4 Bedrooms</SelectItem>
                        <SelectItem value="5">5 Bedrooms</SelectItem>
                        <SelectItem value="6">6+ Bedrooms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Select value={formData.bathrooms} onValueChange={(value) => setFormData({...formData, bathrooms: value})}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Bathrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Bathroom</SelectItem>
                        <SelectItem value="2">2 Bathrooms</SelectItem>
                        <SelectItem value="3">3 Bathrooms</SelectItem>
                        <SelectItem value="4">4 Bathrooms</SelectItem>
                        <SelectItem value="5">5+ Bathrooms</SelectItem>
                      </SelectContent>
                    </Select>

                    <Input
                      placeholder="Area (sq ft)"
                      className="h-12"
                      value={formData.area}
                      onChange={(e) => setFormData({...formData, area: e.target.value})}
                    />
                  </div>

                  <Button 
                    onClick={() => setStep(2)} 
                    className="w-full h-12 bg-amber-600 hover:bg-amber-700 text-lg"
                    disabled={!formData.address || !formData.propertyType || !formData.bedrooms}
                  >
                    Get Instant Estimate
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-6">Contact Information</h3>
                  <p className="text-slate-600 mb-6">Get your estimate + detailed market analysis</p>
                  
                  <div className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        placeholder="Full Name"
                        className="pl-12 h-12"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>

                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        placeholder="Phone Number"
                        className="pl-12 h-12"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        className="pl-12 h-12"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <Button 
                    onClick={generateEstimate}
                    className="w-full h-12 bg-amber-600 hover:bg-amber-700 text-lg"
                    disabled={!formData.name || !formData.phone || !formData.email}
                  >
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Get My Property Value
                  </Button>
                </div>
              )}

              {step === 3 && estimate && (
                <div className="text-center space-y-6">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-8 rounded-2xl">
                    <h3 className="text-2xl font-semibold mb-2">Estimated Property Value</h3>
                    <div className="text-5xl font-bold mb-2">Ksh {estimate.toLocaleString()}</div>
                    <p className="text-amber-100">Based on current market data</p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-slate-900 mb-2">Want a Detailed Market Analysis?</h4>
                    <p className="text-slate-600 mb-4">Get a comprehensive CMA with comparable sales, market trends, and pricing strategy.</p>
                    
                    <Button onClick={handleSubmit} className="bg-amber-600 hover:bg-amber-700">
                      Request Detailed CMA via WhatsApp
                    </Button>
                  </div>

                  <Button 
                    variant="outline" 
                    onClick={() => {setStep(1); setEstimate(null); setFormData({address: "", propertyType: "", bedrooms: "", bathrooms: "", area: "", name: "", phone: "", email: ""});}}
                    className="w-full"
                  >
                    Value Another Property
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeValuation;