import React, { useState, useContext, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Product } from '../types';
import StarRating from '../components/StarRating';
import { CartContext } from '../context/CartContext';
import { ROUTE_PATHS, MOCK_PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard'; // We need this for the related products
// --- ADDITION ---
// This line was added to use the notification library.
import toast from 'react-hot-toast';

interface ProductDetailPageProps {}

const ProductDetailPage: React.FC<ProductDetailPageProps> = () => {
  const { slug } = useParams<{ slug: string }>();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [quantity, setQuantity] = useState<number>(1);
  const [isExpanded, setIsExpanded] = useState(false); // State for "View More"

  useEffect(() => {
    const foundProduct = MOCK_PRODUCTS.find(p => p.slug === slug);
    setProduct(foundProduct);
    if (foundProduct) {
      setSelectedImage(foundProduct.imageUrl);
      setIsExpanded(false); // Reset expansion state on new product load
    }
    window.scrollTo(0, 0); // Scroll to top when a new product page loads
  }, [slug]);

  if (!product) {
    return <div className="text-center py-10 text-xl text-gray-600">Loading Product...</div>;
  }
  
  const galleryImages = [product.imageUrl, ...(product.images || [])];
  
  const relatedProducts = MOCK_PRODUCTS.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  // --- MODIFICATION ---
  // The handleAddToCart function was updated to use 'toast' instead of 'alert'.
  const handleAddToCart = () => {
    if (!product) return; // Safety check
    addToCart(product, quantity);
    toast.success(`${quantity} x ${product.name} added to cart!`, {
        position: "bottom-center",
    });
  };

  const handleBuyNow = () => {
    if (!product) return; // Safety check
    addToCart(product, quantity);
    navigate(ROUTE_PATHS.CART);
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">
          
          {/* --- MODIFICATION --- 
              Changed md:top-8 to md:top-28 to account for the height of the sticky header.
          */}
          <div className="md:sticky md:top-28 self-start">
            <div className="flex flex-col items-center">
              <img src={selectedImage} alt={product?.name} className="w-full max-w-md h-auto object-contain rounded-lg shadow-md mb-4" style={{maxHeight: '450px'}} />
              {galleryImages.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto p-2 w-full justify-center">
                  {galleryImages.map((img, index) => (
                    <img key={index} src={img} alt={`${product?.name} thumbnail ${index + 1}`} className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${selectedImage === img ? 'border-amazon-yellow' : 'border-transparent hover:border-gray-400'}`} onClick={() => setSelectedImage(img)} />
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* --- RIGHT COLUMN: SCROLLING PRODUCT INFO --- */}
          <div>
            <h1 className="text-xl md:text-2xl font-medium text-gray-800 mb-2 leading-tight">{product.name}</h1>
            
            <p className="text-sm text-gray-500 mb-3">{product.description}</p>
            
            <div className="flex items-center mb-4">
              <StarRating rating={product.rating} />
              <span className="text-sm text-gray-500 ml-2 hover:text-amazon-yellow cursor-pointer">({product.reviews} customer reviews)</span>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-200">
              {product.originalPrice && product.originalPrice > product.price ? (
                <>
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-bold text-red-600">-{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%</span>
                    <span className="text-4xl font-bold text-gray-800">₹{product.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">M.R.P.: <span className="line-through">₹{product.originalPrice.toFixed(2)}</span></p>
                </>
              ) : (
                <span className="text-4xl font-bold text-gray-800">₹{product.price.toFixed(2)}</span>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
              <input type="number" id="quantity" name="quantity" min="1" max={product.stock} value={quantity} onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))} className="w-20 p-2 border border-gray-300 rounded-md focus:ring-amazon-yellow focus:border-amazon-yellow" />
              <span className="ml-2 text-sm text-gray-500">{product.stock > 0 ? `${product.stock} in stock` : 'Out of Stock'}</span>
            </div>

            {product.stock > 0 ? (
              <div className="flex space-x-4 mb-6">
                <button onClick={handleAddToCart} className="flex-1 bg-amazon-yellow text-white font-semibold py-3 px-6 rounded-md hover:opacity-90 transition duration-200">Add to Cart</button>
                <button onClick={handleBuyNow} className="flex-1 bg-orange-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-orange-600 transition duration-200">Buy Now</button>
              </div>
            ) : (<p className="text-red-500 font-semibold text-lg">Currently Out of Stock</p>)}
            
            {product.productDetails && (
              <div className="border-t pt-6">
                <h2 className="text-xl font-bold mb-2 text-gray-800">About This Item</h2>
                <div className={`space-y-4 transition-all duration-300 ease-in-out ${!isExpanded ? 'max-h-40 overflow-hidden relative' : 'max-h-full'}`}>
                  {product.productDetails.map((section, index) => (
                    <div key={index}>
                      <h3 className="text-md font-semibold text-gray-700 mb-2">{section.heading}</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4 text-sm">
                        {section.points.map((point, pointIndex) => <li key={pointIndex}>{point}</li>)}
                      </ul>
                    </div>
                  ))}
                  {!isExpanded && <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>}
                </div>
                <button onClick={() => setIsExpanded(!isExpanded)} className="text-amazon-yellow font-semibold mt-2 hover:underline">
                  {isExpanded ? 'View Less...' : 'View More...'}
                </button>
              </div>
            )}
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="border-t mt-12 pt-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
        
        <div className="border-t mt-12 pt-8">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Additional Information</h2>
            <div className="max-w-md mx-auto text-sm text-gray-600 space-y-3">
            <p><strong>Category:</strong> <Link to={`/products/${product.category.toLowerCase().replace(/\s+/g, '-')}`} className="text-amazon-yellow hover:underline">{product.category}</Link></p>
            {product.subcategory && <p><strong>Subcategory:</strong> <span className="text-gray-800">{product.subcategory}</span></p>}
            {product.tags && product.tags.length > 0 && (
                <div>
                <strong>Tags:</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                    {product.tags.map(tag => <span key={tag} className="bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>)}
                </div>
                </div>
            )}
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductDetailPage;