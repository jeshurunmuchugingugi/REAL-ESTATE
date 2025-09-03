import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Clock } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Expertise",
      description: "15+ years of proven success in the real estate market with thousands of satisfied clients."
    },
    {
      icon: Award,
      title: "Award-Winning Service",
      description: "Recognized industry leader with multiple awards for excellence in customer service and sales."
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Professional agents who are committed to understanding your needs and exceeding expectations."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Always available to answer questions and provide guidance throughout your real estate journey."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-amber-600 text-white">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Why Choose RealEstate Pro?</h2>
          <p className="text-2xl text-amber-100 max-w-2xl mx-auto font-medium">
            We're not just another real estate company. Here's what sets us apart from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-lg text-amber-100 leading-relaxed font-medium">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Ready to Experience the Difference?</h3>
            <p className="text-amber-100 mb-8 text-xl font-medium">
              Join thousands of satisfied clients who have trusted us with their real estate needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-amber-600 hover:bg-gray-100 font-bold px-12 py-4 text-xl rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Started Today
              </button>
              <button 
                onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-3 border-white text-white hover:bg-white hover:text-amber-600 font-bold px-12 py-4 text-xl rounded-lg transition-all duration-300 hover:scale-105"
              >
                View Properties
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;