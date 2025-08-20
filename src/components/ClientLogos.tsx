const ClientLogos = () => {
  const clients = [
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Google", logo: "https://logo.clearbit.com/google.com" },
    { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
    { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
    { name: "Netflix", logo: "https://logo.clearbit.com/netflix.com" },
    { name: "Spotify", logo: "https://logo.clearbit.com/spotify.com" },
    { name: "Airbnb", logo: "https://logo.clearbit.com/airbnb.com" },
    { name: "Uber", logo: "https://logo.clearbit.com/uber.com" },
    { name: "Tesla", logo: "https://logo.clearbit.com/tesla.com" },
    { name: "Nike", logo: "https://logo.clearbit.com/nike.com" }
  ];

  return (
    <section className="bg-yellow-00 py-4 mb-4 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="text-center mb-4">
          <p className="text-black text-sm font-medium mb-1">— Trusted By —</p>
          <h3 className="text-xl font-bold text-yellow-400">
            Leading <span className="text-yellow-400">Organizations</span>
          </h3>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 mx-12 flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity filter brightness-0"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 mx-12 flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity filter brightness-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;