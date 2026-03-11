/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#7f1d1d',
        'secondary': '#f52d05',
        'accent': '#ff6b9d',
        'fresh-green': '#16a34a',
        'leaf': '#84cc16',
        'organic': '#fff5f7',
        'earth': '#8b5a2b',
        'sun': '#ff6b9d',
        'terracotta': '#d2691e',
      },
      fontFamily: {
        'sans': ['Quicksand', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}