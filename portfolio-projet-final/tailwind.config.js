/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          dark: '#25282B',
          yellow: '#FDC435',
          gray: '#828282',
          lightBg: '#F9FAFF',
          muted: '#9A9FA8',
        },
      },
      fontFamily: {
        'sans': ['Raleway', 'system-ui', 'sans-serif'],
        'elegant': ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}