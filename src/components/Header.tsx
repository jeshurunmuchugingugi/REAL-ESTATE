import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background shadow-lg sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(408) 555-0120</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>example@gmail.com</span>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center text-xs text-accent-foreground">f</div>
            <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center text-xs text-accent-foreground">t</div>
            <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center text-xs text-accent-foreground">i</div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-accent rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-primary">Cleaning</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="text-foreground hover:text-primary font-medium transition-colors">Home</button>
            <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="text-foreground hover:text-primary font-medium transition-colors">Services</button>
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="text-foreground hover:text-primary font-medium transition-colors">Projects</button>
            <button onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })} className="text-foreground hover:text-primary font-medium transition-colors">Testimonials</button>
            <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-foreground hover:text-primary font-medium transition-colors">About Us</button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-foreground hover:text-primary font-medium transition-colors">Contact Us</button>
          </nav>

          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;