import { useState, useEffect, useRef } from "react";
import { Award, Users, Shield, TrendingUp, Clock, Star } from "lucide-react";

const WhyWorkWithUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      icon: Award,
      title: "Market Leaders",
      description: "Kenya's #1 luxury real estate brokerage with unmatched expertise in Nairobi's elite neighborhoods.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      delay: "0s"
    },
    {
      icon: Users,
      title: "Exclusive Network",
      description: "Access to off-market properties and exclusive listings not available to the general public.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop",
      delay: "0.2s"
    },
    {
      icon: Shield,
      title: "Trusted Expertise",
      description: "12+ years of proven success with Kenya's most discerning luxury property clients.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      delay: "0.4s"
    },
    {
      icon: TrendingUp,
      title: "Premium Results",
      description: "Average sale price 15% above market value through strategic positioning and negotiation.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      delay: "0.6s"
    },
    {
      icon: Clock,
      title: "White-Glove Service",
      description: "24/7 dedicated support with personalized attention throughout your property journey.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      delay: "0.8s"
    },
    {
      icon: Star,
      title: "Elite Clientele",
      description: "Serving Kenya's most successful entrepreneurs, executives, and international investors.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      delay: "1s"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="text-center mb-16">
          <div className={`inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            WHY CHOOSE LUXURY ESTATES KENYA
          </div>
          <h2 className={`text-4xl lg:text-6xl font-light text-slate-900 mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Why Work <span className="font-bold text-amber-600">With Us?</span>
          </h2>
          <p className={`text-xl text-slate-600 max-w-3xl mx-auto font-light transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Experience the difference of working with Kenya's most trusted luxury real estate experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: isVisible ? reason.delay : '0s',
                animationDelay: reason.delay
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={reason.image} 
                  alt={reason.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-slate-900 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-light text-white mb-4">
              Ready to Experience <span className="font-bold text-amber-400">Luxury Service?</span>
            </h3>
            <p className="text-slate-300 mb-6 text-lg">
              Join Kenya's most successful property investors and homeowners
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Start Your Property Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;