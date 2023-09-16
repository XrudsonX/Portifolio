/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fundo: '#171717',
        corTexto: '#F9F9F9',
        verde: '#00DF5E',
        cinza: '#828282',
        cinzaClaro: '#212121',
        borda: '#333333',
      },
      fontFamily: {
        principal: ['DM Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

