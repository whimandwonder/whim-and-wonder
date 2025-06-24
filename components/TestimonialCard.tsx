import React from 'react';
import { Testimonial } from '../types';
import StarRating from './StarRating';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  // This code correctly uses a 'testimonial' object, which has 'name' and 'quote'.
  // It does NOT look for a 'slug' or 'price', which prevents the crash.
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center h-full">
      <img
        src={testimonial.imageUrl}
        alt={testimonial.name}
        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow-lg"
      />
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>
      <blockquote className="text-gray-600 italic mb-4 flex-grow">
        "{testimonial.quote}"
      </blockquote>
      <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
    </div>
  );
};

export default TestimonialCard;