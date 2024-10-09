/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        gray : 'rgba(191, 191, 191, 0.5)'
      }
    },
  },
  plugins: [],
}

