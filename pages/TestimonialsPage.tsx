import React from 'react';
import { MOCK_TESTIMONIALS } from '../constants'; // Import your master list
import StarRating from '../components/StarRating'; // Import your StarRating component

const TestimonialsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800">What Our Customers Say</h1>
        <p className="text-lg text-gray-600 mt-2">Real reviews from our happy customers.</p>
      </div>
      
      {/* Grid to display all testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_TESTIMONIALS.map(testimonial => (
          <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
            <img 
              src={testimonial.imageUrl} 
              alt={testimonial.name} 
              className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-md" 
            />
            <p className="text-gray-600 italic mt-6 flex-grow">"{testimonial.quote}"</p>
            <div className="mt-4">
              <StarRating rating={testimonial.rating} />
              <p className="font-bold text-lg mt-2 text-gray-800">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;