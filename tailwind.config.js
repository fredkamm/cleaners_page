module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#BAF6EC",
        secondary: "d9dbda",
        tertiary: "#131419",
        accent: {
          DEFAULT: "#4d95a8",
          hover: "#2d545e",
        },
        paragraph: "#949fb0",
        text:"#D155AD",
      },
    },
  },
  plugins: [],
};
