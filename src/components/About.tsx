const About = () => {
  const stats = [
    { number: "500+", label: "Luxury Properties Sold" },
    { number: "12+", label: "Years in Nairobi Market" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="bg-slate-50 py-20 scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=face" 
              alt="Principal Broker" 
              className="w-full h-[700px] object-cover"
            />
          </div>

          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
              ABOUT THE BROKERAGE
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-light text-slate-900">
              Kenya's <span className="font-bold text-amber-600">Premier Luxury</span>
              <br />
              Real Estate Brokerage
            </h2>
            
            <p className="text-2xl text-slate-600 leading-relaxed font-medium">
              Professional real estate brokerage serving buyers and sellers of luxury property 
              in Kenya's upmarket suburbs. We are the undisputed leaders in Nairobi's elite 
              neighborhoods, delivering unmatched expertise and exclusive access to the finest properties.
            </p>

            <div className="grid grid-cols-3 gap-8 py-6">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-amber-600">{stat.number}</div>
                  <div className="text-lg text-slate-600 font-bold mt-2">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="border-l-4 border-amber-600 pl-6">
              <div className="text-2xl font-bold text-slate-900 mb-3">James Mwangi</div>
              <div className="text-xl text-amber-600 font-bold mb-4">Principal Broker & CEO</div>
              <p className="text-lg text-slate-600 italic font-medium">
                "We don't just sell properties; we curate lifestyles for Kenya's most discerning clients."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;