/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["fantasy"],
  },
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ["Rajdhani", "sans-serif"],
      },
      keyframes: {
        "fade-in-left": {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "infinite-scroll": {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        fadeinleft: 'fade-in-left 1s ease-in-out 0.25s 1',
        infinite: 'infinite-scroll 10s linear infinite',
      }
    },
  },
  plugins: [
    require('daisyui'),
    require("@tailwindcss/forms")({
      strategy: 'class', // only generate classes
    })
  ],
}