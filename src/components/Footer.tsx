import { Phone, Mail, MapPin, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-amber-300 rounded-full opacity-80"></div>
              </div>
              <div>
                <div className="text-2xl font-bold">Luxury Estates Kenya</div>
                <div className="text-base text-amber-400 font-bold">PREMIER BROKERAGE</div>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed font-medium">
              Kenya's premier luxury real estate brokerage, specializing in exclusive properties 
              across Nairobi's most prestigious neighborhoods.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-xl text-amber-400">Elite Neighborhoods</h3>
            <ul className="space-y-3 text-lg">
              <li><button className="text-gray-300 hover:text-amber-400 transition-colors font-medium">Lavington</button></li>
              <li><button className="text-gray-300 hover:text-amber-400 transition-colors font-medium">Kilimani</button></li>
              <li><button className="text-gray-300 hover:text-amber-400 transition-colors font-medium">Kileleshwa</button></li>
              <li><button className="text-gray-300 hover:text-amber-400 transition-colors font-medium">Runda</button></li>
              <li><button className="text-gray-300 hover:text-amber-400 transition-colors font-medium">Karen</button></li>
              <li><button className="text-gray-300 hover:text-amber-400 transition-colors font-medium">Kitisuru</button></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-xl text-amber-400">Luxury Services</h3>
            <ul className="space-y-3 text-lg">
              <li className="text-gray-300 font-medium">Exclusive Property Search</li>
              <li className="text-gray-300 font-medium">Private Property Viewings</li>
              <li className="text-gray-300 font-medium">Luxury Property Sales</li>
              <li className="text-gray-300 font-medium">Investment Consulting</li>
              <li className="text-gray-300 font-medium">Property Valuation</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-bold text-xl text-amber-400">Contact</h3>
            <div className="space-y-4 text-lg">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300 font-medium">0792 530 530 / 0798 260 260</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300 font-medium">info@luxuryestateskenya.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300 font-medium">Lavington, Nairobi</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg text-amber-400">Follow Our Listings</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                  <Twitter className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors">
                  <Youtube className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-lg text-gray-400">
            <p className="font-medium">&copy; 2024 Luxury Estates Kenya. All rights reserved. Licensed Real Estate Brokerage.</p>
            <div className="flex gap-8">
              <a href="/privacy" className="hover:text-amber-400 transition-colors font-medium">Privacy Policy</a>
              <a href="/terms" className="hover:text-amber-400 transition-colors font-medium">Terms of Service</a>
              <a href="/legal" className="hover:text-amber-400 transition-colors font-medium">Legal Disclaimers</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;