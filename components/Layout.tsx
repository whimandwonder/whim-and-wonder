// src/components/Layout.tsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header'; 
import Footer from './Footer'; 

const Layout: React.FC = () => {
  return (
    // This is the layout structure you had in App.tsx before.
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* --- MODIFICATION --- */}
      {/* Added 'pt-20' (padding-top) to prevent page content from hiding under the new sticky header. */}
      {/* The <Outlet> component renders the current page route (e.g., HomePage, CartPage). */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;