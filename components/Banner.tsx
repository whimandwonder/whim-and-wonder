import React from 'react';
import { Link } from 'react-router-dom'; // <-- STEP 1: ADD THIS IMPORT

interface BannerProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  buttonText?: string;
  buttonLink?: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, imageUrl, buttonText, buttonLink }) => {
  return (
    <div 
      className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden h-64 md:h-96" 
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-6">
        {/* The title and subtitle remain exactly the same */}
        {title && <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">{title}</h1>}
        {subtitle && <p className="text-lg md:text-xl text-gray-200 mb-6">{subtitle}</p>}
        
        {/* This is the part that changes */}
        {buttonText && buttonLink && (
          // STEP 2: Change the <a> tag to the <Link> component
          // STEP 3: Change the 'href' attribute to 'to'
          <Link
            to={buttonLink} 
            className="bg-amazon-yellow text-amazon-DEFAULT font-semibold py-3 px-8 rounded-md hover:bg-opacity-90 transition duration-300 text-lg"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Banner;