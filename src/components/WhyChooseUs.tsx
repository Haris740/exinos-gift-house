
import React from 'react';
import { DollarSign, Palette, Heart } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-exinos-gold" />,
      title: 'Affordable',
      description: 'Premium quality at competitive prices'
    },
    {
      icon: <Palette className="w-8 h-8 text-exinos-gold" />,
      title: 'Customizable',
      description: 'Tailored solutions for your unique needs'
    },
    {
      icon: <Heart className="w-8 h-8 text-exinos-gold" />,
      title: 'Built with Care',
      description: 'Crafted by Exinos with attention to detail'
    }
  ];

  return (
    <section className="py-20 bg-exinos-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-exinos-black mb-4">
            Why Choose Our Digital Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine traditional craftsmanship values with modern digital innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-exinos-black mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <blockquote className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-lg text-gray-700 italic mb-4">
              "The NFC business cards from Exinos transformed how I network. Professional, modern, and incredibly convenient!"
            </p>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-exinos-gold rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <p className="font-medium text-exinos-black">Maria Rodriguez</p>
                <p className="text-sm text-gray-500">Marketing Director</p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
