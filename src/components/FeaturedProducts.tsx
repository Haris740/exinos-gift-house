
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturedProducts = () => {
  const products = [
    {
      name: 'Premium Trophy',
      description: 'Elegant awards for special achievements',
      image: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop&crop=center',
      price: 'From ₹25'
    },
    {
      name: 'Custom Memento',
      description: 'Personalized keepsakes for memorable moments',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop&crop=center',
      price: 'From ₹15'
    },
    {
      name: 'Smart NFC Card',
      description: 'Digital business cards with instant sharing',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center',
      price: 'From ₹12'
    },
    {
      name: 'Engraved Plaque',
      description: 'Professional recognition and commemoration',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
      price: 'From ₹30'
    },
    {
      name: 'Designer Keychain',
      description: 'Stylish accessories with personal touch',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop&crop=center',
      price: 'From ₹8'
    },
    {
      name: 'Custom Nameplate',
      description: 'Professional desk accessories and signage',
      image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=300&fit=crop&crop=center',
      price: 'From ₹20'
    }
  ];

  return (
    <section id="products" className="py-20 bg-exinos-light-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-exinos-black mb-4">
            Featured Gift Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of premium gifts, each crafted with attention to detail and designed to create lasting memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.name}
              className="group hover:shadow-xl transition-all duration-300 hover:border-exinos-gold border-2 border-transparent bg-white"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-bold text-exinos-black mb-2">
                  {product.name}
                </CardTitle>
                <p className="text-gray-600 mb-3">{product.description}</p>
                <p className="text-exinos-gold font-semibold text-lg">{product.price}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  variant="outline"
                  className="w-full border-exinos-gold text-exinos-gold hover:bg-exinos-gold hover:text-white transition-colors duration-200"
                >
                  View More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
