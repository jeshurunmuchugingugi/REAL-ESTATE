import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much do your cleaning services cost?",
      answer: "Our pricing varies based on the size of your space, type of cleaning needed, and frequency. We offer competitive rates starting from KSh 2,500 for basic house cleaning. Contact us for a free, personalized quote."
    },
    {
      question: "Do you bring your own cleaning supplies and equipment?",
      answer: "Yes, we bring all necessary cleaning supplies and professional-grade equipment. We use eco-friendly, non-toxic products that are safe for your family and pets. If you prefer us to use your specific products, just let us know."
    },
    {
      question: "How do I schedule a cleaning service?",
      answer: "You can schedule through our website contact form, call us at (408) 555-0120, or WhatsApp us. We offer flexible scheduling including same-day service when available. We work around your schedule, including evenings and weekends."
    },
    {
      question: "Are your cleaners insured and background-checked?",
      answer: "Absolutely! All our cleaning professionals are fully insured, bonded, and have undergone thorough background checks. We prioritize your safety and security, and our insurance covers any potential damages during service."
    },
    {
      question: "What if I'm not satisfied with the cleaning?",
      answer: "We offer a 100% satisfaction guarantee. If you're not completely happy with our service, contact us within 24 hours and we'll return to re-clean the areas of concern at no additional cost."
    },
    {
      question: "How often should I schedule cleaning services?",
      answer: "This depends on your lifestyle and needs. Most clients schedule weekly or bi-weekly cleaning for regular maintenance. Monthly deep cleaning is popular for busy households. We can help you determine the best schedule during consultation."
    },
    {
      question: "Do you offer emergency or same-day cleaning?",
      answer: "Yes, we provide emergency and same-day cleaning services when our schedule allows. There may be an additional rush fee for same-day requests. Contact us as early as possible for the best availability."
    },
    {
      question: "What areas do you clean in a standard house cleaning?",
      answer: "Our standard service includes all bedrooms, bathrooms, kitchen, living areas, and common spaces. We dust, vacuum, mop, sanitize surfaces, clean appliances, and take out trash. Deep cleaning includes inside appliances, baseboards, and detailed work."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-background py-12 lg:py-16 mb-12 scroll-mt-20">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium mb-4">— Frequently Asked Questions</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Got <span className="text-primary">Questions?</span>
            <br />
            <span className="text-primary">We Have Answers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to the most common questions about our cleaning services, 
            pricing, and policies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left hover:bg-muted/50 transition-colors flex items-center justify-between"
                >
                  <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <p className="text-sm">
            Contact us at <span className="text-primary font-semibold">(408) 555-0120</span> or 
            <span className="text-primary font-semibold"> vineworld050@gmail.com</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;