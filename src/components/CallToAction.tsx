
import React from 'react';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-exinos-gold/10 to-exinos-beige">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-exinos-black mb-6">
            Need something custom?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Have a unique digital solution in mind? We love bringing creative ideas to life. 
            Let's discuss how we can help you create something truly special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-exinos-gold hover:bg-exinos-gold/90 text-white font-medium px-8 py-3 text-lg"
            >
              Get in Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-exinos-gold text-exinos-gold hover:bg-exinos-gold hover:text-white px-8 py-3 text-lg"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
