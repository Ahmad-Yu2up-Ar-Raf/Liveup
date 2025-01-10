/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "node_modules/preline/dist/*.js"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "ligth-primary": "#48CFCB",
        "dark-primary": "#229799",
      },
      fontFamily: {
        josefin: ['"Josefin Sans"', "sans-serif"], // Josefin Sans
        anton: ['"Anton"', "sans-serif"], // Anton
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundPosition: {
        "center-top": "center 50%", // Horizontal tengah, vertikal 30%
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("preline/plugin"),
    require("tailwind-scrollbar"),
  ],
};
