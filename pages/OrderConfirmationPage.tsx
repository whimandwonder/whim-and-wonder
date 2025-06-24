
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ROUTE_PATHS } from '../constants';

const OrderConfirmationPage: React.FC = () => {
  const location = useLocation();
  const { orderId, totalAmount, estimatedDelivery } = location.state || { 
    orderId: `WW-${Date.now()}`, 
    totalAmount: 0, 
    estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) 
  };

  return (
    <div className="container mx-auto py-12 text-center">
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl max-w-2xl mx-auto">
        <div className="mb-6">
          <i className="fas fa-check-circle text-6xl text-green-500"></i>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Thank You for Your Order!</h1>
        <p className="text-gray-600 mb-6 text-lg">Your order has been placed successfully.</p>
        
        <div className="bg-gray-50 p-6 rounded-md text-left space-y-3 mb-8">
          <p className="text-gray-700">
            <span className="font-semibold">Order ID:</span> {orderId}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Total Amount:</span> ₹{Number(totalAmount).toFixed(2)}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Estimated Delivery:</span> {new Date(estimatedDelivery).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <p className="text-gray-600 mb-6">
          You will receive an email confirmation shortly with your order details. 
          You can track your order status in your account.
        </p>

        <div className="space-y-3 md:space-y-0 md:space-x-4">
          <Link 
            to={ROUTE_PATHS.HOME} 
            className="w-full md:w-auto inline-block bg-amazon-yellow text-amazon-DEFAULT font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition duration-200"
          >
            Continue Shopping
          </Link>
          <Link 
            to={ROUTE_PATHS.ACCOUNT} 
            className="w-full md:w-auto inline-block bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-md hover:bg-gray-300 transition duration-200"
          >
            Go to My Account
          </Link>
        </div>
        {/* Placeholder for order tracking option */}
        <div className="mt-8 text-sm text-gray-500">
            <p>Order tracking details will be available soon.</p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;