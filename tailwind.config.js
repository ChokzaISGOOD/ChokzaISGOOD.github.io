/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ms: {
          blue: '#0078D4', // Microsoft Blue
          dark: '#242424',
          light: '#f3f2f1',
          gray: '#505050'
        }
      },
      fontFamily: {
        sans: ['Segoe UI', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}