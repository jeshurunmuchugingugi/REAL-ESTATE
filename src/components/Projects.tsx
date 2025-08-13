import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import officeImage from "@/assets/office-cleaning.jpg";
import houseImage from "@/assets/house-cleaning.jpg";

const Projects = () => {
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
      title: "Modern Bungalow Kitchen Cleaning", 
      description: "Professional kitchen maintenance"
    }
  ];

  return (
    <section id="projects" className="bg-muted/30 py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium mb-4">— Latest Projects</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Explore Our Portfolio of
            <br />
            <span className="text-primary">Completed Projects</span>
          </h2>
          <Button className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold">
            View All Projects
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;