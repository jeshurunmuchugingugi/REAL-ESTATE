import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import officeImage from "@/assets/office-cleaning.jpg";
import houseImage from "@/assets/house-cleaning.jpg";

const projects = [
    {
      image: officeImage,
      category: "Office Cleaning",
      title: "Riverside Company Office",
      description: "Complete office cleaning solution"
    },
    {
      image: houseImage,
      category: "Kitchen Cleaning", 
      title: "Rivanta Apartment Kitchen",
      description: "Deep kitchen cleaning service"
    },
    {
      image: officeImage,
      category: "House Cleaning",
      title: "Luxury Bungalow Cleaning",
      description: "Full residential cleaning"
    },
    {
      image: houseImage,
      category: "Kitchen Cleaning",
      title: "Modern Kitchen Cleaning", 
      description: "Professional kitchen maintenance"
    },
    {
      image: officeImage,
      category: "Office Cleaning",
      title: "Corporate Tower Cleaning",
      description: "Large-scale office maintenance"
    },
    {
      image: houseImage,
      category: "House Cleaning",
      title: "Family Home Cleaning",
      description: "Regular residential service"
    },
    {
      image: officeImage,
      category: "Deep Cleaning",
      title: "Post-Construction Cleanup",
      description: "Complete construction cleanup"
    },
    {
      image: houseImage,
      category: "Glass Cleaning",
      title: "High-Rise Window Cleaning",
      description: "Professional window service"
    }
  ];

const Projects = () => {
  return (
    <section id="projects" className="bg-muted/30 py-12 lg:py-16 mb-16 scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="text-center mb-8">
          <p className="text-primary text-sm font-medium mb-4">— Latest Projects</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Explore Our Portfolio of
            <br />
            <span className="text-primary">Completed Projects</span>
          </h2>
          <div className="inline-flex items-center gap-3 text-yellow-600 font-bold">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-yellow-500 to-yellow-600"></div>
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">View All Projects</span>
            <div className="w-12 h-px bg-gradient-to-r from-yellow-600 via-yellow-500 to-transparent"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </div>
                <div className="absolute bottom-3 right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm text-foreground mb-1 line-clamp-1">{project.title}</h3>
                <p className="text-muted-foreground text-xs line-clamp-2">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;