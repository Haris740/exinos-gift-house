
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Exinos transformed our corporate gifting experience. The quality and attention to detail in every piece is exceptional. Our employees cherish their custom awards.",
      author: "Sarah Johnson",
      position: "HR Director",
      company: "TechCorp Solutions",
      product: "Custom Trophy Collection",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "The NFC business cards revolutionized our networking. We can update our information instantly and track engagement. It's the future of professional networking.",
      author: "Michael Chen",
      position: "Marketing Manager",
      company: "Creative Agency",
      product: "Smart NFC Business Cards",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Every memento tells a story. Exinos helped us create beautiful keepsakes for our anniversary celebration that our guests will treasure forever.",
      author: "Emma Rodriguez",
      position: "Event Coordinator",
      company: "Celebration Events",
      product: "Custom Memento Design",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-exinos-light-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-exinos-black mb-4">
            Stories from Our Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped create meaningful connections and memorable experiences for businesses and individuals alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-exinos-gold"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-exinos-gold text-4xl mb-4">"</div>
                  <p className="text-gray-700 italic leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-exinos-black">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.position} at {testimonial.company}
                    </p>
                    <p className="text-xs text-exinos-gold mt-1">
                      {testimonial.product}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
