const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Aspekta Variable', ...fontFamily.sans],
      },
      keyframes: {
        'marquee-large': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - 2rem))' },
        },
        'marquee-medium': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - 1.5rem))' },
        },
        'marquee-small': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - 1rem))' },
        },
      },
      animation: {
        'marquee-large': 'marquee-large 30s linear infinite',
        'marquee-medium': 'marquee-medium 30s linear infinite',
        'marquee-small': 'marquee-small 30s linear infinite',
      },
      gridTemplateColumns: {
        project: 'minmax(1rem,1fr) minmax(auto,72rem) minmax(1rem,1fr)',
      },
      boxShadow: {
        cursor:
          '0px 26px 10px rgba(28, 25, 23, 0.01), 0px 15px 9px rgba(28, 25, 23, 0.05), 0px 7px 7px rgba(28, 25, 23, 0.09), 0px 2px 4px rgba(28, 25, 23, 0.1), 0px 0px 0px rgba(28, 25, 23, 0.1)',
      },
    },
  },
  plugins: [],
};
