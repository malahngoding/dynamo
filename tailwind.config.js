module.exports = {
  mode: 'jit',
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
    screens: {
      'xs': '376px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
