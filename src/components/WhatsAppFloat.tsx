import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";


const WhatsAppFloat = () => {
  const [showPopup, setShowPopup] = useState(false);

  const socialMedia = [
    { name: "WhatsApp", url: "https://wa.me/2540722836384", color: "bg-green-500" },
    { name: "Facebook", url: "https://facebook.com/cleaningservice", color: "bg-blue-600" },
    { name: "Twitter", url: "https://twitter.com/cleaningservice", color: "bg-blue-400" },
    { name: "Instagram", url: "https://instagram.com/cleaningservice", color: "bg-pink-500" }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in" style={{ animationDelay: '2s' }}>
      <Button
        onClick={() => setShowPopup(!showPopup)}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Contact us on social media"
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
      </Button>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping"></div>
      
      {/* Social Media Popup */}
      {showPopup && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-48">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-800">Connect with us</h3>
            <button onClick={() => setShowPopup(false)} className="text-gray-500 hover:text-gray-700">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-2">
            {socialMedia.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-2 rounded-lg ${social.color} text-white hover:opacity-90 transition-opacity`}
              >
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold">
                  {social.name[0]}
                </div>
                <span className="text-sm font-medium">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppFloat;