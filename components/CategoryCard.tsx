
import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';
import { ROUTE_PATHS } from '../constants';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`${ROUTE_PATHS.PRODUCTS}/${category.slug}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
        <img src={category.imageUrl} alt={category.name} className="w-full h-40 object-cover"/>
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-amazon-link">{category.name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
