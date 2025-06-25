import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import sitemap from 'vite-plugin-sitemap'; // Make sure this line is here

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Make sure this part is here
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
      '@': '/.',
    }
  }
});