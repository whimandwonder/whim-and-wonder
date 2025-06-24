import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import StarRating from './StarRating';
import { CartContext } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product, 1);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-transform duration-300 hover:scale-105">
      <Link to={`/product/${product.slug}`} className="block relative">
        {product.originalPrice && product.originalPrice > product.price && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </div>
        )}
        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover"/>
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/product/${product.slug}`} className="block">
          <h3 className="text-lg font-semibold text-gray-800 hover:text-amazon-yellow mb-1 truncate" title={product.name}>{product.name}</h3>
        </Link>
        {product.subcategory && (
            <p className="text-xs text-gray-500 mb-2">{product.subcategory}</p>
        )}
        <div className="flex items-center mb-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-gray-500 ml-2">({product.reviews} reviews)</span>
        </div>
        
        <div className="flex items-baseline gap-2 mb-2">
            <p className="text-xl font-bold text-gray-900">₹{product.price}</p>
            {product.originalPrice && product.originalPrice > product.price && (
                <p className="text-sm text-gray-500 line-through">₹{product.originalPrice}</p>
            )}
        </div>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-grow">{product.description}</p>
        
        <button
          onClick={handleAddToCart}
          className="mt-auto w-full bg-amazon-yellow text-white font-semibold py-2 px-4 rounded hover:opacity-90 transition duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;