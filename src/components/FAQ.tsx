import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I know if it's the right time to buy a home?",
      answer: "The right time depends on your financial situation, credit score, job stability, and local market conditions. Our experts can help assess your readiness and guide you through the process."
    },
    {
      question: "What's the difference between pre-qualification and pre-approval?",
      answer: "Pre-qualification is an estimate based on self-reported information, while pre-approval involves verification of your financial documents and gives you a more accurate borrowing amount."
    },
    {
      question: "How much should I offer on a house?",
      answer: "Your offer should be based on comparable sales, market conditions, property condition, and your budget. We'll help you craft a competitive offer that protects your interests."
    },
    {
      question: "What are closing costs and how much should I expect to pay?",
      answer: "Closing costs typically range from 2-5% of the home's purchase price and include fees for inspections, appraisals, title insurance, and loan processing."
    },
    {
      question: "How long does it take to sell a house?",
      answer: "The average time varies by market conditions, but typically ranges from 30-60 days. Proper pricing, staging, and marketing can significantly impact the timeline."
    },
    {
      question: "Do I need a real estate agent to buy or sell?",
      answer: "While not legally required, a qualified agent provides market expertise, negotiation skills, and handles complex paperwork, often saving you time and money."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about buying, selling, and investing in real estate.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <Card className="bg-blue-600 text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                <p className="text-blue-100 mb-6">
                  Our expert team is here to help you with any questions about your real estate journey.
                </p>
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3"
                >
                  Contact Our Experts
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;