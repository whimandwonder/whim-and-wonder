/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}", // Added pages folder
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'amazon-blue': {
          light: '#232F3E',
          DEFAULT: '#131921',
        },
        // --- THIS IS THE NEW, BRIGHTER COLOR ---
        'amazon-yellow': '#FF9900',
      }
    },
  },
  plugins: [],
}