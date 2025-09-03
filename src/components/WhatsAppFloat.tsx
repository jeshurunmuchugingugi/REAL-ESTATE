import { MessageCircle, X, Instagram, Twitter, Youtube, Facebook } from "lucide-react";
import { useState } from "react";

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialPlatforms = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "bg-green-500 hover:bg-green-600",
      action: () => {
        const message = "Hi! I'm interested in your luxury properties in Nairobi. Can you help me find my dream home?";
        const whatsappUrl = `https://wa.me/254792530530?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
      }
    },
    {
      name: "Instagram",
      icon: Instagram,
      color: "bg-pink-500 hover:bg-pink-600",
      action: () => window.open('https://instagram.com/luxuryestateskenya', '_blank')
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "bg-blue-500 hover:bg-blue-600",
      action: () => window.open('https://twitter.com/luxuryestateskenya', '_blank')
    },
    {
      name: "YouTube",
      icon: Youtube,
      color: "bg-red-500 hover:bg-red-600",
      action: () => window.open('https://youtube.com/@luxuryestateskenya', '_blank')
    },
    {
      name: "Facebook",
      icon: Facebook,
      color: "bg-blue-600 hover:bg-blue-700",
      action: () => window.open('https://facebook.com/luxuryestateskenya', '_blank')
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Social Media Menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 space-y-3 animate-in slide-in-from-bottom-2 duration-300">
          {socialPlatforms.map((platform, index) => (
            <div
              key={platform.name}
              className="flex items-center gap-3 animate-in slide-in-from-right duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="bg-white text-slate-700 px-3 py-1 rounded-lg text-sm font-medium shadow-lg whitespace-nowrap">
                {platform.name}
              </span>
              <button
                onClick={() => {
                  platform.action();
                  setIsOpen(false);
                }}
                className={`${platform.color} text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110`}
                aria-label={`Contact us on ${platform.name}`}
              >
                <platform.icon className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-slate-600 hover:bg-slate-700' : 'bg-amber-600 hover:bg-amber-700'} text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${!isOpen ? 'animate-pulse' : ''}`}
        aria-label="Toggle social media menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default WhatsAppFloat;