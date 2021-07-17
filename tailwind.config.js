const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
    purge: ["./src/**/*.js"],
    // darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
          fontFamily: {
              sans: ["Inter", ...defaultTheme.fontFamily.sans]
          }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }