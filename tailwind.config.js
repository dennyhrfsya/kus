/** @type {import('tailwindcss').Config} */
export default {
  //  content: ["./src/**/*.{html,js}"],
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        serif: ['"Source Serif 4"', 'serif'],
      },
      colors: {
        boltgunmetal: '#383838',
        dragonfire: '#F66B34',
        margarine: '#F2D639',
        choco: '#78350f',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
