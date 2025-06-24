import { AuthProvider } from './context/AuthContext'; // We will use this
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CartProvider } from './context/CartContext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

// This is the only part that changes
root.render(
  <React.StrictMode>
    <AuthProvider> {/* <-- Step 1: Add the opening tag here */}
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider> {/* <-- Step 2: Add the closing tag here */}
  </React.StrictMode>
);