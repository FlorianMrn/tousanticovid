module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: {
        DEFAULT: '#F8F8F8'
      },
      black: {
        DEFAULT: '#1E1E1E'
      },
      grey: {
        DEFAULT: '#7F7F7F',
        light: "#D3D3D3"
      },
      transparent: {
        DEFAULT: 'transparent'
      },
      blue: {
        DEFAULT: '#000091',
        click: '#000091',
        inactif: '#869ECE',
        info : '#0762C8',
        light : '#417DC4',
      },
      red: {
        DEFAULT: '#E1000F',
        error: '#E10600',
      },
      green: {
        success: '#008941',
      },
    },
    fontFamily: {
      marianne: "'Marianne'"
    },
    fontSize: {
      'headline': '40px',
      'title': '30px',
      'subheader': '20px',
      'largeBody': '14px',
      'body': '14px',
      'secondaryBody': '12px',
      'placeholder': '12px',
      'tinyText': '8px',
      'button': '10px',
    },
    extend: {
      backgroundImage: {
        'drapeau': "url('./assets/images/drapeau.svg')",
        'drapeauMob': "url('./assets/images/drapeauMob.svg')",
      },
      animation: {
        gradientx:'gradientx 15s ease infinite',
      },
      keyframes: {
        gradientx: {
            '0%': { backgroundPosition: '0% 50%'},
            '50%': { backgroundPosition: '100% 50%'},
            '100%': { backgroundPosition: '0% 50%'}
        }
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
