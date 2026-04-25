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
          DEFAULT: "#e9f1fb",
          700: "#a9c3e6",
          900: "#1f4f8a",
        },
        ink: "#08244a",
        forest: "#1f4f8a",
      },
      boxShadow: {
        soft: "0 10px 40px rgba(15, 23, 32, 0.06)",
      },
    },
  },
  plugins: [],
}
