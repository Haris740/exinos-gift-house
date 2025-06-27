
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  available: boolean;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card
      className={`group hover:shadow-xl transition-all duration-300 hover:border-exinos-gold border-2 border-transparent bg-gradient-to-br from-white to-exinos-beige h-full ${
        !service.available ? 'opacity-75' : ''
      }`}
    >
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4">
          {service.icon}
        </div>
        <CardTitle className={`text-2xl font-bold ${
          service.available ? 'text-exinos-black' : 'text-gray-500'
        }`}>
          {service.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center flex flex-col h-full">
        <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="text-sm text-gray-500 flex items-center justify-center">
              <span className={`w-2 h-2 rounded-full mr-2 ${
                service.available ? 'bg-exinos-gold' : 'bg-gray-400'
              }`}></span>
              {feature}
            </li>
          ))}
        </ul>
        <Button
          variant="outline"
          className={`w-full transition-colors duration-200 ${
            service.available
              ? 'border-exinos-gold text-exinos-gold hover:bg-exinos-gold hover:text-white'
              : 'border-gray-400 text-gray-400 cursor-not-allowed'
          }`}
          disabled={!service.available}
        >
          {service.available ? 'Learn More' : 'Stay Tuned'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
