import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
// --- ADDITION ---
// This line was added to import the Toaster component from the library.
import { Toaster } from 'react-hot-toast';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        {/* --- ADDITION --- */}
        {/* This <Toaster /> component is what allows notifications to be displayed. */}
        <Toaster />
        <App />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);