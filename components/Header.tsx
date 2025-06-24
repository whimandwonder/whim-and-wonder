import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import { ROUTE_PATHS, MOCK_PRODUCTS } from '../constants';
import { Product } from '../types';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useContext(CartContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<Product[]>([]);

  useEffect(() => {
    if (searchTerm.trim().length > 1) {
      const filteredProducts = MOCK_PRODUCTS.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredProducts);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${searchTerm}`);
      setSearchTerm('');
      setSuggestions([]);
    }
  };
  
  const handleSuggestionClick = (slug: string) => {
    setSearchTerm('');
    setSuggestions([]);
    navigate(`/product/${slug}`);
  };

  // --- NEW: A function to close the menu when a link is clicked ---
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-amazon-blue text-white">
      {/* Main Header Bar */}
      <div className="flex flex-wrap items-center justify-between p-2">
        <div className="flex items-center">
          <Link to={ROUTE_PATHS.HOME} className="text-2xl font-bold text-amazon-yellow">Whim & Wonder</Link>
        </div>

        <div className="w-full sm:flex sm:w-auto sm:flex-grow sm:mx-4 mt-2 sm:mt-0 order-3 sm:order-2 relative">
          <form onSubmit={handleSearchSubmit} className="flex w-full">
            <input 
              type="text" 
              className="p-2 rounded-l-md flex-grow text-black" 
              placeholder="Search for products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoComplete="off"
            />
            <button type="submit" className="bg-amazon-yellow p-2 rounded-r-md text-black font-semibold">Search</button>
          </form>

          {suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-lg shadow-lg z-10 max-h-80 overflow-y-auto">
              {suggestions.map(product => (
                <div 
                  key={product.id} 
                  className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(product.slug)}
                >
                  <img src={product.imageUrl} alt={product.name} className="w-10 h-10 object-cover mr-4" />
                  <span className="text-black">{product.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-4 order-2 sm:order-3">
            {/* --- MODIFIED: Links now hidden on smaller screens, they will appear in the new mobile menu --- */}
            <Link to={ROUTE_PATHS.ACCOUNT} className="hidden sm:block text-lg text-amazon-yellow hover:opacity-80">Account</Link>
            <Link to={ROUTE_PATHS.CART} className="hidden sm:flex items-center text-lg text-amazon-yellow hover:opacity-80 relative">
                <FaShoppingCart className="mr-1" />
                <span>Cart</span>
                {itemCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                </span>
                )}
            </Link>
            {/* --- Your Hamburger Button (no changes here) --- */}
            <button className="md:hidden text-amazon-yellow text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>☰</button>
        </div>
      </div>
      
      {/* --- ADDED: The Entire Mobile Menu Block --- */}
      {/* This block is only visible on screens smaller than 'md' and only when isMobileMenuOpen is true */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-start p-4 space-y-3">
            <Link to={ROUTE_PATHS.ACCOUNT} onClick={closeMobileMenu} className="text-lg text-amazon-yellow hover:opacity-80 w-full">Account</Link>
            <Link to={ROUTE_PATHS.CART} onClick={closeMobileMenu} className="flex items-center text-lg text-amazon-yellow hover:opacity-80 relative w-full">
                <FaShoppingCart className="mr-2" />
                <span>Cart ({itemCount})</span>
            </Link>
            {/* Optional: Add other useful links for mobile */}
            <Link to={ROUTE_PATHS.PRODUCTS} onClick={closeMobileMenu} className="text-lg text-amazon-yellow hover:opacity-80 w-full">All Products</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;