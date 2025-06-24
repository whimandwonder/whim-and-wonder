import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useAuth } from '../context/AuthContext'; // <-- NEW: Import the auth brain
import { ROUTE_PATHS } from '../constants';
import { CartItem } from '../types';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalAmount, clearCart } = useContext(CartContext);
  const { user } = useAuth(); // <-- NEW: Get the current user status
  const navigate = useNavigate();

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };
  
  const estimatedDeliveryDays = 5;
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + estimatedDeliveryDays);

  if (cart.length === 0) {
    return (
      <div className="text-center py-12">
        <i className="fas fa-shopping-cart text-6xl text-gray-300 mb-4"></i>
        <h2 className="text-3xl font-semibold text-gray-700 mb-2">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Link to={ROUTE_PATHS.PRODUCTS} className="bg-amazon-yellow text-white font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-200">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Your Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3 space-y-4">
          {cart.map((item: CartItem) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex items-start gap-4">
              <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-md"/>
              <div className="flex-grow">
                <Link to={`/product/${item.slug}`} className="text-lg font-semibold text-gray-800 hover:text-amazon-yellow">{item.name}</Link>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-amazon-yellow font-semibold text-lg">₹{item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <label htmlFor={`quantity-${item.id}`} className="text-sm mr-2">Qty:</label>
                  <input type="number" id={`quantity-${item.id}`} value={item.quantity} onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))} min="1" className="w-16 p-1 border rounded-md text-center"/>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-800">₹{(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 text-sm mt-2">
                  <i className="fas fa-trash-alt mr-1"></i> Remove
                </button>
              </div>
            </div>
          ))}
          <button onClick={clearCart} className="text-red-500 hover:text-red-700 font-semibold py-2 px-4 border border-red-500 rounded-md hover:bg-red-50 transition duration-200">
            Clear Cart
          </button>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-md h-fit sticky top-24">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-3">Order Summary</h2>
          <div className="space-y-3 mb-6 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
              <span>₹{totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600">FREE</span>
            </div>
            <div className="flex justify-between font-bold text-xl text-gray-800 pt-3 border-t">
              <span>Total</span>
              <span>₹{totalAmount.toFixed(2)}</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Estimated Delivery: <span className="font-medium">{deliveryDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </p>
          {/* --- THIS IS THE NEW, SMART BUTTON --- */}
          <button 
            onClick={() => {
              if (user) {
                navigate(ROUTE_PATHS.CHECKOUT); // If logged in, go to checkout
              } else {
                alert('Please log in to proceed to checkout.');
                navigate(ROUTE_PATHS.LOGIN); // If not, go to login
              }
            }}
            className="w-full bg-amazon-yellow text-white font-bold py-3 rounded-md hover:opacity-90 transition duration-200"
          >
            Proceed to Checkout
          </button>
          <Link to={ROUTE_PATHS.PRODUCTS} className="block text-center mt-4 text-amazon-yellow hover:underline">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;