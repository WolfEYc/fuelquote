/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
     
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
      colors: {
        'gray-100' : '#424549',
        'gray-200': '#36393e',
        'gray-201': '#2D2F33',
        'gray-300': '#282b30',
        'yellow-orange' : '#FE5A1D',
        'yellow-orange2' : '#FE7316',
      }
    },
  },
  plugins: [],
}
