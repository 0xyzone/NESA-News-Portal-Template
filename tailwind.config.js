/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  corePlugins:{
preflight: false,
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-background': 'linear-gradient(165deg, rgba(0, 0, 0, 0.75), rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.75))',
      },
      colors: {
        "primary" : "#d97706",
      }
    },
  },
  plugins: [],
}

