/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./public/script.js"],
  theme: {
    extend: {
      colors: {
        "legal-primary": "#B68C5A",
      },
      fontFamily: {
        primary: ['"Poppins", sans-serif'],
        secondary: ['"EB Garamond", serif'],
      },
    },
  },
  plugins: [require("daisyui")],
};
