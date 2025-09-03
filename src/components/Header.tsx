import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white/50 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-white/20">
      {/* Top contact bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>0792 530 530 / 0798 260 260</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@luxuryestateskenya.com</span>
            </div>
          </div>
          <div className="text-amber-400 text-xs font-medium">
            LAVINGTON, NAIROBI
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-amber-300 rounded-full opacity-80"></div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">Luxury Estates Kenya</div>
              <div className="text-sm text-amber-600 font-medium">PREMIER BROKERAGE</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Home</Link>
            
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 text-slate-700 hover:text-amber-600 font-medium transition-colors"
              >
                Properties <ChevronDown className="h-4 w-4" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white shadow-xl rounded-lg border z-50">
                  <Link to="/properties" className="block px-4 py-3 hover:bg-gray-50 text-slate-700 hover:text-amber-600 transition-colors border-b">
                    All Properties
                  </Link>
                  
                  <div className="grid grid-cols-2 gap-4 p-4">
                    {/* By Location */}
                    <div>
                      <div className="px-2 py-1 text-xs font-semibold text-amber-600 uppercase tracking-wide bg-amber-50 rounded mb-2">
                        By Location
                      </div>
                      <Link to="/properties?location=lavington" className="block w-full text-left px-2 py-1.5 hover:bg-gray-50 text-slate-700 hover:text-amber-600 transition-colors text-sm rounded" onClick={() => setIsDropdownOpen(false)}>
                        Lavington
                      </Link>
                      <Link to="/properties?location=kilimani" className="block w-full text-left px-2 py-1.5 hover:bg-gray-50 text-slate-700 hover:text-amber-600 transition-colors text-sm rounded" onClick={() => setIsDropdownOpen(false)}>
                        Kilimani
                      </Link>
                      <Link to="/properties?location=kileleshwa" className="block w-full text-left px-2 py-1.5 hover:bg-gray-50 text-slate-700 hover:text-amber-600 transition-colors text-sm rounded" onClick={() => setIsDropdownOpen(false)}>
                        Kileleshwa
                      </Link>
                      <Link to="/properties?location=runda" className="block w-full text-left px-2 py-1.5 hover:bg-gray-50 text-slate-700 hover:text-amber-600 transition-colors text-sm rounded" onClick={() => setIsDropdownOpen(false)}>
                        Runda
                      </Link>
                      <Link to="/properties?location=karen" className="block w-full text-left px-2 py-1.5 hover:bg-gray-50 text-slate-700 hover:text-amber-600 transition-colors text-sm rounded" onClick={() => setIsDropdownOpen(false)}>
                        Karen
                      </Link>
                      <Link to="/properties?location=kitisuru" className="block w-full text-left px-2 py-1.5 hover:bg-gray-50 text-slate-700 hover:text-amber-600 transition-colors text-sm rounded" onClick={() => setIsDropdownOpen(false)}>
                        Kitisuru
                      </Link>
                    </div>
                    
                    {/* By Style */}
                    <div>
                      <div className="px-2 py-1 text-xs font-semibold text-amber-600 uppercase tracking-wide bg-amber-50 rounded mb-2">
                        By Style
                      </div>
                      <Link to="/properties?style=duplex" className="block w-full text-left px-2 py-1.5 hover:bg-gray-50 text-slate-700 hover:text-amber-600 transition-colors text-sm rounded" onClick={() => setIsDropdownOpen(false)}>
                        Duplex
                      </Link>
                      <Link to="/properties?style=penthouse" className="block w-full text-left px-2 py-1.5 hover:bg-gray-50 text-slate-700 hover:text-amber-600 transition-colors text-sm rounded" onClick={() => setIsDropdownOpen(false)}>
                        Penthouse
                      </Link>
                      <Link to="/properties?style=simplex" className="block w-full text-left px-2 py-1.5 hover:bg-gray-50 text-slate-700 hover:text-amber-600 transition-colors text-sm rounded" onClick={() => setIsDropdownOpen(false)}>
                        Simplex
                      </Link>
                      <Link to="/properties?style=triplex" className="block w-full text-left px-2 py-1.5 hover:bg-gray-50 text-slate-700 hover:text-amber-600 transition-colors text-sm rounded" onClick={() => setIsDropdownOpen(false)}>
                        Triplex
                      </Link>
                      <Link to="/properties?style=villa" className="block w-full text-left px-2 py-1.5 hover:bg-gray-50 text-slate-700 hover:text-amber-600 transition-colors text-sm rounded" onClick={() => setIsDropdownOpen(false)}>
                        Villa
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-slate-700 hover:text-amber-600 font-medium transition-colors">About Us</button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-slate-700 hover:text-amber-600 font-medium transition-colors">Contact</button>
          </nav>

          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-600 hover:bg-amber-700 text-white font-semibold border-0"
          >
            Schedule Viewing
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;