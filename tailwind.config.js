/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    layers: ["base", "components", "utilities"],
  },
  theme: {
    extend: {
      screens: {
        desktop: "1130px",
      },

      colors: {
        "primary-color": "#00FFFF",
        "light-green": "rgba(224,255,255,0.5)",
        "dark-green": "#008B8B",
        "light-gray": "#AEAEAE",
      },
    },
  },
  plugins: [],
};
