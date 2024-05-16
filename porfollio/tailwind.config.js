/** @type {import('tailwindcss').Config} */

// Module exports configuration for Tailwind CSS
module.exports = {
  content: ['./index.html', './src/**/*.{jsx, js}'], // Content paths
  darkMode: 'class',                                  // Dark mode setting
  theme: {
    extend: {
      fontFamily: {
        inter: ['raleway', 'times'], // Extend font family settings
      },
    },
  },
  plugins: [], // List of plugins (currently empty)
};

