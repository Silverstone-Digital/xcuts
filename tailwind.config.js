/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/*.{html,js}"],
  content: ["*"],
  
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1545px',
      // => @media (min-width: 1530px) { ... }
    },
    fontFamily:{
      'poppins': ['Poppins'],
      'body': ['"Poppins"'],
    },
    container:{
      center:true,
      padding: '1rem'
    },
    extend: {
      fontFamily:{
        'poppins': ['Poppins'],
        poppins:"'Poppins', sans-serif"
      },
      colors:{
        'primary': '#e11e26',
        'black':'#161616',
        'black-1d':'#1d1d1b',
        'neutral' : {
          100: '#eeeeee',
          200: '#f5f5f5',
          300: '#bab9b9',
          400: '#676767',
          500: '#444444',
          600: '#f3f3f3'
        },
      }
    },
  },
  plugins: [],
}

