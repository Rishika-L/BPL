/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      display: ["Inter", "sans-serif"],
    },
    colors:{

      primary:{
        400:"#3F3F8D",
        800:"#272757",

      },
      secondary:{
        200:"#F5F6FA",
        300:"#3F3F8D0D",
        400:"#D5D5EC",
        800:"#686889"
      },
      tertiary:{
        800:"#A9A9BC"
      },
      red: {
        40: "#ffe5e5",
        50: "#ffcccc",
        100: "#ff9999",
        200: "#ff6666",
        300: "#ff3333",
        400: "#ff1a1a",
        500: "#ff0000",
        600: "#e60000",
        700: "#cc0000",
        800: "#b30000",
        900: "#990000",
        950: "#800000",
      },
      yellow: {
        40: "#fff9db",
        50: "#fff3c4",
        100: "#ffe69a",
        200: "#ffd970",
        300: "#ffcc47",
        400: "#ffbf1e",
        500: "#ffb200",
        550: "#F9FCC8",
        600: "#e6a000",
        700: "#cc8e00",
        800: "#b37c00",
        900: "#996a00",
        950: "#805800",
        960: "#523800",
      },
      green: {
        40: "#e6f9e6",
        50: "#ccf2cc",
        100: "#99e699",
        200: "#66d966",
        300: "#33cc33",
        400: "#1ab31a",
        500: "#00b300",
        600: "#00a000",
        700: "#008d00",
        800: "#007a00",
        900: "#006600",
        950: "#005200",
        960:"#004700"
      },
      error:"#E3020E",
      success:"#3B8524",
      progress:"#0684B2",
      pending:"#FF8B01",
      link:"#0F5DE8",
      white:"#fff"


    },
    fontSize:{
      xs:'.5625rem',
      xsm: '0.625rem',
      sm:'0.725rem',
      md:'0.875rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3.052rem',
    },

    extend: {
      width:{
        '2-1':'.5625rem',
        '15':'3.75rem',
        '30': '7.375rem',

      },
      height:{
        '2-1':'.5625rem',
        '15':'3.75rem',
        '30': '7.375rem',
      },
    },
  },
  plugins: [],
}