
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mouse, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-exinos-beige to-white flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-exinos-black mb-6">
            Exinos Gift House
          </h1>
          <p className="text-2xl md:text-3xl text-exinos-gold mb-8 font-light">
            Where stories begin
          </p>
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover premium gifts that celebrate life's precious moments. 
            From custom craftsmanship to modern digital solutions, we help you create lasting memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-exinos-gold hover:bg-exinos-gold/90 text-white font-medium px-8 py-3 text-lg">
              Shop Gifts Now
            </Button>
            <Button variant="outline" size="lg" className="border-exinos-gold text-exinos-gold hover:bg-exinos-gold hover:text-white px-8 py-3 text-lg">
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center">
          <p className="text-sm text-gray-500 mb-2">Scroll to explore</p>
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-exinos-gold" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
