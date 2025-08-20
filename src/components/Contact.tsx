import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    phone: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, show success message. Email functionality requires Supabase
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours with a personalized quote.",
    });
    setFormData({
      name: "",
      email: "", 
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in your cleaning services. ${formData.service ? `Service needed: ${formData.service}` : ''}`
    );
    window.open(`https://wa.me/+254721867609?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="bg-background py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-primary text-sm font-medium mb-4">— Get In Touch</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Get Your <span className="text-primary">Free Quote</span>
            <br />
            <span className="text-primary">Today!</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to experience professional cleaning? Fill out the form below or contact us directly 
            for a personalized quote tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="animate-slide-in-left">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Request Your Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Required *</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full mt-1 px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="house-cleaning">House Cleaning</option>
                    <option value="office-cleaning">Office Cleaning</option>
                    <option value="kitchen-cleaning">Kitchen Cleaning</option>
                    <option value="glass-cleaning">Glass Cleaning</option>
                    <option value="furniture-cleaning">Furniture Cleaning</option>
                    <option value="deep-cleaning">Deep Cleaning</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your cleaning needs, property size, frequency, etc."
                    rows={4}
                    className="mt-1"
                  />
                </div>

                <div className="flex gap-4">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-3"
                  >
                    Get Free Quote
                  </Button>
                  <Button
                    type="button"
                    onClick={handleWhatsApp}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-primary-foreground/80">(408) 555-0120</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-primary-foreground/80">customercare@cleaningservice.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-primary-foreground/80">123 Cleaning Street, Service City, SC 12345</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-bold text-foreground mb-4">Why Choose Us?</h4>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Free quotes within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Fully insured and bonded</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Eco-friendly cleaning solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">100% satisfaction guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;