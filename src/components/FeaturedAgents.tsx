import { ArrowRight } from "lucide-react";

const FeaturedAgents = () => {
  const agents = [
    {
      name: "James Mwangi",
      title: "Principal Broker",
      award: "Emerald Circle 2025 Agent",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "Sarah Wanjiku",
      title: "Senior Agent",
      award: "GoldClub Agent",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "David Kimani",
      title: "Luxury Specialist",
      award: "GoldClub Agent",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "Grace Njeri",
      title: "Property Consultant",
      award: "GoldClub Agent",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Ochieng",
      title: "Investment Advisor",
      award: "GoldClub Agent",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section className="pt-2 pb-16 bg-white">
      <div className="w-full px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-6xl font-bold text-gray-900 mb-8 animate-pulse">Featured Agents</h2>
            <div className="text-xl font-bold text-gray-600">
              <span className="text-amber-600 border-b-2 border-amber-600 pb-2">AGENTS</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="w-14 h-14 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-amber-600 transition-colors">
              <ArrowRight className="h-6 w-6 rotate-180" />
            </button>
            <button className="w-14 h-14 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-amber-600 transition-colors">
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {agents.map((agent, index) => (
            <div key={index} className="group">
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img 
                  src={agent.image} 
                  alt={agent.name}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{agent.name}</h3>
                <p className="text-xl text-gray-600 mb-4 font-medium">{agent.title}</p>
                <p className="text-lg text-amber-600 font-bold mb-6">{agent.award}</p>
                <button className="text-xl font-bold text-gray-900 hover:text-amber-600 transition-colors border-b-2 border-transparent hover:border-amber-600 pb-2 transform hover:scale-105 duration-300">
                  VIEW MY BIO
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAgents;