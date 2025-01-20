/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./public/index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
             colors: {
                'neon-green': '#39FF14', // Definir un color verde fosforescente personalizado
            },
        },
    },
    plugins: [],
  }