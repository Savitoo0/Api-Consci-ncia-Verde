/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // pega tudo de app e pages
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        greenEco: '#2e7d32',
      },
    },
  },
  plugins: [],
}
