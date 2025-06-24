import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import TestimonialCard from '../components/TestimonialCard';
import { MOCK_PRODUCTS, MOCK_CATEGORIES, MOCK_TESTIMONIALS, ROUTE_PATHS } from '../constants';

const HomePage: React.FC = () => {
  // Your original sections are preserved
  const featuredProducts = MOCK_PRODUCTS.filter(p => p.isFeatured).slice(0, 4);
  const trendingProducts = MOCK_PRODUCTS.filter(p => p.isTrending).slice(0, 4);
  const topSellers = MOCK_PRODUCTS.filter(p => p.isTopSeller).slice(0, 5);
  const newArrivals = MOCK_PRODUCTS.filter(p => p.isNew).slice(0, 5);

  return (
    <div className="space-y-12 my-8">
      {/* Banner Section (Remains at the top) */}
      <Banner 
        title="Discover Whim & Wonder"
        subtitle="Unique finds for every corner of your life. Explore our latest arrivals"
        imageUrl="/images/final-whim.jpg"
        buttonText="Shop Now"
        buttonLink={ROUTE_PATHS.PRODUCTS}
      />

      {/* --- 1. Categories Section (MOVED TO THE TOP) --- */}
      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {MOCK_CATEGORIES.map(category => (<CategoryCard key={category.id} category={category} />))}
        </div>
      </section>

      {/* --- 2. Top Selling Products Section (IN CORRECT ORDER) --- */}
      {topSellers.length > 0 && (
        <section className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Top Selling Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {topSellers.map(product => (<ProductCard key={product.id} product={product} />))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products?filter=top-selling" className="bg-amazon-yellow text-white font-semibold py-3 px-8 rounded hover:opacity-90 transition">View More</Link>
          </div>
        </section>
      )}

      {/* --- 3. New Arrivals Section (IN CORRECT ORDER) --- */}
      {newArrivals.length > 0 && (
        <section className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {newArrivals.map(product => (<ProductCard key={product.id} product={product} />))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products?filter=new-arrivals" className="bg-amazon-yellow text-white font-semibold py-3 px-8 rounded hover:opacity-90 transition">View More</Link>
          </div>
        </section>
      )}
      
      {/* --- Other sections remain below, as requested --- */}
      
      {/* Featured Products Section */}
      {featuredProducts.length > 0 && (
        <section className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (<ProductCard key={product.id} product={product} />))}
          </div>
          <div className="text-center mt-8">
              <Link to={ROUTE_PATHS.PRODUCTS} className="bg-amazon-yellow text-white font-semibold py-2 px-6 rounded hover:opacity-90 transition duration-200">
                  View All Products
              </Link>
          </div>
        </section>
      )}

      {/* Trending Products Section */}
      {trendingProducts.length > 0 && (
         <section className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Trending Now</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map(product => (<ProductCard key={product.id} product={product} />))}
            </div>
        </section>
      )}
      
      {/* Testimonials Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MOCK_TESTIMONIALS.slice(0, 3).map(testimonial => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
            </div>
            <div className="text-center mt-10">
            <Link to="/reviews" className="bg-amazon-yellow text-white font-bold py-3 px-8 rounded-md hover:opacity-90 transition-transform duration-200 hover:scale-105">
                View More Reviews
            </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;