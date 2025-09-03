import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Filter, Plus, ArrowLeft, Heart, Bed, Bath, Square, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import PropertyCard from "@/components/PropertyCard";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Properties = () => {
  const [searchData, setSearchData] = useState({
    location: '',
    propertyType: '',
    priceRange: '',
    bedrooms: ''
  });

  const [filterType, setFilterType] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=400&fit=crop',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=400&fit=crop',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&h=400&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=400&fit=crop'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);
  const [properties] = useState([
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
      status: "For Sale" as const
    },
    {
      id: "4",
      title: "Karen Luxury Townhouse",
      price: "Ksh 85M",
      location: "Karen, Nairobi",
      bedrooms: 4,
      bathrooms: 4,
      area: "3,500 sq ft",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
      type: "Townhouse",
      status: "For Sale" as const
    }
  ]);



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <ArrowLeft className="h-5 w-5 text-amber-600" />
              <span className="text-lg font-semibold text-gray-900">Back to Home</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-amber-300 rounded-full opacity-80"></div>
              </div>
              <div>
                <div className="text-xl font-bold text-slate-900">Luxury Estates Kenya</div>
                <div className="text-xs text-amber-600 font-medium">PREMIER BROKERAGE</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{ backgroundImage: `url(${heroImages[currentHeroImage]})` }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-4xl font-light mb-2">
              Discover <span className="font-bold text-amber-400">Luxury Properties</span>
            </h1>
            <p className="text-lg text-gray-200">Premium real estate in Nairobi's most exclusive neighborhoods</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Search Section */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <div className="mb-6">
            <h1 className="text-3xl font-light text-slate-900">Exclusive <span className="font-bold text-amber-600">Luxury Properties</span></h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Enter location" 
                className="pl-10 h-12"
                value={searchData.location}
                onChange={(e) => setSearchData({...searchData, location: e.target.value})}
              />
            </div>
            
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Filter by Style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Styles</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
                <SelectItem value="duplex">Duplex</SelectItem>
                <SelectItem value="triplex">Triplex</SelectItem>
                <SelectItem value="mansion">Mansion</SelectItem>
                <SelectItem value="townhouse">Townhouse</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="For Sale or Rent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Properties</SelectItem>
                <SelectItem value="for sale">For Sale</SelectItem>
                <SelectItem value="for rent">For Rent</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={searchData.bedrooms} onValueChange={(value) => setSearchData({...searchData, bedrooms: value})}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Bedrooms</SelectItem>
                <SelectItem value="bedsitter">Bedsitter</SelectItem>
                <SelectItem value="1">1 Bedroom</SelectItem>
                <SelectItem value="2">2 Bedrooms</SelectItem>
                <SelectItem value="3">3 Bedrooms</SelectItem>
                <SelectItem value="4">4 Bedrooms</SelectItem>
                <SelectItem value="5">5 Bedrooms</SelectItem>
                <SelectItem value="6+">6+ Bedrooms</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={searchData.priceRange} onValueChange={(value) => setSearchData({...searchData, priceRange: value})}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="50-100m">Ksh 50M - 100M</SelectItem>
                <SelectItem value="100-200m">Ksh 100M - 200M</SelectItem>
                <SelectItem value="200m+">Ksh 200M+</SelectItem>
              </SelectContent>
            </Select>
            
            <Button className="bg-amber-600 hover:bg-amber-700 h-12 border-0">
              <Search className="h-4 w-4 mr-2" />
              Search Luxury Properties
            </Button>
          </div>
        </div>



        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties
            .filter(property => {
              const matchesStyle = filterType === 'all' || property.type.toLowerCase() === filterType;
              const matchesStatus = statusFilter === 'all' || property.status.toLowerCase() === statusFilter;
              const matchesLocation = !searchData.location || 
                property.location.toLowerCase().includes(searchData.location.toLowerCase()) ||
                property.location.toLowerCase().split(',')[0].trim().includes(searchData.location.toLowerCase());
              const matchesBedrooms = !searchData.bedrooms || searchData.bedrooms === 'all' ||
                (searchData.bedrooms === 'bedsitter' && property.bedrooms === 0) ||
                (searchData.bedrooms === '6+' && property.bedrooms >= 6) ||
                property.bedrooms.toString() === searchData.bedrooms;
              return matchesStyle && matchesStatus && matchesLocation && matchesBedrooms;
            })
            .map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
        </div>
      </div>
      <WhatsAppFloat />
    </div>
  );
};

export default Properties;