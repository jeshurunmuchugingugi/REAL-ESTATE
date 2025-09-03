import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-600/20 border border-amber-500/30 rounded-full mb-6">
            <span className="text-amber-300 text-sm font-medium">CONTACT US</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-light mb-6">
            Ready to Discover Your
            <br />
            <span className="font-bold text-amber-400">Luxury Property?</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
            Connect with Kenya's premier luxury real estate experts. We're here to guide you through 
            Nairobi's most exclusive property market.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Call Our Brokers</div>
                    <div className="text-slate-300">0792 530 530 / 0798 260 260</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Email Us</div>
                    <div className="text-slate-300">info@luxuryestateskenya.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Visit Our Office</div>
                    <div className="text-slate-300">Lavington, Nairobi</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Business Hours</div>
                    <div className="text-slate-300">Mon-Fri: 8AM-7PM, Sat: 9AM-5PM</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-600/10 border border-amber-500/20 rounded-xl p-6">
              <h4 className="text-lg font-medium text-amber-400 mb-3">Follow Our Exclusive Listings</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:bg-amber-700 transition-colors">
                  IG
                </div>
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:bg-amber-700 transition-colors">
                  X
                </div>
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:bg-amber-700 transition-colors">
                  YT
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-white border-0 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light text-slate-900 mb-6">Schedule a Private Viewing</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
                
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
                />
                
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
                />
                
                <select className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:border-amber-500">
                  <option value="">I'm interested in...</option>
                  <option value="buying">Buying Luxury Property</option>
                  <option value="selling">Selling My Property</option>
                  <option value="investing">Investment Opportunities</option>
                  <option value="valuation">Property Valuation</option>
                </select>
                
                <textarea
                  placeholder="Tell us about your luxury property requirements..."
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-amber-500 resize-none"
                ></textarea>
                
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-4 text-lg border-0">
                  Schedule Private Consultation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;