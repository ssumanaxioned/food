module.exports = {
  content: ['./src/**/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': 'Montserrat, sans-serif',
    },
    screens: {
      'sm': '550px',
      'md': '768px',
      'lg': '990px',
      'xl': '1280px',
    },
    extend: {
      backgroundImage: {
        'banner': "url('/src/Assets/Images/bg.jpg')",
      },
      colors: {
        'primary': '#ff454f',
        'primary-alt': '#0c111c',
        'secondary': {
          '100': '#8b8b8b',
          '200': '#252525b3',
          '300': '#252525'
        }
      }
    },
  },
  plugins: [],
}
