import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '../constants';

const NotFoundPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 text-center">
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl max-w-lg mx-auto">
        <h1 className="text-6xl font-bold text-amazon-yellow mb-4">404</h1>
        <h2 className="text-4xl font-semibold text-gray-800 mb-3">Oops! Page Not Found.</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to={ROUTE_PATHS.HOME} 
          className="bg-amazon-DEFAULT text-white font-semibold py-3 px-8 rounded-md hover:bg-amazon-light_blue transition duration-200"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;