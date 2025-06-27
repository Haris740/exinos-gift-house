
import React from 'react';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-exinos-beige/30 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-exinos-black mb-6">
              About Exinos
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Exinos Gift House, we believe every gift should tell a story. Founded on the principle of combining 
              traditional craftsmanship with modern innovation, we create memorable experiences that last a lifetime.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our master craftsmen work alongside digital innovators to ensure every piece meets the highest standards 
              of quality. From custom engravings to smart technology integration, we bridge the gap between heritage 
              and the future.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-exinos-gold mb-2">500+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-exinos-gold mb-2">50+</h3>
                <p className="text-gray-600">Product Designs</p>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-exinos-gold hover:bg-exinos-gold/90 text-white font-medium px-8 py-3"
            >
              Our Story
            </Button>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=400&fit=crop&crop=center"
                alt="Craftsman at work"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=300&h=400&fit=crop&crop=center"
                alt="Elegant workspace"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-exinos-gold/20 rounded-full"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-exinos-black/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
