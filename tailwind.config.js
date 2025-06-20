module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['"Cinzel"', 'serif'],
      },
    },
  },
extend: {
  fontFamily: {
    quick: ['"Quicksand"', 'sans-serif'],
  },
},

  plugins: [],
  theme: {
  extend: {
    scrollBehavior: ['responsive'],
  },
},
theme: {
  extend: {
    fontFamily: {
      tinos: ['"Tinos"', 'serif'],
    },
  },
},


};
