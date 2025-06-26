// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

// Import all your page components
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
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import TestimonialsPage from './pages/TestimonialsPage';

// --- ADDITION ---
// We now import the Layout component that will wrap all our pages.
import Layout from './components/Layout'; 

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* The Routes component is now the top-level element inside Router */}
        <Routes>
          {/* --- MODIFICATION --- */}
          {/* All your page routes are now wrapped inside this special 'Layout' route. */}
          {/* This ensures every page gets the sticky header and footer correctly. */}
          <Route element={<Layout />}>
            
            {/* --- Public Routes --- */}
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/products/:categorySlug" element={<ProductListingPage />} />
            <Route path="/product/:slug" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} /> 
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/reviews" element={<TestimonialsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
            <Route path="/shipping-policy" element={<ShippingPolicyPage />} />
            <Route path="/order-confirmation" element={<OrderConfirmationPage />} />

            {/* --- Protected Routes --- */}
            {/* This nested structure for protected routes is preserved. */}
            <Route element={<ProtectedRoute />}>
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/account" element={<AccountPage />} />
            </Route>
            
            {/* Catch-all 404 Route */}
            <Route path="*" element={<NotFoundPage />} />

          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;