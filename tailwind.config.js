/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Using CSS variables for brand colors; minimal Tailwind extension
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 
