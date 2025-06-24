import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { MOCK_PRODUCTS, MOCK_CATEGORIES } from '../constants';

const ProductListingPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug?: string }>();

  // --- NEW STATES FOR NEW FILTERS ---
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
  
  // --- EXISTING STATES ---
  const [priceRange, setPriceRange] = useState<number>(20000);
  const [rating, setRating] = useState<number>(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // --- NEW: DYNAMICALLY FIND SUB-CATEGORIES FOR THE CURRENT VIEW ---
  const availableSubcategories = useMemo(() => {
    let products = MOCK_PRODUCTS;
    if (categorySlug) {
      const category = MOCK_CATEGORIES.find(cat => cat.slug === categorySlug);
      if (category) {
        products = MOCK_PRODUCTS.filter(p => p.category === category.name);
      }
    }
    const subcategories = products
      .map(p => p.subcategory)
      .filter((sub): sub is string => !!sub);
    return [...new Set(subcategories)]; // Return a unique list
  }, [categorySlug]);


  // --- UPDATED FILTERING LOGIC TO INCLUDE ALL FILTERS ---
  const filteredProducts = useMemo(() => {
    let productsToFilter = MOCK_PRODUCTS;

    // 1. Filter by category from URL (your existing logic)
    if (categorySlug) {
      const category = MOCK_CATEGORIES.find(cat => cat.slug === categorySlug);
      if (category) {
        productsToFilter = productsToFilter.filter(p => p.category === category.name);
      } else {
        return [];
      }
    }
    
    // 2. NEW: Filter by search term (checks name, tags)
    if (searchTerm) {
      productsToFilter = productsToFilter.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // 3. NEW: Filter by selected subcategory
    if (selectedSubcategory) {
        productsToFilter = productsToFilter.filter(p => p.subcategory === selectedSubcategory);
    }

    // 4. Filter by price (your existing logic)
    productsToFilter = productsToFilter.filter(p => p.price <= priceRange);

    // 5. Filter by rating (your existing logic)
    if (rating > 0) {
      productsToFilter = productsToFilter.filter(p => p.rating >= rating);
    }

    return productsToFilter;

  }, [categorySlug, priceRange, rating, searchTerm, selectedSubcategory]);

  const currentCategoryName = categorySlug
    ? MOCK_CATEGORIES.find(cat => cat.slug === categorySlug)?.name || 'Category Not Found'
    : 'All Products';

  return (
    <div className="container mx-auto p-4">
      <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="md:hidden w-full p-3 mb-4 flex justify-between items-center bg-gray-100 border rounded-lg">
        <span className="font-semibold text-lg">{isFilterOpen ? 'Hide Filters' : 'Show Filters'}</span>
        <span className="text-xl">{isFilterOpen ? '▲' : '▼'}</span>
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className={`w-full md:w-1/4 p-4 bg-white rounded-lg shadow ${isFilterOpen ? 'block' : 'hidden'} md:block`}>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Filters</h3>

          {/* --- NEW: Search Bar --- */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2 text-gray-700">Search Products</h4>
            <input
              type="text"
              placeholder="e.g. 'blender', 'smart'"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-amazon-yellow focus:border-amazon-yellow"
            />
          </div>

          {/* --- NEW: Subcategory Filter (only shows if subcategories exist) --- */}
          {availableSubcategories.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold mb-2 text-gray-700">Subcategory</h4>
              <button onClick={() => setSelectedSubcategory('')} className={`w-full text-left p-2 mb-1 rounded-md border ${selectedSubcategory === '' ? 'bg-amazon-yellow text-white border-amazon-yellow' : 'hover:bg-gray-100'}`}>
                All
              </button>
              {availableSubcategories.map(sub => (
                <button key={sub} onClick={() => setSelectedSubcategory(sub)} className={`w-full text-left p-2 mb-1 rounded-md border ${selectedSubcategory === sub ? 'bg-amazon-yellow text-white border-amazon-yellow' : 'hover:bg-gray-100'}`}>
                  {sub}
                </button>
              ))}
            </div>
          )}

          {/* --- EXISTING FILTERS --- */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2 text-gray-700">Price up to: <span className="font-bold">₹{priceRange}</span></h4>
            <input type="range" min="0" max="20000" value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amazon-yellow" />
          </div>
          <div className="mb-6">
            <h4 className="font-semibold mb-2 text-gray-700">Minimum Rating</h4>
            {[4, 3, 2, 1].map(r => (
              <button key={r} onClick={() => setRating(rating === r ? 0 : r)} className={`w-full text-left p-2 mb-1 rounded-md border ${rating === r ? 'bg-amazon-yellow text-white border-amazon-yellow' : 'hover:bg-gray-100'}`}>
                {r} Star{r > 1 ? 's' : ''} & Up
              </button>
            ))}
             <button onClick={() => setRating(0)} className={`w-full text-left p-2 mt-1 rounded-md border ${rating === 0 ? 'bg-gray-200' : 'hover:bg-gray-100'}`}>
                Clear Rating
            </button>
          </div>
        </aside>

        <main className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">{currentCategoryName} ({filteredProducts.length})</h2>
          </div>
          {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
              ))}
              </div>
          ) : (
              <div className="text-center py-10">
                  <p className="text-xl text-gray-600">No products found matching your criteria.</p>
              </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductListingPage;