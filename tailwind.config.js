/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : '#121926',
        'secondary': '#161D28',
        'gray': '#364152'
      }
    },
  },
  plugins: [],
}