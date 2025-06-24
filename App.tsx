// src/App.tsx - THE FINAL, COMPLETE VERSION

import TestimonialsPage from './pages/TestimonialsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProtectedRoute from './components/auth/ProtectedRoute';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AccountPage from './pages/AccountPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactUsPage from './pages/ContactUsPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import ShippingPolicyPage from './pages/ShippingPolicyPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage'; // <-- IMPORT ADDED

import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              {/* --- Public Routes --- */}
              <Route path="/reviews" element={<TestimonialsPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductListingPage />} />
              <Route path="/products/:categorySlug" element={<ProductListingPage />} />
              <Route path="/product/:slug" element={<ProductDetailPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} /> 
              <Route path="/contact" element={<ContactUsPage />} />
              
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/refund-policy" element={<RefundPolicyPage />} />
              <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
              
              <Route path="/cart" element={<CartPage />} />
              
              {/* --- NEW ROUTE ADDED HERE --- */}
              <Route path="/order-confirmation" element={<OrderConfirmationPage />} />

              {/* --- Protected Routes (they now have access to context) --- */}
              <Route element={<ProtectedRoute />}>
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/account" element={<AccountPage />} />
              </Route>
              
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}
export default App;