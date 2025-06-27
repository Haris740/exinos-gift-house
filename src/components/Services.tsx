
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: 'QR Profile Sharing',
      description: 'Create dynamic QR codes that instantly share your contact information, social media, and portfolio with anyone.',
      icon: '📱',
      features: ['Instant Contact Sharing', 'Social Media Integration', 'Analytics Dashboard']
    },
    {
      title: 'Smart NFC Business Cards',
      description: 'Modern networking solution that lets you share your professional information with just a tap.',
      icon: '💳',
      features: ['Tap to Share', 'Custom Branding', 'Real-time Updates']
    },
    {
      title: 'Digital Restaurant Menus',
      description: 'Interactive QR-based menus that enhance customer experience and streamline ordering.',
      icon: '🍽️',
      features: ['QR Code Access', 'Easy Updates', 'Multi-language Support']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-exinos-black mb-4">
            Go Digital with Exinos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We help businesses and creators share their identity through modern tools. 
            Bridge the gap between traditional networking and digital innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 hover:border-exinos-gold border-2 border-transparent bg-gradient-to-br from-white to-exinos-beige"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-exinos-black">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center justify-center">
                      <span className="w-2 h-2 bg-exinos-gold rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-exinos-gold text-exinos-gold hover:bg-exinos-gold hover:text-white transition-colors duration-200"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-exinos-gold hover:bg-exinos-gold/90 text-white font-medium px-8 py-3 text-lg"
          >
            Explore All Digital Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
