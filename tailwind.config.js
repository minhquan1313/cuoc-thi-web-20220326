const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.emerald,
        // secondary: colors.gray,
        neutral: colors.gray,
      },
      fontFamily: {
        sans: ["SVN-Poppins", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        200: "36rem",
      },
    },
  },
  plugins: [],
};
