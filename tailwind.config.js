/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./public/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        sand: {
          DEFAULT: "#e8f7f9",
          700: "#b7e6ec",
          900: "#66b9c6",
        },
        ink: "#0f1720",
        forest: "#0f766e",
      },
      boxShadow: {
        soft: "0 10px 40px rgba(15, 23, 32, 0.06)",
      },
    },
  },
  plugins: [],
}
