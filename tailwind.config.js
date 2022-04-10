module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'primary': {
          300: '#57678f',
          600: '#001a57'
        },
        'secondary': '#ffffff'
      },
      
      backgroundImage: {
        'hero': "url('../public/images/intro.jpg')",
      }
    },
    
  },
  plugins: [],
}