const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="bg-background py-16 lg:py-20 mb-16 scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            {/* EDIT: Section label */}
            <p className="text-primary text-sm font-medium animate-fade-in">— Why Choose Us</p>
            
            {/* EDIT: Features section heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground animate-fade-in">
              Choose Our <span className="text-primary">Green</span>
              <br />
              <span className="text-primary">Friendly Solutions</span>
            </h2>
            
            {/* EDIT: Description paragraph */}
            <p className="text-muted-foreground leading-relaxed mb-0 animate-fade-in">
              We are committed to providing eco-friendly cleaning solutions that protect your family, 
              pets, and the environment. Our green cleaning products are just as effective as traditional 
              chemicals but without the harmful side effects.We are committed to providing eco-friendly cleaning solutions that protect your family, 
              pets, and the environment. Our green cleaning products are just as effective as traditional 
              chemicals but without the harmful side effects.We are committed to providing eco-friendly cleaning solutions that protect your family, 
              pets, and the environment. 
            </p>
            
            {/* EDIT: Subtitle */}
            <h5 className="text-primary mt-0 font-semibold italic animate-fade-in">Sustainable & Safe Cleaning</h5>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative w-full max-w-xl min-h-[400px] mx-auto lg:mx-0">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                alt="Eco-friendly cleaning products" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl border-4 border-accent/30 shadow-xl"></div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg animate-bounce-in">
                <span className="text-primary-foreground font-bold">✓</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-accent rounded-full shadow-lg animate-bounce-in"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;