import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
import { ROUTE_PATHS } from '../constants';
import { CustomerInfo, Address } from '../types';

const CheckoutPage: React.FC = () => {
  const { cart, totalAmount, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({ name: '', email: '', phone: '' });
  const [shippingAddress, setShippingAddress] = useState<Address>({ street: '', city: '', state: '', zipCode: '', country: 'India' });
  const [step, setStep] = useState<number>(1);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  
  if (cart.length === 0 && step !== 4) {
    setTimeout(() => navigate(ROUTE_PATHS.HOME), 0);
    return <p>Your cart is empty. Redirecting...</p>;
  }

  const handleInputChange = <T,>(setter: React.Dispatch<React.SetStateAction<T>>) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setter(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const nextStep = () => {
    if (step === 1) {
      if (!customerInfo.name.trim() || !customerInfo.email.trim()) { return alert("Please enter your Full Name and Email Address."); }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(customerInfo.email)) { return alert("Please enter a valid email format."); }
    }
    if (step === 2) {
      if (!shippingAddress.street.trim() || !shippingAddress.city.trim() || !shippingAddress.state.trim() || !shippingAddress.zipCode.trim()) {
        return alert("Please fill in all required shipping address fields.");
      }
    }
    setStep(s => Math.min(s + 1, 4));
  };

  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      document.body.appendChild(script);
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
    });
  };

  // --- THIS IS THE NEW, CORRECTED FUNCTION ---
  const handlePlaceOrder = async () => {
    if (isPlacingOrder) return;
    setIsPlacingOrder(true);

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert('Could not load payment script. Please check your internet connection.');
      setIsPlacingOrder(false);
      return;
    }

    try {
      // Correctly get the API URL from Netlify's environment variables
      const API_URL = 'https://whim-wonder-backend.onrender.com';
      if (!API_URL) {
        throw new Error("API URL is not configured. Please set VITE_API_BASE_URL on Netlify.");
      }

      // Correctly get the Razorpay Key from Netlify's environment variables
      const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID;
      if (!RAZORPAY_KEY) {
        throw new Error("Razorpay Key is not configured. Please set VITE_RAZORPAY_KEY_ID on Netlify.");
      }

      // Call your backend to create a Razorpay order
      const orderResponse = await axios.post(`${API_URL}/create-order`, {
        amount: totalAmount,
      });
      
      const orderData = orderResponse.data;

      const options = {
        key: RAZORPAY_KEY, // Use the key from Netlify
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Whim & Wonder',
        description: 'Order Payment',
        order_id: orderData.id,
        handler: function (response: any) {
          const orderId = `WW-${Date.now()}`;
          const orderDetails = { 
            orderId, 
            totalAmount, 
            razorpay_payment_id: response.razorpay_payment_id 
          };
          clearCart();
          navigate(ROUTE_PATHS.ORDER_CONFIRMATION, { state: orderDetails });
        },
        prefill: {
          name: customerInfo.name,
          email: customerInfo.email,
          contact: customerInfo.phone,
        },
        theme: {
          color: '#F97316',
        },
        modal: {
            ondismiss: function() {
                setIsPlacingOrder(false);
            }
        }
      };
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Order creation failed:', error);
      alert('There was an error creating your order. Please try again.');
      setIsPlacingOrder(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Checkout</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between mb-6 text-sm">
            {['Info', 'Shipping', 'Payment', 'Review'].map((s, index) => (
              <div key={s} className={`flex-1 text-center pb-2 border-b-2 ${step === index + 1 ? 'border-orange-500 text-orange-500 font-semibold' : (step > index + 1 ? 'border-green-500 text-green-500 font-semibold' : 'border-gray-300 text-gray-400')}`}>
                {s} {step > index + 1 && <span className="text-green-500"> ✓</span>}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Customer Information</h3>
              <div><label htmlFor="name" className="block text-sm font-medium">Full Name <span className="text-red-500">*</span></label><input type="text" name="name" id="name" value={customerInfo.name} onChange={handleInputChange(setCustomerInfo)} className="mt-1 block w-full p-2 border rounded-md" /></div>
              <div><label htmlFor="email" className="block text-sm font-medium">Email Address <span className="text-red-500">*</span></label><input type="email" name="email" id="email" value={customerInfo.email} onChange={handleInputChange(setCustomerInfo)} className="mt-1 block w-full p-2 border rounded-md" /></div>
              <div><label htmlFor="phone" className="block text-sm font-medium">Phone Number</label><input type="tel" name="phone" id="phone" value={customerInfo.phone} onChange={handleInputChange(setCustomerInfo)} className="mt-1 block w-full p-2 border rounded-md" /></div>
              <button onClick={nextStep} className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-md">Next</button>
            </div>
          )}

          {step === 2 && (
             <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Shipping Address</h3>
               <div><label htmlFor="street" className="block text-sm font-medium">Street Address <span className="text-red-500">*</span></label><input type="text" name="street" id="street" value={shippingAddress.street} onChange={handleInputChange(setShippingAddress)} className="mt-1 block w-full p-2 border rounded-md" /></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label htmlFor="city" className="block text-sm font-medium">City <span className="text-red-500">*</span></label><input type="text" name="city" id="city" value={shippingAddress.city} onChange={handleInputChange(setShippingAddress)} className="mt-1 block w-full p-2 border rounded-md" /></div>
                <div><label htmlFor="state" className="block text-sm font-medium">State / Province <span className="text-red-500">*</span></label><input type="text" name="state" id="state" value={shippingAddress.state} onChange={handleInputChange(setShippingAddress)} className="mt-1 block w-full p-2 border rounded-md" /></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label htmlFor="zipCode" className="block text-sm font-medium">ZIP / Postal Code <span className="text-red-500">*</span></label><input type="text" name="zipCode" id="zipCode" value={shippingAddress.zipCode} onChange={handleInputChange(setShippingAddress)} className="mt-1 block w-full p-2 border rounded-md" /></div>
              </div>
              <div className="flex justify-between">
                <button onClick={prevStep} className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-md">Back</button>
                <button onClick={nextStep} className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-md">Next</button>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Payment Method</h3>
              <div className="space-y-2">
                <div className="flex items-center p-3 border rounded-md bg-gray-50">
                  <input type="radio" id="razorpay" name="paymentMethod" value="razorpay" checked={true} readOnly className="form-radio h-5 w-5 text-orange-500" />
                  <label htmlFor="razorpay" className="ml-3 font-medium">Secure Payment via Razorpay</label>
                </div>
                <div className="p-4 border rounded-md mt-2 bg-blue-50 text-blue-800">
                  <p className="text-sm">You will proceed to the secure Razorpay gateway where you can use Cards, UPI, Netbanking, and more.</p>
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <button onClick={prevStep} className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-md">Back</button>
                <button onClick={nextStep} className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-md">Next: Review Order</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Review Your Order</h3>
              <div className="bg-gray-50 p-4 rounded-md space-y-2">
                <h4 className="font-semibold">Shipping To:</h4>
                <p>{customerInfo.name}</p>
                <p>{shippingAddress.street}, {shippingAddress.city}, {shippingAddress.state} {shippingAddress.zipCode}</p>
                <button type="button" onClick={() => setStep(2)} className="text-sm text-blue-600 hover:underline">Edit Address</button>
              </div>
              <div className="bg-gray-50 p-4 rounded-md space-y-2">
                <h4 className="font-semibold">Payment Method:</h4>
                <p>Secure Payment via Razorpay</p>
                <button type="button" onClick={() => setStep(3)} className="text-sm text-blue-600 hover:underline">Change Payment</button>
              </div>
              <div className="flex justify-between items-center">
                <button type="button" onClick={prevStep} className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-md">Back</button>
                <button type="button" onClick={handlePlaceOrder} disabled={isPlacingOrder} className="bg-orange-500 text-white font-bold py-3 px-6 rounded-md disabled:bg-gray-400">
                  {isPlacingOrder ? 'Processing...' : 'Place Order'}
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-md h-fit sticky top-24">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Order Summary</h2>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center py-2 border-b text-sm">
              <p className="font-medium">{item.name} <span className="text-xs text-gray-500">x{item.quantity}</span></p>
              <p>₹{(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <div className="mt-4 space-y-2">
            <div className="flex justify-between"><span>Subtotal</span><span>₹{totalAmount.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span className="text-green-600">FREE</span></div>
            <div a className="flex justify-between font-bold text-lg pt-2 border-t"><span>Total</span><span>₹{totalAmount.toFixed(2)}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;