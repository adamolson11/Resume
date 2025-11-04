module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'hb-blue': '#00bcd4',
        'hb-accent': '#4979ff',
        'noir': {
          50: '#e6eef8',
          100: '#c5d9ef',
          200: '#9fc2e5',
          300: '#79abdb',
          400: '#5c9ad3',
          500: '#3f89cb',
          600: '#3981c6',
          700: '#3176be',
          800: '#296cb8',
          900: '#1b59ac',
          950: '#0b1020'
        }
      }
    }
  },
  plugins: []
};
