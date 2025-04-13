// tailwind.config.js (for v4)

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Checks index.html at the root
    "./src/**/*.{js,ts,jsx,tsx}", // Checks ALL .js, .ts, .jsx, .tsx files inside src/**/
  ],
  
    theme: {
      extend: {
        // Add your custom colors and other theme extensions here
        colors: {
          'nari-red-primary': 'rgb(164, 36, 27)',
          'nari-blue-primary': 'rgb(115, 115, 191)',
          'nari-red-secondary': 'hsl(9, 69%, 31%)',
          'nari-dark-gray': 'hsl(210, 26%, 30%)',
          'nari-light-bg': 'rgb(197, 211, 211)',
          'nari-deep-gray-text': 'hsl(210, 26%, 30%)',
          'nari-footer-text': 'hsl(0, 0%, 60%)',
          'nari-about-text': 'hsl(0, 0%, 40%)',
        },
        // You can extend other theme properties like fonts, spacing, etc.
      },
    },
  
    // Add any Tailwind plugins you might use
    plugins: [],
  }