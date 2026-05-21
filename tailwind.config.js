/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#0f766e',
        lagoon: '#14b8a6',
        sunrise: '#f97316',
        sand: '#fff7ed',
        ink: '#17202a',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(15, 118, 110, 0.14)',
        card: '0 16px 40px rgba(23, 32, 42, 0.10)',
      },
    },
  },
  plugins: [],
};
