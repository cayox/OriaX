module.exports = {
  content: ["./index.html", "./js/*.js"],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '2xs': '16rem',
        '4xl': '32rem',
        '5xl': '48rem',
        '6xl': '64rem',
        '7xl': '80rem',
        '8xl': '96rem',
        '9xl': '128rem',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'accent': {
        100: '#EBF7F9',
        200: '#B8E4E9',
        300: '#A6DDE3',
        400: '#95D6DD',
        500: '#82CED7',
        600: '#5DC1CC',
        700: '#2C5F65',
        800: '#18464B',
        900: '#061213',
      },
      'white': '#ffffff',
    },
  }
}

