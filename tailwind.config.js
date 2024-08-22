/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': `url('../images/homePageImage.jpg')`,
        'flight-bg': `url('../images/flightImage.jpg')`,
        'place-bg': `url('../images/placeImage.jpg')`,
      },
      colors: {
        'blue-400': '#60a5fa', // Use Tailwind's predefined blue-400 or adjust as needed
      },
      keyframes: {
        'underline-left-to-right': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        'underline-left-to-right': 'underline-left-to-right 0.3s ease-out',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities({
        '.underline-effect': {
          position: 'relative',
          display: 'inline-block',
          overflow: 'hidden',
        },
        '.underline-effect::after': {
          content: '""',
          position: 'absolute',
          left: '0',
          bottom: '0',
          width: '0%',
          height: '2px', // Adjust the height as needed
          backgroundColor: theme('colors.blue-400'),
          transition: 'width 0.3s ease',
        },
        '.underline-effect:hover::after': {
          width: '100%',
        },
      }, ['responsive', 'hover']);
    },
  ],
}



