const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/header-background-image.png')",
        househelp: "url('/src/assets/house-help-wanted.png')",
        carmechanic: "url('/src/assets/car-mechanic.png')",
        truckdriver: "url('/src/assets/truck-driver.png')",
        technician: "url('/src/assets/IT-technician.png')",
        electrician: "url('/src/assets/electrician.png')",
        gardener: "url('/src/assets/gardener.png')",
      },
      backgroundPosition: {
        'hero-bottom-md': 'bottom 1px right 48px',
        'hero-bottom-sm': 'bottom 1px right -64px',
        'hero-bottom': 'bottom 1px right -126px',
      },
    },
    colors: {
      primary: '#F3E182',
      secondary: '#C8AF2F',
      main: '#482BD9',
      black: colors.black,
      white: colors.white,
      gray: '#E8E8E8',
      indigo: colors.indigo,
      blue: colors.blue,
      green: '#159600',
    },
  },
  plugins: [],
};
