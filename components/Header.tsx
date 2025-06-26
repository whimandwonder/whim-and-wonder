import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// --- MODIFICATION ---
// Added FaBars and FaTimes for a better mobile menu button (open/close icons).
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
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
      // --- ADDITION ---
      // Close the mobile menu after submitting a search.
      setIsMobileMenuOpen(false);
    }
  };
  
  const handleSuggestionClick = (slug: string) => {
    setSearchTerm('');
    setSuggestions([]);
    navigate(`/product/${slug}`);
    // --- ADDITION ---
    // Close the mobile menu after clicking a suggestion.
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    // --- MODIFICATION ---
    // Added classes to make the header sticky, always on top, and with a shadow.
    <header className="bg-amazon-blue text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto">
        {/* --- MODIFICATION: This is the new, cleaner layout for the main header bar --- */}
        <div className="flex items-center justify-between p-4">
          <Link to={ROUTE_PATHS.HOME} className="text-2xl font-bold text-amazon-yellow">Whim & Wonder</Link>

          {/* Search bar now appears here on desktop for a better layout */}
          <div className="hidden md:flex flex-grow mx-4 relative">
            <form onSubmit={handleSearchSubmit} className="flex w-full">
              <input type="text" className="p-2 rounded-l-md flex-grow text-black" placeholder="Search for products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} autoComplete="off" />
              <button type="submit" className="bg-amazon-yellow p-2 rounded-r-md text-black font-semibold">Search</button>
            </form>
            {/* Your suggestion dropdown logic is preserved perfectly */}
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-lg shadow-lg z-10 max-h-80 overflow-y-auto">
                {suggestions.map(product => (
                  <div key={product.id} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleSuggestionClick(product.slug)}>
                    <img src={product.imageUrl} alt={product.name} className="w-10 h-10 object-cover mr-4" />
                    <span className="text-black">{product.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* This container holds the icons on the right side */}
          <div className="flex items-center space-x-4">
              {/* Account link is hidden on mobile */}
              <Link to={ROUTE_PATHS.ACCOUNT} className="hidden md:block text-lg text-amazon-yellow hover:opacity-80">Account</Link>
              
              {/* The Cart is now ALWAYS visible and no longer has text */}
              <Link to={ROUTE_PATHS.CART} className="flex items-center text-lg text-amazon-yellow hover:opacity-80 relative">
                  <FaShoppingCart className="text-2xl" />
                  {itemCount > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {itemCount}
                  </span>
                  )}
              </Link>

              {/* The Burger Button, which now toggles between open/close icons */}
              <button className="md:hidden text-amazon-yellow text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
          </div>
        </div>
      
        {/* --- MODIFICATION: This is the new, cleaner mobile dropdown menu --- */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen p-4 border-t border-amazon-blue-light' : 'max-h-0'}`} style={{ overflow: 'hidden' }}>
          {/* The search bar is now the first item in the mobile menu */}
          <div className="mb-4">
             <form onSubmit={handleSearchSubmit} className="flex w-full">
              <input type="text" className="p-2 rounded-l-md flex-grow text-black" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              <button type="submit" className="bg-amazon-yellow p-2 rounded-r-md text-black font-semibold">Search</button>
            </form>
          </div>
          {/* The links for the mobile menu */}
          <div className="flex flex-col items-start space-y-4">
              <Link to={ROUTE_PATHS.ACCOUNT} onClick={closeMobileMenu} className="text-lg text-amazon-yellow hover:opacity-80 w-full pb-2 border-b border-white/20">Account</Link>
              <Link to={ROUTE_PATHS.PRODUCTS} onClick={closeMobileMenu} className="text-lg text-amazon-yellow hover:opacity-80 w-full">All Products</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;