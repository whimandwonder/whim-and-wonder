import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import sitemap from 'vite-plugin-sitemap'; // 1. Import the sitemap plugin

// https://vitejs.dev/config/
export default defineConfig({
  // 2. Add the sitemap plugin to your plugins array
  plugins: [
    react(),
    sitemap({
      hostname: 'https://whimandwonder.in',
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
      '@': '/.', // Adjusted for your no-src setup
    }
  }
});