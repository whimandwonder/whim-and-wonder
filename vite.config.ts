import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://whimandwonder.in',
      // Tell the sitemap about all your other pages
      dynamicRoutes: [
        '/login',
        '/signup',
        '/cart',
        '/checkout',
        '/account',
        '/contact',
        '/privacy-policy',
        '/refund-policy',
        '/shipping-policy',
        '/testimonials',
        '/products' // Assuming you have a page that lists all products
      ],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
  resolve: {
    alias: {
      '@': '/.',
    }
  }
});