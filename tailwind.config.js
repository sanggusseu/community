/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        'light': '#ffffff',
        'dark': '#111827',
        'primary': '#0066ff',
      },
    },
  },
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
};
