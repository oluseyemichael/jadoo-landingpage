/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html','./build/js/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'header-img': "url('/build/img/Decore.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1,2)' },
          '100%': { transform: 'scaleY(1)' },
        },
    },
    animation:{
      'open-menu': 'open-menu 0.5s ease-in-out forwards',
    }
  },
  plugins: [],
}
}

