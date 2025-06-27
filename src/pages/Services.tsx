
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import WhyChooseUs from '../components/WhyChooseUs';
import CallToAction from '../components/CallToAction';
import { Smartphone, CreditCard, Menu, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Smartphone className="w-12 h-12 text-exinos-gold" />,
      title: 'QR Profile Sharing',
      description: 'Create shareable digital identity pages with QR access. Ideal for professionals and creators.',
      features: ['Instant Contact Sharing', 'Social Media Integration', 'Analytics Dashboard'],
      available: true
    },
    {
      id: 2,
      icon: <CreditCard className="w-12 h-12 text-exinos-gold" />,
      title: 'Smart NFC Business Cards',
      description: 'Custom-designed physical cards with digital profiles embedded. Tap to share contact, links, portfolios.',
      features: ['Tap to Share', 'Custom Branding', 'Real-time Updates'],
      available: true
    },
    {
      id: 3,
      icon: <Menu className="w-12 h-12 text-exinos-gold" />,
      title: 'Digital Menu System',
      description: 'Restaurants can manage live menus online with availability and promos. Great for QR table menu setups.',
      features: ['QR Code Access', 'Live Updates', 'Multi-language Support'],
      available: true
    },
    {
      id: 4,
      icon: <Clock className="w-12 h-12 text-gray-400" />,
      title: 'Coming Soon',
      description: 'We\'re working on exciting new digital solutions. Stay tuned for more innovative services.',
      features: ['Innovation in Progress', 'Custom Solutions', 'Stay Updated'],
      available: false
    }
  ];

  return (
    <div className="min-h-screen font-inter bg-exinos-beige">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-exinos-beige to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-exinos-black mb-6">
              Our Digital Services
            </h1>
            <p className="text-xl md:text-2xl text-exinos-gold mb-8 font-light">
              Bringing innovation to the art of gifting
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bridge the gap between traditional craftsmanship and modern technology with our innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Call to Action */}
      <CallToAction />

      <Footer />
    </div>
  );
};

export default Services;
