import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const SocialBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>Follow us:</span>
            <div className="flex gap-3">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <span>📞 (408) 555-0120 | ✉️ vineworld050@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialBar;