const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['franklin-gothic-condensed', ...fontFamily.sans],
        serif: ['jaf-lapture-display', ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
