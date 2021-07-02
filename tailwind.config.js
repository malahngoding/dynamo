module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: {
        DEFAULT: "#ffffff",
      },
      black: {
        DEFAULT: "#18191F",
        800: "#474A57",
        600: "#969BAB",
        400: "#9FA4B4",
        200: "#EEEFF4",
        100: "#F4F5F7",
      },
      blue: {
        DEFAULT: "#1947E6",
        800: "#8094FF",
        100: "#E9E7FC",
      },
      pink: {
        DEFAULT: "#FF89BB",
        800: "#FFC7DE",
        100: "#FFF3F8",
      },
      yellow: {
        DEFAULT: "#FFBD12",
        800: "#FFD465",
        100: "#FFF4CC",
      },
      green: {
        DEFAULT: "#00C6AE",
        800: "#61E4C5",
        100: "#D6FCF7",
      },
      red: {
        DEFAULT: "#F95A2C",
        800: "#FF9692",
        100: "#FFE8E8",
      },
    },
    fontWeight: {
      normal: 500,
      bold: 700,
      black: 900,
      extrabold: 800,
    },
    width: {
      '56px': '56px',
      '45px': '45px',
      '125px': '125px',
      '251px': '251px',
      '253px': '253px',
      '255px': '255px',
      '267px': '267px',
      '295px': '295px',
      '296px': '296px',
      '375px': '327px',
      '327px': '327px',
      '375px': '375px',
      '376px': '376px',
      '169px': '169px',
      '302px': '302px',
      '177px': '177px',
    },
    height: {
      '16px': '16px',
      '18px': '18px',
      '24px': '24px',
      '28px': '28px',
      '45px': '45px',
      '56px': '56px',
      '76px': '76px',
      '96px': '96px',
      '68px': '68px',
      '414px': '414px',
      '40px': '40px',
      '60px': '60px',
      '530px': '530px',
      '224px': '224px',
      '478px': '478px',
      '340px': '340px',
      '120px': '120px',
      '106px': '106px',
      '102px': '102px',

    },
    extend: {
      fontFamily: {
        sans: ['Montserrat'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
