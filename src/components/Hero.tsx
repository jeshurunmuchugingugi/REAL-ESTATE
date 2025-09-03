import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1920&h=1080&fit=crop'
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Luxury Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative text-center text-white z-10 max-w-4xl mx-auto px-6">
        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-amber-600/20 border border-amber-500/30 rounded-full">
            <span className="text-amber-300 text-sm font-medium tracking-wide">NAIROBI'S PREMIER LUXURY BROKERAGE</span>
          </div>
        </div>
        
        <h1 className="text-4xl lg:text-6xl font-light leading-tight mb-8">
          Luxury Real Estate in
          <br />
          <span className="font-bold text-amber-400">Nairobi's Elite Neighborhoods</span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-gray-200 mb-6 font-medium leading-relaxed">
          Exclusive properties in Lavington, Kilimani, Kileleshwa, Runda, Karen & Kitisuru
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/properties">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-6 text-xl font-bold border-0 shadow-2xl transform hover:scale-105 transition-all duration-300">
              Browse Listings
            </Button>
          </Link>
          <Button 
            variant="outline" 
            className="border-3 border-white text-white hover:bg-white hover:text-black px-10 py-6 text-xl font-bold transform hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact a Broker
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;