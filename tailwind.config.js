/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/views/**/*.vue",
    "./src/components/**/*.{vue,ts}",
    "./src/containers/**/*.{vue,ts}",
  ],
  theme: {
    extend: {
      colors: {
        v_white: "#f8f8f8",
        v_orange: "#FC8E2B",
        v_medium_orange: "#FFA042",
        v_light_orange: "#FFB456",
        v_gray: "#242424",
        v_light_gray: "#9D9797",
        v_medium_gray: "#2E2E2E",
        v_dark_gray: "#161616",
      },
      screens: {
        sm: { min: "0px", max: "767px" },
        // => @media (min-width: 200px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px) { ... }

        xl: { min: "1280px" },
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
