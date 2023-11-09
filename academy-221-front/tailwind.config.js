/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
  
    colors:{
      "white": "#ffffff",
      "black": "#000000",
      "green":"#28a745",
      "gris": "#D8D8D8",
      "Azure": "#1e54dd",
      "azure-light":"#6491db"
    },
    extend: {
      backgroundColor: {
        'modal-dark': 'rgba(0, 0, 0, 0.5)', 
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

