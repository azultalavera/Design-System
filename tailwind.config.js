/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        // Colores sugeridos para ClicSalud
        clic: {
          primary: '#005fb8',
          secondary: '#607d8b',
          bg: '#f8f9fa'
        }
      }
    },
  },
  plugins: [],
}