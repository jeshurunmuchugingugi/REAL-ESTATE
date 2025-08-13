import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-primary rounded-full"></div>
              </div>
              <span className="text-xl font-bold">Cleaning</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Professional cleaning services for your home and office. 
              We deliver quality results with eco-friendly solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#projects" className="text-primary-foreground/80 hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">House Cleaning</li>
              <li className="text-primary-foreground/80">Office Cleaning</li>
              <li className="text-primary-foreground/80">Kitchen Cleaning</li>
              <li className="text-primary-foreground/80">Glass Cleaning</li>
              <li className="text-primary-foreground/80">Furniture Cleaning</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">(408) 555-0120</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">example@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">123 Cleaning St, Service City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>&copy; 2024 Cleaning Service. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;